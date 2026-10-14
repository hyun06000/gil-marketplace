// Read-only, dependency-free distribution integrity check. Never executes the packaged binary.
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {lstat, readFile, readdir} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const prefix = 'plugins/gil-companion-prototype';
const core = `${prefix}/core/darwin-arm64/gil`;
const manifest = `${prefix}/.codex-plugin/plugin.json`;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
export const pins = Object.freeze({version: '0.2.1-preview.4',
  receipt: '2825343531aad40727bdb923e752f2ad59fa6ab2d797ba4dd8dcada379e7324d',
  source: '58659b4615531c02154cad582fc8ce900fe1d70c',
  snapshot: '80a030e9facb239ed7e42b1a511dd2c05f3fb0b36c9d83818c082ef2f284e9e5',
  archive: 'b2c40ec3933a32ac3a74f56910f89555bb6b6428fd6d47959b3913513e47cdb4',
  core: 'e3c1f749189c9c1b3dee7897dbf8f9cd44ac472fd2b082dd956c19087933ea43',
  ui: '306e137986f918d61e0e5e39c73fbfd4aef6e77d334180e78af91a66bbd1381f',
  profile: 'visual-authoring', tools: 24, source_files: 440, migration: 'requires_review',
  binary_origin: 'preserved_from_verified_development_tree; CI provenance review still required'});
const payload = ['.agents/plugins/marketplace.json', manifest, core,
  `${prefix}/skills/gil-companion/SKILL.md`, `${prefix}/LICENSE`,
  `${prefix}/THIRD-PARTY-NOTICES.json`, `${prefix}/THIRD-PARTY-NOTICES.txt`,
  `${prefix}/RUST-STDLIB-NOTICES.html`, 'PREVIEW.md'];
export const files = [...payload, 'release.json', 'README.md', 'AGENTS.md',
  '.gitattributes',
  'evidence/checks.json', 'evidence/update-record.json', 'evidence/SHA256SUMS',
  'checks/verify.mjs', 'checks/verify.test.mjs', 'checks/history.mjs', 'checks/history.test.mjs',
  '.github/workflows/verify.yml'].sort();
const trust = {developer_id: 'not_provided', notarization: 'not_performed',
  clean_machine_install: 'deferred_not_passed', automatic_update: 'not_authorized',
  os_security_override: 'prohibited', publication: 'requires_separate_approval'};
// Image-report (visual-authoring) contract: action surface 2, storage formats 4..5. Format 5 is not
// readable by preview.3; migration of existing projects requires separate review and consent.
const compatibility = {protocol: {min: 1, max: 1}, action_surface: {min: 2, max: 2},
  storage_format: {min: 4, max: 5}, monitor_view_schema: {min: 1, max: 1}, node_detail_schema: {min: 1, max: 1}};

export async function verify(at = root) {
  const found = [];
  async function walk(dir, rel = '') {
    for (const name of await readdir(dir)) {
      if (!rel && name === '.git') continue; // Only Git's own metadata, never arbitrary ignored files.
      const path = join(dir, name), address = rel ? `${rel}/${name}` : name;
      const stat = await lstat(path);
      assert.equal(stat.isSymbolicLink(), false, 'symlinks are not distribution payload');
      if (stat.isDirectory()) await walk(path, address);
      else { assert.ok(stat.isFile()); found.push(address); }
    }
  }
  await walk(at);
  assert.deepEqual(found.sort(), files, 'missing or unexpected distribution file');
  const json = async name => JSON.parse(await readFile(join(at, name), 'utf8'));
  const receiptBytes = await readFile(join(at, 'release.json'));
  assert.equal(hash(receiptBytes), pins.receipt, 'receipt differs from reviewed CI input');
  const receipt = JSON.parse(receiptBytes);
  assert.deepEqual(Object.keys(receipt).sort(), ['binary_origin','channel','compatibility','files','migration',
    'platform','plugin','publishable','runtime_profile','schema','source','trust','version']);
  assert.equal(receipt.schema, 3, 'receipt schema 3 is required for the image-report contract');
  assert.equal(receipt.runtime_profile, pins.profile);
  assert.deepEqual(receipt.compatibility, compatibility);
  assert.equal(receipt.migration, pins.migration);
  assert.equal(receipt.binary_origin, pins.binary_origin);
  assert.equal(receipt.channel, 'preview_unsigned');
  assert.equal(receipt.publishable, false);
  assert.equal(receipt.version, pins.version);
  assert.equal(receipt.platform, 'darwin-arm64');
  assert.equal(receipt.plugin, 'gil-companion-prototype');
  assert.deepEqual(receipt.trust, trust);
  assert.deepEqual(receipt.source, {head: pins.source, dirty: false, files: pins.source_files, snapshot_sha256: pins.snapshot});
  assert.deepEqual(receipt.files.map(f => f.path).sort(), [...payload].sort());
  for (const file of receipt.files) {
    const bytes = await readFile(join(at, file.path));
    assert.equal(hash(bytes), file.sha256, 'payload hash mismatch');
    assert.equal(bytes.length, file.bytes);
    assert.equal(file.mode, file.path === core ? 0o755 : 0o644);
    assert.equal((await lstat(join(at, file.path))).mode & 0o777, file.mode, 'payload mode mismatch');
    assert.ok(!/\/(?:Users|home)\//.test(bytes.toString()), 'developer home path in payload');
  }
  const binary = await readFile(join(at, core));
  assert.equal(hash(binary), pins.core, 'not the pinned CI binary');
  assert.equal(binary.readUInt32LE(0), 0xfeedfacf);
  assert.equal(binary.readUInt32LE(4), 0x0100000c);
  assert.equal(binary.readUInt32LE(12), 2);
  const entry = await json(manifest);
  assert.equal(entry.name, receipt.plugin); assert.equal(entry.version, pins.version);
  assert.equal(entry.skills, './skills/');
  assert.deepEqual(entry.mcpServers, {'gil-companion': {command:'./core/darwin-arm64/gil', args:['mcp','--serve'], cwd:'.'}});
  const catalog = await json('.agents/plugins/marketplace.json');
  assert.equal(catalog.name, 'gil-preview-macos-arm64');
  assert.deepEqual(catalog.plugins, [{name: receipt.plugin, source: {source:'local',path:`./${prefix}`},
    policy: {installation:'AVAILABLE',authentication:'ON_INSTALL'},category:'Productivity'}]);
  const check = await json('evidence/checks.json'), update = await json('evidence/update-record.json');
  assert.deepEqual(Object.keys(check).sort(), ['archive_sha256','channel','limits','profile','publishable',
    'roundtrip','schema','smoke','source','trust','version']);
  assert.equal(check.schema, 1); assert.equal(check.profile, pins.profile, 'checks were not run with the pinned runtime profile');
  assert.deepEqual(check.source, receipt.source); assert.deepEqual(check.trust, trust);
  assert.equal(check.channel, receipt.channel); assert.equal(check.version, pins.version);
  assert.equal(check.publishable, false); assert.equal(check.roundtrip, 'passed');
  assert.equal(check.archive_sha256, pins.archive); assert.equal(check.smoke.passed, true);
  assert.equal(check.smoke.tools, pins.tools, 'tool count differs from the image-report contract');
  assert.equal(check.smoke.ui_sha256, pins.ui);
  assert.deepEqual(check.smoke.core.storage_format, compatibility.storage_format);
  assert.deepEqual(check.smoke.core.action_surface, compatibility.action_surface);
  assert.deepEqual(check.smoke.core.protocol, compatibility.protocol);
  assert.equal(check.smoke.child_path, '/usr/bin:/bin');
  assert.deepEqual(update, {schema:1, plugin:receipt.plugin, platform:'darwin-arm64', version:pins.version,
    source_commit:pins.source, source_snapshot_sha256:pins.snapshot, archive_sha256:pins.archive,
    core_sha256:pins.core, ui_sha256:pins.ui, compatibility, migration:pins.migration});
  assert.equal(await readFile(join(at,'evidence/SHA256SUMS'),'utf8'),
    `${pins.archive}  gil-codex-macos-arm64-${pins.version}.tar.gz\n`);
  return {integrity:'passed', files:files.length, payload_files:payload.length, version:pins.version,
    runtime_profile:pins.profile, tools:pins.tools, migration:pins.migration,
    source_commit:pins.source, core_sha256:pins.core, publishable:false,
    scope:'Static pinned-tree check only; no native execution, installation, fresh-Mac or visible-UI acceptance'};
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.equal(process.argv.length, 2, 'no publish/install options');
  console.log(JSON.stringify(await verify(), null, 2));
}

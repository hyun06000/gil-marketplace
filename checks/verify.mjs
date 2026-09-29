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
export const pins = Object.freeze({version: '0.2.1-preview.2',
  receipt: 'ed43d0d6d758d23bc1b628107fdf927892edcf324fc9ee2787ed21eb869b2f7e',
  source: '77fde0132b5af139e470d3a149b4a132d01fafd2',
  snapshot: 'a20864c47ff94b2736f8ec0fc8881a34aef9ed9210f5a92294dbf9b4b4c1c8e2',
  archive: 'b1b969185e69e9c4e0549d7a37188f05e4ae60c1c9f8edc8d84b36f7b67fc6a8',
  core: '3572786190ec4a8ad3b703ebe5c8ffd9b170a4e6c7da1ea2776abfc12c520a47',
  ui: '0aaf30e3c62d63fdc45919d01ece01c1ea2ac2464bf572e72b4a4d4b87b52688'});
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
const compatibility = {protocol: {min: 1, max: 1}, action_surface: {min: 1, max: 1},
  storage_format: {min: 4, max: 4}, monitor_view_schema: {min: 1, max: 1}, node_detail_schema: {min: 1, max: 1}};

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
  assert.deepEqual(Object.keys(receipt).sort(), ['binary_origin','channel','files','platform','plugin',
    'publishable','schema','source','trust','version']);
  assert.equal(receipt.schema, 2);
  assert.equal(receipt.channel, 'preview_unsigned');
  assert.equal(receipt.publishable, false);
  assert.equal(receipt.version, pins.version);
  assert.equal(receipt.platform, 'darwin-arm64');
  assert.equal(receipt.plugin, 'gil-companion-prototype');
  assert.deepEqual(receipt.trust, trust);
  assert.deepEqual(receipt.source, {head: pins.source, dirty: false, files: 286, snapshot_sha256: pins.snapshot});
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
  assert.deepEqual(check.source, receipt.source); assert.deepEqual(check.trust, trust);
  assert.equal(check.channel, receipt.channel); assert.equal(check.version, pins.version);
  assert.equal(check.publishable, false); assert.equal(check.roundtrip, 'passed');
  assert.equal(check.archive_sha256, pins.archive); assert.equal(check.smoke.passed, true);
  assert.equal(check.smoke.tools, 17); assert.equal(check.smoke.ui_sha256, pins.ui);
  assert.equal(check.smoke.child_path, '/usr/bin:/bin');
  assert.deepEqual(update, {schema:1, plugin:receipt.plugin, platform:'darwin-arm64', version:pins.version,
    source_commit:pins.source, source_snapshot_sha256:pins.snapshot, archive_sha256:pins.archive,
    core_sha256:pins.core, ui_sha256:pins.ui, compatibility, migration:'none'});
  assert.equal(await readFile(join(at,'evidence/SHA256SUMS'),'utf8'),
    `${pins.archive}  gil-codex-macos-arm64-${pins.version}.tar.gz\n`);
  return {integrity:'passed', files:files.length, payload_files:payload.length, version:pins.version,
    source_commit:pins.source, core_sha256:pins.core, publishable:false,
    scope:'Static pinned-tree check only; no native execution, installation, fresh-Mac or visible-UI acceptance'};
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.equal(process.argv.length, 2, 'no publish/install options');
  console.log(JSON.stringify(await verify(), null, 2));
}

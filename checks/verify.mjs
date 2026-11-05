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
export const pins = Object.freeze({
  "version": "0.2.1-preview.21",
  "receipt": "3fe97e51b8583fc8779da40068c93b7b0cd2acad28c57dfe59dbb1a0e86d3765",
  "source": "74e6c2d024abd9a23ca43c91b1635997b815f1a1",
  "snapshot": "5448be711f75ddb4112387a6b577fe31e6e9fecce25557f65b9c44354f4b815b",
  "archive": "30661f0748ea40476f7714f5496ba329e61ee2439c0eeaa956412eb3b1fb7bd3",
  "core": "3f1b4777abe581c717e7314b0f78cfd6918d61b614b3af4c033b81db7a7ed7e6",
  "ui": "56a42d5fb569105237adb6c28018cf26b142352cc0c76ad652789ead46895426",
  "profile": "approved-plan",
  "tools": 33,
  "source_files": 723,
  "migration": "requires_review",
  "binary_origin": "preserved_from_verified_development_tree; CI provenance review still required"
});
const payload = ['.agents/plugins/marketplace.json', '.claude-plugin/marketplace.json',
  `${prefix}/.claude-plugin/plugin.json`, manifest, core,
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
// Explicit approved-plan + visual-authoring test contract; new projects use format 7.
// Existing projects are not migrated. Downgrading a Plugin never converts records.
const compatibility = {protocol: {min: 1, max: 1}, action_surface: {min: 2, max: 2},
  storage_format: {min: 4, max: 7}, monitor_view_schema: {min: 1, max: 1}, node_detail_schema: {min: 1, max: 1}};

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
  assert.equal(receipt.schema, 3, 'receipt schema 3 is required for the approved-plan contract');
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
  const claude = await json(`${prefix}/.claude-plugin/plugin.json`);
  assert.equal(claude.name, receipt.plugin); assert.equal(claude.version, pins.version);
  assert.deepEqual(claude.mcpServers, {'gil-companion': {
    command:'${CLAUDE_PLUGIN_ROOT}/core/darwin-arm64/gil', args:['mcp','--serve'], cwd:'${CLAUDE_PLUGIN_ROOT}'}});
  const claudeCatalog = await json('.claude-plugin/marketplace.json');
  assert.equal(claudeCatalog.name, catalog.name);
  assert.equal(claudeCatalog.plugins.length, 1);
  assert.equal(claudeCatalog.plugins[0].name, receipt.plugin);
  assert.equal(claudeCatalog.plugins[0].source, `./${prefix}`);
  const check = await json('evidence/checks.json'), update = await json('evidence/update-record.json');
  assert.deepEqual(Object.keys(check).sort(), ['archive_sha256','channel','limits','profile','publishable',
    'roundtrip','schema','smoke','source','trust','version']);
  assert.equal(check.schema, 1); assert.equal(check.profile, pins.profile, 'checks were not run with the pinned runtime profile');
  assert.deepEqual(check.source, receipt.source); assert.deepEqual(check.trust, trust);
  assert.equal(check.channel, receipt.channel); assert.equal(check.version, pins.version);
  assert.equal(check.publishable, false); assert.equal(check.roundtrip, 'passed');
  assert.equal(check.archive_sha256, pins.archive); assert.equal(check.smoke.passed, true);
  assert.equal(check.smoke.tools, pins.tools, 'tool count differs from the approved-plan contract');
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

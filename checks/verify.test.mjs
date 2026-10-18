import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {chmod, copyFile, mkdir, mkdtemp, readFile, rm, symlink, unlink, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {dirname, join} from 'node:path';
import {files, root, verify} from './verify.mjs';

async function fixture(t) {
  const at = await mkdtemp(join(tmpdir(), 'gil-dist-integrity-'));
  t.after(() => rm(at, {recursive:true, force:true})); // Exact test-owned directory only.
  for (const name of files) { await mkdir(dirname(join(at,name)),{recursive:true}); await copyFile(join(root,name),join(at,name)); }
  return at;
}
test('reviewed tree passes without executing the payload', async () => {
  const result = await verify(); assert.equal(result.publishable,false); assert.equal(result.payload_files,9);
});
test('changed binary is rejected', async t => {
  const at = await fixture(t); await writeFile(join(at,'plugins/gil-companion-prototype/core/darwin-arm64/gil'),'changed');
  await assert.rejects(verify(at));
});
test('lost executable permission is rejected', async t => {
  const at = await fixture(t); await chmod(join(at,'plugins/gil-companion-prototype/core/darwin-arm64/gil'),0o644);
  await assert.rejects(verify(at));
});
test('missing legal notice is rejected', async t => {
  const at = await fixture(t); await unlink(join(at,'plugins/gil-companion-prototype/LICENSE')); await assert.rejects(verify(at));
});
test('unrelated file or Project record is rejected even if untracked', async t => {
  const at = await fixture(t); await mkdir(join(at,'.gil')); await writeFile(join(at,'.gil/state.yaml'),'synthetic');
  await assert.rejects(verify(at));
});
test('symlinked receipt is rejected', async t => {
  const at = await fixture(t); await unlink(join(at,'release.json')); await symlink(join(root,'release.json'),join(at,'release.json'));
  await assert.rejects(verify(at));
});
test('rewriting a receipt cannot promote trust or publication', async t => {
  const at = await fixture(t), path = join(at,'release.json'), r = JSON.parse(await readFile(path));
  r.publishable = true; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('altered Skill plus rewritten checksum cannot impersonate the reviewed payload', async t => {
  const at = await fixture(t), name = 'plugins/gil-companion-prototype/skills/gil-companion/SKILL.md';
  const bytes = Buffer.from('unreviewed instructions'); await writeFile(join(at,name),bytes);
  const path = join(at,'release.json'), r = JSON.parse(await readFile(path));
  Object.assign(r.files.find(f=>f.path===name),{bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});
  await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('source provenance mismatch is rejected', async t => {
  const at = await fixture(t), path = join(at,'evidence/checks.json'), r = JSON.parse(await readFile(path));
  r.source.dirty = true; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('update record cannot silently change compatibility', async t => {
  const at = await fixture(t), path = join(at,'evidence/update-record.json'), r = JSON.parse(await readFile(path));
  r.compatibility.storage_format.max = 6; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('update record cannot downgrade the image-report contract to the old surface', async t => {
  const at = await fixture(t), path = join(at,'evidence/update-record.json'), r = JSON.parse(await readFile(path));
  r.compatibility.action_surface = {min:1, max:1}; r.compatibility.storage_format = {min:4, max:4};
  await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('update record cannot claim migration is unnecessary', async t => {
  const at = await fixture(t), path = join(at,'evidence/update-record.json'), r = JSON.parse(await readFile(path));
  r.migration = 'none'; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('update record cannot point at a different Core or UI', async t => {
  for (const key of ['core_sha256', 'ui_sha256', 'archive_sha256']) {
    const at = await fixture(t), path = join(at,'evidence/update-record.json'), r = JSON.parse(await readFile(path));
    r[key] = '0'.repeat(64); await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
  }
});
test('checks from the default runtime profile cannot stand in for visual-authoring', async t => {
  const at = await fixture(t), path = join(at,'evidence/checks.json'), r = JSON.parse(await readFile(path));
  r.profile = 'default'; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('checks with the old 17-tool surface are rejected', async t => {
  const at = await fixture(t), path = join(at,'evidence/checks.json'), r = JSON.parse(await readFile(path));
  r.smoke.tools = 17; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('checks whose Core reports the old storage range are rejected', async t => {
  const at = await fixture(t), path = join(at,'evidence/checks.json'), r = JSON.parse(await readFile(path));
  r.smoke.core.storage_format.max = 4; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('checks with a different UI or archive hash are rejected', async t => {
  for (const mutate of [r => { r.smoke.ui_sha256 = '0'.repeat(64); }, r => { r.archive_sha256 = '0'.repeat(64); }]) {
    const at = await fixture(t), path = join(at,'evidence/checks.json'), r = JSON.parse(await readFile(path));
    mutate(r); await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
  }
});
test('a rewritten schema-2 receipt without the image-report contract is rejected by the receipt hash pin', async t => {
  // Any rewrite of release.json, including dropping runtime_profile/compatibility/migration and
  // reverting schema to 2, changes its bytes and fails the pinned receipt hash before field checks run.
  const at = await fixture(t), path = join(at,'release.json'), r = JSON.parse(await readFile(path));
  delete r.runtime_profile; delete r.compatibility; delete r.migration; r.schema = 2;
  await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});
test('reviewed tree reports the pinned image-report contract', async () => {
  const result = await verify();
  assert.equal(result.version, '0.2.1-preview.5'); assert.equal(result.runtime_profile, 'visual-authoring');
  assert.equal(result.tools, 24); assert.equal(result.migration, 'requires_review');
});

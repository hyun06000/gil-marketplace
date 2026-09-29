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
  r.compatibility.storage_format.max = 5; await writeFile(path,JSON.stringify(r)); await assert.rejects(verify(at));
});

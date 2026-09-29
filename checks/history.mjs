// Read-only publication-history guard. Does not inspect or rewrite legal attribution files.
import {execFileSync} from 'node:child_process';
import {realpathSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const allowed = email => /^(?:\d+\+)?[A-Za-z0-9-]+@users\.noreply\.github\.com$/.test(email)
  || email === 'noreply@github.com';
const fail = message => { throw new Error(message); };

function inspect(bytes, kind) {
  const text = bytes.toString('utf8');
  const header = text.split('\n\n', 1)[0];
  for (const field of kind === 'commit' ? ['author', 'committer'] : ['tagger']) {
    const rows = header.split('\n').filter(line => line.startsWith(`${field} `));
    if (rows.length !== 1) fail(`Missing or ambiguous ${kind} identity`);
    const match = rows[0].match(/^[a-z]+ .* <([^<>]+)> \d+ [+-]\d{4}$/);
    if (!match || !allowed(match[1])) fail(`Non-no-reply ${kind} identity; values omitted`);
  }
  // Covers message/trailer addresses too; raw objects bypass .mailmap substitutions.
  for (const match of text.matchAll(/[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?/g)) {
    if (!allowed(match[0])) fail(`${kind} contains a non-no-reply email; values omitted`);
  }
}

export function verifyHistory(at = root) {
  const git = (...args) => {
    try { return execFileSync('git', ['-C', at, ...args], {maxBuffer:20*1024*1024, stdio:['ignore','pipe','pipe']}); }
    catch { fail('Unable to inspect Git history; command output omitted'); }
  };
  if (realpathSync(git('rev-parse', '--show-toplevel').toString().trim()) !== realpathSync(at))
    fail('Expected the distribution repository root');
  if (git('rev-parse', '--is-shallow-repository').toString().trim() !== 'false')
    fail('Shallow history cannot establish publication privacy');
  const commits = git('rev-list', '--all').toString().trim().split('\n').filter(Boolean);
  if (!commits.length) fail('No reachable commits to audit');
  for (const id of commits) inspect(git('cat-file', 'commit', id), 'commit');
  const tags = new Set();
  for (let id of git('for-each-ref', '--format=%(objectname)', 'refs/tags').toString().trim().split('\n').filter(Boolean)) {
    while (git('cat-file', '-t', id).toString().trim() === 'tag') {
      if (tags.has(id)) break;
      tags.add(id);
      const raw = git('cat-file', 'tag', id); inspect(raw, 'tag');
      const next = raw.toString().match(/^object ([a-f0-9]{40,64})\n/);
      if (!next) fail('Malformed tag object');
      id = next[1];
    }
  }
  return {history:'passed', commits:commits.length, annotated_tags:tags.size,
    scope:'Fetched reachable refs and raw commit/tag metadata only; not hidden server refs, file contents or publication approval'};
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.length !== 2) fail('No mutation or publishing options');
    console.log(JSON.stringify(verifyHistory(), null, 2));
  } catch (error) {
    // All controlled failures omit addresses and paths; do not print a stack or arbitrary Git stderr.
    const safe = /^(Missing or ambiguous |Non-no-reply |commit contains |tag contains |Unable to inspect |Expected the distribution |Shallow history |No reachable |Malformed tag |No mutation )/;
    console.error(safe.test(error.message) ? error.message : 'History inspection failed; details omitted');
    process.exitCode = 1;
  }
}

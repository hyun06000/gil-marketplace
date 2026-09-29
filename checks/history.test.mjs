import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync, rmSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {verifyHistory} from './history.mjs';

const clean = '123+synthetic@users.noreply.github.com';
const privateEmail = 'synthetic@example.invalid';
const env = {...process.env, GIT_AUTHOR_NAME:'Synthetic', GIT_AUTHOR_EMAIL:clean,
  GIT_COMMITTER_NAME:'Synthetic', GIT_COMMITTER_EMAIL:clean};
function fixture(t) {
  const at = mkdtempSync(join(tmpdir(),'gil-history-test-'));
  t.after(() => rmSync(at,{recursive:true,force:true})); // Exact test-owned directory only.
  const git = (args, overrides={}) => execFileSync('git',['-C',at,...args],
    {env:{...env,...overrides},stdio:['ignore','pipe','pipe']});
  git(['init','--initial-branch=main']);
  git(['-c','commit.gpgsign=false','commit','--allow-empty','-m','Initial synthetic history']);
  return {at,git};
}
const commit = (git, message='Synthetic change', overrides={}) =>
  git(['-c','commit.gpgsign=false','commit','--allow-empty','-m',message],overrides);
function refuses(at) {
  assert.throws(()=>verifyHistory(at), error => {
    assert.ok(!error.message.includes(privateEmail));
    assert.ok(!error.message.includes(at));
    return /non-no-reply|Non-no-reply/.test(error.message);
  });
}

test('no-reply history and GitHub service merger pass', t=>{
  const {at,git}=fixture(t); commit(git,'Service merge',{GIT_COMMITTER_EMAIL:'noreply@github.com'});
  assert.equal(verifyHistory(at).commits,2);
});
test('private author is rejected without printing values', t=>{
  const {at,git}=fixture(t); commit(git,'Author check',{GIT_AUTHOR_EMAIL:privateEmail}); refuses(at);
});
test('private committer is rejected even when author is no-reply', t=>{
  const {at,git}=fixture(t); commit(git,'Committer check',{GIT_COMMITTER_EMAIL:privateEmail}); refuses(at);
});
test('message and co-author trailer cannot leak a private address', t=>{
  const {at,git}=fixture(t); commit(git,`Synthetic change\n\nCo-authored-by: Synthetic <${privateEmail}>`); refuses(at);
});
test('a private ancestor on another reachable branch is checked', t=>{
  const {at,git}=fixture(t); git(['switch','-c','held']); commit(git,'Held',{GIT_AUTHOR_EMAIL:privateEmail});
  git(['switch','main']); refuses(at);
});
test('mailmap cannot disguise raw private metadata', t=>{
  const {at,git}=fixture(t); commit(git,'Private raw identity',{GIT_AUTHOR_EMAIL:privateEmail});
  writeFileSync(join(at,'.mailmap'),`Synthetic <${clean}> Synthetic <${privateEmail}>\n`);
  refuses(at);
});
test('annotated tagger identity is checked', t=>{
  const {at,git}=fixture(t); git(['-c','tag.gpgsign=false','tag','-a','test-tag','-m','Synthetic tag'],{GIT_COMMITTER_EMAIL:privateEmail});
  refuses(at);
});
test('nested annotated tags and lightweight tags pass with no-reply identities', t=>{
  const {at,git}=fixture(t); git(['-c','tag.gpgsign=false','tag','-a','inside','-m','Synthetic inner']);
  git(['-c','tag.gpgsign=false','tag','-a','outside','inside','-m','Synthetic outer']);
  git(['tag','light']); assert.equal(verifyHistory(at).annotated_tags,2);
});
test('shallow checkout cannot claim complete history review', t=>{
  const {at,git}=fixture(t); writeFileSync(join(at,'.git','shallow'),git(['rev-parse','HEAD']));
  assert.throws(()=>verifyHistory(at),/Shallow history/);
});

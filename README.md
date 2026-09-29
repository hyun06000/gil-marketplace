# GIL marketplace — private publication preparation

This repository contains a reviewed, prebuilt **Codex / macOS Apple Silicon** Plugin candidate.
It is not the source repository, a public release, or a Plugins Directory listing.
Source and contracts: [hyun06000/gil](https://github.com/hyun06000/gil).

This clean publication history starts independently; previous private acceptance commits are not
ancestors. The original private audit repository and existing pinned installation are preserved.
Each reviewed payload is copied byte-for-byte from its versioned source CI candidate, not rebuilt
or renamed here. Updating a candidate also updates its exact receipt and review pins.
Preparing this repository does not register it in a Host or replace an installed marketplace source.

## Candidate

- Version: `0.2.1-preview.2`; Plugin: `gil-companion-prototype`.
- Marketplace: `gil-preview-macos-arm64`; existing identity is preserved.
- Source commit: `77fde0132b5af139e470d3a149b4a132d01fafd2` ([source PR #7](https://github.com/hyun06000/gil/pull/7)).
- Build: [source CI 36566086605](https://github.com/hyun06000/gil/actions/runs/36566086605).
- Original archive SHA-256: `b1b969185e69e9c4e0549d7a37188f05e4ae60c1c9f8edc8d84b36f7b67fc6a8`.
- Exact payload receipt: [release.json](release.json); original CI records: [evidence](evidence).

Source PR #7 merged as `6c59b45bbe82b4abf21707c75c8c5015a6452612`; its Git tree is identical
to the CI source commit above. Provenance continues to name the commit actually built by CI.
Compared with preview.1, installed Core, embedded UI, licenses and marketplace identity are unchanged.
The Skill now explicitly treats fullscreen MCP App as the default and Companion as optional;
preview version labels and evidence change with it. No installed runtime is rebuilt for this update.

The last accepted preview.1 remains available at immutable marketplace commit
`e63963db63f0bfaf11be9d7939873e7a31fe05be`. Keep that ref and its receipt as the rollback target;
do not replace preview.1 bytes in place. Update/rollback compatibility checks do not by themselves
prove installation, saved-state preservation or visible Host acceptance.

The original archive is not duplicated in Git. Its checksum records the reviewed CI input, not the bytes
of a later GitHub source ZIP. The Git tree preserves the receipt's individual bytes and executable bit.
The archive had nine payload files plus its receipt; README, checks and evidence are distribution
review material and are not installed inside the Plugin.
`.gitattributes` disables line-ending normalization for payload/evidence and preserves upstream license
whitespace verbatim; the integrity check would reject any cleanup that changed those bytes.

## Trust and support limits

Read [PREVIEW.md](PREVIEW.md) before considering installation. There is **no Apple Developer ID
signature or notarization**. Ad-hoc signing is present. Fresh-Mac installation is deferred, not passed.
Do not disable Gatekeeper, remove quarantine or edit an installed cache to bypass an error.
Hashes establish consistency, not publisher authentication or an Apple malware check.

The Plugin contains Rust Core, the MCP server and Monitor UI. Its runtime does not require Node, npm,
Cargo, Homebrew or a separate Companion app. Claude work sessions, Windows and Intel Macs are not
accepted targets of this preview. Tool success is not proof that fullscreen is visibly working.
Removing a Plugin must never delete a user's Project or `.gil` records.

## Acceptance and publication boundaries

This private repository is for remote-clone and installation-route acceptance. There is no public
install command or release tag yet. Registering a Git marketplace is separate from publication in
the universal Plugins Directory. Do not replace a user's existing configured marketplace without approval.

Use a reviewed immutable Git commit when testing the remote source; do not track a moving branch for
automatic unsigned updates. Current installed Plugin replacement, source/distribution visibility changes,
public tags/releases and marketplace publication require separate approval.

All changes after GitHub's initial README commit go through topic branches and pull requests. Private
repository protection is not enforceable under the current plan; this is an operating rule, not a claim
of server enforcement. No force push or history rewriting. Existing source/runtime licenses remain in
`plugins/gil-companion-prototype/` without alteration.

Maintainer CI runs `node --test checks/verify.test.mjs` and `node checks/verify.mjs`. It validates the
pinned tree and evidence without executing the macOS payload. Native MCP smoke after a fresh remote clone
is a separate macOS check using the reviewed source harness; neither check replaces Host UI acceptance.

History checks (`node --test checks/history.test.mjs`, `node checks/history.mjs`) require a full checkout
and inspect raw author/committer/tagger metadata plus message email addresses across fetched reachable
refs. Only GitHub no-reply identities are allowed. Errors omit the rejected values. A mailmap does not
remove raw metadata, and a shallow checkout cannot establish privacy. This does not inspect hidden
server refs or change upstream attribution/license texts. Repository-wide contents and GitHub surfaces
still need a separate publication audit.

# GIL marketplace — private publication preparation

This repository contains a reviewed, prebuilt **Codex / macOS Apple Silicon** Plugin candidate.
It is not the source repository, a public release, or a Plugins Directory listing.
Source and contracts: [hyun06000/gil](https://github.com/hyun06000/gil).

This clean publication history starts independently; previous private acceptance commits are not
ancestors. The original private audit repository and existing pinned installation are preserved.
The reviewed payload below is copied byte-for-byte, not rebuilt, renamed or version-bumped.
Only maintainer documentation, CI and a raw Git identity guard differ from the earlier staging tree.
Preparing this repository does not register it in a Host or replace an installed marketplace source.

## Candidate

- Version: `0.2.1-preview.1`; Plugin: `gil-companion-prototype`.
- Marketplace: `gil-preview-macos-arm64`; existing identity is preserved.
- Source commit: `da7fa6f66fefc59d21b0297ed61990ed366ef1bd` (source PR #3).
- Build: [source CI 36405273140](https://github.com/hyun06000/gil/actions/runs/36405273140).
- Original archive SHA-256: `063ac763eac73e9fcbd36b44fb45d48f1fc89aa8c8aea89d276579006e99f782`.
- Exact payload receipt: [release.json](release.json); original CI records: [evidence](evidence).

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

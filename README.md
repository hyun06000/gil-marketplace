# GIL marketplace — unsigned preview

Install the reviewed, prebuilt **Codex / macOS Apple Silicon** Plugin, `0.2.1-preview.2`.
This is an opt-in unsigned preview, not a stable release or a universal Plugins Directory listing.
Source and contracts: [hyun06000/gil](https://github.com/hyun06000/gil).

## Install with Codex

**No separate Companion, Node, npm, Cargo or Homebrew installation is required.**
There is no Apple Developer ID signature or notarization, and installation on a fresh Mac is unverified.
If macOS blocks execution, stop; do not disable security or remove quarantine.

Ask Codex:

> Install GIL unsigned preview 0.2.1-preview.2 using the official Plugin management commands.
> Register https://github.com/hyun06000/gil-marketplace.git pinned to
> 076bb49719ffd94225c2c0adf479607e42fb09e2, then install
> gil-companion-prototype@gil-preview-macos-arm64.
> If GIL is already installed, check its source/version and ask before replacing it.
> Do not initialize or modify my project.

Confirm the installation when prompted, then open a **new Codex conversation** and select your folder.
For a new project say “지금 폴더에서 GIL 프로젝트를 시작해 줘”. For an existing project say
“기록을 바꾸지 말고 GIL Monitor를 열어 줘”. Fullscreen with a horizontal graph is the default;
if the Host does not open it automatically, click **모니터 펼치기**. Click a node to inspect its report.
Tool success alone does not prove the screen is visible.

[Detailed install/recovery guide](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md)
· [versioned release](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.2)
· [support](https://github.com/hyun06000/gil/blob/main/SUPPORT.md)
· [private vulnerability reporting](https://github.com/hyun06000/gil/security/advisories/new).

For an Agent using the Codex CLI supplied by the app (not a prerequisite for users):

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref 076bb49719ffd94225c2c0adf479607e42fb09e2 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Use official Plugin management for updates/removal. Do not track moving `main` for unsigned automatic
updates, edit caches, delete `.gil`, or run `gil restore` to downgrade the Plugin. Prior verified version:
preview.1 at `e63963db63f0bfaf11be9d7939873e7a31fe05be`. Ask before switching an existing registration.
Official preview.2 → preview.1 → preview.2 recovery and Project preservation passed on the existing Mac.
GIL records stay local; tool responses are shared with the selected Host/AI conversation under its policies.

## Provenance

This clean publication history starts independently; previous private acceptance commits are not
ancestors. The original private audit repository and existing pinned installation are preserved.
Each reviewed payload is copied byte-for-byte from its versioned source CI candidate, not rebuilt
or renamed here. Updating a candidate also updates its exact receipt and review pins.
Reading this repository does not register it in a Host or replace an installed marketplace source.

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

Public anonymous HTTPS download and the official Codex HTTPS installation route were verified on
2026-09-30 at the pinned ref. Native tools, embedded UI bytes, saved-scope restoration and Project
preservation passed. The owner separately accepted preview.2 fullscreen and node details before
publication; downloading identical bytes is not a new human visual observation or a fresh-Mac test.

The receipt's `publishable:false` and original PREVIEW document record build-time gates. They are
preserved byte-for-byte; publication approval and public-route evidence live in
[the source checkpoint](https://github.com/hyun06000/gil/blob/main/distribution/codex/PREVIEW-2-PUBLICATION-20260930.md)
and the versioned release, not a hand-edited receipt.

All changes after GitHub's initial README commit go through topic branches and pull requests. Main now
requires PR + `pinned-payload` CI, including for admins; force push and deletion are disabled. Private
Vulnerability Reporting is enabled. No force push or history rewriting. Existing source/runtime licenses remain in
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

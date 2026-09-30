# GIL marketplace — unsigned preview

Prebuilt **Codex / macOS Apple Silicon / 0.2.1-preview.3**. Opt-in unsigned preview,
not a stable release or a universal Plugins Directory listing.
Source: [hyun06000/gil](https://github.com/hyun06000/gil).

## Install with Codex

No separate Companion, Node, npm, Cargo or Homebrew installation is required.
Apple Developer ID signing and notarization are not provided. Fresh-Mac acceptance is pending.
If macOS blocks execution, stop; never disable security, remove quarantine or edit caches.

Ask Codex:

> Install GIL unsigned preview 0.2.1-preview.3 through official Plugin management.
> Register https://github.com/hyun06000/gil-marketplace.git at fixed tag v0.2.1-preview.3,
> then install gil-companion-prototype@gil-preview-macos-arm64.
> Confirm the tag exists and installed version is preview.3.
> If already installed, check its source/version and ask before replacing it.
> Do not initialize or modify my project.

The tag is available only after the [versioned release](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.3)
is published. Never substitute moving main if it is unavailable.

After installation, open a **new conversation**, select an empty test folder and say:
**“지금 폴더에서 GIL 프로젝트를 시작해 줘.”**
The Skill connects start, Monitor and the first Interview question.
The App requests horizontal fullscreen once; Host refusal and intentional inline choice are respected.
Check the actual graph and first node. Tool success alone is not visual success.
For an existing project: “기록을 바꾸지 말고 GIL Monitor를 열어 줘”.

Agent commands using the CLI bundled with Codex:

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.3 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Existing registrations require inspection and approval before replacement.
Records stay in the chosen folder; tool responses enter the selected Host/AI conversation.
GIL provides no cloud upload service. Never share private project records in bug reports.

## Exact provenance

- Source: `fc3a59c4a3ada98666f96256e5f8f53aeaf46b83` (merged source PRs #9 and #10).
- CI: [36662221990](https://github.com/hyun06000/gil/actions/runs/36662221990).
- Original archive SHA-256: `f484c09919c3c58e722ef12a466158bcb478e56bada2e216b7cbbcdfc3102d1c`.
- Exact receipt: [release.json](release.json); original checks/update record: [evidence](evidence).

Payload bytes/modes are copied unchanged from CI, not rebuilt here. Core, UI and licenses remain
identical to preview.2; Skill, version and evidence changed. The receipt's `publishable:false`
records build-time authority and is preserved. Subsequent owner approval is recorded by the
publication PR/release, not by rewriting the receipt. The original archive is not GitHub's Source ZIP.
Hashes establish consistency, not publisher authentication, Apple trust or fresh-machine acceptance.

## Acceptance and recovery

On 2026-09-30 the owner accepted the local CI candidate on the existing Mac after being asked to
verify one-request start, fullscreen Monitor and first Interview node display. This does not prove
remote installation, complete restart, duplicate-start behavior or a new Mac. An external Apple
Silicon tester is available; no external result is claimed. Tauri and Claude work-mode acceptance
remain separate. Windows and Intel are unsupported.

Previous verified version: preview.2 at marketplace commit
`076bb49719ffd94225c2c0adf479607e42fb09e2`. Preserve this immutable recovery ref.
Rollback uses official Plugin management with approval, never `gil restore` or deleting `.gil`.
Earlier preview.2 recovery checks do not establish a preview.3 update/rollback pair.

## Maintenance and support

All main changes use PRs and required `pinned-payload` CI, including administrators. No force push,
history rewriting or protection bypass. Use GitHub no-reply author/committer/tagger identities.
Static checks never execute the packaged binary:

```sh
node --test checks/verify.test.mjs checks/history.test.mjs
node checks/verify.mjs
node checks/history.mjs
```

Preserve licenses and payload/evidence line endings byte-for-byte. No user records, development
paths or credentials. Static integrity is not native execution or Host display.
[Support](https://github.com/hyun06000/gil/blob/main/SUPPORT.md) ·
[Private security reporting](https://github.com/hyun06000/gil/security/advisories/new) ·
[Detailed installation](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md).

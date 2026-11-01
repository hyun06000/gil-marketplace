# GIL marketplace — unsigned preview

Prebuilt Codex Plugin for **macOS Apple Silicon**. Friends-and-testers prerelease, without Apple
Developer ID signing or notarization. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | Role | Fixed release |
|---|---|---|
| `0.2.1-preview.10` | Recovery completion continues the chat; evidence retained | [v0.2.1-preview.10](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.10) |
| `0.2.1-preview.9` | Previous recovery test build | [v0.2.1-preview.9](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.9) |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.
No Node, npm, Cargo, Homebrew or separate Companion is required.

## Install or update with Codex

Ask Codex in a local folder-backed conversation:

> Install GIL unsigned preview 0.2.1-preview.10 using the bundled Codex CLI and official Plugin commands.
> Inspect existing GIL source/version first. Replace an existing installation only with my approval
> (do not ask again if I already approved that exact replacement). Use the fixed tag below.
> Do not initialize/migrate projects or modify their records, installed caches or security settings.
> Verify the installed version and tell me to open a new conversation for the new connection.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.10 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before replacing them through official Plugin commands. If Git or
Xcode Command Line Tools are absent, use the verified archive/local marketplace route in
[installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md), without installing developer tools.
The exact archive is `gil-codex-macos-arm64-0.2.1-preview.10.tar.gz` (3,537,685 bytes),
SHA-256 `803395f40ca59dde28b9faa8e83c1b3bed82e7c423b41f2a490e10e8e68fefd6`.
If macOS blocks execution, stop; never disable Gatekeeper or remove quarantine.

After installation, open a **new conversation and a new empty test folder** and ask:
**“지금 폴더에서 GIL 프로젝트를 시작해 줘.”** Check the actual Monitor, Interview closure,
plan approval button and separate Experiment evidence files. A successful protocol call does not
prove visible fullscreen or a human button click. Existing conversations may keep an older connection.

## What this test build includes

This explicit `approved-plan` + `visual-authoring` profile includes Chains, repeated-failure context,
Monitor plan approval/revision, bound Experiment items and guidance after closing steps. A model
cannot approve its own plan. Verify closure requires the exact bound plan document and separate
real file evidence. Interpretation and learning retain their evidence lineage. Chat-only output is insufficient.
MCP and Skill share the core workflow. Codex and Claude catalogs package the same Core and Skill;
Claude Desktop Plugin rendering and direct-MCP rendering remain separate Host acceptance questions.

The profile exposes 32 tools, action surface 2 and readable storage formats 4..7. **New projects use
format 7; existing projects are not automatically migrated.** Use a fresh folder to test approval.
Older Plugins may reject format-7 records. A Plugin downgrade never converts project records.
Closed failed Cycles can now request a read-only recovery review in Monitor. A human must inspect
the exact file-change list and click **보존 후 되돌아가기**. The before-world files are preserved in
`.gil/revisit-preserved/<approval-id>/` within the actual record store before restoring the selected
past state. Failure records, evidence snapshots and learning remain, and a new attempt keeps their
lineage. Interrupted approved recovery can resume. Protected-path changes, links and stale consent
are refused; general `restore`, Step-level revisit and automatic record migration remain blocked.
Windows owner.9 uses the same approval flow (Windows additionally requires the project and record
store on the same volume). Do not delete records or change tracking metadata to bypass refusal.

After confirmed recovery from an explicit button click, Monitor sends one chat continuation request.
The agent must re-read the same project's `gil_context` before asking for another approval or
opening a new Cycle. Chat delivery failure does not undo or repeat recovery: the separate
**채팅에 계속 요청 보내기** button retries only that message. Polling, uncertain replies and reopening
a completed panel never automatically send a message. Host acceptance does not prove a model turn
started; if needed, ask the chat to re-read current context. This is the same workflow on both OSes.

## Validation and exact provenance

- Build source: `44b8b7440495702efd9b8406c402ee95cb285ce6`, reviewed in [source PR #69](https://github.com/hyun06000/gil/pull/69).
- Native build, archive roundtrip and first-start protocol: [CI 41348988075](https://github.com/hyun06000/gil/actions/runs/41348988075).
- Shared actual-process tests verify recovery context points to the next Cycle instead of repeating
  the earlier approval wait. UI tests cover delivery failures, message-only retries and no automatic
  messages from polling, refused writes or uncertain responses. These are synthetic tests.
- Core SHA-256: `f4a137c07591eb16fd45f671fc375676099e8444c9ae716eaf3d3a0acfdb0314`.
- Embedded UI SHA-256: `9ebd92f3de1c66e6c5a091c4608ffe1b1635992c01cdefc309c835a52c24d773`.
- Immutable payload receipt: [release.json](release.json); [original CI evidence](evidence).

Fresh-machine installation, actual Host fullscreen, real approval clicks and Luna work for this
version remain user acceptance tests. Previous preview.6 VM or preview.7 model results are not
claimed for this version. Core cannot intercept unrelated Host actions or prove semantic truth.

Payload bytes, executable modes and attribution are preserved from CI, not rebuilt here.
Receipt `publishable:false` records build-time authority; publication approval is recorded by the
PR/release, without rewriting the original receipt. Hashes check bytes, not publisher identity.

## Recovery and maintenance

Keep existing records. To return to preview.9, replace only the Plugin through official commands;
use it only with records it supports. Never delete `.gil` or run `gil restore` to downgrade.

Every main change uses a PR and pinned-payload CI. Keep GitHub no-reply identities and reviewed bytes.
Static checks do not execute the packaged binary:

```sh
node --test checks/verify.test.mjs checks/history.test.mjs
node checks/verify.mjs
node checks/history.mjs
```

[Support](https://github.com/hyun06000/gil/blob/main/SUPPORT.md) ·
[Private security reporting](https://github.com/hyun06000/gil/security/advisories/new)

# GIL marketplace — unsigned preview

Prebuilt Codex Plugin for **macOS Apple Silicon**. Friends-and-testers prerelease, without Apple
Developer ID signing or notarization. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | Role | Fixed release |
|---|---|---|
| `0.2.1-preview.12` | Confirmed approval vs temporary read failure | [v0.2.1-preview.12](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.12) |
| `0.2.1-preview.11` | Previous Host support and Monitor test build | [v0.2.1-preview.11](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.11) |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.
No Node, npm, Cargo, Homebrew or separate Companion is required.

## Install or update with Codex

Ask Codex in a local folder-backed conversation:

> Install GIL unsigned preview 0.2.1-preview.12 using the bundled Codex CLI and official Plugin commands.
> Inspect existing GIL source/version first. Replace an existing installation only with my approval
> (do not ask again if I already approved that exact replacement). Use the fixed tag below.
> Do not initialize/migrate projects or modify their records, installed caches or security settings.
> Verify the installed version and tell me to open a new conversation for the new connection.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.12 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before replacing them through official Plugin commands. If Git or
Xcode Command Line Tools are absent, use the verified archive/local marketplace route in
[installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md), without installing developer tools.
The exact archive is `gil-codex-macos-arm64-0.2.1-preview.12.tar.gz` (3,566,625 bytes),
SHA-256 `41f1bb5bfafac4912efc8251d5dc31ec462221e8e3805dc3fdfb890bc18943f1`.
If macOS blocks execution, stop; never disable Gatekeeper or remove quarantine.

After installation, open a **new conversation and a new empty test folder** and ask:
**“지금 폴더에서 GIL 프로젝트를 시작해 줘.”** Check the actual Monitor, Interview closure,
plan approval button and separate Experiment evidence files. A successful protocol call does not
prove visible fullscreen or a human button click. Existing conversations may keep an older connection.

## Claude Desktop (Claude Code tab)

Use the same verified archive, extract into a new version folder, and fully quit Claude Desktop
before registering the Core through Desktop settings. Preserve other MCP entries and back up settings.
The command is the absolute path to `plugins/gil-companion-prototype/core/darwin-arm64/gil`,
with args `["mcp", "--serve"]`. See the [full instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md).
Mac has no Companion connection button or stable launcher yet: update this direct registration to the
new version folder. Updating only Codex does not change Claude's registration.

Open a new Claude Code conversation. Prior testing showed the Monitor as an inline card; click it
to expand fullscreen. The Plugin route previously called tools but did not render the App, so use
the direct registration route for this test. This version's real Host behavior remains user acceptance.

## What this test build includes

Monitor distinguishes confirmed approval, temporary read retry, persistent read failure and uncertain
write outcomes. A failed read retains the last confirmed revision without approving newer proposals.
Retries use 2/4/8/15 seconds; polling never repeats a write or sends chat. Missing/mismatched write
acknowledgements remain uncertain. Zoom, minimap and metadata-only update guidance are retained.
Windows includes Claude Desktop connection controls; macOS uses direct registration above.

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
Windows owner.11 uses the same approval flow (Windows additionally requires the project and record
store on the same volume). Do not delete records or change tracking metadata to bypass refusal.

After confirmed recovery from an explicit button click, Monitor sends one chat continuation request.
The agent must re-read the same project's `gil_context` before asking for another approval or
opening a new Cycle. Chat delivery failure does not undo or repeat recovery: the separate
**채팅에 계속 요청 보내기** button retries only that message. Polling, uncertain replies and reopening
a completed panel never automatically send a message. Host acceptance does not prove a model turn
started; if needed, ask the chat to re-read current context. This is the same workflow on both OSes.

## Validation and exact provenance

- Build source: `bbd7db3b29d69ec0ca6661336ecc2ed5a87aa12b`, reviewed in [source PR #73](https://github.com/hyun06000/gil/pull/73).
- Native build, archive roundtrip and first-start protocol: [CI 41359559965](https://github.com/hyun06000/gil/actions/runs/41359559965).
- 24 approval-controller tests cover saved decisions plus read failures, stale buttons, replacement
  proposals, uncertain acknowledgements and short retry scheduling. A synthetic browser fixture
  verifies neutral temporary retry. These do not prove actual Host approval or model continuation.
- Core SHA-256: `c43cb57d3c7f786713e3599f2d3e90afe4cc097ff8bcd9f6d5963f9f9bd5b543`.
- Embedded UI SHA-256: `e7830fa2bc588072d60f83f4df3729db587320c15a186bc9a8f84afa14bc43bc`.
- Immutable payload receipt: [release.json](release.json); [original CI evidence](evidence).

Fresh-machine installation, actual Host fullscreen, real approval clicks and Luna work for this
version remain user acceptance tests. Previous preview.6 VM or preview.7 model results are not
claimed for this version. Core cannot intercept unrelated Host actions or prove semantic truth.

Payload bytes, executable modes and attribution are preserved from CI, not rebuilt here.
Receipt `publishable:false` records build-time authority; publication approval is recorded by the
PR/release, without rewriting the original receipt. Hashes check bytes, not publisher identity.

## Recovery and maintenance

Keep existing records. To return to preview.11, replace only the Plugin through official commands;
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

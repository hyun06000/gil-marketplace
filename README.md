# GIL marketplace — unsigned preview

Prebuilt Codex Plugin for **macOS Apple Silicon**. Friends-and-testers prerelease, without Apple
Developer ID signing or notarization. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | Role | Fixed release |
|---|---|---|
| `0.2.1-preview.21` | Session-scoped progress checks and Host-specific write protection | [v0.2.1-preview.21](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.21) |
| `0.2.1-preview.20` | Previous public plan-input and Closing-guidance test build | [v0.2.1-preview.20](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.20) |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.
No Node, npm, Cargo, Homebrew or separate Companion is required.

## Install or update with Codex

Ask Codex in a local folder-backed conversation:

> Install GIL unsigned preview 0.2.1-preview.21 using the bundled Codex CLI and official Plugin commands.
> Inspect existing GIL source/version first. Replace an existing installation only with my approval
> (do not ask again if I already approved that exact replacement). Use the fixed tag below.
> Do not initialize/migrate projects or modify their records, installed caches or security settings.
> Verify the installed version and tell me to open a new conversation for the new connection.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.21 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before replacing them through official Plugin commands. If Git or
Xcode Command Line Tools are absent, use the verified archive/local marketplace route in
[installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md), without installing developer tools.
The exact archive is `gil-codex-macos-arm64-0.2.1-preview.21.tar.gz` (3,666,511 bytes),
SHA-256 `30661f0748ea40476f7714f5496ba329e61ee2439c0eeaa956412eb3b1fb7bd3`.
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

## Keep MCP and existing protection hooks on the same Core

Publication and Plugin/MCP replacement do not update global hook paths. Inspect the current MCP
registration and each Host hook before removing the old Core. If GIL hooks are already installed,
refresh them with the **same verified new Core** using `write-guard install --auto --host codex|claude|both`
for the Host(s) in use. It preserves unrelated settings and keeps backups. Run that Core's
`write-guard status --auto`: the selected Hosts must report `matches_current_core`. This confirms
configuration agreement, not that the Host loaded or trusted the hook. Restart the Host connection,
review hook trust through its normal UI, then reconnect existing projects with `gil_context`.

If the old hook blocks the installer, do not retry the unprotected command or remove all hooks.
Prepare and review the exact new hook configuration and use the narrow settings-refresh procedure in
[source installation instructions](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md#별도로-설치한-전역-write-guard-갱신).
No automatic permission grants or global security changes are part of this release.

## What this test build includes

Progress/Stop checks bind to the actual Host + session ID after a successful GIL call. Unrelated chats
and paused chats have no GIL completion obligation; every registered project's file protection remains.
Files inside protected projects can change only during an actually open Verify. External direct file
edits and file-free web research do not need a GIL step. Shell commands still need path protection:
external cwd, absolute paths, `cd` and symlinks are not exemptions. Claude receives a guarded command
via `updatedInput` and `permissionDecision: ask`, preserving normal user approval. Codex receives its
supported explicit wrapper/approval instructions. Neither path automatically grants permission.

A Host that cannot start the native sandbox safely still refuses the command before execution.
Nested sandbox restrictions, existing processes, unregistered file tools and direct-edit races remain
limits; see [the protection contract](https://github.com/hyun06000/gil/blob/main/distribution/codex/WRITE-GUARD.md).
This is not an unrestricted pass for every shell, an OS-wide access-control system, or proof of actual
Claude/Codex hook activation. Actual Host tests for this release are pending user validation.


Plan proposals use `{project_root, draft:{scope, items, synthesis}}`. The documentation example
matches its checklist; malformed wire arguments receive static correction guidance without echoing
input values. Synthesis is a map of Report strings. Closing keeps existing items and adds
`draft.synthesis.chain_verdict`, then closes the approved Interview and Chain rather than opening
another Experiment. Shared instructions and current-context guidance use the same shape.

Since preview.13, this also includes start-to-Monitor handoff, project file boundary and explicit
user-wait guidance improvements. Host guard configuration is separate from this packaged MCP/Skill
update; publication does not install or change global hooks.

New Verify writes refuse one-word/boilerplate reasons for omitting visuals and image evidence files
contradicting a `not_needed` declaration. When Verify attaches images, Analysis and the Experiment
Cycle Report must cite at least one stored image. Monitor shows visual badges, counts and missing
states, with the visual panel before report text. Existing closed records remain readable unchanged.
Hangul NFC/NFD fallback uses one unambiguous existing directory, only after a missing-path result;
permission errors never select another folder. Monitor and typed reports use the same resolved root.
Product-safety dirty guidance preserves current work before restoring baseline contents manually.

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

The profile exposes 33 tools, action surface 2 and readable storage formats 4..7. **New projects use
format 7; existing projects are not automatically migrated.** Use a fresh folder to test approval.
Older Plugins may reject format-7 records. A Plugin downgrade never converts project records.
Closed failed Cycles can now request a read-only recovery review in Monitor. A human must inspect
the exact file-change list and click **보존 후 되돌아가기**. The before-world files are preserved in
`.gil/revisit-preserved/<approval-id>/` within the actual record store before restoring the selected
past state. Failure records, evidence snapshots and learning remain, and a new attempt keeps their
lineage. Interrupted approved recovery can resume. Protected-path changes, links and stale consent
are refused; general `restore`, Step-level revisit and automatic record migration remain blocked.
Windows owner.12 uses the same approval flow (Windows additionally requires the project and record
store on the same volume). Do not delete records or change tracking metadata to bypass refusal.

After confirmed recovery from an explicit button click, Monitor sends one chat continuation request.
The agent must re-read the same project's `gil_context` before asking for another approval or
opening a new Cycle. Chat delivery failure does not undo or repeat recovery: the separate
**채팅에 계속 요청 보내기** button retries only that message. Polling, uncertain replies and reopening
a completed panel never automatically send a message. Host acceptance does not prove a model turn
started; if needed, ask the chat to re-read current context. This is the same workflow on both OSes.

## Validation and exact provenance

- Build source: `74e6c2d024abd9a23ca43c91b1635997b815f1a1`, [source fix PR #91](https://github.com/hyun06000/gil/pull/91).
- Candidate build, archive roundtrip and first-start protocol: [CI 41974673935](https://github.com/hyun06000/gil/actions/runs/41974673935), explicit approved-plan profile.
- All 10 final fix-head CI checks passed, retaining macOS, Windows x64/arm64, feature profiles and Companion checks.
- Default Core CI: 1,559 passed / 2 existing ignored; selected-profile candidate checks also passed.
- Exact packaged Core: 20 wire cases passed, 1 expected product-safety block, 0 failures.
- Packaged guard smoke: isolated HOME/project, unrelated Stop/outside writes, absolute/cd/symlink/move
  protection, Host-specific guidance, hook-path refresh, unrelated settings and backups preserved.
  Host events and approval were synthetic; actual Host execution/UI acceptance was not performed.
- Clean source snapshot: 723 files, `5448be711f75ddb4112387a6b577fe31e6e9fecce25557f65b9c44354f4b815b`, identical to the CI receipt.
- Core SHA-256: `3f1b4777abe581c717e7314b0f78cfd6918d61b614b3af4c033b81db7a7ed7e6`.
- Embedded UI SHA-256: `56a42d5fb569105237adb6c28018cf26b142352cc0c76ad652789ead46895426`.
- Immutable payload receipt: [release.json](release.json); [original CI evidence](evidence).

Fresh-machine installation, actual Host fullscreen, real approval clicks and Luna work for this
version remain user acceptance tests. Previous preview.6 VM or preview.7 model results are not
claimed for this version. Core cannot intercept every external process or prove semantic truth.

Payload bytes, executable modes and attribution are preserved from CI, not rebuilt here.
Receipt `publishable:false` records build-time authority; publication approval is recorded by the
PR/release, without rewriting the original receipt. Hashes check bytes, not publisher identity.

## Recovery and maintenance

Compatibility ranges match preview.20; `migration: requires_review` remains unchanged. The update
policy requires explicit contract review; no automatic migration or accepted Host update/rollback pair
is claimed. Keep existing records. To return to preview.20, replace only the Plugin through official commands;
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

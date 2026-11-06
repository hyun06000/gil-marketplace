# GIL marketplace — unsigned preview

Prebuilt Codex Plugin for **macOS Apple Silicon**. Friends-and-testers prerelease, without Apple
Developer ID signing or notarization. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | Role | Fixed release |
|---|---|---|
| `0.2.1-preview.22` | Visual argument diagnostics and current plan / Cycle guidance | [v0.2.1-preview.22](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.22) |
| `0.2.1-preview.21` | Previous public session-scoped Host guard build | [v0.2.1-preview.21](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.21) |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.
No Node, npm, Cargo, Homebrew or separate Companion is required.

## Install or update with Codex

Ask Codex in a local folder-backed conversation:

> Install GIL unsigned preview 0.2.1-preview.22 and its Codex protection hooks using the bundled Codex CLI and the verified Core installer.
> Inspect existing GIL source/version first. Replace an existing installation only with my approval
> (do not ask again if I already approved that exact replacement). Use the fixed tag below.
> Do not initialize/migrate projects or modify their records, installed caches or security settings.
> Include fresh/missing hooks: resolve the installed MCP Core and run `write-guard install --auto --host codex`,
> then `write-guard status --auto`. Preserve unrelated settings and backups; do not change other Hosts.
> Verify the version and four hooks, then report setup, actual Host protection and Monitor display separately.
> Restart into a new conversation and review hooks normally; do not automatically grant trust or permissions.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.22 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before replacing them through official Plugin commands. If Git or
Xcode Command Line Tools are absent, use the verified archive/local marketplace route in
[installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md), without installing developer tools.
The exact archive is `gil-codex-macos-arm64-0.2.1-preview.22.tar.gz` (3,498,578 bytes),
SHA-256 `789d966ad85bc5108600966a09729d7c8a8b89f7572e02e88e498d8b656599fa`.
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

Before reopening Desktop, use the same registered Core to run `write-guard install --auto --host claude`
and `write-guard status --auto`, including fresh installations and missing hooks. Verify backups and
`matches_current_core` for Claude, preserving unrelated settings. Then open a new Claude Code conversation. Prior testing showed the Monitor as an inline card; click it
to expand fullscreen. The Plugin route previously called tools but did not render the App, so use
the direct registration route for this test. This version's real Host behavior remains user acceptance.

## Register protection hooks on fresh installs and updates

The standard macOS setup includes Plugin/MCP registration, protection hook registration, configuration
verification and new-session activation checks. Plugin/MCP installation alone does not register hooks.
Follow the [current installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md);
this is an Agent-run setup step, not a silent Plugin lifecycle action or a change to the immutable archive.

Resolve the actual MCP executable from the installed Plugin manifest or Claude's direct registration.
Do not guess cache paths or use a different `gil` from PATH. With `GIL_CORE` set to that verified absolute path:

```sh
# Choose the Host being installed; use --host claude for Claude Desktop Code.
"$GIL_CORE" write-guard install --auto --host codex
"$GIL_CORE" write-guard status --auto
```

Run this on fresh installs, missing/deleted hooks and updates. Use `--host both` only when both Hosts
were requested and use the same Core. If their paths differ, register each with its own verified Core
and compare release version/Core bytes. Do not alter an unrequested Host. The installer merges
PreToolUse, PostToolUse, UserPromptSubmit and Stop, preserving unrelated settings and private backups.
If the user declines protection hooks, report MCP-only setup with protection unconfigured.

The selected Host must report `matches_current_core`; this proves configuration, not activation.
Restart the Host and review hooks normally (Codex `/hooks`). In a user-selected disposable folder,
start/resume through MCP and check automatic root registration, actual refusal outside Verify and
permitted writes during Verify. Existing projects reconnect with `gil_context`; do not write test files
into user projects. Report setup readiness, actual Host protection and Monitor display separately.
If activation is blocked or untested, say so. Do not change disabled-hook/organization policy, sandbox,
trust or approval settings to force activation. This macOS adapter is not a Windows installation step.

If the old hook blocks the installer, do not retry the unprotected command or remove all hooks.
Prepare and review the exact new hook configuration and use the narrow settings-refresh procedure in
[source installation instructions](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md#별도로-설치한-전역-write-guard-갱신).
No automatic permission grants or global security changes are part of this release.

## What this test build includes

Visual close arguments now receive safe field-path diagnostics and the actual open owner on an owner mismatch.
`gil help visuals` includes complete two-PNG examples: new attachments use `source: {kind: "new", key}`;
stored citations require `owner`, `asset_id` and `sha256`. A declaration does not contain `uses`.
Plan guidance follows the current stage, explains when the bound document is available, and makes the
one-item-per-Experiment binding explicit. Step `close_cycle` and Cycle `open_child` have distinct meanings.
No existing records are rewritten or execution history backfilled. The reported late appearance of a
plan document was not reproduced; this release does not claim to fix that unverified observation.

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

- Build source: `ebdde810f20c2e5e35e0d6ed6de6e04a4f7e864d`, [source fix PR #93](https://github.com/hyun06000/gil/pull/93).
- Candidate build, archive roundtrip and first-start protocol: [CI 42181287362](https://github.com/hyun06000/gil/actions/runs/42181287362), explicit approved-plan profile.
- All 11 final fix-head CI checks passed, retaining macOS, Windows x64/arm64, feature profiles and Companion checks. Three separate install/signing acceptance jobs were skipped.
- Candidate selected-profile regression, native protocol, packaging and archive checks passed.
- Clean source snapshot: 725 files, `8f45359d7e4d1d0ab145f0d701652fbe1577b8b5db48dd672d7e09efd131dfeb`, identical to the CI receipt.
- Core SHA-256: `a08ceec076b5916857076184fd94f108fe5758d74b117d7da2ebe0faef99e95c`.
- Embedded UI SHA-256: `56a42d5fb569105237adb6c28018cf26b142352cc0c76ad652789ead46895426`.
- Immutable payload receipt: [release.json](release.json); [original CI evidence](evidence).

Fresh-machine installation, actual Host fullscreen, real approval clicks and Luna work for this
version remain user acceptance tests. Previous preview.6 VM or preview.7 model results are not
claimed for this version. Core cannot intercept every external process or prove semantic truth.

Payload bytes, executable modes and attribution are preserved from CI, not rebuilt here.
Receipt `publishable:false` records build-time authority; publication approval is recorded by the
PR/release, without rewriting the original receipt. Hashes check bytes, not publisher identity.

## Recovery and maintenance

Compatibility ranges match preview.21; `migration: requires_review` remains unchanged. The update
policy requires explicit contract review; no automatic migration or accepted Host update/rollback pair
is claimed. Keep existing records. To return to preview.21, replace only the Plugin through official commands;
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

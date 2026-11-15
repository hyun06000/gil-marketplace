# GIL marketplace — unsigned preview

Prebuilt GIL for **macOS Apple Silicon**, for Codex and the Claude Code tab in Claude Desktop.
This is a tester prerelease without Apple Developer ID signing or notarization.
No Node, npm, Cargo, Homebrew or separate Companion is needed.

| Version | Role | Release |
|---|---|---|
| `0.2.1-preview.30` | Compact Monitor, concise reports, results before closure, five languages | [Current prerelease](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.30) |
| `0.2.1-preview.29` | Previous public build; plan-input and PNG guidance | [Previous prerelease](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.29) |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.

## What changed

- Monitor puts current work, progress and the next action first. Detailed records are collapsed;
  repeated text is reduced. Approval controls, stale-state warnings and uncertain outcomes remain visible.
- Shared agent instructions request short reports that preserve findings, evidence and uncertainty.
  When deliverables exist, show them before opening the closing interview.
- Core guidance and Monitor support English, Korean, Simplified Chinese, Traditional Chinese and Japanese.
- The source also corrects runtime-concurrency test expectations. This is not a change to runtime behavior.

Source changes: [reports and results](https://github.com/hyun06000/gil/pull/121),
[Monitor](https://github.com/hyun06000/gil/pull/122),
[languages](https://github.com/hyun06000/gil/pull/112),
[test correction](https://github.com/hyun06000/gil/pull/123).
These instructions guide a model; they do not guarantee compliance or enforce an operating-system file lock.
No project migration, automatic recovery approval, tracking exclusions or concurrent experiments are introduced.
The roadmap's remaining work is not presented as implemented. This publication does not update Windows.

## Install or update

[Full installation instructions](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md)
cover existing registrations, permissions, failures, hook cleanup and rollback. Ask an agent in a local
folder-backed Codex conversation to install this exact version. Existing replacement needs authorization;
do not ask again when the current request already authorizes it.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.30 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before using official Plugin removal and registration commands.
Do not edit installed caches. Without Git or Xcode Command Line Tools, use the verified archive/local
marketplace route; do not install developer tools as a prerequisite.

- Archive: `gil-codex-macos-arm64-0.2.1-preview.30.tar.gz` — **4,119,499 bytes**.
- SHA-256: `a05275206833d315b2beaefd57236659b22edf4d2eefa6c9e6b7a33a11fc8cec`.
- [Exact download](https://github.com/hyun06000/gil-marketplace/releases/download/v0.2.1-preview.30/gil-codex-macos-arm64-0.2.1-preview.30.tar.gz).

Verify size and hash before extraction, reject absolute/traversing paths, links and special files,
and extract into a new private version folder. Preserve executable permissions and license notices.
If macOS blocks execution, stop; never disable Gatekeeper or remove quarantine.

For **Claude Desktop**, fully quit the app and back up its settings before registering the same verified
archive's Core directly: absolute `plugins/gil-companion-prototype/core/darwin-arm64/gil`, arguments
`["mcp", "--serve"]`. Preserve other server entries. Updating Codex does not update Claude's path.
The Plugin catalog route and direct registration have separate screen acceptance histories;
use the [Claude instructions](https://github.com/hyun06000/gil/blob/main/distribution/INSTALL-GUIDE.md).

GIL installs **no Host hooks**. Using the verified Core that the requested app will run, remove only old
GIL-generated commands with `write-guard uninstall --auto --host codex` (or `--host claude`), then
`write-guard status --auto`. Use `--host both` only when both apps were requested. Preserve other hooks,
settings, backups and security policy; review custom commands instead of deleting them indiscriminately.

Restart into a new conversation. The actual Core's `--version` must report `gil 0.2.1-preview.30`;
the new tool connection and agent probe must report `0.2.1-preview.30`. Resolve the installed path rather
than an arbitrary executable on PATH. Version text does not replace hash verification.
Use a disposable empty folder to test GIL; do not initialize this distribution repository.
Report registration, model guidance and actual visible/fullscreen Monitor separately.

## Existing projects and compatibility

Read `gil_context` before producing files for an existing GIL project, even when the user does not say
GIL. Follow its current plan and actually open Verify step. New starts preserve existing project guides;
older projects adopt continuity guidance at the next successful Verify open, not during installation.
No hooks, global instructions, registry scans or automatic migration are added.

The approved-plan profile exposes 33 tools, action surface 2 and readable storage formats 4–7.
New projects use format 7. Plans still require the Monitor approval flow, and Verify needs real file
evidence. Only closed failed experiments can request the existing human-reviewed recovery flow:
review exact changes, preserve current files, then restore. General restore and Step revisit remain blocked.
Do not delete records or change tracking metadata to bypass refusal.

Compatibility ranges match preview.29; `migration: requires_review` remains unchanged. The release
policy therefore requires explicit review and does not authorize an automatic update. Synthetic projects
created by each version passed reads across 29 → 30 → 29 → 30 with unchanged file bytes.
This is protocol evidence, not accepted installation, model behavior or actual Host update/rollback.

To return to preview.29, preserve projects and the prior installation, then replace only the Plugin through
official commands using `v0.2.1-preview.29`. For Claude direct registration, fully quit the app and select
the preserved prior Core path. Use only versions supporting the records. Never delete `.gil` or run
`gil restore` to downgrade software; a downgrade does not convert record formats.

## Verification and provenance

- Build source: `29d586aa7491e7b50318603081d75e77bb730780`.
- [Candidate automatic checks](https://github.com/hyun06000/gil/actions/runs/43732805954): succeeded;
  approved-plan, visual-authoring and product-safety profile, native version/tool/UI checks and archive roundtrip.
- Source snapshot: 804 files, `ba220af0d55356bf04cc2b1960afef7f582e9380347dc5aafa287e85e746e57c`.
- Core SHA-256: `d97170db2827bf42362d02da0ed99699e22fee2666c62d32965d6fb950239db7`.
- Embedded UI SHA-256: `4af08da3bbe2145504dddc308923ae8081504ff8be3dbd13d64f275c5e872a5b`.
- Receipt SHA-256: `4d14a4bbe048ec50c860d11291d8606a2556069ed86587b2f651cf293d33d3b7`.
- Original immutable [receipt](release.json) and [evidence](evidence); bytes, modes and attribution preserved from source automation.

Actual Codex/Claude installation, model adherence, screen readability, fullscreen and a fresh Mac remain
unverified for this version. Prior user screen observations do not automatically apply to this new build.
The user's existing installation and settings remain unchanged. `publishable:false` is the original
build-time authority record; separate publication approval is recorded in the pull request and release.
Hashes verify bytes, not publisher identity.

Every main change uses a pull request and required `pinned-payload` checks. Keep GitHub no-reply identities.

```sh
node --test checks/verify.test.mjs checks/history.test.mjs
node checks/verify.mjs
node checks/history.mjs
```

These checks do not execute the packaged binary or verify installation.
[Source](https://github.com/hyun06000/gil) · [Support](https://github.com/hyun06000/gil/blob/main/SUPPORT.md) ·
[Private security reporting](https://github.com/hyun06000/gil/security/advisories/new)

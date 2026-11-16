# GIL marketplace — unsigned preview

Prebuilt GIL for **macOS Apple Silicon**, for Codex and the Claude Code tab in Claude Desktop.
This is a tester prerelease without Apple Developer ID signing or notarization.
No Node, npm, Cargo, Homebrew or separate Companion is needed.

| Version | Role | Release |
|---|---|---|
| `0.2.1-preview.31` | Approval and interruption guidance, recovery provenance | [Current prerelease](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.31) |
| `0.2.1-preview.30` | Previous public build; compact Monitor and concise reports | [Previous prerelease](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.30) |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.

## What changed

- Agent guidance distinguishes a repairable input error from waiting for plan approval, avoiding repeated invalid submissions.
- Reports separate observations from interpretation. Interrupted work must disclose unverified conclusions and show partial deliverables before recovery.
- Manual recovery records its approval source. Combined preservation tests cover original bytes, refusal boundaries, restart and duplicate requests.
- Source development tools measure context response size/repetition and check repository document links; these are not installed runtime dependencies.
- Interview-based `.gilignore` remains a design proposal. Automatic recovery approval has an experimental foundation, but is disabled in this product build. The user setting entry path is still undecided.
- Replanning while retaining partial results in the working folder is not implemented. Existing approval, preservation and recovery restrictions remain.

[Integrated source review](https://github.com/hyun06000/gil/pull/132) preserves the seven original pull requests.
The compact Monitor, concise reports, results-first closure and five-language support from preview.30 remain included.
No automatic migration or concurrent experiments are introduced. This publication does not update Windows.
Field testing is performed by the user; this publication does not claim actual Host acceptance.

## Install or update

[Full installation instructions](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md)
cover existing registrations, permissions, failures, hook cleanup and rollback. Ask an agent in a local
folder-backed Codex conversation to install this exact version. Existing replacement needs authorization;
do not ask again when the current request already authorizes it.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.31 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before using official Plugin removal and registration commands.
Do not edit installed caches. Without Git or Xcode Command Line Tools, use the verified archive/local
marketplace route; do not install developer tools as a prerequisite.

- Archive: `gil-codex-macos-arm64-0.2.1-preview.31.tar.gz` — **3,901,888 bytes**.
- SHA-256: `6fa9e8123da4525c99ee5fa4524503d198bba8f58846e68208ae0253b913f501`.
- [Exact download](https://github.com/hyun06000/gil-marketplace/releases/download/v0.2.1-preview.31/gil-codex-macos-arm64-0.2.1-preview.31.tar.gz).

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

Restart into a new conversation. The actual Core's `--version` must report `gil 0.2.1-preview.31`;
the new tool connection and agent probe must report `0.2.1-preview.31`. Resolve the installed path rather
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

Compatibility ranges match preview.30; `migration: requires_review` remains unchanged. Manual recovery adds
`source.json` provenance beside its existing approval record. The release policy requires explicit review and
never authorizes an automatic update. Isolated projects created with preview.30 and preview.31 each passed
30 → 31 → 30 → 31 context reads with all six project files unchanged. This checks startup/read compatibility;
it does not prove recovery-history downgrade compatibility or actual Host installation/rollback.

To return to preview.30, preserve projects and the prior installation, then replace only the Plugin through
official commands using `v0.2.1-preview.30`. For Claude direct registration, fully quit the app and select
the preserved prior Core path. Use only versions supporting the records. Never delete `.gil` or run
`gil restore` to downgrade software; a downgrade does not convert record formats.

## Verification and provenance

- Build source: `393eb8fa6458e3bcf33cb48d58bd73d49b08a48c`.
- [Candidate automatic checks](https://github.com/hyun06000/gil/actions/runs/43949849088): succeeded;
  approved-plan, visual-authoring and product-safety profile, native version/tool/UI checks and archive roundtrip.
- Source snapshot: 831 files, `3a88a2dd6c41c6b3b66a9d90329e605a675dfbf4207f5176c93598fc4fe34375`.
- Core SHA-256: `a3f6e5bea5cf937ace224d5cbed71ff54099d997f55e22c8cc10dc57a03e5e10`.
- Embedded UI SHA-256: `4af08da3bbe2145504dddc308923ae8081504ff8be3dbd13d64f275c5e872a5b`.
- Receipt SHA-256: `290877470eb725a696a2ea1d3a08e8332a8fe12b8dc805ef9e25dd3a9c2fd548`.
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

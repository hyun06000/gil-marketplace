# GIL marketplace — unsigned preview

Prebuilt Codex Plugin for **macOS Apple Silicon**. Friends-and-testers prerelease, without Apple
Developer ID signing or notarization. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | Role | Fixed release |
|---|---|---|
| `0.2.1-preview.8` | Experimental Monitor-approved plans and Chain workflow | [v0.2.1-preview.8](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.8) |
| `0.2.1-preview.7` | Previous version for older projects | [v0.2.1-preview.7](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.7), commit `b81151830a4d723be95705b8f9274b1ff3ed3adb` |

Use the fixed tag, never moving `main`. GitHub's Source ZIP is not the installation archive.
No Node, npm, Cargo, Homebrew or separate Companion is required.

## Install or update with Codex

Ask Codex in a local folder-backed conversation:

> Install GIL unsigned preview 0.2.1-preview.8 using the bundled Codex CLI and official Plugin commands.
> Inspect existing GIL source/version first. Replace an existing installation only with my approval
> (do not ask again if I already approved that exact replacement). Use the fixed tag below.
> Do not initialize/migrate projects or modify their records, installed caches or security settings.
> Verify the installed version and tell me to open a new conversation for the new connection.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.8 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Inspect existing registrations before replacing them through official Plugin commands. If Git or
Xcode Command Line Tools are absent, use the verified archive/local marketplace route in
[installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md), without installing developer tools.
The exact archive is `gil-codex-macos-arm64-0.2.1-preview.8.tar.gz` (3,435,830 bytes),
SHA-256 `9b7c01e1b2d080b2638906151b8525adf48adb67f96dab3f51d0ca4b21d4325c`.
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

The profile exposes 30 tools, action surface 2 and readable storage formats 4..7. **New projects use
format 7; existing projects are not automatically migrated.** Use a fresh folder to test approval.
Older Plugins may reject format-7 records. A Plugin downgrade never converts project records.
Destructive restore/revisit remain blocked by the product safety profile; tracking-policy fixtures
and M6-E design work do not mean production restore/revisit or migration is available.

## Validation and exact provenance

- Source: `2e8f9ef22c20dd0a6a23b11afa8c002b3166e35a`, reviewed in [source PR #64](https://github.com/hyun06000/gil/pull/64).
- Native build, archive roundtrip and first-start protocol: [CI 41333575797](https://github.com/hyun06000/gil/actions/runs/41333575797).
- Exact downloaded Core: 20 wire scenarios passed, 1 expected product-safety block, 0 failures.
  These use synthetic App inputs, not human approval clicks or a Luna model.
- Core SHA-256: `75bdbf2fa128277fbd3d5999070383b4472e693148da661ad84e7414cac24a4c`.
- Embedded UI SHA-256: `1b29af14e7cb55045098cefab940cdefff0f5e8fabf8ef7550cf636517a8cccd`.
- Immutable payload receipt: [release.json](release.json); [original CI evidence](evidence).

Fresh-machine installation, actual Host fullscreen, real approval clicks and Luna work for this
version remain user acceptance tests. Previous preview.6 VM or preview.7 model results are not
claimed for this version. Core cannot intercept unrelated Host actions or prove semantic truth.

Payload bytes, executable modes and attribution are preserved from CI, not rebuilt here.
Receipt `publishable:false` records build-time authority; publication approval is recorded by the
PR/release, without rewriting the original receipt. Hashes check bytes, not publisher identity.

## Recovery and maintenance

Keep existing records. To return to preview.7, replace only the Plugin through official commands;
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

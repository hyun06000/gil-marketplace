# GIL marketplace — unsigned preview

Prebuilt Codex Plugin for **macOS Apple Silicon**. Friends-and-testers prerelease; no Apple Developer
ID signature or notarization. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | Role | Fixed release |
|---|---|---|
| `0.2.1-preview.7` | Shared-workflow test build | [v0.2.1-preview.7](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.7) |
| `0.2.1-preview.6` | Previous verified version / rollback target | [v0.2.1-preview.6](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.6), commit `2a1ec23576eb35e05210dda1d8b5400a577ec30f` |

Use a fixed tag, never moving `main`. The release assets are the reviewed CI bytes; GitHub's Source
ZIP is not the installation archive. No Node, npm, Cargo, Homebrew or separate Companion is required.

## Install or update with Codex

Ask Codex in a local folder-backed conversation:

> Install GIL unsigned preview 0.2.1-preview.7 using the bundled Codex CLI and official Plugin commands.
> Inspect existing GIL source/version first. Replace an existing installation only with my approval
> (do not ask again if I already approved that exact replacement). Use the fixed tag below.
> Do not initialize/migrate projects or modify their records, installed caches or security settings.
> Verify the installed version and tell me to open a new conversation for the new connection.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.7 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Existing registrations must be handled through official Plugin commands after source/version inspection;
do not blindly run add over an existing registration. If Git or Xcode Command Line Tools are absent,
use the verified archive/local marketplace route in [installation instructions](https://github.com/hyun06000/gil/blob/main/INSTALL.md), without installing developer tools.
The exact archive is `gil-codex-macos-arm64-0.2.1-preview.7.tar.gz` (3,218,986 bytes), SHA-256 `ecd045e3a043e820bb5ff59a6d8b6d3ca57e68dfa3d8a8426a598f70682dd8ee`.
If macOS blocks execution, stop; never disable Gatekeeper or remove quarantine.

After installation, open a **new conversation**, select an empty test folder and ask:
**“지금 폴더에서 GIL 프로젝트를 시작해 줘.”** Check the actual Monitor and first Interview step;
a successful tool response alone does not prove visible fullscreen. Existing conversations may keep
an older MCP connection. Installation does not move, delete or migrate Project records.

## Shared workflow in preview.7

Native MCP and Plugin Skill now carry the exact same core workflow: start with Monitor handoff,
finish Interview after approval, split independent questions into Experiments, open Verify before
research, save real evidence files, record interpretation and learning, and close the Cycle.
Verify closure requires nonempty captured files with at least one new/changed file; Analysis and
Outcome reference their actual evidence lineage. Chat-only delivery does not satisfy Verify.

Source `64de8e5c1207dda329600ef12a86f39cf7781ee3` is also used for Windows `0.1.1-owner.6`. Packaging and capability-specific input
schemas still differ: this Mac build retains visual-authoring, 24 tools, action surface 2 and formats
4..5. No automatic project migration. New-write evidence checks apply to existing Projects too;
historical records remain readable and are not rewritten or retroactively certified.

Source Luna testing passed all four continuous profile/connection flows, each with two Experiments
and two actual evidence documents. Independent next-action classification remained 61/64; do not
claim perfect model compliance. Core cannot intercept unrelated Host actions or prove semantic truth.
Native source CI passed on macOS and Windows. This candidate's build, archive roundtrip and protocol
checks are [source CI 40568947391](https://github.com/hyun06000/gil/actions/runs/40568947391).
The exact candidate passed isolated official CLI replacement preview.6 → preview.7 → preview.6 →
preview.7, with cached Core/Skill hash checks, fresh MCP initialize and unchanged synthetic format-4
and format-5 Project bytes at each step. The real user profile was not changed.
Fresh-machine installation and visible Desktop/fullscreen acceptance of this exact version require
user testing. Prior preview.6 VM results do not establish those claims for preview.7.

## Exact provenance

- Source: `64de8e5c1207dda329600ef12a86f39cf7781ee3` (source PR #53 merged).
- Archive SHA-256: `ecd045e3a043e820bb5ff59a6d8b6d3ca57e68dfa3d8a8426a598f70682dd8ee`.
- Core SHA-256: `badd9a6f208dee96402637c54bc741b4a3e9e75cfbbb650a94a1608213bd1bba`.
- Skill SHA-256: `54a18db9c896d77aa737547089129d676804aea246d36452f783b13c7ef1d10a`.
- Embedded UI SHA-256: `8df673ca26fc8f90ca6f9c8f2a256b87b535f8f19fbb3cd3d2f9e93154077b33`.
- Shared workflow SHA-256: `fe3cca1210d211ac7f3bdc58198d9044ab0cad6407c71709ec813d0c6177ea22`.
- Exact immutable receipt: [release.json](release.json); [original CI evidence](evidence).

Payload bytes, executable modes and attribution are preserved from CI, not rebuilt here.
Receipt `publishable:false` records build-time authority; user approval is recorded by the
publication PR/release, never by changing the original receipt. Hashes check bytes, not publisher identity.

## Recovery and maintenance

Rollback target is preview.6 at the fixed tag/commit above. Replace only the Plugin using official
commands and preserve all Project records. Never use `gil restore` or delete `.gil` to downgrade.
A Plugin downgrade does not convert project formats; preview.3 cannot read format 5.

Every main change uses a PR and pinned-payload CI; no force push or bypass. Keep GitHub no-reply
identities and preserve the reviewed bytes. Static checks do not execute the packaged binary:

```sh
node --test checks/verify.test.mjs checks/history.test.mjs
node checks/verify.mjs
node checks/history.mjs
```

[Support](https://github.com/hyun06000/gil/blob/main/SUPPORT.md) ·
[Private security reporting](https://github.com/hyun06000/gil/security/advisories/new)

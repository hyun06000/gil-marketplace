# GIL marketplace — unsigned preview

Prebuilt GIL for **macOS Apple Silicon**, for Codex and Claude Desktop. No Node, npm, Cargo, Homebrew or separate Companion is needed.

Current prerelease: **0.2.1-preview.32**. Previous build: [preview.31](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.31).

## What changed

Stable interview requirements can guide multiple small yes/no experiments. The Monitor shows the original requirements; agents can read original reports and stored evidence with bounded pagination. Closing guidance requires evidence-based answers and user approval. No provisional-answer store or automatic requirement completion is introduced.

This is the explicit exploration-flow + visual-authoring + product-safety build, exposing 35 tools. Existing Chains are not converted. Use a **new empty test folder**. Older approved-plan runtimes refuse exploration-marked records even though both advertise storage formats 4–7. Keep this runtime for exploration projects; replacing the Plugin with preview.31 does not downgrade records.

General restore and Step revisit remain blocked. Closed failed experiments use the existing Monitor preservation-and-recovery approval path. Interview-based tracking exclusion remains a design proposal; automatic recovery approval is disabled in this product build. Windows is unchanged.

## Install or update

Follow [the installation instructions](https://github.com/hyun06000/gil/blob/main/distribution/codex/INSTALL.md), including existing registrations, direct Claude Desktop registration, old GIL hook removal and rollback boundaries. Use a fixed tag, never moving main. GitHub Source ZIP is not an installation archive.

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.32 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

- [Installation archive](https://github.com/hyun06000/gil-marketplace/releases/download/v0.2.1-preview.32/gil-codex-macos-arm64-0.2.1-preview.32.tar.gz): 4298673 bytes.
- SHA-256: `c8b49fba94593118b463bb8800bc3e8623cac9b26c95c87a051b0b65df60b91b`.

Verify size, hash, safe archive paths and executable permissions before extracting into a new private version folder. Preserve license notices. No Apple Developer ID signing or notarization is provided. If macOS blocks execution, stop; never disable Gatekeeper or remove quarantine. Hashes verify bytes, not publisher identity.

Inspect existing registrations before replacement. Do not edit installed caches. GIL installs no Host hooks. Remove only old generated GIL hooks for the requested Host through the verified Core; preserve unrelated hooks and settings. Restart the app and use a new conversation. The actual registered executable must report `gil 0.2.1-preview.32`; the tool connection must report the same version.

Read gil_context before working on an existing project. Installation does not modify or migrate projects. To return to preview.31, preserve projects and this runtime, and use official Plugin commands or the previous direct Core path. Never delete .gil or restore world files to downgrade software. Exploration projects must continue with a supporting runtime.

## Verification and provenance

- Source: `f08a5e363da3b595678f426ea1be2cbb767be598`, [review #164](https://github.com/hyun06000/gil/pull/164).
- [Candidate checks](https://github.com/hyun06000/gil/actions/runs/44333305628): selected-profile regression, native startup, 35 tools, new exploration contract, embedded Monitor and archive roundtrip.
- Source snapshot: 997 files, `bd19fd5622383db33ac994eef568ecf427374d303a7b83c7baf24dd5af460dd2`.
- Core: `ce5798477dfc1576aed0a725c7c4dc30d250a0aa37d9746b7ccf450bb5bf7b57`.
- Embedded Monitor: `f06376f81e8ea0aa3d5ef16e6baebef0fc8e4af0a099427b153e8a8fc6024c7b`.
- Receipt: `0c98cf37aed904b9095a77dc798da74fd4f359cd94daa16a553be60a08faf0f8`.
- Immutable [receipt](release.json) and [evidence](evidence) retain reviewed source-automation bytes and attribution.

Actual installation, model behavior, visible/fullscreen Monitor and fresh-Mac acceptance remain pending user field testing. Existing user installations and settings are unchanged. The original publishable:false field records build-time authority; separate publication approval is recorded in the pull request and release.

Every main change uses a pull request and required pinned-payload checks. Keep GitHub no-reply identities.

```sh
node --test checks/verify.test.mjs checks/history.test.mjs
node checks/verify.mjs
node checks/history.mjs
```

These are static integrity/history checks, not installation acceptance.
[Source](https://github.com/hyun06000/gil) · [Support](https://github.com/hyun06000/gil/blob/main/SUPPORT.md) · [Private security reporting](https://github.com/hyun06000/gil/security/advisories/new)

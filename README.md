# GIL marketplace — unsigned preview

Prebuilt **Codex / macOS Apple Silicon** unsigned preview. Opt-in, not a stable release and not a
universal Plugins Directory listing. Source: [hyun06000/gil](https://github.com/hyun06000/gil).

| Version | State | Install pin |
|---|---|---|
| `0.2.1-preview.4` | **Prepared on this branch; NOT published.** No tag or release exists yet. | none yet — do not install from moving main |
| `0.2.1-preview.3` | Published, currently installable | tag `v0.2.1-preview.3` / commit `8445dbdb30c9cfe16a77245adcc4da56c9655b46` |

Until the owner publishes the `v0.2.1-preview.4` tag and versioned release, the installable version
remains preview.3 through its [release](https://github.com/hyun06000/gil-marketplace/releases/tag/v0.2.1-preview.3).
Never substitute moving `main` for a fixed tag.

## Install with Codex

No separate Companion, Node, npm, Cargo or Homebrew installation is required.
Apple Developer ID signing and notarization are not provided. Fresh-Mac acceptance is pending.
If macOS blocks execution, stop; never disable security, remove quarantine or edit caches.

Ask Codex (this installs the published preview.3; `0.2.1-preview.4` has no tag yet and must not be
requested until its release is published):

> Install GIL unsigned preview 0.2.1-preview.3 through official Plugin management.
> Register https://github.com/hyun06000/gil-marketplace.git at fixed tag v0.2.1-preview.3,
> then install gil-companion-prototype@gil-preview-macos-arm64.
> Confirm the tag exists and installed version is preview.3.
> If already installed, check its source/version and ask before replacing it.
> Do not initialize, migrate or modify my project.

After installation, open a **new conversation**, select an empty test folder and say:
**“지금 폴더에서 GIL 프로젝트를 시작해 줘.”**
The Skill connects start, Monitor and the first Interview question.
The App requests horizontal fullscreen once; Host refusal and intentional inline choice are respected.
Check the actual graph and first node. Tool success alone is not visual success.
For an existing project: “기록을 바꾸지 말고 GIL Monitor를 열어 줘”.

Agent commands using the CLI bundled with Codex (published preview.3 tag; a preview.4 command will be
added only after `v0.2.1-preview.4` is released):

```sh
codex plugin marketplace add https://github.com/hyun06000/gil-marketplace.git --ref v0.2.1-preview.3 --json
codex plugin add gil-companion-prototype@gil-preview-macos-arm64 --json
```

Existing registrations require inspection and approval before replacement.
Records stay in the chosen folder; tool responses enter the selected Host/AI conversation.
GIL provides no cloud upload service. Never share private project records in bug reports.

## What preview.4 adds (image reports)

- Verify and Cycle reports can carry images with caption, purpose and source description; the same
  image may be reused by several reports. The Monitor shows the selected report's images, enlarges an
  image on click and returns on click; clicking a Cycle rectangle opens its summary and report.
- Runtime profile `visual-authoring`: 24 MCP tools, action surface 2, storage formats 4..5.
- **Projects are not migrated by installing.** New image projects use format 5. Existing format-4
  projects keep working unchanged. Migration needs separate backup/recovery verification consent and
  then apply consent, per project. `update-record.json` therefore declares `migration: requires_review`.
- **Rollback warning:** preview.3 cannot read format-5 records ("storage format 5 is unknown"). That
  refusal is expected and is not data loss; downgrading the Plugin never downgrades project records.

## Exact provenance (preview.4 candidate)

- Source: `58659b4615531c02154cad582fc8ce900fe1d70c` (hyun06000/gil main after PRs #12–#17).
- CI (visual-authoring): [38541886780](https://github.com/hyun06000/gil/actions/runs/38541886780);
  default [38541880620](https://github.com/hyun06000/gil/actions/runs/38541880620).
- Original CI archive SHA-256: `330587c5ef0cd7ba2aabdbf756e5caf24ab5599673ac37cb02143a1661cd999f`.
- Candidate archive SHA-256: `b2c40ec3933a32ac3a74f56910f89555bb6b6428fd6d47959b3913513e47cdb4`
  (`gil-codex-macos-arm64-0.2.1-preview.4.tar.gz`).
- Core SHA-256: `e3c1f749189c9c1b3dee7897dbf8f9cd44ac472fd2b082dd956c19087933ea43`;
  UI SHA-256: `306e137986f918d61e0e5e39c73fbfd4aef6e77d334180e78af91a66bbd1381f`.
- Exact receipt (schema 3): [release.json](release.json); original checks/update record: [evidence](evidence).

Payload bytes/modes are copied unchanged from CI, not rebuilt here. Only the Plugin manifest version
and `PREVIEW.md` were versioned by the reviewed staging tool. The receipt's `publishable:false`
records build-time authority and is preserved. Owner approval is recorded by the publication PR/release,
not by rewriting the receipt. The original archive is not GitHub's Source ZIP. Hashes establish
consistency, not publisher authentication, Apple trust or fresh-machine acceptance.

## Acceptance and recovery

Isolated acceptance of this exact candidate on 2026-10-14: official Codex CLI installation into a
separate profile, preview.3 → preview.4 → preview.3 → preview.4 replacement (17 → 24 → 17 → 24 tools),
synthetic format-4/format-5 records and shared image references preserved across replacement and
MCP server restart. Desktop display acceptance of this exact executable and public download/install
of a published tag are recorded by the owner separately; they are not implied by this document.
Tauri and Claude work-mode acceptance remain separate. Windows and Intel are unsupported.

Previous verified version: preview.3 at marketplace commit
`8445dbdb30c9cfe16a77245adcc4da56c9655b46` (tag `v0.2.1-preview.3`). Preserve this immutable recovery ref.
Rollback uses official Plugin management with approval, never `gil restore` or deleting `.gil`.
Rolling back to preview.3 makes format-5 projects unreadable until preview.4 is reinstalled.

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

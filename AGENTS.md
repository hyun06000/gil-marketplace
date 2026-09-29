# GIL distribution maintenance

- This is a private built-artifact acceptance repository, not the GIL source checkout.
- Never initialize a GIL Project here or modify a user's Project or installed Plugin cache.
- Preserve the reviewed payload bytes, licenses, Plugin identity and executable bit. Do not rebuild in place.
- A changed payload requires a new reviewed version and corresponding source CI evidence; never silently
  replace the bytes for a version that has been published.
- Use a topic branch and PR for every main change. No direct main push, force push, history rewrite or bypass.
- Run `node --test checks/verify.test.mjs` and `node checks/verify.mjs` before proposing changes.
- Use GitHub no-reply identities for author, committer and tagger; check raw history, not mailmap output.
  Run `node --test checks/history.test.mjs` and `node checks/history.mjs` in a complete Git checkout.
  Do not print a rejected email or add it to a diagnostic commit, issue or PR.
- Static integrity is not publisher authentication, native execution, Host installation or visible fullscreen.
- No Apple signing/notarization or fresh-Mac acceptance is claimed. Never disable OS security checks.
- Installation, public visibility, tags/releases and marketplace publication are separate approval boundaries.
- Do not add credentials, user records, development paths, dependency caches or unrelated binaries.

---
name: tidecove-codegen-hygiene
description: >-
  Tidecove rule: never commit or push .codegen. Use when installing the repo,
  running zero-codegen, syncing paths, or deciding what belongs in git.
---

# Tidecove codegen hygiene

## Hard rule

**`.codegen` must never be committed or pushed to GitHub.**

It is gitignored. Teammates obtain a local copy from the architectural baseline:

`/Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen`

(or an equivalent copy of that tree). After copying, run:

```bash
pnpm codegen:paths
```

## Allowed in git

- OpenAPI YAML under `packages/openapi-core/src/`
- Generated TypeScript layers under `packages/core`, `platform/*` (except Postman generated paths if ignored)
- Cursor rules/skills that *document* this policy

## Not allowed in git

- `.codegen/`
- `packages/openapi-core/src/.bundled/`
- `platform/tests/postman/generated/`
- `**/integration-events/generated/`

## Package scope

Use `@tidecove/*` — no `ai-` / `zero-` package prefixes.

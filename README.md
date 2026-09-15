# Tidecove

OpenAPI-first DDD monorepo for the Tidecove enterprise AI-data exchange.

## Package scope

`@tidecove/*` — no `ai-` / `zero-` prefixes.

## Bootstrap

1. Copy `.codegen` from `zero-apps-codegen-scaffold` if missing (never commit it).
2. `pnpm install && pnpm codegen:paths`
3. `pnpm lint:openapi && pnpm bundle:openapi`
4. `pnpm build`
5. `pnpm dev:api` → http://127.0.0.1:4000/health  
   Demo key: `X-API-Key: tidecove_demo_local_dev_key`
6. `pnpm dev:web` → http://127.0.0.1:5173/login

Product specs: [PRODUCT.md](PRODUCT.md), [WEBAPP.md](WEBAPP.md), [USER_STORIES.md](USER_STORIES.md).  
OpenAPI source of truth: `packages/openapi-core/src/` (skeleton archived at `docs/openapi-skeleton.yaml`).

## Codegen

- **New domain:** Mode A full generate once.
- **YAML edit:** Mode B — `pnpm codegen:core` then handwrite lower layers.
- `.codegen/` is gitignored and must never be pushed.

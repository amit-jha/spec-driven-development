# Phase 0: Project skeleton — Requirements

## Context
First phase of the roadmap (`specs/roadmap.md`). The repo currently holds only specs. This phase lays down the runnable foundation every later slice builds on, using the stack in `specs/tech-stack.md`. No product features ship here.

## Scope
- Next.js (App Router) + TypeScript (strict) + Tailwind CSS, scaffolded at the **repo root** with a `src/` directory, using npm.
- PostgreSQL via Docker Compose for local dev.
- Prisma installed and connected to the database: datasource + generator only, **no models**.
- A shared Prisma client helper (`src/lib/db.ts`) safe for Next.js dev hot reload.
- `prisma/seed.ts` stub wired into `package.json` (`prisma.seed`), doing nothing yet.
- `GET /api/health` route that runs `SELECT 1` through Prisma and reports DB status.
- Vitest with one passing unit smoke test.
- Playwright with one passing e2e smoke test against the home page.
- ESLint + Prettier configured.
- npm scripts: `dev`, `build`, `lint`, `typecheck`, `format`, `test`, `test:e2e`, `db:up`, `db:seed`.
- `.env.example` with `DATABASE_URL`; README updated with local setup steps.

## Out of scope
- Any domain models (`User` arrives in Phase 1, `Doctor` in Phase 2).
- Mock users, role switcher, `getCurrentUser()` (Phase 1).
- CI pipeline.
- Real auth, Zod schemas (added when first form appears).

## Decisions
- **Root-level app with `src/`** — single module for now; keeps `specs/` beside the code.
- **Connection only for Prisma** — models land with the phases that need them; a health route proves connectivity instead of a placeholder model.
- **Health route** — `/api/health` returns `200 { status: "ok", db: "up" }` when the DB responds, `503 { status: "error", db: "down" }` otherwise.
- **Prisma client singleton** — cached on `globalThis` in development to avoid exhausting connections on hot reload.
- **Times / time zone** — not exercised yet; convention (UTC storage) applies from Phase 3 onward.

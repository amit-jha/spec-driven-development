# Phase 0: Project skeleton — Validation

Phase 0 can be merged when all of the following pass on a fresh clone.

## Setup
- [ ] `npm install` completes without errors.
- [ ] `cp .env.example .env && npm run db:up` starts PostgreSQL.
- [ ] `npx prisma validate` and `npx prisma generate` succeed.
- [ ] `npm run db:seed` runs (no-op) without errors.

## Quality gates
- [ ] `npm run lint` passes with no errors.
- [ ] `npm run typecheck` passes (strict mode on).
- [ ] `npm run build` succeeds.
- [ ] `npm test` passes (at least one Vitest test).
- [ ] `npm run test:e2e` passes (at least one Playwright test).

## Manual checks
- [ ] `npm run dev` → `http://localhost:3000` renders the ManageMyClinic landing page with Tailwind styles applied.
- [ ] `GET /api/health` returns `200 { "status": "ok", "db": "up" }` while Postgres is running.
- [ ] After `docker compose stop`, `GET /api/health` returns `503 { "status": "error", "db": "down" }`.

## Scope check
- [ ] `schema.prisma` contains no models.
- [ ] No `.env` or secrets committed.
- [ ] README setup steps work as written.

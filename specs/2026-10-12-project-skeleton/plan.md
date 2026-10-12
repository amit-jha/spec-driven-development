# Phase 0: Project skeleton — Plan

## 1. Scaffold the app
1. Run `create-next-app` at the repo root: TypeScript, App Router, Tailwind, ESLint, `src/` dir, npm, import alias `@/*`.
2. Confirm `tsconfig.json` has `"strict": true`.
3. Replace the default home page with a minimal "ManageMyClinic" landing page.
4. Merge `.gitignore` entries; keep `specs/`, `README.md`, `prompts.md` intact.

## 2. PostgreSQL via Docker Compose
1. Add `docker-compose.yml` with a `postgres:16` service, named volume, and port 5432.
2. Add `.env.example` with `DATABASE_URL`; ensure `.env` is git-ignored.
3. Add `db:up` script (`docker compose up -d`).

## 3. Prisma connection
1. Install `prisma` and `@prisma/client`; run `prisma init`.
2. Keep `schema.prisma` to datasource (postgresql) + generator only.
3. Add `src/lib/db.ts` exporting a singleton `PrismaClient`.
4. Add stub `prisma/seed.ts`, the `migrations.seed` entry in `prisma.config.ts`, and `db:seed` script (via `tsx`).
5. Add `src/app/api/health/route.ts` running `SELECT 1` and returning 200/503 per requirements.

## 4. Vitest
1. Install and configure Vitest (`vitest.config.ts` with `@/*` alias).
2. Add one unit smoke test (e.g. a tiny utility or the health response builder).
3. Add `test` script.

## 5. Playwright
1. Install Playwright and Chromium; add `playwright.config.ts` with `webServer` starting the app.
2. Add `e2e/smoke.spec.ts`: home page loads and shows "ManageMyClinic".
3. Add `test:e2e` script; exclude `e2e/` from Vitest.

## 6. Lint, format, typecheck
1. Add Prettier + `eslint-config-prettier`; add `format` script.
2. Add `typecheck` script (`tsc --noEmit`).
3. Run all and fix any issues.

## 7. Docs
1. Update `README.md` with prerequisites and setup: `npm install`, `cp .env.example .env`, `npm run db:up`, `npm run dev`, test commands.

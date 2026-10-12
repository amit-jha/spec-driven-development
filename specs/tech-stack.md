# Tech Stack

| Concern | Choice |
|---|---|
| Language | TypeScript (strict mode) |
| Framework | Next.js (App Router), full-stack: React Server Components, Server Actions / Route Handlers |
| UI | React + Tailwind CSS |
| Database | PostgreSQL |
| ORM / migrations | Prisma |
| Validation | Zod (shared between forms and server) |
| Auth (initial) | **Mock users**: a seeded user per role plus a role switcher in dev; no passwords |
| Auth (later) | Auth.js (NextAuth), swapped in behind the same session/role interface |
| Unit / integration tests | Vitest |
| End-to-end tests | Playwright |
| Lint / format | ESLint + Prettier |
| Package manager | npm |
| Local dev | Docker Compose for PostgreSQL |

## Conventions
- **Mock auth behind an interface**: all code reads the current user via a single `getCurrentUser()` helper, so real auth can replace mock users without touching features.
- **Authorization on the server**: role checks happen in server code, never only in the UI.
- **Conflict prevention in the database**: double-booking is prevented by DB constraints (e.g. unique doctor + start time), not only by application checks.
- **Times**: stored in UTC; displayed in the clinic's single configured time zone.
- **Seed data**: `prisma/seed.ts` creates mock users for each role and sample doctors.

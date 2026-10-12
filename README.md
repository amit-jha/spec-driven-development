# ManageMyClinic

## ManageMyAppointments
The Appointment Management module allows patients and clinic staff to schedule, view, reschedule, and cancel doctor appointments. It helps prevent scheduling conflicts and provides visibility into appointment status and doctor availability.

### Features
- Book Appointment: Patients or authorized staff can book appointments with available doctors.
- View Appointments: View upcoming and past appointments.

### Users and Role

- Patient: Book, view, reschedule, and cancel own appointments
- Doctor: View appointments and manage availability
- Receptionist: Schedule and manage appointments on behalf of patients
- Clinic Administrator: Configure appointment rules and oversee scheduling

## Development

### Prerequisites
- Node.js 20+ and npm
- Docker (for the local PostgreSQL database)

### Setup
```bash
npm install                 # also generates the Prisma client
cp .env.example .env
npm run db:up               # start PostgreSQL via Docker Compose
npx playwright install chromium   # first time only, for e2e tests
npm run dev                 # http://localhost:3000
```

`GET /api/health` reports whether the app can reach the database.

### Scripts
| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generate Next.js route types and run `tsc` |
| `npm run format` / `format:check` | Prettier |
| `npm test` | Unit tests (Vitest) |
| `npm run test:e2e` | End-to-end tests (Playwright; starts the dev server) |
| `npm run db:up` | Start PostgreSQL |
| `npm run db:seed` | Seed the database |

Specs for each phase of work live in [`specs/`](specs/).

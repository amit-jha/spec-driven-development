# Roadmap

High-level implementation order. Each phase is a **thin vertical slice**: small, runnable end-to-end, and demoable. Each phase gets its own spec in `specs/` before implementation.

## Phase 0: Project skeleton
- Scaffold Next.js + TypeScript + Tailwind
- PostgreSQL via Docker Compose, Prisma connected
- Vitest and Playwright wired up with one passing smoke test

## Phase 1: Mock users & roles
- `User` model with role (Patient, Doctor, Receptionist, Admin)
- Seed one mock user per role
- Role switcher in the header; `getCurrentUser()` helper

## Phase 2: List doctors
- `Doctor` model and seed data
- Page listing the clinic's doctors (visible to all roles)

## Phase 3: Doctor availability (fixed slots)
- Simple availability model (weekly working hours, fixed slot length)
- Show a doctor's open slots for a selected date

## Phase 4: Book an appointment (Patient)
- `Appointment` model with DB constraint preventing double-booking
- Patient picks a doctor + open slot and books it
- Booked slot disappears from availability

## Phase 5: View my appointments (Patient)
- Upcoming and past appointments for the current patient

## Phase 6: Cancel an appointment (Patient)
- Patient cancels an upcoming appointment; status becomes Cancelled; slot frees up

## Phase 7: Reschedule an appointment (Patient)
- Patient moves an upcoming appointment to another open slot (atomic)

## Phase 8: Doctor's schedule (Doctor)
- Doctor views their own upcoming and past appointments

## Phase 9: Doctor manages availability (Doctor)
- Doctor edits working hours and blocks time off

## Phase 10: Book on behalf of a patient (Receptionist)
- Receptionist selects a patient and books / cancels / reschedules for them

## Phase 11: Clinic-wide schedule (Receptionist & Admin)
- Day view of all doctors' appointments

## Phase 12: Appointment rules (Admin)
- Configure slot length, booking window, and cancellation cutoff
- Rules enforced in booking, cancel, and reschedule flows

## Phase 13: Real authentication
- Replace mock users with Auth.js behind `getCurrentUser()`

## Later / backlog
- Appointment statuses beyond Scheduled/Cancelled (Completed, No-show)
- Email/SMS confirmations and reminders
- Audit log of scheduling changes

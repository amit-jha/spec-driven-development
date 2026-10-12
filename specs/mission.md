# Mission

## Purpose
ManageMyClinic helps a **small, single-location clinic** run its day-to-day scheduling. The first module, **ManageMyAppointments**, lets patients and staff book, view, reschedule, and cancel doctor appointments simply and reliably.

## Who it serves
- **Patients**: book, view, reschedule, and cancel their own appointments.
- **Doctors**: see their appointments and manage their availability.
- **Receptionists**: schedule and manage appointments on behalf of patients.
- **Clinic Administrators**: configure appointment rules and oversee scheduling.

## Goals
1. **No double-bookings**: a doctor can never have two appointments in the same slot.
2. **Clear visibility**: everyone sees the appointment status and doctor availability relevant to their role.
3. **Simplicity**: a few doctors, one location, minimal configuration, and a UI that is obvious to non-technical staff.

## Principles
- **Spec first**: every feature starts as a short spec in `specs/` before any code is written.
- **Small, shippable steps**: work moves in thin vertical slices that each run end-to-end (see `roadmap.md`).
- **Role-based access**: each user sees and changes only what their role allows.
- **Correctness over features**: scheduling integrity (no conflicts, valid times) matters more than extra functionality.

## Out of scope (for now)
- Multiple clinic locations or multi-tenant SaaS
- Billing, payments, and insurance
- Medical records / EHR
- Real authentication (mock users are used until a later phase)
- Notifications (email/SMS)

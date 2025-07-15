# IoT TODO / Risk & Unknowns

This document tracks open questions, risks, and pending implementation details related to the IoT integration and platform backend.

---
Currently pursuing -- Week 2 tasks --
---

## 🔐 Auth & Security
- [ ] Phone OTP auth requires pro subscription
- [ ] Currently email auth is selected by default

## ⏰ Scheduling
- [ ] Complete week 2 tasks by end of the week
- [ ] Review meet scheduled on Saturday

## 🔌 IoT Integration
- [ ] Confirm API contract between Supabase and IoT lock hardware
- [ ] Fallback or retry mechanism for failed unlock signals

## 🧪 Testing
- [ ] How will we simulate lock behavior in dev/staging environments?
- [ ] Add test cases for edge cases like overlapping bookings or network failure

## 🧾 Payments
- [ ] Confirm flow for capturing payments via Stripe during booking
- [ ] Add logic for handling refunds or partial charges for early returns

---

_Last updated: 15/05/2025

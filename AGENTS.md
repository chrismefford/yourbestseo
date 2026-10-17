# Architecture rules
- Render authority-guide navigation once in RootLayout for `/authority/*`; other pages retain their own headers to avoid duplicates.
- Keep Chris Mefford's personal biography at `/about` with page-specific metadata, so existing About links remain useful.
- Keep the AI awareness quiz and scoring in a shared pure module, with the checker UI separate from its page, so scoring and lead payloads are testable.
- Keep `/free-audit` as the AI awareness checker entry point so existing inbound links continue to work.
- Send optional AI business review requests through the existing contact email function; report success only after its confirmed response.
- Preserve `/services` as a business-growth overview using shared outcome sections, rather than deleting the URL, so inbound links remain useful.
- Booking slot rules live in supabase/functions/_shared/booking-slots.ts (pure, tested from tests/); the single `booking` function handles slots, lead capture, and calendar events so leads are saved even when email fails.
- Keep SMS consent wording and validation in the shared pure consent module; the booking function stores server-authored, timestamped evidence in a service-only append-only table before calendar creation so visitor consent is auditable and never inferred from a phone number.

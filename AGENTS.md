# Architecture rules
- Render authority-guide navigation once in RootLayout for `/authority/*`; other pages retain their own headers to avoid duplicates.
- Keep Chris Mefford's personal biography at `/about` with page-specific metadata, so existing About links remain useful.
- Keep local-search finding rules in a pure module beside the public website-check function, with the UI separate from its page, so findings and access rules are testable.
- Keep `/free-audit` as the opportunity-check entry point so existing inbound links continue to work.
- Store opportunity reports and report requests in service-only tables, send server-authored saved reports through the existing email provider, and confirm success only after provider acceptance so reports cannot be forged or falsely marked sent.
- Validate public DNS addresses and every redirect before bounded website fetches, and mark unreadable checks unknown so the checker never invents results.
- Preserve `/services` as a business-growth overview using shared outcome sections, rather than deleting the URL, so inbound links remain useful.
- Booking slot rules live in supabase/functions/_shared/booking-slots.ts (pure, tested from tests/); the single `booking` function handles slots, lead capture, and calendar events so leads are saved even when email fails.
- Keep SMS consent wording and validation in the shared pure consent module; the booking function stores server-authored, timestamped evidence in a service-only append-only table before calendar creation so visitor consent is auditable and never inferred from a phone number.

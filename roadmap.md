# AI awareness giveaway
- [x] Replace the former public phone number everywhere with (619) 903-6599; verified call links and search-engine schemas on six pages, and deployed updated chatbot, booking fallback, and transcript contact messages.
- [x] Diagnose Twilio setup: no saved connection; prior prompts were interrupted, not provider rejections. Uploaded screenshot exposed an API-key secret; Chris must revoke it and enter replacement credentials securely.
- [x] Connect Twilio directly, as approved by Chris: Account SID and Auth Token saved securely; direct read-only phone-number request returned HTTP 200. No texts sent.
- [x] Draft answers for Twilio’s message-flow and opt-in-proof fields; final submission waits on actual consent form and matching public privacy/SMS terms pages.
- [x] Add optional, unchecked appointment-SMS consent, linked SMS terms/privacy disclosures, and stored consent evidence; Chris chose owner alerts plus visitor appointment confirmations/reminders.
- [ ] Enable owner and opted-in visitor SMS — direct Twilio credentials verified; Chris reports campaign submitted and pending review, sending number +16199036599. Blocked by campaign approval; SMS sending and STOP/HELP handling still need implementation and verification. Enable SMS Pumping Protection and review SMS Geo Permissions before production sends.
- [x] Restore visible headers across affected pages and verify navigation.
- [x] Replace About with Chris Mefford's personal biography and add an About Me menu link.
- [x] Replace service catalog navigation and homepage messaging with awareness, appointments, and search rankings.
- [x] Verify updated navigation and outcome-focused pages in the preview.
- [x] Build awareness quiz, score, and optional business review request.
- [x] Replace main giveaway entry points and exit popup offer.
- [x] Verify quiz, popup, mobile form, and focused scoring/lead tests.
- [ ] Complete successful review email delivery — blocked by unverified yourbestseo.com sender domain in Resend; live request correctly shows failure instead of false success.- [x] Show phone number in header; replace "Let's Talk" with Book a Call.
- [x] Google Calendar booking (30 min, phone/Zoom) at /book and inside the AI checker funnel.
- [x] Funnel: quiz → contact capture → score → free Google Business review offer → booking.
- [ ] Email alerts to Chris for new leads/bookings — blocked by the same unverified Resend domain (calendar event still lands on his calendar).

# Get the new site live on yourbestseo.com
- [x] Point yourbestseo.com and www at Lovable instead of Vercel — both A + TXT records publicly visible and verified; root domain status recovered to "active_provisioning", www still shows a stale "drifted" label and should recover on its own.
- [x] Set non-www as the primary domain so www redirects to it — confirmed primary: true on yourbestseo.com, www redirects to it.
- [ ] Publish the current version so the new site replaces the old white-label page on the domain — publish was declined this turn; re-run when Chris is ready.
- [ ] Re-check the live site after the switch: new homepage, /book, no blog.

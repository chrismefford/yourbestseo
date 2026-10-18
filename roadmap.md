# Retire outdated agency pages
- [x] Delete pricing and white-label pages, remove incoming links and reseller pitches from related guides, and exclude both URLs from the sitemap. Old URLs show the noindex unavailable page; browser verification and seven SEO tests passed.
- [ ] Publish these removals to the live site; existing search listings can take time to disappear after recrawling.

# Google Analytics
- [x] Connect GA4 and install the requested Google tag using the public connector measurement ID, without literal secret placeholders.
- [x] Add page-view, free-check-start, contact-submission and successful-booking events without personal details. Browser verified one tag and queued page-view/free-check events; preview build OK.
- [ ] Confirm event receipt in Google Analytics after publishing; contact and booking completion events are installed but not exercised with a real lead/appointment.

# Sitewide SEO and navigation review
- [x] Check all 229 registered routes in published HTML and preview: 228 content pages have unique titles/descriptions, self-referencing canonicals and parseable JSON-LD; payment-success lacks metadata. All 89 LocalBusiness schemas contain url, telephone and address. Live content is pre-rendered; actual Google indexing not checked.
- [x] Check rendered links, section targets and public phone numbers: 103 broken internal link occurrences, 56 missing destinations; one external client link returns 404. All tel/SMS links use +16199036599. About booking CTA opens /book with 15 real slots; no booking submitted. No runtime page errors across 229 preview routes.
- [x] Repair neighborhood/question links and remove the dead external destination; recheck all 229 preview routes: zero broken internal links or runtime errors, descriptions present, and booking opens 15 real slots. Remove unsupported SearchAction and nonexistent schema/share images; add payment/404 metadata and correct support email.
- [x] Refresh the existing sitemap to 228 public indexable routes, excluding payment confirmation and removed blog; preserve existing dates of unknown provenance and stop adding generation-time dates. Add source homepage metadata isolated from route heads. Thirteen focused tests pass; preview build OK.
- [ ] Verify proper HTTP 404 status after publishing — current published unknown URLs return homepage HTTP 200; requires a new deployment and hosting-level response verification. Actual Google indexing remains unverified without Search Console data.

# Research-backed local search content
- [x] Research Google Maps, Google search and AI visibility using US Semrush demand (local SEO services: 27,100/month; answer engine optimization: 6,600/month), official Google/OpenAI/Anthropic guidance and observed WebFX/Thrive pages. Demand does not imply easy rankings.
- [x] Add separate homepage AI search/AEO/LLM and Google Maps/organic sections, generated dentist/HVAC/construction imagery, illustrative customer questions, Chris's experience and audit booking link. Include source links and no-guarantee boundaries.
- [x] Verify sections and image rendering, four working official source links, audit CTA opening /book, desktop/mobile layouts without horizontal overflow, no runtime errors, focused lint and preview build OK. No booking created; publishing not requested.
- [x] Restyle the dentist/HVAC/construction trio as spaced cards with the middle one in the bright brand yellow, and remove the illustrative-questions disclaimer line; verified colors, spacing and readability on desktop and phone.


# Homepage focus and booking navigation
- [x] Replace the vague homepage check button with one larger AI-search-readiness action; remove the second hero booking button. Verified desktop/mobile and entry into the check.
- [x] Check booking links across pages, correct conversation links on About/growth/shared CTAs to /book, and verify the calendar opens with real slots and selectable Phone/Zoom choices; no test appointment created.

# AI awareness giveaway
- [x] Simplify the giveaway to ten tailored customer prompts and three plain-language ways to get found; real generated report verified, download contents and counts tested (13 tests passed).
- [x] Add and verify an AI-written overall SEO/AI assessment and three evidence-based next steps before contact capture; real website review returned three steps and a public search source, download worked, desktop/mobile checked.
- [x] Replace quiz with Local Search Opportunity Check, verified findings before contact capture, private report/lead storage and optional follow-up consent.
- [x] Verify real public-website checks, saved request/consent, report download, help link, and desktop/mobile layouts; 23 tests passed.
- [ ] Deliver opportunity reports by email — verified provider rejection: yourbestseo.com sender domain is unverified in Resend; requests remain saved and downloads work.
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

# Brightstone Digital update report

The existing Next.js App Router project now presents website development first,
followed by optional eligible AI trials and separately agreed paid continuation.
Public fixed prices were removed, including metadata and FAQs. No trial durations
are published. All six services have pages and navigation links. Responsive dark
styles and existing interactive demonstrations are retained.

## Files modified for this task

- `README.md`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/pricing/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/services/page.tsx`
- `src/app/services/ai-receptionist/page.tsx`
- `src/app/api/enquiries/route.ts`
- `src/app/sitemap.ts`
- `src/app/globals.css`
- `src/components/forms/ContactForm.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/home/Hero.tsx`
- `src/components/sections/home/HowItWorks.tsx`
- `src/components/sections/home/ServicesGrid.tsx`
- `src/components/sections/home/PricingPreview.tsx`
- `src/data/services.ts`
- `src/data/pricing.ts`
- `src/data/navigation.ts`
- `src/data/faqs.ts`
- `src/data/industries.ts`
- `src/lib/enquiry.ts`
- `src/lib/enquiry-response.ts`
- `test/api.test.mjs`
- `test/enquiry.test.mjs`

Other modifications already existed before this task and were preserved.

## Files created

- `src/app/services/websites/page.tsx`
- `src/app/services/ai-chatbots/page.tsx`
- `src/app/services/booking-automation/page.tsx`
- `src/app/services/review-management/page.tsx`
- `src/app/services/customer-followups/page.tsx`
- `src/components/sections/ServicePage.tsx`
- `src/components/sections/home/TrialSection.tsx`
- `src/data/trials.ts`
- `WEBSITE-UPDATE.md`

## Preserved functionality

Existing routes, receptionist simulation, UI components, form error/focus handling,
request size limits, server validation, no-store responses and explicit demo 503
behaviour remain. Existing payloads remain compatible. Workflow automation is
still described on the services overview. No dependencies or integrations removed.
No new paid dependencies, database, trackers or live AI integrations added.

## Validation

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm test`: passed (three test files).
- `node --experimental-strip-types --import ./test/register.mjs --test --experimental-test-isolation=none test/*.test.mjs`: all 69 tests passed, including new optional-field, honeypot and origin tests.
- `git diff --check`: passed.
- Source search found no currency amounts, monthly prices or setup fees.
- `npm run build`: passed after the main implementation and generated all six
  service routes. The final rerun after small copy, response validation and test
  changes failed due to an environment restriction: Turbopack CSS worker could
  not bind a local port (`Operation not permitted`). An escalated retry encountered
  the same restriction. Final production build verification remains outstanding.
- Browser viewport, keyboard interaction and screen-reader testing were not run.
  Responsive breakpoints and native keyboard disclosure are implemented, but this
  is not a claim of completed visual/device testing.

## Remaining configuration

Set `NEXT_PUBLIC_SITE_URL` to the verified production HTTPS origin for canonical,
Open Graph and sitemap URLs. No other environment variable was introduced.

The existing API has no email integration. It validates and returns 503 without
storing or sending data. Before launch, connect secure delivery, verify recipient
and sender, implement confirmed-success UI, and configure hosting-level rate
limits. No email credentials are currently supported. The form never claims
successful delivery. Complete draft privacy/cookie notices with verified business
and processing details. No business telephone, email, address or terms were supplied.

Trial policy copy lives in `src/data/trials.ts`; durations and customer-specific
terms are intentionally agreed outside this marketing website. No activation
system or universal entitlement is implied.

## Commit and push commands

The current branch is `dev/premium-design`; no commits, pushes or deployments
were performed. Review existing uncommitted work before staging; the following
commands create a separate branch and include the complete current working tree:

```bash
git switch -c feat/website-first-services
git diff
git status --short
git add README.md WEBSITE-UPDATE.md src test
git commit -m "Update Brightstone website-first services and optional AI trials"
git push -u origin feat/website-first-services
```

Run `npm run build` in an environment that permits Turbopack local workers before
merging. Do not merge or deploy directly to main as part of these commands.

# Demo and Placeholder Cleanup

This section supersedes earlier references in this report to retained simulations
and draft banners.

1. **Demo elements removed:** homepage demonstration, receptionist transcript
   player, preview card, fictional caller names/numbers, related scenario data,
   demo-specific FAQ, draft banners and self-referential unfinished copy.
   Deleted now-unused simulation components, `DraftNotice` and the obsolete
   `PricingPreview` compatibility export.
2. **Placeholder content replaced:** contact and about copy now explains the
   services and consultation process. Privacy and cookie pages describe current
   application behaviour without claiming to be a complete legal policy.
   Removed unused starter SVG assets and default `favicon.ico`; the existing
   Brightstone `src/app/icon.svg` supplies the branded browser icon. No invented
   business information or social proof was introduced. README starter material
   was replaced with project-specific setup instructions.
3. **Mock functionality removed:** the API no longer returns a demo marker.
   Valid submissions return a genuine unavailable error, HTTP 503. The form
   shows that online enquiries are unavailable before entry, keeps entered data
   on failure, and never reports delivery. The special demo screen and state
   have been removed. Server validation, size limits, origin and honeypot checks
   remain. No simulated acceptance or fallback delivery exists.
4. **Real integrations verified:** repository inspection found no real enquiry
   delivery provider or credentials integration. Only `NEXT_PUBLIC_SITE_URL`
   is read from the environment. There is no live success path to test; tests
   confirm that even unexpected 200/201/202 payloads cannot be presented as
   successful submission. No external acceptance or real email delivery was
   claimed or tested.
5. **Remaining configuration:** provide a verified delivery destination and
   secure provider configuration, then implement provider-confirmed acceptance,
   safe failure handling and a corresponding success UI. Configure hosting-level
   rate limits. Set the verified `NEXT_PUBLIC_SITE_URL`. No credentials were
   invented. Complete privacy information with verified controller contact,
   hosting/processor, retention and processing details before accepting enquiries.
6. **Unfinished development/verification:** real enquiry delivery remains
   unavailable; the page explicitly states this. No alternative contact details
   were supplied. Customer-specific AI services need their agreed configuration
   and integrations. No booking-calendar promise or unimplemented booking link
   remains. Browser viewport and keyboard checks are outstanding because no
   browser tool or installed browser is available in this environment.

Cleanup validation:

- ESLint passed; TypeScript passed; `git diff --check` passed.
- All 64 updated tests passed using the Node test runner with process isolation
  disabled. They cover validation, request rejection, unavailable delivery,
  unexpected success responses and safe client error messages.
- Static audit checked 21 internal links with no missing route targets; checked
  deleted-component references and empty links. Data-driven service links were
  included. This is not a browser interaction test.
- No visible demo/draft/simulation content remains in `src` or `public`. The
  legitimate CSS `::placeholder` selector remains. Test/development records are
  retained. Useful illustrative service use cases remain and are not presented
  as customer evidence.
- Common private-key and token pattern scan found no matches in application
  source. No secret values were read or printed. This is a limited source scan,
  not an assurance about hosting configuration or repository history.
- `npm run build` was executed and failed because the Turbopack CSS worker cannot
  bind a local port in this environment (`Operation not permitted`). Production
  build verification must be completed in an environment allowing that worker.

Nothing was pushed or deployed. This cleanup does not establish production
readiness while delivery, business privacy details and runtime checks are pending.

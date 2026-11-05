# Brightstone Digital

Next.js 16, React, TypeScript and Tailwind CSS 4 agency website.

```bash
npm install
npm run dev
```

## Local tests

Use Node.js 22.15 or later in the Node 22 release line (verified with
22.23.4). `npm test` uses the built-in test runner, TypeScript stripping and
`module.registerHooks`; no additional test dependencies are required. The
test-only resolver supports the application alias and imports the actual
enquiry route handler with the installed Next.js implementation. Tests use
synthetic data and do not send network requests.

The enquiry endpoint returns HTTP 503 for valid enquiries while delivery is unavailable.
It does not store, email or forward personal information. Browser interaction
and responsive visual checks remain separate from these automated tests.

## Website-first services update

The existing App Router architecture, design components and enquiry validation are retained. Websites are the entry point; AI services
are optional. `/pricing` now provides custom quotations. The six service pages
share data in `src/data/services.ts`; `ServicePage.tsx` renders their details.
Public trial copy and eligible service categories are centralised in
`src/data/trials.ts`. No durations are published or automatic trials activated.
Eligibility, duration, usage limits and paid continuation must be agreed per
customer; the marketing website does not enforce or activate those agreements.

### Configuration and remaining launch work

- Set `NEXT_PUBLIC_SITE_URL` to the verified HTTPS production origin before
  building for production. It supplies canonical and Open Graph URLs, sitemap
  entries and the robots sitemap reference. Unset means these domain-dependent
  values are omitted rather than fabricated.
- There is **no existing email provider integration** and no email credentials
  to set. The endpoint deliberately returns 503 after validation. Configure a
  secure delivery provider and verified destination before accepting enquiries;
  update the response interpreter and form to recognise success only after
  confirmed acceptance. The current form explicitly reports that enquiries cannot be sent.
- New optional fields retain compatibility with older enquiry payloads.
  Both client and server validate values and lengths. The API limits body size,
  checks browser request origin and rejects a hidden honeypot field. Before
  connecting delivery, configure hosting-level rate limits/abuse controls;
  these basic checks do not stop all scripted requests.
- Complete the privacy information using verified controller
  contact details, processors, retention and lawful basis before public launch.
  There are no supplied terms, business address, telephone or email to publish.
  No tracking, AI providers, database or paid dependencies were added.
- Responsive grid breakpoints, mobile navigation, native keyboard-operable
  service disclosure, focus controls and reduced-motion styles are retained.
  A browser/device visual and assistive-technology review is still recommended;
  build and unit tests do not establish visual accessibility or legal compliance.

Validation commands: `npm run lint`, `npx tsc --noEmit`, `npm test`,
`npm run build`. No deployment or push is part of this update.

## Demo and placeholder cleanup

Public call simulations and unused starter assets have been removed. The branded
`src/app/icon.svg` is the browser icon. The enquiry API has no demo response or
simulated success: without a delivery integration it validates and returns HTTP
503. The UI states this limitation before entry. See `WEBSITE-UPDATE.md` for the
cleanup audit, validation results and remaining launch requirements.

## Cloudflare Workers and enquiry availability

See [CLOUDFLARE.md](./CLOUDFLARE.md) for the manual OpenNext setup, local preview
commands, required Cloudflare resources, hydration investigation and validation
limits. Online sending is disabled until real delivery is implemented and tested;
the form retains its customer fields and validation. No deployment is automatic.

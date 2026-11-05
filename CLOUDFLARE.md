# Cloudflare Workers preparation and enquiry status

## Changes in this update

Modified: `.gitignore`, `package.json`, `package-lock.json`, `eslint.config.mjs`,
`tsconfig.json`, `README.md`, `src/components/forms/ContactForm.tsx`,
`src/app/api/enquiries/route.ts`, `src/lib/enquiry-response.ts`,
`src/app/contact/page.tsx`, `src/app/privacy/page.tsx`.

Created: `src/lib/enquiry-availability.ts`, `open-next.config.ts`,
`wrangler.jsonc`, `.dev.vars.example`, `public/_headers`, `CLOUDFLARE.md`.
Existing unrelated working-tree changes were preserved.

## Contact and enquiry audit

No public business email, telephone, street address, mailto or tel link was found
in application pages, components, public assets, metadata or public configuration.
No further contact details needed removal. The general UK location and contact
page links remain. Customer email/phone inputs and private configuration remain.

There is no email delivery integration. The capability in
`src/lib/enquiry-availability.ts` remains disabled. The submit button is disabled
in server-rendered HTML and the handler guards against submission, including
implicit submission. One status notice describes the temporary unavailability
and is associated with the form through `aria-describedby`. The form's fields,
client validation, focus handling and server validation remain. No repeated
unavailable alert is displayed. Direct API requests still return 503 after
validation; neither UI nor API reports acceptance. No technical exception details
are sent to visitors.

Activation requires implementing secure provider delivery, configuring a verified
sender/recipient, testing actual acceptance and failure, and implementing a
confirmed-acceptance UI before changing the capability flag. Flipping the flag
alone cannot make enquiries work. Apply hosting rate limits and complete the
business privacy information before activation. No new email credentials were
invented and no existing private configuration was deleted.

## Hydration investigation

The email input has `type="email"`, `name="email"`, an associated label,
`autoComplete="email"`, and a stable empty string from `emptyEnquiry()`. The form
has no nested forms or invalid block nesting, no random/time values, no browser
storage reads, and no window-dependent initial rendering. Two independent server
renders produced identical markup. Checks confirmed email and telephone inputs,
disabled submit and one associated status notice. No suppression, delayed client
rendering, autocomplete removal or invented input value was added.

The reported client mismatch could not be reproduced here: no browser is available
and local port binding is restricted. Browser extensions/password managers that
mutate input attributes before React hydrates remain a possibility, not a verified
cause. Recheck in a clean browser profile with extensions disabled, then compare
the exact server/client attribute diff. Browser hydration remains unverified.

## Workers integration

Installed pinned development tools: `@opennextjs/cloudflare` 1.20.16 and Wrangler
4.148.0. The adapter's published peer range includes the installed Next.js 16.4.5.
The existing Next.js app/build, React, Tailwind, Cache Components and PPR remain.
No vinext/Vite migration, static export or edge-runtime conversion was introduced.

Cloudflare currently recommends vinext for new projects. OpenNext was selected
for this existing app to preserve Next.js architecture and build behaviour:
https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/
https://opennext.js.org/cloudflare/get-started
https://opennext.js.org/cloudflare/caching

Wrangler references `.open-next/worker.js`, assets, Node compatibility, a self
service binding, R2 incremental cache, and the adapter's Durable Object queue.
Cache interception stays disabled for PPR. The queue/storage support existing
cached pages; no application database is introduced. No Cloudflare resources
were created. No automatic deployment script or CI workflow was added.

Before a future deployment:

1. Set `NEXT_PUBLIC_SITE_URL` to the verified public HTTPS origin in the build
   environment (existing `.env.example`). Never put email credentials in
   `NEXT_PUBLIC_` variables or commit `.dev.vars`.
2. Authenticate locally with Cloudflare when ready. Review Worker name
   `brightstone-digital` and cache bucket name `brightstone-next-cache` in
   `wrangler.jsonc`; keep the self-service name aligned with the Worker name.
3. Create the configured R2 bucket in the intended account, for example with
   `npx wrangler r2 bucket create brightstone-next-cache`. This is an external
   action and was not performed. Review account resource/billing settings first.
   The Durable Object migration is declared and applies only on future deployment.
4. Optionally copy `.dev.vars.example` to `.dev.vars` for local Workers preview.
5. Run the checks below in an environment allowing local worker ports.

```bash
npm ci
npm run lint
npx tsc --noEmit
npm test
npm run build
npm run cf:build
npm run cf:typegen
npm run cf:check
npm run cf:preview
```

`cf:check` is Wrangler's deployment **dry run**, not a deployment. `cf:preview`
serves the previously generated Worker locally. Verify pages, static assets,
cache revalidation and the enquiry guard in that runtime before any deployment.
Generated output, local state and secret files are ignored by Git; generated
Cloudflare output is excluded from lint and application TypeScript checks.

## Actual validation results

- ESLint and TypeScript checks passed.
- All 64 API/validation/response tests passed using Node's test runner with
  `--experimental-test-isolation=none`.
- Server form render checks passed (details above).
- `npm run build` failed in Turbopack's CSS worker: binding a local port is denied
  (`Operation not permitted`), including the permissions retry.
- `npm run cf:build` recognised the app, Next.js and adapter, then failed at the
  same Next.js build restriction. No Worker artifact was validated.
- `npm run cf:typegen` parsed the bindings, then failed generating runtime types
  because workerd cannot listen on 127.0.0.1 (`EPERM`). Partial generated types
  were removed. A follow-up `npm run cf:typegen -- --include-runtime=false`
  succeeded and verified the final asset, R2, self-service and Durable Object
  bindings. Its ignored generated file was removed after verification. Full
  runtime type generation and Worker preview remain outstanding.
- No delivery success, browser hydration fix or production readiness is claimed.

## Git commands

Nothing was committed, pushed or deployed. These commands include all current
website work from this conversation, including earlier uncommitted changes;
review the diff before staging:

```bash
git switch -c feat/cloudflare-enquiry-preparation
git status --short
git diff
git add .gitignore .dev.vars.example package.json package-lock.json eslint.config.mjs tsconfig.json open-next.config.ts wrangler.jsonc README.md WEBSITE-UPDATE.md CLOUDFLARE.md src public test
git diff --cached --stat
git commit -m "Prepare Brightstone for Workers and prevent unavailable enquiries"
git push -u origin feat/cloudflare-enquiry-preparation
```

The push command is provided for you to run; it has not been executed.

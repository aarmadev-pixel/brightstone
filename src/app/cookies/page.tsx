import { DraftNotice } from "@/components/ui/DraftNotice";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookies",
  description:
    "Draft cookie information for Brightstone Digital. This page requires review before public launch.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container width="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
          Draft
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Cookies</h1>
        <div className="mt-6">
          <DraftNotice title="This cookies page is draft information and requires review before public launch." />
        </div>
        <div className="mt-10 space-y-6 leading-7">
          <p>
            The current local website is intended to work with the cookies that
            Next.js may set for application operation. No marketing or analytics
            cookies have been added in this version.
          </p>
          <p>
            Before public launch, this page should list any cookies in use,
            their purpose, duration, and whether consent is required. A cookie
            banner should only be introduced if non-essential cookies are added.
          </p>
          <p>
            Do not treat this page as a finished cookie policy.
          </p>
        </div>
      </Container>
    </section>
  );
}

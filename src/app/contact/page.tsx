import { ContactForm } from "@/components/forms/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Discuss professional websites and optional AI automation with Brightstone Digital.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Discuss your project."
        description="Tell us about your business, the website you need and the processes you would like to simplify."
      />
      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[1.6rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h2 className="text-2xl font-semibold">Enquiry form</h2>
            <p className="mt-2 text-sm leading-7">
              Required fields are labelled. Phone number is optional. Please do
              not include payment details or unnecessary personal data.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="rounded-[1.6rem] border border-border bg-background p-6 text-muted sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Your consultation
            </h2>
            <p className="mt-4 leading-7">
              A consultation covers your services, current website, priorities
              and any integrations you need. We agree the scope and provide a
              tailored quotation before work begins.
            </p>
            <p className="mt-4 leading-7">
              Buying a website does not require an AI subscription. Selected
              automation trials may be available after launch, subject to
              eligibility and agreed terms.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}

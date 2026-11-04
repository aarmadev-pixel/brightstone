import { ContactForm } from "@/components/forms/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Explore a Brightstone Digital consultation. The demonstration form checks enquiries but does not deliver or store them.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Book a free consultation."
        description="Explore what you would like to discuss. This demonstration form checks your enquiry but does not deliver it or book a consultation."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[1.6rem] border border-mist bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
            <h2 className="text-2xl font-semibold">Enquiry form</h2>
            <p className="mt-2 text-sm leading-7">
              Required fields are labelled. Phone number is optional. Please do
              not include payment details or unnecessary personal data.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <aside className="rounded-[1.6rem] border border-mist bg-navy p-6 text-slate-300 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              What happens next
            </h2>
            <p className="mt-4 leading-7">
              When a secure backend is connected, enquiries will be reviewed
              before a conversation is arranged. No office address, telephone
              number, or email address is published here yet.
            </p>
            <p className="mt-4 leading-7">
              A separate booking calendar is planned. Enquiry delivery and
              consultation booking are not yet available on this page.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}

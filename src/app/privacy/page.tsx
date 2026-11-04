import { DraftNotice } from "@/components/ui/DraftNotice";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "Draft privacy information for Brightstone Digital. This page requires legal review before public launch.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container width="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">
          Draft
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Privacy notice</h1>
        <div className="mt-6">
          <DraftNotice title="This privacy page is draft information and requires review before public launch." />
        </div>
        <div className="mt-10 space-y-6 leading-7">
          <p>
            Brightstone Digital expects to process enquiry details such as name,
            business name, email address, optional phone number, industry,
            service interest, and a message. The current website form is in
            demonstration mode and does not store or email submissions.
          </p>
          <p>
            When a secure backend is configured, this notice must be updated to
            explain the lawful basis for processing, retention periods, hosting
            locations, processors, and how to make a request about personal
            data.
          </p>
          <p>
            Do not treat this page as a finished UK GDPR privacy policy. A
            solicitor or qualified privacy reviewer should approve the public
            version.
          </p>
        </div>
      </Container>
    </section>
  );
}

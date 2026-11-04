import { ReceptionistDemo } from "@/components/demos/ReceptionistDemo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DemoSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="See it in action"
          title="Meet Your New AI Receptionist."
          description="See how an AI receptionist could help your business handle customer enquiries, even when you're busy."
        />
        <div className="mt-12">
          <ReceptionistDemo />
        </div>
      </Container>
    </section>
  );
}

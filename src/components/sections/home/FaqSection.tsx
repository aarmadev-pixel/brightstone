import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/faqs";

export function FaqSection({
  items = homeFaqs,
  title = "Questions businesses usually ask",
}: {
  items?: { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="section-space">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </Container>
    </section>
  );
}

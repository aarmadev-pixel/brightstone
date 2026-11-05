import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { consultationHref } from "@/lib/site";

export function FinalCta({
  heading = "Ready to Make Your Business Work Smarter?",
  description = "Let’s explore how intelligent technology could simplify your daily operations.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <section className="bg-background section-space text-foreground">
      <Container className="surface-gradient relative overflow-hidden rounded-3xl border border-blue/25 px-6 py-12 sm:px-12 sm:py-16">
        <div className="relative max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">A practical next step</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
          <div className="mt-8">
            <Button href={consultationHref} variant="primary" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

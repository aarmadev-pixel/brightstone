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
    <section className="bg-navy py-20 text-white">
      <Container className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-soft px-6 py-14 sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-royal/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sky/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
          <div className="mt-8">
            <Button href={consultationHref} variant="light" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

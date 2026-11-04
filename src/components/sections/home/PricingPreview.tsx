import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing } from "@/data/pricing";
import { consultationHref } from "@/lib/site";

export function PricingPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Powerful Technology. Straightforward Pricing."
        />
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[1.6rem] border border-mist shadow-[var(--shadow-card)]">
          <div className="bg-navy px-6 py-8 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
              Indicative package
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              {pricing.packageName}
            </h3>
            <p className="mt-4 font-heading text-5xl font-semibold text-white">
              {pricing.monthly}
              <span className="text-lg font-medium text-slate-300">/month</span>
            </p>
            <p className="mt-2 text-slate-300">
              One-time setup fee: {pricing.setup}
            </p>
          </div>
          <div className="bg-white px-6 py-8 sm:px-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {pricing.inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-6">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 rounded-2xl bg-offwhite p-4 text-sm leading-6 text-slate">
              {pricing.caveats.map((caveat) => (
                <p key={caveat}>{caveat}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={consultationHref} size="lg">
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

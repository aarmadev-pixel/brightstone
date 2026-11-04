import { Check } from "lucide-react";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { pricing, pricingFaqs } from "@/data/pricing";
import { pageMetadata } from "@/lib/seo";
import { consultationHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Indicative Brightstone Business pricing starts at £499 per month plus a £499 setup fee. Final figures depend on requirements and usage.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="A clear starting point, confirmed before any agreement."
        description="The figures below are indicative. They help you understand the intended range while we finish commercial terms, usage allowances, and supplier costs."
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.6rem] border border-mist bg-white shadow-[var(--shadow-card)]">
            <div className="bg-navy px-6 py-8 text-white sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                Indicative starting package
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                {pricing.packageName}
              </h2>
              <p className="mt-5 font-heading text-5xl font-semibold text-white">
                {pricing.monthly}
                <span className="text-lg font-medium text-slate-300">/month</span>
              </p>
              <p className="mt-2 text-slate-300">{pricing.setup} setup fee</p>
            </div>
            <div className="px-6 py-8 sm:px-10">
              <ul className="space-y-3">
                {pricing.inclusions.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6">
                    <Check className="mt-0.5 h-4 w-4 text-royal" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href={consultationHref} className="mt-8">
                Book a Free Consultation
              </Button>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-mist bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">What still needs confirming</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7">
              {pricing.caveats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7">
              No contract, cancellation term, or service-level commitment is
              created by this page.
            </p>
          </div>
        </Container>
      </section>
      <FaqSection items={pricingFaqs} title="Pricing questions" />
      <FinalCta description="If the starting range looks relevant, we can talk through what your business would actually need." />
    </>
  );
}

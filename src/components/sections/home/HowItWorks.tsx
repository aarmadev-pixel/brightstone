import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
 { n: "01", title: "Build Your Website", body: "We design and develop a professional website tailored to your business, helping customers discover your services and get in touch. You review and approve the work; payment and hosting are agreed before launch." },
 { n: "02", title: "Explore AI Automation", body: "Once your website is live, discover how selected AI-powered tools could support your business through available free trials. Eligibility, usage limits and service-specific terms apply." },
 { n: "03", title: "Choose What Works", body: "Continue with the services that deliver value to your business. Choose the tools you need, without being required to purchase unnecessary extras. Any paid continuation is agreed separately." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-space scroll-mt-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Start With a Great Website. Add Intelligence When You’re Ready."
        />
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.n} className="relative rounded-2xl border border-border bg-card p-6 sm:p-8">
              {index < steps.length - 1 ? (
                <span className="pointer-events-none absolute right-[-14px] top-10 hidden h-px w-7 bg-mist lg:block" />
              ) : null}
              <p className="font-heading text-sm font-semibold tracking-[0.18em] text-accent">
                {step.n}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

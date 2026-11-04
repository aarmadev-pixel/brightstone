import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Business",
    body: "Share how customers currently get in touch, the jobs you take on, and the admin that takes up too much of the week.",
  },
  {
    n: "02",
    title: "We Build Your Solution",
    body: "We design the website, receptionist, and automations around those processes, using information you approve.",
  },
  {
    n: "03",
    title: "Your Business Runs Smarter",
    body: "Enquiries are captured more consistently, and your team has a clearer record to work from as the setup is refined.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Simple to Start. Easy to Manage."
        />
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.n} className="relative rounded-2xl border border-mist bg-white p-6">
              {index < steps.length - 1 ? (
                <span className="pointer-events-none absolute right-[-14px] top-10 hidden h-px w-7 bg-mist lg:block" />
              ) : null}
              <p className="font-heading text-sm font-semibold tracking-[0.18em] text-royal">
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

import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Brightstone Digital is a UK-focused technology agency helping businesses adopt practical AI automation, websites, and better enquiry handling.",
  path: "/about",
});

const steps = [
  {
    title: "Understand the business",
    body: "We start with how customers currently get in touch, the work you take on, and the parts of the week that feel most fragmented.",
  },
  {
    title: "Identify repetitive processes",
    body: "The useful opportunities are usually ordinary: missed calls, incomplete booking notes, follow-ups that wait until there is spare time.",
  },
  {
    title: "Build practical solutions",
    body: "Websites, reception, chat, and automations are configured around approved information and the tools that already fit the business.",
  },
  {
    title: "Support ongoing improvements",
    body: "Once the basics are in place, wording, routing, and follow-ups can be adjusted as you see how customers actually use them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A UK technology agency for practical AI automation."
        description="Brightstone Digital helps growing businesses save time, manage customer enquiries, and simplify daily operations using intelligent technology. The focus is useful systems, not novelty."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold">How we work</h2>
            <p className="mt-4 leading-7">
              The company is being built around trades and other small and
              medium-sized UK businesses that want a more organised way to
              handle enquiries. We would rather explain the work clearly than
              invent a longer history, a team roster, or a portfolio that does
              not yet exist on this site.
            </p>
            <p className="mt-4 leading-7">
              Professional, modern, and approachable is the standard: a website
              that looks credible, a receptionist that takes a proper message,
              and automations that reduce copying the same details between
              tools.
            </p>
          </div>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-mist bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}

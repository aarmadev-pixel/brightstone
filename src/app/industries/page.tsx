import { industryIcons } from "@/components/icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { industries } from "@/data/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Brightstone Digital helps plumbers, electricians, heating engineers, and other small businesses handle enquiries with practical automation.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries"
        title="Built around the calls and jobs that fill your week."
        description="We start with trades because the pattern is familiar: customers call while you are already working. The same approach can be adapted to other service businesses."
      />
      <section className="section-space">
        <Container className="space-y-8">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.icon];
            const headingId =
              industry.id === "other" ? "other-businesses" : industry.id;
            return (
              <article
                key={industry.id}
                id={headingId}
                className="scroll-mt-28 rounded-[1.6rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10"
              >
                <div className="flex items-start gap-4">
                  <IconBadge>
                    <Icon className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h2 className="text-2xl font-semibold sm:text-3xl">
                      {industry.title}
                    </h2>
                    <p className="mt-3 max-w-3xl leading-7">{industry.detail}</p>
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-semibold">Realistic examples</h3>
                <p className="mt-1 text-sm text-muted">
                  These are illustrations, not customer case studies.
                </p>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">
                  {industry.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-2xl border border-border bg-surface p-4 text-sm leading-6"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </Container>
      </section>
      <FinalCta description="Whether you are a plumber, electrician, heating engineer, or another service business, we can talk through a setup that fits." />
    </>
  );
}

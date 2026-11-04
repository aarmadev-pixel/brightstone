import Link from "next/link";
import { serviceIcons } from "@/components/icons";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { consultationHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Brightstone Digital services: AI receptionists, professional websites, chatbots, booking, review management, follow-ups, and workflow automation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Practical technology for the way your business already works."
        description="Each service is designed to reduce repetitive admin and make customer enquiries easier to handle. Live features depend on setup and integration, and are agreed during consultation."
      />
      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-[1.6rem] border border-mist bg-white p-6 shadow-[var(--shadow-card)] sm:p-10"
              >
                <div className="flex flex-wrap items-start gap-4">
                  <IconBadge>
                    <Icon className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h2 className="text-2xl font-semibold sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 max-w-2xl leading-7">{service.summary}</p>
                  </div>
                </div>
                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold">The problem it solves</h3>
                    <p className="mt-2 leading-7">{service.problem}</p>
                    <h3 className="mt-6 text-lg font-semibold">Potential benefits</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-7">
                      {service.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">How it works</h3>
                    <ol className="mt-2 list-decimal space-y-1 pl-5 leading-7">
                      {service.howItWorks.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                    <h3 className="mt-6 text-lg font-semibold">Example use cases</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-7">
                      {service.useCases.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href={consultationHref}>Book a Free Consultation</Button>
                  {service.id === "ai-receptionist" ? (
                    <Link href="/services/ai-receptionist" className="text-sm font-semibold text-royal">
                      View the AI receptionist page
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </Container>
      </section>
      <FinalCta
        heading="Not sure which service to start with?"
        description="Tell us how customers currently reach you and we can outline a practical first step."
      />
    </>
  );
}

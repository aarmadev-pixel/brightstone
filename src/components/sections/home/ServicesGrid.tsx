import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceIcons } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homepageServices } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="bg-surface section-space">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Useful technology. Built around your business."
          description="From your first impression online to the enquiries that follow, explore a setup that fits the way you work."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Card key={service.id} as="article" className="flex flex-col">
                <IconBadge>
                  <Icon className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 text-xl font-semibold">{service.shortTitle}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-7">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  Explore {service.shortTitle}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

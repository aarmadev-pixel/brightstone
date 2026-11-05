import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industryIcons } from "@/components/icons";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

export function IndustriesPreview() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for businesses like yours."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.icon];
            return (
              <Card key={industry.id} as="article" className="flex flex-col">
                <IconBadge>
                  <Icon className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 text-xl font-semibold">{industry.title}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-7">
                  {industry.summary}
                </p>
                <Link
                  href={industry.href}
                  className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  Learn more
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

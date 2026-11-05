import {
  CalendarCheck,
  Info,
  PhoneCall,
  Route,
  UserRound,
  ClipboardPen,
} from "lucide-react";
import { ServicePage } from "@/components/sections/ServicePage";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { receptionistFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { consultationHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "AI Telephone Receptionist",
  description:
    "See how a Brightstone AI receptionist can answer calls, capture customer details, and help with appointment requests after setup and integration.",
  path: "/services/ai-receptionist",
});

const capabilities = [
  {
    title: "Answer incoming calls",
    body: "Greet callers with your business name and a clear explanation that they are speaking with a virtual receptionist.",
    icon: PhoneCall,
  },
  {
    title: "Capture customer details",
    body: "Collect a name, number, and any other details needed so your team can follow up with the right context.",
    icon: UserRound,
  },
  {
    title: "Identify the reason for calling",
    body: "Record whether the call is an emergency, a booking request, a quote enquiry, or a general question.",
    icon: ClipboardPen,
  },
  {
    title: "Help with appointment requests",
    body: "Note preferred days and access information. Confirmation still sits with your team unless a live diary integration is agreed.",
    icon: CalendarCheck,
  },
  {
    title: "Route enquiries appropriately",
    body: "Calls and messages can follow rules you approve, such as out-of-hours capture or handover to a person.",
    icon: Route,
  },
  {
    title: "Share basic business information",
    body: "Provide approved answers for coverage, opening hours, or what to prepare before a visit.",
    icon: Info,
  },
];

const scenarios = [
  {
    title: "Emergency plumbing call",
    body: "The receptionist captures the issue, location, and urgency so the engineer can review it between jobs.",
  },
  {
    title: "Boiler service booking",
    body: "Preferred times and boiler notes are recorded as a request, then confirmed by the team.",
  },
  {
    title: "Electrical quote enquiry",
    body: "The caller is asked for enough detail to prepare a callback, including photos if they would help.",
  },
];

export default function AiReceptionistPage() {
  return (
    <>
      <section className="intro-gradient relative border-b border-border bg-background section-space text-foreground">
        <Container width="wide" className="relative grid items-center gap-12 ">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              AI telephone receptionist
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A clearer way to handle calls on busy days.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              An AI receptionist can answer the phone, take a structured
              message, and help with appointment requests while you stay focused
              on the job in front of you. The live service needs setup,
              telephony, and integration before it is operational.
            </p>
            <div className="mt-8">
              <Button href={consultationHref} variant="primary" size="lg">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-space">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold">
            What the receptionist can be set up to do
          </h2>
          <p className="mt-4 max-w-2xl leading-7">
            Call handling, handover rules and available features are agreed and
            configured for your business before activation.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Card key={item.title} as="article">
                <IconBadge>
                  <item.icon className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface section-space">
        <Container>
          <h2 className="text-3xl font-semibold">Example call scenarios</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {scenarios.map((item) => (
              <Card key={item.title} as="article">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <ServicePage id="ai-receptionist" />
      <FaqSection items={receptionistFaqs} title="AI receptionist questions" />
      <FinalCta description="If missed calls are costing you time, we can talk through a receptionist setup that fits the way you work." />
    </>
  );
}

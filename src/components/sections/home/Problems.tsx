import { CalendarX2, ClipboardList, MessageSquareOff, PhoneMissed } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    title: "Missed customer calls",
    body: "When you are on a job, the next enquiry can go to voicemail. Useful details are easy to lose before you have time to call back.",
    icon: PhoneMissed,
  },
  {
    title: "Repetitive administrative tasks",
    body: "The same names, addresses, and job notes often get typed into more than one place before the work even starts.",
    icon: ClipboardList,
  },
  {
    title: "Manual appointment scheduling",
    body: "Booking requests arrive by phone, text, and informal notes, which makes it harder to keep a clear diary.",
    icon: CalendarX2,
  },
  {
    title: "Unanswered website enquiries",
    body: "Visitors may leave if they cannot quickly find your services, coverage, or a simple way to get in touch.",
    icon: MessageSquareOff,
  },
];

export function Problems() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The day-to-day strain"
          title="Running a Business Shouldn't Be Complicated."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.title} as="article">
              <IconBadge>
                <problem.icon className="h-5 w-5" />
              </IconBadge>
              <h3 className="mt-4 text-xl font-semibold">{problem.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7">{problem.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

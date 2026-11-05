import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trialPolicy } from "@/data/trials";
export function TrialSection() {
 return <section className="section-space bg-surface"><Container>
 <SectionHeading eyebrow="Optional next steps" title="Experience AI Automation Before You Commit." description="Already have your new website? Explore selected AI automation services through limited-time trials and see how they fit into your daily operations." />
 <ul className="mt-8 grid gap-4 sm:grid-cols-2">{trialPolicy.services.map(service => <li key={service} className="rounded-xl border border-border bg-card p-5 font-semibold text-foreground">{service}</li>)}</ul>
 <p className="mt-6 text-foreground">{trialPolicy.availability}</p><p className="mt-3 max-w-3xl leading-7">{trialPolicy.conditions}</p>
 <Button href="/contact" className="mt-6">Ask About Free Trials</Button>
 </Container></section>;
}

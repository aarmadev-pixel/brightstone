import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services, serviceFeatures, websiteProcess } from "@/data/services";
import { trialPolicy } from "@/data/trials";
export function ServicePage({ id }: { id: string }) {
 const service = services.find(item => item.id === id)!;
 const website = id === "websites";
 return <>{id !== "ai-receptionist" && <PageIntro eyebrow={website ? "Start here" : "Optional automation"} title={service.title} description={service.summary} />}
 <section className="section-space"><Container>
 <div className="grid gap-8 lg:grid-cols-2">
 <div><h2 className="text-2xl font-semibold">Built around your business</h2><p className="mt-4 leading-7">{service.problem}</p>
 <h2 className="mt-8 text-2xl font-semibold">Features to discuss</h2><ul className="mt-4 list-disc space-y-2 pl-5">{serviceFeatures[id].map(item => <li key={item}>{item}</li>)}</ul></div>
 <div className="rounded-2xl border border-border bg-card p-6"><h2 className="text-2xl font-semibold">{website ? "Your website development process" : "How implementation works"}</h2>
 <ol className="mt-4 list-decimal space-y-3 pl-5">{(website ? websiteProcess : service.howItWorks).map(item => <li key={item}>{item}</li>)}</ol>
 <p className="mt-5 leading-7">{website ? "We agree scope, revision rounds, payment, hosting and any ongoing support with you. Your website is reviewed and approved before launch. AI services are optional additions once it is operational." : "We agree requirements, supplier compatibility, permissions and handover rules, then configure and test the service with you before launch. Features depend on the integrations and scope agreed for your business. Services are activated only after configuration and testing."}</p></div>
 </div>
 <h2 className="mt-10 text-2xl font-semibold">Example use cases</h2><ul className="mt-4 grid gap-4 sm:grid-cols-3">{service.useCases.map(item => <li key={item} className="rounded-xl border border-border bg-card p-5">{item}</li>)}</ul>
 {!website && <div className="mt-10"><h2 className="text-2xl font-semibold">Could I try this service?</h2><p className="mt-4">{trialPolicy.availability}</p><p className="mt-3 leading-7">{trialPolicy.conditions}</p></div>}
 {["follow-ups", "booking", "reviews"].includes(id) && <p className="mt-6 leading-7">Email and SMS workflows are subject to appropriate customer permissions and applicable UK regulations, including UK GDPR and PECR. We agree the purpose, customer preferences, opt-outs and data needed before implementation.</p>}
 {id === "reviews" && <p className="mt-4">Review invitations should be fair and optional. Reviews and ratings are never guaranteed, and suggested replies require your approval.</p>}
 <Button href="/contact" className="mt-8">{website ? "Request a Website Quote" : "Request a Consultation"}</Button>
 <nav aria-label="Related services" className="mt-10 border-t border-border pt-6"><h2 className="text-xl">Explore our services</h2><ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">{services.filter(item => item.id !== id && item.id !== "automation").map(item => <li key={item.id}><Link href={item.href} className="text-accent underline">{item.shortTitle}</Link></li>)}</ul></nav>
 </Container></section></>;
}

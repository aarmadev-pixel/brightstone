import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { quotationServices } from "@/data/pricing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Custom Website & Automation Quotes", description: "Discuss your website, automation, maintenance or integration requirements with Brightstone Digital for a tailored quotation.", path: "/pricing" });
export default function PricingPage() {
 return <><PageIntro eyebrow="Custom quotations" title="Solutions Built Around Your Business." description="Every business operates differently. Tell us what you need, and we’ll recommend a suitable website or automation solution." />
 <section className="section-space"><Container><ul className="grid gap-5 sm:grid-cols-2">{quotationServices.map(item => <li key={item} className="rounded-2xl border border-border bg-card p-6 text-xl text-foreground">{item}</li>)}</ul>
 <p className="mt-8 max-w-3xl leading-7">We agree scope, delivery, support and any supplier or usage costs before work begins. Website development stands on its own; AI automation is optional. Selected trials have separate eligibility, usage and duration terms.</p><Button href="/contact" className="mt-6">Request a Custom Quote</Button></Container></section></>;
}

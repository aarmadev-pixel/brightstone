import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { consultationHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="intro-gradient relative border-b border-border bg-background">
      <Container width="wide" className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:py-28">
        <div className="min-w-0">
          <p className="inline-flex rounded-full border border-blue/25 bg-blue/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-accent">
            Websites first. Optional automation when you’re ready.
          </p>
          <h1 className="mt-6 max-w-2xl text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]">
            Your Business. Better Connected. <span className="text-accent">Smarter Automated.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Professional websites and intelligent automation solutions designed to help UK businesses grow their online presence, respond to customers and simplify everyday operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={consultationHref} size="lg">
              Get Your Free Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-xs text-muted sm:text-sm">
            {["Websites", "AI reception", "Workflow automation"].map((service) => (
              <li key={service} className="inline-flex items-center gap-2">
                <Check aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-gradient rounded-3xl border border-border p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Your next chapter online</p>
          <h2 className="mt-4 text-2xl font-semibold">A strong website. Room to grow.</h2>
          <ol className="mt-6 space-y-4">
            {[ ["01", "Your professional website", "Designed around your services, branding and customer enquiries."], ["02", "Explore selected AI tools", "Ask about eligible trials after your new website is live."], ["03", "Choose your next step", "Keep the services that suit your business, on terms agreed with you."] ].map(([number, title, body]) => (
              <li key={number} className="rounded-2xl border border-border bg-background/60 p-4"><span className="text-sm font-semibold text-accent">{number}</span><h3 className="mt-1 text-lg">{title}</h3><p className="mt-2 text-sm leading-6">{body}</p></li>
            ))}
          </ol>
          <p className="mt-5 text-sm">Buying a website never requires an AI subscription.</p>
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { ReceptionistPreview } from "@/components/demos/ReceptionistPreview";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { consultationHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-royal/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
        <div className="hero-grid absolute inset-0 opacity-70" />
      </div>
      <Container width="wide" className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">
            Brightstone Digital
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Business, Working Smarter.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Professional websites, AI receptionists and intelligent automations
            that help businesses save time, manage enquiries and simplify
            everyday operations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={consultationHref} variant="light" size="lg">
              Book a Free Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ReceptionistPreview className="animate-fade-up" />
      </Container>
    </section>
  );
}

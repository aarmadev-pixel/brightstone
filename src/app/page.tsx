import { DemoSection } from "@/components/sections/home/DemoSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { Hero } from "@/components/sections/home/Hero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { IndustriesPreview } from "@/components/sections/home/IndustriesPreview";
import { PricingPreview } from "@/components/sections/home/PricingPreview";
import { Problems } from "@/components/sections/home/Problems";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automation for Growing UK Businesses",
  description:
    "Professional websites, AI receptionists, and practical automation to help UK businesses save time, manage enquiries, and simplify everyday operations.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <ServicesGrid />
      <HowItWorks />
      <DemoSection />
      <IndustriesPreview />
      <PricingPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}

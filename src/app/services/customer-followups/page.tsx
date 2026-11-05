import { ServicePage } from "@/components/sections/ServicePage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Automated Customer Follow-Ups", description: "Explore automated customer follow-ups from Brightstone Digital. Discuss features, implementation and a tailored solution for your UK business.", path: "/services/customer-followups" });
export default function Page() { return <ServicePage id="follow-ups" />; }

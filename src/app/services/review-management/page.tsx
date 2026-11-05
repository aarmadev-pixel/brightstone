import { ServicePage } from "@/components/sections/ServicePage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Google Review Management", description: "Explore google review management from Brightstone Digital. Discuss features, implementation and a tailored solution for your UK business.", path: "/services/review-management" });
export default function Page() { return <ServicePage id="reviews" />; }

import { ServicePage } from "@/components/sections/ServicePage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Professional Website Development for UK Businesses", description: "Explore professional website development for uk businesses from Brightstone Digital. Discuss features, implementation and a tailored solution for your UK business.", path: "/services/websites" });
export default function Page() { return <ServicePage id="websites" />; }

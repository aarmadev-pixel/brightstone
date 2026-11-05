import { ServicePage } from "@/components/sections/ServicePage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Appointment Booking Automation", description: "Explore appointment booking automation from Brightstone Digital. Discuss features, implementation and a tailored solution for your UK business.", path: "/services/booking-automation" });
export default function Page() { return <ServicePage id="booking" />; }

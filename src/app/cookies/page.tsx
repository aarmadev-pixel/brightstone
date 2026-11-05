import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Cookies and browser storage", description: "Information about cookies and browser storage on the Brightstone Digital website.", path: "/cookies" });
export default function Page() {
 return <section className="section-space"><Container width="narrow"><h1 className="text-4xl font-semibold">Cookies and browser storage</h1><div className="mt-8 space-y-6 leading-7"><p>Brightstone Digital does not add advertising or analytics cookies, third-party tracking scripts or embedded social media widgets to this website.</p><p>The enquiry form holds entered information in memory for the current page. This application does not save enquiry entries in cookies or browser local storage.</p><p>Hosting infrastructure and browser extensions may have their own storage behaviour. You can inspect or manage cookies and site data through your browser settings.</p></div></Container></section>;
}

import { homepageServices } from "@/data/services";
export type NavItem = { href: string; label: string };
export const primaryNav: NavItem[] = [
 { href: "/", label: "Home" }, { href: "/services", label: "Services" },
 { href: "/#how-it-works", label: "How It Works" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" },
];
export const footerServiceLinks: NavItem[] = homepageServices.map(service => ({ href: service.href, label: service.shortTitle }));
export const legalNav: NavItem[] = [{ href: "/privacy", label: "Privacy Policy" }, { href: "/cookies", label: "Cookies" }];

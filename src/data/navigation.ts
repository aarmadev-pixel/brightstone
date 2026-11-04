export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerServiceLinks: NavItem[] = [
  { href: "/services/ai-receptionist", label: "AI Receptionist" },
  { href: "/services", label: "All services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
];

export const legalNav: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
];

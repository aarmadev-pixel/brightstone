import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerServiceLinks, legalNav, primaryNav } from "@/data/navigation";
import { site } from "@/lib/site";

export async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-slate-300">
      <Container width="wide" className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="full" theme="dark" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            Practical websites, AI reception, and automation for growing UK
            businesses.
          </p>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold tracking-wide text-white">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold tracking-wide text-white">
            Services
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerServiceLinks.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold tracking-wide text-white">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link className="transition hover:text-white" href="/contact">
                Contact
              </Link>
            </li>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container
          width="wide"
          className="flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>United Kingdom</p>
        </Container>
      </div>
    </footer>
  );
}

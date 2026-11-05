import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerServiceLinks, legalNav, primaryNav } from "@/data/navigation";
import { site } from "@/lib/site";

export async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-muted">
      <Container width="wide" className="grid gap-x-10 gap-y-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="full" theme="dark" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            Practical websites, AI reception, and automation for growing UK
            businesses.
          </p>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold tracking-wide text-white">
            Explore
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-10 items-center transition hover:text-accent" href={item.href}>
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
          <ul className="mt-4 space-y-1 text-sm">
            {footerServiceLinks.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link className="inline-flex min-h-10 items-center transition hover:text-accent" href={item.href}>
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
          <ul className="mt-4 space-y-1 text-sm">
            <li><Link href="/pricing" className="inline-flex min-h-10 items-center hover:text-accent">Request a Custom Quote</Link></li>
            <li>
              <Link className="inline-flex min-h-10 items-center transition hover:text-accent" href="/contact">
                Contact
              </Link>
            </li>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link className="inline-flex min-h-10 items-center transition hover:text-accent" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-border">
        <Container
          width="wide"
          className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
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

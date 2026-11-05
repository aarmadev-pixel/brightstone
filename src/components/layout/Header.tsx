"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footerServiceLinks, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { consultationHref } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  // Non-modal disclosure: keep natural Tab/Shift+Tab order from the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      const focusIsInMobileNav = mobileNavRef.current?.contains(
        document.activeElement,
      ) || document.activeElement === menuButtonRef.current;
      setOpen(false);
      if (focusIsInMobileNav) {
        desktopNavRef.current?.querySelector<HTMLElement>("a")?.focus();
      }
    };

    desktopViewport.addEventListener("change", closeOnDesktop);
    return () => desktopViewport.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    const closeOnHistoryNavigation = () => setOpen(false);
    window.addEventListener("popstate", closeOnHistoryNavigation);
    return () => window.removeEventListener("popstate", closeOnHistoryNavigation);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container width="wide" className="flex min-h-18 items-center justify-between gap-4 py-3">
        <Logo variant="full" theme="dark" />
        <nav ref={desktopNavRef} aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => item.href === "/services" ? (
            <details key={item.href} className="relative" onKeyDown={event => {
              if (event.key === "Escape") { event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); }
            }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }}>
              <summary className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:text-foreground">Services <span aria-hidden="true">⌄</span></summary>
              <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-background p-2 shadow-xl">
                {[{href: "/services", label: "All services"}, ...footerServiceLinks].map(link => <Link key={link.href} href={link.href} onClick={event => { const details = event.currentTarget.closest("details"); if (details) details.open = false; }} className="block rounded-lg px-4 py-3 text-sm text-foreground hover:bg-card">{link.label}</Link>)}
              </div>
            </details>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium transition",
                isActive(pathname, item.href)
                  ? "bg-blue/10 text-accent"
                  : "text-muted hover:bg-surface hover:text-foreground",
              )}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={consultationHref} size="md">
            Get a Free Consultation
          </Button>
        </div>
        <button
          type="button"
          ref={menuButtonRef}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open ? (
        <nav
          id={menuId}
          ref={mobileNavRef}
          aria-label="Mobile primary"
          className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-border bg-surface lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }}
                className={cn(
                  "rounded-xl px-4 py-3 font-heading text-base font-semibold",
                  isActive(pathname, item.href)
                    ? "bg-blue/10 text-accent"
                    : "text-foreground hover:bg-surface",
                )}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 border-l border-border pl-3">{footerServiceLinks.map(item => <Link key={item.href} href={item.href} onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }} className="block px-3 py-3 text-sm text-muted hover:text-foreground">{item.label}</Link>)}</div>
            <Button href={consultationHref} className="mt-3 w-full" onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }}>
              Get a Free Consultation
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}

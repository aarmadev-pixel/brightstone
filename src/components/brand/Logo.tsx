import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "full" | "compact";
  theme?: "light" | "dark";
  href?: string | null;
  className?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9 shrink-0", className)}
    >
      <rect width="40" height="40" rx="10" fill="#2563EB" />
      <path
        d="M7 30.5h26L21.9 11.6c-.7-1.3-2.5-1.3-3.2 0L7 30.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M20.2 14.2 33 30.5H22.1l-2.4-4.8c-.4-.9-1.7-.9-2.1 0l-1.5 3.1 4.1-14.6Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function Logo({
  variant = "full",
  theme = "light",
  href = "/",
  className,
}: LogoProps) {
  const light = theme === "light";
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={variant === "compact" ? "h-8 w-8" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.05rem] font-semibold tracking-[-0.04em]",
            light ? "text-foreground" : "text-white",
          )}
        >
          Brightstone
        </span>
        {variant === "full" ? (
          <span
            className={cn(
              "mt-0.5 text-[0.62rem] font-semibold tracking-[0.22em]",
              light ? "text-accent" : "text-accent",
            )}
          >
            DIGITAL
          </span>
        ) : null}
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label={`${site.name} home`} className="inline-flex">
      {content}
    </Link>
  );
}

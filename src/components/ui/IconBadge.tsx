import { cn } from "@/lib/cn";

export function IconBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue/20 bg-blue/10 text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}

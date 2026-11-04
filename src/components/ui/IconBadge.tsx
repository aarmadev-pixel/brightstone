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
        "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-royal/8 text-royal",
        className,
      )}
    >
      {children}
    </span>
  );
}

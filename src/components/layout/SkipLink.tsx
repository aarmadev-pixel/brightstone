export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-xl focus:bg-card focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:font-semibold focus:text-foreground"
    >
      Skip to main content
    </a>
  );
}

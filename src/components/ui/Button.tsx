import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "border border-royal bg-royal text-white shadow-sm hover:border-royal-dark hover:bg-royal-dark",
  secondary: "border border-control bg-transparent text-foreground hover:border-accent hover:bg-card",
  light: "border border-royal bg-royal text-white shadow-sm hover:border-royal-dark hover:bg-royal-dark",
  outline: "border border-control bg-transparent text-foreground hover:border-accent hover:bg-card",
} as const;

const sizes = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-sm sm:text-[0.95rem]",
} as const;

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonAsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  onClick?: () => void;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex max-w-full text-center items-center justify-center gap-2 rounded-xl font-heading font-semibold tracking-[-0.01em] transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-royal",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

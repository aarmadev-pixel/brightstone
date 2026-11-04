import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-royal text-white shadow-sm hover:bg-royal-dark hover:-translate-y-px",
  secondary:
    "bg-white text-navy border border-mist hover:border-royal/30 hover:bg-offwhite",
  light:
    "bg-white text-navy hover:bg-sky/15",
  outline:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10",
} as const;

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-[0.95rem]",
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
    "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold tracking-[-0.01em] transition duration-200 disabled:cursor-not-allowed disabled:opacity-60",
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

export const site = {
  name: "Brightstone Digital",
  shortName: "Brightstone",
  tagline: "Smarter Systems. Better Business.",
  description:
    "Brightstone Digital helps UK businesses save time, manage customer enquiries, and simplify daily operations with professional websites, AI receptionists, and practical automation.",
  locale: "en_GB",
} as const;

export function getSiteUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return undefined;
  return value.replace(/\/$/, "");
}

export const consultationHref = "/contact";

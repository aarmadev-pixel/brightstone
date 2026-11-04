import type { Metadata } from "next";
import { getSiteUrl, site } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = getSiteUrl();
  const canonicalPath = path === "/" ? "/" : path;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      type: "website",
      locale: site.locale,
      siteName: site.name,
      ...(url ? { url: `${url}${canonicalPath}` } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
    ...(url
      ? {
          alternates: {
            canonical: `${url}${canonicalPath}`,
          },
        }
      : {}),
  };
}

import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "/",
  "/services",
  "/services/ai-receptionist",
  "/industries",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const paths = [
  "/",
  "/services",
  "/services/ai-receptionist",
  "/services/websites",
  "/services/ai-chatbots",
  "/services/booking-automation",
  "/services/review-management",
  "/services/customer-followups",
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

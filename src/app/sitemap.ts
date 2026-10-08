import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { OCCASIONS } from "@/lib/occasions";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.domain,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Occasion pages carry the long-tail commercial queries a single homepage
    // cannot: "fleurs de mariage rabat" is a different intent from "fleuriste
    // rabat", and each page has real projects behind it.
    ...OCCASIONS.map((o) => ({
      url: `${SITE.domain}/occasions/${o.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

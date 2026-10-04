import { SITE } from "@/lib/site";
import { PROJECTS, CATEGORIES } from "@/lib/portfolio";
import { COLLECTIONS } from "@/lib/collections";

/*
 * /feed.xml — RSS 2.0 over the published portfolio and signature collections,
 * so customers and aggregators can subscribe to new work without watching the
 * page.
 *
 * Hand-built rather than using a MetadataRoute helper: Next.js 16 dropped
 * `MetadataRoute.Rss` (only Robots, Sitemap and Manifest remain), so the XML is
 * emitted from a plain Response with explicit escaping.
 *
 * pubDate is deliberately the date the piece was published to this site, not a
 * day-level claim about when the flowers were cut: PROJECTS only carries the
 * completion year, and inventing a month/day would be false precision. The real
 * year is stated in the entry title.
 */
export const dynamic = "force-static";

/* XML 1.0 forbids raw & < > in text; attributes additionally need quotes. */
const esc = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

type Entry = {
  title: string;
  description: string;
  link: string;
  guid: string;
  categories: string[];
};

export function GET() {
  const published = new Date(SITE.dateModified);
  const rfc822 = published.toUTCString();
  const feedUrl = `${SITE.domain}/feed.xml`;

  const entries: Entry[] = [
    ...PROJECTS.map((project) => ({
      title: `${project.title} (${project.year})`,
      description: [
        project.occasion,
        project.story,
        `Variétés : ${project.varieties.join(", ")}.`,
      ].join(" "),
      link: `${SITE.domain}/#${project.id}`,
      guid: `${SITE.domain}/#${project.id}`,
      categories: [
        CATEGORIES.find((c) => c.id === project.category)?.label ??
          project.category,
      ],
    })),
    ...COLLECTIONS.map((collection) => ({
      title: collection.title,
      description: `${collection.description} ${collection.details.join(", ")}.`,
      link: `${SITE.domain}/#collections`,
      guid: `${SITE.domain}/#collections-${collection.id}`,
      categories: [collection.category],
    })),
  ];

  const items = entries
    .map(
      (entry) => `    <item>
      <title>${esc(entry.title)}</title>
      <description>${esc(entry.description)}</description>
      <link>${esc(entry.link)}</link>
      <guid isPermaLink="false">${esc(entry.guid)}</guid>
      <pubDate>${rfc822}</pubDate>
${entry.categories.map((c) => `      <category>${esc(c)}</category>`).join("\n")}
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${SITE.name} — ${SITE.tagline}`)}</title>
    <link>${esc(SITE.domain)}</link>
    <description>${esc(SITE.description)}</description>
    <language>fr-MA</language>
    <lastBuildDate>${rfc822}</lastBuildDate>
    <atom:link href="${esc(feedUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
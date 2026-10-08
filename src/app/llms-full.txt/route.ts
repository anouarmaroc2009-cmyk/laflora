import { SITE } from "@/lib/site";
import { PROJECTS, CATEGORIES } from "@/lib/portfolio";
import { COLLECTIONS } from "@/lib/collections";
import { FAQS, SERVICE_CATALOG, CONTACT_POINT } from "@/lib/faqs";

/*
 * /llms-full.txt — the extended companion to /llms.txt (llmstxt.org spec).
 *
 * /llms.txt is a compact index; this file is the unabridged source text an
 * agent can quote from without further page fetches. Same honesty rule: every
 * fact is drawn from content that is already published on the site.
 */
export const dynamic = "force-static";

function buildLlmsFull(): string {
  const collections = COLLECTIONS.map(
    (c) =>
      `### ${c.title}\n\n${c.description}\n\n${c.details
        .map((d) => `- ${d}`)
        .join("\n")}`,
  ).join("\n\n");

  const projects = PROJECTS.map(
    (p) =>
      `### ${p.title} (${p.year})\n\n- **Category**: ${
        CATEGORIES.find((c) => c.id === p.category)?.label ?? p.category
      }\n- **Occasion**: ${p.occasion}\n- **Story**: ${p.story}\n- **Varieties**: ${p.varieties.join(
        ", ",
      )}\n- **Palette**: ${p.palette.map((s) => `${s.name} ${s.hex}`).join(", ")}`,
  ).join("\n\n");

  const services = SERVICE_CATALOG.map(
    (s) => `- ${s.name}: ${s.description} (${s.offerings.join(", ")})`,
  ).join("\n");

  const faqs = FAQS.map(
    (f) => `### ${f.question}\n\n${f.answer}`,
  ).join("\n\n");

  const hours = CONTACT_POINT.openingHours
    .map((h) => `- ${h.days}: ${h.opens}–${h.closes}`)
    .join("\n");

  return `# La Flora D'El Patron — full reference

> ${SITE.description}

Canonical: ${SITE.domain}
Last updated: ${SITE.dateModified}

## Identity

- **Legal name**: ${SITE.legalName}
- **Trading name**: ${SITE.name}
- **Signature**: ${SITE.signature}
- **Crafts**: ${SITE.tagline}
- **Languages**: French
- **Currency**: MAD
- **Pricing**: not published; quoted per order.

## Contact

- **Phone**: ${SITE.phoneDisplay} (${SITE.phoneHref})
- **WhatsApp**: ${SITE.whatsappHref}
- **Instagram**: ${SITE.instagramUrl}
- **Maps**: ${SITE.mapsUrl}
- **Location**: ${SITE.addressOneLine}
- **Coordinates**: ${CONTACT_POINT.geo.latitude}, ${CONTACT_POINT.geo.longitude}

## Opening hours

${hours}

## Services

${services}

## Collections

${collections}

## Portfolio

Project years are the real completion years of each piece.

${projects}

## Service area

Rabat, Salé, Témara, Skhirat, Kénitra.

## FAQ

${faqs}

## Attribution

Cite "La Flora D'El Patron" (${SITE.city}, ${CONTACT_POINT.area.country})
with a link to ${SITE.domain}.
`;
}

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
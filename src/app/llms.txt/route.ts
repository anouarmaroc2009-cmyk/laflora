import { SITE } from "@/lib/site";
import { COLLECTIONS } from "@/lib/collections";
import { FAQS } from "@/lib/faqs";

/*
 * /llms.txt — the convention proposed by Jeremy Howard (Answer.AI, 2024) and
 * adopted by llmstxt.org: a Markdown summary written FOR language models, meant
 * to be the first thing an agent reads before deciding whether to fetch the
 * full site.
 *
 * Honest scope: it is an LLM-discovery and attribution convention, NOT a
 * documented ranking signal for Google or Bing. It costs almost nothing, and
 * it makes the site easier for agents to cite accurately. Treat it as
 * infrastructure, not as SEO.
 *
 * Every fact below is drawn from the live site content so an agent reading
 * this file cannot be misled about what the business does.
 */
export const dynamic = "force-static";

function buildLlmsTxt(): string {
  const offerings = COLLECTIONS.map(
    (c) => `- **${c.title}** (${c.category}): ${c.description} ${c.details.join(", ")}.`,
  ).join("\n");

  const faqs = FAQS.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n");

  return `# La Flora D'El Patron

> Atelier de fleuristerie, de décoration et de paysage à Hay Riad, Rabat, Maroc.
> ${SITE.signature}

${SITE.description}

## Offers

${offerings}

## Details

- **LocalBusiness**: fleuriste, décorateur, paysagiste. ${SITE.name}, ${SITE.city}.
- **Location**: ${SITE.city}, Maroc. Adresse exacte communiquée sur demande.
- **Hours**: ${SITE.hours.map((h) => `${h.days} ${h.time}`).join("; ")}.
- **Phone**: ${SITE.phoneDisplay}
- **WhatsApp**: ${SITE.whatsappHref}
- **Instagram**: ${SITE.instagramUrl}
- **Maps**: ${SITE.mapsUrl}
- **Languages**: français.
- **Payment**: espèces, virement, carte. Devis sur WhatsApp avant validation.
- **Pricing**: not published; every order is quoted case by case.
- **Service area**: Rabat, Salé, Témara, Skhirat, Kénitra.

## Contact

Orders and quotes go through WhatsApp or the phone number above.

## FAQ

${faqs}

## Optional

- [Catalog as JSON](/ai/service.json)
- [FAQ as JSON](/ai/faq.json)
- [Summary as JSON](/ai/summary.json)
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
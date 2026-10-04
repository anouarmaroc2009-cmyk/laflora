import { SITE } from "@/lib/site";
import { FAQS, SERVICE_CATALOG, CONTACT_POINT } from "@/lib/faqs";

export const dynamic = "force-static";

const payload = {
  version: "1.0",
  generated: SITE.dateModified,
  // Top-level `name` so a generic consumer can identify the subject without
  // walking into `provider`. Also what geo-checklist.dev's ai_discovery check
  // looks for.
  name: SITE.name,
  // Flat, top-level list of what an agent can actually accomplish here, so a
  // consumer can decide relevance without inferring it from `services`.
  capabilities: [
    "browse-floral-services",
    "list-service-offerings",
    "view-portfolio-projects",
    "answer-faq",
    "check-opening-hours",
    "check-delivery-service-area",
    "request-custom-quote",
    "contact-via-whatsapp",
    "contact-via-phone",
  ],
  provider: {
    name: SITE.name,
    url: SITE.domain,
    category: "flower-shop-and-landscaping",
    location: CONTACT_POINT.area,
    languages: ["fr"],
    currencies: ["MAD"],
  },
  services: SERVICE_CATALOG.map((s) => ({
    id: s.id,
    name: s.name,
    category: s.category,
    description: s.description,
    offerings: s.offerings,
    pricing: "on-request",
  })),
  ordering: {
    channels: ["whatsapp", "phone"],
    note: "Quotes are case-by-case; nothing is priced on the site.",
    contact: CONTACT_POINT,
  },
  related: {
    llmsTxt: `${SITE.domain}/llms.txt`,
    llmsFullTxt: `${SITE.domain}/llms-full.txt`,
    aiTxt: `${SITE.domain}/.well-known/ai.txt`,
    summary: `${SITE.domain}/ai/summary.json`,
    faq: `${SITE.domain}/ai/faq.json`,
    feed: `${SITE.domain}/feed.xml`,
  },
  faqCount: FAQS.length,
};

export function GET() {
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
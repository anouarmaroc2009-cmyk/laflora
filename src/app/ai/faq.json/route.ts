import { SITE } from "@/lib/site";
import { FAQS } from "@/lib/faqs";

export const dynamic = "force-static";

const payload = {
  version: "1.0",
  generated: SITE.dateModified,
  language: "fr-MA",
  canonical: `${SITE.domain}/#faq`,
  note: "These answers are rendered visibly in the FAQ section of the homepage.",
  faqs: FAQS,
};

export function GET() {
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
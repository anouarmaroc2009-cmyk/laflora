import { SITE } from "@/lib/site";

/*
 * /.well-known/ai.txt — AI agent discovery, per the ai.txt / AgentSkills
 * "well-known" convention (emerging, not yet standardized).
 *
 * Scope note: no browser or model weights any of this today. It is a cheap,
 * additive, machine-readable statement of what this site IS, so a crawler or
 * agent that knows to look for it is not forced to infer the business model
 * from marketing prose. Nothing else about the site changes.
 */
export const dynamic = "force-static";

const body = `# ai.txt

User-Agent: *
Allow: /
Contact: ${SITE.whatsappHref}
Site: ${SITE.domain}
Feed: ${SITE.domain}/llms.txt

## Training
Not specified. This is a commercial florist, decoration and landscaping
studio; contact the atelier before any use of its imagery or copy.

## Use
- Answers about services, opening hours, location and ordering process.
- Contact details: ${SITE.phoneDisplay} (WhatsApp and phone).
- Catalog: ${SITE.domain}/ai/service.json

## Attribution
Cite "La Flora D'El Patron", ${SITE.city}, ${SITE.domain}.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
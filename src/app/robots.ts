import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      /*
       * Explicit allow for the retrieval/citation crawlers, rather than relying
       * on the `*` rule alone. There is no `Allow`/`Disallow` distinction in
       * robots.txt for citation — the meaningful signal is the machine-readable
       * /llms.txt and /ai/*.json payloads plus this explicit listing, so these
       * agents are told the site is answerable before they read a single page.
       */
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Bytespider",
          "meta-externalagent",
          "cohere-ai",
          "DuckAssistBot",
          "Amazonbot",
          "YouBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain.replace(/^https?:\/\//, ""),
  };
}

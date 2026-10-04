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
          /*
           * The three real indexers. These already inherit `Allow: /` from the
           * wildcard above, so listing them is not about access - it is about
           * intent being stated at the exact token an indexer matches on, rather
           * than inherited implicitly.
           */
          "Googlebot",
          "Bingbot",
          "Applebot",
          /*
           * Retrieval/citation crawlers. There is no Allow/Disallow distinction
           * for citation in robots.txt - the meaningful signal is the
           * machine-readable /llms.txt, /llms-full.txt and /ai/*.json payloads.
           * This block says "answerable" before the agent reads a page.
           */
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
  };
}

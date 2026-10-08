"use client";

import { track } from "@vercel/analytics";

/*
 * The site has no cart and no checkout. A WhatsApp click *is* the conversion,
 * so it is the one thing worth counting, and until it was instrumented there
 * was no way to know whether it ever happened.
 *
 * Vercel Analytics is chosen deliberately over Google Analytics: no cookies, no
 * cross-site identifier and therefore no consent banner to build and maintain
 * under Morocco's Law 09-08. The trade-off is no ad-network attribution, which
 * a single-site atelier buying on one occasion does not need.
 *
 * `context` is a closed union on purpose — free-text labels silently fragment
 * a dashboard, so new call sites fail to compile until they pick one.
 */
export type WaContext =
  | "hero_primary"
  | "hero_supplier"
  | "header"
  | "mobile_menu"
  | "mobile_sticky"
  | "contact"
  | "footer"
  | "about"
  | "faq"
  | "portfolio_project"
  | "collection_card"
  | "occasion_page";

export const trackWhatsApp = (context: WaContext, label?: string) => {
  track("whatsapp_click", {
    context,
    // Which project / collection / occasion, so the funnel can be read per item
    // rather than as one anonymous total.
    ...(label ? { label } : {}),
  });
};

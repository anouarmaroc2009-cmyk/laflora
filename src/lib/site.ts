/*
 * Canonical origin — single source of truth.
 *
 * `lafloradelpatron.com` is not registered yet, so it does not resolve in DNS
 * and must not appear in canonical/og/sitemap/JSON-LD URLs: a canonical that
 * cannot be crawled cannot consolidate ranking signals, and og:url produces
 * dead social shares. Every absolute URL in this project derives from this
 * constant so the two can never drift apart again.
 *
 * When the domain is purchased and attached to the Vercel project, change
 * this single line and redeploy.
 */
const DOMAIN = "https://lafloradelpatron.vercel.app";

export const SITE = {
  name: "La Flora D’El Patron",
  legalName: "La Flora D’El Patron",
  domain: DOMAIN,
  city: "Hay Riad, Rabat",
  country: "MA",
  tagline: "Fleuriste • Décorateur • Paysagiste",
  signature: "L'Art Floral Réinventé",
  phoneDisplay: "06 82 72 50 55",
  phoneRaw: "0682725055",
  phoneHref: "tel:+212682725055",
  whatsappHref:
    "https://wa.me/212682725055?text=Bonjour%20La%20Flora%20D%27El%20Patron%2C%20je%20souhaite%20commander%20une%20composition%20florale.",
  /*
   * Professional-enquiry CTA. Written from the prospective client's side, not
   * as a sourcing request: the atelier receives the order, it does not go
   * looking for stock. Keep the wording neutral — no "grossiste", no sourcing
   * language.
   */
  whatsappFournisseurHref:
    "https://wa.me/212682725055?text=Bonjour%20La%20Flora%20D%27El%20Patron%2C%20je%20suis%20%C3%A9v%C3%A9nementiel%20%C3%A0%20Rabat%20et%20je%20souhaite%20un%20devis%20pour%20une%20composition%20florale.",
  mapsUrl: "https://maps.app.goo.gl/thqqJJwLwgoBFQyq7",
  instagramUrl: "https://www.instagram.com/laflora.delpatron",
  hours: [
    { days: "Lundi – Vendredi", time: "9h15 – 20h30" },
    { days: "Samedi", time: "9h08 – 20h35" },
    { days: "Dimanche", time: "9h08 – 20h30" },
  ] as const,
  description:
    "La Flora D’El Patron — Fleuriste, décorateur et paysagiste à Hay Riad, Rabat. Bouquets personnalisés sur mesure, boîtes et nounours de fleurs, cadeaux & coffrets de luxe, plantes et aménagement paysager. Mariages, événements VIP et résidences de prestige. 06 82 72 50 55.",
  // Absolute, not a root-relative path: this value is consumed by the JSON-LD
  // `image` field in schema.ts, where a relative URL is invalid. Derived from
  // DOMAIN so it can never point at a different host than the canonical.
  ogImage: `${DOMAIN}/images/hero.jpg`,
  ogImageAlt:
    "Composition florale de luxe réalisée par La Flora D’El Patron, fleuriste à Hay Riad, Rabat",
  /*
   * Site-level freshness. `dateModified` in schema.org is distinct from a
   * project's completion year: the portfolio legitimately carries real 2024 /
   * 2025 dates, but the page itself is maintained. Bump on substantive copy or
   * catalogue changes — not on every deploy.
   */
  dateModified: "2026-10-04",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
] as const;
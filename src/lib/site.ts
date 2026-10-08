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
   * B2B / wholesale CTA. The atelier is the supplier here, so the sender is a
   * professional placing a wholesale order with a florist, an agency, a hotel —
   * and La Flora is the one they are ordering from. Keep the sender as the
   * buyer: do not write it as a supplier pitching their own stock to us.
   *
   * Note the framing: this is a buyer *placing an order*, not one browsing for
   * a catalogue. That reads as higher intent than a "send me your price list"
   * message, and it should — but it also means unqualified enquiries will
   * arrive without volumes agreed. Worth a volumes/lead-time reply template.
   */
  whatsappFournisseurHref:
    "https://wa.me/212682725055?text=Bonjour%20La%20Flora%20D%27El%20Patron%2C%20je%20suis%20un%20professionnel%20et%20je%20souhaite%20passer%20une%20commande%20fournisseur%20en%20gros.",
  mapsUrl: "https://maps.app.goo.gl/thqqJJwLwgoBFQyq7",
  instagramUrl: "https://www.instagram.com/laflora.delpatron",
  /*
   * Full atelier address, supplied and confirmed by the business. Previously
   * the schema claimed `streetAddress: "Hay Riad"` — a district name in a
   * field that requires a street address — while the site's own Contact copy
   * said the address was given on request. Both were wrong in different ways.
   * One structured source now, consumed by schema.ts and the contact footer.
   *
   * No postalCode: the field used to carry an inherited "10100" that was never
   * verified against the atelier's real code, and a wrong postal code in
   * LocalBusiness schema is worse than an absent one. Add it back only once
   * the business confirms it.
   */
  address: {
    street: "Prestigia Hay Riad, près du Marjane Market",
    streetExtra: "Avenue Abderrahim Bouabid",
    locality: "Rabat",
    region: "Rabat-Salé-Kénitra",
    country: "MA",
  },
  /** Single-line form, for map links and any future one-line display. */
  addressOneLine:
    "Prestigia Hay Riad, près du Marjane Market, Avenue Abderrahim Bouabid, Rabat",
  hours: [
    { days: "Lundi – Vendredi", time: "9h15 – 20h30" },
    { days: "Samedi", time: "9h08 – 20h35" },
    { days: "Dimanche", time: "9h08 – 20h30" },
  ] as const,
  description:
    "La Flora D’El Patron, fleuriste, décorateur et paysagiste à Hay Riad, Rabat. Bouquets sur mesure, boîtes et nounours de fleurs, coffrets cadeaux, plantes d’intérieur et aménagement paysager. Mariages, réceptions privées et résidences. 06 82 72 50 55.",
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

/* -------------------------------------------------------------------------
 * WhatsApp deep links.
 *
 * Every CTA used to point at one identical prefilled string, so the atelier
 * received nine different-looking buttons that all delivered the same opaque
 * lead. These builders append *what the visitor was actually looking at*, so
 * the first reply can start from real context instead of an open question.
 *
 * wa.me requires the number without its national trunk zero: SITE.phoneRaw
 * ("0682725055") becomes 212682725055.
 * ---------------------------------------------------------------------- */
export const WHATSAPP_NUMBER = "212682725055";

const wa = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const OPENING =
  "Bonjour La Flora D'El Patron, je souhaite commander une composition florale.";

/** No context — the hero and generic section-level CTAs. */
export const orderHref = (context?: string) =>
  wa(context ? `${OPENING} ${context}` : OPENING);

/** A specific collection card: buyer names the line they're considering. */
export const orderCollectionHref = (title: string) =>
  orderHref(
    `Je suis intéressé par la collection « ${title} ». Pouvez-vous m'indiquer les disponibilités, les formats et le budget ?`,
  );

/** A specific portfolio piece: "I want something like this", the real brief. */
export const orderProjectHref = (title: string, occasion: string) =>
  orderHref(
    `J'ai vu votre projet « ${title} » (${occasion}) et je voudrais une composition similaire. Pouvez-vous m'en dire plus ?`,
  );

/** An occasion landing page: buyer self-identifies the occasion up front. */
export const orderOccasionHref = (label: string) =>
  orderHref(
    `Je recherche des fleurs pour : ${label}. Pouvez-vous me proposer une composition et m'indiquer vos disponibilités ?`,
  );

/*
 * #maison (About) and #faq both render as sections but were absent here, so
 * nothing in the page could reach them. The FAQ in particular holds the
 * pricing, delivery-area and ordering answers — the exact content a hesitant
 * buyer is looking for — and it was unreachable without scrolling.
 */
export const NAV_LINKS = [
  { label: "Accueil", href: "#top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Collections", href: "#collections" },
  { label: "À propos", href: "#maison" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
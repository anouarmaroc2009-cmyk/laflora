export const SITE = {
  name: "La Flora D’El Patron",
  legalName: "La Flora D’El Patron",
  domain: "https://lafloradelpatron.com",
  city: "Hay Riad, Rabat",
  country: "MA",
  tagline: "Fleuriste • Décorateur • Paysagiste",
  signature: "L'Art Floral Réinventé",
  phoneDisplay: "06 82 72 50 55",
  phoneRaw: "0682725055",
  phoneHref: "tel:+212682725055",
  whatsappHref:
    "https://wa.me/212682725055?text=Bonjour%20La%20Flora%20D%27El%20Patron%2C%20je%20souhaite%20commander%20une%20composition%20florale.",
  mapsUrl: "https://maps.app.goo.gl/thqqJJwLwgoBFQyq7",
  instagramUrl: "https://www.instagram.com/laflora.delpatron",
  hours: [
    { days: "Lundi – Vendredi", time: "9h15 – 20h30" },
    { days: "Samedi", time: "9h08 – 20h35" },
    { days: "Dimanche", time: "9h08 – 20h30" },
  ] as const,
  description:
    "La Flora D’El Patron — Fleuriste, décorateur et paysagiste à Hay Riad, Rabat. Bouquets personnalisés sur mesure, boîtes et nounours de fleurs, cadeaux & coffrets de luxe, plantes et aménagement paysager. Mariages, événements VIP et résidences de prestige. 06 82 72 50 55.",
  ogImage:
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&h=630&q=80",
  ogImageAlt:
    "Composition florale de luxe réalisée par La Flora D’El Patron, fleuriste à Hay Riad, Rabat",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
] as const;
import { SITE } from "@/lib/site";
import { COLLECTIONS } from "@/lib/collections";
import { FAQS, SERVICE_CATALOG, CONTACT_POINT } from "@/lib/faqs";

export const dynamic = "force-static";

const categories = [...new Set(COLLECTIONS.map((c) => c.category))];

const payload = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.domain,
  description: SITE.description,
  slogan: SITE.signature,
  dateModified: SITE.dateModified,
  sameAs: [SITE.instagramUrl],
  image: SITE.ogImage,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    postalCode: "10100",
    addressCountry: "MA",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneDisplay,
      contactType: "sales",
      areaServed: "MA",
      availableLanguage: ["fr"],
    },
  ],
  knowsAbout: [
    "fleuriste",
    "décoration florale",
    "paysage",
    "bouquet de mariée",
    "coffret d'entreprise",
  ],
  makesOffer: SERVICE_CATALOG.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      description: s.description,
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    itemListElement: SERVICE_CATALOG.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
      },
    })),
  },
  potentialAction: {
    "@type": "OrderAction",
    target: `${SITE.domain}/contact`,
    deliveryMethod: "https://schema.org/PickupDelivery",
  },
  numberOfItems: COLLECTIONS.length,
  faqCount: FAQS.length,
  categories,
  areaServed: ["Rabat", "Salé", "Témara", "Skhirat", "Kénitra"],
  contact: CONTACT_POINT,
};

export function GET() {
  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
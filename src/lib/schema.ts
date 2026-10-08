import { SITE } from "./site";
import { COLLECTIONS } from "./collections";
import { FAQS } from "./faqs";
import { CATEGORIES } from "./portfolio";

/* Collection.category is a CategoryId for join integrity; schema.org needs the
 * human label, so resolve it here rather than emitting "bouquets". */
const categoryLabel = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const floristJsonLd = {
  "@context": "https://schema.org",
  // Order is a set, not a ranking, but some consumers read only the first entry
  // and match it against their known Organization/LocalBusiness vocabulary.
  // LocalBusiness leads; Florist stays declared as the specific subtype.
  "@type": ["LocalBusiness", "Florist", "HomeAndConstructionBusiness"],
  "@id": `${SITE.domain}/#business`,
  name: SITE.name,
  legalName: SITE.legalName,
  slogan: SITE.signature,
  description: SITE.description,
  url: SITE.domain,
  telephone: "+212682725055",
  priceRange: "$$$$",
  currenciesAccepted: "MAD",
  paymentAccepted: "Espèces, virement, carte",
  image: [SITE.ogImage],
  hasMap: SITE.mapsUrl,
  sameAs: [SITE.instagramUrl],
  dateModified: SITE.dateModified,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.street}, ${SITE.address.streetExtra}`,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0209,
    longitude: -6.8416,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:15",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:08",
      closes: "20:35",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:08",
      closes: "20:30",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Salé" },
    { "@type": "City", name: "Témara" },
    { "@type": "City", name: "Skhirat" },
    { "@type": "City", name: "Kénitra" },
    { "@type": "Place", name: "Hay Riad" },
    { "@type": "Place", name: "Salles de réception et lieux de mariage" },
    { "@type": "Place", name: "Hôtels, riads et villas privées" },
  ],
  knowsAbout: [
    "Fleuriste de luxe",
    "Bouquets personnalisés sur mesure",
    "Boîtes et nounours de fleurs",
    "Coffrets et cadeaux de luxe",
    "Plantes d'intérieur",
    "Aménagement paysager",
    "Décoration florale de mariage",
    "Installations événementielles",
    "Livraison de fleurs à Rabat",
  ],
  makesOffer: COLLECTIONS.map((collection) => ({
    "@type": "Offer",
    priceCurrency: "MAD",
    description: collection.description,
    itemOffered: {
      "@type": "Service",
      name: collection.title,
      category: categoryLabel(collection.category),
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Collections La Flora D’El Patron",
    itemListElement: COLLECTIONS.map((collection) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: collection.title,
        description: collection.description,
      },
    })),
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.domain}/#website`,
  url: SITE.domain,
  name: SITE.name,
  inLanguage: "fr-MA",
  dateModified: SITE.dateModified,
  publisher: { "@id": `${SITE.domain}/#business` },
};

/*
 * FAQPage mirrors the visible FAQ section rendered by components/Faq.tsx, from
 * the identical FAQS array. Both must stay in sync: markup without matching
 * on-page content is a structured-data violation, not a ranking win.
 */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE.domain}/#faq`,
  inLanguage: "fr-MA",
  dateModified: SITE.dateModified,
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
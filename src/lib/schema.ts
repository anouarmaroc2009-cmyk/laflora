import { SITE } from "./site";
import { COLLECTIONS } from "./collections";

export const floristJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Florist", "LocalBusiness", "HomeAndConstructionBusiness"],
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
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hay Riad",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    postalCode: "10100",
    addressCountry: "MA",
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
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
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
      category: collection.category,
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Collections LaFloraDelPatron",
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
  publisher: { "@id": `${SITE.domain}/#business` },
};
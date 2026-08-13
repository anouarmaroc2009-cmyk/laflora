import { SITE } from "./site";

export const floristJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Florist", "LocalBusiness"],
  "@id": `${SITE.domain}/#business`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.domain,
  telephone: "+212682725055",
  priceRange: "$$$",
  currenciesAccepted: "MAD",
  image: [SITE.ogImage],
  hasMap: SITE.mapsUrl,
  sameAs: [SITE.mapsUrl, SITE.instagramUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Casablanca" },
    { "@type": "City", name: "Mohammedia" },
    { "@type": "City", name: "Rabat" },
    { "@type": "Place", name: "Salles de réception et lieux de mariage" },
    { "@type": "Place", name: "Hôtels et villas de la Corniche" },
  ],
  knowsAbout: [
    "Design floral",
    "Décoration florale de mariage",
    "Bouquets sur mesure",
    "Sculptures florales",
    "Installations événementielles",
    "Livraison de fleurs à Casablanca",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations florales",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Décoration florale de mariage",
          description:
            "Portiques, tables, allées et bouquets de cérémonie dessinés sur mesure à Casablanca.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bouquets sur mesure",
          description:
            "Bouquets de mariée et compositions montés à la main, selon les saisons.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installations florales événementielles",
          description:
            "Sculptures et installations florales pour événements privés et d'entreprise.",
        },
      },
    ],
  },
};

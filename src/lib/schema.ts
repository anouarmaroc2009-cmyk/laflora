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
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
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
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Salé" },
    { "@type": "City", name: "Témara" },
    { "@type": "City", name: "Kénitra" },
    { "@type": "Place", name: "Salles de réception et lieux de mariage" },
    { "@type": "Place", name: "Hôtels, riads et villas privées" },
  ],
  knowsAbout: [
    "Design floral",
    "Décoration florale de mariage",
    "Bouquets sur mesure",
    "Sculptures florales",
    "Installations événementielles",
    "Livraison de fleurs à Rabat et ses environs",
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
            "Portiques, tables, allées et bouquets de cérémonie dessinés sur mesure à Rabat.",
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

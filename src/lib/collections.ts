export type Collection = {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  image: string;
  alt: string;
};

/*
 * Plate artwork lives in /public/images. These render at 96-112px, so the
 * sources are 480px — deliberately oversized for 2x density, deliberately
 * tiny in bytes. Regenerate from IMAGE_PROMPTS.md, keep the 1:1 ratio.
 */
const img = (file: string) => `/images/${file}`;

/*
 * Signature offerings. Pricing is intentionally not published: every order is
 * quoted on WhatsApp so florist time, season and volume stay respected.
 */
export const COLLECTIONS: Collection[] = [
  {
    id: "bouquet-personnalise",
    title: "Le Bouquet Sur Mesure",
    category: "Bouquets",
    description:
      "Une composition pensée pour une personne précise : sa morphologie, sa robe, la saison et l'heure de la cérémonie. Nous ne vendons pas des arrangements — nous composons.",
    details: ["Bouquet de mariée", "Composition d'anniversaire", "Bouquet d'entreprise"],
    image: img("c1-bouquet-personnalise.jpg"),
    alt: "Bouquet personnalisé noué à la main, collection de bouquets de luxe La Flora D’El Patron",
  },
  {
    id: "boite-nounours",
    title: "La Boîte & Le Nounours",
    category: "Boîtes & Nounours",
    description:
      "La boîte à chapeau signature, et la sculpture portée en fleurs stabilisées. Deux objets floraux qui survivent à la cérémonie.",
    details: ["Boîte à chapeau", "Sculpture florale", "Fleurs stabilisées"],
    image: img("c2-boite-nounours.jpg"),
    alt: "Boîte à fleurs signature et sculpture florale de luxe, collection La Flora D’El Patron à Rabat",
  },
  {
    id: "cadeaux-coffrets",
    title: "Coffrets & Cadeaux",
    category: "Cadeaux",
    description:
      "Paniers d'hommage, coffrets d'entreprise numérotés, cadeaux de fin d'année et anniversaires. Une curation d'objets choisis, jamais empilés au hasard.",
    details: ["Coffret d'hommage", "Cadeau d'entreprise", "Coffret numéroté"],
    image: img("c3-cadeaux-coffrets.jpg"),
    alt: "Coffrets et cadeaux de luxe floraux, sélection de cadeaux La Flora D’El Patron",
  },
  {
    id: "plantes-paysage",
    title: "Plantes & Paysage",
    category: "Plantes & Aménagement",
    description:
      "Plantes d'intérieur d'exception en pot, et projets d'aménagement paysager pour villas, terrasses et patios. Étude, plan, plantation — puis entretien.",
    details: ["Plantes d'intérieur", "Terrasse & patio", "Plan d'aménagement"],
    image: img("c4-interieur-paysage.jpg"),
    alt: "Plantes d'intérieur et aménagement paysager pour villa de luxe, atelier La Flora D’El Patron",
  },
];

import type { CategoryId } from "./portfolio";

export type Collection = {
  id: string;
  title: string;
  /*
   * Was `string`, joined downstream on `Category.label` — but the stored values
   * were short forms ("Bouquets") and the labels are long ("Les Bouquets
   * Personnalisés"). All four comparisons failed, `category` resolved to
   * undefined on every card, and the "01 —" index prefix silently never
   * rendered. Keying on the stable `CategoryId` union instead makes the join
   * exhaustive and the compiler catches any future mismatch.
   */
  category: CategoryId;
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
    category: "bouquets",
    description:
      "Chaque bouquet est dessiné pour une personne précise : sa morphologie, sa robe, la saison, l'heure de la cérémonie.",
    details: ["Bouquet de mariée", "Composition d'anniversaire", "Bouquet d'entreprise"],
    image: img("c1-bouquet-personnalise.jpg"),
    alt: "Bouquet personnalisé noué à la main, collection de bouquets de luxe La Flora D’El Patron",
  },
  {
    id: "boite-nounours",
    title: "La Boîte & Le Nounours",
    category: "boites",
    description:
      "La boîte à chapeau signature et la sculpture portée en fleurs stabilisées. Deux objets que l'on garde après la journée.",
    details: ["Boîte à chapeau", "Sculpture florale", "Fleurs stabilisées"],
    image: img("c2-boite-nounours.jpg"),
    alt: "Boîte à fleurs signature et sculpture florale de luxe, collection La Flora D’El Patron à Rabat",
  },
  {
    id: "cadeaux-coffrets",
    title: "Coffrets & Cadeaux",
    category: "cadeaux",
    description:
      "Paniers d'hommage, coffrets d'entreprise numérotés, cadeaux de fin d'année et anniversaires. Chaque objet est choisi un par un.",
    details: ["Coffret d'hommage", "Cadeau d'entreprise", "Coffret numéroté"],
    image: img("c3-cadeaux-coffrets.jpg"),
    alt: "Coffrets et cadeaux de luxe floraux, sélection de cadeaux La Flora D’El Patron",
  },
  {
    id: "plantes-paysage",
    title: "Plantes & Paysage",
    category: "plantes",
    description:
      "Plantes d'intérieur en pot, choisies pour la pièce qui les accueille. L'aménagement couvre villas, terrasses et patios : étude, plan, plantation, puis entretien.",
    details: ["Plantes d'intérieur", "Terrasse & patio", "Plan d'aménagement"],
    image: img("c4-interieur-paysage.jpg"),
    alt: "Plantes d'intérieur et aménagement paysager pour villa de luxe, atelier La Flora D’El Patron",
  },
];

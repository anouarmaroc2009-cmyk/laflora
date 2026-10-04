export type Collection = {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  image: string;
  alt: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

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
    image: img("photo-1519378058457-4c29a0a2efac"),
    alt: "Bouquet personnalisé noué à la main, collection de bouquets de luxe LaFloraDelPatron",
  },
  {
    id: "boite-nounours",
    title: "La Boîte & Le Nounours",
    category: "Boîtes & Nounours",
    description:
      "La boîte à chapeau signature, et la sculpture portée en fleurs stabilisées. Deux objets floraux qui survivent à la cérémonie.",
    details: ["Boîte à chapeau", "Sculpture florale", "Fleurs stabilisées"],
    image: img("photo-1457089328109-e5d9bd499191"),
    alt: "Boîte à fleurs signature et sculpture florale de luxe, collection LaFloraDelPatron à Rabat",
  },
  {
    id: "cadeaux-coffrets",
    title: "Coffrets & Cadeaux",
    category: "Cadeaux",
    description:
      "Paniers d'hommage, coffrets d'entreprise numérotés, cadeaux de fin d'année et anniversaires. Une curation d'objets choisis, jamais empilés au hasard.",
    details: ["Coffret d'hommage", "Cadeau d'entreprise", "Coffret numéroté"],
    image: img("photo-1490750967868-88aa4486c946"),
    alt: "Coffrets et cadeaux de luxe floraux, sélection de cadeaux LaFloraDelPatron",
  },
  {
    id: "plantes-paysage",
    title: "Plantes & Paysage",
    category: "Plantes & Aménagement",
    description:
      "Plantes d'intérieur d'exception en pot, et projets d'aménagement paysager pour villas, terrasses et patios. Étude, plan, plantation — puis entretien.",
    details: ["Plantes d'intérieur", "Terrasse & patio", "Plan d'aménagement"],
    image: img("photo-1441974231531-c6227db76b6e"),
    alt: "Plantes d'intérieur et aménagement paysager pour villa de luxe, atelier LaFloraDelPatron",
  },
];
export type CategoryId = "bouquets" | "boites" | "cadeaux" | "plantes";

export type Category = {
  id: CategoryId;
  label: string;
  index: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "bouquets",
    label: "Les Bouquets Personnalisés",
    index: "01",
    blurb:
      "Compositions nouées à la main, dessinées pour un visage, une tenue, une saison.",
  },
  {
    id: "boites",
    label: "Boîtes & Nounours de Fleurs",
    index: "02",
    blurb:
      "Boîtes signature et sculptures de fleurs éternelles, montées comme des pièces d'atelier.",
  },
  {
    id: "cadeaux",
    label: "Cadeaux & Coffrets",
    index: "03",
    blurb:
      "Coffrets de luxe, paniers d'hommage et cadeaux d'entreprise, préparés sur commande.",
  },
  {
    id: "plantes",
    label: "Plantes & Aménagement Paysager",
    index: "04",
    blurb:
      "Plantes d'intérieur d'exception et projets paysagers pour villas, terrasses et patios.",
  },
];

export type Project = {
  id: string;
  title: string;
  category: CategoryId;
  year: string;
  occasion: string;
  story: string;
  palette: { name: string; hex: string }[];
  varieties: string[];
  image: string;
  alt: string;
  aspect: string;
};

/*
 * Catalogue imagery is currently placeholder stock, normalised by the `.plate`
 * grade in globals.css. Replace the `image` values with the atelier's own
 * photography — keep the same crop ratio and the grid needs no other change.
 */
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const PROJECTS: Project[] = [
  {
    id: "noueuse-silence",
    title: "Noueuse de Silence",
    category: "bouquets",
    year: "2025",
    occasion: "Bouquet de mariée — Villa, Hay Riad",
    story:
      "Un bouquet tombant de pivoines et de roses anciennes, noué au fil de fer vert et posé contre une robe de soie. Peu de fleurs, mais aucune de travers.",
    palette: [
      { name: "Pivoine", hex: "#F0D4DE" },
      { name: "Mauve", hex: "#B784A7" },
      { name: "Ivoire", hex: "#F4EEE8" },
    ],
    varieties: ["Pivoines Sarah Bernhardt", "Roses anciennes", "Astilbe"],
    image: img("photo-1519378058457-4c29a0a2efac"),
    alt: "Bouquet de mariée personnalisé aux pivoines et roses anciennes par La Flora D’El Patron à Rabat",
    aspect: "aspect-[4/5]",
  },
  {
    id: "veil-de-rosee",
    title: "Voile de Rosée",
    category: "bouquets",
    year: "2025",
    occasion: "Composition d'anniversaire — Clientèle privée",
    story:
      "Un dégradé de roses, du plus clair au plus profond, noué si serré qu'il tient debout. Un bouquet qui se tient seul dans son vase, comme un objet.",
    palette: [
      { name: "Rose ancien", hex: "#C9A2AE" },
      { name: "Prune", hex: "#7A4F63" },
      { name: "Champagne", hex: "#EFDCC8" },
    ],
    varieties: ["Roses Garden Party", "Renoncules", "Eucalyptus"],
    image: img("photo-1462275646964-a0e3386b89fa"),
    alt: "Bouquet personnalisé de roses en dégradé, composition florale de luxe à Hay Riad",
    aspect: "aspect-[3/4]",
  },
  {
    id: "aube-pale",
    title: "Aube Pâle",
    category: "bouquets",
    year: "2024",
    occasion: "Cérémonie intime — Jardin privé",
    story:
      "Une cérémonie avant la chaleur. Des roses anciennes en tons pâles, un chemin de pétales entre deux rangs d'invités. Peu de fleurs, bien placées.",
    palette: [
      { name: "Craie", hex: "#EDE6E2" },
      { name: "Mauve", hex: "#B784A7" },
      { name: "Sauge", hex: "#93A08C" },
    ],
    varieties: ["Roses anciennes", "Brumalia", "Gypsophile"],
    image: img("photo-1470509037663-253afd7f0f51"),
    alt: "Composition florale de cérémonie aux roses anciennes, design floral de mariage à Rabat",
    aspect: "aspect-[4/5]",
  },
  {
    id: "boite-signature",
    title: "La Boîte Signature",
    category: "boites",
    year: "2025",
    occasion: "Coffret-round — Mariage à Rabat",
    story:
      "La boîte à chapeau signature, habillée de crêpe et de ruban de soie, remplie à la main juste avant la remise. Douze fleurs, aucune de réserve.",
    palette: [
      { name: "Mauve vif", hex: "#C779A2" },
      { name: "Nuit", hex: "#17171B" },
      { name: "Ivoire", hex: "#F2EBE4" },
    ],
    varieties: ["Roses Avalanche", "Lisianthus", "Ruscus"],
    image: img("photo-1457089328109-e5d9bd499191"),
    alt: "Boîte à fleurs signature de luxe remplie de roses et lisianthus, atelier floral La Flora D’El Patron",
    aspect: "aspect-square",
  },
  {
    id: "nounours-etermel",
    title: "Nounours Éternel",
    category: "boites",
    year: "2024",
    occasion: "Sculpture florale — Vitrine, Hay Riad",
    story:
      "Une sculpture-portée en fleurs stabilisées, monte à l'atelier et livrée en main propre. Elle ne se fane pas : c'est tout l'intérêt.",
    palette: [
      { name: "Orchidée", hex: "#9C7BA6" },
      { name: "Encre", hex: "#0E0E10" },
      { name: "Lavande", hex: "#A99A9E" },
    ],
    varieties: ["Fleurs stabilisées", "Orchidées", "Cotons floraux"],
    image: img("photo-1522748906645-95d8adfd52c7"),
    alt: "Sculpture florale en fleurs stabilisées, poupée florale de luxe par La Flora D’El Patron",
    aspect: "aspect-[3/4]",
  },
  {
    id: "coffret-ivoire",
    title: "Coffret Ivoire",
    category: "cadeaux",
    year: "2025",
    occasion: "Panier d'hommage — Famille cliente",
    story:
      "Un coffret de cadeau haut de gamme : fleurs, chocolat fin, bougie parfumée, carte manuscrite. Chaque objet est choisi, jamais empilé.",
    palette: [
      { name: "Ivoire", hex: "#F1EADF" },
      { name: "Or pâle", hex: "#C7A24B" },
      { name: "Encre", hex: "#141416" },
    ],
    varieties: ["Roses", "Ranunculus", "Feuillage de saison"],
    image: img("photo-1490750967868-88aa4486c946"),
    alt: "Coffret cadeau de luxe avec fleurs, dorure et accessoires, coffret d'hommage La Flora D’El Patron",
    aspect: "aspect-[4/3]",
  },
  {
    id: "soiree-ambiance",
    title: "Soirée Ambiance",
    category: "cadeaux",
    year: "2024",
    occasion: "Cadeaux d'entreprise — Série annuelle",
    story:
      "Cent coffrets identiques, numérotés, livrés sur un même créneau. La cohérence, à cette échelle, est la vraie démonstration de luxe.",
    palette: [
      { name: "Nuit", hex: "#0E0E10" },
      { name: "Mauve", hex: "#B784A7" },
      { name: "Gris perle", hex: "#BFBCC2" },
    ],
    varieties: ["Orchidées Phalaenopsis", "Brumalia", "Eucalyptus"],
    image: img("photo-1513151233558-d860c5398176"),
    alt: "Coffrets cadeaux d'entreprise fleuris pour une réception, design floral événementiel à Rabat",
    aspect: "aspect-[4/5]",
  },
  {
    id: "jardin-suspendu",
    title: "Jardin Suspendu",
    category: "plantes",
    year: "2025",
    occasion: "Aménagement paysager — Terrasse, Hay Riad",
    story:
      "Deux cents mètres carrés de végétation suspendue, fougères et fleurs blanches accrochées tige par tige. Les invités levaient les yeux avant de parler.",
    palette: [
      { name: "Vert forêt", hex: "#3F5245" },
      { name: "Fougère", hex: "#7C8A6E" },
      { name: "Blanc", hex: "#F7F4EC" },
    ],
    varieties: ["Fougères", "Clématites", "Roses blanches"],
    image: img("photo-1441974231531-c6227db76b6e"),
    alt: "Aménagement paysager et végétation suspendue pour une villa de luxe à Hay Riad, Rabat",
    aspect: "aspect-[4/5]",
  },
  {
    id: "portique-ivoire",
    title: "Portique Ivoire",
    category: "plantes",
    year: "2024",
    occasion: "Couronnement floral — Mariage, Rabat",
    story:
      "Un portique de six mètres habillé de cascades de roses et de gypsophile, encadré de Yucca et de stéas. La structure disparaît sous le végétal.",
    palette: [
      { name: "Ivoire", hex: "#F2EAD9" },
      { name: "Mauve pâle", hex: "#C79FB8" },
      { name: "Sauge", hex: "#93A08C" },
    ],
    varieties: ["Roses Avalanche", "Gypsophile", "Yucca", "Stéas"],
    image: img("photo-1469371670807-013ccf25f16a"),
    alt: "Portique floral ivoire pour un mariage, décoration florale de luxe par La Flora D’El Patron à Rabat",
    aspect: "aspect-[4/5]",
  },
];
export type CategoryId = "mariages" | "sculptures" | "evenements";

export type Category = {
  id: CategoryId;
  label: string;
  shortLabel: string;
};

export const CATEGORIES: Category[] = [
  { id: "mariages", label: "Mariages", shortLabel: "Mariage" },
  { id: "sculptures", label: "Sculptures sur mesure", shortLabel: "Sculpture" },
  { id: "evenements", label: "Installations événementielles", shortLabel: "Événement" },
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

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const PROJECTS: Project[] = [
  {
    id: "le-grand-voile",
    title: "Le Grand Voile",
    category: "mariages",
    year: "2025",
    occasion: "Mariage — Jardin des Oliviers",
    story:
      "Un portique de six mètres habillé de cascades de roses et de gypsophile, pensé pour encadrer un échange sous les oliviers. Les tiges ont été préparées une à une, la veille, au frais de l'atelier.",
    palette: [
      { name: "Ivoire", hex: "#F2EAD9" },
      { name: "Rose poudré", hex: "#E5C4B8" },
      { name: "Sauge", hex: "#93A08C" },
    ],
    varieties: ["Roses Avalanche", "Gypsophile", "Eucalyptus"],
    image: img("photo-1469371670807-013ccf25f16a"),
    alt: "Portique de mariage habillé de cascades de roses et de gypsophile, décoration florale de mariage par LaFloraDelPatron à Casablanca",
    aspect: "aspect-[4/5]",
  },
  {
    id: "opera-vegetal",
    title: "Opéra Végétal",
    category: "sculptures",
    year: "2024",
    occasion: "Installation privée — Villa de la Corniche",
    story:
      "Une sculpture florale suspendue, montée autour d'un cadre végétal invisible. Des roses ivoire et vert de gris, tressées pendant deux jours, qui semblent flotter au-dessus de la table.",
    palette: [
      { name: "Ivoire", hex: "#EFE7D8" },
      { name: "Vert de gris", hex: "#9AA88F" },
      { name: "Blanc", hex: "#FBF8F1" },
    ],
    varieties: ["Roses Vendela", "Lisianthus", "Fougère de Sologne"],
    image: img("photo-1457089328109-e5d9bd499191"),
    alt: "Sculpture florale de roses ivoire et vertes montée à la main, œuvre sur mesure du fleuriste LaFloraDelPatron",
    aspect: "aspect-[3/4]",
  },
  {
    id: "la-reine-marie",
    title: "La Reine Marie",
    category: "mariages",
    year: "2025",
    occasion: "Bouquet de mariée — Hôtel particulier",
    story:
      "Un bouquet tombant aux roses poudrées et renoncules, pensé pour une robe sans manches et une réception à la lumière chaude du soir. Attaché au fil de fer vert, comme autrefois.",
    palette: [
      { name: "Rose poudré", hex: "#E7C7BA" },
      { name: "Corail", hex: "#D89A86" },
      { name: "Crème", hex: "#F4EBDD" },
    ],
    varieties: ["Roses Garden Party", "Renoncules", "Astilbe"],
    image: img("photo-1519378058457-4c29a0a2efac"),
    alt: "Bouquet de mariée aux roses poudrées et renoncules, réalisé sur mesure par la fleuriste LaFloraDelPatron",
    aspect: "aspect-[3/4]",
  },
  {
    id: "diner-aux-chandelles",
    title: "Dîner aux Chandelles",
    category: "evenements",
    year: "2024",
    occasion: "Table de réception — Domaine privé",
    story:
      "Une table basse et douze convives, des mousses basses de fleurs, des bougies posées entre les verres. La lumière compte autant que la fleur : nous avons dessiné les ombres d'abord.",
    palette: [
      { name: "Terracotta", hex: "#B26B52" },
      { name: "Miel", hex: "#C9A24B" },
      { name: "Ivoire", hex: "#F1E8D8" },
    ],
    varieties: ["Roses Anniversaire", "Dahlias", "Ruscus"],
    image: img("photo-1519225421980-715cb0215aed"),
    alt: "Table de réception habillée de fleurs et de bougies, installation florale événementielle à Casablanca",
    aspect: "aspect-[4/3]",
  },
  {
    id: "jardin-suspendu",
    title: "Jardin Suspendu",
    category: "evenements",
    year: "2025",
    occasion: "Plafond floral — Réception intérieure",
    story:
      "Un plafond végétal de deux cents mètres carrés, des fougères et des fleurs blanches accrochées tige par tige. Les invités levaient les yeux avant de parler — exactement l'effet recherché.",
    palette: [
      { name: "Vert forêt", hex: "#3F5245" },
      { name: "Fougère", hex: "#7C8A6E" },
      { name: "Blanc", hex: "#F7F4EC" },
    ],
    varieties: ["Fougères", "Roses blanche", "Clématites"],
    image: img("photo-1441974231531-c6227db76b6e"),
    alt: "Plafond végétal suspendu de feuillages et de fleurs blanches, installation florale événementielle sur mesure",
    aspect: "aspect-[4/5]",
  },
  {
    id: "mineral-et-fleur",
    title: "Minéral & Fleur",
    category: "sculptures",
    year: "2024",
    occasion: "Sculpture d'atelier — Exposition",
    story:
      "Une rencontre entre la pierre et le pétale : des pivoines posées sur des blocs d'argile brute, des rameaux courbés comme des échafaudages. Une pièce d'atelier, hors commande, pour le plaisir.",
    palette: [
      { name: "Peau", hex: "#D9B7A0" },
      { name: "Pivoine", hex: "#C86F6F" },
      { name: "Argile", hex: "#A67B5B" },
    ],
    varieties: ["Pivoines Sarah Bernhardt", "Amarantes", "Branches d'olivier"],
    image: img("photo-1522748906645-95d8adfd52c7"),
    alt: "Sculpture florale mêlant pivoines, argile et rameaux, création florale sur mesure de l'atelier LaFloraDelPatron",
    aspect: "aspect-square",
  },
  {
    id: "serre-privee",
    title: "Serre Privée",
    category: "sculptures",
    year: "2023",
    occasion: "Composition sculpturale — Boutique privée",
    story:
      "Des orchidées dans des tons profonds, posées comme une collection dans une serre miniature. Une commande particulière pour une vitrine, qui n'a jamais quitté nos mains jusqu'au lieu de pose.",
    palette: [
      { name: "Orchidée", hex: "#9C7BA6" },
      { name: "Encre", hex: "#2C2A31" },
      { name: "Lavande", hex: "#A99A9E" },
    ],
    varieties: ["Orchidées Dendrobium", "Anthuriums", "Néottie"],
    image: img("photo-1462275646964-a0e3386b89fa"),
    alt: "Composition d'orchidées aux tons profonds pour un bouquet sur mesure, atelier floral LaFloraDelPatron à Casablanca",
    aspect: "aspect-[3/4]",
  },
  {
    id: "haute-table",
    title: "Haute Table",
    category: "evenements",
    year: "2024",
    occasion: "Réception d'entreprise — Casablanca",
    story:
      "Une allée de fleurs basses et de candélabres pour une soirée d'entreprise. Le décor doit soutenir la conversation, jamais la dominer : nous avons choisi des matières qui parlent bas.",
    palette: [
      { name: "Blanc cassé", hex: "#F2EEE5" },
      { name: "Doré", hex: "#C7A24B" },
      { name: "Vert olive", hex: "#6F7559" },
    ],
    varieties: ["Orchidées Phalaenopsis", "Brumalia", "Eucalyptus"],
    image: img("photo-1513151233558-d860c5398176"),
    alt: "Décoration florale de table pour réception, allées de fleurs basses et candélabres, design floral événementiel",
    aspect: "aspect-[4/5]",
  },
  {
    id: "laube",
    title: "L'Aube",
    category: "mariages",
    year: "2023",
    occasion: "Cérémonie intime — Jardin privé",
    story:
      "Une cérémonie à l'aube, avant la chaleur. Des roses anciennes dans des tons pâles, posées sur des chaises en fer, un chemin de pétales entre deux rangs d'invités. Peu de fleurs, bien placées.",
    palette: [
      { name: "Rose ancien", hex: "#C48B81" },
      { name: "Lilas", hex: "#A99A9E" },
      { name: "Crème", hex: "#F3ECDF" },
    ],
    varieties: ["Roses anciennes", "Eucalyptus", "Brumalia"],
    image: img("photo-1470509037663-253afd7f0f51"),
    alt: "Composition florale de cérémonie aux roses roses et eucalyptus, design floral de mariage à Casablanca",
    aspect: "aspect-[4/5]",
  },
  {
    id: "champ-de-couleur",
    title: "Champ de Couleur",
    category: "evenements",
    year: "2024",
    occasion: "Installation en extérieur — Bord de mer",
    story:
      "Des centaines de tiges jaunes plantées dans un champ de sable, comme un tableau de séchage. Le vent a participé au projet ; nous avons laissé les fleurs bouger.",
    palette: [
      { name: "Jonquille", hex: "#D8A93C" },
      { name: "Ocre", hex: "#C47B3A" },
      { name: "Vert prairie", hex: "#6C8A54" },
    ],
    varieties: ["Gerberas", "Roses Spray", "Statices"],
    image: img("photo-1490750967868-88aa4486c946"),
    alt: "Champ de fleurs jaunes pour une installation florale événementielle en extérieur, décor sur mesure à Casablanca",
    aspect: "aspect-[4/3]",
  },
];

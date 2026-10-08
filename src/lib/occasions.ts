import { PROJECTS, type Project } from "./portfolio";

/*
 * Occasion taxonomy, derived strictly from the projects that already exist in
 * portfolio.ts. Nothing here is hypothetical: each entry lists real project ids
 * that a buyer can be shown, which is what makes these pages worth indexing
 * rather than thin doorway copy.
 *
 * Condoléances and Saint-Valentin were considered and deliberately left out.
 * No project represents them, so a page would be an unsupported claim about what
 * the atelier takes on. Add them only once a real project backs them.
 */
export type OccasionId =
  | "mariage"
  | "anniversaire"
  | "ceremonie"
  | "hommage"
  | "entreprise"
  | "paysager";

export type Occasion = {
  id: OccasionId;
  label: string;
  title: string;
  metaDescription: string;
  intro: string;
  /** What the buyer should put in the message, per occasion. */
  brief: string;
};

/*
 * Which projects belong to which occasion. Keyed off the occasion already
 * recorded in portfolio.ts rather than restating it, so the portfolio cards and
 * these pages can never disagree about what a project was for.
 */
const OCCASION_PROJECT_IDS: Record<OccasionId, string[]> = {
  mariage: ["noueuse-silence", "boite-signature", "portique-ivoire"],
  anniversaire: ["veil-de-rosee"],
  ceremonie: ["aube-pale"],
  hommage: ["coffret-ivoire"],
  entreprise: ["soiree-ambiance"],
  paysager: ["jardin-suspendu"],
};

export const OCCASIONS: Occasion[] = [
  {
    id: "mariage",
    label: "Mariage",
    title: "Fleurs de mariage à Rabat",
    metaDescription:
      "Bouquets de mariée, boîtes signature et portiques floraux pour mariages à Rabat et Hay Riad, par La Flora D'El Patron.",
    intro:
      "Un mariage se compose en trois moments distincts, et chacun demande autre chose que le précédent. Le bouquet de mariée se tient contre une robe et doit tenir sa forme seul. Le portique encadre une entrée et se lit de loin. La boîte à chapeau se pose entre deux mains.",
    brief: "La date, le lieu, et le nombre d'invités",
  },
  {
    id: "anniversaire",
    label: "Anniversaire",
    title: "Compositions d'anniversaire",
    metaDescription:
      "Bouquets d'anniversaire livrés à Rabat, dessinés pour un visage, une tenue et une saison. Commandes sur WhatsApp.",
    intro:
      "Un anniversaire privé se choisit pour une personne précise, pas pour une occasion. Dites-nous qui cadeau, et ce qu'elle aime.",
    brief: "La personne cadeau, son style, et la date",
  },
  {
    id: "ceremonie",
    label: "Cérémonie",
    title: "Cérémonies intimes",
    metaDescription:
      "Compositions pour cérémonies intimes en jardin privé à Rabat.",
    intro:
      "Une cérémonie se tient debout, souvent dehors, souvent avant la chaleur du jour. Les fleurs tiennent mal sur pied, et la lumière change vite.",
    brief: "Le lieu, l'heure, et s'il y a des emplacements à couvrir",
  },
  {
    id: "hommage",
    label: "Hommage",
    title: "Paniers d'hommage",
    metaDescription:
      "Paniers d'hommage et coffrets fleurs, chocolat et bougie, préparés sur commande à Rabat.",
    intro:
      "Un panier d'hommage se lit avant d'être ouvert. Ce qui compte est le geste assemblé, pas la fleur seule.",
    brief: "Le lien avec la personne, et la date de la remise",
  },
  {
    id: "entreprise",
    label: "Entreprise",
    title: "Cadeaux d'entreprise",
    metaDescription:
      "Coffrets d'entreprise fleuris, numérotés et livrés sur un même créneau, à Rabat.",
    intro:
      "Cent coffrets identiques ne sont pas cent commandes. C'est une série, et la cohérence en est la vraie démonstration.",
    brief: "La quantité, la date de livraison, et l'adresse de livraison",
  },
  {
    id: "paysager",
    label: "Paysager",
    title: "Aménagement paysager",
    metaDescription:
      "Aménagements paysagers et végétation suspendue pour villas, terrasses et patios à Rabat et Hay Riad.",
    intro:
      "Un aménagement se lit à l'échelle du jardin, pas de la plante. Le sujet se tient dans les deux tiers hauts, et le reste s'assombrit.",
    brief: "Les dimensions, l'orientation, et l'accès au chantier",
  },
];

export const occasionById = (id: string): Occasion | undefined =>
  OCCASIONS.find((o) => o.id === id);

export const occasionProjects = (id: OccasionId): Project[] =>
  PROJECTS.filter((p) => OCCASION_PROJECT_IDS[id].includes(p.id));

import { SITE } from "./site";
import { COLLECTIONS } from "./collections";

/*
 * Single source of truth for the questions the brand actually answers.
 *
 * Consumed by the FAQPage JSON-LD in schema.ts and by /ai/faq.json. Both must
 * stay byte-identical: a schema.org FAQ that is not visible on the page is a
 * Google structured-data violation, so these are facts already stated on the
 * site — never policies invented here.
 */
export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: "Où se trouve La Flora D’El Patron ?",
    answer:
      "L’atelier est situé à Hay Riad, Rabat, au Maroc. L’adresse exacte et l’itinéraire sont communiqués sur demande via WhatsApp ou au téléphone.",
  },
  {
    question: "Quels sont vos horaires d’ouverture ?",
    answer:
      "Du lundi au vendredi de 9h15 à 20h30, le samedi de 9h08 à 20h35 et le dimanche de 9h08 à 20h30.",
  },
  {
    question: "Quels services proposez-vous ?",
    answer:
      "L’atelier réunit trois métiers : fleuriste (bouquets personnalisés sur mesure, boîtes et nounours de fleurs, coffrets et cadeaux de luxe), décorateur (décoration florale de mariage et installations événementielles) et paysagiste (plantes d’intérieur et aménagement de terrasses, patios et jardins de villas).",
  },
  {
    question: "Comment passer commande ?",
    answer:
      "Toute commande se fait par WhatsApp au 06 82 72 50 55 ou par téléphone au même numéro. Décrivez l’occasion, la date et l’usage prévu, et l’atelier vous rappelle pour établir la composition.",
  },
  {
    question: "Les tarifs sont-ils affichés ?",
    answer:
      "Non. Chaque commande est chiffrée sur mesure, en fonction des fleurs de saison, du volume et du degré de finition. Le devis vous est communiqué par WhatsApp avant toute validation.",
  },
  {
    question: "Faites-vous des bouquets de mariée et des décorations de mariage ?",
    answer:
      "Oui. Les compositions de mariée sont dessinées pour une personne précise : sa morphologie, sa robe, la saison et l’heure de la cérémonie. L’atelier réalise également portiques, cascades et scénographies pour mariages, hôtels, riads et villas privées.",
  },
  {
    question: "Travaillez-vous pour les entreprises ?",
    answer:
      "Oui. Les coffrets d’entreprise numérotés sont livrés sur un créneau commun : la cohérence sur plusieurs centaines d’unités fait partie de la proposition.",
  },
  {
    question: "Quelles zones livrez-vous ?",
    answer:
      "L’atelier intervient sur Rabat et sa région, ainsi que sur Salé, Témara, Skhirat et Kénitra. Pour un lieu plus éloigné, contactez-nous pour étudier la faisabilité.",
  },
  {
    question: "Proposez-vous des fleurs qui ne se fanent pas ?",
    answer:
      "Oui. La sculpture portée en fleurs stabilisées conserve son aspect d’origine bien après la cérémonie : c’est l’alternative prévue lorsque l’on souhaite un objet floral durable plutôt qu’un bouquet jetable.",
  },
  {
    question: "Comment voir vos réalisations ?",
    answer:
      "Le portfolio de l’atelier présente des compositions par catégorie — bouquets, boîtes et nounours, cadeaux et coffrets, plantes et paysage. Les créations les plus récentes sont partagées sur Instagram.",
  },
];

/*
 * Flat, machine-readable projection for /ai/summary.json and /ai/service.json.
 */
export const SERVICE_CATALOG = COLLECTIONS.map((collection) => ({
  id: collection.id,
  name: collection.title,
  category: collection.category,
  description: collection.description,
  offerings: collection.details,
}));

export const CONTACT_POINT = {
  telephone: SITE.phoneHref,
  telephoneDisplay: SITE.phoneDisplay,
  whatsapp: SITE.whatsappHref,
  instagram: SITE.instagramUrl,
  area: {
    locality: "Hay Riad",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    country: "MA",
  },
  geo: { latitude: 34.0209, longitude: -6.8416 },
  openingHours: SITE.hours.map((entry) => ({
    days: entry.days,
    opens: entry.time.split("–")[0]?.trim(),
    closes: entry.time.split("–")[1]?.trim(),
  })),
};
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const EVENT_TYPES = [
  "Mariage",
  "Cérémonie religieuse",
  "Événement d'entreprise",
  "Installation résidentielle",
  "Bouquet sur mesure",
  "Autre projet",
];

const inputClass =
  "w-full rounded-sm border border-ink/15 bg-canvas px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose/40";

const labelClass =
  "mb-2.5 block text-[11px] uppercase tracking-[0.2em] text-ink/60";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    eventType: "",
    date: "",
    vision: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.vision.trim()) return;
    const message =
      `Bonjour LaFloraDelPatron,\n\n` +
      `Je vous écris au sujet d'un projet.\n\n` +
      `• Nom : ${form.name}\n` +
      `• Type d'événement : ${form.eventType || "À définir"}\n` +
      `• Date souhaitée : ${form.date || "À définir"}\n` +
      `• Mon idée : ${form.vision}`;
    window.open(
      `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="border-t border-ink/10 pt-10">
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-ink/60">
              <span className="block h-px w-10 bg-rose" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
              Contact fleuriste — parlons de votre projet
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Racontez-nous votre mariage, votre événement, votre envie. Pas de
              formulaire noyé dans une machine : votre demande arrive
              directement dans l&apos;atelier, sur WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between bg-linen p-8 lg:p-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">
                  Appel direct &amp; WhatsApp
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-5 block font-display text-5xl leading-none text-ink transition-colors duration-300 hover:text-rose-deep sm:text-6xl"
                >
                  {SITE.phoneDisplay}
                </a>
                <p className="mt-4 text-sm text-ink/60">{SITE.hours}</p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/20 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-canvas"
                >
                  Appeler le studio
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-canvas transition-colors duration-300 hover:bg-rose-deep"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between bg-blush p-8 lg:p-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">
                  Le studio
                </p>
                <p className="mt-5 font-display text-3xl leading-snug text-ink">
                  Casablanca, Maroc
                </p>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
                  Sur rendez-vous uniquement. L&apos;adresse exacte vous est
                  communiquée à la confirmation de votre visite — nous recevons
                  entre deux compositions, quand les mains sont libres.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-ink"
                >
                  Ouvrir dans Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-ink/45">
                  Itinéraire · Horaires de visite sur demande
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="mt-20 max-w-5xl border-t border-ink/10 pt-10"
          >
            <h3 className="font-display text-3xl italic text-ink sm:text-4xl">
              Demander un projet sur mesure
            </h3>
            <p className="mt-3 text-sm text-ink/60">
              Champs libres — votre demande part en message WhatsApp direct, et
              nous répondons sous 24 heures.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Nom &amp; prénom
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Votre nom"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-event" className={labelClass}>
                  Type d&apos;événement
                </label>
                <select
                  id="contact-event"
                  value={form.eventType}
                  onChange={update("eventType")}
                  className={inputClass}
                >
                  <option value="">Choisir…</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-date" className={labelClass}>
                  Date souhaitée
                </label>
                <input
                  id="contact-date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={update("date")}
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-vision" className={labelClass}>
                  Votre vision
                </label>
                <textarea
                  id="contact-vision"
                  required
                  rows={5}
                  value={form.vision}
                  onChange={update("vision")}
                  placeholder="Décrivez votre lieu, vos envies, vos couleurs, votre lumière…"
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-canvas transition-colors duration-300 hover:bg-rose-deep"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Envoyer ma demande
              </button>
              <p className="text-xs leading-relaxed text-ink/50">
                En envoyant, vous êtes redirigé·e vers WhatsApp. Aucune commande
                en ligne — chaque projet se discute de vive voix.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

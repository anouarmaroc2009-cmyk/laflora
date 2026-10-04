"use client";

import Image from "next/image";
import { Reveal, SectionHead } from "./Reveal";

const PILLARS = [
  {
    index: "01",
    title: "Mariages",
    body: "Portiques, allée, tables, bouquets de cérémonie. Nous dessinons l'ensemble et nous montons le matin même.",
  },
  {
    index: "02",
    title: "Événements VIP",
    body: "Dîners de gala, lancements, réceptions privées. Des installations qui tiennent jusqu'au dernier invité.",
  },
  {
    index: "03",
    title: "Résidences",
    body: "Villas, riads et appartements de standing à Hay Riad et partout au Maroc. Composition permanente ou ponctuelle.",
  },
];

export default function About() {
  return (
    <section id="maison" className="relative overflow-x-clip py-28 sm:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="La maison"
              title="Un atelier, pas un étal."
              lede="La Flora D’El Patron est un atelier de fleuristerie, de décoration et de paysage installé à Hay Riad, Rabat. Nous ne travaillons qu'en commande : chaque pièce est composée à la main, à partir de fleurs choisies le matin même chez nos grossistes."
            />

            <Reveal delay={0.24}>
              <div className="mt-10 space-y-6 text-[15px] font-light leading-relaxed text-ash">
                <p>
                  Notre travail s&apos;adresse aux mariages, aux événements
                  privés et aux résidences de prestige de la capitale. Pour
                  chacun, nous commençons par une conversation&nbsp;: le lieu,
                  l&apos;heure, la lumière, les personnes. La composition vient
                  après — jamais l&apos;inverse.
                </p>
                <p className="font-display text-xl font-light italic leading-snug text-chalk">
                  « La couleur ne se choisit pas au catalogue. Elle se décide
                  à la lumière de la pièce. »
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
                {PILLARS.map((pillar) => (
                  <div
                    key={pillar.index}
                    className="bg-void p-7 transition-colors duration-500 hover:bg-obsidian"
                  >
                    <p className="text-[9px] uppercase tracking-[0.3em] text-mauve">
                      {pillar.index}
                    </p>
                    <h3 className="mt-4 font-display text-xl font-light text-chalk">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[13px] font-light leading-relaxed text-ash">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14} className="relative">
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-2xl">
              <div className="plate h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80"
                  alt="Table de réception fleurie et éclairée à la chandelle, installation florale de luxe par La Flora D’El Patron à Rabat"
                  fill
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-void via-void/50 to-transparent p-8">
                <p className="eyebrow">Atelier</p>
                <p className="mt-3 font-display text-2xl font-light leading-snug text-chalk sm:text-3xl">
                  Chaque commande est montée la veille, au frais, puis livrée
                  sans intermédiaire.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const PHILOSOPHY_IMAGE =
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80";

const GESTES = [
  {
    name: "Sourcer",
    text: "Les marchés à l'aube, les producteurs de saison, les fleurs qui ont voyagé le moins.",
  },
  {
    name: "Dessiner",
    text: "Une esquisse pour chaque projet, un plan de volume et de couleur avant la première tige coupée.",
  },
  {
    name: "Composer",
    text: "Le montage à la main, dans l'atelier, jusqu'au dernier pétale — jamais la veille, toujours le jour.",
  },
];

export default function Philosophy() {
  return (
    <section id="maison" className="scroll-mt-24 bg-linen py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-10 lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-ink/60">
                <span className="block h-px w-10 bg-rose" aria-hidden="true" />
                La maison
              </p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                Un regard artisanal sur le{" "}
                <em className="italic text-rose-deep">design floral</em>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6 text-base leading-relaxed text-ink/70">
              <Reveal>
                <p>
                  LaFloraDelPatron est née d&apos;une conviction simple : une
                  fleur bien choisie, posée au bon endroit, change la lumière
                  d&apos;une pièce. Nous travaillons avec les saisons, avec les
                  producteurs d&apos;ici et d&apos;ailleurs, et avec beaucoup de
                  silence.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Avant chaque projet, nous écoutons. Puis nous dessinons.
                  Chaque composition naît d&apos;un lieu, d&apos;une heure,
                  d&apos;une robe, d&apos;une lumière. Nous ne vendons pas des
                  fleurs — nous composons une émotion.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.05}>
              <blockquote className="border-l-2 border-rose pl-6 font-display text-2xl italic leading-snug text-ink sm:text-3xl">
                « Nous ne livrons pas des fleurs. Nous composons des
                silences. »
              </blockquote>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-6 border-t border-ink/10 pt-8">
                {GESTES.map((g) => (
                  <div key={g.name} className="grid gap-1 sm:grid-cols-[180px_1fr]">
                    <h3 className="font-display text-xl italic text-ink">
                      {g.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/60">
                      {g.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5 lg:pt-16">
            <Reveal>
              <div className="relative">
                <div
                  className="absolute -left-4 -top-4 hidden h-full w-full border border-rose/30 sm:block"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] overflow-hidden bg-blush">
                  <Image
                    src={PHILOSOPHY_IMAGE}
                    alt="Roses roses fraîchement coupées préparées dans l'atelier de la fleuriste LaFloraDelPatron à Rabat"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 border border-ink/10 bg-canvas px-6 py-4">
                  <p className="font-display text-xl italic leading-none text-ink">
                    L&apos;atelier
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink/50">
                    Rabat · sur rendez-vous
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

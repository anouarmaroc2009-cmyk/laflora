"use client";

import Image from "next/image";
import { Reveal, SectionHead } from "./Reveal";
import { WhatsAppIcon, ArrowUpRight } from "./icons";
import { COLLECTIONS } from "@/lib/collections";
import { CATEGORIES } from "@/lib/portfolio";
import { SITE, orderCollectionHref } from "@/lib/site";
import { trackWhatsApp } from "@/lib/analytics";
import { ShimmerText } from "@/components/ui/shimmer-text";

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative overflow-x-clip border-t border-line bg-obsidian/50 py-28 sm:py-36"
    >
      <div
        className="bloom -z-10 left-[24%] top-[14%] h-[560px] w-[560px] opacity-40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          eyebrow="Collections"
          title="Quatre manières de faire fleurir."
          lede="Nos collections signature, pensées pour être commandées telles quelles ou entièrement redessinées pour vous. Chaque commande est chiffrée sur WhatsApp, selon la saison et le volume de fleurs."
        />

        <div className="mt-16 space-y-px">
          {COLLECTIONS.map((collection, i) => {
            const category = CATEGORIES.find(
              (c) => c.id === collection.category,
            );
            const meta = category
              ? `${category.index} — ${category.label}`
              : collection.category;

            return (
              <Reveal key={collection.id} delay={i * 0.06}>
                <article className="group grid gap-7 border-t border-line py-10 transition-colors duration-500 hover:bg-white/[0.015] md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.35fr)_auto] md:items-center md:gap-10 md:px-4">
                  <div className="plate h-24 w-24 shrink-0 md:h-28 md:w-28">
                    <Image
                      src={collection.image}
                      alt={collection.alt}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-mauve">
                      {meta}
                    </p>
                    <h3 className="mt-3.5 font-display text-3xl font-light leading-tight text-chalk sm:text-4xl">
                      {collection.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm font-light leading-relaxed text-ash">
                      {collection.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {collection.details.map((detail) => (
                        <li
                          key={detail}
                          className="rounded-full border border-line px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-ash-dim"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-end gap-6">
                    <a
                      href={orderCollectionHref(collection.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsApp("collection_card", collection.title)
                      }
                      aria-label={`Commander ${collection.title} sur WhatsApp`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-chalk transition-all duration-500 hover:border-mauve hover:bg-mauve hover:text-void"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <div className="border-t border-line" />
        </div>

        <Reveal delay={0.12}>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-line bg-void/60 px-8 py-12 text-center shadow-deep sm:px-16">
            <p className="eyebrow">Sur mesure</p>
            <p className="max-w-xl font-display text-3xl font-light leading-snug text-chalk sm:text-4xl">
              Une demande précise, une date, un lieu&nbsp;? Envoyez-nous un
              message. Nous répondons dans l&apos;heure.
            </p>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("collection_card", "Sur mesure")}
              className="btn-mauve mt-2 inline-flex items-center gap-3 rounded-full bg-mauve px-8 py-4 text-[10px] uppercase tracking-[0.24em] text-void"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {/* Same inverted treatment as the hero CTA: base stays text-void. */}
              <ShimmerText
                style={
                  {
                    "--shimmer-base": "var(--color-void)",
                    "--shimmer-highlight": "#e9c2d6",
                  } as React.CSSProperties
                }
              >
                Commander sur WhatsApp
              </ShimmerText>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
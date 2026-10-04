"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WhatsAppIcon, ArrowDown } from "./icons";
import { SITE } from "@/lib/site";
import { EASE } from "@/lib/motion";
import { ShimmerText } from "@/components/ui/shimmer-text";

/*
 * Full-bleed backdrop. Two overlays sit on top of this — a bottom-to-top
 * void gradient and a radial that reaches rgba(8,8,8,0.92) — so the source is
 * composed dark with its subject in the upper two-thirds. Regenerate from
 * IMAGE_PROMPTS.md, keep it wide.
 */
const HERO_IMAGE = "/images/hero.jpg";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-32 pb-16 sm:pb-20"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-20">
        <div className="plate drift h-full w-full">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/72 to-void/45" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_10%,transparent_28%,rgba(8,8,8,0.92)_100%)]" />
      </div>

      {/* Mauve bloom */}
      <div
        className="bloom -z-10 left-[-8%] top-[18%] h-[520px] w-[520px] opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <motion.div {...rise(0.15)}>
          <p className="eyebrow">{SITE.tagline}</p>
        </motion.div>

        <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(3.1rem,10.5vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-chalk">
          <motion.span
            className="block"
            {...rise(0.28)}
          >
            L&apos;Art Floral
          </motion.span>
          <motion.span
            className="block italic text-mauve-bright"
            {...rise(0.42)}
          >
            Réinventé
          </motion.span>
        </h1>

        <motion.p
          className="mt-9 max-w-xl text-[15px] font-light leading-relaxed text-ash sm:text-base"
          {...rise(0.58)}
        >
          Atelier de fleuristerie, décoration et paysage à Hay Riad. Nous
          composons pour les mariages, les événements VIP et les résidences qui
          méritent mieux qu&apos;un bouquet de catalogue.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          {...rise(0.72)}
        >
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mauve group inline-flex items-center gap-3 rounded-full bg-mauve px-8 py-4 text-[10px] uppercase tracking-[0.24em] text-void"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {/*
              Base is text-void, the colour this label already had, so the
              resting appearance is identical to before and only the rose glint
              sweeps. A mauve->rose gradient here instead would put pale pink on
              a mauve fill and collapse the contrast.
            */}
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

          <a
            href={SITE.whatsappFournisseurHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ul inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.24em] text-chalk"
          >
            <ShimmerText
              style={
                {
                  "--shimmer-base": "var(--color-chalk)",
                  "--shimmer-highlight": "#e9c2d6",
                } as React.CSSProperties
              }
            >
              Besoin d&apos;un fournisseur
            </ShimmerText>
            <ArrowDown className="h-3.5 w-3.5 text-mauve" />
          </a>

          <a
            href="#portfolio"
            className="ul inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.24em] text-chalk"
          >
            <ShimmerText
              style={
                {
                  "--shimmer-base": "var(--color-chalk)",
                  "--shimmer-highlight": "#e9c2d6",
                } as React.CSSProperties
              }
            >
              Voir le portfolio
            </ShimmerText>
            <ArrowDown className="h-3.5 w-3.5 text-mauve" />
          </a>
        </motion.div>

        <motion.dl
          className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-7 border-t border-line pt-9 sm:grid-cols-3"
          {...rise(0.88)}
        >
          {[
            { k: "Atelier", v: SITE.city },
            { k: "Téléphone", v: SITE.phoneDisplay },
            { k: "Ouverture", v: "7 jours sur 7" },
          ].map((stat) => (
            <div key={stat.k}>
              <dt className="text-[9px] uppercase tracking-[0.3em] text-ash-dim">
                {stat.k}
              </dt>
              <dd className="mt-2.5 font-display text-lg font-light text-chalk">
                {stat.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
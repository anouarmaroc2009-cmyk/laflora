"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { container, item, EASE } from "@/lib/motion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1600&q=80";

export default function Hero({ reveal }: { reveal: boolean }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-36 lg:pb-36 lg:pt-48"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center lg:col-span-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate={reveal ? "visible" : "hidden"}
            >
              <motion.p
                variants={item}
                className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-ink/60"
              >
                <span className="block h-px w-10 bg-rose" aria-hidden="true" />
                Atelier floral de luxe · Rabat
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-8 font-display text-[clamp(2.6rem,5.6vw,4.6rem)] font-normal leading-[1.04] text-ink"
              >
                Le design floral de vos moments{" "}
                <em className="italic text-rose">inoubliables.</em>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-8 max-w-md text-base leading-relaxed text-ink/70"
              >
                Fleuriste de luxe à Rabat, LaFloraDelPatron imagine la
                décoration florale de vos mariages et de vos événements —
                bouquets sur mesure, sculptures et installations pensées fleur
                à fleur.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#portfolio"
                  className="rounded-full bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-canvas transition-colors duration-300 hover:bg-rose-deep"
                >
                  Voir le portfolio
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-ink/20 px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Parler à l&apos;atelier
                </a>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-9 text-[11px] uppercase tracking-[0.25em] text-ink/45"
              >
                Sur rendez-vous · Rabat &amp; environs
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: reveal ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <div className="relative">
              <div
                className="absolute -right-4 -top-4 hidden h-full w-full border border-rose/30 sm:block"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <Image
                  src={HERO_IMAGE}
                  alt="Bouquet de mariée aux roses poudrées, créé par LaFloraDelPatron, fleuriste de luxe à Rabat"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 border border-ink/10 bg-canvas/95 px-6 py-4">
                <p className="font-display text-xl italic leading-none text-ink">
                  La Reine Marie
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ink/50">
                  Bouquet de mariée · 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: reveal ? 1 : 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-ink/45">
          Défiler
        </span>
        <div className="relative h-14 w-px overflow-hidden bg-ink/15">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-rose"
            animate={{ y: [-18, 60] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

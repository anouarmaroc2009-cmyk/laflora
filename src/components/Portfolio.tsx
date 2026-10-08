"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionHead } from "./Reveal";
import { ArrowUpRight } from "./icons";
import { CATEGORIES, PROJECTS, type CategoryId } from "@/lib/portfolio";
import { EASE } from "@/lib/motion";
import { orderProjectHref } from "@/lib/site";
import { trackWhatsApp } from "@/lib/analytics";

type Filter = "all" | CategoryId;

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="relative overflow-x-clip py-28 sm:py-36">
      <div
        className="bloom -z-10 right-[-10%] top-[6%] h-[480px] w-[480px] opacity-45"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          eyebrow="Portfolio"
          title="Des pièces composées, pas des assortiments."
          lede="Chaque projet est une commande, jamais une répétition. Quelques pièces montées pour des mariages, des villas et des événements privés."
        />

        {/* Filters */}
        <Reveal delay={0.1}>
          <div
            className="no-scrollbar mt-14 -mx-6 flex gap-2.5 overflow-x-auto px-6 lg:mx-0 lg:flex-wrap lg:px-0"
            role="group"
            aria-label="Filtrer le portfolio par catégorie"
          >
            <FilterChip
              active={filter === "all"}
              onClick={() => setFilter("all")}
              label="Tout"
            />
            {CATEGORIES.map((category) => (
              <FilterChip
                key={category.id}
                active={filter === category.id}
                onClick={() => setFilter(category.id)}
                label={category.label}
              />
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                className="group relative"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(i * 0.05, 0.3),
                  ease: EASE,
                }}
              >
                <div className={`plate ${project.aspect}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-white/25 bg-void/55 px-3 py-1.5 text-[9px] uppercase tracking-[0.24em] text-chalk backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-display text-2xl font-light leading-snug text-chalk">
                      <a
                        href={orderProjectHref(
                          project.title,
                          project.occasion,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWhatsApp("portfolio_project", project.title)
                        }
                        className="transition-colors duration-500 hover:text-mauve-bright after:absolute after:inset-0 after:content-['']"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mauve">
                      {project.occasion}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-ash-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mauve-bright" />
                </div>

                <p className="mt-4 text-sm font-light leading-relaxed text-ash">
                  {project.story}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.palette.map((swatch) => (
                    <span
                      key={swatch.name}
                      title={swatch.name}
                      className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-ash-dim"
                    >
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full ring-1 ring-white/15"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      {swatch.name}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-ash-dim">
                  {project.varieties.join(" · ")}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-400 ${
        active
          ? "border-mauve bg-mauve text-void"
          : "border-line text-ash hover:border-mauve/60 hover:text-chalk"
      }`}
    >
      {label}
    </button>
  );
}
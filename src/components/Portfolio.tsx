"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES, type Project } from "@/lib/portfolio";
import { container, item, EASE } from "@/lib/motion";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

type TabId = "tous" | (typeof CATEGORIES)[number]["id"];

const TABS: { id: TabId; label: string }[] = [
  { id: "tous", label: "Tout" },
  { id: "mariages", label: "Mariages" },
  { id: "sculptures", label: "Sculptures" },
  { id: "evenements", label: "Événements" },
];

export default function Portfolio() {
  const [active, setActive] = useState<TabId>("tous");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    active === "tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="scroll-mt-24 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-t border-ink/10 pt-10 lg:flex-row lg:items-end">
            <div>
              <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-ink/60">
                <span className="block h-px w-10 bg-rose" aria-hidden="true" />
                Portfolio
              </p>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
                Compositions pour mariages, sculptures &amp; événements sur
                mesure
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink/60 lg:text-right">
              Une sélection de projets récents, dessinés puis montés à la main
              dans notre atelier de Rabat. Chaque pièce est unique.
            </p>
          </div>
        </Reveal>

        <div
          className="no-scrollbar mt-12 flex gap-8 overflow-x-auto border-b border-ink/10"
          role="tablist"
          aria-label="Filtrer le portfolio"
        >
          {TABS.map((tab) => {
            const count =
              tab.id === "tous"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === tab.id).length;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={`relative shrink-0 pb-4 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-ink/45 hover:text-ink/80"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-ink/35">{count}</span>
                {isActive && (
                  <motion.span
                    layoutId="portfolio-underline"
                    className="absolute inset-x-0 bottom-0 h-px bg-rose"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
          >
            {visible.map((project) => (
              <motion.article
                key={project.id}
                variants={container}
                initial="hidden"
                animate="visible"
                className="mb-8 break-inside-avoid"
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelected(project)}
                />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <p className="mt-16 text-center text-sm text-ink/55">
            Vous cherchez une pièce précise, une autre saison, une autre
            lumière ?{" "}
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rose decoration-1 underline-offset-4 transition-colors hover:text-rose"
            >
              Écrivez-nous
            </a>
            , le portfolio ne montre que la moitié du travail.
          </p>
        </Reveal>
      </div>

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.div variants={item}>
      <button
        type="button"
        onClick={onOpen}
        className="group block w-full cursor-pointer text-left"
        aria-label={`Voir le projet ${project.title}`}
      >
        <div
          className={`relative overflow-hidden bg-linen ${project.aspect}`}
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center gap-2">
              {project.palette.slice(0, 4).map((c) => (
                <span
                  key={c.hex}
                  title={c.name}
                  className="h-3 w-3 rounded-full border border-cream/50"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <p className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-cream/90">
              {project.varieties.slice(0, 3).join(" · ")}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4">
          <h3 className="font-display text-2xl leading-none text-ink transition-colors duration-300 group-hover:text-rose-deep">
            {project.title}
          </h3>
          <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-ink/45">
            {CATEGORIES.find((c) => c.id === project.category)?.shortLabel} ·{" "}
            {project.year}
          </span>
        </div>
      </button>
    </motion.div>
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-[#161512]/85 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
          />

          <motion.div
            className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-sm bg-canvas lg:grid-cols-[1.15fr_1fr]"
            variants={{
              hidden: { opacity: 0, scale: 0.96, y: 18 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-canvas/90 text-ink transition-colors hover:bg-ink hover:text-canvas"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[38vh] bg-linen lg:h-auto lg:min-h-[560px]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="flex max-h-[54vh] flex-col justify-between overflow-y-auto p-7 sm:p-10 lg:max-h-[92vh]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-rose-deep">
                  {CATEGORIES.find((c) => c.id === project.category)?.label} ·{" "}
                  {project.year}
                </p>
                <h3 className="mt-4 font-display text-4xl italic leading-none text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink/50">
                  {project.occasion}
                </p>

                <p className="mt-6 text-sm leading-relaxed text-ink/75">
                  {project.story}
                </p>

                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-ink/45">
                    Palette
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    {project.palette.map((c) => (
                      <span
                        key={c.hex}
                        title={c.name}
                        className="flex items-center gap-2"
                      >
                        <span
                          className="h-5 w-5 rounded-full border border-ink/10"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-[11px] text-ink/60">
                          {c.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-ink/45">
                    Variétés
                  </p>
                  <p className="mt-2 font-display text-lg italic text-ink">
                    {project.varieties.join(", ")}
                  </p>
                </div>
              </div>

              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-canvas transition-colors duration-300 hover:bg-rose-deep"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Ce projet vous ressemble ? Parlons-en
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

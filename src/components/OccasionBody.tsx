"use client";

import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";
import { orderOccasionHref } from "@/lib/site";
import { trackWhatsApp } from "@/lib/analytics";
import type { Project } from "@/lib/portfolio";

/*
 * The occasion pages are static, but the CTA and the project links are
 * onClick-tracked, so they cannot live in the server component. Everything
 * interactive is isolated here; the page itself stays a server component.
 */
export function OccasionCta({
  occasionLabel,
  occasionId,
  brief,
}: {
  occasionLabel: string;
  occasionId: string;
  brief: string;
}) {
  return (
    <div className="mt-12 flex flex-col gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-md text-sm font-light leading-relaxed text-ash-dim">
        Dites-nous {brief.toLowerCase()}. L&apos;atelier répond sur WhatsApp avec
        une proposition et un devis.
      </p>
      <a
        href={orderOccasionHref(occasionLabel)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp("occasion_page", occasionId)}
        className="btn-mauve inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-mauve px-8 py-4 text-[10px] uppercase tracking-[0.24em] text-void"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Demander un devis
      </a>
    </div>
  );
}

export function OccasionProjects({
  projects,
  occasionLabel,
}: {
  projects: Project[];
  occasionLabel: string;
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-12">
      <div className="border-t border-line pt-14">
        <p className="eyebrow">Réalisations</p>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article className="group relative">
                <div
                  className={`plate relative overflow-hidden ${project.aspect}`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h2 className="font-display text-2xl font-light leading-snug text-chalk transition-colors duration-500 group-hover:text-mauve-bright">
                    <a
                      href={orderOccasionHref(
                        `${occasionLabel} — ${project.title}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackWhatsApp("occasion_page", project.title)
                      }
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </a>
                  </h2>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-mauve">
                    {project.occasion}
                  </p>
                  <p className="mt-5 text-sm font-light leading-relaxed text-ash">
                    {project.story}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {project.varieties.map((v) => (
                      <li key={v} className="text-[11px] font-light text-ash-dim">
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

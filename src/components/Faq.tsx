"use client";

import { Reveal, SectionHead } from "./Reveal";
import { FAQS } from "@/lib/faqs";

/*
 * Rendered from the same FAQS array that feeds the FAQPage JSON-LD and
 * /ai/faq.json. Google requires FAQPage markup to correspond to content a
 * visitor can actually see on the page — markup alone is a structured-data
 * violation. Answers are laid out open rather than behind <details> accordions
 * so the text stays in the rendered DOM for crawlers and avoids the
 * hidden-content heuristic.
 */
export default function Faq() {
  return (
    <section id="faq" className="relative overflow-x-clip py-28 sm:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          eyebrow="Questions fréquentes"
          title="Ce qu’on nous demande le plus."
          lede="L’atelier ne travaille qu’en commande : chaque pièce est chiffrée sur mesure. Voici les repères qui reviennent avant chaque premier rendez-vous."
        />

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="bg-void p-7 transition-colors duration-500 hover:bg-obsidian sm:p-9"
              >
                <h3 className="font-display text-xl font-light leading-snug text-chalk sm:text-[22px]">
                  {faq.question}
                </h3>
                <p className="mt-4 text-[13.5px] font-light leading-relaxed text-ash">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
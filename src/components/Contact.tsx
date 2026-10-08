"use client";

import { Reveal, SectionHead } from "./Reveal";
import {
  WhatsAppIcon,
  PhoneIcon,
  InstagramIcon,
  MapPinIcon,
  ClockIcon,
} from "./icons";
import { SITE } from "@/lib/site";
import { trackWhatsApp } from "@/lib/analytics";

const CHANNELS = [
  {
    href: SITE.whatsappHref,
    external: true,
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    hint: "Réponse dans l'heure",
    primary: true,
  },
  {
    href: SITE.phoneHref,
    external: false,
    Icon: PhoneIcon,
    label: "Téléphone",
    value: SITE.phoneDisplay,
    hint: "Direct atelier",
    primary: false,
  },
  {
    href: SITE.instagramUrl,
    external: true,
    Icon: InstagramIcon,
    label: "Instagram",
    value: "@laflora.delpatron",
    hint: "Réalisations récentes",
    primary: false,
  },
  {
    href: SITE.mapsUrl,
    external: true,
    Icon: MapPinIcon,
    label: "Atelier",
    value: SITE.city,
    hint: "Sur rendez-vous",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-x-clip border-t border-line bg-obsidian/50 py-28 sm:py-36"
    >
      <div
        className="bloom -z-10 right-[10%] top-[10%] h-[520px] w-[520px] opacity-45"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          eyebrow="Contact"
          title="Commençons par un message."
          lede="Décrivez-nous l'occasion, le lieu et la date. Nous revenons vers vous avec une proposition et un devis sur WhatsApp."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 0.07}>
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={
                  channel.label === "WhatsApp"
                    ? () => trackWhatsApp("contact")
                    : undefined
                }
                className="group flex h-full flex-col justify-between gap-10 bg-void p-8 transition-colors duration-500 hover:bg-obsidian"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 ${
                      channel.primary
                        ? "border-mauve bg-mauve text-void"
                        : "border-line text-mauve group-hover:border-mauve group-hover:bg-mauve group-hover:text-void"
                    }`}
                  >
                    <channel.Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.28em] text-ash-dim">
                    {channel.label}
                  </span>
                </div>

                <div>
                  <p className="font-display text-xl font-light leading-snug text-chalk">
                    {channel.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ash-dim">
                    {channel.hint}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Atelier</p>
              <p className="mt-5 font-display text-3xl font-light leading-snug text-chalk sm:text-4xl">
                {SITE.city}, Maroc
              </p>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-ash">
                {SITE.address.street}, {SITE.address.streetExtra}
              </p>
              <p className="mt-6 max-w-lg text-[15px] font-light leading-relaxed text-ash">
                Nous livrons dans tout Rabat et ses environs&nbsp;: Hay Riad,
                Salé, Témara, Skhirat. Au-delà, chaque commande est étudiée au
                cas par cas, selon la distance et la saison.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-5">
              <p className="eyebrow flex items-center gap-3">
                <ClockIcon className="h-4 w-4 shrink-0 text-mauve" />
                Informations
              </p>
              <dl className="space-y-3">
                {SITE.hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-3"
                  >
                    <dt className="text-sm font-light text-ash">{row.days}</dt>
                    <dd className="whitespace-nowrap font-display text-base font-light text-chalk">
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm font-light leading-relaxed text-ash-dim">
                Visites sur rendez-vous uniquement. Mariages et événements&nbsp;:
                devis à partir de trois semaines avant la date.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
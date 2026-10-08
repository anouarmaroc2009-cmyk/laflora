"use client";

import { WhatsAppIcon, InstagramIcon, PhoneIcon } from "./icons";
import { SITE, NAV_LINKS } from "@/lib/site";
import { trackWhatsApp } from "@/lib/analytics";

const SOCIALS = [
  { label: "Instagram", href: SITE.instagramUrl, Icon: InstagramIcon },
  { label: "WhatsApp", href: SITE.whatsappHref, Icon: WhatsAppIcon },
  { label: "Téléphone", href: SITE.phoneHref, Icon: PhoneIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-void">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="font-display text-2xl font-light tracking-[0.14em] text-chalk">
              {SITE.legalName}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-mauve">
              {SITE.tagline}
            </p>
            <p className="mt-7 max-w-sm text-sm font-light leading-relaxed text-ash">
              Atelier de fleuristerie, de décoration et de paysage, à
              Hay Riad. Mariages, réceptions privées et résidences.
            </p>
          </div>

          <nav aria-label="Navigation de pied de page">
            <p className="text-[9px] uppercase tracking-[0.3em] text-ash-dim">
              Navigation
            </p>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="ul text-sm font-light text-ash transition-colors duration-300 hover:text-chalk"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-ash-dim">
              Nous joindre
            </p>
            <ul className="mt-6 space-y-3.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.label === "Téléphone"
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={
                      social.label === "WhatsApp"
                        ? () => trackWhatsApp("footer")
                        : undefined
                    }
                    className="ul inline-flex items-center gap-2.5 text-sm font-light text-ash transition-colors duration-300 hover:text-chalk"
                  >
                    <social.Icon className="h-3.5 w-3.5 text-mauve" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-7">
              <a
                href={SITE.phoneHref}
                className="font-display text-2xl font-light text-chalk"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ash-dim">
              {SITE.city}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 pb-24 lg:pb-0 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-light text-ash-dim">
            © {year} {SITE.legalName}. Tous droits réservés.
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-ash-dim">
            {SITE.city}, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
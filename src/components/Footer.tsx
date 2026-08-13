import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const NAV = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "La maison", href: "#maison" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl leading-none">
              LaFloraDelPatron<span className="text-rose">.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              Atelier floral de luxe à Casablanca. Mariages, sculptures et
              événements — composés à la main, fleur à fleur.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-cream/40">
              Conçu et cultivé avec patience à Casablanca
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/40">
              Navigation
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors duration-300 hover:text-rose"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/40">
              Contact
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="text-cream/80 transition-colors duration-300 hover:text-rose"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/80 transition-colors duration-300 hover:text-rose"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors duration-300 hover:text-rose"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors duration-300 hover:text-rose"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-cream/15 pt-8 text-[11px] uppercase tracking-[0.2em] text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} LaFloraDelPatron — Tous droits réservés</p>
          <p>Casablanca, Maroc</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { SITE } from "@/lib/site";
import { EASE } from "@/lib/motion";

const LINKS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "La maison", href: "#maison" },
  { label: "Contact", href: "#contact" },
];

export default function Header({
  reveal,
  menuOpen,
  onMenuChange,
}: {
  reveal: boolean;
  menuOpen: boolean;
  onMenuChange: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navDelay = (i: number) => (reveal ? 0.35 + i * 0.08 : 99);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ${
        scrolled && !menuOpen
          ? "border-b border-ink/5 bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: reveal ? 0.15 : 0 }}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <motion.a
          href="#top"
          className="font-display text-[22px] leading-none tracking-wide text-ink"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: reveal ? 1 : 0, y: reveal ? 0 : -12 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          LaFloraDelPatron
          <span className="text-rose">.</span>
        </motion.a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigation principale">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.25em] text-ink/70 transition-colors duration-300 hover:text-rose"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: reveal ? 1 : 0, y: reveal ? 0 : -10 }}
              transition={{ duration: 0.7, delay: navDelay(i), ease: EASE }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-canvas"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: reveal ? 1 : 0, y: reveal ? 0 : -10 }}
            transition={{ duration: 0.7, delay: navDelay(3), ease: EASE }}
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Demander sur WhatsApp
          </motion.a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => onMenuChange(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu mobile"
            className="fixed inset-0 top-0 z-[-1] flex flex-col justify-between bg-linen px-6 pb-10 pt-32 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex flex-col gap-7">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => onMenuChange(false)}
                  className="font-display text-5xl leading-none text-ink"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: EASE }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-canvas"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Demander sur WhatsApp
              </a>
              <a
                href={SITE.phoneHref}
                className="text-center font-display text-2xl text-ink"
              >
                {SITE.phoneDisplay}
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

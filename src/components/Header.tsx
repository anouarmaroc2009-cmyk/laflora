"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./icons";
import { SITE, NAV_LINKS } from "@/lib/site";
import { EASE } from "@/lib/motion";

export default function Header({
  menuOpen,
  onMenuChange,
}: {
  menuOpen: boolean;
  onMenuChange: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onMenuChange(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) onMenuChange(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, onMenuChange]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        scrolled && !menuOpen
          ? "border-b border-line bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE }}
    >
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-12">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-[19px] font-normal leading-none tracking-[0.16em] text-chalk sm:text-[21px]">
            {SITE.legalName}
          </span>
          <span
            aria-hidden="true"
            className="hidden h-1.5 w-1.5 rounded-full bg-mauve-bright opacity-70 transition-opacity duration-500 group-hover:opacity-100 md:block"
          />
        </a>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ul text-[10px] uppercase tracking-[0.3em] text-ash transition-colors duration-300 hover:text-chalk"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mauve hidden items-center gap-2.5 rounded-full bg-chalk px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-void transition-colors duration-300 hover:text-void sm:inline-flex"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Commander
          </a>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => onMenuChange(!menuOpen)}
          >
            <span
              className={`block h-px w-6 bg-chalk transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-chalk transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-chalk transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu mobile"
            className="fixed inset-0 top-0 z-[-1] flex flex-col justify-between overflow-y-auto bg-void px-6 pb-10 pt-32 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex flex-col gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => onMenuChange(false)}
                  className="font-display text-5xl font-light leading-none text-chalk"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.7,
                    ease: EASE,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-14 flex flex-col gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.6 }}
            >
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mauve inline-flex items-center justify-center gap-2.5 rounded-full bg-mauve px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-void"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Commander sur WhatsApp
              </a>
              <a
                href={SITE.phoneHref}
                className="text-center font-display text-2xl font-light text-chalk"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-ash-dim">
                {SITE.city} — Maroc
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
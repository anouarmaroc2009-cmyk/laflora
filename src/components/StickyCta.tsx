"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons";
import { SITE } from "@/lib/site";
import { trackWhatsApp } from "@/lib/analytics";

/*
 * Mobile-only WhatsApp bar. On a phone the header CTA scrolls away after the
 * hero and the contact block is eight sections down, so the one conversion the
 * site exists for had no reachable trigger at any given scroll position.
 *
 * Suppressed in two places, both to avoid a bar covering live UI:
 *   - while the mobile menu is open (it owns the whole viewport),
 *   - once the #contact section is on screen (it already shows the number and
 *     a WhatsApp row, so a second bar would be redundant).
 */
export default function StickyCta({ menuOpen }: { menuOpen: boolean }) {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { rootMargin: "-88px 0px -12% 0px" },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  if (!pastHero || atContact || menuOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-void/95 backdrop-blur-md lg:hidden">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp("mobile_sticky")}
        className="flex items-center justify-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[0.24em] text-void"
      >
        <span className="btn-mauve inline-flex w-full items-center justify-center gap-3 rounded-full bg-mauve py-4">
          <WhatsAppIcon className="h-4 w-4" />
          Commander sur WhatsApp
        </span>
      </a>
    </div>
  );
}

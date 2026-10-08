"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import StickyCta from "./StickyCta";

/*
 * Header + sticky CTA for the pre-rendered occasion routes. These pages are
 * static, so the mobile menu needs its own client island rather than being
 * threaded down from the homepage's PageSite state.
 */
export default function OccasionChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = menuOpen ? "hidden" : previous;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      root.style.overflow = previous;
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Header menuOpen={menuOpen} onMenuChange={setMenuOpen} />
      {children}
      <StickyCta menuOpen={menuOpen} />
    </>
  );
}

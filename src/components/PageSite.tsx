"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Portfolio from "./Portfolio";
import Collections from "./Collections";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PageSite() {
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

      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Collections />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
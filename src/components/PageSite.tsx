"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroOverlay from "./IntroOverlay";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Philosophy from "./Philosophy";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PageSite() {
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = !introDone || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone, menuOpen]);

  return (
    <>
      <AnimatePresence>
        {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      <Header
        reveal={introDone}
        menuOpen={menuOpen}
        onMenuChange={setMenuOpen}
      />

      <main>
        <Hero reveal={introDone} />
        <Portfolio />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

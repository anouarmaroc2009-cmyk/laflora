"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [reached, setReached] = useState(false);

  /* An anchor jump, the End key, or an inertial flick can move an element from
     below the viewport to above it between two frames. IntersectionObserver only
     reports threshold crossings, so it never sees that pass and the content
     stays at opacity 0. Sweep on scroll and release anything already reached. */
  useEffect(() => {
    if (reached) return;
    const el = ref.current;
    if (!el) return;

    let queued = false;

    const sweep = () => {
      queued = false;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        setReached(true);
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    };

    sweep();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reached]);

  const show = inView || reached;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-display text-4xl font-light leading-[1.06] tracking-tight text-chalk sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-[15px] font-light leading-relaxed text-ash">
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
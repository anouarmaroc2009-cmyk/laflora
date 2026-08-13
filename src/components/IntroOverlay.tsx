"use client";

import { useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const PETAL_COUNT = 12;
const PETAL_PATH =
  "M200,200 C183,175 180,137 200,90 C220,137 217,175 200,200 Z";

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(onDone, reduce ? 1200 : 3600);
    return () => clearTimeout(timer);
  }, [onDone, reduce]);

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        angle: (360 / PETAL_COUNT) * i,
        delay: reduce ? 0 : 0.3 + i * 0.07,
      })),
    [reduce]
  );

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-forest text-cream"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        className="h-64 w-64 sm:h-80 sm:w-80"
        role="presentation"
      >
        {petals.map((petal, i) => (
          <motion.g
            key={i}
            style={{ transformBox: "view-box", transformOrigin: "50% 50%" }}
            initial={{ rotate: petal.angle - 8, scale: 0, opacity: 0 }}
            animate={{ rotate: petal.angle, scale: 1, opacity: 1 }}
            transition={{ delay: petal.delay, duration: 1.5, ease: EASE }}
          >
            <path
              d={PETAL_PATH}
              fill={i % 2 === 0 ? "#c48b81" : "#b5796f"}
              opacity={0.9}
            />
          </motion.g>
        ))}
        <motion.circle
          cx="200"
          cy="200"
          r="9"
          fill="#efe2da"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: reduce ? 0 : 0.4, duration: 0.9, ease: EASE }}
        />
      </svg>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduce ? 0 : 1.7, duration: 1.1, ease: EASE }}
        className="mt-10 font-display text-3xl tracking-wide sm:text-4xl"
      >
        LaFloraDelPatron
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 2.2, duration: 1, ease: EASE }}
        className="mt-3 text-[11px] uppercase tracking-[0.45em] text-cream/60"
      >
        Atelier floral · Casablanca
      </motion.p>
    </motion.div>
  );
}

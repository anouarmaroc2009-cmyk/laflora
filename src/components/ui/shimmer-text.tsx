"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Text with a highlight sweeping across it on a loop.
 *
 * The sweep is a gradient whose background position is animated, not a colour
 * transition, so the shine crosses the glyphs while the resting tone stays put.
 *
 * Two robustness notes:
 *
 * - `text-transparent` means the gradient is the only thing painting the glyphs.
 *   The gradient stops therefore use concrete token colours rather than
 *   `currentColor`, which would resolve to the transparent colour itself and
 *   blank the text out.
 * - Under `prefers-reduced-motion` the position is pinned to the centre instead
 *   of animating. A static gradient still paints, so the text stays legible
 *   rather than falling back to invisible transparent type.
 *
 * @param duration Seconds for one full sweep.
 * @param delay    Seconds to wait before the sweep starts.
 */
export function ShimmerText({
  children,
  className,
  duration = 3,
  delay = 0.5,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
} & React.ComponentProps<"span">) {
  const reduceMotion = useReducedMotion();

  return (
    <span
      className={cn("bg-clip-text text-transparent", className)}
      style={{
        backgroundImage:
          "linear-gradient(100deg, var(--shimmer-base, var(--color-ash)) 40%, var(--shimmer-highlight, var(--color-chalk)) 50%, var(--shimmer-base, var(--color-ash)) 60%)",
        backgroundSize: "220% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
      {...props}
    >
      <motion.span
        initial={{ backgroundPositionX: "120%" }}
        animate={{
          backgroundPositionX: reduceMotion ? "50%" : "-120%",
        }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { repeat: Infinity, duration, delay, ease: "linear" }
        }
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    </span>
  );
}
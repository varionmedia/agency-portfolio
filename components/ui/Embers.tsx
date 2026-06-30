"use client";

import { motion, useReducedMotion } from "motion/react";

/* Fixed (SSR-stable) set of drifting dots — gentle embers that rise + fade. */
const DOTS = [
  { l: 6, b: 6, s: 3, rise: 150, dur: 11, delay: 0, x: 16 },
  { l: 14, b: 18, s: 2, rise: 120, dur: 9, delay: 1.5, x: -12 },
  { l: 22, b: 4, s: 4, rise: 180, dur: 13, delay: 3, x: 10 },
  { l: 31, b: 24, s: 2, rise: 110, dur: 10, delay: 0.8, x: 14 },
  { l: 39, b: 10, s: 3, rise: 160, dur: 12, delay: 2.4, x: -10 },
  { l: 47, b: 30, s: 2, rise: 100, dur: 8, delay: 4, x: 8 },
  { l: 55, b: 6, s: 3, rise: 170, dur: 12.5, delay: 1.2, x: -14 },
  { l: 63, b: 20, s: 2, rise: 130, dur: 9.5, delay: 3.4, x: 12 },
  { l: 71, b: 8, s: 4, rise: 175, dur: 13.5, delay: 0.4, x: -8 },
  { l: 79, b: 26, s: 2, rise: 115, dur: 10.5, delay: 2.8, x: 14 },
  { l: 86, b: 12, s: 3, rise: 155, dur: 11.5, delay: 1.8, x: -12 },
  { l: 93, b: 22, s: 2, rise: 125, dur: 9, delay: 3.8, x: 10 },
  { l: 18, b: 40, s: 2, rise: 105, dur: 8.5, delay: 2, x: -10 },
  { l: 44, b: 46, s: 3, rise: 140, dur: 12, delay: 4.4, x: 12 },
  { l: 68, b: 42, s: 2, rise: 120, dur: 10, delay: 1, x: -14 },
  { l: 88, b: 48, s: 3, rise: 150, dur: 11, delay: 3.2, x: 8 },
];

export default function Embers({ color = "0,200,232" }: { color?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {DOTS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.l}%`,
            bottom: `${p.b}%`,
            width: p.s,
            height: p.s,
            background: `rgba(${color},0.85)`,
            boxShadow: `0 0 ${p.s * 2.5}px rgba(${color},0.55)`,
          }}
          animate={
            reduce
              ? { opacity: 0.3 }
              : { y: [0, -p.rise], x: [0, p.x, 0], opacity: [0, 0.9, 0] }
          }
          transition={reduce ? {} : { duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero-scale wrapper for a service mockup graphic. Reuses the same window
 * mockup we ship on the home Services cards, scaled up with a soft accent
 * glow + lift shadow so it reads as the "object" of the page.
 */
export default function ServiceHeroMock({
  children,
  accentHex,
}: {
  children: React.ReactNode;
  accentHex: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative w-full"
    >
      {/* Soft accent glow behind */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-[40px] blur-3xl"
        style={{
          background: `radial-gradient(60% 70% at 50% 50%, ${accentHex}26 0%, transparent 70%)`,
        }}
      />

      {/* Mockup frame */}
      <div className="relative aspect-[16/11] md:aspect-[16/10] rounded-[22px] overflow-hidden bg-[#040519] ring-1 ring-white/10 shadow-[0_36px_70px_-24px_rgba(2,5,22,0.55)]">
        {/* Per-service accent wash inside */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 120%, ${accentHex}1f 0%, transparent 60%)`,
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}

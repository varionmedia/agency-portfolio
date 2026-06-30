"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

function FloatBubble({
  icon,
  color,
  delay,
  left,
}: {
  icon: "heart" | "comment" | "star";
  color: string;
  delay: number;
  left: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    heart: <path d="M12 21s-7-4.5-9-9.5a5.5 5.5 0 0 1 9-4.5 5.5 5.5 0 0 1 9 4.5c-2 5-9 9.5-9 9.5z" />,
    comment: <path d="M21 11.5a8.38 8.38 0 0 1-15 5L3 21l4.5-3a8.5 8.5 0 1 1 13.5-6.5z" />,
    star: <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z" />,
  };
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill={color}
      className="absolute pointer-events-none z-30 drop-shadow-[0_2px_8px_rgba(236,72,153,0.5)]"
      style={{ bottom: 18, left }}
      initial={{ y: 0, opacity: 0, scale: 0.6 }}
      animate={{ y: -120, opacity: [0, 1, 1, 0], scale: [0.6, 1.2, 1, 0.9] }}
      transition={{ duration: 3.2, delay, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
    >
      {paths[icon]}
    </motion.svg>
  );
}

function Phone({
  tilt,
  z,
  offsetX,
  offsetY,
  scale,
  gradient,
  showReel,
  delay,
}: {
  tilt: number;
  z: number;
  offsetX: number;
  offsetY: number;
  scale: number;
  gradient: string;
  showReel?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: tilt }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className="absolute left-1/2 top-1/2 origin-center"
      style={{
        zIndex: z,
        transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) rotate(${tilt}deg) scale(${scale})`,
        width: 220,
        aspectRatio: "9 / 19",
      }}
    >
      <div className="relative w-full h-full rounded-[34px] bg-ink p-[6px] shadow-[0_30px_60px_-20px_rgba(2,5,22,0.55)] ring-1 ring-white/10">
        <div className="relative w-full h-full rounded-[28px] overflow-hidden">
          <div className={`absolute inset-0 ${gradient}`} />
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-ink/90 z-20" />
          {/* Top meta: handle + views */}
          <div className="absolute top-7 left-3 right-3 flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-white/85 ring-2 ring-white/30" />
              <span className="text-[9px] font-display font-bold tracking-tight">@drharel</span>
            </div>
            <span className="text-[8.5px] font-display font-bold uppercase tracking-[0.18em] bg-black/30 backdrop-blur-sm rounded px-1.5 py-0.5">
              Reel
            </span>
          </div>
          {/* Play button */}
          {showReel && (
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(0,0,0,0.45)]"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#0a0d1f">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </motion.div>
          )}
          {/* Bottom view-count strip */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[13px] leading-none">2.1M</span>
              <span className="text-[8.5px] uppercase tracking-[0.18em] text-white/80 mt-1">Views</span>
            </div>
            <div className="flex flex-col items-end gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <path d="M12 21s-7-4.5-9-9.5a5.5 5.5 0 0 1 9-4.5 5.5 5.5 0 0 1 9 4.5c-2 5-9 9.5-9 9.5z" />
              </svg>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <path d="M21 11.5a8.38 8.38 0 0 1-15 5L3 21l4.5-3a8.5 8.5 0 1 1 13.5-6.5z" />
              </svg>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <path d="m22 2-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
          </div>
          {/* Subtle reflection */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 35%, transparent 55%)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialHero() {
  return (
    <div className="relative w-full h-[480px] md:h-[540px] flex items-center justify-center">
      {/* Background accent washes */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 50% 50%, rgba(236,72,153,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Concentric arcs behind phones */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {[160, 130, 100].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#ec4899"
            strokeOpacity={0.18 - i * 0.04}
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 + i * 0.1 },
              scale: { duration: 0.8, delay: 0.3 + i * 0.1 },
              rotate: { duration: 80 + i * 30, repeat: Infinity, ease: "linear" },
            }}
            style={{ transformOrigin: "200px 200px" }}
          />
        ))}
      </svg>

      {/* Back phone */}
      <Phone
        tilt={-12}
        z={1}
        offsetX={-120}
        offsetY={20}
        scale={0.78}
        gradient="bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#6366f1]"
        delay={0.05}
      />
      {/* Right phone */}
      <Phone
        tilt={10}
        z={2}
        offsetX={120}
        offsetY={20}
        scale={0.82}
        gradient="bg-gradient-to-br from-[#f59e0b] via-[#ec4899] to-[#a855f7]"
        delay={0.1}
      />
      {/* Front phone */}
      <Phone
        tilt={-2}
        z={5}
        offsetX={0}
        offsetY={-10}
        scale={1}
        gradient="bg-gradient-to-br from-[#ec4899] via-[#a855f7] to-[#3b82f6]"
        showReel
        delay={0.2}
      />

      {/* Floating engagement bubbles (over front phone) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <FloatBubble icon="heart" color="#ffffff" delay={0.4} left="44%" />
        <FloatBubble icon="comment" color="#ffe5f1" delay={1.6} left="56%" />
        <FloatBubble icon="star" color="#fff4cc" delay={2.8} left="48%" />
      </div>

      {/* Floating stat chips */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
        className="absolute top-6 left-2 md:left-6 z-10 bg-white rounded-2xl shadow-[0_18px_40px_-16px_rgba(2,5,22,0.3)] border border-ink/[0.08] px-4 py-3 max-w-[180px]"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] animate-pulse" />
          <span className="text-[0.55rem] uppercase tracking-[0.2em] font-display font-bold text-ink/55">
            Audience trend
          </span>
        </div>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-7">
          <defs>
            <linearGradient id="socialHeroFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M2,24 L18,22 L34,23 L50,16 L66,13 L82,8 L98,4 L98,30 L2,30 Z"
            fill="url(#socialHeroFill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.path
            d="M2,24 L18,22 L34,23 L50,16 L66,13 L82,8 L98,4"
            fill="none"
            stroke="#ec4899"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay: 0.9, ease: "easeInOut" }}
          />
        </svg>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="font-display font-extrabold text-lg text-ink leading-none">+342%</span>
          <span className="text-[0.55rem] uppercase tracking-[0.18em] text-ink/55">90d</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
        className="absolute bottom-8 right-2 md:right-6 z-10 bg-white rounded-2xl shadow-[0_18px_40px_-16px_rgba(2,5,22,0.3)] border border-ink/[0.08] px-4 py-3"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ec4899] to-[#a855f7] flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base leading-none text-ink">700K+</span>
            <span className="text-[0.55rem] uppercase tracking-[0.18em] font-display font-semibold text-ink/55 mt-1">
              Single reel
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

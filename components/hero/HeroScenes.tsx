"use client";

import { motion } from "motion/react";

const LOOP = (duration: number, delay = 0) =>
  ({ duration, delay, repeat: Infinity, ease: "easeInOut" } as const);

export type SceneProps = { accent: string; reduce?: boolean };

/* Transparent floating keyword/label chip used across scenes. */
function Tag({
  children,
  accent,
  style,
  delay = 0,
  reduce,
}: {
  children: React.ReactNode;
  accent: string;
  style: React.CSSProperties;
  delay?: number;
  reduce?: boolean;
}) {
  return (
    <motion.span
      className="absolute whitespace-nowrap rounded-full border px-3 py-1 text-[0.7rem] md:text-xs font-display font-semibold tracking-wide backdrop-blur-[1px]"
      style={{ borderColor: `${accent}33`, color: `${accent}cc`, backgroundColor: `${accent}0d`, ...style }}
      animate={reduce ? {} : { y: [0, -16, 0], opacity: [0.35, 0.7, 0.35] }}
      transition={LOOP(7, delay)}
    >
      {children}
    </motion.span>
  );
}

/* Shared accent wash anchored to the right of the stage. */
function Tint({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: `radial-gradient(45% 55% at 78% 45%, ${accent}26 0%, transparent 70%), radial-gradient(30% 40% at 95% 90%, ${accent}1a 0%, transparent 70%)`,
      }}
    />
  );
}

/* ── SEO — rising graph + transparent keywords ─────────────── */
export function SeoScene({ accent, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Tint accent={accent} />
      {/* Graph */}
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute right-0 bottom-[12%] w-[58%] h-[46%] opacity-90">
        <defs>
          <linearGradient id="seoArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 30, 45].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.4" />
        ))}
        <motion.path
          d="M0,52 L16,46 L30,48 L46,34 L62,26 L80,15 L100,6 L100,60 L0,60 Z"
          fill="url(#seoArea)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.path
          d="M0,52 L16,46 L30,48 L46,34 L62,26 L80,15 L100,6"
          fill="none"
          stroke={accent}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1.6 }}
        />
        <motion.circle
          r="1.6"
          fill={accent}
          animate={reduce ? { cx: 100, cy: 6 } : { cx: [0, 46, 80, 100], cy: [52, 34, 15, 6] }}
          transition={LOOP(3.8)}
        />
      </svg>
      {/* Keywords */}
      <Tag accent={accent} delay={0} reduce={reduce} style={{ top: "22%", left: "52%" }}>“best dentist near me”</Tag>
      <Tag accent={accent} delay={1.2} reduce={reduce} style={{ top: "34%", left: "74%" }}>#1 on Google</Tag>
      <Tag accent={accent} delay={2.1} reduce={reduce} style={{ top: "14%", left: "66%" }}>top rated expert</Tag>
      <Tag accent={accent} delay={0.8} reduce={reduce} style={{ top: "48%", left: "60%" }}>organic traffic ↑</Tag>
    </div>
  );
}

/* ── Social — rising glyph bubbles + reel cards ────────────── */
const GLYPHS: Record<string, React.ReactNode> = {
  heart: <path d="M12 21s-7-4.5-9-9.5a5.5 5.5 0 0 1 9-4.5 5.5 5.5 0 0 1 9 4.5c-2 5-9 9.5-9 9.5z" />,
  play: <path d="M8 5v14l11-7L8 5z" />,
  comment: <path d="M21 11.5a8.38 8.38 0 0 1-15 5L3 21l4.5-3a8.5 8.5 0 1 1 13.5-6.5z" />,
  star: <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z" />,
};

function Bubble({ icon, accent, left, delay, reduce }: { icon: keyof typeof GLYPHS; accent: string; left: string; delay: number; reduce?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24" width="22" height="22" fill={accent}
      className="absolute bottom-[14%]" style={{ left }}
      animate={reduce ? { opacity: 0.5 } : { y: [0, -180], opacity: [0, 0.8, 0.8, 0] }}
      transition={reduce ? { duration: 0 } : { duration: 5, delay, repeat: Infinity, ease: "easeOut" }}
    >
      {GLYPHS[icon]}
    </motion.svg>
  );
}

export function SocialScene({ accent, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Tint accent={accent} />
      {/* Reel cards */}
      <motion.div
        className="absolute right-[14%] top-[26%] w-28 h-44 rounded-2xl border"
        style={{ borderColor: `${accent}40`, background: `linear-gradient(160deg, ${accent}33, transparent)` }}
        animate={reduce ? {} : { y: [0, -14, 0], rotate: [-3, -1, -3] }}
        transition={LOOP(6)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-9 h-9 rounded-full bg-white/85 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#0a0d1f"><path d="M8 5v14l11-7L8 5z" /></svg>
          </span>
        </div>
      </motion.div>
      <motion.div
        className="absolute right-[34%] top-[40%] w-24 h-40 rounded-2xl border"
        style={{ borderColor: `${accent}33`, background: `linear-gradient(160deg, ${accent}26, transparent)` }}
        animate={reduce ? {} : { y: [0, 12, 0], rotate: [4, 2, 4] }}
        transition={LOOP(7, 0.6)}
      />
      {/* Bubbles */}
      <Bubble icon="heart" accent={accent} left="58%" delay={0} reduce={reduce} />
      <Bubble icon="play" accent={accent} left="70%" delay={1.4} reduce={reduce} />
      <Bubble icon="comment" accent={accent} left="82%" delay={0.7} reduce={reduce} />
      <Bubble icon="star" accent={accent} left="64%" delay={2.2} reduce={reduce} />
      <Bubble icon="heart" accent={accent} left="88%" delay={3} reduce={reduce} />
      {/* Handles */}
      <Tag accent={accent} delay={0.4} reduce={reduce} style={{ top: "18%", left: "60%" }}>@yourbrand</Tag>
      <Tag accent={accent} delay={1.6} reduce={reduce} style={{ top: "62%", left: "72%" }}>+700K views</Tag>
    </div>
  );
}

/* ── Meta Ads — targeting reticle + converging audience ────── */
const AUDIENCE = [
  { left: "92%", top: "30%" },
  { left: "70%", top: "16%" },
  { left: "60%", top: "70%" },
  { left: "94%", top: "78%" },
  { left: "55%", top: "40%" },
  { left: "80%", top: "88%" },
];

export function MetaScene({ accent, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Tint accent={accent} />
      {/* Reticle */}
      <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-[34%] aspect-square">
        {[1, 0.66, 0.33].map((s, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 m-auto rounded-full border"
            style={{ width: `${s * 100}%`, height: `${s * 100}%`, borderColor: `${accent}40` }}
            animate={reduce ? {} : { scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={LOOP(3 + i * 0.4, i * 0.2)}
          />
        ))}
        <span className="absolute inset-0 m-auto w-3 h-3 rounded-full" style={{ backgroundColor: accent }} />
        {AUDIENCE.map((d, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: accent }}
            initial={{ left: d.left, top: d.top, opacity: 0 }}
            animate={reduce ? { left: "50%", top: "50%", opacity: 0.6 } : { left: [d.left, "50%"], top: [d.top, "50%"], opacity: [0, 1, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 2.8, delay: i * 0.3, repeat: Infinity, ease: "easeIn" }}
          />
        ))}
      </div>
      <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "20%", left: "54%" }}>ROAS 4.2x</Tag>
      <Tag accent={accent} delay={1.5} reduce={reduce} style={{ top: "70%", left: "52%" }}>CPL ↓ 38%</Tag>
      <Tag accent={accent} delay={2.2} reduce={reduce} style={{ top: "12%", left: "78%" }}>qualified lead</Tag>
    </div>
  );
}

/* ── AI Automation — node graph + traveling pulses ─────────── */
const NODES = [
  { x: 56, y: 32 },
  { x: 78, y: 22 },
  { x: 90, y: 50 },
  { x: 72, y: 66 },
  { x: 54, y: 58 },
];
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 3],
];

export function AiScene({ accent, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Tint accent={accent} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} stroke={accent} strokeOpacity="0.25" strokeWidth="0.4" />
        ))}
        {EDGES.map(([a, b], i) => (
          <motion.circle
            key={`p${i}`}
            r="0.9"
            fill={accent}
            animate={reduce ? { cx: NODES[b].x, cy: NODES[b].y } : { cx: [NODES[a].x, NODES[b].x], cy: [NODES[a].y, NODES[b].y] }}
            transition={reduce ? { duration: 0 } : { duration: 2.4, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {NODES.map((n, i) => (
          <motion.circle
            key={`n${i}`}
            cx={n.x}
            cy={n.y}
            r="1.6"
            fill="#070920"
            stroke={accent}
            strokeWidth="0.7"
            animate={reduce ? {} : { r: [1.6, 2.1, 1.6] }}
            transition={LOOP(2.6, i * 0.25)}
          />
        ))}
      </svg>
      <Tag accent={accent} delay={0.2} reduce={reduce} style={{ top: "20%", left: "54%" }}>lead scored · 92</Tag>
      <Tag accent={accent} delay={1.3} reduce={reduce} style={{ top: "74%", left: "60%" }}>synced to CRM</Tag>
      <Tag accent={accent} delay={2.4} reduce={reduce} style={{ top: "44%", left: "84%" }}>agent · running</Tag>
    </div>
  );
}

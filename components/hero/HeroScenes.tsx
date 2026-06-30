"use client";

import { motion } from "motion/react";

const LOOP = (duration: number, delay = 0) =>
  ({ duration, delay, repeat: Infinity, ease: "easeInOut" } as const);

export type SceneProps = { accent: string; accent2: string; reduce?: boolean };

/* Floating label chip — brighter, glassy. */
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
      className="absolute whitespace-nowrap rounded-full border px-3 py-1.5 text-[0.72rem] md:text-[0.8rem] font-display font-semibold tracking-wide"
      style={{
        borderColor: `${accent}66`,
        color: "#ffffff",
        background: `linear-gradient(120deg, ${accent}3a, ${accent}14)`,
        boxShadow: `0 6px 24px -10px ${accent}aa`,
        ...style,
      }}
      animate={reduce ? {} : { y: [0, -14, 0], opacity: [0.7, 1, 0.7] }}
      transition={LOOP(6, delay)}
    >
      {children}
    </motion.span>
  );
}

/* Strong accent wash + central glow anchored to the right of the stage. */
function Glow({ accent, accent2 }: { accent: string; accent2: string }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: `radial-gradient(38% 50% at 72% 45%, ${accent}55 0%, transparent 68%), radial-gradient(34% 44% at 90% 80%, ${accent2}3a 0%, transparent 70%), radial-gradient(30% 40% at 60% 15%, ${accent2}26 0%, transparent 70%)`,
      }}
    />
  );
}

/* ── SEO — bright rising graph, SERP climb, keyword cloud ──── */
export function SeoScene({ accent, accent2, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} />
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute right-0 bottom-[10%] w-[62%] h-[52%]">
        <defs>
          <linearGradient id="seoArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 30, 45].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#ffffff" strokeOpacity="0.07" strokeWidth="0.4" />
        ))}
        {/* competitor flat line */}
        <path d="M0,50 L40,48 L72,49 L100,47" fill="none" stroke={accent2} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 2" />
        <motion.path
          d="M0,52 L16,46 L30,48 L46,34 L62,26 L80,15 L100,5 L100,60 L0,60 Z"
          fill="url(#seoArea)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M0,52 L16,46 L30,48 L46,34 L62,26 L80,15 L100,5"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: `drop-shadow(0 0 4px ${accent})` }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1.4 }}
        />
        <motion.circle
          r="2"
          fill="#ffffff"
          style={{ filter: `drop-shadow(0 0 5px ${accent})` }}
          animate={reduce ? { cx: 100, cy: 5 } : { cx: [0, 46, 80, 100], cy: [52, 34, 15, 5] }}
          transition={LOOP(3.6)}
        />
      </svg>
      {/* SERP climb mini-list */}
      <div className="absolute top-[20%] right-[8%] w-44 space-y-1.5">
        {["#1", "#2", "#3"].map((r, i) => (
          <motion.div
            key={r}
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 border"
            style={{ borderColor: `${accent}33`, background: `${accent}14` }}
            animate={reduce ? {} : { x: [6, 0, 6], opacity: [0.6, 1, 0.6] }}
            transition={LOOP(4, i * 0.4)}
          >
            <span className="text-[0.7rem] font-display font-extrabold" style={{ color: i === 0 ? accent : "#ffffff" }}>{r}</span>
            <span className="h-1.5 flex-1 rounded-full" style={{ background: "#ffffff22" }} />
            {i === 0 && <span className="text-[0.6rem]" style={{ color: accent }}>▲</span>}
          </motion.div>
        ))}
      </div>
      <Tag accent={accent} delay={0} reduce={reduce} style={{ top: "12%", left: "50%" }}>“best dentist near me”</Tag>
      <Tag accent={accent2} delay={1.1} reduce={reduce} style={{ top: "62%", left: "54%" }}>organic traffic ↑ 103%</Tag>
      <Tag accent={accent} delay={2} reduce={reduce} style={{ top: "44%", left: "62%" }}>73K keywords</Tag>
    </div>
  );
}

/* ── Social — reel cards, bubbles, engagement ──────────────── */
const GLYPHS = {
  heart: "M12 21s-7-4.5-9-9.5a5.5 5.5 0 0 1 9-4.5 5.5 5.5 0 0 1 9 4.5c-2 5-9 9.5-9 9.5z",
  play: "M8 5v14l11-7L8 5z",
  comment: "M21 11.5a8.38 8.38 0 0 1-15 5L3 21l4.5-3a8.5 8.5 0 1 1 13.5-6.5z",
  star: "M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z",
} as const;

function Bubble({ icon, color, left, delay, reduce }: { icon: keyof typeof GLYPHS; color: string; left: string; delay: number; reduce?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24" width="24" height="24" fill={color}
      className="absolute bottom-[12%]" style={{ left, filter: `drop-shadow(0 0 6px ${color}aa)` }}
      animate={reduce ? { opacity: 0.7 } : { y: [0, -200], opacity: [0, 1, 1, 0] }}
      transition={reduce ? { duration: 0 } : { duration: 5, delay, repeat: Infinity, ease: "easeOut" }}
    >
      <path d={GLYPHS[icon]} />
    </motion.svg>
  );
}

export function SocialScene({ accent, accent2, reduce }: SceneProps) {
  const cards = [
    { c: `linear-gradient(160deg, ${accent}, ${accent2})`, x: "16%", y: "24%", w: 30, h: 46, r: -4, d: 0 },
    { c: `linear-gradient(160deg, ${accent2}, #3b82f6)`, x: "36%", y: "40%", w: 26, h: 40, r: 5, d: 0.6 },
    { c: `linear-gradient(160deg, #f97316, ${accent})`, x: "2%", y: "46%", w: 24, h: 38, r: -8, d: 1 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} />
      {cards.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border border-white/15 overflow-hidden"
          style={{ right: c.x, top: c.y, width: `${c.w}%`, maxWidth: 150, aspectRatio: `${c.w}/${c.h}`, background: c.c, boxShadow: `0 20px 50px -20px ${accent}aa` }}
          animate={reduce ? {} : { y: [0, i % 2 ? 14 : -14, 0], rotate: [c.r, c.r + 1.5, c.r] }}
          transition={LOOP(6 + i, c.d)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="#0a0d1f"><path d="M8 5v14l11-7L8 5z" /></svg>
            </span>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-white/40" />
            <span className="h-1.5 flex-1 rounded-full bg-white/30" />
          </div>
        </motion.div>
      ))}
      <Bubble icon="heart" color={accent} left="58%" delay={0} reduce={reduce} />
      <Bubble icon="play" color={accent2} left="70%" delay={1.2} reduce={reduce} />
      <Bubble icon="comment" color="#f97316" left="82%" delay={0.6} reduce={reduce} />
      <Bubble icon="star" color={accent} left="64%" delay={2} reduce={reduce} />
      <Bubble icon="heart" color={accent2} left="88%" delay={2.8} reduce={reduce} />
      <Bubble icon="play" color={accent} left="76%" delay={3.4} reduce={reduce} />
      <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "14%", left: "58%" }}>+700K views</Tag>
      <Tag accent={accent2} delay={1.4} reduce={reduce} style={{ top: "66%", left: "70%" }}>@yourbrand · +12.4K</Tag>
    </div>
  );
}

/* ── Meta Ads — reticle, converging audience, ROAS gauge ───── */
const AUDIENCE = [
  { left: "94%", top: "26%" }, { left: "72%", top: "12%" }, { left: "58%", top: "72%" },
  { left: "96%", top: "80%" }, { left: "52%", top: "38%" }, { left: "82%", top: "92%" },
  { left: "64%", top: "8%" }, { left: "90%", top: "54%" },
];

export function MetaScene({ accent, accent2, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} />
      <div className="absolute right-[16%] top-1/2 -translate-y-1/2 w-[36%] aspect-square max-w-[420px]">
        {[1, 0.66, 0.33].map((s, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 m-auto rounded-full border-2"
            style={{ width: `${s * 100}%`, height: `${s * 100}%`, borderColor: `${accent}66` }}
            animate={reduce ? {} : { scale: [1, 1.07, 1], opacity: [0.5, 1, 0.5] }}
            transition={LOOP(3 + i * 0.4, i * 0.2)}
          />
        ))}
        <span className="absolute inset-0 m-auto w-4 h-4 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 16px ${accent}` }} />
        {AUDIENCE.map((d, i) => (
          <motion.span
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor: i % 2 ? accent2 : accent, boxShadow: `0 0 8px ${i % 2 ? accent2 : accent}` }}
            initial={{ left: d.left, top: d.top, opacity: 0 }}
            animate={reduce ? { left: "50%", top: "50%", opacity: 0.7 } : { left: [d.left, "50%"], top: [d.top, "50%"], opacity: [0, 1, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 2.8, delay: i * 0.25, repeat: Infinity, ease: "easeIn" }}
          />
        ))}
      </div>
      {/* ROAS gauge — top */}
      <div className="absolute top-[12%] right-[7%] w-48 rounded-xl border p-3" style={{ borderColor: `${accent}40`, background: "#ffffff08" }}>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-white/60 font-display">ROAS</span>
          <span className="text-[0.72rem] font-display font-extrabold" style={{ color: accent }}>4.2x</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${accent2}, ${accent})` }}
            animate={reduce ? { width: "82%" } : { width: ["0%", "82%"] }} transition={LOOP(3)} />
        </div>
      </div>
      <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "62%", left: "50%" }}>314 leads · month 1</Tag>
      <Tag accent={accent2} delay={1.5} reduce={reduce} style={{ top: "80%", left: "70%" }}>CPL ↓ 38%</Tag>
    </div>
  );
}

/* ── AI Automation — node graph, pulses, streaming log ─────── */
const NODES = [
  { x: 54, y: 28 }, { x: 76, y: 18 }, { x: 90, y: 44 }, { x: 80, y: 70 },
  { x: 58, y: 64 }, { x: 44, y: 46 }, { x: 68, y: 44 },
];
const EDGES: [number, number][] = [[0, 6], [1, 6], [2, 6], [6, 3], [6, 4], [5, 6], [0, 1], [3, 4]];

export function AiScene({ accent, accent2, reduce }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} stroke={accent} strokeOpacity="0.35" strokeWidth="0.5" />
        ))}
        {EDGES.map(([a, b], i) => (
          <motion.circle key={`p${i}`} r="1.1" fill={i % 2 ? accent2 : "#ffffff"}
            style={{ filter: `drop-shadow(0 0 3px ${accent})` }}
            animate={reduce ? { cx: NODES[b].x, cy: NODES[b].y } : { cx: [NODES[a].x, NODES[b].x], cy: [NODES[a].y, NODES[b].y] }}
            transition={reduce ? { duration: 0 } : { duration: 2.2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
        ))}
        {NODES.map((n, i) => (
          <motion.circle key={`n${i}`} cx={n.x} cy={n.y} r="2" fill="#05060a" stroke={i === 6 ? accent2 : accent} strokeWidth="0.9"
            style={{ filter: `drop-shadow(0 0 4px ${accent})` }}
            animate={reduce ? {} : { r: [2, 2.6, 2] }} transition={LOOP(2.6, i * 0.2)} />
        ))}
      </svg>
      {/* streaming log — top */}
      <div className="absolute top-[12%] right-[6%] w-52 rounded-xl border p-3 space-y-1.5" style={{ borderColor: `${accent}40`, background: "#ffffff08" }}>
        {["lead captured", "scored · 92/100", "synced to CRM"].map((l, i) => (
          <motion.div key={l} className="flex items-center gap-2"
            animate={reduce ? { opacity: 1 } : { opacity: [0.2, 1, 0.2] }} transition={LOOP(3, i * 0.8)}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i === 1 ? accent2 : accent }} />
            <span className="text-[0.66rem] font-mono text-white/75">{l}</span>
          </motion.div>
        ))}
      </div>
      <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "66%", left: "50%" }}>40+ hrs saved / wk</Tag>
      <Tag accent={accent2} delay={1.5} reduce={reduce} style={{ top: "82%", left: "60%" }}>agent · running</Tag>
    </div>
  );
}

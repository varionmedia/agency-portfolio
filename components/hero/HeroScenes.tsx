"use client";

import { motion } from "motion/react";

const LOOP = (duration: number, delay = 0) =>
  ({ duration, delay, repeat: Infinity, ease: "easeInOut" } as const);

export type SceneProps = { accent: string; accent2: string; reduce?: boolean; centered?: boolean };

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
      animate={reduce ? {} : { y: [0, -12, 0], opacity: [0.75, 1, 0.75] }}
      transition={LOOP(6, delay)}
    >
      {children}
    </motion.span>
  );
}

/* Accent wash. Centered variant keeps the glow in the middle of the panel. */
function Glow({ accent, accent2, centered }: { accent: string; accent2: string; centered?: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background: centered
          ? `radial-gradient(58% 56% at 50% 52%, ${accent}4d 0%, transparent 72%), radial-gradient(32% 38% at 84% 20%, ${accent2}26 0%, transparent 68%), radial-gradient(32% 40% at 16% 82%, ${accent2}24 0%, transparent 70%)`
          : `radial-gradient(46% 58% at 66% 48%, ${accent}4d 0%, transparent 70%), radial-gradient(30% 40% at 90% 20%, ${accent2}2e 0%, transparent 68%), radial-gradient(30% 42% at 88% 84%, ${accent2}26 0%, transparent 70%), radial-gradient(26% 36% at 52% 88%, ${accent}1f 0%, transparent 70%)`,
      }}
    />
  );
}

/* ── SEO — bright rising graph, SERP climb, keyword cloud ──── */
export function SeoScene({ accent, accent2, reduce, centered: C }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} centered={C} />
      <svg
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className={C ? "absolute inset-x-[2%] bottom-[8%] h-[58%]" : "absolute right-[3%] bottom-[12%] w-[48%] h-[48%]"}
        style={{
          // Keep the graph visible edge-to-edge (full width) and only blend the
          // four corners into the background. Centered core → no right-side cutoff.
          maskImage: "radial-gradient(120% 135% at 50% 60%, #000 58%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(120% 135% at 50% 60%, #000 58%, transparent 100%)",
        }}
      >
        <defs>
          <linearGradient id="seoArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,50 L40,48 L72,49 L100,47" fill="none" stroke={accent2} strokeOpacity="0.45" strokeWidth="1" strokeDasharray="2 2" />
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
      <div className={C ? "absolute top-[8%] left-1/2 -translate-x-1/2 w-[82%] max-w-[240px] space-y-1.5" : "absolute top-[20%] right-[8%] w-44 space-y-1.5"}>
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

      {C ? (
        <>
          <Tag accent={accent2} delay={0.4} reduce={reduce} style={{ top: "50%", left: "5%" }}>organic ↑ 103%</Tag>
          <Tag accent={accent} delay={1.4} reduce={reduce} style={{ top: "62%", left: "55%" }}>73K keywords</Tag>
        </>
      ) : (
        <>
          <Tag accent={accent} delay={0} reduce={reduce} style={{ top: "12%", left: "50%" }}>“best dentist near me”</Tag>
          <Tag accent={accent2} delay={1.1} reduce={reduce} style={{ top: "62%", left: "54%" }}>organic traffic ↑ 103%</Tag>
          <Tag accent={accent} delay={2} reduce={reduce} style={{ top: "44%", left: "62%" }}>73K keywords</Tag>
        </>
      )}
    </div>
  );
}

/* ── Social — reel cards, bubbles, engagement ──────────────── */
const GLYPHS = {
  heart: "M12 21s-7-4.5-9-9.5a5.5 5.5 0 0 1 9-4.5 5.5 5.5 0 0 1 9 4.5c-2 5-9 9.5-9 9.5z",
  play: "M8 5v14l11-7L8 5z",
  comment: "M21 11.5a8.38 8.38 0 0 1-15 5L3 21l4.5-3a8.5 8.5 0 1 1 13.5-6.5z",
  star: "M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z",
  share: "M2 21 23 12 2 3 2 10 17 12 2 14z",
} as const;

function Bubble({ icon, color, left, delay, reduce }: { icon: keyof typeof GLYPHS; color: string; left: string; delay: number; reduce?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 24 24" width="24" height="24" fill={color}
      className="absolute bottom-[12%]" style={{ left, filter: `drop-shadow(0 0 6px ${color}aa)` }}
      animate={reduce ? { opacity: 0.7 } : { y: [0, -150], opacity: [0, 1, 1, 0] }}
      transition={reduce ? { duration: 0 } : { duration: 5, delay, repeat: Infinity, ease: "easeOut" }}
    >
      <path d={GLYPHS[icon]} />
    </motion.svg>
  );
}

export function SocialScene({ accent, accent2, reduce, centered: C }: SceneProps) {
  // bg: right-anchored; centered: left-anchored, balanced cluster.
  const cards = C
    ? [
        { c: `linear-gradient(160deg, ${accent}, ${accent2})`, pos: { left: "10%", top: "16%" }, w: 25, h: 44, r: -5, d: 0 },
        { c: `linear-gradient(160deg, ${accent2}, #3b82f6)`, pos: { left: "37%", top: "30%" }, w: 24, h: 40, r: 5, d: 0.6 },
        { c: `linear-gradient(160deg, #f97316, ${accent})`, pos: { left: "64%", top: "18%" }, w: 24, h: 38, r: 8, d: 1 },
      ]
    : [
        { c: `linear-gradient(160deg, ${accent}, ${accent2})`, pos: { right: "32%", top: "24%" }, w: 24, h: 44, r: -4, d: 0 },
        { c: `linear-gradient(160deg, ${accent2}, #3b82f6)`, pos: { right: "21%", top: "40%" }, w: 22, h: 40, r: 5, d: 0.6 },
        { c: `linear-gradient(160deg, #f97316, ${accent})`, pos: { right: "9%", top: "44%" }, w: 22, h: 38, r: -8, d: 1 },
      ];
  const bubbleLefts = C ? ["16%", "28%", "40%", "52%", "64%", "76%", "34%", "58%"] : ["54%", "60%", "66%", "73%", "79%", "85%", "91%", "57%"];
  const bubbleIcons: (keyof typeof GLYPHS)[] = ["heart", "comment", "share", "heart", "comment", "share", "heart", "star"];
  const bubbleColors = [accent, accent2, "#f97316", accent2, accent, accent2, "#f97316", accent];
  const bubbleDelays = [0, 1.4, 0.7, 2.2, 1.0, 3.0, 1.8, 2.6];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} centered={C} />
      {cards.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border border-white/15 overflow-hidden"
          style={{ ...c.pos, width: `${c.w}%`, maxWidth: 140, aspectRatio: `${c.w}/${c.h}`, background: c.c, boxShadow: `0 20px 50px -20px ${accent}aa` }}
          animate={reduce ? {} : { y: [0, i % 2 ? 14 : -14, 0], rotate: [c.r, c.r + 1.5, c.r] }}
          transition={LOOP(6 + i, c.d)}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#0a0d1f"><path d="M8 5v14l11-7L8 5z" /></svg>
            </span>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-white/40" />
            <span className="h-1.5 flex-1 rounded-full bg-white/30" />
          </div>
        </motion.div>
      ))}
      {bubbleLefts.map((l, i) => (
        <Bubble key={i} icon={bubbleIcons[i]} color={bubbleColors[i]} left={l} delay={bubbleDelays[i]} reduce={reduce} />
      ))}
      {C ? (
        <>
          <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "6%", left: "30%" }}>+700K views</Tag>
          <Tag accent={accent2} delay={1.4} reduce={reduce} style={{ top: "88%", left: "22%" }}>@yourbrand · +12.4K</Tag>
        </>
      ) : (
        <>
          <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "13%", left: "54%" }}>+700K views</Tag>
          <Tag accent={accent2} delay={1.4} reduce={reduce} style={{ top: "88%", left: "55%" }}>@yourbrand · +12.4K</Tag>
          <Tag accent="#f97316" delay={2.1} reduce={reduce} style={{ top: "26%", left: "88%" }}>1.2M reach</Tag>
        </>
      )}
    </div>
  );
}

/* ── Meta Ads — reticle, converging audience, ROAS gauge ───── */
const AUDIENCE = [
  { left: "94%", top: "26%" }, { left: "72%", top: "12%" }, { left: "58%", top: "72%" },
  { left: "96%", top: "80%" }, { left: "52%", top: "38%" }, { left: "82%", top: "92%" },
  { left: "64%", top: "8%" }, { left: "90%", top: "54%" },
];

export function MetaScene({ accent, accent2, reduce, centered: C }: SceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} centered={C} />
      <div className={C ? "absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[58%] max-w-[230px] aspect-square" : "absolute right-[14%] top-1/2 -translate-y-1/2 w-[40%] aspect-square max-w-[440px]"}>
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
      {/* ROAS gauge */}
      <div className={C ? "absolute top-[6%] left-1/2 -translate-x-1/2 w-[78%] max-w-[210px] rounded-xl border p-3" : "absolute top-[12%] right-[7%] w-48 rounded-xl border p-3"} style={{ borderColor: `${accent}40`, background: "#ffffff08" }}>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-white/60 font-display">ROAS</span>
          <span className="text-[0.72rem] font-display font-extrabold" style={{ color: accent }}>4.2x</span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${accent2}, ${accent})` }}
            animate={reduce ? { width: "82%" } : { width: ["0%", "82%"] }} transition={LOOP(3)} />
        </div>
      </div>
      {C ? (
        <>
          <Tag accent={accent} delay={0.3} reduce={reduce} style={{ bottom: "6%", left: "3%" }}>314 leads</Tag>
          <Tag accent={accent2} delay={1.5} reduce={reduce} style={{ bottom: "6%", right: "3%" }}>CPL ↓ 38%</Tag>
        </>
      ) : (
        <>
          <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "62%", left: "50%" }}>314 leads · month 1</Tag>
          <Tag accent={accent2} delay={1.5} reduce={reduce} style={{ top: "80%", left: "70%" }}>CPL ↓ 38%</Tag>
        </>
      )}
    </div>
  );
}

/* ── AI Automation — node graph, pulses, streaming log ─────── */
const NODES = [
  { x: 52, y: 26 }, { x: 72, y: 18 }, { x: 90, y: 40 }, { x: 80, y: 70 },
  { x: 58, y: 66 }, { x: 47, y: 46 }, { x: 68, y: 44 },
];
const NODES_C = [
  { x: 28, y: 44 }, { x: 52, y: 36 }, { x: 76, y: 46 }, { x: 68, y: 72 },
  { x: 40, y: 70 }, { x: 24, y: 58 }, { x: 50, y: 56 },
];
const EDGES: [number, number][] = [[0, 6], [1, 6], [2, 6], [6, 3], [6, 4], [5, 6], [0, 1], [3, 4]];

export function AiScene({ accent, accent2, reduce, centered: C }: SceneProps) {
  const N = C ? NODES_C : NODES;
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Glow accent={accent} accent2={accent2} centered={C} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={N[a].x} y1={N[a].y} x2={N[b].x} y2={N[b].y} stroke={accent} strokeOpacity="0.35" strokeWidth="0.5" />
        ))}
        {EDGES.map(([a, b], i) => (
          <motion.circle key={`p${i}`} r="1.1" fill={i % 2 ? accent2 : "#ffffff"}
            style={{ filter: `drop-shadow(0 0 3px ${accent})` }}
            animate={reduce ? { cx: N[b].x, cy: N[b].y } : { cx: [N[a].x, N[b].x], cy: [N[a].y, N[b].y] }}
            transition={reduce ? { duration: 0 } : { duration: 2.2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} />
        ))}
        {N.map((n, i) => (
          <motion.circle key={`n${i}`} cx={n.x} cy={n.y} r="2" fill="#05060a" stroke={i === 6 ? accent2 : accent} strokeWidth="0.9"
            style={{ filter: `drop-shadow(0 0 4px ${accent})` }}
            animate={reduce ? {} : { r: [2, 2.6, 2] }} transition={LOOP(2.6, i * 0.2)} />
        ))}
      </svg>
      {/* streaming log */}
      <div className={C ? "absolute top-[6%] left-1/2 -translate-x-1/2 w-[80%] max-w-[220px] rounded-xl border p-3 space-y-1.5" : "absolute top-[12%] right-[6%] w-52 rounded-xl border p-3 space-y-1.5"} style={{ borderColor: `${accent}40`, background: "#ffffff08" }}>
        {["lead captured", "scored · 92/100", "synced to CRM"].map((l, i) => (
          <motion.div key={l} className="flex items-center gap-2"
            animate={reduce ? { opacity: 1 } : { opacity: [0.2, 1, 0.2] }} transition={LOOP(3, i * 0.8)}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i === 1 ? accent2 : accent }} />
            <span className="text-[0.66rem] font-mono text-white/75">{l}</span>
          </motion.div>
        ))}
      </div>
      {C ? (
        <>
          <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "86%", left: "5%" }}>40+ hrs saved</Tag>
          <Tag accent={accent2} delay={1.5} reduce={reduce} style={{ top: "86%", left: "56%" }}>agent · running</Tag>
        </>
      ) : (
        <>
          <Tag accent={accent} delay={0.3} reduce={reduce} style={{ top: "66%", left: "50%" }}>40+ hrs saved / wk</Tag>
          <Tag accent={accent2} delay={1.5} reduce={reduce} style={{ top: "82%", left: "80%" }}>agent · running</Tag>
        </>
      )}
    </div>
  );
}

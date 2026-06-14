"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ──────────────────────────────────────────────────────────
 * Shared window frame ("chrome") that wraps every graphic so
 * each one reads as a live product screen.
 * ────────────────────────────────────────────────────────── */
function ScreenFrame({
  label,
  status,
  statusColor = "#22c55e",
  children,
}: {
  label: string;
  status: string;
  statusColor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="absolute inset-3.5 rounded-xl bg-[#0a0c20]/85 border border-white/10 overflow-hidden flex flex-col shadow-[0_14px_34px_-14px_rgba(0,0,0,0.8)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-3 h-6 border-b border-white/[0.07] bg-white/[0.03] flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[8px] uppercase tracking-[0.18em] text-white/45 font-display">
          {label}
        </span>
        <span className="ml-auto flex items-center gap-1 text-[7.5px] uppercase tracking-[0.16em] text-white/55">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: statusColor }}
            />
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: statusColor }}
            />
          </span>
          {status}
        </span>
      </div>
      {/* Screen */}
      <div className="relative flex-1 min-h-0">{children}</div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * 01 · SEO — rank-tracker
 * Organic-traffic chart drawing up + keywords climbing the SERP.
 * ────────────────────────────────────────────────────────── */
const SEO_KEYWORDS = [
  { term: "“service” near me", from: 18, to: 3 },
  { term: "best in your city", from: 11, to: 2 },
  { term: "top rated expert", from: 24, to: 5 },
];

function KeywordRow({
  term,
  from,
  to,
  index,
  inView,
}: {
  term: string;
  from: number;
  to: number;
  index: number;
  inView: boolean;
}) {
  const [pos, setPos] = useState(from);
  useEffect(() => {
    if (!inView) return;
    let current = from;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (current > to) {
        current -= 1;
        setPos(current);
        timer = setTimeout(tick, 95);
      } else {
        timer = setTimeout(() => {
          current = from;
          setPos(from);
          timer = setTimeout(tick, 500);
        }, 2400);
      }
    };
    timer = setTimeout(tick, 400 + index * 450);
    return () => clearTimeout(timer);
  }, [inView, from, to, index]);

  const reached = pos <= to;
  return (
    <div className="flex items-center gap-2 rounded-md bg-white/[0.03] border border-white/[0.06] px-2 py-1">
      <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/30 flex-shrink-0">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4-4" />
      </svg>
      <span className="text-[8.5px] text-white/65 truncate flex-1">{term}</span>
      <span
        className={`text-[8px] font-display font-bold tabular-nums px-1.5 py-0.5 rounded transition-colors duration-200 ${
          reached
            ? "text-[#34d399] bg-[#34d399]/15"
            : "text-white/55 bg-white/[0.06]"
        }`}
      >
        #{pos}
      </span>
    </div>
  );
}

function SeoGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className="absolute inset-0">
      <ScreenFrame label="rank-tracker" status="Tracking" statusColor="#34d399">
        <div className="absolute inset-0 p-2.5 flex flex-col gap-2">
          {/* Traffic chart */}
          <div className="relative h-[44%] rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden">
            <svg
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[10, 20, 30].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
              ))}
              <motion.path
                d="M0,34 L16,30 L32,32 L48,23 L64,18 L80,11 L100,5 L100,40 L0,40 Z"
                fill="url(#seoFill)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.path
                d="M0,34 L16,30 L32,32 L48,23 L64,18 L80,11 L100,5"
                fill="none"
                stroke="#34d399"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute top-1.5 left-2 text-[7.5px] uppercase tracking-[0.16em] text-white/40">
              Organic traffic
            </div>
          </div>

          {/* Keyword rows */}
          <div className="flex-1 flex flex-col justify-between">
            {SEO_KEYWORDS.map((k, i) => (
              <KeywordRow key={k.term} {...k} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </ScreenFrame>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * 02 · Social Media — content-studio
 * Reel playing + audience trend + content grid populating.
 * ────────────────────────────────────────────────────────── */
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
      width="10"
      height="10"
      fill={color}
      className="absolute pointer-events-none z-20"
      style={{ bottom: 4, left }}
      initial={{ y: 0, opacity: 0, scale: 0.6 }}
      animate={{ y: -48, opacity: [0, 1, 1, 0], scale: [0.6, 1.1, 1, 0.9] }}
      transition={{ duration: 2.4, delay, repeat: Infinity, repeatDelay: 0.5, ease: "easeOut" }}
    >
      {paths[icon]}
    </motion.svg>
  );
}

const SOCIAL_TILES = [
  "from-[#ec4899] to-[#a855f7]",
  "from-[#3b82f6] to-[#06b6d4]",
  "from-[#f59e0b] to-[#ef4444]",
  "from-[#a855f7] to-[#6366f1]",
  "from-[#10b981] to-[#06b6d4]",
  "from-[#ef4444] to-[#ec4899]",
];

function SocialGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className="absolute inset-0">
      <ScreenFrame label="content-studio" status="Live" statusColor="#ec4899">
        <div className="absolute inset-0 p-2.5 flex gap-2.5">
          {/* Reel */}
          <div className="relative w-[34%] flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#ec4899] via-[#a855f7] to-[#3b82f6] ring-1 ring-white/15">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/85 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="9" height="9" fill="#0a0d1f">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </div>
            </div>
            <div className="absolute top-1.5 left-1.5 text-[6.5px] font-bold text-white/90 uppercase tracking-wide bg-black/25 rounded px-1 py-px">
              Reel
            </div>
            <FloatBubble icon="heart" color="#ffffff" delay={0} left="22%" />
            <FloatBubble icon="comment" color="#ffe5f1" delay={0.8} left="52%" />
            <FloatBubble icon="star" color="#fff4cc" delay={1.6} left="36%" />
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            {/* Audience trend */}
            <div className="relative h-[44%] rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="socFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M2,33 L22,29 L40,31 L58,21 L76,15 L98,6 L98,40 L2,40 Z"
                  fill="url(#socFill)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d="M2,33 L22,29 L40,31 L58,21 L76,15 L98,6"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1.4 }}
                />
              </svg>
              <div className="absolute top-1.5 left-2 text-[7.5px] uppercase tracking-[0.16em] text-white/40">
                Audience
              </div>
            </div>

            {/* Content grid populating */}
            <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-1">
              {SOCIAL_TILES.map((g, i) => (
                <motion.div
                  key={i}
                  className={`rounded-[3px] bg-gradient-to-br ${g}`}
                  initial={{ opacity: 0.12, scale: 0.85 }}
                  animate={inView ? { opacity: [0.12, 1, 1, 0.12], scale: [0.85, 1, 1, 0.85] } : {}}
                  transition={{ duration: 3.2, delay: i * 0.22, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      </ScreenFrame>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * 03 · Meta Ads — campaign-manager
 * Audience targeting converging + ROAS gauge + conversions.
 * ────────────────────────────────────────────────────────── */
const TARGET_DOTS = [
  { left: "92%", top: "50%", color: "#22c55e" },
  { left: "71%", top: "86%", color: "#facc15" },
  { left: "29%", top: "86%", color: "#ef4444" },
  { left: "8%", top: "50%", color: "#a855f7" },
  { left: "29%", top: "14%", color: "#3b82f6" },
  { left: "71%", top: "14%", color: "#ec4899" },
];

function MetaAdsGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className="absolute inset-0">
      <ScreenFrame label="campaign-manager" status="Optimizing" statusColor="#facc15">
        <div className="absolute inset-0 p-2.5 flex gap-2.5">
          {/* Targeting */}
          <div className="relative w-[46%] flex-shrink-0 rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden">
            <div className="absolute top-1.5 left-2 text-[7.5px] uppercase tracking-[0.16em] text-white/40 z-10">
              Targeting
            </div>
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              {[44, 31, 18].map((r) => (
                <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="0.6" />
              ))}
              <circle cx="50" cy="50" r="3.5" fill="#00c8e8" />
            </svg>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/40" />
            </span>
            {TARGET_DOTS.map((d, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{ backgroundColor: d.color }}
                initial={{ left: d.left, top: d.top, opacity: 0 }}
                animate={inView ? { left: [d.left, "50%"], top: [d.top, "50%"], opacity: [0, 1, 1, 0] } : {}}
                transition={{ duration: 2.6, delay: i * 0.28, repeat: Infinity, repeatDelay: 0.6, ease: "easeIn" }}
              />
            ))}
          </div>

          {/* Right: gauge + stats */}
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            {/* ROAS gauge */}
            <div className="relative h-[52%] rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden p-1.5 flex flex-col">
              <div className="text-[7px] uppercase tracking-[0.16em] text-white/40">
                Return on spend
              </div>
              <div className="flex-1 flex items-end justify-center min-h-0">
                <svg
                  viewBox="0 0 100 50"
                  preserveAspectRatio="xMidYMax meet"
                  className="w-[88%] h-full"
                >
                  <path d="M8,45 A42,42 0 0 1 92,45" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="6" strokeLinecap="round" />
                  <motion.path
                    d="M8,45 A42,42 0 0 1 92,45"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 0.78 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-0.5 font-display font-extrabold text-[#22c55e] text-[10px] leading-none">
                <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                High ROAS
              </div>
            </div>

            {/* CPL + conversions */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              <div className="relative rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden">
                <div className="absolute top-1 left-1.5 flex items-center gap-0.5 text-[7px] uppercase tracking-[0.12em] text-white/40">
                  CPL
                  <svg viewBox="0 0 24 24" width="7" height="7" fill="none" stroke="#22c55e" strokeWidth="3">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <svg viewBox="0 0 60 30" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M2,8 L16,12 L30,11 L44,18 L58,24"
                    fill="none"
                    stroke="#00c8e8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                  />
                </svg>
              </div>
              <div className="relative rounded-lg bg-white/[0.02] border border-white/[0.06] overflow-hidden flex items-end justify-center gap-1 px-1.5 pb-1.5 pt-3">
                <span className="absolute top-1 left-1.5 right-1.5 text-[6.5px] uppercase tracking-[0.08em] text-white/40 truncate">Conversions</span>
                {[0.45, 0.6, 0.5, 0.8, 1].map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-sm origin-bottom bg-gradient-to-t from-[#facc15] to-[#22c55e]"
                    style={{ height: `${h * 100}%` }}
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScreenFrame>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * 04 · AI Automation — automation-flow
 * A mini backend dashboard with a live streaming activity log.
 * ────────────────────────────────────────────────────────── */
const AI_LOG = [
  { label: "Lead captured", tag: "form", color: "#3b82f6" },
  { label: "Scored · 87/100", tag: "ai", color: "#a855f7" },
  { label: "Email drafted", tag: "agent", color: "#ec4899" },
  { label: "Synced to CRM", tag: "crm", color: "#22c55e" },
  { label: "Follow-up queued", tag: "task", color: "#facc15" },
];

function LogRow({
  row,
  done,
  active,
}: {
  row: (typeof AI_LOG)[number];
  done: boolean;
  active: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded px-1.5 py-[3px] transition-colors duration-300 ${
        active ? "bg-cyan/10" : ""
      }`}
      style={{ opacity: done || active ? 1 : 0.32 }}
    >
      <span className="flex-shrink-0 w-2.5 h-2.5 flex items-center justify-center">
        {done ? (
          <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : active ? (
          <span className="w-2 h-2 rounded-full border-[1.5px] border-cyan border-t-transparent animate-spin" />
        ) : (
          <span className="w-1 h-1 rounded-full bg-white/30" />
        )}
      </span>
      <span
        className={`text-[8px] flex-1 truncate ${
          done ? "text-white/70" : active ? "text-white" : "text-white/45"
        }`}
      >
        {row.label}
      </span>
      <span
        className="text-[6.5px] uppercase tracking-[0.1em] px-1 py-px rounded font-display"
        style={{ color: row.color, backgroundColor: `${row.color}22` }}
      >
        {row.tag}
      </span>
    </div>
  );
}

function KpiTile({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-md bg-white/[0.03] border border-white/[0.06] px-2 py-1 flex flex-col justify-center">
      <span className="font-display font-extrabold text-[11px] leading-none" style={{ color: accent }}>
        {value}
      </span>
      <span className="text-[6.5px] uppercase tracking-[0.12em] text-white/40 mt-0.5">{label}</span>
    </div>
  );
}

function AiAutomationGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setStep((s) => (s + 1) % (AI_LOG.length + 2)), 850);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0">
      <ScreenFrame label="automation-flow" status="Running" statusColor="#22c55e">
        <div className="absolute inset-0 flex">
          {/* Sidebar */}
          <div className="w-6 flex-shrink-0 border-r border-white/[0.07] bg-white/[0.02] flex flex-col items-center gap-1.5 py-2">
            {[0, 1, 2, 3].map((n) => (
              <span
                key={n}
                className={`w-3 h-3 rounded-[3px] ${
                  n === 0 ? "bg-cyan/70" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          {/* Main */}
          <div className="flex-1 p-2 flex flex-col gap-1.5 min-w-0">
            {/* KPI strip */}
            <div className="grid grid-cols-3 gap-1.5">
              <KpiTile label="Workflows" value="12" accent="#3b82f6" />
              <KpiTile label="Hrs saved" value="40+" accent="#22c55e" />
              <div className="relative rounded-md bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                <svg viewBox="0 0 60 30" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M2,24 L14,20 L26,22 L38,14 L50,10 L58,5"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>

            {/* Activity log */}
            <div className="flex-1 rounded-md bg-white/[0.02] border border-white/[0.06] p-1 flex flex-col justify-center gap-0.5 overflow-hidden">
              {AI_LOG.map((row, i) => (
                <LogRow key={row.label} row={row} done={i < step} active={i === step} />
              ))}
            </div>
          </div>
        </div>
      </ScreenFrame>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Service data + card
 * ────────────────────────────────────────────────────────── */
const services = [
  {
    title: "SEO",
    bullets: ["Technical SEO", "Topical authority", "Content velocity"],
    copy: "Show up when your ideal clients are searching. We build your organic presence to generate consistent, high-intent leads.",
    tags: ["Technical SEO", "Content", "Local"],
    accent: "from-[#10b981]/15",
    Graphic: SeoGraphic,
  },
  {
    title: "Social Media",
    bullets: ["Personal brand", "Viral reels", "Authority content"],
    copy: "Turn your social profile into a trust-building machine. Content that grows your audience and keeps them engaged until they're ready to buy.",
    tags: ["Reels", "Personal Brand", "Growth"],
    accent: "from-[#ec4899]/15",
    Graphic: SocialGraphic,
  },
  {
    title: "Meta Ads",
    bullets: ["Lead-gen funnels", "Retargeting", "Creative testing"],
    copy: "Stop wasting spend on the wrong audience. Targeted campaigns that bring you qualified leads and maximize ROI.",
    tags: ["Lead Gen", "Retargeting", "Creative"],
    accent: "from-[#facc15]/12",
    Graphic: MetaAdsGraphic,
  },
  {
    title: "AI Automation",
    bullets: ["CRM dashboards", "Email agents", "Custom workflows"],
    copy: "Work smarter, not harder. Custom AI tools that save your team's time, cut costs, and improve output — without hiring more people.",
    tags: ["CRM Dashboards", "Agents", "Workflows"],
    accent: "from-[#a855f7]/15",
    Graphic: AiAutomationGraphic,
  },
];

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
  const Graphic = s.Graphic;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
      className="group relative rounded-3xl bg-white border border-ink/[0.08] overflow-hidden shadow-[0_12px_40px_-18px_rgba(2,5,22,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-20px_rgba(2,5,22,0.4)]"
    >
      {/* Top: animated graphic — dark */}
      <div
        className={`relative h-52 md:h-56 bg-[#040519] bg-gradient-to-br ${s.accent} to-[#040519] overflow-hidden text-white`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,200,232,0.12),transparent_60%)]"
        />
        <Graphic />
      </div>

      {/* Bottom: content — light */}
      <div className="relative p-6 md:p-7">
        <h3 className="font-display font-bold text-2xl md:text-[1.75rem] tracking-tight text-blue">
          {s.title}
        </h3>

        <ul className="mt-4 space-y-1.5">
          {s.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-ink/85">
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-ink/60 leading-relaxed">{s.copy}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {s.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] uppercase tracking-[0.18em] font-display font-semibold text-ink/55 border border-ink/15 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.2em] font-display text-blue opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Learn more
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

/* ──────────────────────────────────────────────────────────
 * Section
 * ────────────────────────────────────────────────────────── */
export default function Services() {
  return (
    <section id="services" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-16 items-end">
          <div className="lg:col-span-8">
            <FadeUp>
              <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-blue mb-6">
                <span className="h-px w-10 bg-blue/60" />
                What We Do
              </div>
            </FadeUp>
            <WordReveal
              as="h2"
              text="Four levers. One upward trajectory."
              className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight"
            />
          </div>
          <FadeUp delay={0.2} className="lg:col-span-4">
            <p className="text-ink/65 text-lg">
              We pick the right mix for your business and own the outcome — not
              just the deliverable.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

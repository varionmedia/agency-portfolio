"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ──────────────────────────────────────────────────────────
 * 01 · SEO — Live SERP ranking climb
 * ────────────────────────────────────────────────────────── */
const RANKS = [8, 5, 3, 1];

function SeoGraphic() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % RANKS.length),
      1700
    );
    return () => clearInterval(t);
  }, [inView]);

  return (
    <div ref={ref} className="relative h-full p-4 flex flex-col gap-2">
      {/* Search bar */}
      <div className="flex items-center gap-2 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5 text-[10px] text-white/65">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4-4" />
        </svg>
        <span>varion media agency</span>
        <span className="ml-auto text-[8.5px] uppercase tracking-[0.18em] text-white/35">google</span>
      </div>

      {/* Top result — Varion, climbing */}
      <div className="relative rounded-lg p-2.5 border border-[#10b981]/35 bg-[#10b981]/[0.08]">
        <div className="flex items-center gap-2">
          <motion.span
            key={RANKS[idx]}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="font-display font-extrabold text-[#34d399] text-sm tabular-nums"
          >
            #{RANKS[idx]}
          </motion.span>
          <span className="text-[8.5px] uppercase tracking-[0.16em] text-[#34d399]/85 inline-flex items-center gap-1">
            <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            +7 in 12 weeks
          </span>
        </div>
        <div className="text-[10px] text-white/95 mt-1 leading-tight font-semibold">
          Varion Media — Digital Marketing Agency
        </div>
        <div className="text-[8.5px] text-[#34d399]/80 mt-0.5">
          www.varionmedia.com
        </div>
      </div>

      {/* Other results — static */}
      <div className="rounded-lg px-2.5 py-1.5 border border-white/8 bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-white/35 font-display font-bold">#2</span>
          <span className="text-[8.5px] text-white/55">top-agencies.com</span>
        </div>
      </div>
      <div className="rounded-lg px-2.5 py-1.5 border border-white/8 bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-white/35 font-display font-bold">#3</span>
          <span className="text-[8.5px] text-white/55">leadgen-reviews.io</span>
        </div>
      </div>

      {/* Live indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#10b981]" />
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * 02 · Social Media — Reel views multiplier
 * ────────────────────────────────────────────────────────── */
function format(n: number) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return String(n);
}

function SocialGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let cancelled = false;
    const target = 2_100_000;
    const duration = 2200;
    const loop = () => {
      const start = performance.now();
      const step = (now: number) => {
        if (cancelled) return;
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(Math.floor(eased * target));
        if (t < 1) raf = requestAnimationFrame(step);
        else
          setTimeout(() => {
            if (cancelled) return;
            setCount(0);
            loop();
          }, 1100);
      };
      raf = requestAnimationFrame(step);
    };
    loop();
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative h-full flex items-center justify-center gap-4 px-5"
    >
      {/* Phone + emojis container */}
      <div className="relative">
        <FloatEmoji icon="heart" color="#ec4899" delay={0} x={-14} />
        <FloatEmoji icon="comment" color="#facc15" delay={0.7} x={10} />
        <FloatEmoji icon="heart" color="#ef4444" delay={1.4} x={-4} />
        <FloatEmoji icon="share" color="#a855f7" delay={2.1} x={18} />

        <div className="relative w-[78px] aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-[#ec4899] via-[#a855f7] to-[#3b82f6] ring-1 ring-white/15 shadow-[0_8px_24px_rgba(168,85,247,0.35)]">
          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/85 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="9" height="9" fill="#0a0d1f">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </div>
          </div>
          {/* View count overlay */}
          <div className="absolute bottom-1 left-1 right-1 flex items-center gap-1 text-[8.5px] font-bold text-white drop-shadow">
            <svg viewBox="0 0 24 24" width="8" height="8" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            <span className="tabular-nums">{format(count)}</span>
          </div>
          {/* LIVE */}
          <div className="absolute top-1 left-1 bg-[#ef4444] text-white text-[6.5px] font-bold px-1 py-px rounded-sm uppercase tracking-wide flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
            LIVE
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col items-start gap-1 max-w-[110px]">
        <div className="text-[8.5px] uppercase tracking-[0.22em] text-cyan/85">Views</div>
        <div className="font-display font-extrabold text-2xl text-cyan tabular-nums leading-none">
          {format(count)}
        </div>
        <div className="text-[8.5px] text-white/50 leading-tight mt-0.5">
          on a 2K-follower account
        </div>
        <div className="mt-1.5 inline-flex items-center gap-1 text-[8px] uppercase tracking-[0.16em] text-[#facc15]">
          <svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z" />
          </svg>
          Viral
        </div>
      </div>
    </div>
  );
}

function FloatEmoji({
  icon,
  color,
  delay,
  x,
}: {
  icon: "heart" | "comment" | "share";
  color: string;
  delay: number;
  x: number;
}) {
  const paths: Record<string, React.ReactNode> = {
    heart: (
      <path d="M12 21s-7-4.5-9-9.5a5.5 5.5 0 0 1 9-4.5 5.5 5.5 0 0 1 9 4.5c-2 5-9 9.5-9 9.5z" />
    ),
    comment: (
      <path d="M21 11.5a8.38 8.38 0 0 1-15 5L3 21l4.5-3a8.5 8.5 0 1 1 13.5-6.5z" />
    ),
    share: (
      <path d="M4 12v7h16v-7M16 6l-4-4-4 4M12 2v13" />
    ),
  };
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill={icon === "share" ? "none" : color}
      stroke={icon === "share" ? color : "none"}
      strokeWidth={icon === "share" ? 2 : 0}
      className="absolute pointer-events-none z-20"
      style={{ bottom: 6, left: `calc(50% + ${x}px - 6.5px)` }}
      initial={{ y: 0, opacity: 0, scale: 0.6 }}
      animate={{
        y: -78,
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1.1, 1, 0.9],
      }}
      transition={{
        duration: 2.6,
        delay,
        repeat: Infinity,
        repeatDelay: 0.4,
        ease: "easeOut",
      }}
    >
      {paths[icon]}
    </motion.svg>
  );
}

/* ──────────────────────────────────────────────────────────
 * 03 · Meta Ads — Audience funnel + ROAS
 * ────────────────────────────────────────────────────────── */
function MetaAdsGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const colors = [
    "#22c55e",
    "#facc15",
    "#ef4444",
    "#a855f7",
    "#3b82f6",
    "#ec4899",
    "#00c8e8",
  ];

  return (
    <div ref={ref} className="relative h-full p-4 flex flex-col justify-between">
      {/* Top badges */}
      <div className="flex items-center justify-between">
        <div className="bg-[#facc15]/15 text-[#facc15] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#facc15]/40 uppercase tracking-[0.16em]">
          ₹48 CPL
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-white/55">
          <span className="uppercase tracking-[0.16em]">ROAS</span>
          <span className="font-display font-extrabold text-[#22c55e] text-lg leading-none">
            4.2x
          </span>
        </div>
      </div>

      {/* Funnel */}
      <div className="flex items-center gap-2 mt-2">
        {/* Audience cloud */}
        <div className="flex-1 grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }).map((_, n) => (
            <motion.span
              key={n}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: colors[n % colors.length] }}
              animate={
                inView
                  ? {
                      x: [0, 18, 60],
                      opacity: [1, 1, 0],
                    }
                  : { x: 0, opacity: 1 }
              }
              transition={{
                duration: 2.8,
                delay: n * 0.04,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeIn",
              }}
            />
          ))}
        </div>

        {/* Funnel shape */}
        <svg
          viewBox="0 0 32 48"
          width="28"
          height="42"
          aria-hidden
          className="text-cyan/45"
        >
          <path
            d="M0 4 L32 4 L20 22 L20 44 L12 44 L12 22 Z"
            fill="currentColor"
          />
        </svg>

        {/* Leads tally */}
        <div className="flex flex-col items-center min-w-[42px]">
          <div className="font-display font-extrabold text-2xl text-[#22c55e] tabular-nums leading-none">
            314
          </div>
          <div className="text-[8px] uppercase tracking-[0.16em] text-white/45 mt-0.5">
            leads
          </div>
        </div>
      </div>

      {/* Bottom: spend → revenue bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between text-[9px] mb-1">
          <span className="text-white/45">₹15K spend</span>
          <span className="text-[#22c55e] font-semibold">₹64K revenue</span>
        </div>
        <div className="relative h-1.5 bg-white/8 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "20%" }}
            animate={inView ? { width: ["20%", "100%"] } : { width: "20%" }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut",
            }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#facc15] via-[#22c55e] to-cyan rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * 04 · AI Automation — Workflow pipeline
 * ────────────────────────────────────────────────────────── */
function AiAutomationGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });

  const nodes = [
    { label: "Lead", color: "#3b82f6", icon: "form" as const },
    { label: "Score", color: "#a855f7", icon: "ai" as const },
    { label: "Agent", color: "#ec4899", icon: "bot" as const },
    { label: "CRM", color: "#22c55e", icon: "check" as const },
  ];

  return (
    <div ref={ref} className="relative h-full px-4 flex items-center">
      <div className="relative flex items-center justify-between w-full">
        {/* Line */}
        <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-[#3b82f6]/40 via-[#ec4899]/40 to-[#22c55e]/40" />

        {/* Particles */}
        {inView &&
          Array.from({ length: 3 }).map((_, n) => (
            <motion.div
              key={n}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,200,232,0.9)]"
              initial={{ left: "10%", opacity: 0 }}
              animate={{
                left: ["10%", "90%"],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 2.8,
                delay: n * 0.9,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

        {nodes.map((node, n) => (
          <NodeBlock key={node.label} {...node} index={n} inView={inView} />
        ))}
      </div>
    </div>
  );
}

function renderNodeIcon(icon: "form" | "ai" | "bot" | "check", color: string) {
  switch (icon) {
    case "form":
      return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.3" />
        </svg>
      );
    case "bot":
      return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
  }
}

function NodeBlock({
  label,
  color,
  icon,
  index,
  inView,
}: {
  label: string;
  color: string;
  icon: "form" | "ai" | "bot" | "check";
  index: number;
  inView: boolean;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-1.5">
      <motion.div
        className="w-9 h-9 rounded-xl flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${color}1f, ${color}08)`,
          border: `1px solid ${color}55`,
        }}
        animate={
          inView
            ? {
                boxShadow: [
                  `0 0 0px ${color}00`,
                  `0 0 14px ${color}aa`,
                  `0 0 0px ${color}00`,
                ],
              }
            : {}
        }
        transition={{
          duration: 2.8,
          delay: index * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {renderNodeIcon(icon, color)}
      </motion.div>
      <span className="text-[8.5px] uppercase tracking-[0.18em] text-white/55 font-display">
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Service data + card
 * ────────────────────────────────────────────────────────── */
const services = [
  {
    number: "01",
    title: "SEO",
    bullets: ["Technical SEO", "Topical authority", "Content velocity"],
    copy: "Show up when your ideal clients are searching. We build your organic presence to generate consistent, high-intent leads.",
    tags: ["Technical SEO", "Content", "Local"],
    accent: "from-[#10b981]/15",
    Graphic: SeoGraphic,
  },
  {
    number: "02",
    title: "Social Media",
    bullets: ["Personal brand", "Viral reels", "Authority content"],
    copy: "Turn your social profile into a trust-building machine. Content that grows your audience and keeps them engaged until they're ready to buy.",
    tags: ["Reels", "Personal Brand", "Growth"],
    accent: "from-[#ec4899]/15",
    Graphic: SocialGraphic,
  },
  {
    number: "03",
    title: "Meta Ads",
    bullets: ["Lead-gen funnels", "Retargeting", "Creative testing"],
    copy: "Stop wasting spend on the wrong audience. Targeted campaigns that bring you qualified leads and maximize ROI.",
    tags: ["Lead Gen", "Retargeting", "Creative"],
    accent: "from-[#facc15]/12",
    Graphic: MetaAdsGraphic,
  },
  {
    number: "04",
    title: "AI Automation",
    bullets: ["CRM dashboards", "Email agents", "Custom workflows"],
    copy: "Work smarter, not harder. Custom AI tools that save your team's time, cut costs, and improve output — without hiring more people.",
    tags: ["CRM Dashboards", "Agents", "Workflows"],
    accent: "from-[#a855f7]/15",
    Graphic: AiAutomationGraphic,
  },
];

function ServiceCard({
  s,
  i,
}: {
  s: (typeof services)[number];
  i: number;
}) {
  const Graphic = s.Graphic;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
      className={`group relative rounded-3xl border border-white/10 bg-navy-soft bg-gradient-to-br ${s.accent} to-navy-soft overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/35 hover:shadow-[0_24px_60px_-20px_rgba(0,200,232,0.35)]`}
    >
      {/* Top: animated graphic */}
      <div className="relative h-44 md:h-48 bg-[#040519]/70 border-b border-white/8 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,200,232,0.1),transparent_60%)]"
        />
        <Graphic />
        <div className="absolute top-2.5 left-3.5 font-display font-extrabold text-[1.4rem] text-stroke-cream leading-none pointer-events-none">
          {s.number}
        </div>
      </div>

      {/* Bottom: content */}
      <div className="relative p-6 md:p-7">
        <h3 className="font-display font-bold text-2xl md:text-[1.75rem] tracking-tight">
          {s.title}
        </h3>

        <ul className="mt-4 space-y-1.5">
          {s.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-white/60 leading-relaxed">{s.copy}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {s.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] uppercase tracking-[0.18em] font-display font-semibold text-white/55 border border-white/15 rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover hint */}
        <div className="mt-5 flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.2em] font-display text-cyan opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 text-white">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type TileKind =
  | "video"
  | "graphic"
  | "screenshot"
  | "script"
  | "dashboard"
  | "workflow"
  | "ad";

/* ── Tiny icon set ─────────────────────────────────────────── */
function Icon({ kind, color, size = 22 }: { kind: TileKind; color: string; size?: number }) {
  const s = { fill: "none", stroke: color, strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "video":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><polygon points="9 7 9 17 17 12 9 7" fill={color} /></svg>;
    case "ad":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>;
    case "graphic":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m3 17 5-5 5 5 4-4 4 4" /></svg>;
    case "script":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></svg>;
    case "screenshot":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="m6 13 4-4 3 3 5-5" /></svg>;
    case "dashboard":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></svg>;
    case "workflow":
      return <svg viewBox="0 0 24 24" width={size} height={size} {...s}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="6" cy="18" r="2" /><path d="M8 6h8M18 8v8M16 18H8M6 16V8" /></svg>;
  }
}

const KIND_META: Record<TileKind, string> = {
  video: "Reel",
  graphic: "Design",
  screenshot: "Report",
  script: "Hook",
  dashboard: "Dashboard",
  workflow: "Workflow",
  ad: "Ad",
};

/* Shared empty-state surface used inside every frame's content area. */
function EmptySurface({ kind, accentHex }: { kind: TileKind; accentHex: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accentHex}1f 0%, transparent 55%), radial-gradient(circle at 80% 90%, ${accentHex}12 0%, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(10,13,31,0.06) 1px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon kind={kind} color={accentHex} size={26} />
      </div>
    </div>
  );
}

/* Exhibition caption shown under framed tiles. */
function Caption({ kind, accentHex }: { kind: TileKind; accentHex: string; i?: number }) {
  return (
    <div className="mt-2.5 flex items-center gap-1.5 px-0.5">
      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accentHex }} />
      <span className="text-[0.55rem] uppercase tracking-[0.18em] font-display font-semibold text-ink/40">
        {KIND_META[kind]} · Coming soon
      </span>
    </div>
  );
}

const tileMotion = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px" } as const,
  transition: { duration: 0.6, delay: i * 0.05, ease: EASE },
});

const baseFrame =
  "group relative rounded-2xl overflow-hidden border border-ink/[0.08] bg-white shadow-[0_10px_30px_-16px_rgba(2,5,22,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(2,5,22,0.28)] hover:border-ink/[0.14]";

/* ── 1 · Phone frame (video) ───────────────────────────────── */
function PhoneTile({ accentHex, i }: { accentHex: string; i: number }) {
  return (
    <motion.div {...tileMotion(i)}>
      <div className={`${baseFrame} aspect-[9/16] !rounded-[26px] bg-ink p-1.5`}>
        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#070920]">
          <EmptySurface kind="video" accentHex={accentHex} />
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black/70 z-10" />
          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#0a0d1f"><path d="M8 5v14l11-7L8 5z" /></svg>
            </div>
          </div>
          {/* Bottom meta */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-white/30" />
            <span className="h-1.5 flex-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
      <Caption kind="video" accentHex={accentHex} i={i} />
    </motion.div>
  );
}

/* ── 2 · Bento graphic tile ────────────────────────────────── */
const BENTO_SPANS = [
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
];

function GraphicTile({ accentHex, i }: { accentHex: string; i: number }) {
  return (
    <motion.div {...tileMotion(i)} className={`${baseFrame} ${BENTO_SPANS[i % BENTO_SPANS.length]}`}>
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] z-10"
        style={{ background: `linear-gradient(to right, transparent, ${accentHex}, transparent)`, opacity: 0.55 }}
      />
      <EmptySurface kind="graphic" accentHex={accentHex} />
    </motion.div>
  );
}

/* ── 3 · Browser-chrome frame (screenshot) ─────────────────── */
function BrowserTile({ accentHex, i, app }: { accentHex: string; i: number; app?: boolean }) {
  return (
    <motion.div {...tileMotion(i)}>
      <div className={`${baseFrame} aspect-[16/10]`}>
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-3 h-8 border-b border-ink/[0.07] bg-ink/[0.02]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 flex-1 h-3.5 rounded-full bg-ink/[0.05] max-w-[60%]" />
          <span className="ml-auto text-[0.5rem] uppercase tracking-[0.16em] font-display font-bold" style={{ color: accentHex }}>
            {app ? "App" : "Live"}
          </span>
        </div>
        {/* Body */}
        <div className="relative" style={{ height: "calc(100% - 2rem)" }}>
          {app ? (
            <div className="absolute inset-0 flex">
              <div className="w-9 border-r border-ink/[0.06] bg-ink/[0.015] flex flex-col items-center gap-2 py-3">
                {[0, 1, 2].map((n) => (
                  <span key={n} className="w-4 h-4 rounded" style={{ backgroundColor: n === 0 ? `${accentHex}55` : "rgba(10,13,31,0.06)" }} />
                ))}
              </div>
              <div className="flex-1"><EmptySurface kind="dashboard" accentHex={accentHex} /></div>
            </div>
          ) : (
            <EmptySurface kind="screenshot" accentHex={accentHex} />
          )}
        </div>
      </div>
      <Caption kind={app ? "dashboard" : "screenshot"} accentHex={accentHex} i={i} />
    </motion.div>
  );
}

/* ── 4 · Workflow node tile ────────────────────────────────── */
function WorkflowTile({ accentHex, i }: { accentHex: string; i: number }) {
  const nodes = [
    { x: 18, y: 30 },
    { x: 50, y: 18 },
    { x: 50, y: 50 },
    { x: 82, y: 34 },
  ];
  return (
    <motion.div {...tileMotion(i)}>
      <div className={`${baseFrame} aspect-[16/9]`}>
        <div className="flex items-center gap-1.5 px-3 h-8 border-b border-ink/[0.07] bg-ink/[0.02]">
          <Icon kind="workflow" color={accentHex} size={13} />
          <span className="text-[0.5rem] uppercase tracking-[0.18em] font-display font-bold text-ink/45">Automation flow</span>
          <span className="ml-auto flex items-center gap-1 text-[0.5rem] uppercase tracking-[0.16em] font-display font-bold" style={{ color: accentHex }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
            Running
          </span>
        </div>
        <div className="relative" style={{ height: "calc(100% - 2rem)" }}>
          <EmptySurface kind="workflow" accentHex={accentHex} />
          <svg viewBox="0 0 100 68" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <path d={`M${nodes[0].x},${nodes[0].y} L${nodes[1].x},${nodes[1].y} M${nodes[0].x},${nodes[0].y} L${nodes[2].x},${nodes[2].y} M${nodes[1].x},${nodes[1].y} L${nodes[3].x},${nodes[3].y} M${nodes[2].x},${nodes[2].y} L${nodes[3].x},${nodes[3].y}`} stroke={accentHex} strokeWidth="0.6" strokeOpacity="0.4" fill="none" strokeDasharray="2 2" />
            {nodes.map((n, idx) => (
              <circle key={idx} cx={n.x} cy={n.y} r="3.5" fill="#fff" stroke={accentHex} strokeWidth="1.2" />
            ))}
          </svg>
        </div>
      </div>
      <Caption kind="workflow" accentHex={accentHex} i={i} />
    </motion.div>
  );
}

/* ── 5 · Ad card tile ──────────────────────────────────────── */
function AdTile({ accentHex, i }: { accentHex: string; i: number }) {
  return (
    <motion.div {...tileMotion(i)}>
      <div className={`${baseFrame} flex flex-col`}>
        {/* Post header */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <span className="w-7 h-7 rounded-full" style={{ background: `linear-gradient(135deg, ${accentHex}, ${accentHex}66)` }} />
          <div className="flex flex-col gap-1">
            <span className="h-2 w-16 rounded-full bg-ink/15" />
            <span className="text-[0.5rem] uppercase tracking-[0.14em] font-display font-semibold text-ink/40">Sponsored</span>
          </div>
        </div>
        {/* Creative */}
        <div className="relative aspect-[4/3] border-y border-ink/[0.06]">
          <EmptySurface kind="ad" accentHex={accentHex} />
        </div>
        {/* CTA bar */}
        <div className="flex items-center justify-between px-3 py-2.5">
          <span className="h-2 w-20 rounded-full bg-ink/12" />
          <span
            className="text-[0.55rem] uppercase tracking-[0.14em] font-display font-bold rounded px-2.5 py-1"
            style={{ color: accentHex, backgroundColor: `${accentHex}14` }}
          >
            Learn More
          </span>
        </div>
      </div>
      <Caption kind="ad" accentHex={accentHex} i={i} />
    </motion.div>
  );
}

/* ── 6 · Script note-card ──────────────────────────────────── */
const SCRIPT_PARTS = ["Hook", "Retention", "CTA"];

function ScriptTile({ accentHex, i }: { accentHex: string; i: number }) {
  return (
    <motion.div {...tileMotion(i)}>
      <div className={`${baseFrame} aspect-[4/5] flex flex-col`}>
        {/* Tab corner */}
        <span aria-hidden className="absolute top-0 right-5 w-8 h-3 rounded-b-md" style={{ backgroundColor: accentHex, opacity: 0.85 }} />
        <div className="flex-1 p-5 flex flex-col">
          <span className="text-[0.55rem] uppercase tracking-[0.22em] font-display font-bold mb-3" style={{ color: accentHex }}>
            Script · 0{i + 1}
          </span>
          {/* Placeholder hook line */}
          <div className="space-y-2 mb-5">
            <span className="block h-3 rounded-full bg-ink/15 w-[90%]" />
            <span className="block h-3 rounded-full bg-ink/15 w-[70%]" />
          </div>
          {/* Beats */}
          <div className="mt-auto space-y-2.5">
            {SCRIPT_PARTS.map((part) => (
              <div key={part} className="flex items-center gap-2">
                <span className="text-[0.5rem] uppercase tracking-[0.14em] font-display font-bold w-16 flex-shrink-0" style={{ color: `${accentHex}` }}>
                  {part}
                </span>
                <span className="h-1.5 flex-1 rounded-full bg-ink/[0.08]" />
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 pb-4 flex items-center gap-2 border-t border-ink/[0.06] pt-3">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={accentHex} strokeWidth="2.5"><polyline points="18 15 12 9 6 15" /></svg>
          <span className="text-[0.55rem] uppercase tracking-[0.16em] font-display font-semibold text-ink/40">Top performer · Coming soon</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Grid dispatcher ───────────────────────────────────────── */
export function MediaGrid({ kind, accentHex, count }: { kind: TileKind; accentHex: string; count?: number }) {
  if (kind === "graphic") {
    const n = count ?? 6;
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] md:auto-rows-[150px] gap-4 md:gap-5">
        {Array.from({ length: n }).map((_, i) => (
          <GraphicTile key={i} accentHex={accentHex} i={i} />
        ))}
      </div>
    );
  }

  if (kind === "video") {
    const n = count ?? 4;
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {Array.from({ length: n }).map((_, i) => (
          <PhoneTile key={i} accentHex={accentHex} i={i} />
        ))}
      </div>
    );
  }

  if (kind === "ad") {
    const n = count ?? 4;
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {Array.from({ length: n }).map((_, i) => (
          <AdTile key={i} accentHex={accentHex} i={i} />
        ))}
      </div>
    );
  }

  if (kind === "script") {
    const n = count ?? 4;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {Array.from({ length: n }).map((_, i) => (
          <ScriptTile key={i} accentHex={accentHex} i={i} />
        ))}
      </div>
    );
  }

  if (kind === "workflow") {
    const n = count ?? 4;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {Array.from({ length: n }).map((_, i) => (
          <WorkflowTile key={i} accentHex={accentHex} i={i} />
        ))}
      </div>
    );
  }

  // screenshot + dashboard → browser chrome
  const n = count ?? 4;
  const app = kind === "dashboard";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {Array.from({ length: n }).map((_, i) => (
        <BrowserTile key={i} accentHex={accentHex} i={i} app={app} />
      ))}
    </div>
  );
}

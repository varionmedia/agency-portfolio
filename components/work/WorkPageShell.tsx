"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

export type TileKind =
  | "video"
  | "graphic"
  | "screenshot"
  | "script"
  | "dashboard"
  | "workflow"
  | "ad";

export type WorkSubcategory = {
  id: string;
  title: string;
  description: string;
  kind: TileKind;
  count?: number;
};

export type WorkPageConfig = {
  slug: string;
  index: string;
  title: string;
  positioning: string;
  accentHex: string;
  accentLabel: string;
  subcategories: WorkSubcategory[];
  nextService?: { label: string; href: string };
};

const KIND_RATIO: Record<TileKind, string> = {
  video: "aspect-[9/16]",
  graphic: "aspect-square",
  screenshot: "aspect-[16/10]",
  script: "aspect-[4/5]",
  dashboard: "aspect-[16/10]",
  workflow: "aspect-[16/9]",
  ad: "aspect-[4/5]",
};

const KIND_COLS: Record<TileKind, string> = {
  video: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  graphic: "grid-cols-2 md:grid-cols-3",
  screenshot: "grid-cols-1 md:grid-cols-2",
  script: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  dashboard: "grid-cols-1 md:grid-cols-2",
  workflow: "grid-cols-1 md:grid-cols-2",
  ad: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

function KindIcon({ kind, color }: { kind: TileKind; color: string }) {
  const stroke = { fill: "none", stroke: color, strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "video":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <polygon points="9 7 9 17 17 12 9 7" fill={color} />
        </svg>
      );
    case "ad":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <circle cx="7" cy="7" r="0.5" fill={color} />
        </svg>
      );
    case "graphic":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m3 17 5-5 5 5 4-4 4 4" />
        </svg>
      );
    case "script":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h6" />
        </svg>
      );
    case "screenshot":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="m6 13 4-4 3 3 5-5" />
        </svg>
      );
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" {...stroke}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="6" cy="18" r="2" />
          <path d="M8 6h8M18 8v8M16 18H8M6 16V8" />
        </svg>
      );
  }
}

function PlaceholderTile({ kind, accentHex, i }: { kind: TileKind; accentHex: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
      className={`group relative ${KIND_RATIO[kind]} rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.025] transition-all duration-500 hover:border-white/15 hover:-translate-y-1`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accentHex}1f 0%, transparent 55%), radial-gradient(circle at 80% 90%, ${accentHex}14 0%, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "160px 160px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70">
        <KindIcon kind={kind} color={accentHex} />
        <span className="font-display text-[0.6rem] uppercase tracking-[0.22em] text-white/40">
          Coming soon
        </span>
      </div>
      <span className="absolute top-3 left-3 text-[0.55rem] uppercase tracking-[0.2em] font-display font-bold text-white/35">
        0{i + 1}
      </span>
    </motion.div>
  );
}

function SubcategorySection({ sub, accentHex }: { sub: WorkSubcategory; accentHex: string }) {
  const count = sub.count ?? (sub.kind === "screenshot" || sub.kind === "dashboard" || sub.kind === "workflow" ? 4 : 6);
  return (
    <section id={sub.id} className="scroll-mt-24">
      <FadeUp>
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white">
              {sub.title}
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/55 leading-relaxed">
              {sub.description}
            </p>
          </div>
          <span
            className="hidden md:inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] font-display font-semibold rounded-full px-3 py-1.5 border"
            style={{ color: accentHex, borderColor: `${accentHex}55`, backgroundColor: `${accentHex}10` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
            Curating
          </span>
        </div>
      </FadeUp>

      <div className={`grid ${KIND_COLS[sub.kind]} gap-4 md:gap-5`}>
        {Array.from({ length: count }).map((_, i) => (
          <PlaceholderTile key={i} kind={sub.kind} accentHex={accentHex} i={i} />
        ))}
      </div>
    </section>
  );
}

export default function WorkPageShell({ config }: { config: WorkPageConfig }) {
  return (
    <div className="relative bg-navy text-white">
      {/* ── Header strip ────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-white/5">
        <div
          aria-hidden
          className="absolute inset-0 v-lines opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 80% at 80% 0%, ${config.accentHex}1a 0%, transparent 70%), radial-gradient(40% 60% at 0% 100%, ${config.accentHex}10 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <FadeUp>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] font-display font-semibold text-white/50 hover:text-cyan transition-colors group"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
          </FadeUp>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <FadeUp delay={0.05}>
                <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs mb-5" style={{ color: config.accentHex }}>
                  <span className="h-px w-10" style={{ backgroundColor: `${config.accentHex}99` }} />
                  {config.index} · {config.accentLabel}
                </div>
              </FadeUp>
              <WordReveal
                as="h1"
                text={config.title}
                className="font-display font-extrabold text-5xl md:text-7xl leading-[1.02] tracking-tight"
              />
            </div>
            <FadeUp delay={0.18} className="lg:col-span-4">
              <p className="text-white/65 text-base md:text-lg leading-relaxed">
                {config.positioning}
              </p>
            </FadeUp>
          </div>

          {/* Sub-category jump nav */}
          <FadeUp delay={0.25}>
            <nav className="mt-12 flex flex-wrap gap-2.5">
              {config.subcategories.map((sub) => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  className="text-[0.65rem] uppercase tracking-[0.2em] font-display font-semibold text-white/65 border border-white/15 rounded-full px-3 py-1.5 hover:text-navy transition-colors"
                  style={{
                    // hover bg via CSS variable trick — simple bg on hover
                  }}
                >
                  {sub.title}
                </a>
              ))}
            </nav>
          </FadeUp>
        </div>
      </header>

      {/* ── Sub-category sections ───────────────────────────── */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
          {config.subcategories.map((sub) => (
            <SubcategorySection key={sub.id} sub={sub} accentHex={config.accentHex} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(50% 80% at 50% 0%, ${config.accentHex}14 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 v-lines opacity-50" aria-hidden />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 text-center">
          <FadeUp>
            <p className="font-display uppercase tracking-[0.28em] text-xs text-white/50 mb-6">
              Ready when you are
            </p>
          </FadeUp>
          <WordReveal
            as="h2"
            text="Let's build your upward trajectory."
            className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight"
          />
          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-6 py-3.5 text-sm uppercase tracking-[0.18em] font-display font-bold hover:bg-white transition-colors"
                >
                  Book a Free Strategy Call
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </Magnetic>
              {config.nextService && (
                <Link
                  href={config.nextService.href}
                  className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] font-display font-semibold text-white/65 hover:text-cyan transition-colors group"
                >
                  Next · {config.nextService.label}
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

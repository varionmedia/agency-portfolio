"use client";

import Link from "next/link";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import MarqueeStrip from "@/components/work/MarqueeStrip";
import { MediaGrid } from "@/components/work/MediaTile";
import {
  SectionHeading,
  VideoSection,
  GraphicsSection,
  ScriptsSection,
  GallerySection,
} from "@/components/work/WorkSections";
import type { WorkPageConfig, WorkSubcategory } from "@/components/work/types";

export type { WorkPageConfig, WorkSubcategory } from "@/components/work/types";

const DOT_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(10, 13, 31, 0.07) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

/* Framed (default) section — medium-framed placeholder grid. */
function FramedSection({ sub, accentHex }: { sub: WorkSubcategory; accentHex: string }) {
  return (
    <section id={sub.id} className="scroll-mt-28 relative">
      <FadeUp>
        <SectionHeading
          accentHex={accentHex}
          eyebrow="Selected work"
          title={sub.title}
          description={sub.description}
        />
      </FadeUp>
      <MediaGrid kind={sub.kind ?? "graphic"} accentHex={accentHex} count={sub.count} />
    </section>
  );
}

function WorkSection({ sub, accentHex }: { sub: WorkSubcategory; accentHex: string }) {
  switch (sub.layout) {
    case "video":
      return <VideoSection sub={sub} accentHex={accentHex} />;
    case "graphics":
      return <GraphicsSection sub={sub} accentHex={accentHex} />;
    case "scripts":
      return <ScriptsSection sub={sub} accentHex={accentHex} />;
    case "gallery":
      return <GallerySection sub={sub} accentHex={accentHex} />;
    default:
      return <FramedSection sub={sub} accentHex={accentHex} />;
  }
}

export default function WorkPageShell({ config }: { config: WorkPageConfig }) {
  const hasHero = Boolean(config.heroVisual);
  const marqueeItems = config.marqueeItems ?? config.subcategories.map((s) => s.title);

  return (
    <div className="relative bg-cream text-ink">
      {/* ══ DARK HERO VIEWPORT ══════════════════════════════════ */}
      <header className="relative overflow-hidden bg-navy text-white">
        {/* Vertical line grid */}
        <div className="absolute inset-0 v-lines opacity-80" aria-hidden />
        {/* Accent corner glows */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(45% 70% at 100% 0%, ${config.accentHex}30 0%, transparent 70%), radial-gradient(40% 60% at 0% 100%, ${config.accentHex}1a 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

        {/* Marquee inside the dark viewport */}
        <div className="relative">
          <MarqueeStrip items={marqueeItems} accentHex={config.accentHex} dark />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-10 md:pt-12 pb-16 md:pb-24">
          {/* Breadcrumb */}
          <FadeUp>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] font-display font-semibold text-white/55 hover:text-white transition-colors group"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
          </FadeUp>

          {/* Eyebrow */}
          <FadeUp delay={0.05}>
            <div
              className="mt-8 md:mt-10 flex items-center gap-3 font-display uppercase tracking-[0.3em] text-[0.7rem] md:text-xs font-bold"
              style={{ color: config.accentHex }}
            >
              <span className="h-px w-12" style={{ backgroundColor: `${config.accentHex}cc` }} />
              Vol. {config.index} · {config.accentLabel}
            </div>
          </FadeUp>

          {/* Title + hero */}
          <div className="mt-6 md:mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className={hasHero ? "lg:col-span-7" : "lg:col-span-9"}>
              <WordReveal
                as="h1"
                text={config.title}
                className="font-display font-extrabold text-[2.75rem] md:text-6xl lg:text-[5rem] leading-[1.0] tracking-[-0.02em] text-white"
              />
              <FadeUp delay={0.18}>
                <p className="mt-7 md:mt-9 max-w-xl text-white/65 text-base md:text-lg leading-relaxed">
                  {config.positioning}
                </p>
              </FadeUp>
            </div>

            {hasHero && (
              <FadeUp delay={0.3} className="lg:col-span-5">
                <div className="relative">{config.heroVisual}</div>
              </FadeUp>
            )}
          </div>

          {/* Inside nav */}
          <FadeUp delay={0.32}>
            <div className="mt-12 md:mt-16 flex items-center gap-4 flex-wrap">
              <span className="font-display uppercase tracking-[0.22em] text-[0.6rem] text-white/40 font-bold">
                Inside
              </span>
              <span className="h-px flex-1 min-w-12 bg-white/15" />
              <nav className="flex flex-wrap gap-2.5">
                {config.subcategories.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="group inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] font-display font-semibold text-white/70 bg-white/[0.06] border border-white/15 rounded-full px-3.5 py-1.5 hover:bg-white/[0.12] hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.accentHex }} />
                    {sub.title}
                  </a>
                ))}
              </nav>
            </div>
          </FadeUp>
        </div>
      </header>

      {/* ══ LIGHT CONTENT ═══════════════════════════════════════ */}
      <div className="relative">
        <div aria-hidden className="absolute inset-0 opacity-60" style={DOT_GRID_STYLE} />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(50% 30% at 100% 12%, ${config.accentHex}0d 0%, transparent 65%), radial-gradient(50% 40% at 0% 85%, ${config.accentHex}08 0%, transparent 70%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
          {config.subcategories.map((sub) => (
            <WorkSection key={sub.id} sub={sub} accentHex={config.accentHex} />
          ))}
        </div>
      </div>

      {/* ══ DARK CTA ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy text-white border-t border-white/5">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `radial-gradient(50% 80% at 50% 0%, ${config.accentHex}1f 0%, transparent 70%)` }}
        />
        <div className="absolute inset-0 v-lines opacity-50" aria-hidden />
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />
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

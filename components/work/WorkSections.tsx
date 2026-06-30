"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FadeUp } from "@/components/ui/Reveal";
import ReelPlayer from "@/components/work/ReelPlayer";
import type {
  GraphicGroup,
  GraphicItem,
  GraphicRatio,
  ScriptItem,
  VideoItem,
  WorkSubcategory,
} from "@/components/work/types";

const EASE = [0.22, 1, 0.36, 1] as const;

const RATIO_CLASS: Record<GraphicRatio, string> = {
  "9/16": "aspect-[9/16]",
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-[16/9]",
};

/* Width of one carousel item — 4 across on desktop, fewer on small screens. */
const ITEM_WIDTH =
  "snap-start shrink-0 w-[72%] sm:w-[44%] lg:w-[calc((100%-3rem)/4)]";

/* ──────────────────────────────────────────────────────────
 * Shared section heading (no giant numerals)
 * ────────────────────────────────────────────────────────── */
export function SectionHeading({
  accentHex,
  eyebrow,
  title,
  description,
  right,
}: {
  accentHex: string;
  eyebrow: string;
  title: string;
  description?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8" style={{ backgroundColor: `${accentHex}aa` }} />
          <span
            className="font-display uppercase tracking-[0.24em] text-[0.65rem] font-bold"
            style={{ color: accentHex }}
          >
            {eyebrow}
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm md:text-base text-ink/60 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {right && <div className="flex-shrink-0">{right}</div>}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Horizontal carousel — track + prev/next arrows
 * ────────────────────────────────────────────────────────── */
function ArrowButton({
  dir,
  accentHex,
  onClick,
  className = "",
}: {
  dir: "prev" | "next";
  accentHex: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className={`group w-10 h-10 rounded-full bg-white border border-ink/12 shadow-[0_8px_22px_-8px_rgba(2,5,22,0.4)] flex items-center justify-center text-ink/70 hover:text-white transition-colors ${className}`}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentHex)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

function MediaCarousel({
  accentHex,
  children,
}: {
  accentHex: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Infinite arrows: next past the end wraps to the start, prev past the
  // start wraps to the end.
  const by = (d: number) => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (d > 0 && el.scrollLeft >= max - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (d < 0 && el.scrollLeft <= 8) {
      el.scrollTo({ left: max, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: d * el.clientWidth * 0.85, behavior: "smooth" });
  };
  return (
    <div className="relative">
      <ArrowButton dir="prev" accentHex={accentHex} onClick={() => by(-1)} className="hidden sm:flex absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20" />
      <ArrowButton dir="next" accentHex={accentHex} onClick={() => by(1)} className="hidden sm:flex absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20" />
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-1 px-1"
      >
        {children}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Tiles
 * ────────────────────────────────────────────────────────── */
function tileMotion(i: number) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-6% 0px" } as const,
    transition: { duration: 0.55, delay: (i % 4) * 0.06, ease: EASE },
  };
}

function VideoTile({
  video,
  accentHex,
  i,
  ratio = "9/16",
  autoplay = false,
}: {
  video?: VideoItem;
  accentHex: string;
  i: number;
  ratio?: "9/16" | "16/9";
  autoplay?: boolean;
}) {
  return (
    <motion.div {...tileMotion(i)}>
      <ReelPlayer youtubeId={video?.youtubeId} accentHex={accentHex} ratio={ratio} autoplay={autoplay} />
    </motion.div>
  );
}

function GraphicTile({
  ratio,
  accentHex,
  src,
  alt,
  i,
}: {
  ratio: GraphicRatio;
  accentHex: string;
  src?: string;
  alt?: string;
  i: number;
}) {
  return (
    <motion.div {...tileMotion(i)} className={ITEM_WIDTH}>
      <div className={`group relative ${RATIO_CLASS[ratio]} rounded-2xl overflow-hidden border border-ink/[0.08] bg-white shadow-[0_12px_30px_-18px_rgba(2,5,22,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_44px_-20px_rgba(2,5,22,0.3)]`}>
        {src ? (
          <Image src={src} alt={alt ?? "Graphic"} fill sizes="(max-width:768px) 60vw, 25vw" className="object-cover" />
        ) : (
          <>
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: `linear-gradient(to right, transparent, ${accentHex}, transparent)`, opacity: 0.55 }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: `radial-gradient(circle at 30% 22%, ${accentHex}1f 0%, transparent 60%), radial-gradient(circle at 80% 88%, ${accentHex}12 0%, transparent 60%)` }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{ backgroundImage: "radial-gradient(circle, rgba(10,13,31,0.06) 1px, transparent 1px)", backgroundSize: "15px 15px" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke={accentHex} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m3 17 5-5 5 5 4-4 4 4" />
              </svg>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Video section
 * ────────────────────────────────────────────────────────── */
export function VideoSection({ sub, accentHex }: { sub: WorkSubcategory; accentHex: string }) {
  const videos: VideoItem[] = sub.videos ?? Array.from({ length: sub.videoCount ?? 12 }).map(() => ({}));
  const landscape: VideoItem[] =
    sub.landscapeVideos ??
    (sub.landscapeVideoCount ? Array.from({ length: sub.landscapeVideoCount }).map(() => ({})) : []);
  return (
    <section id={sub.id} className="scroll-mt-28 relative">
      <FadeUp>
        <SectionHeading accentHex={accentHex} eyebrow="Short-form · Reels" title={sub.title} description={sub.description} />
      </FadeUp>

      {/* Arrow carousel — loops infinitely (next past the last wraps to the
          first). Only the first reel autoplays; the rest are click-to-play. */}
      <MediaCarousel accentHex={accentHex}>
        {videos.map((v, i) => (
          <div key={i} className={ITEM_WIDTH}>
            <VideoTile video={v} accentHex={accentHex} i={i} ratio="9/16" autoplay={i === 0} />
          </div>
        ))}
      </MediaCarousel>

      {landscape.length > 0 && (
        <div className="mt-14 md:mt-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-semibold text-base md:text-lg text-ink">Long-form &amp; Landscape</span>
            <span
              className="text-[0.6rem] uppercase tracking-[0.18em] font-display font-bold rounded px-2 py-0.5"
              style={{ color: accentHex, backgroundColor: `${accentHex}14` }}
            >
              16:9
            </span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {landscape.map((v, i) => (
              <VideoTile key={i} video={v} accentHex={accentHex} i={i} ratio="16/9" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
 * Graphics section — one carousel per ratio
 * ────────────────────────────────────────────────────────── */
function GraphicRatioRow({ group, accentHex }: { group: GraphicGroup; accentHex: string }) {
  const items: GraphicItem[] = group.items ?? Array.from({ length: group.count ?? 8 }).map(() => ({}));
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="font-display font-semibold text-base md:text-lg text-ink">{group.label}</span>
        <span className="text-[0.6rem] uppercase tracking-[0.18em] font-display font-bold rounded px-2 py-0.5" style={{ color: accentHex, backgroundColor: `${accentHex}14` }}>
          {group.ratio.replace("/", ":")}
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>
      <MediaCarousel accentHex={accentHex}>
        {items.map((it, i) => (
          <GraphicTile key={i} ratio={group.ratio} accentHex={accentHex} src={it.src} alt={it.alt} i={i} />
        ))}
      </MediaCarousel>
    </div>
  );
}

export function GraphicsSection({ sub, accentHex }: { sub: WorkSubcategory; accentHex: string }) {
  const groups = sub.graphicGroups ?? [];
  return (
    <section id={sub.id} className="scroll-mt-28 relative">
      <FadeUp>
        <SectionHeading accentHex={accentHex} eyebrow="Design · By format" title={sub.title} description={sub.description} />
      </FadeUp>
      <div className="space-y-14 md:space-y-16 mt-14">
        {groups.map((g) => (
          <GraphicRatioRow key={g.id} group={g} accentHex={accentHex} />
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
 * Scripts section — card preview + in-page modal
 * ────────────────────────────────────────────────────────── */
const SCRIPT_BEATS = ["Hook", "Retention", "CTA"];

function ScriptCard({ script, accentHex, i, onOpen }: { script?: ScriptItem; accentHex: string; i: number; onOpen: () => void }) {
  const hasContent = Boolean(script?.docUrl || script?.body?.length || script?.hook);
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      {...tileMotion(i)}
      className="group relative text-left aspect-[4/5] flex flex-col rounded-2xl overflow-hidden border border-ink/[0.08] bg-white shadow-[0_12px_30px_-18px_rgba(2,5,22,0.22)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(2,5,22,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <span aria-hidden className="absolute top-0 right-5 w-8 h-3 rounded-b-md" style={{ backgroundColor: accentHex, opacity: 0.85 }} />
      <div className="flex-1 p-5 flex flex-col">
        <span className="text-[0.55rem] uppercase tracking-[0.22em] font-display font-bold mb-3" style={{ color: accentHex }}>
          Script · 0{i + 1}
        </span>
        {script?.hook ? (
          <p className="font-display font-semibold text-ink text-[0.95rem] leading-snug mb-4 line-clamp-4">
            “{script.hook}”
          </p>
        ) : (
          <div className="space-y-2 mb-5">
            <span className="block h-3 rounded-full bg-ink/15 w-[90%]" />
            <span className="block h-3 rounded-full bg-ink/15 w-[70%]" />
          </div>
        )}
        <div className="mt-auto space-y-2.5">
          {SCRIPT_BEATS.map((part) => (
            <div key={part} className="flex items-center gap-2">
              <span className="text-[0.5rem] uppercase tracking-[0.14em] font-display font-bold w-16 flex-shrink-0" style={{ color: accentHex }}>
                {part}
              </span>
              <span className="h-1.5 flex-1 rounded-full bg-ink/[0.08]" />
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-4 pt-3 flex items-center justify-between border-t border-ink/[0.06]">
        <span className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.16em] font-display font-bold" style={{ color: accentHex }}>
          {hasContent ? "Read full script" : "Coming soon"}
          {hasContent && (
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          )}
        </span>
        {script?.metric && (
          <span className="text-[0.6rem] font-display font-bold text-ink/45">{script.metric}</span>
        )}
      </div>
    </motion.button>
  );
}

function ScriptModal({ script, accentHex, onClose }: { script: ScriptItem; accentHex: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        role="dialog"
        aria-modal="true"
        aria-label={script.title}
        className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl bg-cream overflow-hidden shadow-[0_40px_90px_-30px_rgba(2,5,22,0.6)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-ink/10 bg-white">
          <div className="min-w-0">
            <span className="text-[0.55rem] uppercase tracking-[0.22em] font-display font-bold" style={{ color: accentHex }}>
              Script
            </span>
            <h3 className="font-display font-bold text-lg text-ink truncate">{script.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-9 h-9 rounded-full bg-ink/[0.06] hover:bg-ink/12 text-ink flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {script.docUrl ? (
            <iframe src={script.docUrl} title={script.title} className="w-full h-[70vh] bg-white" />
          ) : (
            <div className="px-6 md:px-8 py-6 md:py-8">
              {script.hook && (
                <p className="font-display font-bold text-xl md:text-2xl text-ink leading-snug mb-6">
                  “{script.hook}”
                </p>
              )}
              {script.body?.length ? (
                <div className="space-y-4 text-ink/75 leading-relaxed">
                  {script.body.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-ink/15 bg-white/60 p-8 text-center">
                  <p className="font-display font-semibold text-ink/70">Full script coming soon</p>
                  <p className="text-sm text-ink/50 mt-1">
                    We&apos;ll drop the complete hook, retention beats, and CTA here.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ScriptsSection({ sub, accentHex }: { sub: WorkSubcategory; accentHex: string }) {
  const scripts: ScriptItem[] =
    sub.scripts ?? Array.from({ length: sub.scriptCount ?? 4 }).map((_, i) => ({ title: `Top Performer 0${i + 1}` }));
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id={sub.id} className="scroll-mt-28 relative">
      <FadeUp>
        <SectionHeading accentHex={accentHex} eyebrow="Copy · Hooks" title={sub.title} description={sub.description} />
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {scripts.map((s, i) => (
          <ScriptCard key={i} script={s} accentHex={accentHex} i={i} onOpen={() => setOpen(i)} />
        ))}
      </div>
      {open !== null && (
        <ScriptModal script={scripts[open]} accentHex={accentHex} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}

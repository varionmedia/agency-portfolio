"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Magnetic from "@/components/ui/Magnetic";
import { whatsappHref, WhatsAppIcon } from "@/components/ui/whatsapp";
import { SeoScene, SocialScene, MetaScene, AiScene, type SceneProps } from "@/components/hero/HeroScenes";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES: {
  id: string;
  label: string;
  accent: string;
  accent2: string;
  blurb: string;
  Scene: (p: SceneProps) => React.ReactElement;
}[] = [
  { id: "seo", label: "SEO", accent: "#10b981", accent2: "#00c8e8", blurb: "Rank where your clients are searching.", Scene: SeoScene },
  { id: "social", label: "Social Media", accent: "#ec4899", accent2: "#a855f7", blurb: "Content that grows and converts.", Scene: SocialScene },
  { id: "meta", label: "Meta Ads", accent: "#facc15", accent2: "#f97316", blurb: "Spend that turns into pipeline.", Scene: MetaScene },
  { id: "ai", label: "AI Automation", accent: "#a855f7", accent2: "#3b82f6", blurb: "Tools that do the busywork.", Scene: AiScene },
];

export default function Hero() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  // Render the scene only in the slot that's actually visible (and only after
  // mount) so we never animate two scenes at once / on initial paint.
  const [isLg, setIsLg] = useState<boolean | null>(null);
  // Pause the scene's (many, infinite) animations + auto-cycle once the hero is
  // fully scrolled out of view — they otherwise keep running for the whole page
  // and compete with the smooth-scroll loop. Invisible to the user.
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Cursor tracking — subtle parallax on the scene
  const nx = useMotionValue(0.5);
  const ny = useMotionValue(0.5);
  const sNx = useSpring(nx, { stiffness: 60, damping: 20 });
  const sNy = useSpring(ny, { stiffness: 60, damping: 20 });
  const stageX = useTransform(sNx, [0, 1], [18, -18]);
  const stageY = useTransform(sNy, [0, 1], [12, -12]);

  function onMove(e: React.PointerEvent) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    nx.set((e.clientX - r.left) / r.width);
    ny.set((e.clientY - r.top) / r.height);
  }

  useEffect(() => {
    if (locked || reduce || !inView) return;
    const id = setInterval(() => setActive((a) => (a + 1) % SERVICES.length), 3600);
    return () => clearInterval(id);
  }, [locked, reduce, inView]);

  const accent = SERVICES[active].accent;
  const accent2 = SERVICES[active].accent2;
  const ActiveScene = SERVICES[active].Scene;
  // Freeze scene animation when the hero is off-screen (same flag the scenes use
  // for reduced-motion → renders a static frame, no rAF churn).
  const sceneReduce = reduce || !inView;

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={onMove}
      className="relative overflow-hidden grain scroll-mt-20"
      style={{ background: "#05060a" }}
    >
      <div className="relative z-[2] mx-auto max-w-7xl px-6 lg:px-10 pt-8 md:pt-12 pb-14 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center lg:min-h-[82vh]">
        {/* ── Left column: copy ─────────────────────────────── */}
        <div>
        <h1 className="animate-fade-up font-display font-extrabold leading-[1.02] tracking-tight max-w-2xl">
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl">
            Turn{" "}
            <span className="relative inline-block">
              Clicks
              <svg
                aria-hidden
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                className="absolute left-0 -bottom-[0.02em] w-full h-[0.2em]"
              >
                <defs>
                  <linearGradient id="clicksUnderline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={accent} />
                    <stop offset="100%" stopColor={accent2} />
                  </linearGradient>
                </defs>
                {/* thin, gently curved brush underline — slightly thicker left, tapering right */}
                <path d="M2,4 Q100,2.4 197,4.6 L197,5.4 Q100,4 2,6 Z" fill="url(#clicksUnderline)" />
              </svg>
            </span>{" "}
            Into
          </span>
          <span className="relative block mt-1 text-6xl sm:text-7xl md:text-[5rem] lg:text-[5.75rem] font-extrabold">
            <span className="text-transparent">Customers</span>
            <AnimatePresence>
              <motion.span
                key={SERVICES[active].id}
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(100deg, ${accent}, ${accent2})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                Customers
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-7 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed"
          style={{ animationDelay: "0.12s" }}
        >
          Your next 10 clients are online right now. We make sure they find you
          through SEO, Social Media, and Paid Ads that actually deliver results.
        </p>

        {/* Interactive service switcher */}
        <div className="animate-fade-up mt-8" style={{ animationDelay: "0.2s" }}>
          <div className="mb-3">
            <motion.span
              key={SERVICES[active].id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-[0.78rem] md:text-sm font-display font-semibold"
              style={{ color: accent }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              {SERVICES[active].blurb}
            </motion.span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onPointerEnter={() => {
                    setActive(i);
                    setLocked(true);
                  }}
                  onPointerLeave={() => setLocked(false)}
                  onFocus={() => {
                    setActive(i);
                    setLocked(true);
                  }}
                  onBlur={() => setLocked(false)}
                  onClick={() => {
                    setActive(i);
                    setLocked(true);
                  }}
                  className="group inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.6rem] sm:text-[0.68rem] font-display font-semibold uppercase tracking-[0.08em] transition-all duration-300"
                  style={{
                    color: on ? "#05060a" : "rgba(255,255,255,0.72)",
                    borderColor: on ? "transparent" : "rgba(255,255,255,0.18)",
                    backgroundColor: on ? "transparent" : "rgba(255,255,255,0.04)",
                    backgroundImage: on ? `linear-gradient(100deg, ${s.accent}, ${s.accent2})` : "none",
                    boxShadow: on ? `0 8px 26px -8px ${s.accent}cc` : "none",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: on ? "#05060a" : s.accent }}
                  />
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-5 sm:gap-6" style={{ animationDelay: "0.3s" }}>
          <Magnetic>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `linear-gradient(100deg, ${accent}, ${accent2})`,
                color: "#05060a",
                boxShadow: `0 14px 36px -12px ${accent}cc`,
              }}
              className="group inline-flex items-center gap-2 rounded-full px-5 sm:px-7 py-3.5 sm:py-4 font-display font-bold text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] whitespace-nowrap transition-[filter,box-shadow] duration-300 hover:brightness-110"
            >
              <WhatsAppIcon size={18} />
              Connect on WhatsApp
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>
          <a
            href="#case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-5 py-3.5 text-xs tracking-[0.14em] whitespace-nowrap font-display font-bold uppercase transition-colors hover:bg-white hover:text-navy sm:rounded-none sm:border-0 sm:p-0 sm:text-sm sm:tracking-[0.18em] sm:font-semibold sm:text-white/70 sm:hover:bg-transparent sm:hover:text-cyan"
          >
            Client Case Studies
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

          {/* Mobile/tablet (< lg): the scene shown BELOW the copy, contained */}
          <div data-testid="mobile-scene" className="lg:hidden mt-12 relative h-[44vh] min-h-[320px] max-h-[460px] rounded-2xl border border-white/10 overflow-hidden bg-[#070a14]">
            {isLg === false && (
              <AnimatePresence>
                <motion.div
                  key={SERVICES[active].id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <ActiveScene accent={accent} accent2={accent2} reduce={sceneReduce} centered />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* ── Right column: the reactive scene (desktop), bounded so it never
            spreads or overlaps at any width / zoom. Subtle cursor parallax. ── */}
        <motion.div
          className="hidden lg:block relative h-[58vh] min-h-[440px] max-h-[600px]"
          style={{ x: stageX, y: stageY }}
        >
          {isLg === true && (
            <AnimatePresence>
              <motion.div
                key={SERVICES[active].id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <ActiveScene accent={accent} accent2={accent2} reduce={sceneReduce} centered />
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import Magnetic from "@/components/ui/Magnetic";
import Counter from "@/components/ui/Counter";

// Decorative canvas — defer it so it doesn't block first paint or ship in the
// initial JS. The navy + vignette background stands on its own until it loads.
const Constellation = dynamic(() => import("@/components/ui/Constellation"), {
  ssr: false,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const phrases = [
  "Drives Leads for Your Business",
  "Builds Your Personal Brand",
  "Keeps the Sales Pipeline Full",
];

const stats = [
  { value: 50, prefix: "", suffix: " Million+", decimals: 0, label: "views generated across all platforms" },
  { value: 5, prefix: "", suffix: " Million+", decimals: 0, label: "organic Google traffic through SEO" },
  { value: 1, prefix: "₹", suffix: " Crore+", decimals: 0, label: "ad spent (Meta + Google)" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  // Stays false through SSR + first paint so the opening phrase renders
  // visible (not opacity:0) and can be the LCP element; flips on after mount
  // so every subsequent phrase still animates in.
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden grain scroll-mt-20">
      {/* Living network — the agency's medium, made visible */}
      <Constellation />
      {/* Vignette keeps the headline legible over the network */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(85%_70%_at_30%_40%,rgba(2,5,22,0.85),transparent_75%)]"
      />
      {/* Rising bars — brand motif from the logo */}
      <div
        aria-hidden
        className="absolute right-[-4rem] bottom-0 hidden lg:flex items-end gap-6 opacity-25 pointer-events-none"
      >
        {[0.45, 0.7, 1].map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: 0.6 + i * 0.18, ease: EASE }}
            style={{ height: `${h * 34}rem`, originY: 1 }}
            className="w-24 rounded-t-full bg-gradient-to-t from-blue/0 via-blue/40 to-cyan/70"
          />
        ))}
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-20 md:pt-36 md:pb-24">
        <div className="animate-fade-up flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-10">
          <span className="h-px w-10 bg-cyan/60" />
          Digital Marketing Agency
        </div>

        {/* Headline renders visible immediately (no entrance animation gating
            paint) so it lands as the LCP element without waiting for JS. */}
        <h1 className="font-display font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] max-w-6xl">
          <span className="block">An Agency That</span>
          <span className="relative block min-h-[2.4em] md:min-h-[2.4em] lg:min-h-[1.2em] text-cyan">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={index}
                initial={started ? { opacity: 0, y: 24 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-x-0 top-0 block"
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
          style={{ animationDelay: "0.12s" }}
        >
          Your next 10 clients are online right now. We make sure they find you
          through SEO, Social Media, and Paid Ads that actually deliver results.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-5 sm:gap-6"
          style={{ animationDelay: "0.24s" }}
        >
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-5 sm:px-7 py-3.5 sm:py-4 font-display font-bold text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] whitespace-nowrap hover:bg-white transition-colors"
            >
              Book a Free Strategy Call
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Magnetic>
          <a
            href="#case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-5 py-3.5 text-xs tracking-[0.14em] whitespace-nowrap font-display font-bold uppercase transition-colors hover:bg-white hover:text-navy sm:rounded-none sm:border-0 sm:p-0 sm:text-sm sm:tracking-[0.18em] sm:font-semibold sm:text-white/70 sm:hover:bg-transparent sm:hover:text-cyan"
          >
            See the work
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* Stats band with animated counters */}
        <dl
          className="animate-fade-up mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-[2px] bg-cyan/40 border border-cyan/30 rounded-2xl overflow-hidden backdrop-blur-sm"
          style={{ animationDelay: "0.36s" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-navy/80 p-6 md:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  className="font-display font-extrabold text-3xl md:text-4xl text-cyan"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Magnetic from "@/components/ui/Magnetic";
import Counter from "@/components/ui/Counter";
import Constellation from "@/components/ui/Constellation";

const EASE = [0.22, 1, 0.36, 1] as const;

const phrases = [
  "Drives Leads for Your Business",
  "Builds Your Personal Brand",
  "Keeps the Sales Pipeline Full",
];

const stats = [
  { value: 50, suffix: " Million+", decimals: 0, label: "views generated across all platforms" },
  { value: 103, suffix: "%", decimals: 0, label: "organic traffic growth" },
  { value: 314, suffix: "", decimals: 0, label: "leads in one month" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden grain">
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-10"
        >
          <span className="h-px w-10 bg-cyan/60" />
          Digital Marketing Agency
        </motion.div>

        <h1 className="font-display font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] max-w-6xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="block"
          >
            An Agency That
          </motion.span>
          <span className="relative block min-h-[2.4em] md:min-h-[2.4em] lg:min-h-[1.2em] text-cyan">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 24 }}
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

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
        >
          Your next 10 clients are online right now. We make sure they find you
          through SEO, Social Media, and Paid Ads that actually deliver results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6"
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
        </motion.div>

        {/* Stats band with animated counters */}
        <motion.dl
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-[2px] bg-cyan/40 border border-cyan/30 rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-navy/80 p-6 md:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  className="font-display font-extrabold text-3xl md:text-4xl text-cyan"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </div>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

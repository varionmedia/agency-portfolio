"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Magnetic from "@/components/ui/Magnetic";
import Counter from "@/components/ui/Counter";

const EASE = [0.22, 1, 0.36, 1] as const;

const phrases = [
  "Drives Leads for Your Business",
  "Builds Your Personal Brand",
  "Keeps the Sales Pipeline Full",
];

const stats = [
  { value: 2.1, suffix: "M", decimals: 1, label: "views on one reel" },
  { value: 103, suffix: "%", decimals: 0, label: "organic traffic growth" },
  { value: 314, suffix: "", decimals: 0, label: "leads in one month" },
  { value: 4.2, suffix: "x", decimals: 1, label: "return on ad spend" },
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
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_70%_10%,rgba(1,84,160,0.35),transparent_65%),radial-gradient(40%_40%_at_15%_85%,rgba(0,200,232,0.12),transparent_70%)]"
      />
      {/* Rising bars — brand motif from the logo */}
      <div
        aria-hidden
        className="absolute right-[-4rem] bottom-0 hidden lg:flex items-end gap-6 opacity-40 pointer-events-none"
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

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20 md:pt-36 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-10"
        >
          <span className="h-px w-10 bg-cyan/60" />
          Digital Marketing Agency
        </motion.div>

        <h1 className="font-display font-extrabold leading-[1.04] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="block"
          >
            An Agency That
          </motion.span>
          <span className="block h-[1.15em] overflow-hidden text-cyan">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="block"
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
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-7 py-4 font-display font-bold text-sm uppercase tracking-[0.18em] hover:bg-white transition-colors"
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
            className="inline-flex items-center text-sm uppercase tracking-[0.18em] font-display font-semibold text-white/70 hover:text-cyan transition-colors"
          >
            See the work
          </a>
        </motion.div>

        {/* Stats band with animated counters */}
        <motion.dl
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
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

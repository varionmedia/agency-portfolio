"use client";

import { motion } from "motion/react";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    number: "01",
    title: "SEO",
    copy: "Show up when your ideal clients are actively searching for you on Google. We build your organic presence to generate consistent, high-intent leads.",
    tags: ["Technical SEO", "Content", "Local"],
  },
  {
    number: "02",
    title: "Social Media Marketing",
    copy: "Turn your social media profile into a trust-building machine. We create content that builds your personal brand, grows your audience, and keeps potential clients engaged until they're ready to buy.",
    tags: ["Reels", "Personal Brand", "Growth"],
  },
  {
    number: "03",
    title: "Meta Ads",
    copy: "Stop wasting ad spend on the wrong audience. We run targeted campaigns that bring you qualified leads at the right cost and maximize your return on every dollar spent.",
    tags: ["Lead Gen", "Retargeting", "Creative"],
  },
  {
    number: "04",
    title: "AI Automation",
    copy: "Work smarter, not harder. We build custom AI tools — from CRM dashboards to writing agents — that save your team's time, cut operational costs, and improve output without hiring more people.",
    tags: ["CRM Dashboards", "Agents", "Workflows"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-20 items-end">
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
            <p className="text-ink/60 text-lg">
              We pick the right mix for your business and own the outcome — not
              just the deliverable.
            </p>
          </FadeUp>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              className="group relative py-10 md:py-12 grid md:grid-cols-12 gap-6 items-baseline transition-colors duration-300 hover:bg-cream-soft md:px-6 md:-mx-6"
            >
              <div className="md:col-span-1 font-display font-extrabold text-stroke-navy text-4xl md:text-5xl">
                {s.number}
              </div>
              <h3 className="md:col-span-4 font-display font-bold text-2xl md:text-4xl tracking-tight group-hover:text-blue transition-colors duration-300">
                {s.title}
              </h3>
              <div className="md:col-span-6">
                <p className="text-ink/70 leading-relaxed max-w-xl">{s.copy}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-[0.14em] font-display font-semibold text-ink/50 border border-ink/15 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                aria-hidden
                className="hidden md:flex md:col-span-1 justify-end text-2xl text-ink/30 transition-all duration-300 group-hover:text-cyan group-hover:translate-x-1"
              >
                →
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { FadeUp, WordReveal } from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  display?: string;
  label: string;
};

type CaseStudy = {
  client: string;
  role: string;
  headline: string;
  metrics: Metric[];
  summary: string;
  accent: string;
};

const cases: CaseStudy[] = [
  {
    client: "Dr. Harel Papikian",
    role: "Clinical Psychologist & Couples Therapist · Los Angeles",
    headline: "Brand-new IG turned into a client-attracting platform",
    metrics: [
      { value: 2.1, suffix: "M", decimals: 1, label: "views on a single reel" },
      { value: 1.2, suffix: "M", decimals: 1, label: "views on a second reel" },
      { value: 2, suffix: "K", label: "starting followers" },
    ],
    summary:
      "Transformed a brand-new Instagram account into a high-trust pipeline for prospective clients — without paid promotion.",
    accent: "from-cyan/20",
  },
  {
    client: "CA Amol Jain",
    role: "CA Educator · V'smart Academy",
    headline: "Doubled audience in 4 months, monthly reach in the millions",
    metrics: [
      { value: 17600, display: "8K → 17.6K", label: "followers in 4 months" },
      { value: 947, suffix: "K+", label: "views per month" },
      { value: 2, suffix: "x", label: "audience growth" },
    ],
    summary:
      "Built a content engine that compounded month over month, turning a respected educator into a recognised online authority.",
    accent: "from-blue/30",
  },
  {
    client: "Megha Kapoor",
    role: "Online Fitness Coach",
    headline: "₹64K revenue on ₹15K ad spend — month one",
    metrics: [
      { value: 314, label: "leads in month 1" },
      { value: 48, prefix: "₹", label: "cost per lead" },
      { value: 4.2, suffix: "x", decimals: 1, label: "ROI on ad spend" },
    ],
    summary:
      "Dialed in audience targeting and creative until every rupee of ad spend was tracked back to revenue.",
    accent: "from-cyan/20",
  },
  {
    client: "VSI Jaipur",
    role: "CA/CMA Coaching Institute · Jaipur",
    headline: "Organic traffic doubled in 12 months",
    metrics: [
      { value: 1.01, suffix: "M", decimals: 2, label: "monthly organic sessions" },
      { value: 103, suffix: "%", label: "traffic growth" },
      { value: 73, suffix: "K+", label: "keywords · 47% top 5" },
    ],
    summary:
      "An SEO program built on technical fundamentals, topical authority and disciplined content velocity.",
    accent: "from-blue/30",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-navy grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 md:pt-32 pb-12">
        <FadeUp>
          <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-6">
            <span className="h-px w-10 bg-cyan/60" />
            Selected Work
          </div>
        </FadeUp>
        <WordReveal
          as="h2"
          text="Results that compound. Not vanity metrics."
          className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
        />
      </div>

      {/* Sticky stacking cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        {cases.map((c, i) => (
          <div
            key={c.client}
            className="sticky"
            style={{ top: `${5.5 + i * 1.5}rem` }}
          >
            <article
              className={`relative rounded-3xl border border-white/10 bg-navy-soft bg-gradient-to-br ${c.accent} to-navy-soft p-8 md:p-12 mb-8 shadow-[0_-12px_40px_rgba(2,5,22,0.8)] overflow-hidden`}
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-10 font-display font-extrabold text-stroke-cream text-[10rem] leading-none select-none hidden md:block"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative">
                <div className="lg:col-span-5">
                  <div className="font-display text-xs uppercase tracking-[0.25em] text-cyan/80">
                    Case {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display font-bold text-2xl md:text-3xl">
                    {c.client}
                  </h3>
                  <div className="mt-1 text-sm text-white/50">{c.role}</div>
                  <p className="mt-6 font-display font-semibold text-xl md:text-2xl leading-snug">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-white/65 max-w-md">{c.summary}</p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden self-start border border-white/10">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-navy/90 p-6">
                      {m.display ? (
                        <div className="font-display font-extrabold text-2xl md:text-3xl text-cyan">
                          {m.display}
                        </div>
                      ) : (
                        <Counter
                          value={m.value}
                          prefix={m.prefix}
                          suffix={m.suffix}
                          decimals={m.decimals ?? 0}
                          className="font-display font-extrabold text-2xl md:text-3xl text-cyan"
                        />
                      )}
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

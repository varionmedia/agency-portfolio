"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import Spotlight from "@/components/ui/Spotlight";

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
  proof: string;
  proofLabel: string;
  proofLabels: string[];
};

const cases: CaseStudy[] = [
  {
    client: "Dr. Harel Papikian",
    role: "Clinical Psychologist & Couples Therapist · Los Angeles",
    headline: "A brand-new IG turned into a client-attracting platform",
    metrics: [
      { value: 2.1, suffix: "M", decimals: 1, label: "views · single reel" },
      { value: 1.2, suffix: "M", decimals: 1, label: "views · second reel" },
      { value: 2, suffix: "K", label: "starting followers" },
    ],
    summary:
      "Transformed a brand-new Instagram account into a high-trust pipeline for prospective clients — without paid promotion.",
    accent: "from-cyan/25",
    proof: "/images/instagram/dr-harel.jpg",
    proofLabel: "Dr. Harel Papikian Instagram profile",
    proofLabels: ["Reel", "Insights", "DMs"],
  },
  {
    client: "CA Amol Jain",
    role: "CA Educator · V'smart Academy",
    headline: "Doubled the audience in 4 months, monthly reach in the millions",
    metrics: [
      { value: 17600, display: "8K → 17.6K", label: "followers in 4 months" },
      { value: 947, suffix: "K+", label: "views per month" },
      { value: 2, suffix: "x", label: "audience growth" },
    ],
    summary:
      "Built a content engine that compounded month over month, turning a respected educator into a recognised online authority.",
    accent: "from-blue/30",
    proof: "/images/instagram/amol-jain.jpg",
    proofLabel: "CA Amol Jain Instagram profile",
    proofLabels: ["Growth", "Reach", "Reels"],
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
    accent: "from-cyan/25",
    proof: "/images/instagram/vsi-jaipur.jpg",
    proofLabel: "VSI Jaipur Instagram profile",
    proofLabels: ["Search Console", "Keywords", "Traffic"],
  },
  {
    client: "Megha Kapoor",
    role: "Online Fitness Coach",
    headline: "₹64K revenue on ₹15K ad spend — in month one",
    metrics: [
      { value: 314, label: "leads in month 1" },
      { value: 48, prefix: "₹", label: "cost per lead" },
      { value: 4.2, suffix: "x", decimals: 1, label: "ROI on ad spend" },
    ],
    summary:
      "Dialed in audience targeting and creative until every rupee of ad spend was tracked back to revenue.",
    accent: "from-blue/30",
    proof: "/images/instagram/megha-kapoor.jpg",
    proofLabel: "Megha Kapoor Instagram profile",
    proofLabels: ["Meta Ads", "Leads", "ROAS"],
  },
  {
    client: "CA Ravi Taori",
    role: "CA Educator & Mentor",
    headline: "A mentor's voice scaled into a magnetic personal brand",
    metrics: [
      { value: 100, suffix: "K+", label: "engaged community" },
      { value: 4, suffix: "x", label: "reach growth" },
      { value: 100, suffix: "%", label: "organic" },
    ],
    summary:
      "Positioned a trusted CA mentor as a go-to voice for students — consistent, high-retention content that built genuine authority.",
    accent: "from-cyan/25",
    proof: "/images/instagram/ravi-taori.jpg",
    proofLabel: "CA Ravi Taori Instagram profile",
    proofLabels: ["Reels", "YouTube", "Reviews"],
  },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[205px] sm:w-[224px] lg:w-[240px]">
      {/* Glow behind the device */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[3rem] bg-cyan/10 blur-3xl"
      />
      <div className="relative rounded-[2.4rem] bg-gradient-to-b from-[#1a1c2e] to-[#070811] p-[8px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
        {/* Side buttons */}
        <div aria-hidden className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-l bg-white/15" />
        <div aria-hidden className="absolute -left-[3px] top-36 h-10 w-[3px] rounded-l bg-white/15" />
        <div aria-hidden className="absolute -right-[3px] top-32 h-14 w-[3px] rounded-r bg-white/15" />
        <div className="overflow-hidden rounded-[1.9rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={1080}
            height={2120}
            quality={90}
            sizes="(max-width: 640px) 210px, 248px"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

function ImagePlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function ProofGallery({ labels }: { labels: string[] }) {
  return (
    <div className="mt-5 max-w-xl">
      <div className="font-display uppercase tracking-[0.2em] text-[0.65rem] text-white/40 mb-3">
        More proof — coming soon
      </div>
      <div className="grid grid-cols-3 gap-3">
        {labels.map((label, n) => (
          <div
            key={n}
            className="group/proof aspect-[16/10] rounded-xl border border-dashed border-white/15 bg-white/[0.03] flex flex-col items-center justify-center gap-1.5 text-white/35 transition-colors hover:border-cyan/40 hover:text-cyan/70"
            title={`${label} screenshot placeholder`}
          >
            <ImagePlaceholderIcon className="w-5 h-5" />
            <span className="text-[0.6rem] uppercase tracking-[0.15em] font-display">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseCard({
  c,
  i,
  total,
}: {
  c: CaseStudy;
  i: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const phoneRight = i % 2 === 1;

  // As the card scrolls up and the next one slides over it, shrink it slightly
  // so the stack visibly collapses (last card stays full size).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const targetScale = i === total - 1 ? 1 : 0.88;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${4.5 + i * 1.1}rem` }}
    >
      <motion.article
        style={{ scale }}
        className={`relative w-full origin-top rounded-[2rem] border border-white/10 bg-navy-soft bg-gradient-to-br ${c.accent} to-navy-soft px-6 pt-8 pb-10 md:px-12 md:pt-10 md:pb-12 mb-8 overflow-hidden shadow-[0_-16px_50px_rgba(2,5,22,0.85)]`}
      >
        <div
          aria-hidden
          className="absolute -right-6 -top-12 font-display font-extrabold text-stroke-cream text-[11rem] leading-none select-none hidden md:block pointer-events-none"
        >
          {String(i + 1).padStart(2, "0")}
        </div>

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Phone */}
          <div
            className={`lg:col-span-5 ${
              phoneRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <PhoneFrame src={c.proof} alt={c.proofLabel} />
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 ${
              phoneRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="font-display text-xs uppercase tracking-[0.25em] text-cyan/80">
              Case {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl">
              {c.client}
            </h3>
            <div className="mt-1 text-sm text-white/50">{c.role}</div>
            <p className="mt-4 font-display font-semibold text-lg md:text-xl leading-snug max-w-xl">
              {c.headline}
            </p>
            <p className="mt-3 text-sm md:text-base text-white/65 max-w-xl">
              {c.summary}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 max-w-xl">
              {c.metrics.map((m) => (
                <div key={m.label} className="bg-navy/90 p-3 md:p-4">
                  {m.display ? (
                    <div className="font-display font-extrabold text-lg md:text-2xl text-cyan">
                      {m.display}
                    </div>
                  ) : (
                    <Counter
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      decimals={m.decimals ?? 0}
                      className="font-display font-extrabold text-lg md:text-2xl text-cyan"
                    />
                  )}
                  <div className="mt-1.5 text-[0.6rem] md:text-xs uppercase tracking-[0.14em] text-white/50 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <ProofGallery labels={c.proofLabels} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-navy grain">
      <div aria-hidden className="v-lines absolute inset-0 pointer-events-none" />
      <Spotlight size={800} strength={0.05} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 md:pt-32 pb-12">
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-24 md:pb-32">
        {cases.map((c, i) => (
          <CaseCard key={c.client} c={c} i={i} total={cases.length} />
        ))}
      </div>
    </section>
  );
}

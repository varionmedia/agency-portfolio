"use client";

import { useEffect, useRef, useState } from "react";
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
  bullets: string[];
  accent: string;
  proof: string;
  proofLabel: string;
  beforeAfter?: { before: string; after: string; alt: string };
  proofStack?: { src: string; label: string; alt: string; width: number; height: number }[];
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
    bullets: [
      "Developed a deep content strategy tailored to his therapy & coaching niche",
      "Identified and targeted high-intent audience segments",
      "Capitalized on trending topics and platform algorithm changes",
      "Continuously adapted strategy based on content performance data",
    ],
    accent: "from-cyan/25",
    proof: "/images/instagram/dr-harel.jpg",
    proofLabel: "Dr. Harel Papikian Instagram profile",
  },
  {
    client: "CA Amol Jain",
    role: "CA Educator · V'smart Academy",
    headline: "Doubled the audience in 4 months, monthly reach in the millions",
    metrics: [
      { value: 17000, display: "8K → 17K", label: "followers in 4 months" },
      { value: 947, suffix: "K+", label: "views per month" },
      { value: 2, suffix: "x", label: "audience growth" },
    ],
    summary:
      "Built a content engine that compounded month over month, turning a respected educator into a recognised online authority.",
    bullets: [
      "Planned and edited high-quality, engagement-centric videos",
      "Conducted detailed audience research to identify relevant content angles",
      "Targeted trending topics within the education niche",
      "Implemented comment automation to boost engagement and reach",
    ],
    accent: "from-blue/30",
    proof: "/images/instagram/amol-jain.jpg",
    proofLabel: "CA Amol Jain Instagram profile",
    beforeAfter: {
      before: "/images/case-proof/amol-jain/before.jpg",
      after: "/images/case-proof/amol-jain/now.jpg",
      alt: "CA Amol Jain account growth",
    },
  },
  {
    client: "VSI Jaipur",
    role: "CA/CMA Coaching Institute · Jaipur",
    headline: "Organic traffic doubled in 12 months",
    metrics: [
      { value: 1.01, suffix: "M", decimals: 2, label: "monthly organic visitors" },
      { value: 103, suffix: "%", label: "traffic growth" },
      { value: 73, suffix: "K+", label: "keywords · 47% top 5" },
    ],
    summary:
      "An SEO program built on technical fundamentals, topical authority and disciplined content velocity.",
    bullets: [
      "Conducted a full SEO audit — technical fixes, content cleanup, backlink analysis",
      "Removed thin pages, fixed keyword cannibalization, disavowed spammy backlinks",
      "Published 34 city-targeting pages — 16 now ranking in top 5",
      "Built high-authority guest-post backlinks and a long-term content calendar",
    ],
    accent: "from-cyan/25",
    proof: "/images/instagram/vsi-jaipur.jpg",
    proofLabel: "VSI Jaipur Instagram profile",
    proofStack: [
      {
        src: "/images/case-proof/vsi-jaipur/traffic.jpg",
        label: "Search Console — clicks & impressions YoY",
        alt: "Google Search Console — 1.01M clicks, 23.9M impressions",
        width: 1400,
        height: 330,
      },
      {
        src: "/images/case-proof/vsi-jaipur/organic.jpg",
        label: "Organic keywords ranking — 5-year trajectory",
        alt: "Ahrefs — 73,335 organic keywords ranking over time",
        width: 1080,
        height: 490,
      },
      {
        src: "/images/case-proof/vsi-jaipur/cities.jpg",
        label: "Keyword ranking distribution",
        alt: "Pie chart — 47.1% in positions 1–5, 32.4% in positions 6–10",
        width: 1250,
        height: 772,
      },
    ],
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
    bullets: [
      "Conducted detailed audience and market research for women aged 25–45",
      "Built new Meta ad campaigns with fresh creatives and targeted copy",
      "Strengthened the funnel with testimonials and social proof",
      "Automated Instagram DM follow-ups to convert warm leads",
    ],
    accent: "from-blue/30",
    proof: "/images/instagram/megha-kapoor.jpg",
    proofLabel: "Megha Kapoor Instagram profile",
    proofStack: [
      {
        src: "/images/case-proof/megha-kapoor/ads.jpg",
        label: "Meta Ads account — top-level results",
        alt: "Meta Ads Manager — campaign overview",
        width: 1400,
        height: 230,
      },
      {
        src: "/images/case-proof/megha-kapoor/funnel.jpg",
        label: "End-to-end conversion funnel",
        alt: "Conversion funnel — ad spend, leads, conversions, revenue",
        width: 1400,
        height: 730,
      },
      {
        src: "/images/case-proof/megha-kapoor/profile.jpg",
        label: "Megha's Instagram profile",
        alt: "Megha Kapoor's Instagram profile",
        width: 1079,
        height: 1075,
      },
    ],
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
    bullets: [
      "Repositioned his voice around high-intent student pain points",
      "Built a weekly script + shoot rhythm for consistent output",
      "Engineered hooks on every reel to lift watch time and retention",
      "Managing the whole process — planning → editing → publishing → automation",
    ],
    accent: "from-cyan/25",
    proof: "/images/instagram/ravi-taori.jpg",
    proofLabel: "CA Ravi Taori Instagram profile",
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

function BeforeAfterStack({
  before,
  after,
  alt,
  light = false,
}: {
  before: string;
  after: string;
  alt: string;
  light?: boolean;
}) {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[240px] lg:w-[260px]">
      {/* Soft glow behind */}
      <div
        aria-hidden
        className={`absolute -inset-6 rounded-[3rem] blur-3xl ${light ? "bg-blue/15" : "bg-cyan/10"}`}
      />

      {/* Before */}
      <figure className={`relative aspect-[4/3] rounded-xl overflow-hidden border bg-white/[0.03] shadow-[0_18px_40px_-15px_rgba(0,0,0,0.7)] ${light ? "border-ink/15" : "border-white/15"}`}>
        <Image
          src={before}
          alt={`${alt} — before`}
          fill
          sizes="260px"
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
        />
        <figcaption className="absolute bottom-2 left-2 text-[0.6rem] uppercase tracking-[0.18em] font-display font-bold text-white bg-black/55 backdrop-blur-sm rounded px-2 py-0.5">
          Before
        </figcaption>
      </figure>

      {/* Curved arrow */}
      <div className={`relative flex justify-center py-2 ${light ? "text-blue" : "text-cyan"}`}>
        <svg
          viewBox="0 0 40 60"
          width="40"
          height="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M 20 4 Q 36 28, 20 50" />
          <path d="M 12 42 L 20 50 L 28 42" />
        </svg>
      </div>

      {/* After (highlighted with accent ring) */}
      <figure className={`relative aspect-[4/3] rounded-xl overflow-hidden border bg-white/[0.03] ring-1 ${light ? "border-blue/40 ring-blue/20 shadow-[0_22px_50px_-15px_rgba(1,84,160,0.35)]" : "border-cyan/40 ring-cyan/20 shadow-[0_22px_50px_-15px_rgba(0,200,232,0.35)]"}`}>
        <Image
          src={after}
          alt={`${alt} — after`}
          fill
          sizes="260px"
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0"
        />
        <figcaption className={`absolute bottom-2 left-2 text-[0.6rem] uppercase tracking-[0.18em] font-display font-bold rounded px-2 py-0.5 ${light ? "text-white bg-blue" : "text-navy bg-cyan"}`}>
          Now
        </figcaption>
      </figure>
    </div>
  );
}

function ProofStack({
  items,
  light = false,
}: {
  items: { src: string; label: string; alt: string; width: number; height: number }[];
  light?: boolean;
}) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px] lg:w-[300px]">
      {/* Soft glow behind */}
      <div
        aria-hidden
        className={`absolute -inset-6 rounded-[3rem] blur-3xl ${light ? "bg-blue/15" : "bg-cyan/10"}`}
      />
      <div className="relative flex flex-col gap-4">
        {items.map((item, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden border shadow-[0_18px_40px_-15px_rgba(0,0,0,0.7)] ${light ? "border-ink/15" : "border-white/15"}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="300px"
              className="block w-full h-auto"
            />
          </figure>
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
  // Cards 2 & 4 (index 1 & 3) render light (white) for clear separation.
  const light = i % 2 === 1;
  const accentLabel = light ? "text-blue" : "text-cyan/80";
  const metricValue = `font-display font-extrabold text-lg md:text-2xl ${light ? "text-blue" : "text-cyan"}`;

  // Sticky-stack + scale collapse only applies on lg+ (desktop). On mobile the
  // card is full-width and taller than the viewport — pinning it clips the
  // bottom under the next card.
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const targetScale = !isLg || i === total - 1 ? 1 : 0.88;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="lg:sticky"
      style={{ top: `${4.5 + i * 1.1}rem` }}
    >
      <motion.article
        style={{ scale }}
        className={`relative w-full origin-top rounded-[2rem] border px-5 pt-7 pb-9 sm:px-6 sm:pt-8 sm:pb-10 md:px-12 md:pt-10 md:pb-12 mb-6 sm:mb-8 overflow-hidden ${
          light
            ? "border-ink/10 bg-gradient-to-br from-white to-[#e7ebf3] text-ink"
            : `border-white/10 bg-navy-soft bg-gradient-to-br ${c.accent} to-navy-soft text-white`
        }`}
      >
        <div
          aria-hidden
          className={`absolute -right-6 -top-12 font-display font-extrabold text-[11rem] leading-none select-none hidden md:block pointer-events-none ${light ? "text-stroke-navy" : "text-stroke-cream"}`}
        >
          {String(i + 1).padStart(2, "0")}
        </div>

        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Visual: phone, or before/after stack when supplied */}
          <div
            className={`lg:col-span-5 ${
              phoneRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {c.beforeAfter ? (
              <BeforeAfterStack
                before={c.beforeAfter.before}
                after={c.beforeAfter.after}
                alt={c.beforeAfter.alt}
                light={light}
              />
            ) : c.proofStack ? (
              <ProofStack items={c.proofStack} light={light} />
            ) : (
              <PhoneFrame src={c.proof} alt={c.proofLabel} />
            )}
          </div>

          {/* Content */}
          <div
            className={`lg:col-span-7 ${
              phoneRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className={`font-display text-xs uppercase tracking-[0.25em] ${accentLabel}`}>
              Case {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 font-display font-bold text-2xl md:text-3xl">
              {c.client}
            </h3>
            <div className={`mt-1 text-sm ${light ? "text-ink/55" : "text-white/50"}`}>{c.role}</div>
            <p className="mt-4 font-display font-semibold text-lg md:text-xl leading-snug">
              {c.headline}
            </p>
            <p className={`mt-3 text-sm md:text-base ${light ? "text-ink/70" : "text-white/65"}`}>
              {c.summary}
            </p>

            <div className={`mt-5 grid grid-cols-3 gap-px rounded-xl overflow-hidden border ${light ? "bg-ink/10 border-ink/10" : "bg-white/10 border-white/10"}`}>
              {c.metrics.map((m) => (
                <div key={m.label} className={`p-3 md:p-4 ${light ? "bg-white" : "bg-navy/90"}`}>
                  {m.display ? (
                    <div className={metricValue}>{m.display}</div>
                  ) : (
                    <Counter
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      decimals={m.decimals ?? 0}
                      className={metricValue}
                    />
                  )}
                  <div className={`mt-1.5 text-[0.6rem] md:text-xs uppercase tracking-[0.14em] leading-tight ${light ? "text-ink/55" : "text-white/50"}`}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* What we did */}
            <div className="mt-6">
              <div className={`font-display uppercase tracking-[0.22em] text-[0.65rem] mb-3 ${accentLabel}`}>
                What We Did
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className={`flex items-start gap-2 text-sm leading-snug ${light ? "text-ink/75" : "text-white/75"}`}>
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`flex-shrink-0 mt-[5px] ${light ? "text-blue" : "text-cyan"}`}
                      aria-hidden
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-[#05060a] grain">
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

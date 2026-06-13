"use client";

import Image from "next/image";
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
  },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[300px] lg:w-[320px]">
      {/* Glow behind the device */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[3rem] bg-cyan/10 blur-3xl"
      />
      <div className="relative rounded-[2.8rem] bg-gradient-to-b from-[#1a1c2e] to-[#070811] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
        {/* Side buttons */}
        <div aria-hidden className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-l bg-white/15" />
        <div aria-hidden className="absolute -left-[3px] top-44 h-12 w-[3px] rounded-l bg-white/15" />
        <div aria-hidden className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-r bg-white/15" />
        <div className="overflow-hidden rounded-[2.2rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={1080}
            height={2120}
            quality={90}
            sizes="(max-width: 640px) 270px, 320px"
            className="w-full h-auto"
          />
        </div>
      </div>
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
        {cases.map((c, i) => {
          const phoneRight = i % 2 === 1;
          return (
            <div
              key={c.client}
              className="sticky"
              style={{ top: `${5.5 + i * 1.75}rem` }}
            >
              <article
                className={`relative rounded-[2rem] border border-white/10 bg-navy-soft bg-gradient-to-br ${c.accent} to-navy-soft px-6 py-10 md:px-12 md:py-14 mb-8 overflow-hidden shadow-[0_-16px_50px_rgba(2,5,22,0.85)]`}
              >
                <div
                  aria-hidden
                  className="absolute -right-6 -top-12 font-display font-extrabold text-stroke-cream text-[11rem] leading-none select-none hidden md:block pointer-events-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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
                    <h3 className="mt-3 font-display font-bold text-3xl md:text-4xl">
                      {c.client}
                    </h3>
                    <div className="mt-2 text-sm text-white/50">{c.role}</div>
                    <p className="mt-6 font-display font-semibold text-xl md:text-2xl leading-snug max-w-xl">
                      {c.headline}
                    </p>
                    <p className="mt-4 text-white/65 max-w-xl">{c.summary}</p>

                    <div className="mt-8 grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 max-w-xl">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="bg-navy/90 p-4 md:p-5">
                          {m.display ? (
                            <div className="font-display font-extrabold text-xl md:text-2xl text-cyan">
                              {m.display}
                            </div>
                          ) : (
                            <Counter
                              value={m.value}
                              prefix={m.prefix}
                              suffix={m.suffix}
                              decimals={m.decimals ?? 0}
                              className="font-display font-extrabold text-xl md:text-2xl text-cyan"
                            />
                          )}
                          <div className="mt-2 text-[0.65rem] md:text-xs uppercase tracking-[0.15em] text-white/50 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

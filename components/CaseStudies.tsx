type CaseStudy = {
  client: string;
  role: string;
  headline: string;
  metrics: { value: string; label: string }[];
  summary: string;
};

const cases: CaseStudy[] = [
  {
    client: "Dr. Harel Papikian",
    role: "Clinical Psychologist & Couples Therapist · Los Angeles",
    headline: "Brand-new IG turned into a client-attracting platform",
    metrics: [
      { value: "2.1M", label: "views on a single reel" },
      { value: "1.2M", label: "views on a second reel" },
      { value: "2K", label: "starting followers" },
    ],
    summary:
      "Transformed a brand-new Instagram account into a high-trust pipeline for prospective clients — without paid promotion.",
  },
  {
    client: "CA Amol Jain",
    role: "CA Educator · V'smart Academy",
    headline: "Doubled audience in 4 months, monthly reach into the millions",
    metrics: [
      { value: "8,028 → 17,600", label: "followers in 4 months" },
      { value: "947K+", label: "views per month" },
      { value: "4 mo", label: "to 2x" },
    ],
    summary:
      "Built a content engine that compounded month over month, turning a respected educator into a recognised online authority.",
  },
  {
    client: "Megha Kapoor",
    role: "Online Fitness Coach",
    headline: "₹64K revenue on ₹15K ad spend — month one",
    metrics: [
      { value: "314", label: "leads in month 1" },
      { value: "₹48", label: "cost per lead" },
      { value: "4.2x", label: "ROI on ad spend" },
    ],
    summary:
      "Dialed in audience targeting and creative until every rupee of ad spend was tracked back to revenue.",
  },
  {
    client: "VSI Jaipur",
    role: "CA/CMA Coaching Institute · Jaipur",
    headline: "Organic traffic doubled in 12 months",
    metrics: [
      { value: "496K → 1.01M", label: "monthly organic sessions" },
      { value: "103%", label: "traffic growth" },
      { value: "73K+", label: "keywords ranking · 47% top 5" },
    ],
    summary:
      "An SEO program built on technical fundamentals, topical authority and disciplined content velocity.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-4">
              Selected Work
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight max-w-3xl">
              Results that compound — <span className="text-cyan">not vanity metrics.</span>
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {cases.map((c, i) => (
            <article
              key={c.client}
              className="group relative rounded-2xl border border-white/10 bg-navy-soft p-8 md:p-12 overflow-hidden hover:border-cyan/40 transition-colors"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
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
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden self-start">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-navy p-6">
                      <div className="font-display font-extrabold text-2xl md:text-3xl text-cyan">
                        {m.value}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

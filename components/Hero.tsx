const rotatingPhrases = [
  "That Drives Leads for Your Business",
  "That Builds Your Personal Brand",
  "That Keeps the Sales Pipeline Full",
  "That Drives Leads for Your Business",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,200,232,0.18),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-8">
          Varion Media — Digital Marketing
        </div>
        <h1 className="font-display font-extrabold leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
          Digital Marketing Agency{" "}
          <span className="rotator text-cyan">
            {rotatingPhrases.map((phrase, i) => (
              <span key={i}>{phrase}</span>
            ))}
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
          Your next 10 clients are online right now. We make sure they find you
          through SEO, Social Media, and Paid Ads that actually deliver results.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-7 py-4 font-display font-bold text-sm uppercase tracking-[0.18em] hover:bg-white transition-colors"
          >
            Book a Free Strategy Call
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center text-sm uppercase tracking-[0.18em] font-display font-semibold text-white/70 hover:text-cyan transition-colors"
          >
            See the work
          </a>
        </div>
      </div>
    </section>
  );
}

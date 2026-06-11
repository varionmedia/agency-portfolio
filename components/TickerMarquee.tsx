const items = ["SEO", "Social Media", "Meta Ads", "AI Automation"];

export default function TickerMarquee() {
  const track = [...items, ...items, ...items];
  return (
    <section
      aria-hidden
      className="relative border-y border-white/5 bg-navy overflow-hidden py-6"
    >
      <div className="marquee-track-fast flex w-max items-center">
        {track.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display font-extrabold uppercase tracking-[0.08em] text-4xl md:text-6xl text-stroke-cream whitespace-nowrap px-6">
              {item}
            </span>
            <span className="text-cyan text-2xl md:text-4xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

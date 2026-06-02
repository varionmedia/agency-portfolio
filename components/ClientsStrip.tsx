const placeholders = [
  "Dr. Harel Papikian",
  "V'smart Academy",
  "Megha Kapoor",
  "VSI Jaipur",
  "Client Logo",
  "Client Logo",
  "Client Logo",
  "Client Logo",
];

export default function ClientsStrip() {
  const track = [...placeholders, ...placeholders];
  return (
    <section id="clients" className="relative border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-6">
        <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-4">
          Brands We&apos;ve Worked With
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight max-w-2xl">
          Trusted by founders who care about <span className="text-cyan">real outcomes.</span>
        </h2>
      </div>
      <div className="relative py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex gap-16 w-max">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="h-16 px-8 min-w-[14rem] flex items-center justify-center rounded-md border border-white/10 bg-white/[0.02]"
            >
              <span className="font-display font-bold uppercase tracking-[0.18em] text-white/50 text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

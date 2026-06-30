"use client";

export default function MarqueeStrip({ items, accentHex }: { items: string[]; accentHex: string }) {
  const sequence = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/[0.08] bg-ink/[0.015] py-3">
      <div className="flex marquee-track gap-12 whitespace-nowrap will-change-transform">
        {sequence.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-6 font-display font-extrabold uppercase tracking-[0.22em] text-2xl md:text-3xl text-stroke-navy"
          >
            {label}
            <span
              aria-hidden
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentHex }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

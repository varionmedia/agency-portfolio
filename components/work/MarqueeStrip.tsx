"use client";

export default function MarqueeStrip({
  items,
  accentHex,
  dark = false,
}: {
  items: string[];
  accentHex: string;
  dark?: boolean;
}) {
  const Group = (
    <div className="flex items-center shrink-0">
      {items.map((label, i) => (
        <span
          key={i}
          className={`flex items-center font-display uppercase tracking-[0.28em] text-[0.7rem] md:text-xs font-semibold ${
            dark ? "text-white/45" : "text-ink/45"
          }`}
        >
          <span className="px-6 md:px-8">{label}</span>
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accentHex }} />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden py-3 ${
        dark ? "border-b border-white/10 bg-white/[0.02]" : "border-y border-ink/10 bg-ink/[0.015]"
      }`}
    >
      <div className="flex marquee-track whitespace-nowrap will-change-transform">
        {Group}
        {Group}
      </div>
    </div>
  );
}

"use client";

import { FadeUp } from "@/components/ui/Reveal";

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
    <section id="clients" className="relative bg-navy-warm overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-4">
        <FadeUp>
          <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-4">
            <span className="h-px w-10 bg-cyan/60" />
            Brands We&apos;ve Worked With
          </div>
        </FadeUp>
      </div>
      <div className="relative py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex gap-6 w-max">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="h-16 px-8 min-w-[13rem] flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
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

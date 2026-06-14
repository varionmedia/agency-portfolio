"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/Reveal";

type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  { name: "V'smart Academy",        logo: "/images/clients/vsmart-academy.svg" },
  { name: "VSI Jaipur",             logo: "/images/clients/vsi-jaipur.svg" },
  { name: "Auditguru",              logo: "/images/clients/auditguru.svg" },
  { name: "My Prepzone",            logo: "/images/clients/my-prepzone.svg" },
  { name: "Grras",                  logo: "/images/clients/grras.svg" },
  { name: "Quibus Technosys",       logo: "/images/clients/quibus-technosys.svg" },
  { name: "Manglam Pinkwest",       logo: "/images/clients/manglam-pinkwest.svg" },
];

export default function ClientsStrip() {
  const track = [...clients, ...clients];
  return (
    <section id="clients" className="relative bg-white text-ink overflow-hidden">
      {/* Faint texture so the white isn't flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(2,5,22,0.04)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(1,84,160,0.05),transparent)]"
      />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 md:pt-16">
        <FadeUp>
          <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-blue">
            <span className="h-px w-10 bg-blue/50" />
            Brands We&apos;ve Worked With
          </div>
        </FadeUp>
      </div>

      {/* Marquee — full bleed */}
      <div className="relative mt-8 md:mt-10 pb-12 md:pb-16 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track flex gap-5 md:gap-6 w-max items-center hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="h-24 w-44 md:h-28 md:w-52 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(2,5,22,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(2,5,22,0.22)] hover:border-cyan/30"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={260}
                height={130}
                className="max-h-14 md:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

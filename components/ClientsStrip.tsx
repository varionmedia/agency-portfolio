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

const stats = [
  { value: "7+", label: "Brands" },
  { value: "Millions", label: "Views generated" },
  { value: "4", label: "Industries" },
];

export default function ClientsStrip() {
  const track = [...clients, ...clients];
  return (
    <section id="clients" className="relative bg-navy py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white text-ink border border-black/5 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7)]">
          {/* Texture so the white isn't flat */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,rgba(2,5,22,0.05)_1px,transparent_1px)] [background-size:22px_22px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(75%_100%_at_50%_0%,rgba(1,84,160,0.07),transparent)]"
          />

          {/* Header + stats */}
          <div className="relative px-6 md:px-10 pt-8 md:pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <FadeUp>
              <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-blue">
                <span className="h-px w-10 bg-blue/50" />
                Brands We&apos;ve Worked With
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap items-center gap-5 md:gap-7">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col ${
                      i > 0 ? "pl-5 md:pl-7 border-l border-ink/10" : ""
                    }`}
                  >
                    <span className="font-display font-extrabold text-xl md:text-2xl text-ink leading-none">
                      {s.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-ink/45 mt-1.5 whitespace-nowrap">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Marquee */}
          <div className="relative mt-6 pb-10 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
            <div className="marquee-track flex gap-5 md:gap-6 w-max items-center hover:[animation-play-state:paused]">
              {track.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="h-24 w-44 md:h-28 md:w-52 shrink-0 flex items-center justify-center rounded-2xl border border-ink/10 bg-[#fafafa] shadow-[0_2px_10px_rgba(2,5,22,0.05)] grayscale-[40%] opacity-90 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_14px_30px_-10px_rgba(2,5,22,0.25)] hover:border-cyan/30"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={260}
                    height={130}
                    className="max-h-16 md:max-h-20 w-auto object-contain px-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

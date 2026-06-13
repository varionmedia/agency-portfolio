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
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-2">
        <FadeUp>
          <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-blue mb-4">
            <span className="h-px w-10 bg-blue/50" />
            Brands We&apos;ve Worked With
          </div>
        </FadeUp>
      </div>
      <div className="relative py-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex gap-16 w-max items-center">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="h-24 w-56 shrink-0 flex items-center justify-center grayscale-0 opacity-90 transition-opacity duration-300 hover:opacity-100"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={220}
                height={96}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <div className="marquee-track flex gap-6 w-max items-center">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="h-24 w-48 shrink-0 rounded-2xl bg-white flex items-center justify-center p-5 shadow-[0_2px_30px_rgba(0,200,232,0.06)] transition-transform duration-300 hover:-translate-y-1"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={60}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

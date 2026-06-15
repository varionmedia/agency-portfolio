"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default function VideoTestimonial() {
  return (
    <section id="testimonial" className="relative bg-navy-warm grain">
      <Spotlight />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 relative z-[2]">
        <FadeUp>
          <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-6">
            <span className="h-px w-10 bg-cyan/60" />
            What Our Clients Say
          </div>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeUp delay={0.1}>
            <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] bg-cyan/10 blur-3xl -z-10 pointer-events-none"
              />
              <iframe
                src="https://www.youtube.com/embed/LuzoszSR_Qs?autoplay=1&mute=1&playsinline=1&controls=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd720"
                title="Dr. Harel Papikian on working with Varion Media"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </FadeUp>
          <div className="space-y-6">
            {/* Quote 1 */}
            <FadeUp>
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 md:px-7 md:py-6">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-cyan/70 mb-2"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7z" />
                </svg>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  My Instagram had only 2,000 followers and we got 700,000
                  views on a single video — I was mind blown.
                </p>
              </div>
            </FadeUp>

            {/* Quote 2 */}
            <FadeUp delay={0.15}>
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 px-6 py-5 md:px-7 md:py-6">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-cyan/70 mb-2"
                  aria-hidden
                >
                  <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7zm12 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6V7z" />
                </svg>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  The pattern I noticed with other agencies was overpromising
                  and underdelivering. With Umang, I was always impressed by
                  how professional and dedicated he was.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cyan/40 ring-2 ring-cyan/15 flex-shrink-0">
                  <Image
                    src="/images/testimonial/harel-avatar.jpg"
                    alt="Dr. Harel Papikian"
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-display font-semibold text-white">
                    Dr. Harel Papikian
                  </div>
                  <div className="text-white/50">
                    Licensed Clinical Psychologist &amp; Couples Therapist, Los
                    Angeles
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

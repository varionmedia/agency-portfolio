"use client";

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
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy border border-white/10 flex items-center justify-center group">
              {/* TODO: Swap in YouTube embed once URL is provided */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(1,84,160,0.3),transparent_70%)]"
              />
              <div className="text-center px-6 relative">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-cyan/15 border border-cyan/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-cyan text-xl translate-x-0.5">▶</span>
                </div>
                <p className="font-display uppercase tracking-[0.2em] text-xs text-white/60">
                  Video testimonial coming soon
                </p>
                <p className="mt-2 text-sm text-white/40">
                  Dr. Harel Papikian · Clinical Psychologist, LA
                </p>
              </div>
            </div>
          </FadeUp>
          <div className="space-y-6">
            {/* Headline quote — featured card with big cyan mark */}
            <FadeUp>
              <div className="relative rounded-2xl bg-gradient-to-br from-cyan/[0.08] to-blue/[0.06] border border-cyan/20 px-7 py-7 md:px-9 md:py-9 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-4 -left-2 font-display font-extrabold text-cyan/20 text-[7rem] leading-none select-none pointer-events-none"
                >
                  &ldquo;
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,200,232,0.06),transparent_60%)]"
                />
                <p className="relative font-display font-semibold text-xl md:text-[1.7rem] leading-snug text-white">
                  My Instagram had only 2,000 followers and we got{" "}
                  <span className="text-cyan">700,000 views</span> on a single
                  video — I was mind blown.
                </p>
              </div>
            </FadeUp>

            {/* Supporting quote — smaller, lighter card */}
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
                <div className="w-12 h-12 rounded-full bg-cyan/15 border border-cyan/40 flex items-center justify-center font-display font-bold text-cyan text-sm">
                  HP
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

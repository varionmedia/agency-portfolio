"use client";

import { FadeUp, WordReveal } from "@/components/ui/Reveal";
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
          <div className="space-y-8">
            <WordReveal
              as="p"
              text="“My Instagram account had only 2,000 followers and we got 700,000 views on a single video — I was mind blown.”"
              className="text-white/80 text-xl md:text-2xl leading-relaxed border-l-2 border-cyan/60 pl-5 block"
            />
            <FadeUp delay={0.15}>
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed border-l-2 border-cyan/60 pl-5">
                &ldquo;The pattern I noticed with other agencies was
                overpromising and underdelivering. With Umang, I was always
                impressed by how professional and dedicated he was.&rdquo;
              </p>
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

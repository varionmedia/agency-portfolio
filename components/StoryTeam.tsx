"use client";

import { FadeUp, WordReveal } from "@/components/ui/Reveal";

const team = [
  {
    name: "Umang Rawat",
    role: "Co-Founder · Strategy & SEO",
    bio: "Leads client strategy and search growth. Ensures every campaign is built around measurable outcomes.",
    initials: "UR",
  },
  {
    name: "Mann Desai",
    role: "Co-Founder · Social & Content",
    bio: "Leads content strategy, video production, and social growth across all accounts.",
    initials: "MD",
  },
];

export default function StoryTeam() {
  return (
    <section id="story" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-blue mb-8">
                <span className="h-px w-10 bg-blue/60" />
                Our Story
              </div>
            </FadeUp>
            <WordReveal
              as="h2"
              text="Most service professionals are exceptional at what they do — but invisible online."
              className="font-display font-bold text-3xl md:text-5xl leading-[1.12] tracking-tight"
            />
            <FadeUp delay={0.2}>
              <p className="mt-10 text-ink/70 max-w-2xl text-lg leading-relaxed">
                We started with a simple belief:{" "}
                <span className="text-blue font-medium">
                  great expertise deserves to be found.
                </span>{" "}
                Today we work with service professionals and coaches to build
                their online presence, generate consistent leads, and grow
                their business through strategies that are built around real
                results — not vanity metrics.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-10 font-accent text-blue text-3xl -rotate-2 inline-block">
                Momentum. Variation. Reliable.
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <FadeUp>
              <div className="font-display uppercase tracking-[0.25em] text-xs text-ink/40">
                The Team
              </div>
            </FadeUp>
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={0.1 + i * 0.12}>
                <article className="rounded-2xl border border-ink/10 bg-white p-6 flex gap-5 items-start shadow-[0_2px_20px_rgba(2,5,22,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  {/* TODO: Swap initials for team photos when provided */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-cyan text-white font-display font-bold flex items-center justify-center shrink-0 text-lg">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">
                      {member.name}
                    </h3>
                    <div className="text-xs uppercase tracking-[0.18em] text-blue mt-1">
                      {member.role}
                    </div>
                    <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

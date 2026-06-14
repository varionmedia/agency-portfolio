"use client";

import Image from "next/image";
import { FadeUp, WordReveal } from "@/components/ui/Reveal";

type Member = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

const team: Member[] = [
  {
    name: "Umang Rawat",
    role: "Strategy & SEO",
    bio: "Leads client strategy and search growth. Ensures every campaign is built around measurable outcomes.",
    photo: "/images/team/umang.png",
  },
  {
    name: "Mann Desai",
    role: "Social & Content",
    bio: "Leads content strategy, video production, and social growth across all accounts.",
    photo: "/images/team/mann.png",
  },
];

function PhotoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function TeamPhoto({ member }: { member: Member }) {
  if (member.photo) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink/15 bg-ink/[0.04]">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 1024px) 100vw, 32vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/5] w-full rounded-2xl border border-ink/15 bg-ink/[0.04] overflow-hidden flex flex-col items-center justify-center gap-2 text-ink/35">
      <PhotoIcon className="w-9 h-9" />
      <span className="font-display uppercase tracking-[0.2em] text-xs">
        {member.name}
      </span>
      <span className="text-[0.65rem] tracking-wide text-ink/30">
        Photo coming soon
      </span>
    </div>
  );
}

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-6 md:p-7 shadow-[0_14px_50px_rgba(2,5,22,0.12)]">
      <h3 className="font-display font-bold text-xl md:text-2xl">
        {member.name}
      </h3>
      <div className="mt-1.5 text-xs uppercase tracking-[0.18em] text-blue">
        {member.role}
      </div>
      <p className="mt-3 text-sm md:text-base text-ink/65 leading-relaxed">
        {member.bio}
      </p>
    </article>
  );
}

export default function StoryTeam() {
  const [umang, mann] = team;
  return (
    <section id="story" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        {/* Story */}
        <div className="max-w-3xl">
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
            <p className="mt-10 text-ink/70 text-lg leading-relaxed">
              We started with a simple belief:{" "}
              <span className="text-blue font-medium">
                great expertise deserves to be found.
              </span>{" "}
              Today we work with service professionals and coaches to build
              their online presence, generate consistent leads, and grow their
              business through strategies that are built around real results —
              not vanity metrics.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-8 font-accent text-blue text-3xl -rotate-2 inline-block">
              Momentum. Variation. Reliable.
            </div>
          </FadeUp>
        </div>

        {/* Team */}
        <FadeUp>
          <div className="mt-24 lg:mt-28 flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-blue">
            <span className="h-px w-10 bg-blue/60" />
            The Founders
          </div>
        </FadeUp>

        {/* Mobile / tablet: stacked */}
        <div className="lg:hidden mt-8 space-y-12">
          {team.map((member) => (
            <div key={member.name}>
              <TeamPhoto member={member} />
              <div className="relative z-10 -mt-10 mx-4">
                <TeamCard member={member} />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: two photos with bio cards in the centre gap */}
        <div className="hidden lg:block relative mt-12">
          <div className="flex justify-between items-start">
            {/* Umang — left */}
            <div className="w-[32%]">
              <TeamPhoto member={umang} />
            </div>
            {/* Mann — right */}
            <div className="w-[32%]">
              <TeamPhoto member={mann} />
            </div>
          </div>

          {/* Mann card — upper, touching Mann's (right) photo left edge */}
          <div className="absolute z-20 top-[5%] right-[31%] w-[28%]">
            <TeamCard member={mann} />
          </div>

          {/* Umang card — lower, touching Umang's (left) photo right edge */}
          <div className="absolute z-20 top-[52%] left-[31%] w-[28%]">
            <TeamCard member={umang} />
          </div>
        </div>
      </div>
    </section>
  );
}

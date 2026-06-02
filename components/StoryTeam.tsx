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
    <section id="story" className="relative border-t border-white/5 bg-navy-soft grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-6">
              Our Story
            </div>
            <p className="font-display font-semibold text-2xl md:text-4xl leading-tight">
              Varion Media was built on one observation —{" "}
              <span className="text-white/60">
                most service professionals are exceptional at what they do, but
                invisible online.
              </span>
            </p>
            <p className="mt-8 text-white/70 max-w-2xl leading-relaxed">
              We started with a simple belief:{" "}
              <span className="text-cyan font-medium">great expertise deserves to be found.</span>{" "}
              Today we work with service professionals and coaches to build
              their online presence, generate consistent leads, and grow their
              business through strategies that are built around real results —
              not vanity metrics.
            </p>
            <div className="mt-10 font-accent text-cyan text-2xl">
              Momentum. Variation. Reliable.
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="font-display uppercase tracking-[0.25em] text-xs text-white/40 mb-2">
              The Team
            </div>
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-white/10 bg-navy p-6 flex gap-5 items-start"
              >
                <div className="w-14 h-14 rounded-full bg-cyan/15 border border-cyan/40 text-cyan font-display font-bold flex items-center justify-center shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan/80 mt-1">
                    {member.role}
                  </div>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

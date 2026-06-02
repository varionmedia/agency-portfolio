export default function VideoTestimonial() {
  return (
    <section id="testimonial" className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-6">
          What Our Clients Say
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-soft border border-white/10 flex items-center justify-center">
            {/* TODO: Swap in YouTube embed once URL is provided */}
            <div className="text-center px-6">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-cyan/15 border border-cyan/40 flex items-center justify-center">
                <span className="text-cyan text-xl">▶</span>
              </div>
              <p className="font-display uppercase tracking-[0.2em] text-xs text-white/60">
                Video testimonial coming soon
              </p>
              <p className="mt-2 text-sm text-white/40">
                Dr. Harel Papikian · Clinical Psychologist, LA
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <figure>
              <blockquote className="font-display font-semibold text-2xl md:text-3xl leading-snug">
                <span className="text-cyan">&ldquo;</span>The pattern I noticed
                with other agencies was overpromising and underdelivering. With
                Umang, I was always impressed by how professional and dedicated
                he was.<span className="text-cyan">&rdquo;</span>
              </blockquote>
            </figure>
            <figure>
              <blockquote className="font-display font-semibold text-2xl md:text-3xl leading-snug">
                <span className="text-cyan">&ldquo;</span>My Instagram account
                had only 2,000 followers and we got{" "}
                <span className="text-cyan">700,000 views</span> on a single
                video — I was mind blown.<span className="text-cyan">&rdquo;</span>
              </blockquote>
            </figure>
            <figcaption className="text-sm text-white/60 border-l-2 border-cyan/60 pl-4">
              <div className="font-display font-semibold text-white">
                Dr. Harel Papikian
              </div>
              <div>
                Licensed Clinical Psychologist &amp; Couples Therapist, Los Angeles
              </div>
              <p className="mt-3 text-white/50 italic">
                Dr. Harel highly recommends Varion Media to any business looking
                to build a strong social media presence and attract active,
                engaged potential clients.
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}

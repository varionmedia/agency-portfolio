const services = [
  {
    number: "01",
    title: "SEO",
    copy: "Show up when your ideal clients are actively searching for you on Google. We build your organic presence to generate consistent, high-intent leads.",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    copy: "Turn your social media profile into a trust-building machine. We create content that builds your personal brand, grows your audience, and keeps potential clients engaged until they're ready to buy.",
  },
  {
    number: "03",
    title: "Meta Ads",
    copy: "Stop wasting ad spend on the wrong audience. We run targeted campaigns that bring you qualified leads at the right cost and maximize your return on every dollar spent.",
  },
  {
    number: "04",
    title: "AI Automation",
    copy: "Work smarter, not harder. We build custom AI tools — from CRM dashboards to writing agents — that save your team's time, cut operational costs, and improve output without hiring more people.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 bg-navy-soft grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-4">
              What We Do
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight max-w-2xl">
              Four levers. <span className="text-cyan">One trajectory.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            We pick the right mix for your business and own the outcome — not
            just the deliverable.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-navy p-8 md:p-10 transition-colors hover:bg-navy-soft"
            >
              <div className="font-display text-xs uppercase tracking-[0.25em] text-cyan/80">
                {s.number}
              </div>
              <h3 className="mt-4 font-display font-bold text-2xl md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">{s.copy}</p>
              <div className="mt-8 inline-flex items-center text-xs uppercase tracking-[0.18em] font-display font-semibold text-white/40 group-hover:text-cyan transition-colors">
                Learn more
                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

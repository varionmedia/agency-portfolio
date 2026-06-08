const businessTypes = [
  "Coaching",
  "Clinic / Healthcare",
  "Education",
  "Local services",
  "E-commerce",
  "Other",
];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative border-t border-white/5 bg-navy">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(0,200,232,0.15),transparent_70%)]"
      />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center">
          <div className="font-display uppercase tracking-[0.25em] text-xs text-cyan mb-6">
            Let&apos;s Build Your Trajectory
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            Let&apos;s talk about your business &amp; build a strategy that{" "}
            <span className="text-cyan">actually works.</span>
          </h2>
          <p className="mt-6 text-white/65 max-w-xl mx-auto">
            Tell us where you are and where you want to go. We&apos;ll come back
            within one business day with a starting point.
          </p>
        </div>

        <form
          className="mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
          action="mailto:hello@varionmedia.com"
          method="post"
          encType="text/plain"
        >
          <Field label="Your name" name="name" placeholder="Jane Doe" />
          <Field label="Email" name="email" type="email" placeholder="jane@business.com" />
          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-[0.18em] font-display text-white/50 mb-2">
              Business type
            </label>
            <select
              name="businessType"
              className="w-full bg-navy-soft border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors"
              defaultValue=""
              required
            >
              <option value="" disabled>Select one</option>
              {businessTypes.map((t) => (
                <option key={t} value={t} className="bg-navy">{t}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs uppercase tracking-[0.18em] font-display text-white/50 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="What are you trying to grow, and what's getting in the way?"
              className="w-full bg-navy-soft border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors resize-none"
            />
          </div>
          <div className="sm:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.18em] hover:bg-white transition-colors"
            >
              Book My Free Strategy Call
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-xs text-white/40">
          Form posts directly to hello@varionmedia.com — Supabase backend coming next.
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] font-display text-white/50 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full bg-navy-soft border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/40 transition-colors"
      />
    </div>
  );
}

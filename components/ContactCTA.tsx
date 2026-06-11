"use client";

import { FadeUp, WordReveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import Spotlight from "@/components/ui/Spotlight";

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
    <section id="contact" className="relative bg-navy grain overflow-hidden">
      <div aria-hidden className="v-lines absolute inset-0 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_110%,rgba(0,200,232,0.14),transparent_70%)]"
      />
      <Spotlight />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 md:py-32 relative z-[2]">
        <div className="text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-8">
              <span className="h-px w-10 bg-cyan/60" />
              Let&apos;s Build Your Trajectory
              <span className="h-px w-10 bg-cyan/60" />
            </div>
          </FadeUp>
          <WordReveal
            as="h2"
            text="Let's talk about your business & build a strategy that actually works."
            className="font-display font-extrabold text-3xl md:text-5xl leading-[1.1] tracking-tight max-w-3xl mx-auto block"
          />
          <FadeUp delay={0.2}>
            <p className="mt-6 text-white/65 max-w-xl mx-auto">
              Tell us where you are and where you want to go. We&apos;ll come
              back within one business day with a starting point.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.25}>
          <form
            className="mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
            action="mailto:hello@varionmedia.com"
            method="post"
            encType="text/plain"
          >
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@business.com"
            />
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
                <option value="" disabled>
                  Select one
                </option>
                {businessTypes.map((t) => (
                  <option key={t} value={t} className="bg-navy">
                    {t}
                  </option>
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
              <Magnetic>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.18em] hover:bg-white transition-colors"
                >
                  Book My Free Strategy Call
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </Magnetic>
            </div>
          </form>
        </FadeUp>
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

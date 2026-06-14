"use client";

import Image from "next/image";
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

const steps = [
  {
    n: "1",
    title: "Send your details",
    desc: "A few quick fields — about a minute.",
  },
  {
    n: "2",
    title: "We audit your presence",
    desc: "A free teardown of where you stand today.",
  },
  {
    n: "3",
    title: "30-min strategy call",
    desc: "With a founder, not a sales rep.",
  },
];

/* Icons */
const UserIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);
const MailIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const BriefcaseIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export default function ContactCTA() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const businessType = String(fd.get("businessType") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Strategy call request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness type: ${businessType}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@varionmedia.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative bg-navy grain overflow-hidden">
      <div aria-hidden className="v-lines absolute inset-0 pointer-events-none" />
      {/* Top separation seam + glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(0,200,232,0.08),transparent)]"
      />
      {/* Brand "trajectory" streak rising to the right */}
      <div
        aria-hidden
        className="absolute -inset-x-10 inset-y-0 pointer-events-none bg-[linear-gradient(62deg,transparent_42%,rgba(0,200,232,0.05)_50%,transparent_58%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_115%,rgba(0,200,232,0.14),transparent_70%)]"
      />
      <Spotlight />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-32 relative z-[2]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — pitch + guidance */}
          <div className="lg:pr-6">
            <FadeUp>
              <div className="inline-flex items-center gap-3 font-display uppercase tracking-[0.25em] text-xs text-cyan mb-7">
                <span className="h-px w-10 bg-cyan/60" />
                Let&apos;s Build Your Trajectory
              </div>
            </FadeUp>
            <WordReveal
              as="h2"
              text="Let's talk about your business & build a strategy that actually works."
              className="font-display font-extrabold text-3xl md:text-[2.9rem] leading-[1.1] tracking-tight block"
            />
            <FadeUp delay={0.15}>
              <p className="mt-6 text-white/65 max-w-md leading-relaxed">
                Tell us where you are and where you want to go. We&apos;ll come
                back within one business day with a starting point.
              </p>
            </FadeUp>

            {/* What happens next */}
            <FadeUp delay={0.2}>
              <ol className="relative mt-10 space-y-5">
                <span
                  aria-hidden
                  className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent"
                />
                {steps.map((s) => (
                  <li key={s.n} className="relative flex gap-4">
                    <span className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-navy border border-cyan/40 text-cyan flex items-center justify-center font-display font-bold text-xs">
                      {s.n}
                    </span>
                    <div className="pt-0.5">
                      <div className="font-display font-semibold text-white text-[0.95rem]">
                        {s.title}
                      </div>
                      <div className="text-white/50 text-sm mt-0.5">
                        {s.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeUp>

            {/* Founder sign-off */}
            <FadeUp delay={0.25}>
              <div className="mt-10 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  <Image
                    src="/images/team/umang.png"
                    alt="Umang Rawat"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-navy"
                  />
                  <Image
                    src="/images/team/mann.png"
                    alt="Mann Desai"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-navy"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-white/85 font-medium">
                    Umang &amp; Mann · Co-founders
                  </div>
                  <div className="text-white/45">
                    We read every message ourselves.
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT — form card */}
          <FadeUp delay={0.2}>
            <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] overflow-hidden">
              {/* Card top accent */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent"
              />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs text-cyan/80 mb-6">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <span className="uppercase tracking-[0.18em] font-display">
                    Takes about a minute
                  </span>
                </div>

                <form
                  className="grid sm:grid-cols-2 gap-5"
                  onSubmit={handleSubmit}
                >
                  <Field label="Your name" name="name" placeholder="Jane Doe" icon={UserIcon} />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@business.com"
                    icon={MailIcon}
                  />

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="businessType"
                      className="block text-[11px] uppercase tracking-[0.18em] font-display text-white/55 mb-2"
                    >
                      Business type
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none">
                        {BriefcaseIcon}
                      </span>
                      <select
                        id="businessType"
                        name="businessType"
                        className="w-full appearance-none bg-navy-soft/80 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white focus:outline-none focus:border-cyan/60 focus:ring-2 focus:ring-cyan/25 transition-all"
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
                      <span
                        aria-hidden
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      >
                        ▾
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.18em] font-display text-white/55 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="What are you trying to grow, and what's getting in the way?"
                      className="w-full bg-navy-soft/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:ring-2 focus:ring-cyan/25 transition-all resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-1">
                    <Magnetic>
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-cyan text-navy px-8 py-4 font-display font-bold text-sm uppercase tracking-[0.18em] hover:bg-white transition-colors shadow-[0_10px_40px_-10px_rgba(0,200,232,0.6)]"
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
                    <p className="text-center text-xs text-white/40 mt-3">
                      No obligation — just a clear next step.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  icon,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.18em] font-display text-white/55 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={name}
          type={type}
          name={name}
          required
          placeholder={placeholder}
          className={`w-full bg-navy-soft/80 border border-white/10 rounded-xl ${
            icon ? "pl-10" : "pl-4"
          } pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-cyan/60 focus:ring-2 focus:ring-cyan/25 transition-all`}
        />
      </div>
    </div>
  );
}

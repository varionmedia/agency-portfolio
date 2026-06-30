import Counter from "@/components/ui/Counter";
import { FadeUp } from "@/components/ui/Reveal";

const stats = [
  { value: 50, prefix: "", suffix: " Million+", decimals: 0, label: "views generated across all platforms" },
  { value: 5, prefix: "", suffix: " Million+", decimals: 0, label: "organic Google traffic generated through SEO" },
  { value: 1, prefix: "₹", suffix: " Crore+", decimals: 0, label: "Total ad spent (Meta + Google)" },
];

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-warm border-y border-white/10 grain">
      {/* centered glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(55%_80%_at_50%_50%,rgba(0,200,232,0.12),transparent_72%)]"
      />
      <div aria-hidden className="absolute inset-0 v-lines opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-24">
        <FadeUp>
          <div className="flex items-center justify-center gap-3 font-display uppercase tracking-[0.28em] text-[0.7rem] text-cyan/80 mb-12 md:mb-14">
            <span className="h-px w-10 bg-cyan/50" />
            By the numbers
            <span className="h-px w-10 bg-cyan/50" />
          </div>
        </FadeUp>

        <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="text-center px-4 py-8 sm:py-2">
                <dd>
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                    className="font-display font-extrabold text-4xl md:text-6xl text-cyan"
                  />
                </dd>
                <dt className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] text-white/55 max-w-[15rem] mx-auto leading-relaxed">
                  {s.label}
                </dt>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}

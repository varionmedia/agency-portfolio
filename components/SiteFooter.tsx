export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-extrabold tracking-[0.18em] uppercase text-sm">
            Varion<span className="text-cyan">.</span>Media
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            We don&apos;t just run campaigns. We build upward trajectories.
          </p>
        </div>
        <div className="text-sm text-white/70 space-y-2">
          <div className="font-display uppercase tracking-[0.18em] text-xs text-white/40 mb-2">
            Reach us
          </div>
          <div>
            <a
              href="mailto:admin@varionhq.com"
              className="hover:text-cyan transition-colors"
            >
              admin@varionhq.com
            </a>
          </div>
          <div className="text-white/40 italic">Social links coming soon</div>
        </div>
        <div className="text-sm text-white/70 space-y-2">
          <div className="font-display uppercase tracking-[0.18em] text-xs text-white/40 mb-2">
            Explore
          </div>
          <a href="#services" className="block hover:text-cyan transition-colors">Services</a>
          <a href="#case-studies" className="block hover:text-cyan transition-colors">Case Studies</a>
          <a href="#contact" className="block hover:text-cyan transition-colors">Contact</a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Varion Media. All rights reserved.</div>
          <div className="font-display uppercase tracking-[0.18em]">
            Momentum · Variation · Reliable
          </div>
        </div>
      </div>
    </footer>
  );
}

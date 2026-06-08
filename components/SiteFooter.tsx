const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/varionmedia/",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/varion-media/",
    Icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@VarionMedia",
    Icon: YouTubeIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590373334425",
    Icon: FacebookIcon,
  },
];

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
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-navy hover:bg-cyan hover:border-cyan transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-sm text-white/70 space-y-2">
          <div className="font-display uppercase tracking-[0.18em] text-xs text-white/40 mb-2">
            Reach us
          </div>
          <div>
            <a
              href="mailto:hello@varionmedia.com"
              className="hover:text-cyan transition-colors"
            >
              hello@varionmedia.com
            </a>
          </div>
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

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6 0h3.84v1.5h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 9.05 21 11.2 21 14v6.5h-4V14.8c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8H9v-11z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.6 1.7-1.6h1.6V3.3a23 23 0 0 0-2.5-.13c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4z" />
    </svg>
  );
}

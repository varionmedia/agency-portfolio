import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#case-studies" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-navy/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Varion Media home"
          className="inline-flex items-center"
        >
          <Image
            src="/images/logo/wordmark-sm.png"
            alt="Varion Media"
            width={851}
            height={587}
            priority
            className="h-10 w-auto block brightness-0 invert"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-cyan/60 text-cyan px-4 py-2 text-xs uppercase tracking-[0.18em] font-display font-semibold hover:bg-cyan hover:text-navy transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}

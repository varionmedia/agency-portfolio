import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#case-studies" },
  { label: "About", href: "/#story" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  // Solid (not frosted) background: a translucent backdrop-blur header reveals
  // the high-contrast vertical edges of content scrolling behind it (cream page
  // vs dark cards), which read as a flickering vertical seam. Solid navy is
  // clean over both the dark hero and the light sections.
  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Varion Media home" className="block">
          <Image
            src="/images/logo/wordmark-sm.png"
            alt="Varion Media"
            width={849}
            height={240}
            sizes="130px"
            priority
            className="h-9 w-auto block brightness-0 invert"
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
        {/* Plain <a> (not <Link>) so same-page hash scrolling works under Lenis. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center rounded-full border border-cyan/60 text-cyan px-4 py-2 text-xs uppercase tracking-[0.18em] font-display font-semibold hover:bg-cyan hover:text-navy transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}

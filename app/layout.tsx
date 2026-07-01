import type { Metadata } from "next";
import { Raleway, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/providers/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  // Used once, far below the fold — don't preload it so it doesn't compete
  // with the critical hero fonts on the initial load.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.varionmedia.com"),
  title: {
    default: "Varion Media — Digital Marketing Agency That Drives Leads",
    template: "%s · Varion Media",
  },
  description:
    "We build upward trajectories for service professionals and coaches through SEO, Social Media, and Paid Ads that actually deliver results.",
  applicationName: "Varion Media",
  authors: [{ name: "Varion Media" }],
  keywords: [
    "digital marketing agency",
    "SEO",
    "social media marketing",
    "Meta ads",
    "AI automation",
    "lead generation",
    "personal branding",
    "Varion Media",
  ],
  openGraph: {
    title: "Varion Media — Digital Marketing Agency",
    description:
      "We don't just run campaigns. We build upward trajectories.",
    url: "https://www.varionmedia.com",
    siteName: "Varion Media",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varion Media — Digital Marketing Agency",
    description:
      "We don't just run campaigns. We build upward trajectories.",
  },
  alternates: {
    canonical: "https://www.varionmedia.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Varion Media",
  url: "https://www.varionmedia.com",
  logo: "https://www.varionmedia.com/images/logo/icon-512.png",
  description:
    "Digital marketing agency for service professionals and coaches. SEO, Social Media, and Paid Ads that deliver real results.",
  email: "hello@varionmedia.com",
  founder: [
    { "@type": "Person", name: "Umang Rawat", jobTitle: "Co-Founder · Strategy & SEO" },
    { "@type": "Person", name: "Mann Desai", jobTitle: "Co-Founder · Social & Content" },
  ],
  sameAs: [
    "https://www.instagram.com/varionmedia/",
    "https://www.linkedin.com/in/varion-media/",
    "https://www.youtube.com/@VarionMedia",
    "https://www.facebook.com/profile.php?id=61590373334425",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-white font-sans selection:bg-cyan/30 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Raleway, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/ui/Cursor";

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
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.varionmedia.com"),
  title: {
    default: "Varion Media — Digital Marketing Agency That Drives Leads",
    template: "%s · Varion Media",
  },
  description:
    "We build upward trajectories for service professionals and coaches through SEO, Social Media, and Paid Ads that actually deliver results.",
  openGraph: {
    title: "Varion Media — Digital Marketing Agency",
    description:
      "We don't just run campaigns. We build upward trajectories.",
    url: "https://www.varionmedia.com",
    siteName: "Varion Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varion Media — Digital Marketing Agency",
    description:
      "We don't just run campaigns. We build upward trajectories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="has-custom-cursor min-h-full flex flex-col bg-navy text-white font-sans selection:bg-cyan/30 selection:text-white">
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}

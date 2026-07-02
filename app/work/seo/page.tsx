import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";
import SeoHero from "@/components/work/heroes/SeoHero";

export const metadata: Metadata = {
  title: "SEO Work — Rank Tracking, Traffic Growth & Content",
  description:
    "A look at the SEO work we ship for service professionals and coaches — keyword wins, organic traffic growth, and content built for topical authority.",
  alternates: { canonical: "https://www.varionmedia.com/work/seo" },
};

const config: WorkPageConfig = {
  slug: "seo",
  index: "01",
  accentLabel: "SEO",
  accentHex: "#10b981",
  title: "SEO work that compounds month after month.",
  positioning:
    "We don't chase rankings. We build the organic engine — technical, topical, and editorial — that turns search into a reliable lead channel.",
  marqueeItems: [
    "Rank Tracking",
    "Search Console",
    "Keywords Won",
    "Technical SEO",
    "Topical Authority",
    "Content Velocity",
    "Backlinks",
    "Traffic Growth",
  ],
  heroVisual: <SeoHero />,
  subcategories: [
    {
      id: "gmb",
      title: "Google Business Profile",
      description:
        "Local visibility that turns “near me” searches into calls, directions, and walk-ins — profile growth and Maps performance.",
      layout: "gallery",
      eyebrow: "Proof · Local SEO",
      galleryRatio: "16/9",
      images: [
        { src: "/images/work/seo/gmb/1.png", alt: "Google Business Profile performance" },
        { src: "/images/work/seo/gmb/2.png", alt: "Google Business Profile insights" },
        { src: "/images/work/seo/gmb/3.png", alt: "Google Business Profile growth" },
        { src: "/images/work/seo/gmb/4.png", alt: "300% traffic increase" },
      ],
    },
    {
      id: "search-console",
      title: "Google Search Console",
      description:
        "Clicks, impressions, and organic-traffic trajectories straight from Search Console on accounts we run end-to-end.",
      layout: "gallery",
      eyebrow: "Proof · Organic traffic",
      galleryRatio: "16/9",
      images: [
        { src: "/images/work/seo/search-console/1.png", alt: "Search Console traffic growth" },
        // { src: "/images/work/seo/search-console/2.png", alt: "Discover traffic comparison" }, // pending upload
        { src: "/images/work/seo/search-console/3.png", alt: "Web traffic achievement" },
      ],
    },
    {
      id: "ai-overview",
      title: "ChatGPT & AI Overviews",
      description:
        "Showing up where the next generation of search happens — cited in ChatGPT answers and Google’s AI Overviews for client queries.",
      layout: "gallery",
      eyebrow: "Proof · AI search",
      galleryRatio: "16/9",
      images: [
        { src: "/images/work/seo/ai-overview/1.jpeg", alt: "Cited in ChatGPT" },
        { src: "/images/work/seo/ai-overview/2.png", alt: "Featured in Google AI Overview" },
      ],
    },
    {
      id: "rankings",
      title: "Rankings",
      description:
        "Keyword positions and ranking distribution — the high-intent, commercial terms that actually convert.",
      layout: "gallery",
      eyebrow: "Proof · Keywords",
      galleryRatio: "16/9",
      images: [
        { src: "/images/work/seo/rankings/1.png", alt: "SEO keyword ranking" },
        { src: "/images/work/seo/rankings/2.png", alt: "Keyword ranking dashboard" },
        { src: "/images/work/seo/rankings/3.png", alt: "Keyword rankings across cities" },
        { src: "/images/work/seo/rankings/4.png", alt: "Organic keywords ranking" },
      ],
    },
    {
      id: "content-examples",
      title: "Content Examples",
      description:
        "Pillar pages, cluster posts, and editorial work built to earn rankings and read like a real publication.",
      kind: "script",
    },
  ],
  nextService: { label: "Social Media", href: "/work/social" },
};

export default function Page() {
  return <WorkPageShell config={config} />;
}

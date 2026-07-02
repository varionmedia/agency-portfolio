import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";
import MetaAdsHero from "@/components/work/heroes/MetaAdsHero";

export const metadata: Metadata = {
  title: "Meta Ads Work — Creatives, Campaigns & Funnel Performance",
  description:
    "Ad creatives, campaign dashboards, and the funnel performance behind them — paid Meta work for service-based businesses.",
  alternates: { canonical: "https://www.varionmedia.com/work/meta-ads" },
};

const config: WorkPageConfig = {
  slug: "meta-ads",
  index: "03",
  accentLabel: "Meta Ads",
  accentHex: "#facc15",
  title: "Paid campaigns that turn spend into a pipeline.",
  positioning:
    "Targeting, creative, and funnel — all owned in-house. We build the offer, ship the creative, and tune the spend until the cost per lead is one you'd run all year.",
  marqueeItems: [
    "Ad Creatives",
    "Campaign Results",
    "ROAS",
    "CPL",
    "Funnel",
    "Retargeting",
    "Audience Targeting",
    "Creative Testing",
  ],
  heroVisual: <MetaAdsHero />,
  subcategories: [
    {
      id: "campaign-results",
      title: "Campaign Results",
      description:
        "Ads-manager dashboards, CPL/ROAS snapshots, and the unit economics behind the campaigns we shipped.",
      layout: "gallery",
      eyebrow: "Proof · Performance",
      galleryMasonry: true,
      images: [
        { src: "/images/work/meta-ads/campaign-results/1.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/2.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/3.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/4.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/5.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/6.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/7.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
        { src: "/images/work/meta-ads/campaign-results/8.png", alt: "Meta Ads campaign results", w: 1280, h: 720 },
      ],
    },
  ],
  nextService: { label: "AI Automation", href: "/work/ai-automation" },
};

export default function Page() {
  return <WorkPageShell config={config} />;
}

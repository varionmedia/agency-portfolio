import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";

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
  subcategories: [
    {
      id: "ad-creatives",
      title: "Ad Creatives",
      description:
        "Static, motion, and short-form video creatives — the variations that won the auctions on actual client accounts.",
      kind: "ad",
    },
    {
      id: "campaign-results",
      title: "Campaign Results",
      description:
        "Ads-manager dashboards, CPL/ROAS snapshots, and the unit economics behind the campaigns we shipped.",
      kind: "dashboard",
    },
    {
      id: "funnel-performance",
      title: "Funnel Performance",
      description:
        "Landing-page and form-flow performance — where clicks turn into leads, and leads turn into booked calls.",
      kind: "screenshot",
    },
  ],
  nextService: { label: "AI Automation", href: "/work/ai-automation" },
};

export default function Page() {
  return <WorkPageShell config={config} />;
}

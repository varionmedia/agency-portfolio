import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";

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
  subcategories: [
    {
      id: "rank-tracking",
      title: "Rank Tracking",
      description:
        "Live keyword positions and movement across client campaigns — from local-intent to commercial high-value terms.",
      kind: "screenshot",
    },
    {
      id: "traffic-growth",
      title: "Traffic Growth",
      description:
        "Search Console and analytics snapshots showing organic-traffic trajectories on accounts we've owned end-to-end.",
      kind: "screenshot",
    },
    {
      id: "keywords-won",
      title: "Keywords Won",
      description:
        "Top-5 and top-3 wins for high-intent commercial keywords — the queries that actually convert.",
      kind: "graphic",
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

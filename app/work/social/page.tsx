import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";

export const metadata: Metadata = {
  title: "Social Media Work — Video Editing, Graphics & Top Scripts",
  description:
    "Reels, graphics, and the scripts behind the work — a look at the social content we build for service professionals and coaches.",
  alternates: { canonical: "https://www.varionmedia.com/work/social" },
};

const config: WorkPageConfig = {
  slug: "social",
  index: "02",
  accentLabel: "Social Media",
  accentHex: "#ec4899",
  title: "Content built to grow audiences and convert them.",
  positioning:
    "Reels that earn the algorithm. Graphics that earn the brand. Scripts that earn the save. Every piece engineered to move someone from a stranger to a client.",
  subcategories: [
    {
      id: "video-editing",
      title: "Video Editing",
      description:
        "Reels and short-form edits across personal-brand, education, and authority-content formats.",
      kind: "video",
    },
    {
      id: "graphic-designing",
      title: "Graphic Designing",
      description:
        "Feed posts, carousels, quote cards, and brand-system graphics that hold up across an entire account.",
      kind: "graphic",
    },
    {
      id: "top-performing-scripts",
      title: "Top Performing Scripts",
      description:
        "The hooks, beats, and CTAs behind reels that broke the audience ceiling. The actual writing — not the case-study summary.",
      kind: "script",
    },
  ],
  nextService: { label: "Meta Ads", href: "/work/meta-ads" },
};

export default function Page() {
  return <WorkPageShell config={config} />;
}

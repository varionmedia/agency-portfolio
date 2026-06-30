import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";
import SocialHero from "@/components/work/heroes/SocialHero";

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
  marqueeItems: [
    "Reels",
    "Carousels",
    "Hooks",
    "Personal Brand",
    "Video Editing",
    "Graphic Design",
    "Scripts",
    "Engagement",
  ],
  heroVisual: <SocialHero />,
  subcategories: [
    {
      id: "video-editing",
      title: "Video Editing",
      description:
        "Reels and short-form edits across personal-brand, education, and authority-content formats.",
      layout: "video",
      // Shuffled so each 4-up viewport mixes creators.
      videos: [
        { youtubeId: "fO2xWS1W_1I" },
        { youtubeId: "1J1vHHeN3z0" },
        { youtubeId: "9xjaDGNJwBo" },
        { youtubeId: "d5IUc7hdesw" },
        { youtubeId: "WvaGbGvKSFg" },
        { youtubeId: "fljSeNjJRBk" },
        { youtubeId: "2SztPQwnuTo" },
        { youtubeId: "Z-AUG9AXJjc" },
        { youtubeId: "8mFQPfzX66o" },
        { youtubeId: "El3QayvxGmY" },
        { youtubeId: "08CTzAbLWt4" },
        { youtubeId: "h5OU6y4pcoA" },
      ],
      landscapeVideoCount: 3,
      // landscapeVideos: [{ youtubeId: "..." }, ...]  ← 3 × 16:9 videos
    },
    {
      id: "graphic-designing",
      title: "Graphic Designing",
      description:
        "Feed posts, carousels, quote cards, and brand-system graphics that hold up across an entire account — organised by format.",
      layout: "graphics",
      graphicGroups: [
        { id: "stories", ratio: "9/16", label: "Stories & Reel Covers", count: 8 },
        { id: "posts", ratio: "4/5", label: "Feed Posts & Carousels", count: 8 },
        { id: "landscape", ratio: "16/9", label: "Banners & Thumbnails", count: 8 },
      ],
    },
    {
      id: "top-performing-scripts",
      title: "Top Performing Scripts",
      description:
        "The hooks, beats, and CTAs behind reels that broke the audience ceiling. The actual writing — not the case-study summary.",
      layout: "scripts",
      scriptCount: 4,
      // scripts: [{ title, hook, metric, docUrl }]  ← add doc links for in-page reading
    },
  ],
  nextService: { label: "Meta Ads", href: "/work/meta-ads" },
};

export default function Page() {
  return <WorkPageShell config={config} />;
}

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
    "Video Editing",
    "Instagram Analytics",
    "Meme Marketing",
    "YouTube Analytics",
    "Personal Brand",
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
      // First reel autoplays (muted); the rest are click-to-play.
      // Shuffled so each 4-up viewport mixes creators.
      videos: [
        { youtubeId: "1J1vHHeN3z0" },
        { youtubeId: "fO2xWS1W_1I" },
        { youtubeId: "8mFQPfzX66o" },
        { youtubeId: "d5IUc7hdesw" },
        { youtubeId: "9xjaDGNJwBo" },
        { youtubeId: "fljSeNjJRBk" },
        { youtubeId: "2SztPQwnuTo" },
        { youtubeId: "Z-AUG9AXJjc" },
        { youtubeId: "El3QayvxGmY" },
        { youtubeId: "h5OU6y4pcoA" },
        { youtubeId: "08CTzAbLWt4" },
        { youtubeId: "WvaGbGvKSFg" },
      ],
      // 3 × 16:9 long-form / landscape edits
      landscapeVideos: [
        { youtubeId: "zxvCqZ5wz1k" },
        { youtubeId: "PrV3_jq4rWY" },
        { youtubeId: "2zuFFihVbxE" },
      ],
    },
    {
      id: "instagram-analytics",
      title: "Instagram Analytics",
      description:
        "Real account analytics — reach, views, and follower growth from the reels and content we produce.",
      layout: "gallery",
      eyebrow: "Proof · Growth",
      galleryRatio: "9/16",
      images: [
        { src: "/images/work/social/instagram-analytics/1.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/2.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/3.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/4.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/5.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/6.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/7.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/8.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/9.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/10.png", alt: "Instagram analytics" },
        { src: "/images/work/social/instagram-analytics/11.png", alt: "Instagram analytics" },
      ],
    },
    {
      id: "meme-marketing",
      title: "Meme Marketing",
      description:
        "Culture-first meme content engineered for reach and shares — the format that lands brands in the feed and the group chat.",
      layout: "gallery",
      eyebrow: "Proof · Reach",
      galleryRatio: "9/16",
      images: [
        { src: "/images/work/social/meme-marketing/1.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/2.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/3.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/4.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/5.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/6.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/7.png", alt: "Meme marketing reach" },
        { src: "/images/work/social/meme-marketing/8.png", alt: "Meme marketing reach" },
      ],
    },
    {
      id: "youtube-analytics",
      title: "YouTube Analytics",
      description:
        "Long-form watch time, subscribers, and views — YouTube Studio analytics from the channels we produce for.",
      layout: "gallery",
      eyebrow: "Proof · Watch time",
      galleryMasonry: true,
      images: [
        { src: "/images/work/social/youtube-analytics/ravi-taori.png", alt: "Ravi Taori YouTube analytics", w: 1456, h: 745 },
        { src: "/images/work/social/youtube-analytics/mann-desai.png", alt: "Mann Desai YouTube analytics", w: 1445, h: 687 },
        { src: "/images/work/social/youtube-analytics/mann-desai-shorts.png", alt: "Mann Desai YouTube Shorts views", w: 1280, h: 720 },
        { src: "/images/work/social/youtube-analytics/vsi.png", alt: "VSI YouTube analytics", w: 1912, h: 887 },
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

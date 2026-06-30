import type { TileKind } from "@/components/work/MediaTile";

export type GraphicRatio = "9/16" | "4/5" | "16/9";

export type VideoItem = {
  youtubeId?: string;
  label?: string;
};

export type GraphicItem = {
  src?: string;
  alt?: string;
};

export type GraphicGroup = {
  id: string;
  ratio: GraphicRatio;
  label: string;
  count?: number;
  items?: GraphicItem[];
};

export type ScriptItem = {
  title: string;
  hook?: string;
  metric?: string;
  /** Embeddable doc URL (e.g. Google Doc .../preview). Opens in an in-page modal. */
  docUrl?: string;
  /** Fallback body paragraphs shown in the modal when no docUrl is set. */
  body?: string[];
};

export type WorkSubcategory = {
  id: string;
  title: string;
  description: string;
  /** Layout strategy. Defaults to "framed" (the medium-framed placeholder grid). */
  layout?: "framed" | "video" | "graphics" | "scripts";

  // framed
  kind?: TileKind;
  count?: number;

  // video
  videos?: VideoItem[];
  videoCount?: number;
  /** Optional static 16:9 row rendered below the reel carousel (no arrows). */
  landscapeVideos?: VideoItem[];
  landscapeVideoCount?: number;

  // graphics
  graphicGroups?: GraphicGroup[];

  // scripts
  scripts?: ScriptItem[];
  scriptCount?: number;
};

export type WorkPageConfig = {
  slug: string;
  index: string;
  title: string;
  positioning: string;
  accentHex: string;
  accentLabel: string;
  subcategories: WorkSubcategory[];
  nextService?: { label: string; href: string };
  heroVisual?: React.ReactNode;
  marqueeItems?: string[];
};

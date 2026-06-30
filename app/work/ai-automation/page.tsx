import type { Metadata } from "next";
import WorkPageShell, { type WorkPageConfig } from "@/components/work/WorkPageShell";
import AiAutomationHero from "@/components/work/heroes/AiAutomationHero";

export const metadata: Metadata = {
  title: "AI Automation Work — Tools, Dashboards & Workflow Demos",
  description:
    "Custom AI tools, CRM dashboards, and workflow automations we've built for service businesses — practical AI that pays for itself.",
  alternates: { canonical: "https://www.varionmedia.com/work/ai-automation" },
};

const config: WorkPageConfig = {
  slug: "ai-automation",
  index: "04",
  accentLabel: "AI Automation",
  accentHex: "#a855f7",
  title: "AI that earns its keep — every workflow, every week.",
  positioning:
    "Custom tools that remove the busywork — lead scoring, content drafting, CRM hygiene, reporting. We build, deploy, and own the result.",
  marqueeItems: [
    "Tools Built",
    "Dashboards",
    "Workflow Demos",
    "AI Agents",
    "CRM Hygiene",
    "Lead Scoring",
    "Email Agents",
    "Automation",
  ],
  heroVisual: <AiAutomationHero />,
  subcategories: [
    {
      id: "tools-built",
      title: "Tools Built",
      description:
        "Custom agents, scoring models, and writing assistants — built for specific client workflows, not generic copy-paste.",
      kind: "workflow",
    },
    {
      id: "dashboards",
      title: "Dashboards",
      description:
        "Internal CRMs, pipeline views, and reporting dashboards that pull the right numbers into one screen.",
      kind: "dashboard",
    },
    {
      id: "workflow-demos",
      title: "Workflow Demos",
      description:
        "Recorded demos of automations running end-to-end — lead in, follow-up out, CRM updated.",
      kind: "video",
    },
  ],
  nextService: { label: "SEO", href: "/work/seo" },
};

export default function Page() {
  return <WorkPageShell config={config} />;
}

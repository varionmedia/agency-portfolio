import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import ClientsStrip from "@/components/ClientsStrip";
import Services from "@/components/Services";

// Below-the-fold sections are code-split into their own chunks so they stay out
// of the initial bundle (lighter first load / faster interactivity). Default
// dynamic() keeps SSR on, so the HTML, content, and behaviour are unchanged.
const VideoTestimonial = dynamic(() => import("@/components/VideoTestimonial"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const StoryTeam = dynamic(() => import("@/components/StoryTeam"));
const ContactCTA = dynamic(() => import("@/components/ContactCTA"));

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ClientsStrip />
      <VideoTestimonial />
      <Services />
      <CaseStudies />
      <StoryTeam />
      <ContactCTA />
    </>
  );
}

import Hero from "@/components/Hero";
import TickerMarquee from "@/components/TickerMarquee";
import VideoTestimonial from "@/components/VideoTestimonial";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import StoryTeam from "@/components/StoryTeam";
import ClientsStrip from "@/components/ClientsStrip";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <VideoTestimonial />
      <Services />
      <CaseStudies />
      <StoryTeam />
      <TickerMarquee />
      <ContactCTA />
    </>
  );
}

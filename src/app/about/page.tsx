import AboutFounders from "@/components/about/AboutFounders";
import AboutHashNavigation from "@/components/about/AboutHashNavigation";
import AboutIntro from "@/components/about/AboutIntro";
import AboutPageCTA from "@/components/about/AboutPageCTA";
import AboutServices from "@/components/about/AboutServices";
import AboutStory from "@/components/about/AboutStory";
import VisionMissionValues from "@/components/about/VisionMissionValues";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHashNavigation />
      <AboutIntro />
      <AboutStory />
      <VisionMissionValues />
      <AboutFounders />

      <AboutPageCTA
        eyebrow="Work with ZUNOKS"
        title="Let’s turn your next business challenge into meaningful progress."
        description="Connect with the ZUNOKS team to discuss consulting, transformation, leadership, talent or organizational challenges."
        href="/contact"
        buttonLabel="Start a conversation"
      />

      <AboutServices />
    </main>
  );
}

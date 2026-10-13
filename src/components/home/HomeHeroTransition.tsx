import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";

export default function HomeHeroTransition() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 h-[100svh] min-h-[640px]">
        <Hero />
      </div>

      <div className="home-section-compact relative z-20 min-h-[100svh] overflow-hidden rounded-t-[1.5rem] bg-[#f3f3ef] shadow-[0_-25px_70px_rgba(0,0,0,0.12)] md:rounded-t-[2rem]">
        <ServicesOverview />
      </div>
    </div>
  );
}

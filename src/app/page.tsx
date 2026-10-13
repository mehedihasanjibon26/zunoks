import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TransformationOverview from "@/components/home/TransformationOverview";
import ClientImpactOverview from "@/components/home/ClientImpactOverview";
import FoundersOverview from "@/components/home/FoundersOverview";
import GamifiedRecruitmentOverview from "@/components/home/GamifiedRecruitmentOverview";
import WorkWithUsOverview from "@/components/home/WorkWithUsOverview";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-black">
      {/* HERO */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* SERVICES */}
      <div className="home-section-compact relative z-20">
        <ServicesOverview />
      </div>

      {/* TRANSFORMATION */}
      <div className="home-section-compact relative z-30">
        <TransformationOverview />
      </div>

      {/* CLIENT IMPACT */}
      <div className="home-section-compact relative z-40">
        <ClientImpactOverview />
      </div>

      {/* FOUNDERS */}
      <div className="home-section-compact relative z-50">
        <FoundersOverview />
      </div>

      {/* GAMIFIED RECRUITMENT */}
      <div className="home-section-compact relative z-[60]">
        <GamifiedRecruitmentOverview />
      </div>

      {/* WORK WITH US */}
      <div className="home-section-compact relative z-[70]">
        <WorkWithUsOverview />
      </div>
    </main>
  );
}

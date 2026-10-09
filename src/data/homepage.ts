import { primaryCTA } from "./global";
import { partners } from "./partners";
import { services } from "./services";

export type ContentIntro = { eyebrow: string; title: string; description: string };
export type CredibilityStat = {
  value: string;
  label: string;
  source: string;
  status: "source-reported" | "derived";
  note: string;
};

// Editorial copy based on https://www.zunoks.com/ and /about/;
// supporting source: docs/ZUNOKS - Company Profile - 2023.pdf, pp. 2-4, 9.
// Source-reported experience is not an independently verified or live metric.
export const credibilityStats: CredibilityStat[] = [
  { value: "120+", label: "Years of combined experience", source: "Company Profile 2023, p. 2; https://www.zunoks.com/about/", status: "source-reported", note: "Combined professional experience stated by ZUNOKS; not company age. Confirm before publication." },
  { value: String(partners.length), label: "Founding partners", source: "https://www.zunoks.com/about/", status: "derived", note: "Count of the four published founder profiles." },
  { value: String(services.length), label: "Service areas", source: "https://www.zunoks.com/", status: "derived", note: "Count of current website service categories." },
];

export const homepage = {
  hero: {
    eyebrow: "ZUNOKS | Inspire to Innovate",
    title: "Experience that moves business forward.",
    description: "Practical consulting across strategy, people, operations and leadership.",
    primaryCTA,
    secondaryCTA: { label: "Explore Our Expertise", href: "/services" },
  },
  credibilityStats,
  whyZunoks: {
    title: "Perspective built through practice.",
    points: [
      { title: "Leadership experience", description: "Partners bring hands-on corporate and operational experience." },
      { title: "Connected expertise", description: "Business priorities shape our work across people, strategy and operations." },
      { title: "Lasting partnerships", description: "Collaboration and mutual respect guide how we work." },
    ],
  },
  story: [
    { label: "Yesterday", title: "Learning through leadership.", description: "Four professionals built careers across organizations and markets, beginning in the 1980s." },
    { label: "Today", title: "Experience brought together.", description: "ZUNOKS connects their expertise through a shared consulting practice." },
    { label: "Tomorrow", title: "Contributing to progress.", description: "Our ambition is to help enterprises grow and contribute to sustainable development." },
  ],
  leadershipIntro: { eyebrow: "Our Partners", title: "Meet the people behind ZUNOKS.", description: "Four founders. Complementary perspectives on business and leadership." },
  servicesIntro: { eyebrow: "Our Expertise", title: "From direction to delivery.", description: "Explore support across strategy, HR, talent, operations, coaching and shared services." },
  impactIntro: { eyebrow: "Case Studies & Client Impact", title: "Explore the work in practice.", description: "Illustrative scenarios show how ZUNOKS service areas can address business challenges. Demo content, not client results.", isDummy: true },
  gamifiedRecruitment: {
    eyebrow: "Gamified Recruitment",
    title: "A different way to explore talent.",
    description: "Discover ZUNOKS' game-based assessment offering as part of a considered recruitment process.",
    cta: { label: "Explore Gamified Recruitment", href: "/services/gamified-recruitment" },
    sourceUrl: "https://www.zunoks.com/services/gamified-recruitment/",
  },
  insightsIntro: { eyebrow: "News & Blogs", title: "Questions worth exploring.", description: "Demo editorial topics across leadership, transformation and the future of talent.", isDummy: true },
  socialImpactIntro: { eyebrow: "Social Impact", title: "Committed to Society", description: "A ZUNOKS value, explored through illustrative ideas for learning and contribution.", isDummy: true },
  careersIntro: { eyebrow: "Careers", title: "Bring your perspective.", description: "Explore consulting with ZUNOKS, from early-career learning to specialist contribution." },
  finalCTA: { title: "What comes next for your organization?", description: "Start a conversation with ZUNOKS.", button: primaryCTA },
};

export type HomepageContent = typeof homepage;

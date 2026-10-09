export type ImpactPillar = {
  slug: string;
  title: string;
  description: string;
  isDummy: true;
};

export type ImpactInitiative = {
  slug: string;
  title: string;
  pillarSlug: string;
  description: string;
  status: "Illustrative concept - not an active programme";
  isDummy: true;
};

// Value source: https://www.zunoks.com/about/;
// docs/ZUNOKS - Company Profile - 2023.pdf, pp. 3-4.
// The proposed pillars/initiatives are demo concepts, not claims of existing CSR work.
export const socialImpact = {
  purposeIntro: {
    title: "Expertise with a wider purpose.",
    description: "ZUNOKS' stated ambition connects enterprise progress with national and sustainable development.",
  },
  commitment: {
    title: "Committed to Society",
    description: "A stated ZUNOKS value. The concepts below illustrate how a future social-impact programme could take shape.",
  },
  sourceUrl: "https://www.zunoks.com/about/",
};

export const impactPillars: ImpactPillar[] = [
  { slug: "career-readiness", title: "Career readiness", description: "Demo pillar: share practical knowledge with people beginning their professional journey.", isDummy: true },
  { slug: "inclusive-participation", title: "Inclusive participation", description: "Demo pillar: explore ways for varied professional experiences to contribute.", isDummy: true },
  { slug: "responsible-enterprise", title: "Responsible enterprise", description: "Demo pillar: encourage discussion of thoughtful management practices.", isDummy: true },
];

export const impactInitiatives: ImpactInitiative[] = [
  { slug: "demo-career-conversations", title: "Career Conversations", pillarSlug: "career-readiness", description: "A fictional ZUNOKS mentoring-circle concept for early-career professionals.", status: "Illustrative concept - not an active programme", isDummy: true },
  { slug: "demo-return-to-practice", title: "Return to Practice", pillarSlug: "inclusive-participation", description: "A fictional peer-learning concept for professionals exploring a return after a career break.", status: "Illustrative concept - not an active programme", isDummy: true },
  { slug: "demo-management-for-community", title: "Management for Community", pillarSlug: "responsible-enterprise", description: "A fictional workshop concept exploring planning and governance with community organizations.", status: "Illustrative concept - not an active programme", isDummy: true },
];

export type SocialImpactContent = typeof socialImpact;

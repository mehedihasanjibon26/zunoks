import type { Industry } from "./clients";

export type CaseStudy = {
  slug: string;
  title: string;
  industry: Industry;
  service: string;
  challenge: string;
  approach: string;
  impact: string;
  image: string;
  isDummy: true;
};

// Fictional ZUNOKS demo scenarios, not actual engagements or achieved results.
// Service values match src/data/services.ts slugs. Image paths are unprovided placeholders.
export const caseStudies: CaseStudy[] = [
  {
    slug: "demo-aligning-teams-after-a-merger",
    title: "Aligning teams after a merger",
    industry: "Telecommunications",
    service: "strategic-interventions",
    challenge: "Demo: two organizations need a shared operating direction after a merger.",
    approach: "Illustrate a ZUNOKS approach using leadership workshops, role mapping and a staged employee-transition plan.",
    impact: "Intended outcome: clearer responsibilities and a shared transition roadmap. No measured client result is claimed.",
    image: "/images/case-studies/merger-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-connecting-production-and-demand",
    title: "Connecting production and demand",
    industry: "Food & Beverage",
    service: "manufacturing-supply-chain",
    challenge: "Demo: production and sales teams plan on different assumptions.",
    approach: "Illustrate process mapping, a common planning cadence and an S&OP review across functions.",
    impact: "Intended outcome: a coordinated planning process and clearer operating decisions. No productivity or cost savings are asserted.",
    image: "/images/case-studies/operations-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-rethinking-performance-conversations",
    title: "Rethinking performance conversations",
    industry: "Banking",
    service: "human-resources",
    challenge: "Demo: managers need a consistent way to connect individual goals with business priorities.",
    approach: "Illustrate an HR review, role-based objectives and manager guidance for regular feedback.",
    impact: "Intended outcome: a clearer performance framework. Employee or business improvements have not been measured.",
    image: "/images/case-studies/people-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-defining-a-leadership-search",
    title: "Defining a leadership search",
    industry: "Pharmaceuticals",
    service: "executive-search",
    challenge: "Demo: an organization needs to define its requirements for a senior operations leader.",
    approach: "Illustrate a role brief, talent mapping and structured assessment against agreed leadership criteria.",
    impact: "Intended outcome: a considered shortlist for discussion. No appointment or hiring outcome is claimed.",
    image: "/images/case-studies/search-placeholder.webp",
    isDummy: true,
  },
];

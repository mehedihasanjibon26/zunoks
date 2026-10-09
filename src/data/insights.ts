export type Insight = {
  slug: string;
  title: string;
  category: "Leadership" | "Transformation" | "HR" | "Manufacturing & Supply Chain" | "Executive Search" | "Future of Talent";
  excerpt: string;
  date: string;
  author: string;
  image: string;
  isDummy: true;
};

// Demo editorial concepts only: dates/bylines are fictional, not publication records.
// No articles or image assets are provided; topics align with ZUNOKS service areas.
export const insights: Insight[] = [
  {
    slug: "demo-leading-through-uncertainty",
    title: "Leading when the next step is unclear",
    category: "Leadership",
    excerpt: "A ZUNOKS demo topic on the questions leaders can ask to create direction during uncertainty.",
    date: "2026-09-02",
    author: "ZUNOKS Editorial (demo)",
    image: "/images/insights/leadership-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-making-transformation-practical",
    title: "Turning transformation priorities into everyday decisions",
    category: "Transformation",
    excerpt: "An illustrative exploration of ownership, operating rhythms and communication during change.",
    date: "2026-09-08",
    author: "ZUNOKS Editorial (demo)",
    image: "/images/insights/transformation-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-hr-and-business-priorities",
    title: "Where people strategy meets business priorities",
    category: "HR",
    excerpt: "A demo discussion of aligning roles, performance conversations and development with organizational needs.",
    date: "2026-09-14",
    author: "ZUNOKS Editorial (demo)",
    image: "/images/insights/hr-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-better-planning-conversations",
    title: "Bringing demand and production into one conversation",
    category: "Manufacturing & Supply Chain",
    excerpt: "A ZUNOKS demo topic on cross-functional planning and the practical questions behind S&OP.",
    date: "2026-09-20",
    author: "ZUNOKS Editorial (demo)",
    image: "/images/insights/supply-chain-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-before-the-executive-shortlist",
    title: "The work before an executive shortlist",
    category: "Executive Search",
    excerpt: "An illustrative look at defining leadership requirements before assessing potential candidates.",
    date: "2026-09-26",
    author: "ZUNOKS Editorial (demo)",
    image: "/images/insights/search-placeholder.webp",
    isDummy: true,
  },
  {
    slug: "demo-rethinking-talent-assessment",
    title: "New assessment formats, thoughtful hiring decisions",
    category: "Future of Talent",
    excerpt: "A demo exploration of candidate experience, game-based assessment and the continuing role of human judgment.",
    date: "2026-10-02",
    author: "ZUNOKS Editorial (demo)",
    image: "/images/insights/talent-placeholder.webp",
    isDummy: true,
  },
];

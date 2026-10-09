export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  eyebrow: string;
  summary: string;
  intro: string;
  capabilities: string[];
  outcomes: string[];
  visualDirection: string;
  accent: "green" | "orange";
};

export const services: ServiceItem[] = [
  {
    slug: "strategic-interventions",
    title: "Strategic Interventions",
    eyebrow: "Strategy & Transformation",
    summary:
      "Helping organizations define direction, navigate transformation, strengthen governance, and translate strategic priorities into executable action.",
    intro:
      "ZUNOKS supports organizations across business strategy, transformation, mergers and acquisitions, enterprise performance, organizational design, ethics, compliance, and risk management.",
    capabilities: [
      "Business Strategy",
      "Transformation",
      "Merger & Acquisition",
      "Enterprise Performance Management",
      "Organizational Design / Structure",
      "Ethics & Compliance",
      "Risk Management",
    ],
    outcomes: [
      "Sharper strategic direction",
      "Stronger organizational alignment",
      "More effective transformation execution",
      "Improved governance and performance visibility",
    ],
    visualDirection:
      "Boardroom-grade editorial composition with structural diagrams, transformation pathways, connected systems, and controlled motion.",
    accent: "green",
  },

  {
    slug: "human-resources",
    title: "Human Resources",
    eyebrow: "People & Organization",
    summary:
      "Aligning culture, leadership, talent, performance, and people systems with business priorities.",
    intro:
      "ZUNOKS approaches Human Resources as a business-performance function, helping organizations build stronger cultures, leadership capability, talent pipelines, performance systems, and employee practices.",
    capabilities: [
      "Culture",
      "Leadership",
      "Performance Management",
      "Total Talent Management",
      "Succession",
      "Job Evaluation",
      "Compensation & Benefit Survey",
      "Reward Design & Recognition",
      "Employee Engagement",
      "HR Maturity Assessment",
      "Employee & Industrial Relations",
    ],
    outcomes: [
      "Stronger organizational capability",
      "Better leadership alignment",
      "More effective talent systems",
      "Improved employee engagement and performance",
    ],
    visualDirection:
      "Human-centered editorial storytelling with interconnected people, culture, leadership, and performance themes.",
    accent: "orange",
  },

  {
    slug: "gamified-recruitment",
    title: "Gamified Recruitment",
    eyebrow: "Talent Technology",
    summary:
      "Using gamified assessment approaches to make talent evaluation more engaging, structured, and insight-driven.",
    intro:
      "ZUNOKS presents gamified recruitment as a technology-enabled talent solution that can support candidate assessment across personality, aptitude, cognitive ability, and behavior.",
    capabilities: [
      "Gamified Talent Assessment",
      "Candidate Pre-screening",
      "Personality Assessment",
      "Cognitive Ability Assessment",
      "Aptitude Assessment",
      "Behavioral Assessment",
      "Talent Insight",
    ],
    outcomes: [
      "More engaging candidate experience",
      "Structured assessment before shortlisting",
      "Improved talent insight",
      "More data-informed recruitment decisions",
    ],
    visualDirection:
      "High-energy interactive digital scene with assessment signals, moving data nodes, candidate pathways, and game-inspired motion while preserving ZUNOKS branding.",
    accent: "orange",
  },

  {
    slug: "manufacturing-supply-chain",
    title: "Manufacturing & Supply Chain",
    eyebrow: "Operations Excellence",
    summary:
      "Improving manufacturing performance, supply-chain effectiveness, productivity, and operational resilience.",
    intro:
      "ZUNOKS brings hands-on experience in manufacturing excellence, supply-chain optimization, greenfield projects, process re-engineering, ERP-enabled operations, S&OP, project management, health and safety, compliance, and risk.",
    capabilities: [
      "Manufacturing Excellence",
      "Supply-Chain Optimization",
      "Greenfield Projects",
      "Process Re-engineering",
      "ERP",
      "S&OP",
      "Project Management",
      "Health & Safety",
      "Compliance & Risk",
    ],
    outcomes: [
      "Higher operational efficiency",
      "Improved productivity",
      "Reduced complexity",
      "Stronger supply-chain performance",
      "Better use of assets and working capital",
    ],
    visualDirection:
      "Industrial, process-driven visual storytelling using operational flows, system diagrams, production rhythm, and performance data.",
    accent: "green",
  },

  {
    slug: "executive-search",
    title: "Executive Search",
    eyebrow: "Leadership Talent",
    summary:
      "Identifying and assessing senior leaders who fit both the role and the organization they are expected to lead.",
    intro:
      "ZUNOKS provides executive and board-level search support with emphasis on leadership capability, business relevance, cultural fit, and long-term organizational alignment.",
    capabilities: [
      "Board-level Search",
      "Ex-Com Retained Search",
      "Recruitment-managed Service",
      "Talent Mapping",
      "Leadership Assessment",
      "Culture & Value Fit",
    ],
    outcomes: [
      "Stronger leadership appointments",
      "Better organizational fit",
      "More focused senior-talent pipelines",
      "Improved confidence in executive hiring",
    ],
    visualDirection:
      "Discreet and premium CXO-grade experience with restrained motion, profile reveals, search pathways, and high-trust editorial design.",
    accent: "green",
  },

  {
    slug: "executive-coaching",
    title: "Executive Coaching",
    eyebrow: "Leadership Development",
    summary:
      "Supporting leaders through coaching, mentoring, and career management to strengthen performance and decision-making.",
    intro:
      "ZUNOKS delivers individualized leadership support designed to help executives navigate complex challenges, strengthen capability, and sustain long-term performance.",
    capabilities: [
      "Executive Coaching",
      "Mentoring",
      "Career Management",
      "Leadership Development",
      "Leadership Transition Support",
    ],
    outcomes: [
      "Improved leadership effectiveness",
      "Stronger executive decision-making",
      "Greater confidence during transition",
      "More sustainable leadership performance",
    ],
    visualDirection:
      "Intimate and human editorial layout using portrait-led storytelling, conversation motifs, and slower, refined transitions.",
    accent: "orange",
  },

  {
    slug: "shared-services",
    title: "Shared Services",
    eyebrow: "Operational Support",
    summary:
      "Supporting organizations with recurring HR operations, systems, back-office functions, training, and business-process services.",
    intro:
      "ZUNOKS extends its consulting expertise into shared and managed services across HR back-office operations, payroll, training and development, business process outsourcing, and HRIS-related support.",
    capabilities: [
      "HR Back Office",
      "Payroll Services",
      "Training & Development",
      "Business Process Outsourcing",
      "HRIS",
      "HR Digitization Support",
    ],
    outcomes: [
      "More efficient HR operations",
      "Improved process consistency",
      "Better operational scalability",
      "Stronger technology-enabled HR delivery",
    ],
    visualDirection:
      "System-oriented UI with connected operational modules, workflow transitions, structured data blocks, and calm enterprise motion.",
    accent: "green",
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
);
export type Partner = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  organizations: string[];
  experienceReferences: string[];
  image: string;
  isImagePlaceholder: true;
  accent: "green" | "orange";
  sourceUrl: string;
  profilePage: number;
};

// Sources: individual website profiles; docs/ZUNOKS - Company Profile - 2023.pdf, pp. 5-8.
// Website titles take precedence. Experience references are not ZUNOKS clients.
// Image paths reserve future assets; no images are supplied in this phase.
export const partners: Partner[] = [
  {
    slug: "quazi-m-shahed",
    name: "Quazi M Shahed",
    role: "Co-founder & Partner",
    bio: "A business and HR leader combining international change experience with a background in manufacturing and supply chain.",
    expertise: ["HR strategy", "Organizational design", "Talent management", "Executive coaching", "Manufacturing and supply chain"],
    achievements: ["Helped launch BATB's Battle of Minds employer-brand initiative.", "Contributed to leadership of BAT's global SAP programme.", "Led organizational change at Grameenphone."],
    organizations: ["British American Tobacco", "Grameenphone", "Telenor India"],
    experienceReferences: ["British American Tobacco: South Asia HR and global projects", "BAT Bangladesh: manufacturing and supply chain", "Grameenphone: organizational change", "Telenor India: divestiture team"],
    image: "/images/partners/quazi-m-shahed-placeholder.webp",
    isImagePlaceholder: true,
    accent: "green",
    sourceUrl: "https://www.zunoks.com/team-members/quazi-m-shahed/",
    profilePage: 5,
  },
  {
    slug: "matiul-i-nowshad",
    name: "Matiul I Nowshad",
    role: "Co-founder & Partner",
    bio: "A transformation professional with leadership experience across tea, textiles and telecommunications, including mergers and organizational change.",
    expertise: ["Organizational transformation", "Merger integration", "Performance and reward", "Employee relations", "Board and executive search"],
    achievements: ["Directed HR integration for the Hello Axiata and Latelz merger in Cambodia.", "Led six workstreams in the Robi Axiata and Airtel Bangladesh merger.", "Led separation of tower and call-centre operations from core businesses."],
    organizations: ["Robi Axiata", "Axiata", "Hello Axiata", "Latelz"],
    experienceReferences: ["Robi Axiata: leadership and merger integration", "Hello Axiata and Latelz: HR merger integration"],
    image: "/images/partners/matiul-i-nowshad-placeholder.webp",
    isImagePlaceholder: true,
    accent: "orange",
    sourceUrl: "https://www.zunoks.com/team-members/matiul-i-nowshad/",
    profilePage: 6,
  },
  {
    slug: "saifuddin-m-khaled",
    name: "Saifuddin M Khaled",
    role: "Co-founder & Partner",
    bio: "An operations leader with Asia Pacific experience in factory transformation, new manufacturing facilities and supply-chain improvement.",
    expertise: ["Operations strategy", "Manufacturing excellence", "Supply-chain optimization", "Strategic sourcing", "Coaching and mentoring"],
    achievements: ["Established new factories for BATB and Reckitt Benckiser.", "Led sourcing programmes across BAT Asia Pacific.", "Sponsored SAP implementation in BATB operations."],
    organizations: ["British American Tobacco", "Reckitt Benckiser"],
    experienceReferences: ["BAT Bangladesh: factory transformation", "BAT Asia Pacific: regional operations and sourcing", "BAT Sri Lanka: third-party logistics projects", "Reckitt Benckiser: greenfield manufacturing"],
    image: "/images/partners/saifuddin-m-khaled-placeholder.webp",
    isImagePlaceholder: true,
    accent: "green",
    sourceUrl: "https://www.zunoks.com/team-members/saifuddin-mohammad-khaled/",
    profilePage: 7,
  },
  {
    slug: "zulfikar-hyder",
    name: "Zulfikar Hyder",
    // Website title supersedes the 2023 profile's Co-founder & Partner.
    role: "Co-founder & Managing Partner",
    bio: "An HR leader focused on business alignment, organizational capability and change across a range of industries.",
    expertise: ["Talent management", "Executive recruitment", "Organizational development", "Change leadership", "Safeguarding"],
    achievements: ["Established BRAC's leadership academy and competency framework.", "Developed long-term people strategies for BRAC and Chevron.", "Led culture, leadership and talent transformation at BAT and Coats."],
    organizations: ["BRAC", "Chevron", "British American Tobacco", "Coats"],
    experienceReferences: ["BRAC: leadership development and people strategy", "Chevron: people strategy", "BAT and Coats: business transformation"],
    image: "/images/partners/zulfikar-hyder-placeholder.webp",
    isImagePlaceholder: true,
    accent: "orange",
    sourceUrl: "https://www.zunoks.com/team-members/zulfikar-hyder/",
    profilePage: 8,
  },
];

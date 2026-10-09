// Sources: https://www.zunoks.com/our-clients/;
// docs/ZUNOKS - Company Profile - 2023.pdf, p. 10.
export const industries = [
  "Food & Beverage", "Pharmaceuticals", "FMCG", "Banking",
  "Financial Institutions", "Telecommunications", "RMG", "Engineering",
] as const;

export type Industry = (typeof industries)[number];

export const clients = {
  industries,
  confidentialityNote:
    "ZUNOKS protects client identities under confidentiality agreements. Names and references are shared only with client consent.",
  engagementTypes: [
    "Post-merger integration and employee transition",
    "Operations transformation",
    "HR transformation",
    "Reward architecture and people policies",
    "Executive and board-level recruitment",
    "Talent acquisition for new market entrants",
  ],
  sourceUrl: "https://www.zunoks.com/our-clients/",
};

// Client logos are intentionally omitted until permission and assets are available.
export type ClientsContent = typeof clients;

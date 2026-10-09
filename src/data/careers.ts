import { contact } from "./global";

export type CareerRole = {
  slug: string;
  title: string;
  track: "Young professionals" | "Experienced professionals" | "Contingent experts";
  summary: string;
  status: "Demo only - not an open vacancy";
  isDummy: true;
};

// Sources: https://www.zunoks.com/work-with-us/ and /about/;
// docs/ZUNOKS - Company Profile - 2023.pdf, pp. 3-4.
export const careers = {
  intro: {
    title: "Bring your perspective to ZUNOKS.",
    description: "Build a consulting career through curiosity, collaboration and practical business challenges.",
  },
  culturePoints: ["An open, collaborative working environment", "Learning through shared experience", "Respect for different perspectives", "Care for professional standards"],
  youngProfessionals: { title: "Start your consulting journey.", description: "Bring fresh thinking and an appetite to learn across ZUNOKS' areas of work." },
  experiencedProfessionals: { title: "Apply your experience more widely.", description: "Explore consulting as a way to contribute business experience to varied organizational challenges." },
  contingentExperts: { title: "Contribute specialist expertise.", description: "Explore contingent and part-time opportunities, including for professionals returning from a career break." },
  recruitmentEmail: contact.recruitmentEmail,
  applicationSubject: "Work with ZUNOKS",
  applicationNote: "For genuine career enquiries, send a CV and cover letter. Demo roles below are not advertised vacancies.",
  sourceUrl: "https://www.zunoks.com/work-with-us/",
};

// Fictional examples of career tracks, not active ZUNOKS job listings.
export const careerRoles: CareerRole[] = [
  { slug: "demo-consulting-analyst", title: "Consulting Analyst", track: "Young professionals", summary: "Illustrative role supporting research and structured analysis across consulting projects.", status: "Demo only - not an open vacancy", isDummy: true },
  { slug: "demo-people-transformation-consultant", title: "People Transformation Consultant", track: "Experienced professionals", summary: "Illustrative role connecting HR experience with organizational-change work.", status: "Demo only - not an open vacancy", isDummy: true },
  { slug: "demo-supply-chain-adviser", title: "Supply Chain Adviser", track: "Contingent experts", summary: "Illustrative specialist engagement focused on planning and operational processes.", status: "Demo only - not an open vacancy", isDummy: true },
];

export type CareersContent = typeof careers;

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import type { Partner } from "@/data/partners";

type ProfileDetails = {
  layout: "curved" | "editorial";
  bio: string;
  expertise: string[];
  achievements: string[];
  academics: Array<{ name: string; short: string }>;
  education: Array<{ name: string; short: string }>;
};

const profileDetails: Record<string, ProfileDetails> = {
  "quazi-m-shahed": {
    layout: "curved",
    bio: "Experienced with multi-country leadership roles, leading one of the largest conglomerates in the country and a leading I&T function of the largest telco in Bangladesh. Led BAT South Asia and global projects in I&T and shared services, and was part of the leadership of global SAP implementation in BAT. Skilled in developing and implementing I&T strategy, defining I&T processes, business process outsourcing, organisational change, employee brand development and employee engagement. He also brings 12 years of manufacturing and supply-chain experience.",
    expertise: [
      "Strategy",
      "Talent Management",
      "Manufacturing",
      "Executive Search",
      "Supply Chain",
      "Executive Coaching",
      "I/T Strategy",
      "Employer Branding",
      "Org. Design",
      "I/T Shared Services design",
    ],
    achievements: [
      "BATS manufacturing site restructuring",
      "Operational Excellence – MBIT Class ‘A’ for BATS",
      "Establishing BATs Employer brand through launch of ‘Battle of Minds’ – now a global program",
      "Organization set up for BAT Iran",
      "Market integration – BAT South Asia Area",
      "BAT Global SAP project – Leadership Team",
      "Orchestrating change journey in Consumer business",
      "Part of Telenor India divestiture team",
    ],
    academics: [
      { name: "BUET, Dhaka", short: "BUET" },
      { name: "NSU", short: "NSU" },
    ],
    education: [
      { name: "INSEAD", short: "INSEAD" },
      { name: "IMD", short: "IMD" },
      { name: "LeadershipTrust", short: "Leadership Trust" },
      { name: "Peter Laughlin Worldwide", short: "Peter Laughlin" },
    ],
  },
  "matiul-i-nowshad": {
    layout: "editorial",
    bio: "Seasoned management professional with hands-on experience in organizational transformation and change. With over three decades of experience spanning three industry segments—tea, textile and telecommunication—he has spent 20 years in leadership roles at board, executive committee and management council levels. His focus includes corporate and HR strategy, leadership development, corporate values, system and process development, culture and change, merger and integration, performance, innovation and change.",
    expertise: [
      "Organizational Transformation",
      "Merger, Demerger, Integration",
      "Organization Design & Development",
      "Culture and Change Employee Transition",
      "Performance & Reward",
      "Job Evaluation",
      "Competency-Based Selection",
      "Industrial & Employee Relations",
      "Corporate Communication",
      "Internal Communication",
      "Sustainability",
      "Operations Management",
      "Board & Executive Search",
    ],
    achievements: [
      "Robi Axiata: seven consecutive Best People Management Company honours at the Axiata Platinum Awards",
      "Led the HR stream end-to-end in the Hello Axiata and Latelz merger, forming Smart Axiata in Cambodia in 2012–2013",
      "Led demerger of tower operations from the core business",
      "Led demerger of call-centre operations from the core business",
      "Led six workstreams in the Robi Axiata and Airtel Bangladesh merger—HR, Regulatory, Legal, Customer Experience, Corporate Communication, Facilities and Estate",
      "Connected Life Award – Best Mobile Innovation, MWC Barcelona",
      "Best People Leader – Axiata Platinum Awards milestone honour",
      "Best HR Leader of the Year – World HR Congress, 2012",
      "Named among 50 top Global HR Leaders in Asia, World HR Congress, 2017",
    ],
    academics: [{ name: "University of Chittagong", short: "CU" }],
    education: [
      { name: "Victoria University — MBA", short: "Victoria University" },
      { name: "Cranfield School of Management", short: "Cranfield" },
      { name: "INSEAD", short: "INSEAD" },
      { name: "IIM Ahmedabad", short: "IIM A" },
      { name: "IIM Calcutta", short: "IIM C" },
      { name: "SIM Professional Development", short: "SIM" },
      { name: "XLRI", short: "XLRI" },
    ],
  },
  "saifuddin-m-khaled": {
    layout: "editorial",
    bio: "Strategic Business & Operations leader in developing worldwide business and high-performance operations through a career spanning more than 20 years with global companies. Experienced in Strategic Management, Manufacturing Excellence, Supply Chain Optimization, Greenfield Projects, Factory Transformation and Process Re-engineering. He has worked with cross-cultural teams across Asia Pacific and coached and mentored diverse individuals and teams towards outstanding performance and their fullest career potential.",
    expertise: [
      "Business and Operations Strategy",
      "Manufacturing Excellence",
      "Supply Chain Optimization",
      "Strategic Sourcing",
      "Project Management",
      "Business Process Re-engineering",
      "Compliance & Risk Management",
      "Transformation & Change",
      "Coaching & Mentoring",
    ],
    achievements: [
      "Designed and delivered the largest CAPEX program in BAT Asia Pacific with the right technology footprint, infrastructure and capabilities, transforming the BATB factory into the largest in the group",
      "Established greenfield factories in BATB and Reckitt Benckiser",
      "Led Strategic Sourcing Projects for BCT Asia Pacific",
      "Delivered significant improvement in BCT and productivity through integrated Work Systems in BATB",
      "Sponsored implementation of SAP in BATB Operations",
      "Introduced strategic 3PL projects in BAT Sri Lanka",
      "Led BATB Factory Transformation to create a ‘future fit’ organization with a high-performance culture and diverse talent profile",
    ],
    academics: [
      { name: "Indian Institute of Technology", short: "IIT" },
    ],
    education: [
      { name: "AOTS", short: "AOTS" },
      { name: "Cranfield School of Management", short: "Cranfield" },
      { name: "LeadershipTrust", short: "Leadership Trust" },
      { name: "Alan Wright Business Insight", short: "Alan Wright" },
    ],
  },
  "zulfikar-hyder": {
    layout: "curved",
    bio: "With over 27 years of experience in the human resources field, Zulfikar Hyder is a seasoned executive known for aligning HR to business priorities and delivering measurable results. He has extensive organisational capability in enhancing expertise to navigate complex and dynamic business environments across multiple industries, including oil and gas, healthcare, pharmaceuticals, food, agriculture, fertilizer, banking, shoes and textiles.",
    expertise: [
      "Business Strategy",
      "Organisational Design & Development",
      "Executive Recruitment",
      "Sustainability",
      "Talent Management",
      "Change Management & Leadership",
      "Organisational Transformation",
      "Safeguarding",
      "Employee Relations",
      "Compliance & Risk Management",
    ],
    achievements: [
      "Led and managed business transformation initiatives focusing on culture change, leadership and talent management at ICI and Coats",
      "Established the leadership academy for BRAC, including a competency framework",
      "Developed long-term people strategies for BEXIMCO and Chevron",
      "Designed and rolled out a self-onboarding programme for employee participation",
      "Served as Personnel Manager at Akij and KDS in ICI Limited",
      "Accomplished projects in organisational restructuring and building a winning culture with McKinsey, Oliver Wight, Hay Group and Hewitt Associates",
    ],
    academics: [{ name: "University of Dhaka", short: "DU" }],
    education: [
      { name: "LeadershipTrust", short: "Leadership Trust" },
      { name: "Peter Laughlin Worldwide", short: "Peter Laughlin" },
      { name: "SHL", short: "SHL" },
    ],
  },
};

const expertiseIcons = [
  Target,
  Network,
  BriefcaseBusiness,
  Users,
  Boxes,
  Sparkles,
  Layers3,
  ShieldCheck,
];

function EyebrowHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-4 block h-[2px] w-12 bg-[#278949]" />
      <h2 className="font-serif text-[clamp(2.65rem,4.4vw,4.9rem)] font-normal leading-[0.9] tracking-[-0.045em] text-[#07110d]">
        {children}
      </h2>
    </div>
  );
}

function InstitutionMark({
  institution,
  index,
}: {
  institution: { name: string; short: string };
  index: number;
}) {
  const colors = ["#087a47", "#174da8", "#a94722", "#424b47"];
  return (
    <div className="flex min-h-28 flex-col items-center justify-center px-3 text-center">
      <span
        className="flex h-20 min-w-20 items-center justify-center rounded-full border border-black/[0.08] bg-white px-4 font-serif text-xl font-semibold shadow-[0_12px_35px_rgba(14,38,25,0.06)]"
        style={{ color: colors[index % colors.length] }}
        aria-hidden="true"
      >
        {institution.short}
      </span>
      <span className="mt-3 text-sm text-black/55">{institution.name}</span>
    </div>
  );
}

function Breadcrumb({ founder }: { founder: Partner }) {
  return (
    <div className="bg-[#052e22] text-white/75">
      <div className="mx-auto flex max-w-[var(--container-wide)] items-center gap-2 px-[var(--page-gutter)] py-3 text-[11px]">
        <Link className="transition-colors hover:text-white" href="/">
          Home
        </Link>
        <span>›</span>
        <Link className="transition-colors hover:text-white" href="/about#founders">
          Team Members
        </Link>
        <span>›</span>
        <span className="text-white">{founder.name}</span>
      </div>
    </div>
  );
}

function CurvedProfile({
  founder,
  details,
}: {
  founder: Partner;
  details: ProfileDetails;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f5ef]">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_78%_20%,rgba(239,125,34,.08),transparent_28%),radial-gradient(circle_at_58%_8%,rgba(39,137,73,.07),transparent_32%)]" />
        <div className="pointer-events-none absolute -right-36 -top-48 h-[42rem] w-[42rem] rounded-full border border-[#ed8b2d]/30" />
        <div className="relative grid min-h-[520px] lg:grid-cols-[47%_53%]">
          <div className="relative min-h-[420px] overflow-hidden rounded-br-[42%] lg:min-h-[520px]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              priority
              sizes="(min-width: 1024px) 47vw, 100vw"
              className="object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/[0.05] via-transparent to-[#f7f5ef]/10" />
          </div>

          <div className="relative flex items-center px-[var(--page-gutter)] py-14 lg:px-[clamp(3rem,6vw,7rem)] lg:py-16">
            <div className="max-w-[49rem]">
              <span className="mb-5 block h-[2px] w-12 bg-[#278949]" />
              <h1 className="font-serif text-[clamp(3rem,5vw,5.4rem)] font-normal uppercase leading-[0.94] tracking-[-0.045em] text-[#06120d]">
                {founder.name}
              </h1>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.42em] text-[#15251e]">
                {founder.role}
              </p>
              <p className="mt-7 max-w-[47rem] text-[clamp(.95rem,1.15vw,1.08rem)] leading-[1.72] text-[#4e5953]">
                {details.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.07] bg-white py-14 lg:py-18">
        <div className="mx-auto grid max-w-[var(--container-wide)] gap-10 px-[var(--page-gutter)] lg:grid-cols-[29%_71%]">
          <EyebrowHeading>Expertise</EyebrowHeading>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {details.expertise.map((item, index) => {
              const Icon = expertiseIcons[index % expertiseIcons.length];
              return (
                <div
                  key={item}
                  className="group flex min-h-14 items-center rounded-full border border-black/[0.06] bg-[#f7f8f5] pr-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="mr-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff1e1] text-[#9b613b]">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="text-sm text-[#27322c]">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.07] bg-[#fbfbf9] py-14 lg:py-18">
        <div className="mx-auto grid max-w-[var(--container-wide)] gap-10 px-[var(--page-gutter)] lg:grid-cols-[29%_71%]">
          <EyebrowHeading>Achievements</EyebrowHeading>
          <div className="relative border-l border-dashed border-[#278949]/35 pl-8">
            {details.achievements.map((achievement) => (
              <div key={achievement} className="relative pb-4 last:pb-0">
                <span className="absolute -left-[2.2rem] top-2 h-2.5 w-2.5 rounded-full bg-[#087a47] ring-4 ring-[#fbfbf9]" />
                <p className="text-[clamp(.95rem,1.15vw,1.08rem)] leading-7 text-[#59625d]">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.07] bg-white py-14">
        <div className="mx-auto grid max-w-[var(--container-wide)] gap-10 px-[var(--page-gutter)] lg:grid-cols-[29%_71%]">
          <EyebrowHeading>Academics</EyebrowHeading>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {details.academics.map((institution, index) => (
              <InstitutionMark key={institution.name} institution={institution} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/[0.07] bg-[#fbfbf9] py-14">
        <div className="mx-auto grid max-w-[var(--container-wide)] gap-10 px-[var(--page-gutter)] lg:grid-cols-[29%_71%]">
          <EyebrowHeading>
            Professional
            <br />
            Education
          </EyebrowHeading>
          <div className="grid grid-cols-2 divide-x divide-black/[0.08] sm:grid-cols-4">
            {details.education.map((institution, index) => (
              <InstitutionMark key={institution.name} institution={institution} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EditorialHeading({
  icon: Icon,
  children,
}: {
  icon: typeof GraduationCap;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-7 w-1.5 bg-[#ea8500]" />
      <Icon size={19} strokeWidth={1.6} className="text-[#0a3d2e]" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#10211b]">
        {children}
      </h2>
    </div>
  );
}

function EditorialProfile({
  founder,
  details,
}: {
  founder: Partner;
  details: ProfileDetails;
}) {
  return (
    <div className="relative overflow-hidden bg-[#fbfaf6]">
      <div className="pointer-events-none absolute -left-52 -top-20 h-[35rem] w-[35rem] rounded-full bg-[#dceae1]/40" />
      <div className="pointer-events-none absolute right-10 top-10 grid grid-cols-4 gap-3 opacity-70">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-[#ea8500]" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[92rem] px-[var(--page-gutter)] py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[39%_61%] lg:gap-14">
          <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[34rem] overflow-hidden rounded-[1rem] border-2 border-white shadow-[0_24px_65px_rgba(16,44,29,0.12)]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-contain object-center"
            />
          </div>
          <div>
            <h1 className="font-serif text-[clamp(3rem,5.2vw,5.65rem)] font-normal leading-[0.94] tracking-[-0.045em] text-[#072118]">
              {founder.name}
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#263a32]">
              {founder.role}
            </p>
            <span className="mt-5 block h-px w-16 bg-[#ea8500]" />
            <p className="mt-7 max-w-[54rem] font-serif text-[clamp(1.05rem,1.5vw,1.32rem)] leading-[1.6] text-[#505955]">
              {details.bio}
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-y border-[#d9d5ca] py-9 lg:grid-cols-[40%_60%]">
          <section className="pr-0 lg:border-r lg:border-[#e2ded4] lg:pr-10">
            <EditorialHeading icon={Target}>Expertise</EditorialHeading>
            <div className="mt-6 pl-7">
              {details.expertise.map((item) => (
                <p key={item} className="border-b border-[#dedbd2] py-2 font-serif text-[1.03rem] leading-5 text-[#525b57] last:border-0">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-10 lg:mt-0 lg:pl-10">
            <EditorialHeading icon={Sparkles}>Achievements</EditorialHeading>
            <div className="mt-6 pl-7">
              {details.achievements.map((item) => (
                <p key={item} className="border-b border-[#dedbd2] py-2 font-serif text-[1.03rem] leading-6 text-[#525b57] last:border-0">
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>

        <div className="grid border-b border-[#d9d5ca] py-9 lg:grid-cols-[40%_60%]">
          <section className="pr-0 lg:border-r lg:border-[#e2ded4] lg:pr-10">
            <EditorialHeading icon={GraduationCap}>Academics</EditorialHeading>
            <div className="mt-7 grid grid-cols-1 place-items-center">
              {details.academics.map((institution, index) => (
                <InstitutionMark key={institution.name} institution={institution} index={index} />
              ))}
            </div>
          </section>

          <section className="mt-10 lg:mt-0 lg:pl-10">
            <EditorialHeading icon={Building2}>Professional Education</EditorialHeading>
            <div className="mt-7 grid grid-cols-2 gap-y-4 sm:grid-cols-3">
              {details.education.map((institution, index) => (
                <InstitutionMark key={institution.name} institution={institution} index={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function FounderProfile({ founder }: { founder: Partner }) {
  const details = profileDetails[founder.slug];

  if (!details) return null;

  return (
    <article>
      <Breadcrumb founder={founder} />
      {details.layout === "curved" ? (
        <CurvedProfile founder={founder} details={details} />
      ) : (
        <EditorialProfile founder={founder} details={details} />
      )}

      <div className="bg-white py-5">
        <div className="mx-auto max-w-[var(--container-wide)] px-[var(--page-gutter)]">
          <Link
            href="/about#founders"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#315b47] transition-colors hover:text-black"
          >
            <ArrowLeft size={14} />
            Back to all founders
          </Link>
        </div>
      </div>
    </article>
  );
}

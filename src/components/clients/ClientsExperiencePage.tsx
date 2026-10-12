"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Factory,
  Landmark,
  LockKeyhole,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ClientsPageType =
  | "clients"
  | "case-studies"
  | "client-impact";

const sourceContent = {
  industries:
    "We are well equipped to provide services in a wide range of industries including Food & Beverage, Pharmaceuticals, FMCG, Banks, Financial Institutions, Telecommunication, RMG and Engineering sectors.",
  experience:
    "We have already provided strategic consultancy in the areas of Transformation & Integration in post-merger phase to enable employee transition, designed reward architecture to enable business performance, policy formulation etc. We have worked with our clients using our proven methodology for hiring full range of roles be it at board level, strategic, tactical, or at the execution level, ranging from young professionals to seasoned experts and for new market entrants.",
  confidentiality:
    "We are currently providing our services to large MNCs and local conglomerates in multiple sectors. However, as we remain true to our client confidentiality policy, we refrain from disclosing the names of our clients without their consent. In case a reference check is required by any potential client, we are open to arranging testimonials from our present clientele base.",
  nda:
    "We are unable to share the identity of our clients due to Non-Disclosure Agreements (NDA) we have agreed upon with our clients.",
  currentIndustries:
    "We are currently engaged with several clients in industries ranging from Food & Beverage, Pharmaceuticals, FMCG, Financial Institutions, RMG and Engineering sector.",
  transformation:
    "We are engaged in the process of providing strategic consultancy in the areas of Transformation & Integration in post-merger phase to enable an employee transition project, operations transformation project of an MNC following an acquisition. We are currently working closely with a 1st generation private bank with a view to engaging in a HR transformation project.",
  hiring:
    "We have been retained for hiring for full range of roles be it strategic, tactical, execution level ranging from young professionals to seasoned experts and top two levels for a few new market entrants.",
} as const;

const industries = [
  "Food & Beverage",
  "Pharmaceuticals",
  "FMCG",
  "Banks",
  "Financial Institutions",
  "Telecommunication",
  "RMG",
  "Engineering",
] as const;

const engagements = [
  {
    number: "01",
    title: "Transformation & Integration",
    detail: "Post-merger phase and employee transition",
    icon: Network,
  },
  {
    number: "02",
    title: "Operations Transformation",
    detail: "Transformation following an acquisition",
    icon: Factory,
  },
  {
    number: "03",
    title: "HR Transformation",
    detail: "Engagement with a 1st generation private bank",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Leadership Hiring",
    detail: "Strategic, tactical and execution-level roles",
    icon: Building2,
  },
] as const;

const pageMeta = {
  clients: {
    eyebrow: "Our Clients",
    titleLines: ["Trusted across", "complex industries."],
    description: sourceContent.industries,
  },
  "case-studies": {
    eyebrow: "Case Studies",
    titleLines: ["Experience applied", "where it matters."],
    description: sourceContent.experience,
  },
  "client-impact": {
    eyebrow: "Client Impact",
    titleLines: ["Transformation built", "around real needs."],
    description: sourceContent.currentIndustries,
  },
} satisfies Record<
  ClientsPageType,
  {
    eyebrow: string;
    titleLines: readonly [string, string];
    description: string;
  }
>;

export default function ClientsExperiencePage({
  type,
}: {
  type: ClientsPageType;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const data = pageMeta[type];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .fromTo(
          "[data-client-hero-reveal]",
          { opacity: 0, y: 24, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.08,
          },
        )
        .fromTo(
          "[data-client-visual]",
          { opacity: 0, scale: 0.9, rotate: type === "clients" ? -5 : 4 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.2 },
          "-=0.7",
        );

      gsap.to("[data-client-orbit]", {
        rotation: type === "case-studies" ? -360 : 360,
        duration: type === "client-impact" ? 38 : 30,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.to("[data-client-glow]", {
        xPercent: (index) => (index % 2 === 0 ? 14 : -12),
        yPercent: (index) => (index % 2 === 0 ? -10 : 12),
        scale: 1.16,
        duration: (index) => 7.5 + index * 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-client-float]", {
        y: (index) => (index % 2 === 0 ? -10 : 9),
        x: (index) => (index % 2 === 0 ? 4 : -5),
        duration: (index) => 3.2 + index * 0.45,
        stagger: 0.18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        "[data-client-scan]",
        { xPercent: -130, opacity: 0 },
        {
          xPercent: 150,
          opacity: 0.45,
          duration: 5.5,
          repeat: -1,
          repeatDelay: 2,
          ease: "power1.inOut",
        },
      );

      gsap.fromTo(
        "[data-client-reveal]",
        { opacity: 0, y: 42, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "[data-client-content]",
            start: "top 82%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [type]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f2f2ed] pb-[clamp(4rem,7vw,7rem)] pt-[7.7rem] text-black md:pt-[8.3rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {type === "clients" && <ClientsHero data={data} />}
        {type === "case-studies" && <CaseStudiesHero data={data} />}
        {type === "client-impact" && <ClientImpactHero data={data} />}

        <div data-client-content className="mt-[clamp(4rem,7vw,7rem)]">
          {type === "clients" && <ClientsContent />}
          {type === "case-studies" && <CaseStudiesContent />}
          {type === "client-impact" && <ClientImpactContent />}
        </div>

        <ClientNavigation active={type} />
      </div>
    </section>
  );
}

type PageMeta = (typeof pageMeta)[ClientsPageType];

function ClientsHero({ data }: { data: PageMeta }) {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.4rem] bg-[#071713] px-6 py-12 text-white shadow-[0_35px_100px_rgba(5,35,25,0.22)] md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(71,174,96,0.28),transparent_35%),linear-gradient(125deg,#071713_0%,#0c2c21_48%,#173f2a_100%)]" />
      <div
        data-client-glow
        className="pointer-events-none absolute -left-[12rem] -top-[15rem] h-[34rem] w-[34rem] rounded-full bg-[var(--z-green)] opacity-25 blur-[120px]"
      />
      <div
        data-client-glow
        className="pointer-events-none absolute -bottom-[16rem] right-[4%] h-[32rem] w-[32rem] rounded-full bg-[var(--z-orange)] opacity-15 blur-[120px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 grid min-h-[460px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <Eyebrow label={data.eyebrow} tone="green" />
          <HeroTitle
            lines={data.titleLines}
            accentClass="text-[#80d976]"
          />
          <p
            data-client-hero-reveal
            className="mt-7 max-w-[40rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-white/58"
          >
            {data.description}
          </p>
        </div>

        <div data-client-visual className="relative mx-auto h-[380px] w-full max-w-[520px]">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.025] shadow-[inset_0_0_80px_rgba(49,155,66,0.08)] backdrop-blur-xl" />
          <div
            data-client-orbit
            className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
          >
            {industries.map((industry, index) => {
              const angle = (index / industries.length) * Math.PI * 2;
              const left = 50 + Math.cos(angle) * 48;
              const top = 50 + Math.sin(angle) * 48;

              return (
                <span
                  key={industry}
                  className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[#80d976] shadow-[0_0_16px_rgba(128,217,118,0.55)]"
                  style={{ left: `${left}%`, top: `${top}%` }}
                />
              );
            })}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Radar className="mx-auto text-[#80d976]" size={24} strokeWidth={1.4} />
              <p className="mt-4 text-[4.8rem] font-medium leading-none tracking-[-0.08em]">08</p>
              <p className="mt-2 text-[0.58rem] uppercase tracking-[0.18em] text-white/38">
                Industry sectors
              </p>
            </div>
          </div>

          <div
            data-client-float
            className="absolute left-[2%] top-[13%] rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-xs text-white/60 backdrop-blur-xl"
          >
            Local conglomerates
          </div>
          <div
            data-client-float
            className="absolute bottom-[10%] right-0 rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-xs text-white/60 backdrop-blur-xl"
          >
            Large MNCs
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudiesHero({ data }: { data: PageMeta }) {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.4rem] bg-[#171411] px-6 py-12 text-white shadow-[0_35px_100px_rgba(45,28,12,0.22)] md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,#13110f_0%,#2e241b_52%,#624226_100%)]" />
      <div
        data-client-glow
        className="pointer-events-none absolute -left-[13rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full bg-[#d79043] opacity-25 blur-[125px]"
      />
      <div
        data-client-glow
        className="pointer-events-none absolute -bottom-[17rem] right-[-4rem] h-[35rem] w-[35rem] rounded-full bg-[var(--z-green)] opacity-15 blur-[125px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(115deg,transparent_0,transparent_68px,rgba(255,255,255,0.04)_69px,transparent_70px)]" />
      <div
        data-client-scan
        className="pointer-events-none absolute -inset-y-[30%] left-[-18%] w-[26%] rotate-[15deg] bg-gradient-to-r from-transparent via-[#f5c47f]/30 to-transparent blur-2xl"
      />

      <div className="relative z-10 grid min-h-[460px] items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <Eyebrow label={data.eyebrow} tone="orange" />
          <HeroTitle
            lines={data.titleLines}
            accentClass="text-[#f1af68]"
          />
          <p
            data-client-hero-reveal
            className="mt-7 max-w-[43rem] text-[clamp(0.95rem,1.2vw,1.08rem)] leading-8 text-white/56"
          >
            {data.description}
          </p>
        </div>

        <div data-client-visual className="relative mx-auto h-[390px] w-full max-w-[510px]">
          {engagements.slice(0, 3).map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                data-client-float
                className="absolute left-1/2 w-[88%] -translate-x-1/2 rounded-[1.5rem] border border-white/12 bg-white/[0.07] p-5 shadow-[0_24px_65px_rgba(0,0,0,0.24)] backdrop-blur-[24px]"
                style={{
                  top: `${index * 25 + 5}%`,
                  zIndex: 10 + index,
                  transform: `translateX(-50%) translateX(${index * 14}px) rotate(${index * 1.5 - 1.5}deg)`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-black/20 text-[#f1af68]">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[0.55rem] uppercase tracking-[0.16em] text-white/30">
                      Engagement {item.number}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/82">{item.title}</p>
                  </div>
                  <CheckCircle2 className="ml-auto text-[#8bcf7d]" size={16} strokeWidth={1.5} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ClientImpactHero({ data }: { data: PageMeta }) {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2.4rem] bg-[#111b2b] px-6 py-12 text-white shadow-[0_35px_100px_rgba(13,28,50,0.23)] md:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(65,137,181,0.32),transparent_32%),linear-gradient(125deg,#101826_0%,#18334a_52%,#1d594f_100%)]" />
      <div
        data-client-glow
        className="pointer-events-none absolute -left-[12rem] -bottom-[15rem] h-[34rem] w-[34rem] rounded-full bg-[#3e9f85] opacity-25 blur-[120px]"
      />
      <div
        data-client-glow
        className="pointer-events-none absolute -right-[10rem] -top-[15rem] h-[34rem] w-[34rem] rounded-full bg-[#4c91c1] opacity-25 blur-[120px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.09)_1px,transparent_1.5px)] bg-[size:32px_32px] opacity-35" />
      <div
        data-client-scan
        className="pointer-events-none absolute -inset-y-[25%] left-[-18%] w-[25%] -rotate-[16deg] bg-gradient-to-r from-transparent via-[#a7ddcf]/25 to-transparent blur-2xl"
      />

      <div className="relative z-10 grid min-h-[460px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <Eyebrow label={data.eyebrow} tone="blue" />
          <HeroTitle
            lines={data.titleLines}
            accentClass="text-[#8bd8c0]"
          />
          <p
            data-client-hero-reveal
            className="mt-7 max-w-[40rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-white/60"
          >
            {data.description}
          </p>
        </div>

        <div data-client-visual className="relative mx-auto h-[390px] w-full max-w-[520px]">
          <div
            data-client-orbit
            className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8bd8c0]/20"
          >
            <span className="absolute right-[7%] top-[18%] h-3 w-3 rounded-full bg-[#8bd8c0] shadow-[0_0_24px_rgba(139,216,192,0.6)]" />
            <span className="absolute bottom-[8%] left-[20%] h-2.5 w-2.5 rounded-full bg-[#e9b963] shadow-[0_0_20px_rgba(233,185,99,0.6)]" />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.035] backdrop-blur-xl" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <TrendingUp className="mx-auto text-[#8bd8c0]" size={25} strokeWidth={1.5} />
              <p className="mt-5 text-[0.6rem] uppercase tracking-[0.18em] text-white/35">
                Consulting focus
              </p>
              <p className="mt-2 text-2xl font-medium tracking-[-0.04em]">Transformation</p>
              <p className="mt-1 text-sm text-white/40">Integration · People · Operations</p>
            </div>
          </div>
          <div
            data-client-float
            className="absolute left-0 top-[16%] rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-xs text-white/62 backdrop-blur-xl"
          >
            Employee transition
          </div>
          <div
            data-client-float
            className="absolute bottom-[12%] right-0 rounded-2xl border border-white/12 bg-black/20 px-4 py-3 text-xs text-white/62 backdrop-blur-xl"
          >
            Business performance
          </div>
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ label, tone }: { label: string; tone: "green" | "orange" | "blue" }) {
  const accent =
    tone === "green"
      ? "bg-[#80d976]"
      : tone === "orange"
        ? "bg-[#f1af68]"
        : "bg-[#8bd8c0]";

  return (
    <div data-client-hero-reveal className="flex items-center gap-3">
      <span className={`h-[2px] w-9 ${accent}`} />
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/48">
        {label}
      </span>
    </div>
  );
}

function HeroTitle({
  lines,
  accentClass,
}: {
  lines: readonly [string, string];
  accentClass: string;
}) {
  return (
    <h1
      data-client-hero-reveal
      className="mt-6 text-[clamp(2.8rem,5.8vw,6.4rem)] font-medium leading-[0.87] tracking-[-0.072em]"
    >
      <span className="block">{lines[0]}</span>
      <span className={`block ${accentClass}`}>{lines[1]}</span>
    </h1>
  );
}

function ClientsContent() {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div data-client-reveal>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
            Sector experience
          </p>
          <h2 className="mt-5 max-w-[8ch] text-[clamp(3rem,5vw,5.7rem)] font-medium leading-[0.88] tracking-[-0.068em]">
            Across the business landscape<span className="text-[var(--z-orange)]">.</span>
          </h2>
        </div>
        <p data-client-reveal className="max-w-[52rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-black/50">
          {sourceContent.industries}
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <div
            key={industry}
            data-client-reveal
            className="group relative min-h-[150px] overflow-hidden rounded-[1.5rem] border border-black/[0.08] bg-white/65 p-5 shadow-[0_16px_45px_rgba(20,50,30,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--z-green)]/25 hover:bg-white"
          >
            <span className="text-[0.56rem] tracking-[0.16em] text-black/25">0{index + 1}</span>
            <p className="absolute bottom-5 left-5 right-5 text-lg font-medium tracking-[-0.035em] text-black/72">
              {industry}
            </p>
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--z-green)] opacity-0 blur-[42px] transition-opacity duration-500 group-hover:opacity-15" />
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article data-client-reveal className="rounded-[2rem] bg-[#101713] p-7 text-white md:p-10">
          <Sparkles className="text-[#80d976]" size={20} strokeWidth={1.5} />
          <p className="mt-7 text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.45] tracking-[-0.025em] text-white/76">
            {sourceContent.experience}
          </p>
        </article>
        <article data-client-reveal className="flex flex-col justify-between rounded-[2rem] border border-black/[0.08] bg-white/70 p-7 md:p-10">
          <ShieldCheck className="text-[var(--z-green)]" size={22} strokeWidth={1.5} />
          <div className="mt-12">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/35">Confidentiality</p>
            <p className="mt-4 text-sm leading-7 text-black/52">{sourceContent.confidentiality}</p>
            <p className="mt-5 border-t border-black/10 pt-5 text-sm leading-7 text-black/44">{sourceContent.nda}</p>
          </div>
        </article>
      </div>
    </>
  );
}

function CaseStudiesContent() {
  return (
    <>
      <div className="mx-auto max-w-[980px] text-center" data-client-reveal>
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-orange)]">Engagement portfolio</p>
        <h2 className="mt-5 text-[clamp(3rem,5vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.065em]">
          Work shaped around each challenge<span className="text-[var(--z-green)]">.</span>
        </h2>
      </div>

      <div className="relative mt-12 grid gap-4 md:grid-cols-2">
        {engagements.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.number}
              data-client-reveal
              className="group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/70 p-7 shadow-[0_20px_55px_rgba(55,38,15,0.06)] transition-all duration-500 hover:-translate-y-2 hover:bg-white md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="text-[0.58rem] tracking-[0.16em] text-black/28">{item.number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0a963]/12 text-[#b96024] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
              </div>
              <div className="absolute bottom-7 left-7 right-7 md:bottom-9 md:left-9 md:right-9">
                <h3 className="text-[clamp(1.55rem,2.4vw,2.35rem)] font-medium leading-[0.98] tracking-[-0.05em] text-black/78">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/42">{item.detail}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 space-y-4">
        {[sourceContent.currentIndustries, sourceContent.transformation, sourceContent.hiring].map((paragraph, index) => (
          <article
            key={paragraph}
            data-client-reveal
            className="grid gap-5 rounded-[1.6rem] border border-black/[0.08] bg-[#ebece6] p-6 md:grid-cols-[90px_1fr] md:items-start md:p-8"
          >
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--z-green)]">Record 0{index + 1}</span>
            <p className="max-w-[70rem] text-[clamp(1rem,1.25vw,1.12rem)] leading-8 text-black/52">{paragraph}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function ClientImpactContent() {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div data-client-reveal>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#287d68]">Areas of impact</p>
          <h2 className="mt-5 max-w-[9ch] text-[clamp(3rem,5vw,5.7rem)] font-medium leading-[0.88] tracking-[-0.068em]">
            From transition to performance<span className="text-[var(--z-orange)]">.</span>
          </h2>
        </div>
        <p data-client-reveal className="max-w-[52rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-black/50">
          {sourceContent.transformation}
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {[
          { icon: Network, label: "Transformation & Integration", copy: "Post-merger phase to enable employee transition" },
          { icon: TrendingUp, label: "Business Performance", copy: "Reward architecture and policy formulation" },
          { icon: UsersRound, label: "Talent & Leadership", copy: "Young professionals to seasoned experts" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label} data-client-reveal className="group rounded-[2rem] bg-[#101a1d] p-7 text-white shadow-[0_24px_65px_rgba(15,38,42,0.12)] transition-transform duration-500 hover:-translate-y-2 md:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#8bd8c0]">
                <Icon size={19} strokeWidth={1.5} />
              </span>
              <h3 className="mt-12 text-2xl font-medium tracking-[-0.045em] text-white/85">{item.label}</h3>
              <p className="mt-3 text-sm leading-6 text-white/42">{item.copy}</p>
              <div className="mt-7 h-px origin-left scale-x-50 bg-gradient-to-r from-[#8bd8c0] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          );
        })}
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <article data-client-reveal className="rounded-[2rem] border border-black/[0.08] bg-white/70 p-7 md:p-10">
          <Landmark className="text-[#287d68]" size={22} strokeWidth={1.5} />
          <p className="mt-7 text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.5] tracking-[-0.02em] text-black/65">{sourceContent.hiring}</p>
        </article>
        <article data-client-reveal className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#173d35,#245c4d,#9b7130)] p-7 text-white md:p-10">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
          <LockKeyhole className="relative text-[#a7e2d1]" size={22} strokeWidth={1.5} />
          <p className="relative mt-7 text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.5] tracking-[-0.02em] text-white/76">{sourceContent.confidentiality}</p>
          <p className="relative mt-6 border-t border-white/12 pt-6 text-sm leading-7 text-white/48">{sourceContent.nda}</p>
        </article>
      </div>
    </>
  );
}

function ClientNavigation({ active }: { active: ClientsPageType }) {
  const links = [
    { type: "clients" as const, label: "Our Clients", href: "/clients" },
    { type: "case-studies" as const, label: "Case Studies", href: "/case-studies" },
    { type: "client-impact" as const, label: "Client Impact", href: "/client-impact" },
  ];

  return (
    <div className="mt-[clamp(4rem,7vw,7rem)] border-t border-black/10 pt-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-black/30">Clients & Impact</p>
          <p className="mt-2 text-sm text-black/45">Explore the complete client experience.</p>
        </div>
        <nav className="flex flex-wrap gap-2" aria-label="Clients and impact pages">
          {links.map((link) => (
            <Link
              key={link.type}
              href={link.href}
              className={`group inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-400 ${
                active === link.type
                  ? "border-black bg-black text-white"
                  : "border-black/10 bg-white/60 text-black/55 hover:border-[var(--z-green)]/30 hover:bg-white hover:text-black"
              }`}
            >
              {link.label}
              <ArrowUpRight size={13} strokeWidth={1.7} className="transition-transform duration-400 group-hover:rotate-45" />
            </Link>
          ))}
        </nav>
      </div>
      <p className="mt-6 text-[0.6rem] leading-5 text-black/28">
        Content sourced from ZUNOKS Consulting’s Our Clients page.
      </p>
    </div>
  );
}

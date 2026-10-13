"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  CircleGauge,
  Cog,
  Compass,
  Factory,
  Fingerprint,
  Gauge,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type PremiumServiceType =
  | "human-resources"
  | "gamified-recruitment"
  | "manufacturing-supply-chain"
  | "executive-search"
  | "executive-coaching"
  | "shared-services";

type ServiceContent = {
  eyebrow: string;
  titleLines: readonly [string, string];
  paragraphs: readonly string[];
  capabilitiesIntro?: string;
  capabilities: readonly string[];
  contact: string;
  email: string;
  phone?: string;
  sourceUrl: string;
  image: string;
};

const serviceContent = {
  "human-resources": {
    eyebrow: "Human Resources",
    titleLines: ["People systems", "built for performance."],
    paragraphs: [
      "By helping you manage your people effectively, we help your business gain a competitive advantage and boost performance. We understand the importance of culture in your organization, which ultimately drives leadership and performance, in line with your strategic objectives. We have deep expertise in understanding the value of having right people in right place to drive organizational performance and a sustainable talent pipeline. Our strong expertise in HR leadership in leading local and multinational organizations (across South Asia and the Middle East) has granted us exposure to industrial best practices amidst the rapidly evolving global benchmarks. From setting up an ideal culture and managing your talent to manage their performance, rewards and succession, we utilize tools and technology to optimize these processes, making your HR functions future-proof and ensuring constructive employee and industrial relations. We extend our holistic support to your organization.",
    ],
    capabilitiesIntro: "Our comprehensive HR solutions include:",
    capabilities: [
      "Organizational Culture",
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
    contact:
      "Reach out to us at zunoks.consulting@zunoks.com or call us at +880-9678-224-224 to discuss how we can work together.",
    email: "zunoks.consulting@zunoks.com",
    phone: "+880-9678-224-224",
    sourceUrl: "https://www.zunoks.com/services/human-resource/",
    image: "/images/hero/hero-vision.png",
  },
  "gamified-recruitment": {
    eyebrow: "Gamified Recruitment",
    titleLines: ["Assessment that", "candidates experience."],
    paragraphs: [
      "Now, companies in Bangladesh can upgrade their candidate experience by using AI-driven online gamified talent assessments. ZUNOKS offers the best talent assessment solutions in Bangladesh, helping organizations uncover top talent using gamification, artificial intelligence and neuroscience-based games.",
      "Our hiring games are not just video games, in fact they are scientifically proven to accurately evaluate each candidate’s personality, cognitive ability, aptitude and behavior, all while they play the game.",
      "Experience our recruitment game for yourself!",
    ],
    capabilities: ["Personality", "Cognitive Ability", "Aptitude", "Behavior"],
    contact:
      "Interesting, right? Call us at +880-9678-224-224 or reach out to us at zunoks.consulting@zunoks.com to discuss how we can modernize your talent assessment.",
    email: "zunoks.consulting@zunoks.com",
    phone: "+880-9678-224-224",
    sourceUrl: "https://www.zunoks.com/services/gamified-recruitment/",
    image: "/images/hero/hero-strategy.png",
  },
  "manufacturing-supply-chain": {
    eyebrow: "Manufacturing, Supply Chain",
    titleLines: ["Operational clarity", "at industrial scale."],
    paragraphs: [
      "We help you make decisions for optimal utilization of assets and resources to excel in all aspects of Manufacturing and Supply Chain management. Our diagnostics can help you to develop/refine your Performance Dashboard and way of work to focus on total Productivity Gains, Complexity Reduction, Improve Overall Equipment Effectiveness and reduction of Working Capital. Our specialization in Manufacturing and Supply Chain makes use of benchmarks and practices, processes & tools within and across industries through process reengineering, effective utilization of technology, and Enterprise Resource Planning. Our solutions are always underpinned by the technical and leadership competencies of the individual & team, ensuring Safety, Health & Environment to meet your compliance and regulatory requirements, in line with your Sustainability agenda.",
      "Whether you’re looking for the enhancement of your operational capabilities, launching a new factory/project or bolster existing operations, we offer our services to deliver operational excellence.",
    ],
    capabilitiesIntro: "Our full range of services include:",
    capabilities: [
      "Manufacturing Excellence",
      "Supply Chain Optimization",
      "Green-Field project",
      "Process Re-engineering, ERP",
      "Enterprise Resource Planning e.g., S&OP",
      "Project Management",
      "Environment, Health & Safety",
      "Compliance & Risk",
    ],
    contact:
      "We are available to discuss and explore all your operational, manufacturing and supply chain requirements. To book an appointment, please mail us at zunoks.consulting@zunoks.com or reach us at +880-9678-224-224 to discuss further.",
    email: "zunoks.consulting@zunoks.com",
    phone: "+880-9678-224-224",
    sourceUrl: "https://www.zunoks.com/services/operations/",
    image: "/images/hero/hero-operations.png",
  },
  "executive-search": {
    eyebrow: "Executive Search",
    titleLines: ["Leadership found", "with precision."],
    paragraphs: [
      "Our dedicated recruitment team is experienced in working for global and local organizations including international recruitment agencies. We offer board level recruitment and executive searches for CXO-1 levels and above. We find the right candidates by making use of assessment tools, supported by years of expertise in building and leading teams.",
      "We don’t emphasize only on the right set of skills. We respect your organization’s culture and values to identify candidates with the right mindset to succeed and deliver strategic objectives in your organization.",
    ],
    capabilitiesIntro: "Our services include:",
    capabilities: [
      "Board-level Search",
      "Ex-Com Retained Search",
      "Recruitment-managed Service",
      "Talent Mapping",
    ],
    contact:
      "For any of your C-level recruitment needs, please let us know about your requirement needs at recruitment@zunoks.com",
    email: "recruitment@zunoks.com",
    sourceUrl:
      "https://www.zunoks.com/services/executive-search-workforce-solutions/",
    image: "/images/hero/hero-strategy.png",
  },
  "executive-coaching": {
    eyebrow: "Executive Coaching",
    titleLines: ["Leadership potential", "made sustainable."],
    paragraphs: [
      "Unlock the full potential of your leaders and take your organization forward through coaching and mentoring by our team of experts. We provide individualized strategies and identify the best way to approach challenges, considering the highly complex decisions of your organization, especially in the VUCA world.",
      "Our program is results-based and enhances the capabilities of executives to be effective leaders, communicators and visionaries, elevating your organization to newer horizons. Our program is an efficient, high-impact process that helps high-performing people in leadership roles improve results in ways that are sustained over time.",
    ],
    capabilitiesIntro: "Our executive coaching services include:",
    capabilities: ["Coaching", "Mentoring", "Career Management"],
    contact:
      "Looking for an executive coach? Reach out to us at zunoks.consulting@zunoks.com or call us at +880-9678-224-224 to set up a meeting.",
    email: "zunoks.consulting@zunoks.com",
    phone: "+880-9678-224-224",
    sourceUrl: "https://www.zunoks.com/services/executive-coaching/",
    image: "/images/hero/hero-vision.png",
  },
  "shared-services": {
    eyebrow: "Shared Services",
    titleLines: ["Connected services", "built to operate."],
    paragraphs: [
      "ZUNOKS offers a number of shared services. Through our global partnerships, we provide full support for your organization to digitize and operationalize HR services, including Payroll Services, HR Back Office support and HRIS development.",
      "We also offer our flagship Leadership Development workshop in addition to board level training and other capacity building initiatives through candidate assessment and interviewing skills, sales, brand and marketing trainings etc.",
    ],
    capabilities: [
      "HR Back Office",
      "Payroll Services",
      "Training & Development",
      "Business Process Outsourcing",
      "HRIS",
    ],
    contact:
      "Want to learn more? Contact us at zunoks.consulting@zunoks.com or call us at +880-9678-224-224 to arrange a meeting.",
    email: "zunoks.consulting@zunoks.com",
    phone: "+880-9678-224-224",
    sourceUrl: "https://www.zunoks.com/services/shared-services/",
    image: "/images/hero/hero-operations.png",
  },
} satisfies Record<PremiumServiceType, ServiceContent>;

const theme = {
  "human-resources": {
    shell: "bg-[#371d28] shadow-[0_35px_100px_rgba(73,30,46,0.23)]",
    background:
      "bg-[radial-gradient(circle_at_78%_22%,rgba(238,157,115,0.30),transparent_34%),linear-gradient(125deg,#29151f_0%,#5a2939_50%,#9a5548_100%)]",
    accent: "text-[#f1b08c]",
    dot: "bg-[#f1b08c]",
    cardActive: "border-[#f1b08c]/30 bg-[#3c202b] text-white",
    icon: "text-[#f1b08c]",
  },
  "gamified-recruitment": {
    shell: "bg-[#07110c] shadow-[0_35px_100px_rgba(7,35,18,0.25)]",
    background:
      "bg-[radial-gradient(circle_at_72%_30%,rgba(49,155,66,0.30),transparent_34%),linear-gradient(125deg,#060d09_0%,#102319_54%,#3b3217_100%)]",
    accent: "text-[#82dc76]",
    dot: "bg-[#82dc76]",
    cardActive: "border-[#82dc76]/30 bg-[#102018] text-white",
    icon: "text-[#82dc76]",
  },
  "manufacturing-supply-chain": {
    shell: "bg-[#151b1d] shadow-[0_35px_100px_rgba(15,30,36,0.25)]",
    background:
      "bg-[radial-gradient(circle_at_78%_20%,rgba(226,143,54,0.25),transparent_32%),linear-gradient(125deg,#111719_0%,#25363b_54%,#675039_100%)]",
    accent: "text-[#edaa65]",
    dot: "bg-[#edaa65]",
    cardActive: "border-[#edaa65]/30 bg-[#1c282b] text-white",
    icon: "text-[#edaa65]",
  },
  "executive-search": {
    shell: "bg-[#0d0d0c] shadow-[0_35px_100px_rgba(0,0,0,0.28)]",
    background:
      "bg-[radial-gradient(circle_at_78%_18%,rgba(205,174,103,0.24),transparent_32%),linear-gradient(125deg,#090909_0%,#1d1d1b_55%,#463f2f_100%)]",
    accent: "text-[#d7bd7d]",
    dot: "bg-[#d7bd7d]",
    cardActive: "border-[#d7bd7d]/30 bg-[#191917] text-white",
    icon: "text-[#d7bd7d]",
  },
  "executive-coaching": {
    shell: "bg-[#241c34] shadow-[0_35px_100px_rgba(42,27,61,0.25)]",
    background:
      "bg-[radial-gradient(circle_at_75%_25%,rgba(226,136,78,0.25),transparent_34%),linear-gradient(125deg,#1d172b_0%,#453256_52%,#82563e_100%)]",
    accent: "text-[#e9a06d]",
    dot: "bg-[#e9a06d]",
    cardActive: "border-[#e9a06d]/30 bg-[#30233c] text-white",
    icon: "text-[#e9a06d]",
  },
  "shared-services": {
    shell: "bg-[#0d2430] shadow-[0_35px_100px_rgba(10,48,61,0.24)]",
    background:
      "bg-[radial-gradient(circle_at_78%_22%,rgba(69,193,174,0.28),transparent_34%),linear-gradient(125deg,#0a1c26_0%,#153e4c_54%,#307568_100%)]",
    accent: "text-[#77d8c5]",
    dot: "bg-[#77d8c5]",
    cardActive: "border-[#77d8c5]/30 bg-[#12313b] text-white",
    icon: "text-[#77d8c5]",
  },
} satisfies Record<PremiumServiceType, Record<string, string>>;

const serviceIcons = [
  UsersRound,
  Target,
  Gauge,
  Network,
  GraduationCap,
  BarChart3,
  HeartHandshake,
  Sparkles,
  Activity,
  ShieldCheck,
  BriefcaseBusiness,
] as const;

export default function PremiumServiceExperience({
  type,
}: {
  type: PremiumServiceType;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const content = serviceContent[type];
  const colors = theme[type];

  useEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    const visual = visualRef.current;

    if (!section || !hero || !visual) return;

    const media = gsap.matchMedia();
    const direction =
      type === "executive-search" || type === "manufacturing-supply-chain"
        ? -1
        : 1;

    const ctx = gsap.context(() => {
      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          finePointer: "(hover: hover) and (pointer: fine)",
        },
        (context) => {
          if (!context.conditions?.motion) return;

          gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .fromTo(
              "[data-service-eyebrow]",
              { opacity: 0, y: 16, filter: "blur(7px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
            )
            .fromTo(
              "[data-service-title-line]",
              {
                opacity: 0,
                yPercent: type === "executive-search" ? 0 : 110,
                xPercent: type === "executive-search" ? -80 : 0,
                rotateX: type === "executive-coaching" ? -18 : 0,
              },
              {
                opacity: 1,
                yPercent: 0,
                xPercent: 0,
                rotateX: 0,
                duration: 1.05,
                stagger: 0.1,
              },
              "-=0.45",
            )
            .fromTo(
              visual,
              { opacity: 0, scale: 0.9, rotate: direction * 4 },
              { opacity: 1, scale: 1, rotate: 0, duration: 1.15 },
              "-=0.55",
            );

          gsap.to("[data-service-orbit]", {
            rotation: 360 * direction,
            duration: type === "gamified-recruitment" ? 22 : 36,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });

          gsap.to("[data-service-float]", {
            y: (index) => (index % 2 === 0 ? -10 : 9),
            x: (index) => direction * (index % 2 === 0 ? 4 : -4),
            duration: (index) => 3.3 + index * 0.42,
            repeat: -1,
            yoyo: true,
            stagger: 0.16,
            ease: "sine.inOut",
          });

          gsap.to("[data-service-pulse]", {
            scale: 1.12,
            opacity: 0.25,
            duration: 3.2,
            stagger: 0.65,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.fromTo(
            "[data-service-scan]",
            { xPercent: direction > 0 ? -150 : 170, opacity: 0 },
            {
              xPercent: direction > 0 ? 180 : -170,
              opacity: 0.28,
              duration: type === "shared-services" ? 4.8 : 6.2,
              repeat: -1,
              repeatDelay: 2.2,
              ease: "power1.inOut",
            },
          );

          gsap.fromTo(
            "[data-service-reveal]",
            { opacity: 0, y: 42, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.075,
              ease: "power4.out",
              scrollTrigger: {
                trigger: "[data-service-content]",
                start: "top 82%",
                once: true,
              },
            },
          );

          if (context.conditions.finePointer) {
            const rotateX = gsap.quickTo(visual, "rotationX", {
              duration: 0.8,
              ease: "power3.out",
            });
            const rotateY = gsap.quickTo(visual, "rotationY", {
              duration: 0.8,
              ease: "power3.out",
            });

            gsap.set(visual, {
              transformPerspective: 1300,
              transformOrigin: "50% 50%",
            });

            const handleMove = (event: PointerEvent) => {
              const bounds = hero.getBoundingClientRect();
              rotateX(-((event.clientY - bounds.top) / bounds.height - 0.5) * 4);
              rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
            };
            const reset = () => {
              rotateX(0);
              rotateY(0);
            };

            hero.addEventListener("pointermove", handleMove);
            hero.addEventListener("pointerleave", reset);

            return () => {
              hero.removeEventListener("pointermove", handleMove);
              hero.removeEventListener("pointerleave", reset);
            };
          }
        },
      );
    }, section);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, [type]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f5ef_0%,#edf2e8_58%,#f4f1df_100%)] pb-[clamp(2.25rem,3.5vw,3.5rem)] pt-[7.25rem] text-black md:pt-[7.75rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div
          ref={heroRef}
          className={`relative overflow-hidden rounded-[2.25rem] px-6 py-7 text-white md:px-9 md:py-8 lg:px-12 ${colors.shell}`}
        >
          <div className="absolute inset-0">
            <Image
              src={content.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-[0.16]"
            />
          </div>
          <div className={`pointer-events-none absolute inset-0 ${colors.background}`} />
          <div className="pointer-events-none absolute -left-28 top-1/3 h-64 w-64 rounded-full bg-[var(--z-green)]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 bottom-[-5rem] h-72 w-72 rounded-full bg-[#e8c84c]/10 blur-[110px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:74px_74px]" />
          <div
            data-service-scan
            className="pointer-events-none absolute -inset-y-[30%] left-[-18%] w-[25%] rotate-[15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-2xl"
          />

          <div className="relative z-10 grid items-center gap-5 sm:gap-6 lg:min-h-[390px] lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div data-service-eyebrow className="flex items-center gap-3">
                <span className={`h-[2px] w-9 ${colors.dot}`} />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/48">
                  {content.eyebrow}
                </span>
              </div>

              <h1 className="mt-4 font-serif text-[clamp(2.75rem,5.1vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.05em]">
                {content.titleLines.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-[0.07em]">
                    <span
                      data-service-title-line
                      className={`block ${index === 1 ? colors.accent : ""}`}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

            </div>

            <div ref={visualRef} className="relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[330px] lg:h-[370px]">
              <div className="absolute inset-0 scale-[0.74] sm:scale-[0.84] lg:scale-[0.92]">
                <ServiceHeroVisual type={type} content={content} colors={colors} />
              </div>
            </div>
          </div>
        </div>

        <div data-service-content className="mt-[clamp(2.5rem,4vw,4rem)]">
          <ServiceBody
            type={type}
            content={content}
            colors={colors}
            active={active}
            setActive={setActive}
          />

          <p className="mt-6 text-[0.6rem] leading-5 text-black/28">
            Content sourced from ZUNOKS Consulting’s {content.eyebrow} page.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceHeroVisual({
  type,
  content,
  colors,
}: {
  type: PremiumServiceType;
  content: ServiceContent;
  colors: Record<string, string>;
}) {
  if (type === "human-resources") {
    return (
      <div className="absolute inset-0">
        <div data-service-pulse className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f1b08c]/20" />
        <div data-service-orbit className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15">
          {["Culture", "Leadership", "Talent", "Performance"].map((label, index) => {
            const positions = ["left-[8%] top-[18%]", "right-[4%] top-[28%]", "bottom-[12%] right-[15%]", "bottom-[18%] left-[4%]"];
            return <span key={label} className={`absolute ${positions[index]} rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[0.58rem] uppercase tracking-[0.13em] text-white/58 backdrop-blur-xl`}>{label}</span>;
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-white/12 bg-black/25 text-center backdrop-blur-[24px]">
            <UsersRound size={25} strokeWidth={1.4} className={colors.icon} />
            <p className="mt-4 text-2xl font-medium tracking-[-0.045em]">Right people</p>
            <p className="mt-2 text-[0.58rem] uppercase tracking-[0.15em] text-white/35">Right place</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "gamified-recruitment") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[390px] w-full max-w-[470px] overflow-hidden rounded-[2rem] border border-white/12 bg-black/30 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-[22px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[0.58rem] uppercase tracking-[0.16em] text-white/42">Live assessment</span>
            <span className="flex items-center gap-2 rounded-full border border-[#82dc76]/20 bg-[#82dc76]/10 px-3 py-1.5 text-[0.55rem] text-[#a5e69d]"><span className="h-1.5 w-1.5 rounded-full bg-[#82dc76]" />Active</span>
          </div>
          <div className="relative flex h-[205px] items-center justify-center">
            <div data-service-pulse className="absolute h-[165px] w-[165px] rounded-full border border-[#82dc76]/18" />
            <div data-service-orbit className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-white/14"><span className="absolute right-[10%] top-[14%] h-2.5 w-2.5 rounded-full bg-[var(--z-orange)]" /></div>
            <div className="text-center"><Brain size={22} strokeWidth={1.4} className="mx-auto text-[#82dc76]" /><p className="mt-3 text-4xl font-medium tracking-[-0.06em]">AI</p><p className="mt-1 text-[0.54rem] uppercase tracking-[0.15em] text-white/35">Talent signal</p></div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {content.capabilities.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center text-[0.52rem] leading-4 text-white/48">{item}</div>)}
          </div>
        </div>
      </div>
    );
  }

  if (type === "manufacturing-supply-chain") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[330px] w-full max-w-[500px]">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#edaa65]/70 to-transparent" />
          {[
            ["01", "Input", "left-[2%] top-[32%]"],
            ["02", "Process", "left-[36%] top-[12%]"],
            ["03", "Output", "right-[2%] top-[38%]"],
          ].map(([number, label, position], index) => (
            <div key={label} data-service-float className={`absolute ${position} w-[135px] rounded-[1.4rem] border border-white/12 bg-black/30 p-4 backdrop-blur-xl`}>
              <span className="text-[0.52rem] tracking-[0.15em] text-white/25">{number}</span>
              <Factory size={18} strokeWidth={1.5} className="mt-6 text-[#edaa65]" />
              <p className="mt-3 text-sm font-medium text-white/72">{label}</p>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#edaa65]" style={{ width: `${65 + index * 12}%` }} /></div>
            </div>
          ))}
          <div data-service-orbit className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
        </div>
      </div>
    );
  }

  if (type === "executive-search") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[390px] w-full max-w-[470px]">
          {["CXO-1", "BOARD", "EX-COM"].map((label, index) => (
            <div
              key={label}
              data-service-float
              className="absolute left-1/2 w-[76%] -translate-x-1/2 rounded-[1.6rem] border border-white/12 bg-black/35 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.32)] backdrop-blur-[24px]"
              style={{ top: `${index * 24 + 4}%`, zIndex: index + 1, marginLeft: `${index * 13}px` }}
            >
              <div className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-[#d7bd7d]"><Fingerprint size={18} strokeWidth={1.4} /></span><div><p className="text-[0.52rem] uppercase tracking-[0.15em] text-white/28">Leadership profile</p><p className="mt-1 text-sm font-medium text-white/76">{label} search</p></div><ScanSearch size={17} strokeWidth={1.4} className="ml-auto text-[#d7bd7d]" /></div>
            </div>
          ))}
          <div data-service-scan className="pointer-events-none absolute inset-y-0 left-[-12%] w-[22%] rotate-[12deg] bg-gradient-to-r from-transparent via-[#d7bd7d]/25 to-transparent blur-xl" />
        </div>
      </div>
    );
  }

  if (type === "executive-coaching") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div data-service-orbit className="absolute h-[370px] w-[370px] rounded-full border border-dashed border-white/14"><span className="absolute right-[8%] top-[16%] h-3 w-3 rounded-full bg-[#e9a06d] shadow-[0_0_22px_rgba(233,160,109,0.6)]" /></div>
        <div data-service-pulse className="absolute h-[280px] w-[280px] rounded-full border border-[#e9a06d]/18" />
        <div className="relative z-10 w-[250px] rounded-[2rem] border border-white/12 bg-black/25 p-6 text-center backdrop-blur-[24px]">
          <Compass size={24} strokeWidth={1.4} className="mx-auto text-[#e9a06d]" />
          <p className="mt-5 text-2xl font-medium tracking-[-0.045em]">Lead forward</p>
          <p className="mt-3 text-xs leading-5 text-white/42">Effective leaders · Communicators · Visionaries</p>
        </div>
        <div data-service-float className="absolute left-[2%] top-[18%] rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-xs text-white/55 backdrop-blur-xl">Clarity</div>
        <div data-service-float className="absolute bottom-[15%] right-[1%] rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-xs text-white/55 backdrop-blur-xl">Sustained results</div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative grid w-full max-w-[480px] grid-cols-2 gap-3 rounded-[2rem] border border-white/12 bg-black/20 p-5 backdrop-blur-[24px]">
        {content.capabilities.slice(0, 4).map((item, index) => {
          const Icon = [BriefcaseBusiness, CircleGauge, GraduationCap, Workflow][index];
          return (
            <div key={item} data-service-float className="min-h-[135px] rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
              <Icon size={18} strokeWidth={1.5} className="text-[#77d8c5]" />
              <p className="mt-7 text-sm font-medium leading-5 text-white/68">{item}</p>
            </div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#15343d] text-[#77d8c5] shadow-[0_0_30px_rgba(119,216,197,0.18)]"><Layers3 size={19} strokeWidth={1.5} /></div>
      </div>
    </div>
  );
}

function ServiceBody({
  type,
  content,
  colors,
  active,
  setActive,
}: {
  type: PremiumServiceType;
  content: ServiceContent;
  colors: Record<string, string>;
  active: number;
  setActive: (index: number) => void;
}) {
  const remainingParagraphs = content.paragraphs.slice(1);

  return (
    <>
      <div
        className={`grid gap-7 ${
          type === "executive-coaching"
            ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
            : type === "executive-search"
              ? "lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
              : "lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        }`}
      >
        <div data-service-reveal className="lg:sticky lg:top-32">
          <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${colors.icon}`}>
            {type === "human-resources"
              ? "People & Organization"
              : type === "gamified-recruitment"
                ? "AI · Gamification · Neuroscience"
                : type === "manufacturing-supply-chain"
                  ? "Operations Excellence"
                  : type === "executive-search"
                    ? "Leadership Talent"
                    : type === "executive-coaching"
                      ? "Leadership Development"
                      : "Operational Support"}
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-[clamp(2.7rem,4.7vw,5.25rem)] font-normal leading-[0.94] tracking-[-0.045em]">
            {type === "human-resources"
              ? "Human systems that move business."
              : type === "gamified-recruitment"
                ? "See more than a résumé."
                : type === "manufacturing-supply-chain"
                  ? "Performance across the value chain."
                  : type === "executive-search"
                    ? "Skills, mindset and cultural fit."
                    : type === "executive-coaching"
                      ? "A more capable leader, over time."
                      : "Workflows made simpler."}
          </h2>
        </div>

        <div className="space-y-5">
          <p data-service-reveal className="font-serif text-[clamp(1.2rem,1.8vw,1.58rem)] leading-[1.5] tracking-[-0.015em] text-black/68">
            {content.paragraphs[0]}
          </p>
          {remainingParagraphs.map((paragraph) => (
            <p key={paragraph} data-service-reveal className="border-t border-[var(--z-green)]/15 pt-5 text-[clamp(0.98rem,1.2vw,1.08rem)] leading-7 text-black/54">
              {paragraph}
            </p>
          ))}
          {type === "gamified-recruitment" && (
            <a
              data-service-reveal
              href="https://www.zunoks.com/demo/form/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-black p-1.5 pl-5 text-sm font-medium text-white transition-all duration-500 hover:bg-[var(--z-green)]"
            >
              <span>TAKE A FREE DEMO</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={16} strokeWidth={1.7} /></span>
            </a>
          )}
        </div>
      </div>

      <div className="mt-[clamp(2.5rem,3.75vw,3.75rem)]">
        <div data-service-reveal className="flex flex-col gap-4 border-b border-[var(--z-green)]/15 pb-5 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[13ch] font-serif text-[clamp(2.55rem,4.4vw,4.85rem)] font-normal leading-[0.94] tracking-[-0.045em]">
            {type === "gamified-recruitment" ? "What the experience evaluates." : "How we can support you."}
          </h2>
          {content.capabilitiesIntro && <p className="max-w-[34rem] text-base leading-7 text-black/48">{content.capabilitiesIntro}</p>}
        </div>

        <CapabilityLayout
          type={type}
          capabilities={content.capabilities}
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
}

function CapabilityLayout({
  type,
  capabilities,
  active,
  setActive,
}: {
  type: PremiumServiceType;
  capabilities: readonly string[];
  active: number;
  setActive: (index: number) => void;
}) {
  const gridClass =
    type === "human-resources"
      ? "md:grid-cols-2 xl:grid-cols-3"
      : type === "manufacturing-supply-chain"
        ? "md:grid-cols-2 xl:grid-cols-4"
        : type === "executive-coaching"
          ? "md:grid-cols-3"
          : type === "shared-services"
            ? "md:grid-cols-2 xl:grid-cols-5"
            : "md:grid-cols-2";

  return (
    <div className={`mt-6 grid gap-3.5 ${gridClass}`}>
      {capabilities.map((capability, index) => {
        const Icon =
          type === "gamified-recruitment"
            ? [Fingerprint, Brain, Target, Activity][index]
            : type === "manufacturing-supply-chain"
              ? [Factory, GitBranch, Cog, Workflow, BarChart3, BriefcaseBusiness, ShieldCheck, Gauge][index]
              : type === "executive-search"
                ? [UsersRound, ScanSearch, BriefcaseBusiness, Network][index]
                : type === "executive-coaching"
                  ? [Compass, HeartHandshake, GraduationCap][index]
                  : serviceIcons[index % serviceIcons.length];
        const selected = active === index;

        return (
          <button
            key={capability}
            type="button"
            data-service-reveal
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-pressed={selected}
            className={`group relative min-h-[178px] overflow-hidden rounded-[1.75rem] border p-5 text-left backdrop-blur-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--z-green)] ${
              selected
                ? "-translate-y-1 border-white/25 bg-[linear-gradient(145deg,rgba(8,34,18,0.94),rgba(20,64,30,0.84))] text-white shadow-[0_24px_60px_-24px_rgba(23,93,42,0.7),inset_0_1px_0_rgba(255,255,255,0.16)]"
                : "border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(238,245,229,0.5))] text-black shadow-[0_18px_50px_-28px_rgba(22,72,34,0.42),inset_0_1px_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:border-[var(--z-green)]/30 hover:bg-white/80"
            }`}
          >
            <span className={`pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full blur-[52px] transition-opacity duration-500 ${selected ? "bg-[#e8c84c]/30 opacity-100" : "bg-[var(--z-green)]/15 opacity-50 group-hover:opacity-90"}`} />
            <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d75b]/80 to-transparent opacity-70" />
            <div className="relative flex items-start justify-between">
              <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ${selected ? "border-[#e8c84c]/25 bg-white/[0.07]" : "border-[var(--z-green)]/15 bg-[var(--z-green)]/[0.07]"}`}>
                <Icon size={18} strokeWidth={1.4} className={selected ? "text-[#f0d75b]" : "text-[var(--z-green)]"} />
              </span>
              <span className={`rounded-full border px-2 py-1 text-[0.52rem] tracking-[0.15em] ${selected ? "border-white/10 bg-white/[0.05] text-[#f0d75b]/70" : "border-[var(--z-green)]/10 bg-white/40 text-[var(--z-green)]/70"}`}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className={`relative mt-7 max-w-[18rem] font-serif text-[1.22rem] font-normal leading-[1.08] tracking-[-0.025em] ${selected ? "text-white/92" : "text-[#183120]"}`}>{capability}</p>
            <div className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[var(--z-green)] via-[#e8c84c] to-transparent transition-all duration-500 ${selected ? "w-full" : "w-0 group-hover:w-full"}`} />
          </button>
        );
      })}
    </div>
  );
}


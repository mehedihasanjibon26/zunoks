"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Coffee,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type CareerPageType =
  | "work-with-us"
  | "career-opportunities"
  | "young-professionals"
  | "experienced-professionals";

const lifeImages = [
  "/images/work-with-us/life-at-zunoks-01.png",
  "/images/work-with-us/life-at-zunoks-02.png",
  "/images/work-with-us/life-at-zunoks-03.png",
  "/images/work-with-us/life-at-zunoks-04.png",
  "/images/work-with-us/life-at-zunoks-05.png",
];

const pageData = {
  "work-with-us": {
    eyebrow: "Work With Us",
    titleLines: ["Build your career", "with ZUNOKS."],
    intro:
      "We are always on the lookout for the best and the brightest talents, especially those who are looking to establish themselves as consulting professionals.",
  },

  "career-opportunities": {
    eyebrow: "Career Opportunities",
    titleLines: ["Find where you can", "add the most value."],
    intro:
      "Explore our services to get an idea of our areas of work, and see where you can add the most value that falls in line with your passion, strength and experience.",
  },

  "young-professionals": {
    eyebrow: "Young Professionals",
    titleLines: ["Start your consulting", "journey with ZUNOKS."],
    intro:
      "ZUNOKS employs young and aspiring talents for full-time opportunities.",
  },

  "experienced-professionals": {
    eyebrow: "Experienced Professionals",
    titleLines: ["Bring your experience", "into meaningful work."],
    intro:
      "We also offer contingent opportunities for professionals in career break, maternity leave etc. looking for part-time opportunities.",
  },
} satisfies Record<
  CareerPageType,
  {
    eyebrow: string;
    titleLines: readonly [string, string];
    intro: string;
  }
>;

const heroThemes = {
  "work-with-us": {
    shell:
      "bg-[#d8aa31] text-[#17140a] shadow-[0_30px_90px_rgba(119,83,8,0.20)]",
    background:
      "bg-[linear-gradient(125deg,#f6e28a_0%,#e7c552_42%,#d39d24_100%)]",
    eyebrow: "text-black/55",
    ruleA: "bg-[#76510a]",
    ruleB: "bg-[var(--z-green)]",
    accent: "text-[#176d37]",
    punctuation: "text-[#a65311]",
    copy: "text-black/58",
    back: "text-black/55 hover:text-black",
    backIcon: "border-black/15 bg-white/25",
  },
  "career-opportunities": {
    shell:
      "bg-[#073e39] text-white shadow-[0_30px_90px_rgba(4,57,51,0.22)]",
    background:
      "bg-[linear-gradient(125deg,#052f31_0%,#0b5d51_48%,#2c8a65_100%)]",
    eyebrow: "text-white/62",
    ruleA: "bg-[#83d9b1]",
    ruleB: "bg-[#f0be55]",
    accent: "text-[#9be4bd]",
    punctuation: "text-[#f1bd50]",
    copy: "text-white/66",
    back: "text-white/58 hover:text-white",
    backIcon: "border-white/15 bg-white/[0.07]",
  },
  "young-professionals": {
    shell:
      "bg-[#172c54] text-white shadow-[0_30px_90px_rgba(17,39,82,0.23)]",
    background:
      "bg-[linear-gradient(130deg,#101e40_0%,#264f86_50%,#678dba_100%)]",
    eyebrow: "text-white/64",
    ruleA: "bg-[#9bc9ff]",
    ruleB: "bg-[#e5d16e]",
    accent: "text-[#a8d5ff]",
    punctuation: "text-[#efcf62]",
    copy: "text-white/68",
    back: "text-white/60 hover:text-white",
    backIcon: "border-white/15 bg-white/[0.08]",
  },
  "experienced-professionals": {
    shell:
      "bg-[#472217] text-white shadow-[0_30px_90px_rgba(75,31,17,0.24)]",
    background:
      "bg-[linear-gradient(125deg,#281815_0%,#713722_48%,#b45f2d_100%)]",
    eyebrow: "text-white/62",
    ruleA: "bg-[#f3aa6e]",
    ruleB: "bg-[#8fce78]",
    accent: "text-[#ffc18d]",
    punctuation: "text-[#9ee087]",
    copy: "text-white/68",
    back: "text-white/58 hover:text-white",
    backIcon: "border-white/15 bg-white/[0.08]",
  },
} satisfies Record<CareerPageType, Record<string, string>>;

export default function CareerDetailPage({
  type,
}: {
  type: CareerPageType;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const data = pageData[type];
  const theme = heroThemes[type];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const lineFrom =
        type === "work-with-us"
          ? { yPercent: 115, rotateX: -18 }
          : type === "career-opportunities"
            ? { xPercent: -105, rotateY: 12 }
            : type === "young-professionals"
              ? { yPercent: 90, rotation: 3 }
              : { xPercent: 105, rotateY: -12 };

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .fromTo(
          "[data-detail-eyebrow]",
          {
            opacity: 0,
            y: 16,
            filter: "blur(7px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay: 0.1,
          },
        )
        .fromTo(
          "[data-detail-title-line]",
          {
            ...lineFrom,
            opacity: 0,
          },
          {
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 1.05,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .fromTo(
          "[data-detail-copy]",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.55",
        );

      gsap.to("[data-detail-glow-a]", {
        xPercent: type === "career-opportunities" ? -10 : 14,
        yPercent: type === "young-professionals" ? 12 : -8,
        scale: type === "experienced-professionals" ? 1.2 : 1.14,
        duration: type === "young-professionals" ? 11 : 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-detail-glow-b]", {
        xPercent: type === "experienced-professionals" ? 12 : -12,
        yPercent: type === "work-with-us" ? -10 : 12,
        scale: 1.16,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-detail-orbit]", {
        rotation: type === "career-opportunities" ? -360 : 360,
        duration:
          type === "career-opportunities"
            ? 24
            : type === "young-professionals"
              ? 38
              : 31,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.fromTo(
        "[data-detail-sweep]",
        {
          xPercent: type === "experienced-professionals" ? 160 : -150,
          opacity: 0,
        },
        {
          xPercent: type === "experienced-professionals" ? -170 : 175,
          opacity: type === "work-with-us" ? 0.32 : 0.22,
          duration: type === "young-professionals" ? 7 : 5.8,
          repeat: -1,
          repeatDelay: 2.4,
          ease: "power1.inOut",
        },
      );

      gsap.to("[data-detail-particle]", {
        y: (index) => (index % 2 === 0 ? -12 : 10),
        x: (index) => (index % 2 === 0 ? 5 : -6),
        duration: (index) => 3.6 + index * 0.55,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        "[data-detail-reveal]",
        {
          opacity: 0,
          y: 36,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "[data-detail-content]",
            start: "top 82%",
            once: true,
          },
        },
      );

      section
        .querySelectorAll<HTMLElement>("[data-life-image]")
        .forEach((card, index) => {
          const image = card.querySelector("img");

          if (!image) return;

          gsap.fromTo(
            image,
            {
              scale: 1.1,
            },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1 + index * 0.08,
              },
            },
          );
        });
    }, section);

    return () => ctx.revert();
  }, [type]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f1f2ed] pb-[clamp(4rem,7vw,7rem)] pt-[7.7rem] text-black md:pt-[8.3rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* HERO */}
        <div
          className={`relative flex min-h-[385px] items-center overflow-hidden rounded-[2.2rem] px-5 py-12 md:min-h-[420px] md:px-10 lg:px-14 ${theme.shell}`}
        >
          <div
            className={`pointer-events-none absolute inset-0 ${theme.background}`}
          />

          {type === "work-with-us" && (
            <>
              <div
                data-detail-glow-a
                className="pointer-events-none absolute -left-[13%] -top-[65%] h-[36rem] w-[36rem] rounded-full bg-[#fff7c7] opacity-55 blur-[105px]"
              />
              <div
                data-detail-glow-b
                className="pointer-events-none absolute -bottom-[72%] -right-[8%] h-[34rem] w-[34rem] rounded-full bg-[#956307] opacity-25 blur-[115px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(72,52,7,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(72,52,7,0.045)_1px,transparent_1px)] bg-[size:80px_80px]" />
              <div
                data-detail-sweep
                className="pointer-events-none absolute -inset-y-[35%] left-[-18%] w-[32%] rotate-[16deg] bg-gradient-to-r from-transparent via-white/55 to-transparent blur-2xl"
              />
              <div
                data-detail-orbit
                className="pointer-events-none absolute -right-[4.5rem] top-1/2 h-[21rem] w-[21rem] -translate-y-1/2 rounded-full border border-[#65470b]/15"
              >
                <span
                  data-detail-particle
                  className="absolute left-[12%] top-[9%] h-2.5 w-2.5 rounded-full bg-[var(--z-green)] shadow-[0_0_22px_rgba(49,155,66,0.42)]"
                />
                <span
                  data-detail-particle
                  className="absolute bottom-[13%] right-[7%] h-2 w-2 rounded-full bg-[#fff2ab] shadow-[0_0_18px_rgba(255,244,181,0.65)]"
                />
              </div>
            </>
          )}

          {type === "career-opportunities" && (
            <>
              <div
                data-detail-glow-a
                className="pointer-events-none absolute -left-[14%] -top-[60%] h-[35rem] w-[35rem] rounded-full bg-[#4bd5a2] opacity-30 blur-[115px]"
              />
              <div
                data-detail-glow-b
                className="pointer-events-none absolute -bottom-[70%] right-[2%] h-[32rem] w-[32rem] rounded-full bg-[#e7bd55] opacity-20 blur-[110px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
              <div
                data-detail-orbit
                className="pointer-events-none absolute -left-[7rem] top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-dashed border-[#9be4bd]/20"
              >
                <span className="absolute inset-[12%] rounded-full border border-white/10" />
                <span className="absolute inset-[28%] rounded-full border border-[#f1bd50]/20" />
                <span
                  data-detail-particle
                  className="absolute right-[10%] top-[24%] h-2.5 w-2.5 rounded-full bg-[#f1bd50] shadow-[0_0_20px_rgba(241,189,80,0.6)]"
                />
              </div>
              <div
                data-detail-sweep
                className="pointer-events-none absolute -inset-y-[20%] left-[-12%] w-[24%] rotate-[12deg] bg-gradient-to-r from-transparent via-[#c4f8df]/35 to-transparent blur-xl"
              />
            </>
          )}

          {type === "young-professionals" && (
            <>
              <div
                data-detail-glow-a
                className="pointer-events-none absolute -left-[12%] -bottom-[75%] h-[38rem] w-[38rem] rounded-full bg-[#58a8ff] opacity-35 blur-[120px]"
              />
              <div
                data-detail-glow-b
                className="pointer-events-none absolute -right-[10%] -top-[65%] h-[36rem] w-[36rem] rounded-full bg-[#d7c463] opacity-25 blur-[120px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09)_1px,transparent_1.5px)] bg-[size:34px_34px] opacity-45" />
              <div
                data-detail-sweep
                className="pointer-events-none absolute -inset-y-[30%] left-[-20%] w-[35%] -rotate-[18deg] bg-gradient-to-r from-transparent via-[#aad7ff]/35 to-transparent blur-3xl"
              />
              <div
                data-detail-orbit
                className="pointer-events-none absolute -right-[6rem] -top-[9rem] h-[25rem] w-[25rem] rounded-full border border-white/10"
              >
                <span
                  data-detail-particle
                  className="absolute bottom-[12%] left-[18%] h-3 w-3 rounded-full border border-[#b7dcff]/70 bg-[#8fc6ff]/30 backdrop-blur-md"
                />
                <span
                  data-detail-particle
                  className="absolute bottom-[2%] left-[46%] h-1.5 w-1.5 rounded-full bg-[#efcf62] shadow-[0_0_18px_rgba(239,207,98,0.7)]"
                />
              </div>
            </>
          )}

          {type === "experienced-professionals" && (
            <>
              <div
                data-detail-glow-a
                className="pointer-events-none absolute -left-[14%] -top-[65%] h-[36rem] w-[36rem] rounded-full bg-[#e78346] opacity-35 blur-[118px]"
              />
              <div
                data-detail-glow-b
                className="pointer-events-none absolute -bottom-[80%] right-[3%] h-[36rem] w-[36rem] rounded-full bg-[#70b85f] opacity-20 blur-[120px]"
              />
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(115deg,transparent_0,transparent_58px,rgba(255,255,255,0.045)_59px,transparent_60px)]" />
              <div
                data-detail-sweep
                className="pointer-events-none absolute -inset-y-[40%] right-[-18%] w-[34%] -rotate-[18deg] bg-gradient-to-r from-transparent via-[#ffc18d]/30 to-transparent blur-2xl"
              />
              <div
                data-detail-orbit
                className="pointer-events-none absolute -bottom-[13rem] -right-[5rem] h-[30rem] w-[30rem] rounded-full border border-[#ffc18d]/15"
              >
                <span className="absolute inset-[16%] rounded-full border border-dashed border-white/10" />
                <span
                  data-detail-particle
                  className="absolute left-[12%] top-[22%] h-2.5 w-2.5 rounded-full bg-[#9ee087] shadow-[0_0_20px_rgba(158,224,135,0.55)]"
                />
              </div>
            </>
          )}

          <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />

          <div className="relative z-10 mx-auto max-w-[1040px] text-center">
            <div
              data-detail-eyebrow
              className="flex items-center justify-center gap-3"
            >
              <span className={`h-[2px] w-8 ${theme.ruleA}`} />

              <span
                className={`text-[0.61rem] font-semibold uppercase tracking-[0.22em] ${theme.eyebrow}`}
              >
                {data.eyebrow}
              </span>

              <span className={`h-[2px] w-8 ${theme.ruleB}`} />
            </div>

            <h1
              data-detail-title
              className="mx-auto mt-5 text-[clamp(1.75rem,5.8vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              <span className="block overflow-hidden pb-[0.06em]">
                <span
                  data-detail-title-line
                  className="block whitespace-nowrap"
                >
                  {data.titleLines[0]}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  data-detail-title-line
                  className={`block whitespace-nowrap ${theme.accent}`}
                >
                  {data.titleLines[1].slice(0, -1)}
                  <span className={theme.punctuation}>.</span>
                </span>
              </span>
            </h1>

            <p
              data-detail-copy
              className={`mx-auto mt-6 max-w-[48rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 ${theme.copy}`}
            >
              {data.intro}
            </p>

            <Link
              data-detail-copy
              href="/careers"
              className={`group mx-auto mt-7 inline-flex items-center gap-3 text-sm font-medium transition-colors ${theme.back}`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-transform duration-500 group-hover:-translate-x-1 ${theme.backIcon}`}
              >
                <ArrowLeft
                  size={13}
                  strokeWidth={1.7}
                />
              </span>

              Back to Work With Us
            </Link>
          </div>
        </div>

        <div
          data-detail-content
          className="mt-[clamp(4rem,7vw,7rem)]"
        >
          {type === "work-with-us" && (
            <WorkWithUsContent />
          )}

          {type === "career-opportunities" && (
            <CareerOpportunitiesContent />
          )}

          {type === "young-professionals" && (
            <SingleOpportunityContent
              number="01"
              label="Young Professionals"
              title="Full-time opportunities for young and aspiring talent."
              body="ZUNOKS employs young and aspiring talents for full-time opportunities."
            />
          )}

          {type === "experienced-professionals" && (
            <SingleOpportunityContent
              number="02"
              label="Experienced Professionals"
              title="Flexible opportunities for experienced professionals."
              body="We also offer contingent opportunities for professionals in career break, maternity leave etc. looking for part-time opportunities."
            />
          )}
        </div>

        <RecruitmentCTA />
      </div>
    </section>
  );
}

function WorkWithUsContent() {
  return (
    <>
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div data-detail-reveal>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--z-green)] text-white">
              <Coffee
                size={16}
                strokeWidth={1.6}
              />
            </span>

            <span className="text-[0.61rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
              Life at ZUNOKS
            </span>
          </div>

          <h2 className="mt-5 max-w-[7ch] text-[clamp(3rem,5vw,5.7rem)] font-medium leading-[0.88] tracking-[-0.068em]">
            Open. Collaborative.{" "}
            <span className="text-[var(--z-green)]">
              Human
            </span>
            <span className="text-[var(--z-orange)]">
              .
            </span>
          </h2>
        </div>

        <p
          data-detail-reveal
          className="max-w-[52rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-black/49"
        >
          We are a closely knit unit that believes in creating an
          environment that fosters openness and enables collaboration.
          Our open work & fun environment doesn’t limit you to a desk.
          Whether it’s over a cup of Espresso or a can of soda, we free
          up your mind, stimulate your creative ingenuity and inspire
          you to innovate to learn from the best resources and deliver
          work of highest professional standard for our clients.
        </p>
      </div>

      <div className="mt-10 grid auto-rows-[230px] gap-4 md:grid-cols-2 lg:grid-cols-12">
        <LifeImage
          src={lifeImages[0]}
          className="md:row-span-2 lg:col-span-7"
        />

        <LifeImage
          src={lifeImages[1]}
          className="lg:col-span-5"
        />

        <LifeImage
          src={lifeImages[2]}
          className="lg:col-span-5"
        />

        <LifeImage
          src={lifeImages[3]}
          className="min-h-[280px] lg:col-span-5"
        />

        <div
          data-detail-reveal
          className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#164d39,#437945,#c3b654)] p-7 text-white shadow-[0_28px_75px_rgba(30,80,45,0.14)] lg:col-span-3"
        >
          <Sparkles
            size={20}
            strokeWidth={1.5}
            className="text-[#c0f29a]"
          />

          <p className="mt-8 text-[clamp(1.6rem,2.4vw,2.4rem)] font-medium leading-[1.02] tracking-[-0.05em]">
            Inspire to innovate.
          </p>
        </div>

        <LifeImage
          src={lifeImages[4]}
          className="min-h-[280px] lg:col-span-4"
        />
      </div>
    </>
  );
}

function CareerOpportunitiesContent() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div
        data-detail-reveal
        className="rounded-[2rem] border border-white/70 bg-white/[0.48] p-7 shadow-[0_25px_70px_rgba(25,50,30,0.055)] backdrop-blur-[28px] md:p-9"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(49,155,66,0.10)] text-[var(--z-green)]">
          <BriefcaseBusiness
            size={18}
            strokeWidth={1.6}
          />
        </div>

        <p className="mt-6 text-[clamp(1.5rem,2.35vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.045em] text-black/72">
          ZUNOKS employs young and aspiring talents for full-time
          opportunities.
        </p>

        <Link
          href="/careers/young-professionals"
          className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[var(--z-green)]"
        >
          Young Professionals
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>
      </div>

      <div
        data-detail-reveal
        className="rounded-[2rem] border border-[#dfbd56]/28 bg-[rgba(248,241,210,0.5)] p-7 shadow-[0_25px_70px_rgba(80,65,20,0.04)] backdrop-blur-[28px] md:p-9"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(239,125,34,0.09)] text-[var(--z-orange)]">
          <Users
            size={18}
            strokeWidth={1.6}
          />
        </div>

        <p className="mt-6 text-[clamp(1.5rem,2.35vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.045em] text-black/72">
          We also offer contingent opportunities for professionals
          in career break, maternity leave etc. looking for part-time
          opportunities.
        </p>

        <Link
          href="/careers/experienced-professionals"
          className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#ad8110]"
        >
          Experienced Professionals
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>
      </div>

      <div
        data-detail-reveal
        className="border-y border-black/[0.09] py-8 lg:col-span-2"
      >
        <p className="mx-auto max-w-[54rem] text-center text-[clamp(1.15rem,1.8vw,1.6rem)] leading-8 tracking-[-0.025em] text-black/52">
          Explore our services to get an idea of our areas of work,
          and see where you can add the most value that falls in line
          with your passion, strength and experience.
        </p>
      </div>
    </div>
  );
}

function SingleOpportunityContent({
  number,
  label,
  title,
  body,
}: {
  number: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto max-w-[900px]">
      <div
        data-detail-reveal
        className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/[0.48] p-8 shadow-[0_28px_80px_rgba(30,60,35,0.06)] backdrop-blur-[28px] md:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[var(--z-green)] opacity-[0.07] blur-[80px]" />

        <div className="relative">
          <div className="flex items-center justify-between gap-6">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--z-green)]">
              {number} · {label}
            </span>

            <span className="h-2 w-2 rounded-full bg-[var(--z-orange)]" />
          </div>

          <h2 className="mt-7 max-w-[14ch] text-[clamp(2.5rem,4.6vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            {title}
          </h2>

          <p className="mt-7 max-w-[48rem] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-8 text-black/50">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

function RecruitmentCTA() {
  return (
    <div
      data-detail-reveal
      className="relative mt-[clamp(4rem,7vw,6rem)] overflow-hidden rounded-[2rem] border border-[var(--z-green)]/18 bg-[linear-gradient(110deg,rgba(49,155,66,0.10),rgba(255,255,255,0.62),rgba(234,203,84,0.10))] p-7 shadow-[0_25px_70px_rgba(35,70,40,0.06)] backdrop-blur-[28px] md:p-9"
    >
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <Mail
              size={17}
              strokeWidth={1.6}
              className="text-[var(--z-green)]"
            />

            <span className="text-[0.59rem] font-semibold uppercase tracking-[0.18em] text-[var(--z-green)]">
              Interested in joining ZUNOKS?
            </span>
          </div>

          <p className="mt-4 max-w-[52rem] text-[clamp(1.3rem,2vw,2rem)] leading-[1.28] tracking-[-0.035em] text-black/70">
            Mail your updated CV along with a Cover Letter to{" "}
            <span className="font-medium text-[var(--z-green)]">
              recruitment@zunoks.com
            </span>{" "}
            with the subject:{" "}
            <span className="font-medium">
              “Work with ZUNOKS”
            </span>
          </p>
        </div>

        <a
          href="mailto:recruitment@zunoks.com?subject=Work%20with%20ZUNOKS"
          className="group inline-flex w-fit items-center gap-4 rounded-full bg-[var(--z-green)] p-1.5 pl-5 text-sm font-medium text-white shadow-[0_14px_35px_rgba(49,155,66,0.20)] transition-all duration-500 hover:-translate-y-1"
        >
          <span>Send your application</span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--z-green)] transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
            />
          </span>
        </a>
      </div>
    </div>
  );
}

function LifeImage({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      data-detail-reveal
      data-life-image
      className={`group relative overflow-hidden rounded-[2rem] border border-white/65 shadow-[0_24px_65px_rgba(0,0,0,0.08)] ${className}`}
    >
      <Image
        src={src}
        alt="Life at ZUNOKS"
        fill
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
  );
}

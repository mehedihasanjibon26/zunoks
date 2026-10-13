"use client";

import {
  ArrowRight,
  FileText,
  Folder,
  Network,
  UserRound,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const studies = [
  {
    number: "01",
    title: "Transformation & Integration",
    detail: "Post-merger phase and employee transition.",
    icon: Network,
    tone: "green",
  },
  {
    number: "02",
    title: "Operations Transformation",
    detail: "Transformation following an acquisition.",
    icon: Folder,
    tone: "orange",
  },
  {
    number: "03",
    title: "HR Transformation",
    detail: "Engagement with a 1st generation private bank.",
    icon: UserRound,
    tone: "orange",
  },
  {
    number: "04",
    title: "Leadership Hiring",
    detail: "Strategic, tactical and execution-level roles.",
    icon: FileText,
    tone: "green",
  },
] as const;

const records = [
  "We are currently engaged with several clients in industries ranging from Food & Beverage, Pharmaceuticals, FMCG, Financial Institutions, RMG and Engineering sector.",
  "We are engaged in the process of providing strategic consultancy in the areas of Transformation & Integration in post-merger phase to enable an employee transition project, operations transformation project of an MNC following an acquisition. We are currently working closely with a 1st generation private bank with a view to engaging in a HR transformation project.",
  "We have been retained for hiring for full range of roles be it strategic, tactical, execution level ranging from young professionals to seasoned experts and top two levels for a few new market entrants.",
] as const;

const heroStudies = studies.slice(0, 3);

export default function CaseStudiesLandingPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-hero-copy]",
            { opacity: 0, y: 28, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.08,
            },
          )
          .fromTo(
            "[data-hero-study]",
            { opacity: 0, x: 34, scale: 0.97 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.85,
              stagger: 0.11,
            },
            0.28,
          );

        gsap.to("[data-arc-a]", {
          rotation: 7,
          xPercent: -3,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to("[data-arc-b]", {
          rotation: -6,
          yPercent: 4,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.fromTo(
          "[data-sheen]",
          { xPercent: -160, opacity: 0 },
          {
            xPercent: 220,
            opacity: 0.32,
            duration: 5.5,
            repeat: -1,
            repeatDelay: 2.8,
            ease: "power1.inOut",
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          gsap.fromTo(
            section.querySelectorAll("[data-reveal]"),
            { opacity: 0, y: 28, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.85,
              stagger: 0.075,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

        gsap.fromTo(
          "[data-study-card]",
          { opacity: 0, y: 25, scale: 0.985 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-study-grid]",
              start: "top 86%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-record]",
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-records]",
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, page);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={pageRef}
      className="relative overflow-hidden bg-[#f8f7f1] pb-[clamp(3rem,5vw,5rem)] pt-[6.8rem] text-[#101410] md:pt-[7.4rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div className="relative isolate min-h-[550px] overflow-hidden rounded-[1.65rem] bg-[#11180e] px-6 py-10 text-white shadow-[0_30px_85px_-38px_rgba(37,30,8,0.58)] md:px-10 lg:px-14">
          <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_30%,rgba(112,83,27,0.38),transparent_38%),radial-gradient(circle_at_88%_70%,rgba(125,154,72,0.25),transparent_34%),linear-gradient(118deg,#20170d_0%,#1b1b0e_47%,#0a190f_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-20 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.16)_0.55px,transparent_0.8px)] [background-size:4px_4px]" />

          <div
            data-arc-a
            className="pointer-events-none absolute -bottom-[24rem] -right-[4rem] -z-10 h-[50rem] w-[66rem] rotate-[-17deg] rounded-[50%] border border-[#dcae4e]/75 bg-[linear-gradient(135deg,transparent_42%,rgba(188,139,47,0.18)_58%,rgba(237,194,99,0.32)_72%,transparent_84%)] shadow-[0_0_55px_rgba(219,172,72,0.16)]"
          />
          <div
            data-arc-b
            className="pointer-events-none absolute -right-[18rem] -top-[25rem] -z-10 h-[59rem] w-[31rem] rotate-[31deg] rounded-[50%] border-2 border-[#f1c768]/70 bg-[linear-gradient(90deg,rgba(220,172,71,0.04),rgba(224,184,87,0.32),rgba(86,134,65,0.22))] shadow-[0_0_48px_rgba(241,199,104,0.22)]"
          />
          <div className="pointer-events-none absolute -right-[9rem] -top-[11rem] -z-10 h-[40rem] w-[19rem] rotate-[31deg] rounded-[50%] border border-[#8db16a]/70 bg-[#6a9858]/10" />
          <div
            data-sheen
            className="pointer-events-none absolute -inset-y-[30%] left-[-20%] w-[22%] rotate-[14deg] bg-gradient-to-r from-transparent via-[#f3c36a]/20 to-transparent blur-2xl"
          />

          <div className="relative grid min-h-[470px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div data-hero-copy className="flex items-center gap-3">
                <span className="h-[3px] w-10 bg-[#efb85d]" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.23em] text-white/70">
                  Case Studies
                </span>
              </div>

              <h1 className="mt-6 max-w-[9ch] text-[clamp(4.2rem,7.7vw,8.1rem)] font-medium leading-[0.78] tracking-[-0.07em]">
                <span data-hero-copy className="block">
                  Experience
                </span>
                <span data-hero-copy className="block">
                  applied
                </span>
                <span data-hero-copy className="block text-[#f2bd66]">
                  where it
                </span>
                <span data-hero-copy className="block text-[#f2bd66]">
                  matters<span className="text-[var(--z-orange)]">.</span>
                </span>
              </h1>

              <p
                data-hero-copy
                className="mt-6 max-w-[43rem] text-[0.94rem] leading-6 text-white/76"
              >
                We have already provided strategic consultancy in the areas of
                Transformation &amp; Integration in post-merger phase to enable
                employee transition, designed reward architecture to enable
                business performance, policy formulation etc. We have worked
                with our clients using our proven methodology for hiring full
                range of roles be it at board level, strategic, tactical, or at
                the execution level, ranging from young professionals to
                seasoned experts and for new market entrants.
              </p>
            </div>

            <div className="relative space-y-3 lg:pl-4">
              {heroStudies.map((study) => {
                const Icon = study.icon;

                return (
                  <article
                    key={study.number}
                    data-hero-study
                    className="group flex min-h-[88px] items-center gap-4 rounded-[1.25rem] border border-white/25 bg-white/[0.12] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-[20px] transition-[transform,background-color,border-color] duration-400 hover:translate-x-1 hover:border-white/40 hover:bg-white/[0.16]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 text-[#f3bd5e]">
                      <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-white/52">
                        Case Studies {study.number}
                      </p>
                      <h2 className="mt-1.5 text-sm font-medium text-white/92 sm:text-base">
                        {study.title}
                      </h2>
                    </div>
                    <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 transition-all duration-400 group-hover:rotate-[-35deg] group-hover:bg-white group-hover:text-black">
                      <ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <section data-section className="pt-[clamp(4rem,6vw,6rem)]">
          <div data-reveal className="mx-auto max-w-[62rem] text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-black/12" />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[var(--z-orange)]">
                Pragmatic Portfolio
              </p>
              <span className="h-px w-10 bg-black/12" />
            </div>
            <h2 className="mt-4 text-[clamp(3rem,5.6vw,6rem)] font-medium leading-[0.87] tracking-[-0.065em]">
              Work shaped around each
              <span className="block">
                challenge<span className="text-[var(--z-green)]">.</span>
              </span>
            </h2>
          </div>

          <div
            data-study-grid
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {studies.map((study, index) => {
              const Icon = study.icon;
              const green = study.tone === "green";

              return (
                <article
                  key={study.number}
                  data-study-card
                  className="group relative min-h-[190px] overflow-hidden rounded-[1.35rem] border border-black/[0.055] bg-white/80 p-6 shadow-[0_20px_50px_-38px_rgba(50,44,23,0.3)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-[var(--z-green)]/18 hover:shadow-[0_25px_55px_-34px_rgba(37,63,31,0.35)] md:p-8"
                >
                  <div
                    className={`pointer-events-none absolute -bottom-[8rem] -right-[5rem] h-[17rem] w-[17rem] rounded-full ${
                      index % 2 === 0 ? "bg-[#eaf3df]" : "bg-[#fff2d9]"
                    }`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-[0.62rem] font-medium tracking-[0.18em] text-black/42">
                        {study.number}
                      </span>
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${
                          green
                            ? "bg-[#e7f4e7] text-[var(--z-green)]"
                            : "bg-[#fff0da] text-[#d98412]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-auto pt-7">
                      <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-none tracking-[-0.045em]">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-sm leading-5 text-black/42">
                        {study.detail}
                      </p>
                      <span className="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--z-green)]/30 text-[var(--z-green)] transition-all duration-400 group-hover:rotate-[-35deg] group-hover:bg-[var(--z-green)] group-hover:text-white">
                        <ArrowRight size={14} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          data-section
          data-records
          className="space-y-3 pt-[clamp(3rem,5vw,5rem)]"
        >
          {records.map((record, index) => (
            <article
              key={record}
              data-record
              className="group grid gap-4 rounded-[1rem] border border-[#70846d]/25 bg-white/30 px-5 py-4 transition-[background-color,border-color,transform] duration-400 hover:translate-x-1 hover:border-[var(--z-green)]/30 hover:bg-white/65 md:grid-cols-[105px_18px_1fr_auto] md:items-start md:gap-4"
            >
              <span className="pt-0.5 text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                Record 0{index + 1}
              </span>
              <span className="mt-1.5 hidden h-2 w-2 rounded-full bg-[var(--z-green)] md:block" />
              <p className="max-w-[65rem] text-[0.88rem] leading-6 text-black/48">
                {record}
              </p>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--z-green)]/25 text-[var(--z-green)] transition-transform duration-400 group-hover:rotate-[-35deg]">
                <ArrowRight size={13} strokeWidth={1.7} aria-hidden="true" />
              </span>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

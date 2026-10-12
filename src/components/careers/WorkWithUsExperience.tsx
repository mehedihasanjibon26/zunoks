"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const careerPaths = [
  {
    index: "01",
    title: "Work With Us",
    description: "Discover the ZUNOKS consulting environment.",
    href: "/careers/work-with-us",
    icon: UsersRound,
    accent: "green",
  },
  {
    index: "02",
    title: "Career Opportunities",
    description: "Explore current and future opportunities.",
    href: "/careers/career-opportunities",
    icon: BriefcaseBusiness,
    accent: "yellow",
  },
  {
    index: "03",
    title: "Young Professionals",
    description: "Start and develop a career in consulting.",
    href: "/careers/young-professionals",
    icon: GraduationCap,
    accent: "green",
  },
  {
    index: "04",
    title: "Experienced Professionals",
    description: "Bring experience and expertise to wider challenges.",
    href: "/careers/experienced-professionals",
    icon: UserRoundSearch,
    accent: "yellow",
  },
] as const;

export default function WorkWithUsExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .fromTo(
          "[data-careers-eyebrow]",
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
          "[data-careers-title-line]",
          {
            yPercent: 115,
            rotateX: -18,
            opacity: 0,
          },
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1.05,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .fromTo(
          "[data-careers-copy]",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.55",
        );

      gsap.to("[data-careers-glow-a]", {
        xPercent: 12,
        yPercent: 8,
        scale: 1.12,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-careers-glow-b]", {
        xPercent: -10,
        yPercent: -8,
        scale: 1.14,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        "[data-careers-sheen]",
        {
          xPercent: -145,
          opacity: 0,
        },
        {
          xPercent: 175,
          opacity: 0.32,
          duration: 5.5,
          repeat: -1,
          repeatDelay: 2.5,
          ease: "power1.inOut",
        },
      );

      gsap.to("[data-careers-orbit]", {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.fromTo(
        "[data-career-path]",
        {
          opacity: 0,
          y: 28,
          filter: "blur(7px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "[data-career-path-grid]",
            start: "top 82%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f1f2ed] pb-[clamp(4rem,7vw,7rem)] pt-[7.7rem] text-black md:pt-[8.3rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* HERO */}
        <div className="relative flex min-h-[390px] items-center overflow-hidden rounded-[2.2rem] bg-[#e2b947] px-6 py-12 text-[#17160f] shadow-[0_30px_90px_rgba(126,94,16,0.18)] md:min-h-[420px] md:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f5df82_0%,#e9c759_38%,#dcae32_72%,#c9911f_100%)]" />

          <div
            data-careers-glow-a
            className="pointer-events-none absolute -left-[13%] -top-[65%] h-[36rem] w-[36rem] rounded-full bg-[#fff7c7] opacity-55 blur-[105px]"
          />

          <div
            data-careers-glow-b
            className="pointer-events-none absolute -bottom-[70%] -right-[8%] h-[34rem] w-[34rem] rounded-full bg-[#9b6a09] opacity-25 blur-[115px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(72,52,7,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(72,52,7,0.045)_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div
            data-careers-sheen
            className="pointer-events-none absolute -inset-y-[35%] left-[-18%] w-[32%] rotate-[16deg] bg-gradient-to-r from-transparent via-white/55 to-transparent blur-2xl"
          />

          <div
            data-careers-orbit
            className="pointer-events-none absolute -right-[4.5rem] top-1/2 h-[21rem] w-[21rem] -translate-y-1/2 rounded-full border border-[#65470b]/15"
          >
            <span className="absolute left-[12%] top-[9%] h-2.5 w-2.5 rounded-full bg-[var(--z-green)] shadow-[0_0_22px_rgba(49,155,66,0.42)]" />
            <span className="absolute bottom-[13%] right-[7%] h-2 w-2 rounded-full bg-[#fff2ab] shadow-[0_0_18px_rgba(255,244,181,0.65)]" />
          </div>

          <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative z-10 mx-auto max-w-[1040px] text-center">
            <div
              data-careers-eyebrow
              className="flex items-center justify-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#805a0c]" />

              <span className="text-[0.61rem] font-semibold uppercase tracking-[0.22em] text-black/55">
                Work With Us
              </span>

              <span className="h-[2px] w-8 bg-[var(--z-green)]" />
            </div>

            <h1
              data-careers-title
              className="mt-5 text-[clamp(2.5rem,6vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.072em]"
            >
              <span className="block overflow-hidden pb-[0.06em]">
                <span
                  data-careers-title-line
                  className="block whitespace-nowrap"
                >
                  Find your place
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  data-careers-title-line
                  className="block whitespace-nowrap"
                >
                  at{" "}
                  <span className="text-[#176d37]">
                    ZUNOKS
                  </span>
                  <span className="text-[#a65311]">
                    .
                  </span>
                </span>
              </span>
            </h1>

            <p
              data-careers-copy
              className="mx-auto mt-6 max-w-[48rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-black/58"
            >
              We are always on the lookout for the best and the
              brightest talents, especially those who are looking
              to establish themselves as consulting professionals.
            </p>
          </div>
        </div>

        {/* 4-WAY HUB */}
        <div
          data-career-path-grid
          className="relative mt-8 overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(120deg,rgba(110,205,145,0.26),rgba(255,255,255,0.5),rgba(235,218,104,0.30))] p-4 shadow-[0_28px_80px_rgba(30,70,45,0.07)] backdrop-blur-[28px] md:p-6"
        >
          <div className="pointer-events-none absolute -left-20 top-[-7rem] h-80 w-80 rounded-full bg-[var(--z-green)] opacity-[0.12] blur-[100px]" />
          <div className="pointer-events-none absolute -right-16 bottom-[-8rem] h-80 w-80 rounded-full bg-[#e5cb58] opacity-[0.17] blur-[95px]" />

          <div className="relative mb-5 flex items-center justify-center gap-3">
            <Sparkles
              size={14}
              strokeWidth={1.6}
              className="text-[var(--z-green)]"
            />

            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-black/35">
              Choose your path
            </span>
          </div>

          <div className="relative grid md:grid-cols-2">
            {careerPaths.map((item, index) => {
              const Icon = item.icon;
              const green = item.accent === "green";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-career-path
                  className={`group relative min-h-[185px] overflow-hidden p-6 transition-all duration-500 md:p-7 ${
                    index === 0
                      ? "border-b border-black/[0.08] md:border-r"
                      : index === 1
                        ? "border-b border-black/[0.08]"
                        : index === 2
                          ? "border-b border-black/[0.08] md:border-b-0 md:border-r"
                          : ""
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 origin-center scale-95 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 ${
                      green
                        ? "bg-[linear-gradient(120deg,rgba(49,155,66,0.10),rgba(255,255,255,0.20))]"
                        : "bg-[linear-gradient(120deg,rgba(232,196,76,0.13),rgba(255,255,255,0.20))]"
                    }`}
                  />

                  <div className="relative flex h-full items-start justify-between gap-6">
                    <div className="flex gap-4">
                      <span className="pt-1 text-[0.58rem] font-semibold tracking-[0.16em] text-black/28">
                        {item.index}
                      </span>

                      <div>
                        <div
                          className={`mb-5 flex h-10 w-10 items-center justify-center rounded-full ${
                            green
                              ? "bg-[rgba(49,155,66,0.10)] text-[var(--z-green)]"
                              : "bg-[rgba(232,196,76,0.16)] text-[#b58a13]"
                          }`}
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.6}
                          />
                        </div>

                        <h2 className="text-[clamp(1.25rem,1.6vw,1.55rem)] font-medium tracking-[-0.035em] text-black/78">
                          {item.title}
                        </h2>

                        <p className="mt-2 max-w-[24rem] text-sm leading-6 text-black/43">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:rotate-45 ${
                        green
                          ? "border-[var(--z-green)]/18 bg-white/55 text-[var(--z-green)] group-hover:bg-[var(--z-green)] group-hover:text-white"
                          : "border-[#d7b747]/25 bg-white/55 text-[#a87f0f] group-hover:bg-[#d8b83e] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

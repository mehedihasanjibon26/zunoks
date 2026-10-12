"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilityTree = [
  {
    title: "Setting up business",
    side: "left",
    accent: "green",
  },
  {
    title: "Mergers & acquisitions",
    side: "right",
    accent: "orange",
  },
  {
    title: "Organizational development",
    side: "left",
    accent: "green",
  },
  {
    title: "Executive search",
    side: "right",
    accent: "orange",
  },
  {
    title: "Corporate governance",
    side: "left",
    accent: "green",
  },
  {
    title: "Human resources",
    side: "right",
    accent: "orange",
  },
  {
    title: "Transformation & leadership",
    side: "left",
    accent: "green",
  },
  {
    title: "Manufacturing & supply-chain excellence",
    side: "right",
    accent: "orange",
  },
] as const;

export default function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);

  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    const heroTitle = heroTitleRef.current;
    const editorial = editorialRef.current;
    const tree = treeRef.current;

    if (!section || !hero || !heroTitle || !editorial || !tree) {
      return;
    }

    const ctx = gsap.context(() => {
      /* ===================================================== */
      /* HERO */
      /* ===================================================== */

      const heroTl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTl
        .fromTo(
          "[data-about-eyebrow]",
          {
            opacity: 0,
            y: 15,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            delay: 0.1,
          },
        )
        .fromTo(
          "[data-title-line]",
          {
            yPercent: 115,
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.1,
          },
          "-=0.4",
        )
        .fromTo(
          "[data-hero-copy]",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          "-=0.55",
        );

      const counter = {
        value: 0,
      };

      gsap.to(counter, {
        value: 120,
        duration: 2,
        delay: 0.75,
        ease: "power3.out",
        onUpdate: () => {
          setExperienceCount(Math.round(counter.value));
        },
      });

      gsap.to(heroTitle, {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-aurora-a]", {
        xPercent: 18,
        yPercent: -10,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-aurora-b]", {
        xPercent: -18,
        yPercent: 14,
        scale: 1.18,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-aurora-c]", {
        xPercent: 10,
        yPercent: 18,
        scale: 1.2,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-aurora-ring]", {
        rotate: 360,
        duration: 32,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      /* ===================================================== */
      /* EDITORIAL */
      /* ===================================================== */

      gsap.fromTo(
        editorial.querySelectorAll("[data-editorial-reveal]"),
        {
          opacity: 0,
          y: 42,
          filter: "blur(9px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: editorial,
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-editorial-line]",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: editorial,
            start: "top 72%",
            once: true,
          },
        },
      );

      gsap.to("[data-editorial-word]", {
        y: -55,
        ease: "none",
        scrollTrigger: {
          trigger: editorial,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.15,
        },
      });

      gsap.to("[data-editorial-glow-a]", {
        x: 45,
        y: -20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-editorial-glow-b]", {
        x: -35,
        y: 24,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================== */
      /* DESKTOP TREE ONLY */
      /* ===================================================== */

      const desktopRoot = tree.querySelector(
        "[data-desktop-tree-root]",
      );

      const desktopPaths =
        tree.querySelectorAll<SVGPathElement>(
          "[data-desktop-tree-path]",
        );

      const desktopDots = tree.querySelectorAll(
        "[data-desktop-tree-dot]",
      );

      const desktopCards = tree.querySelectorAll(
        "[data-desktop-tree-card]",
      );

      if (desktopRoot) {
        gsap.set(desktopRoot, {
          opacity: 0,
          y: 25,
          scale: 0.95,
        });
      }

      gsap.set(desktopDots, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(desktopCards, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: "blur(6px)",
      });

      desktopPaths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const treeTl = gsap.timeline({
        scrollTrigger: {
          trigger: tree,
          start: "top 72%",
          end: "bottom 68%",
          scrub: 1.15,
        },
      });

      if (desktopRoot) {
        treeTl.to(desktopRoot, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
        });
      }

      desktopPaths.forEach((path, index) => {
        treeTl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: index === 0 ? 1.1 : 0.45,
            ease: "none",
          },
          index === 0 ? ">" : ">-0.12",
        );

        /*
         * Path 0 = main trunk
         * Path 1-8 = child branches
         */
        if (index > 0) {
          const childIndex = index - 1;

          const dot = desktopDots[childIndex];
          const card = desktopCards[childIndex];

          if (dot) {
            treeTl.to(
              dot,
              {
                opacity: 1,
                scale: 1,
                duration: 0.18,
                ease: "back.out(2)",
              },
              ">-0.22",
            );
          }

          if (card) {
            treeTl.to(
              card,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.36,
                ease: "power3.out",
              },
              ">-0.15",
            );
          }
        }
      });

      gsap.to("[data-root-glow]", {
        scale: 1.12,
        opacity: 0.24,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to("[data-root-dot]", {
        boxShadow:
          "0 0 0 10px rgba(49,155,66,0.04), 0 0 30px rgba(49,155,66,0.34)",
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ===================================================== */
      /* FOOTER NAV */
      /* ===================================================== */

      gsap.fromTo(
        "[data-about-footer]",
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-about-footer]",
            start: "top 92%",
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
      className="relative overflow-hidden bg-[#f1f2ed] pb-[clamp(4rem,6vw,6rem)] pt-[7.7rem] text-black md:pt-[8.3rem]"
    >
      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <div
          ref={heroRef}
          className="relative flex min-h-[440px] items-center overflow-hidden rounded-[2rem] bg-[#0c473d] px-5 py-12 text-white shadow-[0_30px_90px_rgba(10,55,45,0.17)] md:min-h-[470px] md:px-10 md:py-14 lg:px-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,#063d34_0%,#126a50_34%,#5b9c45_65%,#e0bd58_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(1,31,27,0.16)_0%,transparent_38%,rgba(1,25,22,0.22)_100%)]" />

          <div
            data-aurora-a
            className="pointer-events-none absolute -left-[12%] -top-[45%] h-[35rem] w-[35rem] rounded-full bg-[#55d879] opacity-[0.48] blur-[110px]"
          />

          <div
            data-aurora-b
            className="pointer-events-none absolute -right-[10%] -top-[35%] h-[32rem] w-[32rem] rounded-full bg-[#f4df65] opacity-[0.42] blur-[110px]"
          />

          <div
            data-aurora-c
            className="pointer-events-none absolute bottom-[-65%] left-[30%] h-[34rem] w-[34rem] rounded-full bg-[#86d867] opacity-[0.35] blur-[120px]"
          />

          <div
            data-aurora-ring
            className="pointer-events-none absolute -right-[6rem] -top-[10rem] h-[29rem] w-[29rem] rounded-[44%_56%_61%_39%/48%_43%_57%_52%] border border-white/[0.11]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:78px_78px] opacity-40" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center text-center">
            <div
              data-about-eyebrow
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#f5d95c]" />

              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.23em] text-white/65">
                Get to know us
              </span>

              <span className="h-[2px] w-8 bg-[#84dc77]" />
            </div>

            <h1
              ref={heroTitleRef}
              className="mt-5 w-full text-center text-[clamp(2.6rem,5.1vw,5.35rem)] font-medium leading-[0.9] tracking-[-0.07em]"
            >
              <span className="block overflow-hidden">
                <span
                  data-title-line
                  className="block lg:whitespace-nowrap"
                >
                  We are the best consultancy agency
                </span>
              </span>

              <span className="mt-1 block overflow-hidden">
                <span
                  data-title-line
                  className="block"
                >
                  in{" "}
                  <span className="text-[#a8ef84]">
                    Bangladesh
                  </span>
                  <span className="text-[#f4d85e]">.</span>
                </span>
              </span>
            </h1>

            <p
              data-hero-copy
              className="mt-5 max-w-[43rem] text-[0.95rem] leading-7 text-white/66 md:text-[1rem]"
            >
              Experience built across leadership, transformation,
              operations, people and organizational excellence.
            </p>

            <div
              data-hero-copy
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row"
            >
              <div className="flex items-center gap-4 rounded-full border border-white/[0.20] bg-white/[0.11] py-2 pl-2 pr-5 shadow-[0_12px_35px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-[20px]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.13]">
                  <Sparkles
                    size={15}
                    strokeWidth={1.6}
                    className="text-[#b1f18d]"
                  />
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-[2rem] font-medium leading-none tracking-[-0.06em] text-[#b3f58d]">
                    {experienceCount}+
                  </span>

                  <span className="text-left text-[0.63rem] uppercase leading-4 tracking-[0.12em] text-white/52">
                    combined years
                    <br />
                    of experience
                  </span>
                </div>
              </div>

              <span className="rounded-full border border-white/[0.16] bg-black/[0.08] px-4 py-3 text-[0.59rem] font-medium uppercase tracking-[0.16em] text-white/58 backdrop-blur-xl">
                Inspire to Innovate
              </span>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* EDITORIAL */}
        {/* ================================================= */}

        <div
          ref={editorialRef}
          className="relative mt-[clamp(4rem,7vw,7rem)] overflow-hidden border-y border-black/[0.08] py-[clamp(4rem,7vw,7rem)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div
              data-editorial-glow-a
              className="absolute -left-[10rem] top-[4rem] h-[24rem] w-[24rem] rounded-full bg-[var(--z-green)] opacity-[0.055] blur-[115px]"
            />

            <div
              data-editorial-glow-b
              className="absolute -right-[8rem] bottom-[2rem] h-[22rem] w-[22rem] rounded-full bg-[#eacb54] opacity-[0.08] blur-[110px]"
            />

            <div
              data-editorial-word
              className="absolute right-[-3%] top-[8%] select-none text-[clamp(8rem,16vw,17rem)] font-medium leading-none tracking-[-0.09em] text-black/[0.025]"
            >
              TRANSFORM
            </div>
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div
              data-editorial-reveal
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--z-green)] shadow-[0_0_15px_rgba(49,155,66,0.4)]" />

                <p className="text-[0.61rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                  We are here to
                </p>
              </div>

              <h2 className="mt-5 max-w-[7ch] text-[clamp(3.2rem,5.6vw,6rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                Transform the landscape of{" "}
                <span className="text-[var(--z-green)]">
                  consultancy
                </span>
                <span className="text-[var(--z-orange)]">.</span>
              </h2>

              <div
                data-editorial-line
                className="mt-7 h-[2px] w-full max-w-[240px] bg-gradient-to-r from-[var(--z-green)] via-[var(--z-orange)] to-transparent"
              />

              <div className="mt-6 flex items-center gap-3">
                <Globe2
                  size={16}
                  strokeWidth={1.5}
                  className="text-[var(--z-green)]"
                />

                <p className="max-w-[19rem] text-[0.62rem] uppercase leading-5 tracking-[0.13em] text-black/35">
                  Bangladesh · Regional Experience · Global Exposure
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                data-editorial-reveal
                className="border-t border-black/[0.10] pt-6"
              >
                <p className="text-[0.61rem] font-semibold uppercase tracking-[0.18em] text-black/30">
                  Our approach
                </p>

                <p className="mt-4 max-w-[46rem] text-[clamp(1.8rem,3vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.05em] text-black/78">
                  At ZUNOKS, we thrive to bring innovative solutions
                  addressing critical challenges and maximize value for our
                  clients.
                </p>
              </div>

              <div
                data-editorial-reveal
                className="mt-10 grid gap-8 border-t border-black/[0.10] pt-7 md:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[var(--z-green)]">
                    Experience
                  </p>

                  <p className="mt-3 text-[clamp(2.8rem,4vw,4.7rem)] font-medium leading-none tracking-[-0.07em] text-[var(--z-green)]">
                    120+
                  </p>

                  <p className="mt-2 text-sm leading-6 text-black/42">
                    combined years of professional experience.
                  </p>
                </div>

                <p className="text-sm leading-7 text-black/48">
                  With a combined experience of over 120 years, we offer
                  solutions in the areas of setting up business, mergers and
                  acquisitions, organizational development, executive search,
                  corporate governance, human resources, transformation &
                  leadership with end-to-end support in delivering
                  manufacturing and supply-chain excellence.
                </p>
              </div>

              <div
                data-editorial-reveal
                className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-black/[0.09] py-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--z-green)] text-white">
                  <Layers3
                    size={15}
                    strokeWidth={1.6}
                  />
                </span>

                {[
                  "Strategy",
                  "People",
                  "Leadership",
                  "Operations",
                  "Transformation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5"
                  >
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-black/43">
                      {item}
                    </span>

                    {index < 4 && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          index % 2 === 0
                            ? "bg-[var(--z-orange)]"
                            : "bg-[var(--z-green)]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* LIVE CAPABILITY TREE */}
        {/* ================================================= */}

        <div
          ref={treeRef}
          className="relative mt-[clamp(4rem,7vw,6rem)]"
        >
          <div className="mb-7 text-center">
            <p className="text-[0.61rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
              What we bring
            </p>
          </div>

          {/* ================================================= */}
          {/* MOBILE TREE */}
          {/* ================================================= */}

          <div className="grid gap-4 lg:hidden">
            <div
              data-mobile-tree-root
              className="relative overflow-hidden rounded-[1.8rem] border border-[var(--z-green)]/25 bg-[linear-gradient(135deg,#2f9b43_0%,#69bf68_55%,#d8ce66_100%)] px-6 py-7 text-center text-white shadow-[0_24px_60px_rgba(49,155,66,0.18)]"
            >
              <p className="relative text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/65">
                Root capability
              </p>

              <h3 className="relative mt-3 text-[1.8rem] font-medium leading-[0.98] tracking-[-0.045em]">
                Experience across the business landscape
              </h3>
            </div>

            {capabilityTree.map((item, index) => (
              <div
                key={item.title}
                data-mobile-tree-card
                className={`flex ${
                  index % 2 === 0
                    ? "justify-start pr-10"
                    : "justify-end pl-10"
                }`}
              >
                <CapabilityCard
                  title={item.title}
                  accent={item.accent}
                />
              </div>
            ))}
          </div>

          {/* ================================================= */}
          {/* DESKTOP TREE */}
          {/* ================================================= */}

          <div className="relative mx-auto hidden min-h-[860px] max-w-[1120px] lg:block">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 1120 860"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="tree-trunk"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#319b42"
                    stopOpacity="0.5"
                  />

                  <stop
                    offset="100%"
                    stopColor="#d8b83e"
                    stopOpacity="0.24"
                  />
                </linearGradient>

                <linearGradient
                  id="tree-green"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#319b42"
                    stopOpacity="0.12"
                  />

                  <stop
                    offset="100%"
                    stopColor="#319b42"
                    stopOpacity="0.34"
                  />
                </linearGradient>

                <linearGradient
                  id="tree-orange"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop
                    offset="0%"
                    stopColor="#dfae2c"
                    stopOpacity="0.34"
                  />

                  <stop
                    offset="100%"
                    stopColor="#dfae2c"
                    stopOpacity="0.12"
                  />
                </linearGradient>
              </defs>

              {/* TRUNK */}
              <path
                data-desktop-tree-path
                d="M560 165 C560 255 560 345 560 435 C560 540 560 650 560 805"
                fill="none"
                stroke="url(#tree-trunk)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* LEFT 1 */}
              <path
                data-desktop-tree-path
                d="M560 240 C525 240 490 240 455 240 C420 240 390 240 350 240"
                fill="none"
                stroke="url(#tree-green)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* RIGHT 1 */}
              <path
                data-desktop-tree-path
                d="M560 315 C595 315 630 315 665 315 C700 315 730 315 770 315"
                fill="none"
                stroke="url(#tree-orange)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* LEFT 2 */}
              <path
                data-desktop-tree-path
                d="M560 390 C525 390 490 390 455 390 C420 390 390 390 350 390"
                fill="none"
                stroke="url(#tree-green)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* RIGHT 2 */}
              <path
                data-desktop-tree-path
                d="M560 465 C595 465 630 465 665 465 C700 465 730 465 770 465"
                fill="none"
                stroke="url(#tree-orange)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* LEFT 3 */}
              <path
                data-desktop-tree-path
                d="M560 540 C525 540 490 540 455 540 C420 540 390 540 350 540"
                fill="none"
                stroke="url(#tree-green)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* RIGHT 3 */}
              <path
                data-desktop-tree-path
                d="M560 615 C595 615 630 615 665 615 C700 615 730 615 770 615"
                fill="none"
                stroke="url(#tree-orange)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* LEFT 4 */}
              <path
                data-desktop-tree-path
                d="M560 690 C525 690 490 690 455 690 C420 690 390 690 350 690"
                fill="none"
                stroke="url(#tree-green)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* RIGHT 4 */}
              <path
                data-desktop-tree-path
                d="M560 765 C595 765 630 765 665 765 C700 765 730 765 770 765"
                fill="none"
                stroke="url(#tree-orange)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {/* ROOT */}
            <div
              data-desktop-tree-root
              className="absolute left-1/2 top-0 z-20 w-[470px] -translate-x-1/2"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-[#79c77a]/55 bg-[linear-gradient(135deg,#268e39_0%,#50ad55_46%,#86c965_72%,#d8ce66_100%)] px-8 py-7 text-center text-white shadow-[0_28px_70px_rgba(49,155,66,0.20)]">
                <div
                  data-root-glow
                  className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#ffe178] opacity-[0.14] blur-[50px]"
                />

                <p className="relative text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-white/66">
                  Root capability
                </p>

                <h3 className="relative mx-auto mt-3 max-w-[14ch] text-[2.1rem] font-medium leading-[0.94] tracking-[-0.055em]">
                  Experience across the business landscape
                </h3>
              </div>

              <span
                data-root-dot
                className="absolute -bottom-[7px] left-1/2 z-30 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-[var(--z-green)]"
              />
            </div>

            {/* ================================================= */}
            {/* CHILD 01 — LEFT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute left-[3%] top-[212px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[0].title}
                accent="green"
              />
            </div>

            <TreeDot top={234} accent="green" />

            {/* ================================================= */}
            {/* CHILD 02 — RIGHT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute right-[3%] top-[287px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[1].title}
                accent="orange"
              />
            </div>

            <TreeDot top={309} accent="orange" />

            {/* ================================================= */}
            {/* CHILD 03 — LEFT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute left-[3%] top-[362px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[2].title}
                accent="green"
              />
            </div>

            <TreeDot top={384} accent="green" />

            {/* ================================================= */}
            {/* CHILD 04 — RIGHT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute right-[3%] top-[437px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[3].title}
                accent="orange"
              />
            </div>

            <TreeDot top={459} accent="orange" />

            {/* ================================================= */}
            {/* CHILD 05 — LEFT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute left-[3%] top-[512px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[4].title}
                accent="green"
              />
            </div>

            <TreeDot top={534} accent="green" />

            {/* ================================================= */}
            {/* CHILD 06 — RIGHT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute right-[3%] top-[587px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[5].title}
                accent="orange"
              />
            </div>

            <TreeDot top={609} accent="orange" />

            {/* ================================================= */}
            {/* CHILD 07 — LEFT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute left-[3%] top-[662px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[6].title}
                accent="green"
              />
            </div>

            <TreeDot top={684} accent="green" />

            {/* ================================================= */}
            {/* CHILD 08 — RIGHT */}
            {/* ================================================= */}

            <div
              data-desktop-tree-card
              className="absolute right-[3%] top-[737px] z-10 w-[320px]"
            >
              <CapabilityCard
                title={capabilityTree[7].title}
                accent="orange"
              />
            </div>

            <TreeDot top={759} accent="orange" />
          </div>
        </div>

        {/* ================================================= */}
        {/* FOOT NAV */}
        {/* ================================================= */}

        <div
          data-about-footer
          className="mt-8 flex flex-col gap-5 border-t border-black/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white/45 text-[0.55rem] font-semibold text-black/40 backdrop-blur-xl">
              01
            </span>

            <span className="text-[0.61rem] uppercase tracking-[0.18em] text-black/30">
              About ZUNOKS
            </span>
          </div>

          <a
            href="/about/our-story"
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-black/[0.08] bg-white/[0.42] p-1.5 pl-5 text-sm font-medium text-black/58 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:border-[var(--z-green)]/20 hover:bg-white/70 hover:text-[var(--z-green)]"
          >
            <span>Continue to our story</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--z-green)] text-white transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </span>
          </a>
        </div>
      </div>

      {/* DECORATIVE EDGE */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--z-green)]/18 to-transparent" />

        <span className="mx-4 flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.07] bg-[#f1f2ed]">
          <ArrowRight
            size={12}
            strokeWidth={1.6}
            className="text-black/25"
          />
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--z-orange)]/18 to-transparent" />
      </div>
    </section>
  );
}

/* ========================================================= */
/* CAPABILITY CHILD CARD */
/* ========================================================= */

function CapabilityCard({
  title,
  accent,
}: {
  title: string;
  accent: "green" | "orange";
}) {
  const isGreen = accent === "green";

  return (
    <div
      className={`group w-full rounded-[1.2rem] border px-5 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.045)] backdrop-blur-[24px] transition-all duration-500 hover:-translate-y-1 ${
        isGreen
          ? "border-[var(--z-green)]/30 bg-[linear-gradient(110deg,rgba(49,155,66,0.10),rgba(255,255,255,0.82))] hover:border-[var(--z-green)]/45 hover:shadow-[0_20px_48px_rgba(49,155,66,0.10)]"
          : "border-[#e8b72f]/38 bg-[linear-gradient(110deg,rgba(246,165,45,0.10),rgba(255,255,255,0.82))] hover:border-[#e8b72f]/52 hover:shadow-[0_20px_48px_rgba(246,165,45,0.10)]"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
            isGreen
              ? "bg-[var(--z-green)]"
              : "bg-[#f28a00]"
          }`}
        />

        <span className="text-[0.94rem] font-medium leading-5 tracking-[-0.02em] text-black/70">
          {title}
        </span>
      </div>
    </div>
  );
}

/* ========================================================= */
/* TREE CONNECTION DOT */
/* ========================================================= */

function TreeDot({
  top,
  accent,
}: {
  top: number;
  accent: "green" | "orange";
}) {
  const isGreen = accent === "green";

  return (
    <span
      data-desktop-tree-dot
      className={`absolute left-1/2 z-20 h-[14px] w-[14px] -translate-x-1/2 rounded-full border-[3px] border-[#f1f2ed] ${
        isGreen
          ? "bg-[#49b966] shadow-[0_0_0_4px_rgba(73,185,102,0.08)]"
          : "bg-[#f6a52d] shadow-[0_0_0_4px_rgba(246,165,45,0.08)]"
      }`}
      style={{
        top,
      }}
    />
  );
}
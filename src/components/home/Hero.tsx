"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    number: "01",
    eyebrow: "ZUNOKS",
    line1: "At ZUNOKS",
    line2: "we inspire",
    accent: "to innovate",
    href: "/about",
    cta: "Discover ZUNOKS",
    image: "/images/hero/hero-strategy.png",
    description:
      "ZUNOKS brings innovative solutions to critical business challenges and maximizes value for its partners.",
  },
  {
    number: "02",
    eyebrow: "Our Approach",
    line1: "Solving problems",
    line2: "with solutions",
    accent: "that work",
    href: "/services",
    cta: "Explore our services",
    image: "/images/hero/hero-operations.png",
    description:
      "We maintain the highest professional standards while being committed to society, openness, diversity and mutual respect.",
  },
  {
    number: "03",
    eyebrow: "Work With ZUNOKS",
    line1: "Let’s work",
    line2: "together to",
    accent: "transcend beyond",
    href: "/contact",
    cta: "Start a conversation",
    image: "/images/hero/hero-vision.png",
    description:
      "Partner with ZUNOKS to move from challenge to action and from ambition to lasting business value.",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const progress = progressRef.current;

    if (!section || !stage || !progress) return;

    const panels = gsap.utils.toArray<HTMLElement>(
      stage.querySelectorAll("[data-hero-panel]"),
    );

    const ctx = gsap.context(() => {
      panels.forEach((panel, index) => {
        const content =
          panel.querySelector<HTMLElement>("[data-panel-content]");

        const background =
          panel.querySelector<HTMLElement>("[data-hero-bg]");

        gsap.set(panel, {
          zIndex: index + 1,
          clipPath:
            index === 0
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 0% 0% 100%)",
        });

        if (content) {
          gsap.set(content, {
            opacity: index === 0 ? 1 : 0,
          });
        }

        if (background) {
          gsap.set(background, {
            scale: index === 0 ? 1.05 : 1.12,
            xPercent: index === 0 ? 0 : 4,
          });
        }
      });

      /*
       * FIRST SLIDE LOAD
       */
      const firstPanel = panels[0];

      if (firstPanel) {
        const firstWords =
          firstPanel.querySelectorAll("[data-word]");

        const firstMeta =
          firstPanel.querySelectorAll("[data-meta]");

        const firstDescription =
          firstPanel.querySelector("[data-description]");

        const firstButton =
          firstPanel.querySelector("[data-cta]");

        const intro = gsap.timeline({
          delay: 0.28,
        });

        intro.fromTo(
          firstMeta,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
          },
        );

        intro.fromTo(
          firstWords,
          {
            yPercent: 115,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.09,
            ease: "power4.out",
          },
          "-=0.38",
        );

        intro.fromTo(
          firstDescription,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        );

        intro.fromTo(
          firstButton,
          {
            opacity: 0,
            y: 16,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.6)",
          },
          "-=0.48",
        );
      }

      /*
       * SCROLL STORY
       */
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",

          /*
           * Longer distance:
           * gives slide 03 time to fully arrive
           * and stay visible before Hero ends.
           */
          end: "+=400%",

          scrub: 1.35,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            gsap.set(progress, {
              scaleX: self.progress,
              transformOrigin: "left center",
            });
          },
        },
      });

      for (let index = 1; index < panels.length; index++) {
        const previousPanel = panels[index - 1];
        const nextPanel = panels[index];

        const previousContent =
          previousPanel.querySelector<HTMLElement>(
            "[data-panel-content]",
          );

        const previousBg =
          previousPanel.querySelector<HTMLElement>(
            "[data-hero-bg]",
          );

        const nextContent =
          nextPanel.querySelector<HTMLElement>(
            "[data-panel-content]",
          );

        const nextBg =
          nextPanel.querySelector<HTMLElement>(
            "[data-hero-bg]",
          );

        const nextWords =
          nextPanel.querySelectorAll("[data-word]");

        const nextMeta =
          nextPanel.querySelectorAll("[data-meta]");

        const nextDescription =
          nextPanel.querySelector("[data-description]");

        const nextButton =
          nextPanel.querySelector("[data-cta]");

        /*
         * CURRENT SLIDE HOLD
         */
        timeline.to({}, { duration: 0.9 });

        /*
         * OLD CONTENT LEAVES
         */
        if (previousContent) {
          timeline.to(previousContent, {
            opacity: 0,
            y: -22,
            scale: 0.992,
            duration: 0.36,
            ease: "power2.inOut",
          });
        }

        /*
         * OLD IMAGE RECEDE
         */
        if (previousBg) {
          timeline.to(
            previousBg,
            {
              scale: 1.09,
              opacity: 0.78,
              duration: 0.7,
              ease: "power2.inOut",
            },
            "<",
          );
        }

        /*
         * NEXT PANEL WIPE
         */
        timeline.fromTo(
          nextPanel,
          {
            clipPath: "inset(0% 0% 0% 100%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.15,
            ease: "expo.inOut",
          },
          "-=0.08",
        );

        /*
         * NEXT IMAGE DEPTH MOTION
         */
        if (nextBg) {
          timeline.fromTo(
            nextBg,
            {
              scale: 1.12,
              xPercent: 4,
            },
            {
              scale: 1.04,
              xPercent: 0,
              duration: 1.35,
              ease: "power3.out",
            },
            "<",
          );
        }

        /*
         * NEXT CONTENT READY
         */
        if (nextContent) {
          timeline.set(
            nextContent,
            {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            "-=0.32",
          );
        }

        timeline.fromTo(
          nextMeta,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power3.out",
          },
        );

        timeline.fromTo(
          nextWords,
          {
            yPercent: 115,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.075,
            ease: "power4.out",
          },
          "-=0.3",
        );

        timeline.fromTo(
          nextDescription,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.4",
        );

        timeline.fromTo(
          nextButton,
          {
            opacity: 0,
            y: 12,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.58,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        );
      }

      /*
       * FINAL 03/03 HOLD
       *
       * This is the important change.
       * Slide 03 stays completely visible
       * before Hero releases.
       */
      timeline.to({}, { duration: 1.9 });

      /*
       * MOUSE PARALLAX
       */
      const handleMouseMove = (
        event: MouseEvent,
      ) => {
        const rect =
          stage.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        panels.forEach((panel) => {
          const bg =
            panel.querySelector<HTMLElement>(
              "[data-hero-bg]",
            );

          if (!bg) return;

          gsap.to(bg, {
            x: x * 12,
            y: y * 8,
            duration: 1.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      const handleMouseLeave = () => {
        panels.forEach((panel) => {
          const bg =
            panel.querySelector<HTMLElement>(
              "[data-hero-bg]",
            );

          if (!bg) return;

          gsap.to(bg, {
            x: 0,
            y: 0,
            duration: 1.8,
            ease: "power4.out",
          });
        });
      };

      stage.addEventListener(
        "mousemove",
        handleMouseMove,
      );

      stage.addEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      return () => {
        stage.removeEventListener(
          "mousemove",
          handleMouseMove,
        );

        stage.removeEventListener(
          "mouseleave",
          handleMouseLeave,
        );
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] bg-black"
    >
      <div
        ref={stageRef}
        className="relative h-[100svh] w-full overflow-hidden bg-black"
      >
        {slides.map((slide, index) => (
          <article
            key={slide.number}
            data-hero-panel
            className="absolute inset-0 overflow-hidden bg-black text-white will-change-[clip-path]"
          >
            {/* BACKGROUND */}
            <div
              data-hero-bg
              className="absolute inset-[-2%] will-change-transform"
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* CINEMATIC OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/54 to-black/8" />

            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/46 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/74 to-transparent" />

            {/* BRAND LIGHT */}
            <div
              className={`absolute inset-0 ${
                index === 1
                  ? "bg-[radial-gradient(circle_at_83%_48%,rgba(239,125,34,0.15),transparent_40%)]"
                  : "bg-[radial-gradient(circle_at_82%_48%,rgba(49,155,66,0.13),transparent_43%)]"
              }`}
            />

            {/* VIGNETTE */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.22)_100%)]" />

            {/* CONTENT */}
            <div
              data-panel-content
              className="relative mx-auto flex h-full w-full max-w-[var(--container-wide)] flex-col px-[var(--page-gutter)] pb-7 pt-[125px]"
            >
              {/* TOP META */}
              <div
                data-meta
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-[2px] w-9 ${
                      index === 1
                        ? "bg-[var(--z-orange)]"
                        : "bg-[var(--z-green)]"
                    }`}
                  />

                  <span className="text-[0.64rem] font-semibold uppercase tracking-[0.23em] text-white/58">
                    {slide.eyebrow}
                  </span>
                </div>

                <span className="text-[0.61rem] font-medium uppercase tracking-[0.22em] text-white/36">
                  {slide.number} / 03
                </span>
              </div>

              {/* HERO TYPOGRAPHY */}
              <div className="flex flex-1 items-center">
                <h1 className="max-w-[1250px] text-[clamp(4rem,8vw,9.1rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                  <span className="block overflow-hidden pb-[0.1em]">
                    <span
                      data-word
                      className="block text-white"
                    >
                      {slide.line1}
                    </span>
                  </span>

                  <span className="block overflow-hidden pb-[0.1em]">
                    <span
                      data-word
                      className="block text-white"
                    >
                      {slide.line2}
                    </span>
                  </span>

                  <span className="block overflow-hidden pb-[0.13em]">
                    <span
                      data-word
                      className={`block font-light tracking-[-0.06em] ${
                        index === 1
                          ? "text-[var(--z-orange)]"
                          : "text-[#75cf68]"
                      }`}
                    >
                      {slide.accent}

                      <span
                        className={
                          index === 1
                            ? "text-[var(--z-green)]"
                            : "text-[var(--z-orange)]"
                        }
                      >
                        .
                      </span>
                    </span>
                  </span>
                </h1>
              </div>

              {/* BOTTOM */}
              <div className="flex flex-col gap-5 border-t border-white/16 pt-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p
                    data-description
                    className="max-w-[35rem] text-[0.92rem] leading-6 text-white/58"
                  >
                    {slide.description}
                  </p>

                  {index === 0 && (
                    <div
                      data-meta
                      className="mt-5 hidden items-center gap-5 lg:flex"
                    >
                      <div className="flex items-end gap-2">
                        <span className="text-[2.2rem] font-medium leading-none tracking-[-0.055em] text-white">
                          120+
                        </span>

                        <span className="max-w-[7rem] text-[0.56rem] uppercase leading-[1.35] tracking-[0.12em] text-white/38">
                          Years Combined Experience
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  data-cta
                  href={slide.href}
                  className="group relative inline-flex w-fit items-center gap-4 rounded-full border border-white/18 bg-white/[0.08] p-1.5 pl-5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-500 hover:border-white/35 hover:bg-white"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    {slide.cta}
                  </span>

                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:bg-[var(--z-green)] group-hover:text-white">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}

        {/* SCROLL */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 z-[20] -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-[0.53rem] uppercase tracking-[0.22em] text-white/46">
              Scroll
            </span>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/10 backdrop-blur-md">
              <ArrowDown
                size={12}
                strokeWidth={1.5}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="absolute inset-x-0 bottom-0 z-[30] h-[2px] bg-white/10">
          <div
            ref={progressRef}
            className="h-full w-full scale-x-0 bg-[var(--z-orange)]"
          />
        </div>
      </div>
    </section>
  );
}

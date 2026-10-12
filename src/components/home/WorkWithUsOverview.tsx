"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Coffee,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cultureItems = [
  {
    icon: Users,
    label: "Open & Collaborative",
    description:
      "Work openly with experienced professionals across disciplines.",
  },
  {
    icon: BriefcaseBusiness,
    label: "Consulting Careers",
    description:
      "Build practical consulting experience around real business challenges.",
  },
  {
    icon: Coffee,
    label: "Learning Culture",
    description:
      "Grow through collaboration, exposure and continuous learning.",
  },
];

export default function WorkWithUsOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const imagePanelRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const shell = shellRef.current;
    const imagePanel = imagePanelRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (
      !section ||
      !shell ||
      !imagePanel ||
      !image ||
      !content
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * MAIN SHELL REVEAL
       */
      gsap.fromTo(
        shell,
        {
          opacity: 0,
          y: 70,
          scale: 0.965,
          filter: "blur(14px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );

      /*
       * IMAGE REVEAL
       */
      gsap.fromTo(
        image,
        {
          scale: 1.12,
          xPercent: -2,
        },
        {
          scale: 1,
          xPercent: 0,
          duration: 1.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: shell,
            start: "top 76%",
          },
        },
      );

      /*
       * QUOTE REVEAL
       */
      gsap.fromTo(
        section.querySelectorAll(
          "[data-quote-reveal]",
        ),
        {
          opacity: 0,
          y: 55,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imagePanel,
            start: "top 72%",
          },
        },
      );

      /*
       * RIGHT SIDE CONTENT
       */
      gsap.fromTo(
        content.querySelectorAll(
          "[data-reveal]",
        ),
        {
          opacity: 0,
          y: 38,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: content,
            start: "top 74%",
          },
        },
      );

      /*
       * CULTURE CARDS
       */
      const cultureCards =
        section.querySelectorAll<HTMLElement>(
          "[data-culture]",
        );

      gsap.fromTo(
        cultureCards,
        {
          opacity: 0,
          y: 30,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.35)",
          scrollTrigger: {
            trigger: "[data-culture-list]",
            start: "top 82%",
          },
        },
      );

      /*
       * BACKGROUND IMAGE PARALLAX ON SCROLL
       */
      gsap.to(image, {
        yPercent: 6,
        scale: 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      /*
       * AMBIENT LIGHTS
       */
      gsap.to(
        "[data-work-glow]",
        {
          scale: 1.16,
          opacity: 0.16,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.5,
        },
      );

      /*
       * FLOATING GLASS ORBS
       */
      gsap.to(
        "[data-floating-orb]",
        {
          y: -12,
          x: 5,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.35,
        },
      );

      /*
       * CULTURE CARD HOVER DEPTH
       */
      cultureCards.forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, {
            y: -7,
            scale: 1.015,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power4.out",
          });
        };

        card.addEventListener(
          "mouseenter",
          handleEnter,
        );

        card.addEventListener(
          "mouseleave",
          handleLeave,
        );

        (
          card as HTMLElement & {
            __workEnter?: () => void;
            __workLeave?: () => void;
          }
        ).__workEnter = handleEnter;

        (
          card as HTMLElement & {
            __workEnter?: () => void;
            __workLeave?: () => void;
          }
        ).__workLeave = handleLeave;
      });

      /*
       * IMAGE MOUSE PARALLAX
       */
      const handleMouseMove = (
        event: MouseEvent,
      ) => {
        const rect =
          imagePanel.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        gsap.to(image, {
          xPercent: x * 2.5,
          yPercent: y * 2.2 + 3,
          scale: 1.065,
          duration: 1,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(image, {
          xPercent: 0,
          yPercent: 3,
          scale: 1.05,
          duration: 1.2,
          ease: "power4.out",
          overwrite: "auto",
        });
      };

      imagePanel.addEventListener(
        "mousemove",
        handleMouseMove,
      );

      imagePanel.addEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      return () => {
        cultureCards.forEach((card) => {
          const typedCard =
            card as HTMLElement & {
              __workEnter?: () => void;
              __workLeave?: () => void;
            };

          if (typedCard.__workEnter) {
            card.removeEventListener(
              "mouseenter",
              typedCard.__workEnter,
            );
          }

          if (typedCard.__workLeave) {
            card.removeEventListener(
              "mouseleave",
              typedCard.__workLeave,
            );
          }
        });

        imagePanel.removeEventListener(
          "mousemove",
          handleMouseMove,
        );

        imagePanel.removeEventListener(
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
      className="relative overflow-hidden bg-[#080b09] py-[clamp(2.5rem,3.4vw,4rem)] text-white"
    >
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <div
          data-work-glow
          className="absolute -left-[12rem] top-[3%] h-[38rem] w-[38rem] rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[170px]"
        />

        <div
          data-work-glow
          className="absolute -bottom-[14rem] right-[4%] h-[34rem] w-[34rem] rounded-full bg-[var(--z-orange)] opacity-[0.07] blur-[160px]"
        />

        <div
          data-floating-orb
          className="absolute right-[8%] top-[14%] h-3 w-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
        />

        <div
          data-floating-orb
          className="absolute bottom-[18%] left-[7%] h-2 w-2 rounded-full bg-[var(--z-orange)] shadow-[0_0_18px_rgba(239,125,34,0.45)]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* OUTER GLASS SHELL */}
        <div
          ref={shellRef}
          className="relative overflow-hidden rounded-[2.8rem] border border-white/[0.14] bg-white/[0.045] shadow-[0_40px_120px_rgba(0,0,0,0.40)] backdrop-blur-[26px]"
        >
          {/* GLASS HIGHLIGHTS */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]" />

          <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* LEFT IMAGE */}
            <div
              ref={imagePanelRef}
              className="relative min-h-[500px] overflow-hidden lg:min-h-[590px]"
            >
              <div
                ref={imageRef}
                className="absolute inset-[-4%] will-change-transform"
              >
                <Image
                  src="/images/hero/hero-vision.png"
                  alt="ZUNOKS work culture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>

              {/* IMAGE OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/30 to-black/12" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/15 to-black/35" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(49,155,66,0.17),transparent_38%)]" />

              {/* SUBTLE GLASS PANEL OVER IMAGE */}
              <div className="absolute inset-x-5 top-5 z-10 rounded-[1.25rem] border border-white/10 bg-black/[0.12] px-4 py-3 backdrop-blur-[14px] md:inset-x-7 md:top-7">
                <div
                  data-quote-reveal
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-[var(--z-orange)]" />

                    <span className="text-[0.61rem] font-semibold uppercase tracking-[0.22em] text-white/52">
                      Work With Us
                    </span>
                  </div>

                  <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.53rem] uppercase tracking-[0.14em] text-white/42 backdrop-blur-xl">
                    Life at ZUNOKS
                  </span>
                </div>
              </div>

              {/* QUOTE */}
              <div className="relative z-10 flex min-h-[500px] items-end p-6 md:p-8 lg:min-h-[590px] lg:p-9">
                <div className="max-w-[760px]">
                  <span
                    data-quote-reveal
                    className="block text-[4.7rem] leading-[0.7] text-[var(--z-green)]/80"
                  >
                    “
                  </span>

                  <h2
                    data-quote-reveal
                    className="mt-3 max-w-[9ch] text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[0.87] tracking-[-0.075em]"
                  >
                    Great things in business are never done
                    by one person
                    <span className="text-[var(--z-orange)]">
                      .
                    </span>
                  </h2>

                  <div
                    data-quote-reveal
                    className="mt-4 flex items-center gap-3"
                  >
                    <span className="h-px w-14 bg-white/28" />

                    <span className="text-[0.58rem] uppercase tracking-[0.17em] text-white/40">
                      Better together
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT GLASS CONTENT */}
            <div
              ref={contentRef}
              className="relative flex min-h-[500px] flex-col justify-between border-t border-white/10 bg-white/[0.055] p-6 backdrop-blur-[32px] md:p-8 lg:min-h-[590px] lg:border-l lg:border-t-0 lg:p-9"
            >
              {/* RIGHT AMBIENT LIGHTS */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--z-green)] opacity-[0.10] blur-[100px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[var(--z-orange)] opacity-[0.08] blur-[95px]" />

              <div className="relative z-10">
                <p
                  data-reveal
                  className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-[#86d979]"
                >
                  Life at ZUNOKS
                </p>

                <h3
                  data-reveal
                  className="mt-3 max-w-[9ch] text-[clamp(2.6rem,3.8vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.065em]"
                >
                  Build your next chapter in consulting
                  <span className="text-[var(--z-orange)]">
                    .
                  </span>
                </h3>

                <p
                  data-reveal
                  className="mt-4 max-w-[34rem] text-[0.96rem] leading-6 text-white/58"
                >
                  ZUNOKS is always on the lookout for
                  talented professionals who want to build
                  themselves as consulting professionals.
                </p>

                <p
                  data-reveal
                  className="mt-3 max-w-[34rem] text-sm leading-6 text-white/40"
                >
                  The firm offers opportunities for young
                  and aspiring talent as well as contingent
                  opportunities for experienced
                  professionals seeking flexible ways to
                  contribute.
                </p>

                {/* CULTURE GLASS CARDS */}
                <div
                  data-culture-list
                  className="mt-5 grid gap-2.5"
                >
                  {cultureItems.map(
                    (item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          data-culture
                          className="group relative overflow-hidden rounded-[1.2rem] border border-white/[0.14] bg-white/[0.065] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] backdrop-blur-[26px] transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.11]"
                        >
                          <div
                            className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-[50px] transition-transform duration-700 group-hover:scale-150 ${
                              index % 2 === 0
                                ? "bg-[var(--z-green)] opacity-[0.13]"
                                : "bg-[var(--z-orange)] opacity-[0.11]"
                            }`}
                          />

                          <div className="relative flex items-center gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 group-hover:rotate-3 group-hover:bg-white/[0.12]">
                              <Icon
                                size={17}
                                strokeWidth={1.6}
                                className="text-[#83d676]"
                              />
                            </span>

                            <div>
                              <p className="text-sm font-medium text-white/78">
                                {item.label}
                              </p>

                              <p className="mt-1 max-w-[25rem] text-[0.68rem] leading-5 text-white/35">
                                {item.description}
                              </p>
                            </div>

                            <span className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/35 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                              <ArrowUpRight
                                size={13}
                                strokeWidth={1.7}
                              />
                            </span>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              {/* CTA */}
              <div
                data-reveal
                className="relative z-10 mt-6 border-t border-white/10 pt-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[24rem] text-xs leading-6 text-white/38">
                    Interested in joining ZUNOKS? Explore
                    opportunities and learn more about life
                    inside the firm.
                  </p>

                  <Link
                    href="/careers"
                    className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full border border-white/20 bg-white/[0.12] p-1.5 pl-5 text-sm font-medium text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-[24px] transition-all duration-500 hover:border-white/40 hover:bg-white hover:text-black"
                  >
                    <span>Explore careers</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--z-orange)] group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                      />
                    </span>
                  </Link>
                </div>
              </div>

              {/* GLASS EDGE */}
              <div className="pointer-events-none absolute bottom-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
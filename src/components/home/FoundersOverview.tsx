"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partners } from "@/data/partners";

gsap.registerPlugin(ScrollTrigger);

const founders = partners.map((partner, id) => ({
  ...partner,
  id,
  tone: partner.accent,
}));

const carouselItems = [
  ...founders,
  ...founders,
];

export default function FoundersOverview() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const carouselRef =
    useRef<HTMLDivElement>(null);

  const trackRef =
    useRef<HTMLDivElement>(null);

  const carouselTweenRef =
    useRef<gsap.core.Tween | null>(
      null,
    );

  const [selectedFounder, setSelectedFounder] =
    useState<number>(0);

  /*
   * SECTION ENTRY
   */
  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll(
          "[data-heading]",
        ),
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.075,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        carouselRef.current,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 84%",
          },
        },
      );

      gsap.to(
        "[data-founder-glow]",
        {
          scale: 1.1,
          opacity: 0.12,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /*
   * CONTINUOUS RIGHT → LEFT CAROUSEL
   */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const buildCarousel = () => {
      carouselTweenRef.current?.kill();

      gsap.set(track, {
        x: 0,
      });

      const items =
        track.querySelectorAll<HTMLElement>(
          "[data-founder-slide]",
        );

      if (items.length < 5) return;

      const firstItem = items[0];
      const duplicateFirstItem = items[4];

      const distance =
        duplicateFirstItem.offsetLeft -
        firstItem.offsetLeft;

      carouselTweenRef.current =
        gsap.to(track, {
          x: -distance,
          duration: 26,
          ease: "none",
          repeat: -1,
        });
    };

    const resizeObserver =
      new ResizeObserver(() => {
        buildCarousel();
      });

    resizeObserver.observe(track);

    buildCarousel();

    return () => {
      carouselTweenRef.current?.kill();
      carouselTweenRef.current =
        null;

      resizeObserver.disconnect();
    };
  }, []);

  /*
   * PAUSE / RESUME
   */
  const pauseCarousel = () => {
    const tween =
      carouselTweenRef.current;

    if (!tween) return;

    gsap.to(tween, {
      timeScale: 0,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const resumeCarousel = () => {
    const tween =
      carouselTweenRef.current;

    if (!tween) return;

    gsap.to(tween, {
      timeScale: 1,
      duration: 0.65,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#090b09] py-[clamp(2rem,2.8vw,3.1rem)] text-white"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:92px_92px]" />

        <div
          data-founder-glow
          className="absolute -right-[10rem] top-[4%] h-[30rem] w-[30rem] rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[150px]"
        />

        <div
          data-founder-glow
          className="absolute -bottom-[12rem] left-[8%] h-[28rem] w-[28rem] rounded-full bg-[var(--z-orange)] opacity-[0.07] blur-[145px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* HEADER */}
        <div className="grid gap-7 border-b border-white/10 pb-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div
              data-heading
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[var(--z-orange)]" />

              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/42">
                Meet the team
              </span>
            </div>

            <h2
              data-heading
              className="mt-4 max-w-[9ch] text-[clamp(3.2rem,5.5vw,6.4rem)] font-medium leading-[0.86] tracking-[-0.075em]"
            >
              Founders of{" "}
              <span className="text-[#79cf6c]">
                ZUNOKS
              </span>
              <span className="text-[var(--z-orange)]">
                .
              </span>
            </h2>
          </div>

          <div
            data-heading
            className="lg:pb-1"
          >
            <p className="max-w-[34rem] text-[clamp(1.1rem,1.65vw,1.55rem)] leading-[1.35] tracking-[-0.025em] text-white/72">
              We are not the Big Four; we are
              just Four here to make a
              difference.
            </p>

            <p className="mt-3 max-w-[36rem] text-sm leading-6 text-white/38">
              Four senior professionals joined
              hands to build a management
              consulting firm founded on
              experience, credibility,
              collaboration and professional
              excellence.
            </p>
          </div>
        </div>

        {/* CAROUSEL VIEWPORT */}
        <div
          ref={carouselRef}
          className="relative mt-6 overflow-hidden py-5"
          onMouseEnter={pauseCarousel}
          onMouseLeave={resumeCarousel}
        >
          {/* MOVING TRACK */}
          <div
            ref={trackRef}
            className="flex gap-4 will-change-transform"
          >
            {carouselItems.map(
              (founder, index) => {
                const isSelected =
                  selectedFounder ===
                  founder.id;

                return (
                  <div
                    key={`${founder.name}-${index}`}
                    data-founder-slide
                    className="
                      shrink-0
                      basis-full
                      sm:basis-[calc((100%-16px)/2)]
                      xl:basis-[calc((100%-48px)/4)]
                    "
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        setSelectedFounder(
                          founder.id,
                        );
                      }}
                      onKeyDown={(event) => {
                        if (
                          event.key ===
                            "Enter" ||
                          event.key === " "
                        ) {
                          setSelectedFounder(
                            founder.id,
                          );
                        }
                      }}
                      className={`group relative h-[485px] cursor-pointer overflow-hidden rounded-[1.75rem] border text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isSelected
                          ? "z-20 scale-[1.035] border-white/30 shadow-[0_28px_80px_rgba(0,0,0,0.38)]"
                          : "z-10 scale-[0.985] border-white/[0.13] shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
                      }`}
                    >
                      {/* PORTRAIT */}
                      <Link
                        href={founder.href}
                        aria-label={`View ${founder.name}`}
                        className="absolute inset-0 z-10 bg-[#111411]"
                      >
                        <Image
                          src={
                            founder.image
                          }
                          alt={
                            founder.name
                          }
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                          priority={
                            index < 4
                          }
                          className="object-cover object-top"
                        />
                      </Link>

                      {/* CINEMATIC OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/8 to-transparent" />

                      <div
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          founder.tone ===
                          "green"
                            ? "bg-[radial-gradient(circle_at_75%_18%,rgba(49,155,66,0.12),transparent_42%)]"
                            : "bg-[radial-gradient(circle_at_75%_18%,rgba(239,125,34,0.12),transparent_42%)]"
                        } ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      />

                      {/* PROFILE LINK */}
                      <Link
                        href={founder.href}
                        aria-label={`View ${founder.name}`}
                        onMouseEnter={
                          pauseCarousel
                        }
                        className={`absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-500 ${
                          isSelected
                            ? "rotate-45 border-white/35 bg-white text-black"
                            : "border-white/20 bg-black/20 text-white"
                        }`}
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                        />
                      </Link>

                      {/* GLASS PANEL */}
                      <div
                        className={`absolute inset-x-3 bottom-3 z-20 rounded-[1.25rem] border p-4 shadow-[0_12px_38px_rgba(0,0,0,0.20)] backdrop-blur-[30px] transition-all duration-700 ${
                          isSelected
                            ? "border-white/30 bg-white/[0.15] -translate-y-1"
                            : "border-white/[0.14] bg-black/[0.30]"
                        }`}
                      >
                        <div
                          className={`mb-3 h-1.5 w-1.5 rounded-full ${
                            founder.tone ===
                            "green"
                              ? "bg-[var(--z-green)] shadow-[0_0_15px_rgba(49,155,66,0.75)]"
                              : "bg-[var(--z-orange)] shadow-[0_0_15px_rgba(239,125,34,0.75)]"
                          }`}
                        />

                        <h3 className="text-[clamp(1.3rem,1.8vw,1.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                          <Link href={founder.href}>
                            {founder.name}
                          </Link>
                        </h3>

                        <div className="mt-3 border-t border-white/12 pt-3">
                          <p className="text-[0.58rem] uppercase leading-5 tracking-[0.12em] text-white/50">
                            {
                              founder.role
                            }
                          </p>
                        </div>
                      </div>

                      {/* ACTIVE EDGE */}
                      <div
                        className={`pointer-events-none absolute inset-x-[18%] top-0 h-px transition-opacity duration-500 ${
                          isSelected
                            ? "opacity-100"
                            : "opacity-0"
                        } ${
                          founder.tone ===
                          "green"
                            ? "bg-gradient-to-r from-transparent via-[var(--z-green)] to-transparent"
                            : "bg-gradient-to-r from-transparent via-[var(--z-orange)] to-transparent"
                        }`}
                      />
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2">
            {founders.map(
              (founder) => (
                <button
                  key={founder.id}
                  type="button"
                  onClick={() =>
                    setSelectedFounder(
                      founder.id,
                    )
                  }
                  aria-label={
                    founder.name
                  }
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    selectedFounder ===
                    founder.id
                      ? "w-10 bg-[var(--z-orange)]"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ),
            )}
          </div>

          <Link
            href="/leadership"
            className="group inline-flex items-center gap-4 rounded-full border border-white/14 bg-white/[0.07] p-1.5 pl-5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-black"
          >
            <span>
              Meet the leadership
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--z-orange)] group-hover:text-white">
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

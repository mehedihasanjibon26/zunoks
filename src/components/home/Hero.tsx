"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const hero = {
  eyebrow: "ZUNOKS",
  line1: "At ZUNOKS",
  line2: "we inspire",
  accent: "to innovate",
  href: "/about",
  cta: "Discover ZUNOKS",
  poster: "/images/hero/hero-strategy.png",
  description:
    "ZUNOKS brings innovative solutions to critical business challenges and maximizes value for its partners.",
} as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (mediaContext) => {
          if (mediaContext.conditions?.motion) {
            gsap
              .timeline({ defaults: { ease: "power4.out" }, delay: 0.2 })
              .fromTo(
                "[data-hero-meta]",
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.06 },
              )
              .fromTo(
                "[data-hero-word]",
                { yPercent: 115, opacity: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.09,
                },
                "-=0.38",
              )
              .fromTo(
                "[data-hero-description]",
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
                "-=0.45",
              )
              .fromTo(
                "[data-hero-cta]",
                { opacity: 0, y: 16, scale: 0.96 },
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
        },
      );
    }, section);

    const handleVisibility = () => {
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    void video?.play().catch(() => undefined);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-black text-white"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={hero.poster}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/home/homepage-hero.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.22)_100%),linear-gradient(to_top,rgba(0,0,0,0.74),transparent_40%),linear-gradient(to_right,rgba(0,0,0,0.92),rgba(0,0,0,0.54)_48%,rgba(0,0,0,0.08))]" />

      <div className="relative mx-auto flex h-full w-full max-w-[var(--container-wide)] flex-col px-[var(--page-gutter)] pb-7 pt-[125px]">
        <div data-hero-meta className="flex items-center">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[var(--z-green)]" />
            <span className="text-[0.64rem] font-semibold uppercase tracking-[0.23em] text-white/58">
              {hero.eyebrow}
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center">
          <h1 className="max-w-[1250px] text-[clamp(4rem,8vw,9.1rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero-word className="block text-white">
                {hero.line1}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero-word className="block text-white">
                {hero.line2}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.13em]">
              <span
                data-hero-word
                className="block font-light tracking-[-0.06em] text-[#75cf68]"
              >
                {hero.accent}
                <span className="text-[var(--z-orange)]">.</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/16 pt-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              data-hero-description
              className="max-w-[35rem] text-[0.92rem] leading-6 text-white/58"
            >
              {hero.description}
            </p>

            <div
              data-hero-meta
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
          </div>

          <Link
            data-hero-cta
            href={hero.href}
            className="group relative inline-flex w-fit items-center gap-4 rounded-full border border-white/18 bg-white/[0.08] p-1.5 pl-5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-500 hover:border-white/35 hover:bg-white"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              {hero.cta}
            </span>
            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:bg-[var(--z-green)] group-hover:text-white">
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-[0.53rem] uppercase tracking-[0.22em] text-white/46">
            Scroll
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/10 backdrop-blur-md">
            <ArrowDown
              size={12}
              strokeWidth={1.5}
              className="animate-bounce"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  FileText,
  Mail,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assetPath } from "@/lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const officeImage = assetPath(
  "/images/careers/career-opportunities-office.png",
);

const opportunityPoints = [
  {
    text: "ZUNOKS employs young and aspiring talents for full-time opportunities.",
    icon: UsersRound,
    accent: "green",
  },
  {
    text: "We also offer contingent opportunities for professionals in career break, maternity leave etc. looking for part-time opportunities.",
    icon: CalendarDays,
    accent: "yellow",
  },
  {
    text: "Explore our services to get an idea of our areas of work, and see where you can add the most value that falls in line with your passion, strength and experience.",
    icon: FileText,
    accent: "green",
  },
] as const;

export default function CareerOpportunitiesExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-opportunities-eyebrow]",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
          )
          .fromTo(
            "[data-opportunities-title-line]",
            { opacity: 0, yPercent: 110, filter: "blur(8px)" },
            {
              opacity: 1,
              yPercent: 0,
              filter: "blur(0px)",
              duration: 0.95,
              stagger: 0.1,
            },
            "-=0.4",
          )
          .fromTo(
            "[data-opportunities-intro]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.06 },
            "-=0.48",
          );

        if (backgroundRef.current) {
          gsap.to(backgroundRef.current, {
            yPercent: 7,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "55% top",
              scrub: 1,
            },
          });
        }

        gsap.to("[data-opportunities-orbit]", {
          rotation: 360,
          duration: 42,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        gsap.fromTo(
          "[data-opportunities-reveal]",
          { opacity: 0, y: 28, filter: "blur(7px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.075,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-opportunities-panel]",
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-opportunities-cta]",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-opportunities-cta]",
              start: "top 86%",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f5f7ef] pb-[clamp(3rem,5vw,5rem)] pt-[7.25rem] text-[#101510] md:pt-[7.75rem]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[920px] overflow-hidden">
        <Image
          ref={backgroundRef}
          src={officeImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[980px] bg-[linear-gradient(180deg,rgba(248,249,243,0.62)_0%,rgba(248,249,243,0.75)_42%,rgba(245,247,239,0.96)_82%,#f5f7ef_100%)]" />

      <div data-opportunities-orbit className="pointer-events-none absolute -left-[12rem] top-[5rem] -z-10 h-[34rem] w-[34rem] rounded-full border border-[#d7af31]/22">
        <span className="absolute right-[9%] top-[22%] h-2 w-2 rounded-full bg-[#e8c84c]" />
      </div>
      <div className="pointer-events-none absolute right-[18%] top-[11rem] -z-10 h-80 w-80 rounded-full border border-[var(--z-green)]/10" />

      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <div data-opportunities-eyebrow className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--z-green)]" />
            <span className="text-[0.61rem] font-semibold uppercase tracking-[0.23em] text-black/56">
              Career Opportunities
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-[#d5ae28] to-transparent" />
          </div>

          <h1 className="mx-auto mt-6 max-w-[17ch] font-serif text-[clamp(3rem,5.5vw,6.15rem)] font-normal leading-[0.9] tracking-[-0.055em]">
            <span className="block overflow-hidden pb-[0.05em]">
              <span data-opportunities-title-line className="block">
                We are always on the lookout
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-opportunities-title-line className="block">
                for the best and the{" "}
                <span className="text-[var(--z-green)]">brightest</span>{" "}
                <span className="text-[#c89513]">talents</span>
                <span className="text-[var(--z-orange)]">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-7 grid w-full max-w-[66rem] gap-4 text-left md:grid-cols-3">
            {opportunityPoints.map((point, index) => (
              <p
                key={point.text}
                data-opportunities-intro
                className={`text-sm leading-6 text-black/54 md:px-5 ${index > 0 ? "md:border-l md:border-black/12" : ""}`}
              >
                {point.text}
              </p>
            ))}
          </div>
        </div>

        <div
          data-opportunities-panel
          className="relative overflow-hidden rounded-[2.4rem] border border-white/75 bg-white/48 p-5 shadow-[0_30px_90px_-45px_rgba(39,71,37,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[32px] md:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(232,200,76,0.11),transparent_28%),radial-gradient(circle_at_92%_82%,rgba(49,155,66,0.11),transparent_28%)]" />
          <div className="relative grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-opportunities-reveal className="lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[var(--z-green)]">
                  Career Opportunities
                </span>
                <span className="h-px w-10 bg-[var(--z-green)]/50" />
              </div>
              <h2 className="mt-5 max-w-[11ch] font-serif text-[clamp(3rem,5vw,5.75rem)] font-normal leading-[0.9] tracking-[-0.055em]">
                We are always on the lookout for the best and the{" "}
                <span className="bg-gradient-to-r from-[var(--z-green)] via-[#78a737] to-[#e7a619] bg-clip-text text-transparent">
                  brightest talents
                </span>
                <span className="text-[var(--z-orange)]">.</span>
              </h2>
            </div>

            <div className="relative border-black/10 lg:border-l lg:pl-10">
              <span className="absolute -left-[5px] top-[18%] hidden h-2.5 w-2.5 rounded-full bg-[var(--z-green)] lg:block" />
              <span className="absolute -left-[5px] top-1/2 hidden h-2.5 w-2.5 rounded-full bg-[#e8b72c] lg:block" />
              <span className="absolute -left-[5px] bottom-[18%] hidden h-2.5 w-2.5 rounded-full bg-[var(--z-green)] lg:block" />

              {opportunityPoints.map((point, index) => {
                const Icon = point.icon;
                const yellow = point.accent === "yellow";

                return (
                  <div
                    key={point.text}
                    data-opportunities-reveal
                    className={`flex items-start gap-5 py-6 ${index > 0 ? "border-t border-black/[0.08]" : ""}`}
                  >
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${yellow ? "bg-[#fff0bd] text-[#d48b10]" : "bg-[#ddf4df] text-[var(--z-green)]"}`}>
                      <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <p className="max-w-[38rem] text-[clamp(0.96rem,1.15vw,1.08rem)] leading-7 text-black/55">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          data-opportunities-cta
          className="relative mt-5 overflow-hidden rounded-[2rem] bg-[#062c1d] px-6 py-7 text-white shadow-[0_25px_70px_-38px_rgba(4,45,27,0.75)] md:px-9 md:py-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_90%,rgba(49,155,66,0.28),transparent_34%),radial-gradient(circle_at_78%_8%,rgba(232,200,76,0.12),transparent_30%)]" />
          <div className="relative grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <span className="hidden h-16 w-16 items-center justify-center rounded-full border border-[#75d983]/20 bg-white/[0.05] text-[#75d983] sm:flex">
              <Mail size={25} strokeWidth={1.4} aria-hidden="true" />
            </span>

            <div>
              <h2 className="font-serif text-[clamp(1.8rem,2.8vw,3rem)] font-normal tracking-[-0.035em]">
                Interested in joining <span className="text-[#72d881]">ZUNOKS?</span>
              </h2>
              <p className="mt-3 max-w-[50rem] text-[clamp(0.95rem,1.15vw,1.08rem)] leading-7 text-white/64">
                Mail your updated CV along with a Cover Letter to{" "}
                <span className="font-medium text-[#72d881]">recruitment@zunoks.com</span>{" "}
                with the subject: <span className="font-medium text-[#e8c84c]">“Work with ZUNOKS”</span>
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-end">
              <a
                href="mailto:recruitment@zunoks.com?subject=Work%20with%20ZUNOKS"
                className="group inline-flex items-center gap-5 rounded-full border border-[#78df87]/40 bg-[var(--z-green)] p-1.5 pl-6 text-sm font-medium text-white shadow-[0_14px_35px_rgba(49,155,66,0.22)] transition-transform duration-500 hover:-translate-y-1"
              >
                Send your application
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--z-green)] transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </a>
              <Link href="/careers/work-with-us" className="group inline-flex items-center gap-2 text-xs text-white/54 transition-colors hover:text-white">
                <ArrowLeft size={13} strokeWidth={1.6} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                Back to Work With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

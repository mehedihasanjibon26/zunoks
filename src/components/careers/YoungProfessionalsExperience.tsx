"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  FileText,
  Globe2,
  Mail,
  MessageSquareText,
  Rocket,
  UserCheck,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "/images/careers/young-professionals-hero.png";
const teamImage = "/images/careers/young-professionals-team.png";

const growthAreas = [
  {
    title: "Real-World Experience",
    description: "Contribute to meaningful work from the beginning.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mentorship & Guidance",
    description: "Learn alongside experienced leaders and specialists.",
    icon: UsersRound,
  },
  {
    title: "Skill Development",
    description: "Build practical consulting and professional capability.",
    icon: BarChart3,
  },
  {
    title: "Impactful Work",
    description: "Bring fresh thinking to varied organizational challenges.",
    icon: Globe2,
  },
] as const;

const journeySteps = [
  {
    number: "01",
    title: "Apply",
    description: "Share your CV and cover letter.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Review",
    description: "Our team reviews your application.",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Interview",
    description: "We discuss your interests and experience.",
    icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Onboard",
    description: "Begin your journey with ZUNOKS.",
    icon: Rocket,
  },
] as const;

export default function YoungProfessionalsExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-young-eyebrow]",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
          )
          .fromTo(
            "[data-young-title-line]",
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
            "[data-young-hero-copy]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
            "-=0.5",
          );

        if (heroImageRef.current) {
          gsap.fromTo(
            heroImageRef.current,
            { scale: 1.06 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-young-hero]",
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }

        gsap.to("[data-young-orbit]", {
          rotation: 360,
          duration: 38,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        const revealGroups = [
          "[data-young-feature]",
          "[data-young-growth]",
          "[data-young-journey]",
          "[data-young-application]",
        ];

        revealGroups.forEach((selector) => {
          const target = section.querySelector(selector);
          if (!target) return;

          gsap.fromTo(
            target.querySelectorAll("[data-young-reveal]"),
            { opacity: 0, y: 28, filter: "blur(7px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.82,
              stagger: 0.075,
              ease: "power3.out",
              scrollTrigger: {
                trigger: target,
                start: "top 84%",
                once: true,
              },
            },
          );
        });
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f8f2_0%,#f4f8ee_48%,#f7f5e8_100%)] pb-[clamp(3rem,5vw,5rem)] pt-[7.25rem] text-[#101510] md:pt-[7.75rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div
          data-young-hero
          className="relative isolate min-h-[420px] overflow-hidden rounded-[2.25rem] border border-white/30 bg-[#061811] px-6 py-10 text-white shadow-[0_30px_90px_-38px_rgba(8,59,31,0.62)] md:px-10 lg:px-14"
        >
          <Image
            ref={heroImageRef}
            src={heroImage}
            alt="Young professional looking toward a bright city horizon"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-[68%_center]"
          />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,20,13,0.96)_0%,rgba(4,33,21,0.84)_36%,rgba(6,29,18,0.36)_66%,rgba(8,15,8,0.05)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/12" />

          <div data-young-orbit className="pointer-events-none absolute -right-[7rem] -top-[15rem] h-[38rem] w-[38rem] rounded-full border border-[#e8c84c]/45">
            <span className="absolute bottom-[16%] left-[4%] h-3 w-3 rounded-full bg-[#e8c84c] shadow-[0_0_22px_rgba(232,200,76,0.65)]" />
          </div>

          <div className="relative z-10 flex min-h-[340px] max-w-[44rem] flex-col justify-center">
            <div data-young-eyebrow className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#e8c84c]" />
              <span className="text-[0.61rem] font-semibold uppercase tracking-[0.23em] text-white/68">
                Careers at ZUNOKS
              </span>
              <span className="h-px w-8 bg-[#73d17b]" />
            </div>

            <h1 className="mt-5 font-serif text-[clamp(3rem,5.5vw,6rem)] font-normal leading-[0.88] tracking-[-0.055em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-young-title-line className="block">
                  A strong start
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-young-title-line className="block text-[#a5e697]">
                  to a bright future<span className="text-[#e8c84c]">.</span>
                </span>
              </span>
            </h1>

            <p data-young-hero-copy className="mt-5 max-w-[38rem] text-[clamp(0.96rem,1.2vw,1.08rem)] leading-7 text-white/70">
              ZUNOKS employs young and aspiring talents for full-time
              opportunities.
            </p>

            <Link
              data-young-hero-copy
              href="/careers/work-with-us"
              className="group mt-6 inline-flex w-fit items-center gap-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-x-1">
                <ArrowLeft size={14} strokeWidth={1.7} aria-hidden="true" />
              </span>
              Back to Work With Us
            </Link>
          </div>
        </div>

        <div
          data-young-feature
          className="relative mt-[clamp(2.75rem,4.5vw,4.5rem)] overflow-hidden rounded-[2rem] border border-[var(--z-green)]/12 bg-white/65 p-5 shadow-[0_24px_70px_-42px_rgba(26,80,38,0.5)] backdrop-blur-2xl md:p-7"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[var(--z-green)]/8 blur-[70px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div data-young-reveal className="px-1 md:px-3 lg:px-5">
              <p className="text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                01 · Young Professionals
              </p>
              <h2 className="mt-4 max-w-[10ch] font-serif text-[clamp(2.6rem,4.6vw,5.2rem)] font-normal leading-[0.9] tracking-[-0.05em]">
                Opportunities for early career{" "}
                <span className="text-[var(--z-green)]">talent</span>
                <span className="text-[#d5ae28]">.</span>
              </h2>
              <p className="mt-5 max-w-[36rem] text-[0.98rem] leading-7 text-black/52">
                We welcome young professionals who are curious, passionate and
                eager to make a difference. Build your skills, explore new
                challenges and grow with us.
              </p>
            </div>

            <div data-young-reveal className="relative min-h-[330px] overflow-hidden rounded-[1.75rem] bg-[#e7eee2]">
              <Image
                src={teamImage}
                alt="Young professionals collaborating around a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
              <div className="absolute -bottom-16 -right-14 h-44 w-44 rounded-full bg-[#e8c84c]/85" />
              <div className="absolute -right-12 top-8 h-28 w-28 rounded-full bg-[var(--z-green)]/85" />
            </div>
          </div>
        </div>

        <div data-young-growth className="py-[clamp(3rem,5vw,5rem)]">
          <div data-young-reveal className="mx-auto max-w-[48rem] text-center">
            <p className="text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
              Life starts with curiosity
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.6rem,4.5vw,4.9rem)] font-normal leading-[0.94] tracking-[-0.045em]">
              Learn. Grow. <span className="text-[var(--z-green)]">Make an impact.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[42rem] text-sm leading-6 text-black/48">
              Start with curiosity, learn from experienced professionals and
              contribute fresh perspectives to meaningful work.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {growthAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  data-young-reveal
                  className="group rounded-[1.6rem] border border-white/75 bg-white/52 p-5 shadow-[0_18px_45px_-34px_rgba(24,70,34,0.45)] backdrop-blur-2xl transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--z-green)]/20"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--z-green)]/[0.08] text-[var(--z-green)] transition-colors duration-400 group-hover:bg-[var(--z-green)] group-hover:text-white">
                    <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-sm font-semibold text-[#172219]">{area.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-black/44">{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div
          data-young-journey
          className="rounded-[2rem] border border-[var(--z-green)]/10 bg-white/48 px-5 py-8 shadow-[0_22px_60px_-42px_rgba(24,70,34,0.45)] backdrop-blur-2xl md:px-8"
        >
          <div data-young-reveal className="text-center">
            <p className="text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">How it works</p>
            <h2 className="mt-3 font-serif text-[clamp(2.3rem,4vw,4.2rem)] font-normal tracking-[-0.045em]">
              Your journey starts here<span className="text-[#d5ae28]">.</span>
            </h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} data-young-reveal className="relative text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--z-green)]/12 bg-[#e7f5e5] text-[var(--z-green)]">
                    <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="mt-3 block font-mono text-[0.54rem] text-[var(--z-green)]/55">{step.number}</span>
                  <h3 className="mt-1 text-sm font-semibold text-[#172219]">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[12rem] text-xs leading-5 text-black/42">{step.description}</p>
                  {index < journeySteps.length - 1 && (
                    <ArrowRight
                      size={14}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="absolute -right-3 top-5 hidden text-[var(--z-green)]/35 md:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          data-young-application
          className="relative mt-[clamp(2.75rem,4.5vw,4.25rem)] overflow-hidden rounded-[2rem] border border-[var(--z-green)]/16 bg-[linear-gradient(110deg,rgba(225,244,215,0.82),rgba(255,255,255,0.82),rgba(250,232,148,0.48))] px-6 py-7 shadow-[0_24px_65px_-38px_rgba(35,70,40,0.42)] md:px-9 md:py-8"
        >
          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div data-young-reveal className="flex items-start gap-5">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--z-green)]/15 bg-white/45 text-[var(--z-green)] sm:flex">
                <Mail size={22} strokeWidth={1.45} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">Interested in joining ZUNOKS?</p>
                <p className="mt-3 max-w-[50rem] font-serif text-[clamp(1.25rem,1.9vw,1.9rem)] leading-[1.3] tracking-[-0.025em] text-black/72">
                  Mail your updated CV along with a Cover Letter to{" "}
                  <span className="font-semibold text-[var(--z-green)]">recruitment@zunoks.com</span>{" "}
                  with the subject: <span className="font-semibold">“Work with ZUNOKS”</span>
                </p>
              </div>
            </div>

            <a
              data-young-reveal
              href="mailto:recruitment@zunoks.com?subject=Work%20with%20ZUNOKS"
              className="group inline-flex w-fit items-center gap-5 rounded-full bg-[var(--z-green)] p-1.5 pl-6 text-sm font-medium text-white shadow-[0_14px_35px_rgba(49,155,66,0.22)] transition-transform duration-500 hover:-translate-y-1"
            >
              Send your application
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--z-green)] transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

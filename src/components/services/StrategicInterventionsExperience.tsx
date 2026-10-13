"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Factory,
  GitMerge,
  Goal,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assetPath } from "@/lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const overview = {
  opening:
    "Strategy drives organizations forward. This is what creates the difference between the Good and the Great. In an environment where change is the only constant, remaining relevant and agile is of utmost importance.",
  experience:
    "ZUNOKS Consulting offers over 120 years of combined experience in strategic interventions and leading change while addressing risks and uncertainties to ensure sustainability across industries. Our focus always has been People, Process and Technology to drive excellence and value addition. We value partnership with our clients to turn challenges into opportunities to innovate and fulfill their strategic objectives.",
  introduction:
    "We provide strategic interventions to our clients in the following areas:",
  contact:
    "Want to take your organization forward? Call us at +880-9678-224-224 or reach out to us at zunoks.consulting@zunoks.com to discuss how we can add value to your organization.",
} as const;

const capabilities = [
  { title: "Business Strategy", icon: Goal },
  { title: "Transformation", icon: Sparkles },
  { title: "Merger & Acquisition", icon: GitMerge },
  { title: "Leadership & Talent Development", icon: UsersRound },
  { title: "Enterprise Performance Management", icon: BarChart3 },
  { title: "Organizational Design and Structure", icon: Network },
  { title: "Manufacturing & Supply Chain Excellence", icon: Factory },
  { title: "Ethics & Compliance", icon: Scale },
  { title: "Risk Management", icon: ShieldCheck },
] as const;

const pillars = ["People", "Process", "Technology"] as const;

export default function StrategicInterventionsExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeCapability, setActiveCapability] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    const visual = visualRef.current;

    if (!section || !hero || !visual) return;

    const media = gsap.matchMedia();

    const ctx = gsap.context(() => {
      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          finePointer: "(hover: hover) and (pointer: fine)",
        },
        (context) => {
          if (!context.conditions?.motion) return;

          const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

          intro
            .fromTo(
              "[data-strategy-eyebrow]",
              { opacity: 0, y: 18, filter: "blur(7px)" },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                delay: 0.1,
              },
            )
            .fromTo(
              "[data-strategy-title-line]",
              { yPercent: 112, rotateX: -16, opacity: 0 },
              {
                yPercent: 0,
                rotateX: 0,
                opacity: 1,
                duration: 1.05,
                stagger: 0.1,
              },
              "-=0.48",
            )
            .fromTo(
              "[data-strategy-copy]",
              { opacity: 0, y: 22 },
              { opacity: 1, y: 0, duration: 0.8 },
              "-=0.55",
            )
            .fromTo(
              visual,
              { opacity: 0, scale: 0.9, rotate: 4 },
              { opacity: 1, scale: 1, rotate: 0, duration: 1.15 },
              "-=0.85",
            );

          gsap.to("[data-strategy-orbit]", {
            rotation: 360,
            duration: 34,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });

          gsap.to("[data-strategy-orbit-reverse]", {
            rotation: -360,
            duration: 46,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });

          gsap.to("[data-strategy-pulse]", {
            scale: 1.12,
            opacity: 0.28,
            duration: 3.4,
            stagger: 0.7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to("[data-strategy-float]", {
            y: (index) => (index % 2 === 0 ? -9 : 8),
            x: (index) => (index % 2 === 0 ? 4 : -4),
            duration: (index) => 3.4 + index * 0.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.18,
            ease: "sine.inOut",
          });

          gsap.fromTo(
            "[data-strategy-scan]",
            { xPercent: -145, opacity: 0 },
            {
              xPercent: 175,
              opacity: 0.3,
              duration: 6,
              repeat: -1,
              repeatDelay: 2.5,
              ease: "power1.inOut",
            },
          );

          gsap.fromTo(
            "[data-strategy-reveal]",
            { opacity: 0, y: 40, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.075,
              ease: "power4.out",
              scrollTrigger: {
                trigger: "[data-strategy-content]",
                start: "top 82%",
                once: true,
              },
            },
          );

          gsap.fromTo(
            "[data-capability-card]",
            { opacity: 0, y: 28, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.055,
              ease: "back.out(1.25)",
              scrollTrigger: {
                trigger: "[data-capability-grid]",
                start: "top 84%",
                once: true,
              },
            },
          );

          if (context.conditions.finePointer) {
            const rotateX = gsap.quickTo(visual, "rotationX", {
              duration: 0.8,
              ease: "power3.out",
            });
            const rotateY = gsap.quickTo(visual, "rotationY", {
              duration: 0.8,
              ease: "power3.out",
            });

            gsap.set(visual, {
              transformPerspective: 1300,
              transformOrigin: "50% 50%",
            });

            const handlePointerMove = (event: PointerEvent) => {
              const bounds = hero.getBoundingClientRect();
              const x = (event.clientX - bounds.left) / bounds.width - 0.5;
              const y = (event.clientY - bounds.top) / bounds.height - 0.5;

              rotateX(-y * 4);
              rotateY(x * 5);
            };

            const reset = () => {
              rotateX(0);
              rotateY(0);
            };

            hero.addEventListener("pointermove", handlePointerMove);
            hero.addEventListener("pointerleave", reset);

            return () => {
              hero.removeEventListener("pointermove", handlePointerMove);
              hero.removeEventListener("pointerleave", reset);
            };
          }
        },
      );
    }, section);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f5ef_0%,#edf2e8_58%,#f4f1df_100%)] pb-[clamp(2.25rem,3.5vw,3.5rem)] pt-[7.25rem] text-black md:pt-[7.75rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div
          ref={heroRef}
          className="relative overflow-hidden rounded-[2.25rem] bg-[#07120d] px-6 py-7 text-white shadow-[0_36px_110px_rgba(5,36,19,0.24)] md:px-9 md:py-8 lg:px-12"
        >
          <div className="absolute inset-0">
            <Image
              src={assetPath("/images/hero/hero-strategy.png")}
              alt="Strategic planning session"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#07120d_0%,rgba(7,24,14,0.94)_42%,rgba(9,35,20,0.72)_68%,rgba(7,18,13,0.82)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(68,181,86,0.20),transparent_36%)]" />
          <div className="pointer-events-none absolute -right-16 bottom-[-6rem] h-80 w-80 rounded-full bg-[#e8c84c]/10 blur-[110px]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:76px_76px]" />
          <div
            data-strategy-scan
            className="pointer-events-none absolute -inset-y-[30%] left-[-16%] w-[24%] rotate-[14deg] bg-gradient-to-r from-transparent via-[#8bdf78]/25 to-transparent blur-2xl"
          />

          <div className="relative z-10 grid items-center gap-5 sm:gap-6 lg:min-h-[410px] lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div data-strategy-eyebrow className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-gradient-to-r from-[var(--z-green)] to-[#e8c84c]" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/48">
                  Strategic Interventions
                </span>
              </div>

              <h1 className="mt-4 font-serif text-[clamp(2.9rem,5.2vw,5.9rem)] font-normal leading-[0.9] tracking-[-0.05em]">
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-strategy-title-line className="block">Strategic</span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-strategy-title-line className="block text-[#80d875]">
                    Interventions<span className="text-[#e8c84c]">.</span>
                  </span>
                </span>
              </h1>

              <p
                data-strategy-copy
                className="mt-4 max-w-[39rem] text-[clamp(0.92rem,1.05vw,1.02rem)] leading-6 text-white/64"
              >
                {overview.opening}
              </p>
            </div>

            <div ref={visualRef} className="relative mx-auto h-[310px] w-full max-w-[520px] sm:h-[340px] lg:h-[380px]">
              <div className="absolute inset-0 scale-[0.74] sm:scale-[0.84] lg:scale-[0.92]">
              <div
                data-strategy-pulse
                className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#80d875]/15"
              />
              <div
                data-strategy-pulse
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />
              <div
                data-strategy-orbit
                className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/14"
              >
                <span className="absolute right-[7%] top-[17%] h-3 w-3 rounded-full bg-[#80d875] shadow-[0_0_24px_rgba(128,216,117,0.65)]" />
                <span className="absolute bottom-[7%] left-[20%] h-2.5 w-2.5 rounded-full bg-[#e8c84c] shadow-[0_0_20px_rgba(232,200,76,0.6)]" />
              </div>
              <div
                data-strategy-orbit-reverse
                className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#80d875]/20"
              >
                <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-white/80" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-white/12 bg-black/35 text-center shadow-[0_20px_60px_rgba(0,0,0,0.30)] backdrop-blur-[24px]">
                  <Landmark size={23} strokeWidth={1.4} className="text-[#80d875]" />
                  <p className="mt-4 text-[2.8rem] font-medium leading-none tracking-[-0.07em]">120+</p>
                  <p className="mt-2 max-w-[8rem] text-[0.54rem] uppercase leading-4 tracking-[0.16em] text-white/38">
                    Years of combined experience
                  </p>
                </div>
              </div>

              {pillars.map((pillar, index) => {
                const positions = [
                  "left-[1%] top-[15%]",
                  "right-[-1%] top-[41%]",
                  "bottom-[10%] left-[7%]",
                ];

                return (
                  <div
                    key={pillar}
                    data-strategy-float
                    className={`absolute ${positions[index]} rounded-2xl border border-white/12 bg-black/30 px-5 py-3.5 shadow-[0_16px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl`}
                  >
                    <span className="flex items-center gap-2 text-xs font-medium text-white/68">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#80d875]" />
                      {pillar}
                    </span>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>

        <div data-strategy-content className="mt-[clamp(2.5rem,4vw,4rem)]">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div data-strategy-reveal className="lg:sticky lg:top-32">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                Strategy & Change
              </p>
              <h2 className="mt-4 max-w-[9ch] font-serif text-[clamp(2.7rem,4.7vw,5.25rem)] font-normal leading-[0.94] tracking-[-0.045em]">
                Turning challenges into opportunities<span className="text-[#d7b93f]">.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p
                data-strategy-reveal
                className="font-serif text-[clamp(1.2rem,1.8vw,1.58rem)] leading-[1.5] tracking-[-0.015em] text-black/68"
              >
                {overview.experience}
              </p>

              <div
                data-strategy-reveal
                className="grid gap-3 border-t border-[var(--z-green)]/15 pt-5 sm:grid-cols-3"
              >
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar}
                    className="relative overflow-hidden rounded-[1.45rem] border border-white/75 bg-white/55 p-5 shadow-[0_18px_46px_-30px_rgba(22,72,34,0.5),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl"
                  >
                    <span className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[var(--z-green)]/10 blur-2xl" />
                    <span className="relative text-[0.55rem] tracking-[0.16em] text-[var(--z-green)]/70">0{index + 1}</span>
                    <p className="relative mt-5 font-serif text-xl font-normal tracking-[-0.025em] text-[#183120]">{pillar}<span className="text-[#d7b93f]">.</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[clamp(2.5rem,3.75vw,3.75rem)]">
            <div className="flex flex-col gap-4 border-b border-[var(--z-green)]/15 pb-5 md:flex-row md:items-end md:justify-between">
              <div data-strategy-reveal>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#ad901f]">
                  Areas of intervention
                </p>
                <h2 className="mt-4 max-w-[11ch] font-serif text-[clamp(2.55rem,4.4vw,4.9rem)] font-normal leading-[0.94] tracking-[-0.045em]">
                  Strategy made executable<span className="text-[var(--z-green)]">.</span>
                </h2>
              </div>
              <p data-strategy-reveal className="max-w-[34rem] text-base leading-7 text-black/48">
                {overview.introduction}
              </p>
            </div>

            <div
              data-capability-grid
              className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3"
            >
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                const active = activeCapability === index;

                return (
                  <button
                    key={capability.title}
                    type="button"
                    data-capability-card
                    onMouseEnter={() => setActiveCapability(index)}
                    onFocus={() => setActiveCapability(index)}
                    onClick={() => setActiveCapability(index)}
                    aria-pressed={active}
                    className={`group relative min-h-[182px] overflow-hidden rounded-[1.75rem] border p-5 text-left backdrop-blur-2xl transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--z-green)] ${
                      active
                        ? "-translate-y-1 border-white/25 bg-[linear-gradient(145deg,rgba(8,34,18,0.95),rgba(20,64,30,0.84))] text-white shadow-[0_24px_60px_-24px_rgba(23,93,42,0.7),inset_0_1px_0_rgba(255,255,255,0.16)]"
                        : "border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(238,245,229,0.5))] text-black shadow-[0_18px_50px_-28px_rgba(22,72,34,0.42),inset_0_1px_0_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:border-[var(--z-green)]/30 hover:bg-white/80"
                    }`}
                  >
                    <div
                      className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-[55px] transition-opacity duration-500 ${
                        active ? "bg-[#e8c84c] opacity-25" : "bg-[var(--z-green)] opacity-10 group-hover:opacity-20"
                      }`}
                    />
                    <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d75b]/80 to-transparent opacity-70" />
                    <div className="relative flex items-start justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 ${
                          active
                            ? "rounded-2xl border-[#e8c84c]/25 bg-white/[0.07] text-[#f0d75b]"
                            : "rounded-2xl border-[var(--z-green)]/15 bg-[var(--z-green)]/[0.07] text-[var(--z-green)]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <span className={`text-[0.56rem] tracking-[0.16em] ${active ? "text-white/30" : "text-black/24"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className={`relative mt-7 max-w-[17rem] font-serif text-[1.22rem] font-normal leading-[1.08] tracking-[-0.025em] ${active ? "text-white/92" : "text-[#183120]"}`}>
                      {capability.title}
                    </p>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className={`absolute bottom-5 right-5 transition-all duration-500 ${
                        active ? "rotate-45 text-[#80d875]" : "text-black/20 group-hover:rotate-45 group-hover:text-[var(--z-green)]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-[0.6rem] leading-5 text-black/28">
            Content sourced from ZUNOKS Consulting’s Strategic Interventions page.
          </p>
        </div>
      </div>
    </section>
  );
}

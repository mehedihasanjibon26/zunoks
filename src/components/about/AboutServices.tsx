"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Compass,
  Factory,
  Layers3,
  Search,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = [
  Compass,
  UsersRound,
  BrainCircuit,
  Factory,
  Search,
  BriefcaseBusiness,
  Layers3,
] as const;

export default function AboutServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-services-eyebrow]",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
          )
          .fromTo(
            "[data-services-title-line]",
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
            "[data-services-copy]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75 },
            "-=0.5",
          );

        gsap.to("[data-services-orbit]", {
          rotation: 360,
          duration: 34,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        gsap.to("[data-services-glow]", {
          xPercent: 16,
          yPercent: -10,
          scale: 1.1,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.fromTo(
          "[data-service-card]",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.075,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-services-grid]",
              start: "top 82%",
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f7f2_0%,#eef3e9_54%,#f6f2df_100%)] pb-[clamp(2.75rem,4.5vw,4.5rem)] pt-[7.25rem] text-[#101510] md:pt-[7.75rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div className="relative isolate overflow-hidden rounded-[2.25rem] bg-[#08140d] px-6 py-8 text-white shadow-[0_30px_95px_-40px_rgba(18,79,32,0.7)] md:px-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(232,200,76,0.17),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(49,155,66,0.23),transparent_34%),linear-gradient(130deg,#07110b_0%,#10251a_58%,#292713_100%)]" />
          <div
            data-services-glow
            className="pointer-events-none absolute left-[28%] top-[5%] -z-10 h-60 w-[48%] rounded-full bg-gradient-to-r from-[var(--z-green)]/16 to-[#e8c84c]/16 blur-[90px]"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] bg-[size:68px_68px]" />

          <div className="relative grid items-center gap-7 lg:min-h-[390px] lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div data-services-eyebrow className="flex items-center gap-3">
                <span className="h-px w-9 bg-gradient-to-r from-[var(--z-green)] to-[#e8c84c]" />
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/50">
                  About ZUNOKS / Services
                </span>
              </div>

              <h1 className="mt-5 max-w-[10ch] font-serif text-[clamp(3rem,5.8vw,6.3rem)] font-normal leading-[0.89] tracking-[-0.055em]">
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-services-title-line className="block">
                    Experience
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-services-title-line className="block text-[#83d779]">
                    into impact<span className="text-[#e8c84c]">.</span>
                  </span>
                </span>
              </h1>

              <p
                data-services-copy
                className="mt-5 max-w-[36rem] text-[clamp(0.96rem,1.2vw,1.08rem)] leading-7 text-white/60"
              >
                ZUNOKS brings strategy, people, leadership, operations and
                technology together to help organizations move forward with
                clarity and confidence.
              </p>
            </div>

            <div className="relative mx-auto h-[300px] w-full max-w-[480px] sm:h-[340px]">
              <div
                data-services-orbit
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 sm:h-[320px] sm:w-[320px]"
              >
                <span className="absolute right-[8%] top-[17%] h-2.5 w-2.5 rounded-full bg-[#e8c84c] shadow-[0_0_20px_rgba(232,200,76,0.6)]" />
                <span className="absolute bottom-[12%] left-[10%] h-2 w-2 rounded-full bg-[#83d779] shadow-[0_0_20px_rgba(131,215,121,0.6)]" />
              </div>
              <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-black/25 text-center shadow-[0_22px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl">
                <Layers3 size={24} strokeWidth={1.35} className="text-[#83d779]" />
                <p className="mt-4 font-serif text-3xl tracking-[-0.045em]">7 areas</p>
                <p className="mt-2 text-[0.55rem] uppercase tracking-[0.17em] text-[#e8c84c]/70">
                  One perspective
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[clamp(2.75rem,4.25vw,4.25rem)]">
          <div className="flex flex-col gap-4 border-b border-[var(--z-green)]/15 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                Our expertise
              </p>
              <h2 className="mt-3 max-w-[12ch] font-serif text-[clamp(2.5rem,4.5vw,4.9rem)] font-normal leading-[0.94] tracking-[-0.045em]">
                Connected capabilities<span className="text-[#d2ae27]">.</span>
              </h2>
            </div>
            <p className="max-w-[31rem] text-sm leading-6 text-black/48">
              Senior-led support designed around the realities of each
              organization and the outcomes it needs to achieve.
            </p>
          </div>

          <div
            data-services-grid
            className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              const featured = index === 0 || index === 6;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  data-service-card
                  className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-[1.8rem] border p-6 opacity-100 backdrop-blur-2xl transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[var(--z-green)]/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--z-green)] ${
                    featured
                      ? "border-white/20 bg-[linear-gradient(145deg,rgba(8,34,18,0.95),rgba(25,68,33,0.86))] text-white shadow-[0_25px_65px_-35px_rgba(22,82,37,0.8),inset_0_1px_0_rgba(255,255,255,0.14)] xl:col-span-2"
                      : "border-white/80 bg-white/55 text-[#142319] shadow-[0_22px_60px_-40px_rgba(22,72,34,0.55),inset_0_1px_0_rgba(255,255,255,0.95)]"
                  }`}
                >
                  <span className="pointer-events-none absolute -right-12 -top-14 h-44 w-44 rounded-full bg-[var(--z-green)]/12 blur-[52px]" />
                  <span className="pointer-events-none absolute -bottom-14 left-[18%] h-36 w-36 rounded-full bg-[#e8c84c]/12 blur-[48px]" />
                  <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#e8c84c]/80 to-transparent" />

                  <div className="relative flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${featured ? "border-[#e8c84c]/20 bg-white/[0.06] text-[#e8c84c]" : "border-[var(--z-green)]/15 bg-[var(--z-green)]/[0.07] text-[var(--z-green)]"}`}>
                      <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <span className={`text-[0.54rem] tracking-[0.16em] ${featured ? "text-white/30" : "text-[var(--z-green)]/55"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-auto pt-8">
                    <p className={`text-[0.57rem] font-semibold uppercase tracking-[0.17em] ${featured ? "text-[#83d779]" : "text-[var(--z-green)]"}`}>
                      {service.eyebrow}
                    </p>
                    <div className="mt-3 flex items-end justify-between gap-5">
                      <h3 className="max-w-[18rem] font-serif text-[1.6rem] font-normal leading-[1.05] tracking-[-0.035em]">
                        {service.title}
                      </h3>
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-500 group-hover:rotate-45 ${featured ? "border-white/15 bg-white/[0.06] text-[#e8c84c]" : "border-black/10 bg-white/50 text-[var(--z-green)]"}`}>
                        <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    </div>
                    <p className={`mt-4 max-w-[38rem] text-sm leading-6 ${featured ? "text-white/48" : "text-black/48"}`}>
                      {service.summary}
                    </p>
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

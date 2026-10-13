"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partners } from "@/data/partners";

gsap.registerPlugin(ScrollTrigger);

const listingRoles = [
  "Founder & Managing Partner",
  "Founder & Partner",
  "Founder & Partner",
  "Founder & Partner",
] as const;

const founders = partners.map((partner, index) => ({
  ...partner,
  role: listingRoles[index] ?? partner.role,
}));

export default function AboutFounders() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-founder-reveal]"),
        {
          opacity: 0,
          y: 32,
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
            once: true,
          },
        },
      );

      gsap.fromTo(
        section.querySelectorAll("[data-founder-card]"),
        {
          opacity: 0,
          y: 36,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 74%",
            once: true,
          },
        },
      );

      gsap.to("[data-founder-glow]", {
        scale: 1.1,
        opacity: 0.13,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.45,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="founders"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3f4ef] py-[clamp(2.75rem,4.5vw,4.5rem)] text-black"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,155,66,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(49,155,66,0.022)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div
          data-founder-glow
          className="absolute -left-[12rem] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[var(--z-green)] opacity-[0.07] blur-[150px]"
        />

        <div
          data-founder-glow
          className="absolute -right-[12rem] bottom-[5%] h-[28rem] w-[28rem] rounded-full bg-[var(--z-orange)] opacity-[0.06] blur-[140px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-founder-reveal>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[var(--z-orange)]" />

              <span className="text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-black/38">
                04 · Founders of ZUNOKS
              </span>
            </div>

            <h2 className="mt-5 max-w-[9ch] text-[clamp(3.2rem,5.8vw,6.2rem)] font-medium leading-[0.87] tracking-[-0.068em]">
              Leadership shaped by{" "}
              <span className="text-[var(--z-green)]">
                experience
              </span>
              <span className="text-[var(--z-orange)]">
                .
              </span>
            </h2>
          </div>

          <div
            data-founder-reveal
            className="lg:pb-2"
          >
            <p className="max-w-[42rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-8 text-black/48">
              ZUNOKS was founded by four senior professionals
              bringing decades of leadership experience across
              industries, functions and geographies.
            </p>
          </div>
        </div>

        {/* FOUNDERS GRID */}
        <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {founders.map((founder, index) => (
            <Link
              key={founder.name}
              href={founder.href}
              data-founder-card
              className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/[0.42] shadow-[0_24px_70px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-[28px]"
            >
              {/* IMAGE */}
              <div className="relative h-[390px] overflow-hidden bg-[#e7e9e2]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-[48px] ${
                    index % 2 === 0
                      ? "bg-[var(--z-green)] opacity-[0.12]"
                      : "bg-[var(--z-orange)] opacity-[0.10]"
                  }`}
                />

                {/* GLASS NUMBER */}
                <div className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/30 bg-white/[0.16] px-3 text-[0.58rem] font-semibold tracking-[0.15em] text-white backdrop-blur-[18px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* HOVER GLASS */}
                <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-[1.35rem] border border-white/[0.18] bg-black/[0.32] p-4 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-[22px] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-white/38">
                        Founder
                      </p>

                      <p className="mt-1 text-sm text-white/72">
                        ZUNOKS Leadership
                      </p>
                    </div>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white">
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="relative p-5">
                <div className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/28 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[var(--z-green)]">
                      {founder.role}
                    </p>

                    <h3 className="mt-2 text-[1.3rem] font-medium leading-tight tracking-[-0.035em] text-black/80">
                      {founder.name}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.07] bg-[#f6f7f2]">
                    <Sparkles
                      size={14}
                      strokeWidth={1.6}
                      className={
                        index % 2 === 0
                          ? "text-[var(--z-green)]"
                          : "text-[var(--z-orange)]"
                      }
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CLOSING NOTE */}
        <div
          data-founder-reveal
          className="mt-9 grid gap-5 rounded-[1.8rem] border border-white/70 bg-white/[0.34] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.045)] backdrop-blur-[26px] md:grid-cols-[1fr_auto] md:items-center md:p-6"
        >
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[var(--z-green)]">
              Inspire to Innovate
            </p>

            <p className="mt-2 max-w-[52rem] text-sm leading-7 text-black/50">
              Four professionals came together with a shared ambition:
              to contribute, collaborate and build a consulting platform
              grounded in experience, credibility and continuous learning.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-black/58 transition-colors duration-300 hover:text-[var(--z-green)]"
          >
            Start a conversation

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--z-green)] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
              />
            </span>
          </a>
        </div>

        {/* FOOTER */}
        <div className="mt-7 flex items-center justify-between border-t border-black/[0.08] pt-5">
          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-black/28">
            04 / Founders of ZUNOKS
          </span>

          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-black/28">
            Leadership · Experience · Partnership
          </span>
        </div>
      </div>
    </section>
  );
}

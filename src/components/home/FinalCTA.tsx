"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.querySelectorAll("[data-reveal]"),
        {
          opacity: 0,
          y: 22,
          filter: "blur(7px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
          },
        },
      );

      gsap.to("[data-cta-glow]", {
        scale: 1.12,
        opacity: 0.22,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07100a] py-[clamp(3.5rem,5vw,5rem)] text-white"
    >
      {/* GRADIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#07100a_0%,#0b1810_42%,#11150a_70%,#171007_100%)]" />

        <div
          data-cta-glow
          className="absolute -left-[7rem] top-[-9rem] h-[24rem] w-[24rem] rounded-full bg-[var(--z-green)] opacity-[0.16] blur-[120px]"
        />

        <div
          data-cta-glow
          className="absolute right-[-5rem] top-[10%] h-[21rem] w-[21rem] rounded-full bg-[#d9c94c] opacity-[0.10] blur-[120px]"
        />

        <div
          data-cta-glow
          className="absolute bottom-[-10rem] right-[14%] h-[20rem] w-[20rem] rounded-full bg-[var(--z-orange)] opacity-[0.10] blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div
        ref={contentRef}
        className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-9 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-[24px] md:px-9 md:py-10">
          {/* INNER GLOW */}
          <div className="pointer-events-none absolute -left-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[70px]" />

          <div className="pointer-events-none absolute right-[8%] top-[-4rem] h-32 w-32 rounded-full bg-[#d9c94c] opacity-[0.07] blur-[70px]" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* LEFT */}
            <div className="max-w-[760px]">
              <div
                data-reveal
                className="flex items-center gap-3"
              >
                <span className="h-[2px] w-8 bg-[var(--z-orange)]" />

                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/42">
                  Start a conversation
                </span>
              </div>

              <h2
                data-reveal
                className="mt-5 text-[clamp(2.6rem,4.6vw,5.1rem)] font-medium leading-[0.92] tracking-[-0.06em]"
              >
                Let&apos;s get your project{" "}
                <span className="text-[#79cf6c]">
                  started
                </span>
                <span className="text-[var(--z-orange)]">
                  .
                </span>
              </h2>

              <p
                data-reveal
                className="mt-4 max-w-[38rem] text-sm leading-6 text-white/42"
              >
                Tell us about the challenge, transformation
                or opportunity you are exploring.
              </p>
            </div>

            {/* CTA */}
            <div
              data-reveal
              className="shrink-0"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full border border-white/16 bg-white/[0.92] p-1.5 pl-5 text-sm font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-500 hover:bg-[var(--z-green)] hover:text-white"
              >
                <span>Contact us</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--z-orange)]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        </div>
      </div>
    </section>
  );
}
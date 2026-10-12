"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 52,
    suffix: "",
    label: "Projects Completed",
    tone: "green",
  },
  {
    value: 29,
    suffix: "",
    label: "Active Clients",
    tone: "orange",
  },
  {
    value: 80,
    suffix: "+",
    label: "Clients Served",
    tone: "green",
  },
];

export default function ClientImpactOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const visual = visualRef.current;

    if (!section || !intro || !visual) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        intro.querySelectorAll("[data-reveal]"),
        {
          opacity: 0,
          y: 30,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.075,
          ease: "power4.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        visual,
        {
          opacity: 0,
          y: 55,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: "expo.out",
          scrollTrigger: {
            trigger: visual,
            start: "top 84%",
          },
        },
      );

      const video =
        visual.querySelector<HTMLVideoElement>("[data-client-video]");

      if (video) {
        gsap.fromTo(
          video,
          {
            scale: 1.07,
          },
          {
            scale: 1.01,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      }

      const cards =
        visual.querySelectorAll<HTMLElement>("[data-stat-card]");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 34,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.35)",
          scrollTrigger: {
            trigger: visual,
            start: "top 66%",
          },
        },
      );

      const counters =
        visual.querySelectorAll<HTMLElement>("[data-counter]");

      counters.forEach((counter) => {
        const target = Number(counter.dataset.target ?? 0);
        const suffix = counter.dataset.suffix ?? "";

        const countObject = {
          value: 0,
        };

        gsap.to(countObject, {
          value: target,
          duration: 1.7,
          ease: "power3.out",

          scrollTrigger: {
            trigger: visual,
            start: "top 68%",
            once: true,
          },

          onUpdate: () => {
            counter.textContent = `${Math.round(
              countObject.value,
            )}${suffix}`;
          },
        });
      });

      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -5 : -7,
          rotation:
            index === 0
              ? -0.25
              : index === 2
                ? 0.25
                : 0,
          duration: 2.8 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.18,
        });
      });

      gsap.to("[data-client-glow]", {
        scale: 1.1,
        opacity: 0.14,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f4ef] py-[clamp(2.5rem,3.3vw,3.75rem)] text-black"
    >
      {/* PAGE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div
          data-client-glow
          className="absolute -right-[10rem] top-[4%] h-[28rem] w-[28rem] rounded-full bg-[var(--z-green)] opacity-[0.06] blur-[140px]"
        />

        <div
          data-client-glow
          className="absolute -bottom-[10rem] left-[7%] h-[26rem] w-[26rem] rounded-full bg-[var(--z-orange)] opacity-[0.05] blur-[135px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* INTRO */}
        <div
          ref={introRef}
          className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end"
        >
          {/* LEFT */}
          <div>
            <div
              data-reveal
              className="flex items-center gap-3"
            >
              <span className="h-[2px] w-9 bg-[var(--z-green)]" />

              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-black/40">
                Client Impact
              </span>
            </div>

            <h2
              data-reveal
              className="mt-4 max-w-[11ch] text-[clamp(3.15rem,5.4vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.07em]"
            >
              We are trusted by more than{" "}
              <span className="text-[var(--z-green)]">
                80 clients
              </span>
              <span className="text-[var(--z-orange)]">.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div
            data-reveal
            className="lg:pb-1"
          >
            <p className="max-w-[38rem] text-[0.96rem] leading-7 text-black/52">
              Currently, we are serving local and multinational clients both
              home and abroad. Our engagements are built around practical
              business impact, transformation and sustainable value creation.
            </p>

            <div className="mt-4 flex items-start gap-3 rounded-[1.1rem] border border-black/[0.08] bg-white/60 p-3.5 backdrop-blur-xl">
              <ShieldCheck
                size={18}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[var(--z-green)]"
              />

              <p className="text-xs leading-5 text-black/45">
                Client identities are treated with confidentiality. ZUNOKS does
                not publicly disclose client names where NDA commitments apply.
              </p>
            </div>
          </div>
        </div>

        {/* VIDEO VISUAL */}
        <div
          ref={visualRef}
          className="relative mt-8 overflow-hidden rounded-[2.3rem] bg-black shadow-[0_30px_85px_rgba(0,0,0,0.14)]"
        >
          <div className="relative min-h-[500px] md:min-h-[540px]">
            {/* VIDEO */}
            <video
              data-client-video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/client-impact/client-impact-bg.mp4"
                type="video/mp4"
              />
            </video>

            {/* DARK OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-black/8" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-black/30" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(49,155,66,0.15),transparent_35%)]" />

            {/* TOP CONTENT */}
            <div className="absolute inset-x-6 top-6 z-20 flex items-start justify-between md:inset-x-8 md:top-8">
              <div>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                  ZUNOKS at a glance
                </p>

                <p className="mt-2 max-w-[26rem] text-sm leading-6 text-white/56">
                  Strategic partnerships built around business outcomes,
                  transformation and measurable impact.
                </p>
              </div>

              <span className="hidden rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[0.56rem] uppercase tracking-[0.16em] text-white/52 backdrop-blur-xl sm:inline-flex">
                Inspire to Innovate
              </span>
            </div>

            {/* FLOATING STATS */}
            <div className="absolute inset-x-5 bottom-5 z-20 grid gap-3 md:inset-x-8 md:bottom-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-stat-card
                  className={`group relative overflow-hidden rounded-[1.2rem] border border-white/18 bg-black/30 px-4 py-3 text-white shadow-[0_14px_36px_rgba(0,0,0,0.2)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.13] ${
                    index === 1
                      ? "md:translate-y-[-8px]"
                      : index === 2
                        ? "md:translate-y-[2px]"
                        : ""
                  }`}
                >
                  {/* GLOW */}
                  <div
                    className={`absolute -right-7 -top-7 h-16 w-16 rounded-full blur-[38px] transition-transform duration-700 group-hover:scale-150 ${
                      stat.tone === "green"
                        ? "bg-[var(--z-green)] opacity-25"
                        : "bg-[var(--z-orange)] opacity-25"
                    }`}
                  />

                  {/* TOP */}
                  <div className="relative flex items-center justify-between">
                    <span className="text-[0.5rem] uppercase tracking-[0.14em] text-white/35">
                      0{index + 1}
                    </span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        stat.tone === "green"
                          ? "bg-[var(--z-green)] shadow-[0_0_14px_rgba(49,155,66,0.7)]"
                          : "bg-[var(--z-orange)] shadow-[0_0_14px_rgba(239,125,34,0.7)]"
                      }`}
                    />
                  </div>

                  {/* COUNT */}
                  <p
                    data-counter
                    data-target={stat.value}
                    data-suffix={stat.suffix}
                    className="relative mt-1.5 text-[clamp(2.7rem,4.2vw,4.4rem)] font-medium leading-[0.92] tracking-[-0.085em]"
                  >
                    0{stat.suffix}
                  </p>

                  {/* LABEL */}
                  <div className="relative mt-2 border-t border-white/15 pt-2">
                    <p className="text-[0.52rem] uppercase tracking-[0.15em] text-white/48">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM EDGE GLOW */}
            <div className="absolute inset-x-[18%] bottom-[-5rem] h-[8rem] rounded-full bg-[var(--z-orange)] opacity-[0.08] blur-[80px]" />
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-6 flex flex-col gap-4 border-t border-black/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[42rem] text-sm leading-6 text-black/42">
            Discover how ZUNOKS supports organizations across industries through
            strategy, people, leadership, operations and transformation.
          </p>

          <Link
            href="/clients"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-black p-1.5 pl-5 text-sm font-medium text-white transition-all duration-500 hover:bg-[var(--z-green)]"
          >
            <span>Learn more</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
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
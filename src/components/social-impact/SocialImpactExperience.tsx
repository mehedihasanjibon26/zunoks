"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  HeartHandshake,
  Leaf,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const commitments = [
  {
    title: "Community & Society",
    description:
      "Contributing responsibly to the communities and society around us means acting with integrity, remaining attentive to wider social needs and considering how professional decisions can support positive, lasting progress.",
    icon: HeartHandshake,
    image: "/images/work-with-us/life-at-zunoks-03.png",
  },
  {
    title: "Sustainable Thinking",
    description:
      "Encouraging responsible, sustainable and long-term business practices helps organizations balance performance with resilience, thoughtful use of resources and consideration for the impact their decisions create over time.",
    icon: Leaf,
    image: "/images/hero/hero-operations.png",
  },
  {
    title: "People & Development",
    description:
      "Supporting professional growth, continuous learning and meaningful opportunities helps people strengthen their confidence and capability while contributing to more resilient organizations and sustainable long-term development.",
    icon: UsersRound,
    image: "/images/work-with-us/life-at-zunoks-04.png",
  },
] as const;

export default function SocialImpactExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-csr-eyebrow]",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
          )
          .fromTo(
            "[data-csr-title]",
            { opacity: 0, y: 34, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
            "-=0.4",
          )
          .fromTo(
            "[data-csr-intro]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75 },
            "-=0.5",
          );

        gsap.fromTo(
          "[data-csr-card]",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-csr-grid]",
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f7f2_0%,#eef3e9_58%,#f6f2df_100%)] pb-[clamp(2.75rem,4.5vw,4.5rem)] pt-[7.25rem] text-[#101510] md:pt-[7.75rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div className="relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[2.25rem] border border-white/70 bg-[#0a0a0a] px-6 py-[clamp(3rem,5vw,4.75rem)] text-center text-white shadow-[0_28px_90px_-35px_rgba(0,0,0,0.48)] md:px-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover"
          >
            <source src="/videos/csr/csr-hero.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.28)_46%,rgba(0,0,0,0.46)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div data-csr-eyebrow className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--z-green)]" />
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/52">
              CSR &amp; Social Impact
            </p>
            <span className="h-px w-8 bg-gradient-to-r from-[#e8c84c] to-transparent" />
          </div>

          <h1
            data-csr-title
            className="mx-auto mt-5 max-w-[12ch] font-serif text-[clamp(3rem,6.5vw,6.6rem)] font-normal leading-[0.9] tracking-[-0.055em]"
          >
            Committed to <span className="text-[#83d779]">society</span>
            <span className="text-[#e8c84c]">.</span>
          </h1>

          <p
            data-csr-intro
            className="mx-auto mt-6 max-w-[44rem] text-[clamp(0.96rem,1.25vw,1.1rem)] leading-7 text-white/60"
          >
            At ZUNOKS, we believe professional excellence should go hand in
            hand with responsibility toward society and sustainable progress.
          </p>
        </div>

        <div className="py-[clamp(2.75rem,4.25vw,4.25rem)]">
          <div className="mx-auto flex flex-col items-center text-center">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
              Our Commitment
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,4vw,4.3rem)] font-normal leading-[0.94] tracking-[-0.045em]">
              Responsibility in practice<span className="text-[#d2ae27]">.</span>
            </h2>
            <p className="mx-auto mt-5 w-full max-w-[68.75rem] text-left text-[0.95rem] leading-[1.6] text-black/50">
              Our commitment to society is reflected in how we think about
              people, progress and long-term impact. We aim to encourage
              responsible choices, meaningful development and sustainable
              value through the way we work, collaborate and contribute to the
              wider community around us.
            </p>
          </div>

          <div data-csr-grid className="mt-6 grid gap-4 md:grid-cols-3">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  data-csr-card
                  className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-black/[0.055] bg-[#fbfcf8] p-3 opacity-100 shadow-[0_18px_45px_-28px_rgba(20,38,24,0.28),inset_0_1px_0_rgba(255,255,255,0.95)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[var(--z-green)]/15 hover:shadow-[0_26px_58px_-30px_rgba(20,45,27,0.36)]"
                >
                  <div className="relative h-[270px] overflow-hidden rounded-[1.55rem] bg-[#e8ebe4]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-black/[0.03]" />
                    <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/80 text-[var(--z-green)] shadow-[0_8px_22px_rgba(0,0,0,0.14)] backdrop-blur-xl">
                      <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="absolute right-4 top-4 rounded-full border border-white/45 bg-black/35 px-2.5 py-1 text-[0.52rem] tracking-[0.16em] text-white/75 backdrop-blur-xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                    <h3 className="text-center text-[1.25rem] font-medium leading-tight tracking-[-0.03em] text-[#172019]">
                      {item.title}
                    </h3>
                    <p className="mt-3 w-full text-left text-[0.92rem] leading-[1.65] text-black/50">
                      {item.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-5">
                      <Link
                        href="/contact"
                        className="group/action inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-[#101310] px-4 text-[0.7rem] font-medium tracking-[0.02em] text-white transition-colors duration-300 hover:bg-[var(--z-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--z-green)]"
                      >
                        Connect
                      </Link>
                      <Link
                        href="/contact"
                        aria-label={`Connect about ${item.title}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[var(--z-green)] shadow-[0_5px_16px_rgba(0,0,0,0.06)] transition-[transform,color,border-color] duration-300 hover:rotate-45 hover:border-[#d2ae27]/30 hover:text-[#b28d0c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--z-green)]"
                      >
                        <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Globe2,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partners } from "@/data/partners";
import { assetPath } from "@/lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const founderPortraitHotspots = [
  {
    partner: partners.find(({ slug }) => slug === "matiul-i-nowshad")!,
    className: "left-[8%] top-[2%] h-[55%] w-[43%]",
  },
  {
    partner: partners.find(({ slug }) => slug === "quazi-m-shahed")!,
    className: "left-[52%] top-0 h-[55%] w-[40%]",
  },
  {
    partner: partners.find(({ slug }) => slug === "saifuddin-m-khaled")!,
    className: "bottom-0 left-0 h-[65%] w-[52%]",
  },
  {
    partner: partners.find(({ slug }) => slug === "zulfikar-hyder")!,
    className: "bottom-0 right-0 h-[66%] w-[48%]",
  },
] as const;

const storyItems = [
  {
    id: "yesterday",
    index: "01",
    title: "Yesterday",
    eyebrow: "Where it began",
    content: [
      "The story of ZUNOKS dates from the mid to late 80s when four aspiring young men started their corporate careers to become professional managers with hope in their hearts that one day they will make a mark in the field of their work.",
      "Q.M. Shahed, Saifuddin Khaled, Matiul I Nowshad, D.S. Zulfikar Hyder worked hard and smart, over the decades, with commitment and passion to build a career of professional excellence while staying hungry to learn always. They were fortunate to work for some great organizations like British American Tobacco, Telenor/Grameenphone, Axiata/Robi, Chevron, Kimberly Clark, Reckitt Benckiser, Al-Razi Bank and BRAC.",
      "They had the privilege to work in different countries in South/South-East Asia, ASEAN, Middle East and The United Kingdom. They gained invaluable first hand exposure to global best practices and learning to appreciate how to work in a cross-cultural environment respecting local norms and culture.",
    ],
  },
  {
    id: "today",
    index: "02",
    title: "Today",
    eyebrow: "Why ZUNOKS exists",
    content: [
      "Wiser by their experience and desire to contribute in developing best practices, processes and people, these four professionals have joined hands together to create a management consulting firm – ZUNOKS to inspire themselves and others to innovate to excel and set professional standards. They want to build and embed a long-term partnership culture within Bangladesh’s consulting landscape.",
      "ZUNOKS wants to position ‘consulting’ as an attractive career for young professionals who would think differently, bring new perspectives. Encourage mid-career movers into consulting to leverage its platform to get exposure into a wider field while matured professionals can offer their professional mastery, utilize their subject matter expertise to help many other organizations in their journey of excellence.",
      "They want to learn and reciprocate from their learning of long years through a casual, yet professional, humble yet respectful approach of mutual learning and contributing.",
    ],
  },
  {
    id: "tomorrow",
    index: "03",
    title: "Tomorrow",
    eyebrow: "Where we are heading",
    content: [
      "Their mission is to initiate, collaborate and help private and public sector enterprises excel to contribute to the national and sustainable development goals. Utilizing their experience gained they want to assist organizations circumvent challenges which present themselves as blocks to a sustained growth trajectory, be it in the industry landscape or within the organizational culture itself.",
      "ZUNOKS shall stand on commitment and credibility to look into the future with confidence and passion to inspire to innovate themselves and the clients they serve!",
    ],
  },
];

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [activeStory, setActiveStory] = useState(0);

  const active = storyItems[activeStory];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-story-reveal]"),
        {
          opacity: 0,
          y: 34,
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
            start: "top 78%",
            once: true,
          },
        },
      );

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current.querySelector("img"),
          {
            scale: 1.08,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        );
      }

      gsap.to("[data-story-glow]", {
        scale: 1.1,
        opacity: 0.14,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const content = document.querySelector(
      "[data-active-story-content]",
    );

    if (!content) return;

    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 20,
        filter: "blur(7px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.65,
        ease: "power4.out",
      },
    );
  }, [activeStory]);

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative scroll-mt-[112px] overflow-hidden bg-[#0a0d0a] py-[clamp(2.75rem,4.5vw,4.5rem)] text-white"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div
          data-story-glow
          className="absolute -left-[12rem] top-[15%] h-[34rem] w-[34rem] rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[150px]"
        />

        <div
          data-story-glow
          className="absolute -right-[10rem] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-[var(--z-orange)] opacity-[0.07] blur-[145px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div data-story-reveal>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[var(--z-orange)]" />

              <span className="text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-white/40">
                02 · The Story of ZUNOKS
              </span>
            </div>

            <h2 className="mt-5 max-w-[8ch] text-[clamp(3.4rem,6vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
              Built from{" "}
              <span className="text-[#79cf6c]">
                experience
              </span>
              <span className="text-[var(--z-orange)]">
                .
              </span>
            </h2>
          </div>

          <div
            data-story-reveal
            className="lg:pb-2"
          >
            <p className="max-w-[42rem] text-[clamp(1rem,1.35vw,1.2rem)] leading-8 text-white/50">
              Four professional journeys, decades of experience,
              and a shared ambition to transform the consulting
              landscape.
            </p>
          </div>
        </div>

        {/* MAIN STORY */}
        <div className="mt-12 grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
          {/* IMAGE */}
          <div
            data-story-reveal
            ref={imageRef}
            className="relative min-h-[500px] overflow-hidden rounded-[2.3rem] border border-white/[0.12] bg-white/[0.04] shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
          >
            <Image
              src={assetPath("/images/about/zunoks-founders-group.png")}
              alt="Founders of ZUNOKS"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />

            {founderPortraitHotspots.map(({ partner, className }) => (
              <Link
                key={partner.slug}
                href={partner.href}
                aria-label={`View ${partner.name}`}
                title={partner.name}
                className={`absolute z-20 ${className}`}
              />
            ))}

            {/* much lighter overlay so image remains visible */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* COMPACT IMAGE CARD */}
            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
              <div className="w-[calc(100vw-5rem)] max-w-[19rem] rounded-[1.25rem] border border-white/[0.16] bg-black/[0.34] p-4 shadow-[0_16px_45px_rgba(0,0,0,0.18)] backdrop-blur-[18px]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.07]">
                    <Sparkles
                      size={13}
                      strokeWidth={1.6}
                      className="text-[#79cf6c]"
                    />
                  </span>

                  <span className="text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-white/42">
                    The Story of ZUNOKS
                  </span>
                </div>

                <p className="mt-3 max-w-[15rem] text-[clamp(1.15rem,1.55vw,1.5rem)] font-medium leading-[1.04] tracking-[-0.04em]">
                  Experience brought together by a shared purpose.
                </p>

                <div className="mt-3 flex items-center gap-2 text-[0.66rem] text-white/34">
                  <Globe2
                    size={12}
                    strokeWidth={1.5}
                  />

                  <span>
                    Bangladesh · Asia · Middle East · UK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STORY PANEL */}
          <div
            data-story-reveal
            className="relative overflow-hidden rounded-[2.3rem] border border-white/[0.12] bg-white/[0.055] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[28px] md:p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--z-green)] opacity-[0.09] blur-[90px]" />

            <div className="relative">
              {/* TABS */}
              <div className="grid grid-cols-3 gap-2 rounded-[1.25rem] border border-white/[0.08] bg-black/20 p-1.5">
                {storyItems.map((item, index) => {
                  const isActive =
                    activeStory === index;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setActiveStory(index)
                      }
                      className={`group relative overflow-hidden rounded-[1rem] px-3 py-3 text-left transition-all duration-500 ${
                        isActive
                          ? "bg-white text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                          : "text-white/45 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <span
                        className={`block text-[0.54rem] font-semibold uppercase tracking-[0.16em] ${
                          isActive
                            ? "text-[var(--z-green)]"
                            : "text-white/28"
                        }`}
                      >
                        {item.index}
                      </span>

                      <span className="mt-1 block text-sm font-medium">
                        {item.title}
                      </span>

                      {isActive && (
                        <span className="absolute bottom-0 left-[18%] right-[18%] h-[2px] bg-gradient-to-r from-[var(--z-green)] to-[var(--z-orange)]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE CONTENT */}
              <div
                key={active.id}
                data-active-story-content
                className="mt-8"
              >
                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#79cf6c]"
                  />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-[#79cf6c]">
                    {active.eyebrow}
                  </span>
                </div>

                <h3 className="mt-4 text-[clamp(2.8rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                  {active.title}
                  <span className="text-[var(--z-orange)]">
                    ,
                  </span>
                </h3>

                <div className="mt-6 space-y-5">
                  {active.content.map(
                    (paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-white/48"
                      >
                        {paragraph}
                      </p>
                    ),
                  )}
                </div>

                {/* BOTTOM PROGRESS */}
                <div className="mt-8 border-t border-white/[0.09] pt-5">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center gap-2">
                      {storyItems.map(
                        (item, index) => (
                          <button
                            key={item.id}
                            type="button"
                            aria-label={`View ${item.title}`}
                            onClick={() =>
                              setActiveStory(index)
                            }
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              activeStory === index
                                ? "w-10 bg-[var(--z-green)]"
                                : "w-4 bg-white/15 hover:bg-white/30"
                            }`}
                          />
                        ),
                      )}
                    </div>

                    {activeStory <
                    storyItems.length - 1 ? (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveStory(
                            (current) =>
                              current + 1,
                          )
                        }
                        className="group inline-flex items-center gap-3 text-sm font-medium text-white/55 transition-colors hover:text-white"
                      >
                        Next chapter

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] transition-all duration-300 group-hover:bg-[var(--z-green)]">
                          <ArrowRight
                            size={13}
                            strokeWidth={1.7}
                          />
                        </span>
                      </button>
                    ) : (
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/28">
                        Story complete
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION NUMBER */}
        <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-white/25">
            02 / The Story of ZUNOKS
          </span>

          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-white/25">
            Yesterday · Today · Tomorrow
          </span>
        </div>
      </div>
    </section>
  );
}

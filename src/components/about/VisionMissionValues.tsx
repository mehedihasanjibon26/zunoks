"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Compass,
  Gem,
  Target,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TabKey =
  | "vision"
  | "mission"
  | "values";

const tabs = [
  {
    id: "vision" as TabKey,
    index: "01",
    title: "Vision",
    icon: Compass,
  },
  {
    id: "mission" as TabKey,
    index: "02",
    title: "Mission",
    icon: Target,
  },
  {
    id: "values" as TabKey,
    index: "03",
    title: "Values",
    icon: Gem,
  },
];

const missionItems = [
  "Offer ‘best in class’ management solutions through strategic partnership, linking executional roadmaps to long-term goals",
  "Unleash the potential of your organization and leaders through transformation and change inculcating operational excellence",
  "Partner with your organization for result achievement in defined parameters",
];

const valueItems = [
  "Collaborate to Succeed",
  "Open & Diverse",
  "Highest Professional Standards",
  "Committed to Society",
  "Stand on Mutual Respect",
];

export default function VisionMissionValues() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const contentRef =
    useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] =
    useState<TabKey>("vision");

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll(
          "[data-vmv-reveal]",
        ),
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
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.to(
        "[data-vmv-glow]",
        {
          scale: 1.1,
          opacity: 0.14,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.45,
        },
      );
    }, section);

    return () =>
      ctx.revert();
  }, []);

  useEffect(() => {
    const content =
      contentRef.current;

    if (!content) return;

    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 18,
        filter: "blur(7px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power4.out",
      },
    );
  }, [activeTab]);

  return (
    <section
      id="vision-mission-values"
      ref={sectionRef}
      className="relative scroll-mt-[112px] overflow-hidden bg-[#eef0e9] pb-[clamp(2.75rem,4.5vw,4.5rem)] pt-[7.25rem] text-black md:pt-[7.75rem]"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,155,66,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(49,155,66,0.025)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div
          data-vmv-glow
          className="absolute -left-[12rem] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[var(--z-green)] opacity-[0.07] blur-[150px]"
        />

        <div
          data-vmv-glow
          className="absolute -right-[12rem] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-[var(--z-orange)] opacity-[0.065] blur-[145px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* CENTERED HEADER */}
        <div
          data-vmv-reveal
          className="mx-auto flex max-w-[820px] flex-col items-center text-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[var(--z-orange)]" />

            <span className="text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-black/38">
              Vision, Mission & Values
            </span>

            <span className="h-[2px] w-8 bg-[var(--z-green)]" />
          </div>

          <h1 className="mt-5 text-[clamp(3.2rem,5.8vw,6.2rem)] font-medium leading-[0.87] tracking-[-0.068em]">
            What guides{" "}
            <span className="text-[var(--z-green)]">
              ZUNOKS
            </span>
            <span className="text-[var(--z-orange)]">
              .
            </span>
          </h1>

          <p className="mt-5 max-w-[42rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-8 text-black/48">
            The principles that define how ZUNOKS
            approaches partnership, transformation and
            professional excellence.
          </p>
        </div>

        {/* MAIN PANEL */}
        <div
          data-vmv-reveal
          className="relative mt-11 overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/[0.38] p-4 shadow-[0_30px_90px_rgba(25,50,30,0.075),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[30px] md:p-5"
        >
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/45 to-transparent" />

          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[var(--z-green)] opacity-[0.07] blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-20 right-[10%] h-52 w-52 rounded-full bg-[var(--z-orange)] opacity-[0.06] blur-[80px]" />

          <div className="relative grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT TAB SELECTOR */}
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => {
                const Icon =
                  tab.icon;

                const isActive =
                  activeTab ===
                  tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        tab.id,
                      )
                    }
                    className={`group relative overflow-hidden rounded-[1.5rem] border p-5 text-left transition-all duration-500 ${
                      isActive
                        ? "border-[var(--z-green)]/22 bg-[rgba(222,241,224,0.7)] shadow-[0_14px_38px_rgba(49,155,66,0.08)]"
                        : "border-black/[0.06] bg-white/[0.34] hover:border-[var(--z-green)]/18 hover:bg-white/[0.52]"
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--z-green)] opacity-[0.06] blur-[45px] transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-[var(--z-green)]/15 bg-white/65 text-[var(--z-green)]"
                            : "border-black/[0.07] bg-white/45 text-black/40"
                        }`}
                      >
                        <Icon
                          size={17}
                          strokeWidth={
                            1.6
                          }
                        />
                      </span>

                      <div>
                        <p className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-black/30">
                          {tab.index}
                        </p>

                        <p className="mt-1 text-[1.1rem] font-medium tracking-[-0.025em]">
                          {tab.title}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <div className="absolute bottom-0 left-[14%] right-[14%] h-[2px] bg-gradient-to-r from-[var(--z-green)] to-[var(--z-orange)]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT ACTIVE CONTENT */}
            <div className="relative min-h-[450px] overflow-hidden rounded-[1.9rem] border border-white/75 bg-white/[0.46] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.045),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-[26px] md:p-8 lg:p-9">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--z-green)] opacity-[0.07] blur-[80px]" />

              <div
                ref={contentRef}
                key={activeTab}
                className="relative flex h-full flex-col"
              >
                {activeTab ===
                  "vision" && (
                  <>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                        Our Vision
                      </p>

                      <h2 className="mt-4 max-w-[12ch] text-[clamp(2.8rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                        Preferred partner for{" "}
                        <span className="text-[var(--z-green)]">
                          sustainable value
                        </span>
                        <span className="text-[var(--z-orange)]">
                          .
                        </span>
                      </h2>

                      <p className="mt-7 max-w-[47rem] text-[clamp(1rem,1.35vw,1.2rem)] leading-8 text-black/58">
                        Our vision is to become the preferred
                        partner in providing value-focused,
                        sustainable management solutions
                        through innovation & agility.
                      </p>
                    </div>

                    <div className="mt-auto pt-10">
                      <div className="grid gap-3 sm:grid-cols-3">
                        {[
                          "Value-focused",
                          "Sustainable",
                          "Innovation & Agility",
                        ].map(
                          (
                            item,
                            index,
                          ) => (
                            <div
                              key={
                                item
                              }
                              className="rounded-[1.2rem] border border-black/[0.065] bg-[#f7f8f3] px-4 py-4"
                            >
                              <span
                                className={`block h-2 w-2 rounded-full ${
                                  index ===
                                  1
                                    ? "bg-[var(--z-orange)]"
                                    : "bg-[var(--z-green)]"
                                }`}
                              />

                              <p className="mt-3 text-sm font-medium text-black/58">
                                {
                                  item
                                }
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </>
                )}

                {activeTab ===
                  "mission" && (
                  <>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                        Our Mission
                      </p>

                      <h2 className="mt-4 max-w-[11ch] text-[clamp(2.8rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                        Turning ambition into{" "}
                        <span className="text-[var(--z-green)]">
                          outcomes
                        </span>
                        <span className="text-[var(--z-orange)]">
                          .
                        </span>
                      </h2>
                    </div>

                    <div className="mt-7">
                      {missionItems.map(
                        (
                          item,
                          index,
                        ) => (
                          <div
                            key={
                              item
                            }
                            className="group flex gap-5 border-t border-black/[0.08] py-5"
                          >
                            <span className="pt-0.5 text-[0.62rem] font-semibold text-[var(--z-green)]">
                              {String(
                                index +
                                  1,
                              ).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <p className="max-w-[48rem] text-sm leading-7 text-black/56">
                              {
                                item
                              }
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </>
                )}

                {activeTab ===
                  "values" && (
                  <>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                        Our Values
                      </p>

                      <h2 className="mt-4 max-w-[10ch] text-[clamp(2.8rem,4.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                        Standards we{" "}
                        <span className="text-[var(--z-green)]">
                          stand by
                        </span>
                        <span className="text-[var(--z-orange)]">
                          .
                        </span>
                      </h2>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {valueItems.map(
                        (
                          value,
                          index,
                        ) => (
                          <div
                            key={
                              value
                            }
                            className={`group relative overflow-hidden rounded-[1.35rem] border border-black/[0.065] bg-[#f7f8f3] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--z-green)]/20 ${
                              index ===
                              valueItems.length -
                                1
                                ? "sm:col-span-2"
                                : ""
                            }`}
                          >
                            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[var(--z-green)] opacity-[0.05] blur-[32px]" />

                            <span
                              className={`block h-2 w-2 rounded-full ${
                                index %
                                  2 ===
                                0
                                  ? "bg-[var(--z-green)]"
                                  : "bg-[var(--z-orange)]"
                              }`}
                            />

                            <p className="mt-4 text-[0.95rem] font-medium uppercase tracking-[0.08em] text-black/64">
                              {
                                value
                              }
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center border-t border-black/[0.08] pt-5">
          <span className="text-[0.6rem] uppercase tracking-[0.18em] text-black/28">
            Vision · Mission · Values
          </span>
        </div>
      </div>
    </section>
  );
}

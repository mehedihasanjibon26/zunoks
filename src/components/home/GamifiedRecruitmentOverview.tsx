"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Brain,
  Check,
  ChevronRight,
  Fingerprint,
  Gauge,
  Pause,
  Play,
  ShieldCheck,
  Target,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const assessmentSignals = [
  {
    label: "Personality",
    value: 86,
    icon: Fingerprint,
    summary: "Collaborative & adaptable",
    detail: "Explores working style and responses to changing situations.",
    color: "#8dcf9d",
  },
  {
    label: "Cognitive Ability",
    value: 92,
    icon: Brain,
    summary: "Strong pattern recognition",
    detail: "Measures reasoning accuracy across increasingly complex tasks.",
    color: "#a7d9b2",
  },
  {
    label: "Aptitude",
    value: 88,
    icon: Target,
    summary: "Consistent problem solving",
    detail: "Observes how effectively new information becomes a solution.",
    color: "#e9ab78",
  },
  {
    label: "Behavior",
    value: 90,
    icon: Activity,
    summary: "Considered decision making",
    detail: "Tracks decision consistency and responses under time pressure.",
    color: "#b7cbbd",
  },
];

const scoreCircumference = 2 * Math.PI * 76;

export default function GamifiedRecruitmentOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const pausedRef = useRef(false);
  const syncPlaybackRef = useRef<() => void>(() => {});

  const [paused, setPaused] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);

  const instanceId = useId();

  useEffect(() => {
    const section = sectionRef.current;
    const copy = copyRef.current;
    const visual = visualRef.current;
    const dashboard = dashboardRef.current;

    if (!section || !copy || !visual || !dashboard) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          finePointer: "(hover: hover) and (pointer: fine)",
        },
        (mediaContext) => {
          if (!mediaContext.conditions?.motion) return;

          const select = gsap.utils.selector(visual);

          const status = visual.querySelector<HTMLElement>(
            "[data-session-status]",
          );

          const activity = visual.querySelector<HTMLElement>(
            "[data-session-activity]",
          );

          const setStatus = (title: string, description: string) => {
            if (status) status.textContent = title;
            if (activity) activity.textContent = description;
          };

          gsap.fromTo(
            copy.querySelectorAll("[data-copy]"),
            {
              opacity: 0,
              y: 38,
              filter: "blur(8px)",
            },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.95,
              stagger: 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: copy,
                start: "top 78%",
                once: true,
              },
            },
          );

          gsap
            .timeline({
              scrollTrigger: {
                trigger: visual,
                start: "top 84%",
                once: true,
              },
            })
            .fromTo(
              visual,
              {
                opacity: 0,
                y: 36,
                scale: 0.985,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              },
            )
            .fromTo(
              select("[data-entrance]"),
              {
                opacity: 0,
                y: 12,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.075,
                ease: "power3.out",
              },
              0.2,
            );

          const ambient = gsap.timeline({
            paused: true,
          });

          ambient
            .to(
              select("[data-orbit]"),
              {
                rotation: 360,
                duration: 42,
                repeat: -1,
                ease: "none",
                svgOrigin: "160 160",
              },
              0,
            )
            .fromTo(
              select("[data-pulse]"),
              {
                scale: 0.96,
                opacity: 0.08,
              },
              {
                scale: 1.08,
                opacity: 0.23,
                duration: 3.8,
                stagger: 1.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                svgOrigin: "160 160",
              },
              0,
            )
            .to(
              select("[data-node]"),
              {
                opacity: 0.35,
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                stagger: 0.45,
                ease: "sine.inOut",
              },
              0,
            )
            .to(
              select("[data-float]"),
              {
                y: -3,
                duration: 4.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              },
              0,
            );

          const analysis = gsap.timeline({
            paused: true,
            onStart: () =>
              setStatus(
                "Analyzing session",
                "Evaluating assessment responses",
              ),
            onComplete: () =>
              setStatus(
                "Analysis complete",
                "32 responses processed successfully",
              ),
          });

          analysis
            .fromTo(
              select("[data-session-progress]"),
              {
                scaleX: 0,
              },
              {
                scaleX: 0.35,
                duration: 1.3,
                ease: "power1.inOut",
              },
              0,
            )
            .to(
              select("[data-session-progress]"),
              {
                scaleX: 0.72,
                duration: 1.8,
                ease: "power1.inOut",
              },
              1.6,
            )
            .to(
              select("[data-session-progress]"),
              {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.out",
              },
              3.8,
            )
            .fromTo(
              select("[data-score-ring]"),
              {
                strokeDashoffset: scoreCircumference,
              },
              {
                strokeDashoffset: scoreCircumference * 0.11,
                duration: 4.6,
                ease: "power2.out",
              },
              0.35,
            )
            .fromTo(
              select("[data-scan]"),
              {
                y: -30,
                opacity: 0,
              },
              {
                opacity: 0.6,
                duration: 0.5,
              },
              0.4,
            )
            .to(
              select("[data-scan]"),
              {
                y: 238,
                duration: 3.6,
                ease: "none",
              },
              0.4,
            )
            .to(
              select("[data-scan]"),
              {
                opacity: 0,
                duration: 0.5,
              },
              3.5,
            );

          visual
            .querySelectorAll<HTMLElement>("[data-count]")
            .forEach((el) => {
              const value = Number(el.dataset.count);

              const counter = {
                value: 0,
              };

              analysis.to(
                counter,
                {
                  value,
                  duration: 3.6,
                  ease: "power2.out",
                  onUpdate: () => {
                    el.textContent = String(Math.round(counter.value));
                  },
                },
                Number(el.dataset.delay ?? 0.4),
              );
            });

          visual
            .querySelectorAll<HTMLElement>("[data-metric-fill]")
            .forEach((el, index) => {
              analysis.fromTo(
                el,
                {
                  scaleX: 0,
                },
                {
                  scaleX: Number(el.dataset.metricFill) / 100,
                  duration: 3.2,
                  ease: "power2.out",
                },
                0.55 + index * 0.15,
              );
            });

          let inView = false;

          const syncPlayback = () => {
            const shouldPlay =
              inView &&
              !document.hidden &&
              !pausedRef.current;

            ambient.paused(!shouldPlay);
            analysis.paused(!shouldPlay);
          };

          syncPlaybackRef.current = syncPlayback;

          const visibilityTrigger = ScrollTrigger.create({
            trigger: visual,
            start: "top 88%",
            end: "bottom 12%",
            onToggle: (self) => {
              inView = self.isActive;
              syncPlayback();
            },
          });

          inView = visibilityTrigger.isActive;
          syncPlayback();

          document.addEventListener(
            "visibilitychange",
            syncPlayback,
          );

          let removePointerListeners = () => {};

          if (mediaContext.conditions.finePointer) {
            const rotateX = gsap.quickTo(
              dashboard,
              "rotationX",
              {
                duration: 0.8,
                ease: "power3.out",
              },
            );

            const rotateY = gsap.quickTo(
              dashboard,
              "rotationY",
              {
                duration: 0.8,
                ease: "power3.out",
              },
            );

            gsap.set(dashboard, {
              transformPerspective: 1400,
              transformOrigin: "50% 50%",
            });

            const resetPointer = () => {
              rotateX(0);
              rotateY(0);
            };

            const movePointer = (
              event: PointerEvent,
            ) => {
              if (
                pausedRef.current ||
                event.pointerType === "touch"
              ) {
                resetPointer();
                return;
              }

              const bounds =
                visual.getBoundingClientRect();

              const x =
                (event.clientX - bounds.left) /
                  bounds.width -
                0.5;

              const y =
                (event.clientY - bounds.top) /
                  bounds.height -
                0.5;

              rotateX(-y * 2.5);
              rotateY(x * 3);
            };

            visual.addEventListener(
              "pointermove",
              movePointer,
            );

            visual.addEventListener(
              "pointerleave",
              resetPointer,
            );

            removePointerListeners = () => {
              visual.removeEventListener(
                "pointermove",
                movePointer,
              );

              visual.removeEventListener(
                "pointerleave",
                resetPointer,
              );
            };
          }

          return () => {
            document.removeEventListener(
              "visibilitychange",
              syncPlayback,
            );

            removePointerListeners();

            syncPlaybackRef.current = () => {};

            setStatus(
              "Analysis complete",
              "32 responses processed successfully",
            );

            visual
              .querySelectorAll<HTMLElement>(
                "[data-count]",
              )
              .forEach((el) => {
                el.textContent =
                  el.dataset.count ?? "";
              });
          };
        },
      );
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  const togglePlayback = () => {
    pausedRef.current =
      !pausedRef.current;

    setPaused(pausedRef.current);

    syncPlaybackRef.current();
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#eef0e9] py-[clamp(2.5rem,3.4vw,4rem)] text-black"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[10rem] top-[5%] h-[34rem] w-[34rem] rounded-full bg-[var(--z-green)] opacity-[0.05] blur-[150px]" />

        <div className="absolute -bottom-[12rem] left-[8%] h-[30rem] w-[30rem] rounded-full bg-[var(--z-orange)] opacity-[0.05] blur-[145px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[var(--container-wide)] gap-10 px-[var(--page-gutter)] lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
        {/* LEFT */}
        <div ref={copyRef}>
          <div
            data-copy
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[var(--z-orange)]" />

            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-black/40">
              Gamified Recruitment
            </span>
          </div>

          <h2
            data-copy
            className="mt-4 max-w-[9ch] text-[clamp(3.3rem,5.5vw,6.4rem)] font-medium leading-[0.86] tracking-[-0.075em]"
          >
            Make talent assessment
            <span className="text-[var(--z-green)]">
              {" "}
              smarter
            </span>
            <span className="text-[var(--z-orange)]">
              .
            </span>
          </h2>

          <p
            data-copy
            className="mt-5 max-w-[35rem] text-[1rem] leading-7 text-black/52"
          >
            ZUNOKS helps organizations upgrade candidate
            experience through AI-driven online gamified
            talent assessments using gamification,
            artificial intelligence and neuroscience-based
            games.
          </p>

          <p
            data-copy
            className="mt-3 max-w-[35rem] text-sm leading-6 text-black/42"
          >
            These assessments are designed to evaluate
            personality, cognitive ability, aptitude and
            behavior while candidates engage with the
            experience.
          </p>

          <div
            data-copy
            className="mt-5"
          >
            <Link
              href="/services/gamified-recruitment"
              className="group inline-flex items-center gap-4 rounded-full bg-black p-1.5 pl-5 text-sm font-medium text-white transition-all duration-500 hover:bg-[var(--z-green)]"
            >
              <span>Take a free demo</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--z-orange)] group-hover:text-white">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                />
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div
          ref={visualRef}
          className="relative min-w-0"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-[3rem] bg-[radial-gradient(ellipse_at_75%_20%,rgba(49,155,66,0.12),transparent_60%)]"
          />

          <div
            ref={dashboardRef}
            className="relative isolate overflow-hidden rounded-[1.6rem] border border-[#354039] bg-[#0c120f] p-3 text-white shadow-[0_28px_70px_-24px_rgba(9,22,13,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] sm:rounded-[1.8rem] sm:p-4 xl:p-4"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_95%_0%,rgba(49,155,66,0.13),transparent_45%),radial-gradient(ellipse_at_0%_95%,rgba(239,125,34,0.06),transparent_40%)]"
            />

            {/* DASHBOARD HEADER */}
            <header
              data-entrance
              className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Gauge
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#9ccea6]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#91a297]">
                    ZUNOKS / Talent intelligence
                  </p>

                  <h3 className="mt-1 text-base font-medium tracking-[-0.025em] sm:text-lg">
                    Candidate Session
                  </h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#8dcf9d]/20 bg-[#8dcf9d]/[0.07] px-3 py-1.5 text-[10px] font-medium text-[#add7b7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--z-green)] shadow-[0_0_8px_rgba(49,155,66,0.35)]" />
                Live Demo
              </span>
            </header>

            {/* CANDIDATE */}
            <div
              data-entrance
              className="flex flex-wrap items-center justify-between gap-3 py-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#202b24] text-[10px] font-medium text-[#bccfc1]">
                  AC
                </span>

                <div>
                  <p className="text-xs text-[#d4ddd7]">
                    Alex Chen
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#8c9c91]">
                    Sample candidate · Strategy associate
                  </p>
                </div>
              </div>

              <span className="font-mono text-[10px] tracking-wide text-[#829389]">
                SESSION / 0248
              </span>
            </div>

            {/* SCORE ENGINE */}
            <div
              data-entrance
              className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#101a14] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(164,195,171,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(164,195,171,0.025)_1px,transparent_1px)] bg-[size:28px_28px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(49,155,66,0.11),transparent_67%)]"
              />

              <div className="relative z-10 flex items-center justify-between gap-2 px-4 pt-3 sm:px-4">
                <span className="flex items-center gap-2 text-[10px] text-[#bccdc1]">
                  <span className="h-1 w-1 rounded-full bg-[#9ccea6]" />

                  <span
                    data-session-status
                    role="status"
                    aria-live="polite"
                  >
                    Analysis complete
                  </span>
                </span>

                <span className="text-[9px] uppercase tracking-[0.16em] text-[#82998a]">
                  Signal engine
                </span>
              </div>

              <div className="relative h-[178px] sm:h-[188px]">
                <div
                  aria-hidden="true"
                  data-scan
                  className="pointer-events-none absolute inset-x-5 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#9ccea6]/50 to-transparent opacity-0 shadow-[0_-10px_24px_3px_rgba(141,207,157,0.06)]"
                />

                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 320"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[196px] w-[196px] max-w-full -translate-x-1/2 -translate-y-1/2"
                  fill="none"
                >
                  <circle
                    cx="160"
                    cy="160"
                    r="127"
                    stroke="#a3bdaa"
                    strokeOpacity="0.08"
                    strokeDasharray="2 9"
                  />

                  <circle
                    data-pulse
                    cx="160"
                    cy="160"
                    r="105"
                    stroke="#8dcf9d"
                    opacity="0.13"
                  />

                  <circle
                    data-pulse
                    cx="160"
                    cy="160"
                    r="114"
                    stroke="#8dcf9d"
                    opacity="0.08"
                  />

                  <g
                    stroke="#8dcf9d"
                    strokeOpacity="0.18"
                  >
                    <path d="M30 90H62L86 116" />
                    <path d="M234 111L257 82H290" />
                    <path d="M30 228H61L85 205" />
                    <path d="M235 208L258 234H290" />
                  </g>

                  {[
                    [30, 90],
                    [290, 82],
                    [30, 228],
                    [290, 234],
                  ].map(([cx, cy], index) => (
                    <g
                      key={index}
                      data-node
                    >
                      <rect
                        x={cx - 4}
                        y={cy - 4}
                        width="8"
                        height="8"
                        rx="2"
                        fill="#14241a"
                        stroke={
                          index === 2
                            ? "#e9ab78"
                            : "#8dcf9d"
                        }
                        strokeOpacity="0.65"
                      />

                      <circle
                        cx={cx}
                        cy={cy}
                        r="1"
                        fill={
                          index === 2
                            ? "#e9ab78"
                            : "#8dcf9d"
                        }
                      />
                    </g>
                  ))}

                  <g data-orbit>
                    <circle
                      cx="160"
                      cy="43"
                      r="3"
                      fill="#8dcf9d"
                    />

                    <circle
                      cx="160"
                      cy="43"
                      r="7"
                      fill="#8dcf9d"
                      fillOpacity="0.08"
                    />

                    <circle
                      cx="261"
                      cy="218"
                      r="2.5"
                      fill="#e9ab78"
                    />

                    <circle
                      cx="59"
                      cy="218"
                      r="2"
                      fill="#8dcf9d"
                    />
                  </g>

                  <circle
                    cx="160"
                    cy="160"
                    r="88"
                    fill="#101a14"
                    stroke="white"
                    strokeOpacity="0.06"
                  />

                  <circle
                    cx="160"
                    cy="160"
                    r="76"
                    stroke="#24372a"
                    strokeWidth="3"
                  />

                  <circle
                    data-score-ring
                    cx="160"
                    cy="160"
                    r="76"
                    stroke="#8dcf9d"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={
                      scoreCircumference
                    }
                    strokeDashoffset={
                      scoreCircumference * 0.11
                    }
                    transform="rotate(-90 160 160)"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    data-float
                    className="text-center"
                  >
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#a0b5a7]">
                      Composite score
                    </p>

                    <p
                      className="mt-2 flex items-baseline justify-center gap-1.5"
                      aria-label="Composite score: 89 out of 100, illustrative"
                    >
                      <span
                        data-count="89"
                        aria-hidden="true"
                        className="text-[44px] font-light leading-none tracking-[-0.065em] text-[#edf5ef] tabular-nums"
                      >
                        89
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-[11px] text-[#8ba492]"
                      >
                        /100
                      </span>
                    </p>

                    <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-[#8dcf9d]/15 bg-[#8dcf9d]/[0.06] px-2 py-1 text-[8px] text-[#b0d2b9]">
                      <Check
                        size={10}
                        aria-hidden="true"
                      />
                      4 dimensions
                    </span>
                  </div>
                </div>
              </div>

              {/* RESPONSE PROGRESS */}
              <div className="relative border-t border-white/[0.06] bg-black/10 px-4 py-2 sm:px-4">
                <div className="mb-2 flex items-center justify-between gap-3 text-[10px]">
                  <span
                    data-session-activity
                    className="text-[#a5b6ab]"
                  >
                    32 responses processed successfully
                  </span>

                  <span
                    className="shrink-0 font-mono text-[#c3d8c9] tabular-nums"
                    aria-label="32 of 32 responses processed"
                  >
                    <span
                      data-count="32"
                      data-delay="0.7"
                      aria-hidden="true"
                    >
                      32
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-[#7e9486]"
                    >
                      {" "}
                      / 32
                    </span>
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="h-[3px] overflow-hidden rounded-full bg-white/[0.07]"
                >
                  <div
                    data-session-progress
                    className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--z-green)] to-[#a4d3ad]"
                  />
                </div>
              </div>
            </div>

            {/* DIMENSIONS TITLE */}
            <div
              data-entrance
              className="mb-2 mt-3 flex items-center justify-between gap-3"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#9daf9f]">
                Assessment dimensions
              </p>

              <span className="text-[9px] text-[#85988b]">
                Select to explore
              </span>
            </div>

            {/* DIMENSIONS */}
            <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
              {assessmentSignals.map(
                (item, index) => {
                  const Icon = item.icon;

                  const selected =
                    selectedMetric === index;

                  const detailId =
                    `${instanceId}-metric-${index}`;

                  return (
                    <div
                      key={item.label}
                      data-entrance
                      className="min-w-0"
                    >
                      <button
                        type="button"
                        aria-pressed={selected}
                        aria-describedby={
                          detailId
                        }
                        onClick={() =>
                          setSelectedMetric(
                            selected
                              ? null
                              : index,
                          )
                        }
                        className={`group relative flex h-full w-full flex-col rounded-2xl border p-2.5 text-left transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#8dcf9d]/30 hover:bg-[#1a2920] hover:shadow-[0_10px_25px_-12px_rgba(0,0,0,0.6)] focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dcf9d] motion-reduce:transform-none motion-reduce:transition-none sm:p-3 ${
                          selected
                            ? "border-[#8dcf9d]/35 bg-[#1a2920]"
                            : "border-white/[0.08] bg-white/[0.025]"
                        }`}
                      >
                        <span className="flex w-full items-center justify-between gap-2">
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025]"
                            style={{
                              color:
                                item.color,
                            }}
                          >
                            <Icon
                              size={16}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </span>

                          <span className="font-mono text-lg font-medium tracking-[-0.06em] text-[#e1eae4] tabular-nums">
                            <span className="sr-only">
                              {item.value} out
                              of 100
                            </span>

                            <span
                              data-count={
                                item.value
                              }
                              data-delay={
                                0.55 +
                                index *
                                  0.15
                              }
                              aria-hidden="true"
                            >
                              {item.value}
                            </span>

                            <span
                              aria-hidden="true"
                              className="ml-0.5 text-[10px] font-normal text-[#82998a]"
                            >
                              /100
                            </span>
                          </span>
                        </span>

                        <span className="mt-2 text-[12px] font-medium tracking-[-0.01em] text-[#d5e1d9]">
                          {item.label}
                        </span>

                        <span className="mt-1 text-[10px] leading-4 text-[#96ac9e]">
                          {item.summary}
                        </span>

                        <span
                          aria-hidden="true"
                          className="relative mt-2 block h-1 w-full overflow-hidden rounded-full bg-white/[0.07]"
                        >
                          <span
                            data-metric-fill={
                              item.value
                            }
                            className="absolute inset-0 origin-left rounded-full"
                            style={{
                              backgroundColor:
                                item.color,
                              transform: `scaleX(${item.value / 100})`,
                            }}
                          />
                        </span>

                        <span
                          id={detailId}
                          className={`mt-1.5 block text-[10px] leading-[1.45] text-[#a8bdb0] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none ${
                            selected
                              ? "opacity-100"
                              : "opacity-70 md:opacity-0"
                          }`}
                        >
                          {item.detail}
                        </span>

                        <ChevronRight
                          size={12}
                          aria-hidden="true"
                          className={`absolute right-3 top-[3.75rem] text-[#a8bdb0] transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none ${
                            selected
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </button>
                    </div>
                  );
                },
              )}
            </div>

            {/* DASHBOARD FOOTER */}
            <footer
              data-entrance
              className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-2.5"
            >
              <div className="flex items-start gap-2">
                <ShieldCheck
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#8ba893]"
                />

                <div>
                  <p className="text-[10px] text-[#a0b5a7]">
                    AI · Gamification · Neuroscience
                  </p>

                  <p className="mt-1 text-[9px] text-[#829589]">
                    Illustrative session. Scores are sample
                    data.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={
                  togglePlayback
                }
                aria-label={
                  paused
                    ? "Resume demo animation"
                    : "Pause demo animation"
                }
                aria-pressed={
                  paused
                }
                className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-white/10 px-2.5 text-[10px] text-[#a9bbae] transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8dcf9d] motion-reduce:hidden"
              >
                {paused ? (
                  <Play
                    size={11}
                    aria-hidden="true"
                  />
                ) : (
                  <Pause
                    size={11}
                    aria-hidden="true"
                  />
                )}

                {paused
                  ? "Resume"
                  : "Pause"}
              </button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
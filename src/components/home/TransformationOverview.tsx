"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    label: "Strategy",
    title: "Strategic Direction",
    description:
      "Turning critical business challenges into clear strategic priorities.",
    image: "/images/hero/hero-strategy.png",
    tone: "green",
  },
  {
    number: "02",
    label: "Leadership",
    title: "People & Leadership",
    description:
      "Building leadership capability and stronger organizations.",
    image: "/images/hero/hero-vision.png",
    tone: "orange",
  },
  {
    number: "03",
    label: "Operations",
    title: "Operational Excellence",
    description:
      "Transforming manufacturing and supply-chain performance.",
    image: "/images/hero/hero-operations.png",
    tone: "green",
  },
] as const;

type CardTone = "green" | "orange";

export default function TransformationOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const stack = stackRef.current;

    if (!section || !content || !stack) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.querySelectorAll("[data-reveal]"),
        {
          opacity: 0,
          y: 40,
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
            trigger: content,
            start: "top 76%",
          },
        },
      );

      gsap.fromTo(
        stack,
        {
          opacity: 0,
          y: 55,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: stack,
            start: "top 82%",
          },
        },
      );

      gsap.to("[data-stack-glow]", {
        scale: 1.12,
        opacity: 0.11,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const getAccentDot = (tone: CardTone) =>
    tone === "green"
      ? "bg-[var(--z-green)]"
      : "bg-[var(--z-orange)]";

  const getToneOverlay = (tone: CardTone) =>
    tone === "green"
      ? "bg-[radial-gradient(circle_at_80%_20%,rgba(49,155,66,0.18),transparent_40%)]"
      : "bg-[radial-gradient(circle_at_80%_20%,rgba(239,125,34,0.18),transparent_40%)]";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f4ef] py-[clamp(2.75rem,4vw,4.25rem)] text-black"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div
          data-stack-glow
          className="absolute -right-[10rem] top-[5%] h-[34rem] w-[34rem] rounded-full bg-[var(--z-green)] opacity-[0.06] blur-[150px]"
        />

        <div
          data-stack-glow
          className="absolute -bottom-[12rem] left-[5%] h-[30rem] w-[30rem] rounded-full bg-[var(--z-orange)] opacity-[0.05] blur-[140px]"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[var(--container-wide)] gap-8 px-[var(--page-gutter)] lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12">
        {/* LEFT CONTENT */}
        <div
          ref={contentRef}
          className="relative z-20"
        >
          <div
            data-reveal
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[var(--z-orange)]" />

            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-black/40">
              We are here to
            </span>
          </div>

          <h2
            data-reveal
            className="mt-7 max-w-[11ch] text-[clamp(3.35rem,5.5vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.07em]"
          >
            Transform the landscape of{" "}
            <span className="text-[var(--z-green)]">consultancy</span>
            <span className="text-[var(--z-orange)]">.</span>
          </h2>

          <div
            data-reveal
            className="mt-7 h-px w-full max-w-[34rem] bg-black/10"
          />

          <p
            data-reveal
            className="mt-7 max-w-[38rem] text-[clamp(1rem,1.2vw,1.15rem)] leading-8 text-black/55"
          >
            At ZUNOKS, we thrive to bring innovative
            solutions addressing critical challenges and
            maximize value for our clients.
          </p>

          <p
            data-reveal
            className="mt-5 max-w-[40rem] text-[0.96rem] leading-8 text-black/45"
          >
            With a combined experience of over 120 years,
            we offer solutions in the areas of setting up
            business, mergers and acquisitions,
            organizational development, executive search,
            corporate governance, human resources,
            transformation & leadership with end-to-end
            support in delivering manufacturing and
            supply-chain excellence.
          </p>

          <div
            data-reveal
            className="mt-8 flex items-center gap-5"
          >
            <div className="text-[clamp(3.4rem,4.5vw,5rem)] font-medium leading-none tracking-[-0.07em]">
              120
              <span className="text-[var(--z-green)]">+</span>
            </div>

            <div className="h-11 w-px bg-black/12" />

            <p className="max-w-[10rem] text-[0.62rem] uppercase leading-5 tracking-[0.15em] text-black/38">
              Years of combined experience
            </p>
          </div>

          <div
            data-reveal
            className="mt-8"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 rounded-full bg-black p-1.5 pl-5 text-sm font-medium text-white transition-all duration-500 hover:bg-[var(--z-green)]"
            >
              <span>Learn more</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--z-orange)] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="relative z-10 flex min-h-[560px] items-center justify-center lg:min-h-[600px]"
          onMouseLeave={() => setActiveIndex(0)}
        >
          <div
            ref={stackRef}
            className="relative h-[540px] w-full max-w-[690px]"
          >
            {/* WHITE PLACEHOLDER */}
            <div className="absolute left-[60%] top-[58%] h-[470px] w-[66%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-black/[0.07] bg-white/80 shadow-[0_28px_75px_rgba(0,0,0,0.055)] backdrop-blur-xl" />

            {/* DECORATIVE ARROW */}
            <div className="absolute left-[84%] top-[25%] z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--z-green)]/25 bg-white/75 text-[var(--z-green)] shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
              />
            </div>

            {/* CARD STACK */}
            <div className="absolute left-[88%] top-[79%] h-[440px] w-[80%] max-w-[520px] -translate-x-1/2 -translate-y-1/2">
              {cards.map((card, index) => {
                const isActive = activeIndex === index;

                const basePositions = [
                  {
                    x: "-4%",
                    y: "12%",
                    rotation: -7,
                    scale: 0.95,
                    z: 20,
                  },
                  {
                    x: "10%",
                    y: "8%",
                    rotation: 6,
                    scale: 0.97,
                    z: 30,
                  },
                  {
                    x: "3%",
                    y: "10%",
                    rotation: -2,
                    scale: 0.99,
                    z: 40,
                  },
                ];

                const activePosition = {
                  x: "4%",
                  y: "15%",
                  rotation: 0,
                  scale: 1.04,
                  z: 60,
                };

                const current = isActive
                  ? activePosition
                  : basePositions[index];

                return (
                  <button
                    key={card.title}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="absolute left-1/2 top-1/2 h-[460px] w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/40 bg-black text-left shadow-[0_38px_90px_rgba(0,0,0,0.23)] transition-[transform,box-shadow] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        translate(${current.x}, ${current.y})
                        rotate(${current.rotation}deg)
                        scale(${current.scale})
                      `,
                      zIndex: current.z,
                    }}
                  >
                    {/* IMAGE */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 90vw, 42vw"
                        className={`object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? "scale-100" : "scale-[1.04]"
                        }`}
                      />
                    </div>

                    {/* OVERLAYS */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/28 to-black/5" />
                    <div
                      className={`absolute inset-0 ${getToneOverlay(card.tone)}`}
                    />

                    {/* TOP */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                      <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-white/55">
                        {card.number}
                      </span>

                      <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.15em] text-white/65 backdrop-blur-xl">
                        {card.label}
                      </span>
                    </div>

                    {/* BOTTOM */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div
                        className={`mb-4 h-2 w-2 rounded-full ${getAccentDot(card.tone)}`}
                      />

                      <h3 className="max-w-[10ch] text-[clamp(2rem,3vw,3.35rem)] font-medium leading-[0.92] tracking-[-0.055em] text-white">
                        {card.title}
                      </h3>

                      <p
                        className={`mt-4 max-w-[28rem] text-sm leading-6 text-white/62 transition-all duration-700 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-3 opacity-0"
                        }`}
                      >
                        {card.description}
                      </p>

                      <div
                        className={`mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.1] text-white backdrop-blur-xl transition-all duration-700 ${
                          isActive
                            ? "translate-y-0 rotate-0 opacity-100"
                            : "translate-y-2 -rotate-45 opacity-60"
                        }`}
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* HOVER HINT */}
            <div className="absolute bottom-[2%] left-[59%] -translate-x-1/2">
              <div className="flex items-center gap-3 rounded-full border border-black/[0.08] bg-white/85 px-4 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--z-orange)]" />

                <span className="text-[0.58rem] uppercase tracking-[0.15em] text-black/38">
                  Hover the cards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

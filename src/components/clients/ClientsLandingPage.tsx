"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  FileText,
  Landmark,
  Layers3,
  LockKeyhole,
  Pill,
  RadioTower,
  Settings,
  Shirt,
  ShoppingCart,
  Trophy,
  UserRoundSearch,
  UsersRound,
  Utensils,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { label: "Food & Beverage", icon: Utensils, tone: "green" },
  { label: "Pharmaceuticals", icon: Pill, tone: "orange" },
  { label: "FMCG", icon: ShoppingCart, tone: "green" },
  { label: "Banks", icon: Landmark, tone: "orange" },
  {
    label: "Financial Institutions",
    icon: ChartNoAxesCombined,
    tone: "orange",
  },
  { label: "Telecommunication", icon: RadioTower, tone: "green" },
  { label: "RMG", icon: Shirt, tone: "orange" },
  { label: "Engineering", icon: Settings, tone: "green" },
] as const;

const experience = [
  { label: "Transformation & Integration", icon: Layers3, tone: "green" },
  { label: "Employee Transition", icon: UsersRound, tone: "orange" },
  { label: "Reward Architecture", icon: Trophy, tone: "green" },
  { label: "Policy Formulation", icon: FileText, tone: "orange" },
  { label: "Operations Transformation", icon: Settings, tone: "orange" },
  { label: "HR Transformation", icon: UsersRound, tone: "green" },
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[var(--z-green)]">
        {children}
      </span>
      <span className="h-px w-7 bg-[var(--z-green)]/55" />
    </div>
  );
}

function IconCard({
  label,
  icon: Icon,
  tone,
  className = "",
}: {
  label: string;
  icon: typeof Utensils;
  tone: "green" | "orange";
  className?: string;
}) {
  const green = tone === "green";

  return (
    <article
      data-card
      className={`group flex min-h-[84px] items-center gap-4 rounded-[1rem] border border-black/[0.065] bg-white/65 px-4 py-3.5 shadow-[0_14px_36px_-28px_rgba(28,58,32,0.26)] transition-[transform,background-color,border-color,box-shadow] duration-400 hover:-translate-y-1 hover:border-[var(--z-green)]/20 hover:bg-white hover:shadow-[0_18px_40px_-25px_rgba(28,58,32,0.3)] ${className}`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-400 group-hover:scale-105 ${
          green
            ? "bg-[#e7f5e7] text-[var(--z-green)]"
            : "bg-[#fff0e5] text-[var(--z-orange)]"
        }`}
      >
        <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <span className="text-[0.84rem] font-medium leading-5 tracking-[-0.02em] text-black/76">
        {label}
      </span>
    </article>
  );
}

export default function ClientsLandingPage() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-hero-copy]",
            { opacity: 0, y: 24, filter: "blur(7px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.85,
              stagger: 0.08,
            },
          )
          .fromTo(
            "[data-hero-visual]",
            { opacity: 0, scale: 1.06, xPercent: 3 },
            { opacity: 1, scale: 1, xPercent: 0, duration: 1.2 },
            0.08,
          );

        gsap.to("[data-hero-visual] img", {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to("[data-orbit]", {
          rotation: 360,
          duration: 42,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          const revealItems = section.querySelectorAll("[data-reveal]");
          const cards = section.querySelectorAll("[data-card]");

          gsap.fromTo(
            revealItems,
            { opacity: 0, y: 24, filter: "blur(6px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.85,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 84%",
                once: true,
              },
            },
          );

          if (cards.length) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 20, scale: 0.985 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                stagger: 0.055,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: cards[0],
                  start: "top 88%",
                  once: true,
                },
              },
            );
          }
        });
      });
    }, page);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={pageRef}
      className="relative overflow-hidden bg-[#f8f8f4] pb-[clamp(2.5rem,4vw,4rem)] pt-[6.5rem] text-[#121512] md:pt-[7.15rem]"
    >
      <div
        data-hero
        className="relative mx-auto grid min-h-[410px] w-full max-w-[var(--container-wide)] overflow-hidden rounded-b-[1.8rem] bg-[#f7f7f3] lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="relative z-10 flex flex-col justify-center px-[var(--page-gutter)] py-12 lg:py-14 lg:pr-8">
          <div data-hero-copy>
            <Eyebrow>Our Clients</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-[12ch] font-serif text-[clamp(3rem,5.2vw,5.25rem)] leading-[0.91] tracking-[-0.045em]">
            <span data-hero-copy className="block">
              Partnering with
            </span>
            <span data-hero-copy className="block text-[var(--z-green)]">
              forward-thinking
            </span>
            <span data-hero-copy className="block text-[var(--z-orange)]">
              organisations<span className="text-[var(--z-green)]">.</span>
            </span>
          </h1>
          <p
            data-hero-copy
            className="mt-5 max-w-[36rem] text-[0.9rem] leading-6 text-black/50"
          >
            We work with leading organisations across diverse industries,
            helping them solve complex people and business challenges and build
            stronger, more resilient futures.
          </p>
        </div>

        <div
          data-hero-visual
          className="relative min-h-[330px] overflow-hidden rounded-tl-[14rem] lg:min-h-full"
        >
          <Image
            src="/images/careers/career-opportunities-office.png"
            alt="Contemporary executive office overlooking a city skyline"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 54vw"
            className="scale-[1.08] object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f7f7f3]/28 via-transparent to-transparent" />
          <div
            data-orbit
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-[#d6ad2a]/55"
          >
            <span className="absolute right-[5%] top-[17%] h-2.5 w-2.5 rounded-full bg-[var(--z-orange)] shadow-[0_0_16px_rgba(239,125,34,0.5)]" />
            <span className="absolute bottom-[7%] left-[24%] h-2 w-2 rounded-full bg-[var(--z-green)]" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <section
          data-section
          className="border-b border-black/[0.065] py-[clamp(3.25rem,5vw,5rem)]"
        >
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
            <div data-reveal>
              <Eyebrow>Industries We Serve</Eyebrow>
              <h2 className="mt-4 max-w-[14ch] font-serif text-[clamp(2.5rem,4vw,4.2rem)] leading-[0.94] tracking-[-0.04em]">
                Equipped to serve across{" "}
                <span className="text-[var(--z-orange)]">key industries.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-[43rem] text-[0.92rem] leading-6 text-black/48"
            >
              ZUNOKS is equipped to serve industries including Food &amp;
              Beverage, Pharmaceuticals, FMCG, Banks, Financial Institutions,
              Telecommunication, RMG and Engineering sectors.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <IconCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section
          data-section
          className="border-b border-black/[0.065] py-[clamp(3.25rem,5vw,5rem)]"
        >
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div data-reveal>
              <Eyebrow>Our Consultancy Experience</Eyebrow>
              <h2 className="mt-4 max-w-[17ch] font-serif text-[clamp(2.45rem,4vw,4.2rem)] leading-[0.94] tracking-[-0.04em]">
                Strategic support across the{" "}
                <span className="text-[var(--z-green)]">people</span> and{" "}
                <span className="text-[var(--z-orange)]">business agenda.</span>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-[38rem] text-[0.92rem] leading-6 text-black/48"
            >
              We have provided strategic consultancy for a range of critical
              areas, including:
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((item) => (
              <IconCard key={item.label} {...item} />
            ))}
            <IconCard
              label="Hiring across board, strategic, tactical and execution levels, from young professionals to seasoned experts and new market entrants"
              icon={UserRoundSearch}
              tone="orange"
              className="sm:col-span-2"
            />
          </div>
        </section>

        <section data-section className="py-[clamp(3.25rem,5vw,5rem)]">
          <div className="grid overflow-hidden rounded-[1.55rem] border border-black/[0.06] bg-white/60 shadow-[0_22px_55px_-40px_rgba(20,48,25,0.32)] lg:grid-cols-[1.14fr_0.86fr]">
            <div
              data-reveal
              className="relative min-h-[315px] overflow-hidden px-8 py-9 text-white md:px-12"
            >
              <Image
                src="/images/careers/career-opportunities-office.png"
                alt="Executive office representing trusted client relationships"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,16,0.95),rgba(5,35,21,0.68),rgba(5,35,21,0.15))]" />
              <div className="relative z-10 flex h-full max-w-[27rem] flex-col justify-center">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.23em] text-white/72">
                  Client Confidentiality
                </p>
                <h2 className="mt-5 font-serif text-[clamp(2.8rem,4.5vw,4.8rem)] leading-[0.9] tracking-[-0.045em]">
                  Trusted relationships.
                  <span className="mt-1 block text-[#83d879]">
                    Lasting <span className="text-[var(--z-orange)]">impact.</span>
                  </span>
                </h2>
              </div>
            </div>

            <div
              data-reveal
              className="relative flex min-h-[315px] items-center px-7 py-9 md:px-12"
            >
              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border border-[var(--z-green)]/10" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e5] text-[var(--z-orange)]">
                  <LockKeyhole size={20} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-6 max-w-[14ch] font-serif text-[clamp(2rem,3vw,3.1rem)] leading-[0.95] tracking-[-0.04em]">
                  We value the trust our clients place in us.
                </h3>
                <p className="mt-5 max-w-[34rem] text-[0.88rem] leading-6 text-black/48">
                  Due to client confidentiality and NDAs, we do not disclose
                  client identities without their consent. However, we can
                  arrange testimonials and reference checks for potential
                  clients upon request.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          data-section
          className="grid gap-7 pb-[clamp(3rem,5vw,4.5rem)] lg:grid-cols-[0.98fr_0.92fr_0.7fr] lg:items-center"
        >
          <div data-reveal>
            <Eyebrow>Current Engagements</Eyebrow>
            <h2 className="mt-4 font-serif text-[clamp(2.6rem,4vw,4.3rem)] leading-[0.92] tracking-[-0.04em]">
              Serving leading{" "}
              <span className="block text-[var(--z-orange)]">organisations.</span>
            </h2>
          </div>
          <p data-reveal className="text-[0.9rem] leading-6 text-black/48">
            We currently serve large MNCs and local conglomerates across
            multiple sectors, supporting them in building stronger teams,
            transforming their people practices and achieving their strategic
            business goals.
          </p>
          <div
            data-reveal
            className="relative aspect-[1.75/1] overflow-hidden rounded-[1.45rem] rounded-br-[4.5rem]"
          >
            <Image
              src="/images/careers/career-opportunities-office.png"
              alt="City skyline representing leading organisations"
              fill
              sizes="(max-width: 1023px) 100vw, 30vw"
              className="object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--z-green)]/10 via-transparent to-[var(--z-orange)]/10" />
          </div>
        </section>

        <section
          data-section
          className="relative overflow-hidden rounded-[1.45rem] bg-[#061b12] px-6 py-7 text-white shadow-[0_24px_60px_-35px_rgba(4,34,19,0.55)] md:px-10 lg:grid lg:grid-cols-[1fr_0.9fr_auto] lg:items-center lg:gap-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_110%,rgba(49,155,66,0.22),transparent_38%),radial-gradient(circle_at_88%_-20%,rgba(239,125,34,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rotate-12 rounded-[45%] border border-white/[0.06]" />

          <div data-reveal className="relative">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-white/60">
              Let’s Work Together
            </p>
            <h2 className="mt-3 font-serif text-[clamp(2.3rem,3.8vw,4rem)] leading-none tracking-[-0.04em]">
              Start a <span className="text-[#82d979]">conversation.</span>
            </h2>
          </div>

          <p
            data-reveal
            className="relative mt-5 max-w-[35rem] text-[0.86rem] leading-6 text-white/62 lg:mt-0"
          >
            Discuss how ZUNOKS can support your organisation with strategic
            people and business solutions.
          </p>

          <Link
            data-reveal
            href="/contact"
            className="group relative mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-xs font-medium text-black transition-colors hover:bg-[#eaf4e5] lg:mt-0"
          >
            Contact Us
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf5e8] text-[var(--z-green)] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
            </span>
          </Link>
        </section>
      </div>
    </section>
  );
}

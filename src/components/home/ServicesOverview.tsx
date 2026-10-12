"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Factory,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

type ServiceItem = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  image: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  tone: "green" | "orange";
};

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Strategic Interventions",
    shortTitle: "Strategy",
    description:
      "Supporting organizations with strategic direction, business planning and interventions designed to create sustainable value.",
    href: "/services/strategic-interventions",
    image: "/images/hero/hero-strategy.png",
    icon: Target,
    tone: "green",
  },
  {
    number: "02",
    title: "Human Resources",
    shortTitle: "People",
    description:
      "People strategy, organization capability and HR solutions designed to strengthen performance and culture.",
    href: "/services/human-resources",
    image: "/images/hero/hero-vision.png",
    icon: Users,
    tone: "orange",
  },
  {
    number: "03",
    title: "Gamified Recruitment",
    shortTitle: "Talent Tech",
    description:
      "AI-driven gamified assessments that combine engagement, gamification and neuroscience-inspired evaluation.",
    href: "/services/gamified-recruitment",
    image: "/images/hero/hero-operations.png",
    icon: BrainCircuit,
    tone: "green",
  },
  {
    number: "04",
    title: "Manufacturing & Supply Chain",
    shortTitle: "Operations",
    description:
      "Operational excellence across manufacturing and supply-chain functions to drive resilience and business impact.",
    href: "/services/manufacturing-supply-chain",
    image: "/images/hero/hero-operations.png",
    icon: Factory,
    tone: "orange",
  },
  {
    number: "05",
    title: "Executive Search",
    shortTitle: "Leadership",
    description:
      "Senior and executive talent search aligned with business priorities, leadership needs and organizational fit.",
    href: "/services/executive-search",
    image: "/images/hero/hero-strategy.png",
    icon: Search,
    tone: "green",
  },
  {
    number: "06",
    title: "Executive Coaching",
    shortTitle: "Coaching",
    description:
      "Focused coaching interventions that help leaders improve effectiveness, confidence and organizational influence.",
    href: "/services/executive-coaching",
    image: "/images/hero/hero-vision.png",
    icon: Sparkles,
    tone: "orange",
  },
  {
    number: "07",
    title: "Shared Services",
    shortTitle: "Support",
    description:
      "Specialized support services that help organizations improve efficiency, capability and execution quality.",
    href: "/services/shared-services",
    image: "/images/hero/hero-operations.png",
    icon: BriefcaseBusiness,
    tone: "green",
  },
];

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f3f3ef] py-[clamp(2.5rem,3.3vw,3.75rem)] text-black">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div className="absolute -left-[10rem] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[var(--z-green)] opacity-[0.04] blur-[140px]" />

        <div className="absolute -bottom-[10rem] right-[8%] h-[30rem] w-[30rem] rounded-full bg-[var(--z-orange)] opacity-[0.04] blur-[150px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* CENTERED INTRO */}
        <div className="border-b border-black/10 pb-7">
          <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[var(--z-green)]" />

              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-black/40">
                Our Services
              </span>
            </div>

            <h2 className="mt-4 w-full text-center text-[clamp(2.4rem,3.7vw,4.5rem)] font-medium uppercase leading-[0.96] tracking-[-0.045em]">
              <span className="block whitespace-nowrap text-black">
                WE BRING INNOVATIVE SOLUTIONS TO
              </span>

              <span className="mt-1 block whitespace-nowrap text-[var(--z-green)]">
                CRITICAL BUSINESS CHALLENGES
                <span className="text-[var(--z-orange)]">.</span>
              </span>
            </h2>

            <div className="mt-4 h-px w-full max-w-[760px] bg-black/10" />

            <p className="mt-4 max-w-[860px] text-center text-[1rem] leading-7 text-black/52">
              ZUNOKS maintains the highest professional standards while being
              committed to society.
              <br />
              We are open and diverse, and we stand on mutual respect to
              collaborate and succeed.
            </p>

            <Link
              href="/services"
              className="group mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-black p-1.5 pl-5 text-sm font-medium text-white transition-all duration-500 hover:bg-[var(--z-green)]"
            >
              <span>Explore all services</span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={1.8} />
              </span>
            </Link>
          </div>
        </div>

        {/* DESKTOP ACCORDION */}
        <div className="mt-6 hidden lg:block">
          <div className="flex h-[500px] gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-[1.8rem] border border-black/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "flex-[4.2]" : "flex-[0.9]"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className={`object-cover object-center transition-transform duration-700 ${
                        isActive
                          ? "scale-100"
                          : "scale-110 group-hover:scale-105"
                      }`}
                    />
                  </div>

                  {/* OVERLAYS */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      isActive
                        ? "bg-gradient-to-r from-black/78 via-black/36 to-black/10"
                        : "bg-gradient-to-t from-black/82 via-black/45 to-black/20"
                    }`}
                  />

                  <div
                    className={`absolute inset-0 ${
                      service.tone === "green"
                        ? "bg-[radial-gradient(circle_at_80%_20%,rgba(49,155,66,0.22),transparent_36%)]"
                        : "bg-[radial-gradient(circle_at_80%_20%,rgba(239,125,34,0.22),transparent_36%)]"
                    }`}
                  />

                  {/* COLLAPSED VIEW */}
                  <div
                    className={`absolute inset-0 z-10 flex flex-col items-center justify-between px-3 py-4 text-white transition-all duration-500 ${
                      isActive
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                    }`}
                  >
                    <div className="w-full">
                      <span className="text-[0.58rem] tracking-[0.16em] text-white/55">
                        {service.number}
                      </span>
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                      <div className="flex -rotate-180 flex-col items-center gap-3 [writing-mode:vertical-rl]">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl ${
                            service.tone === "green"
                              ? "text-[#8bd67e]"
                              : "text-[#ffa24b]"
                          }`}
                        >
                          <Icon size={17} strokeWidth={1.7} />
                        </div>

                        <span className="text-[0.88rem] font-medium tracking-[-0.02em] text-white">
                          {service.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl">
                      <ArrowUpRight size={13} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* EXPANDED VIEW */}
                  <div
                    className={`absolute inset-0 z-20 flex h-full flex-col justify-between p-6 text-white transition-all duration-700 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "pointer-events-none translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[0.58rem] tracking-[0.16em] text-white/55">
                          {service.number}
                        </span>

                        <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.14em] text-white/65 backdrop-blur-xl">
                          {service.shortTitle}
                        </span>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight size={15} strokeWidth={1.8} />
                      </span>
                    </div>

                    <div className="max-w-[520px]">
                      <div
                        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl ${
                          service.tone === "green"
                            ? "text-[#8bd67e]"
                            : "text-[#ffa24b]"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <h3 className="max-w-[11ch] text-[clamp(1.9rem,3vw,3.6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-[34rem] text-sm leading-6 text-white/58">
                        {service.description}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/65 backdrop-blur-xl">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            service.tone === "green"
                              ? "bg-[var(--z-green)]"
                              : "bg-[var(--z-orange)]"
                          }`}
                        />

                        View service details
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-6 grid gap-3 lg:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeIndex;

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="w-full text-left"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-black text-white">
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/42 to-black/18" />

                  <div
                    className={`absolute inset-0 ${
                      service.tone === "green"
                        ? "bg-[radial-gradient(circle_at_80%_20%,rgba(49,155,66,0.22),transparent_36%)]"
                        : "bg-[radial-gradient(circle_at_80%_20%,rgba(239,125,34,0.22),transparent_36%)]"
                    }`}
                  />

                  <div className="relative z-10 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[0.58rem] tracking-[0.16em] text-white/55">
                          {service.number}
                        </span>

                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.14em] text-white/65 backdrop-blur-xl">
                          {service.shortTitle}
                        </span>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
                        <ArrowUpRight size={14} strokeWidth={1.7} />
                      </span>
                    </div>

                    <div className="mt-7">
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl ${
                          service.tone === "green"
                            ? "text-[#8bd67e]"
                            : "text-[#ffa24b]"
                        }`}
                      >
                        <Icon size={17} strokeWidth={1.7} />
                      </div>

                      <h3 className="text-[clamp(1.6rem,5vw,2.35rem)] font-medium leading-[0.96] tracking-[-0.05em]">
                        {service.title}
                      </h3>

                      {isActive && (
                        <p className="mt-3 max-w-[34rem] text-sm leading-6 text-white/58">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
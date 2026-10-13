"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Landmark,
  LockKeyhole,
  Network,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assetPath } from "@/lib/assetPath";

gsap.registerPlugin(ScrollTrigger);

const impactCards = [
  {
    title: "Transformation & Integration",
    description: "Post-merger phase to enable employee transition",
    icon: Network,
    image: true,
  },
  {
    title: "Business Performance",
    description: "Reward architecture and policy formulation",
    icon: TrendingUp,
    image: false,
  },
  {
    title: "Talent & Leadership",
    description: "Young professionals to seasoned experts",
    icon: UsersRound,
    image: true,
  },
] as const;

export default function ClientImpactLandingPage() {
  const pageRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-hero-reveal]",
            { opacity: 0, y: 28, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.09,
            },
          )
          .fromTo(
            "[data-impact-word]",
            { opacity: 0, x: 18 },
            { opacity: 1, x: 0, duration: 0.75 },
            0.48,
          );

        gsap.to("[data-hero-media]", {
          scale: 1.08,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-impact-hero]",
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        gsap.to("[data-orbit]", {
          rotation: 360,
          duration: 46,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        gsap.to("[data-scroll-icon]", {
          y: 5,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
          const reveals = section.querySelectorAll("[data-reveal]");

          gsap.fromTo(
            reveals,
            { opacity: 0, y: 30, filter: "blur(7px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.09,
              ease: "power4.out",
              scrollTrigger: {
                trigger: section,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

        gsap.fromTo(
          "[data-impact-card]",
          { opacity: 0, y: 26, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-impact-grid]",
              start: "top 86%",
              once: true,
            },
          },
        );
      });
    }, page);

    const video = videoRef.current;
    const handleVisibility = () => {
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section ref={pageRef} className="overflow-hidden bg-[#f8f8f4] text-[#121512]">
      <div
        data-impact-hero
        className="relative isolate flex min-h-[610px] items-center overflow-hidden rounded-b-[1.6rem] bg-[#07110b] pt-24 text-white md:min-h-[670px] md:pt-28"
      >
        <video
          ref={videoRef}
          data-hero-media
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={assetPath("/images/careers/career-opportunities-office.png")}
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        >
          <source
            src={assetPath("/videos/client-impact/client-impact-bg.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,13,8,0.95)_0%,rgba(3,18,11,0.79)_38%,rgba(2,12,7,0.31)_72%,rgba(1,7,4,0.18)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_88%,rgba(49,155,66,0.18),transparent_38%)]" />

        <div className="mx-auto grid w-full max-w-[var(--container-wide)] gap-8 px-[var(--page-gutter)] pb-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative z-10">
            <div data-hero-reveal className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#7dda89]" />
              <span className="text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-[#a7dfae]">
                Our Approach
              </span>
            </div>

            <h1 className="mt-5 max-w-[11ch] font-serif text-[clamp(3.8rem,7vw,7.4rem)] leading-[0.82] tracking-[-0.052em]">
              <span data-hero-reveal className="block">
                From transition
              </span>
              <span data-hero-reveal className="block">
                to <span className="text-[#75ce7c]">performance</span>
                <span className="text-[var(--z-orange)]">.</span>
              </span>
            </h1>

            <p
              data-hero-reveal
              className="mt-7 max-w-[38rem] text-[clamp(1rem,1.35vw,1.18rem)] leading-8 text-white/76"
            >
              We partner with organisations to navigate complex transitions,
              build people capability and create lasting value for a stronger,
              more resilient future.
            </p>

            <a
              data-hero-reveal
              href="#impact-content"
              className="group mt-9 inline-flex items-center gap-4 text-sm text-white/76 transition-colors hover:text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/65 transition-colors group-hover:border-[#75ce7c] group-hover:bg-[#75ce7c]/10">
                <ArrowDown
                  data-scroll-icon
                  size={18}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </span>
              Scroll to explore
            </a>
          </div>

          <div
            data-impact-word
            className="pointer-events-none absolute bottom-[24%] right-[5%] hidden text-[0.7rem] font-medium uppercase leading-6 tracking-[0.12em] text-white/75 xl:block"
          >
            People
            <br />
            Ideas
            <br />
            Impact
            <span className="text-[var(--z-orange)]">.</span>
          </div>
        </div>
      </div>

      <div
        id="impact-content"
        className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]"
      >
        <div
          data-orbit
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-32 h-[29rem] w-[29rem] rounded-full border border-[var(--z-green)]/25"
        >
          <span className="absolute left-[8%] top-[34%] h-2.5 w-2.5 rounded-full bg-[var(--z-orange)]" />
          <span className="absolute bottom-[6%] right-[28%] h-2 w-2 rounded-full bg-[var(--z-green)]" />
        </div>

        <section
          data-section
          className="relative py-[clamp(4.5rem,7vw,7rem)]"
        >
          <div className="grid gap-8 lg:grid-cols-[0.83fr_1.17fr] lg:items-end">
            <h2
              data-reveal
              className="max-w-[10ch] font-serif text-[clamp(3.6rem,6.2vw,6.6rem)] leading-[0.84] tracking-[-0.052em]"
            >
              transition to performance
              <span className="text-[var(--z-orange)]">.</span>
            </h2>
            <p
              data-reveal
              className="max-w-[51rem] pb-1 text-[0.93rem] leading-7 text-black/49"
            >
              We are engaged in the process of providing strategic consultancy
              in the areas of Transformation &amp; Integration in post-merger
              phase to enable an employee transition project, operations
              transformation project of an MNC following an acquisition. We are
              currently working closely with a 1st generation private bank with
              a view to engaging in a HR transformation project.
            </p>
          </div>

          <div
            data-impact-grid
            className="mt-10 grid gap-3 md:grid-cols-3"
          >
            {impactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  data-impact-card
                  className="group relative min-h-[230px] overflow-hidden rounded-[1.25rem] bg-[#062519] p-6 text-white shadow-[0_20px_50px_-34px_rgba(3,29,18,0.75)] transition-transform duration-500 hover:-translate-y-1.5"
                >
                  {item.image ? (
                    <Image
                      src={assetPath("/images/careers/career-opportunities-office.png")}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 100vw, 34vw"
                      className={`object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                        index === 0 ? "object-left" : "object-right"
                      }`}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(106,190,94,0.24),transparent_40%),linear-gradient(145deg,#052318,#0a3b27_55%,#051c13)]" />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,20,12,0.94),rgba(3,27,16,0.3)_78%)]" />
                  <div className="absolute -right-20 -top-24 h-56 w-56 rotate-12 rounded-[48%] border border-white/[0.06]" />

                  <div className="relative flex h-full flex-col">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/[0.07] text-white backdrop-blur-md">
                      <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div className="mt-auto pt-10">
                      <h3 className="font-serif text-[clamp(1.45rem,2vw,2rem)] leading-none tracking-[-0.035em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[20rem] text-sm leading-5 text-white/72">
                        {item.description}
                      </p>
                    </div>
                    <span className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 transition-all duration-400 group-hover:rotate-[-35deg] group-hover:bg-white group-hover:text-[#062519]">
                      <ArrowRight size={15} strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          data-section
          className="grid gap-4 pb-[clamp(4rem,7vw,7rem)] lg:grid-cols-2"
        >
          <article
            data-reveal
            className="relative min-h-[480px] overflow-hidden rounded-[1.3rem] border border-black/[0.07] bg-white px-7 py-8 shadow-[0_20px_55px_-40px_rgba(20,45,25,0.3)] md:px-10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f5e9] text-[var(--z-green)]">
              <Landmark size={20} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <p className="relative z-10 mt-7 max-w-[38rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-8 text-black/60">
              We have been retained for hiring for full range of roles be it
              strategic, tactical, execution level ranging from young
              professionals to seasoned experts and top two levels for a few
              new market entrants.
            </p>

            <div className="pointer-events-none absolute -bottom-48 -left-24 h-[26rem] w-[26rem] rounded-full bg-[#e9f3e8]" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-[19rem] w-[19rem] overflow-hidden rounded-full border-[10px] border-white">
              <Image
                src={assetPath("/images/careers/career-opportunities-office.png")}
                alt="Executive office overlooking a city"
                fill
                sizes="320px"
                className="object-cover object-right"
              />
            </div>
            <div className="pointer-events-none absolute bottom-12 left-[43%] h-24 w-24 rounded-full border border-[var(--z-orange)]/40" />
            <span className="pointer-events-none absolute bottom-[6.4rem] left-[55%] h-2.5 w-2.5 rounded-full bg-[var(--z-orange)]" />
          </article>

          <article
            data-reveal
            className="relative min-h-[480px] overflow-hidden rounded-[1.3rem] bg-[#063323] px-7 py-8 text-white shadow-[0_20px_55px_-35px_rgba(3,39,24,0.55)] md:px-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(95,181,87,0.24),transparent_38%),radial-gradient(ellipse_at_10%_95%,rgba(25,99,56,0.7),transparent_48%),linear-gradient(140deg,#05271b,#06412b_55%,#06291d)]" />
            <div className="absolute -bottom-44 -right-28 h-[34rem] w-[20rem] rotate-[24deg] rounded-[50%] border border-[#90d17d]/10 bg-[#75bd67]/[0.045]" />
            <div className="absolute -bottom-56 right-0 h-[32rem] w-[12rem] rotate-[38deg] rounded-[50%] border border-[#90d17d]/10" />

            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/[0.06]">
                <LockKeyhole size={20} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p className="mt-7 max-w-[38rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-8 text-white/88">
                We are currently providing our services to large MNCs and local
                conglomerates in multiple sectors. However, as we remain true
                to our client confidentiality policy, we refrain from disclosing
                the names of our clients without their consent. In case a
                reference check is required by any potential client, we are open
                to arranging testimonials from our present clientele base.
              </p>
              <p className="mt-7 border-t border-white/25 pt-5 text-sm leading-6 text-white/58">
                We are unable to share the identity of our clients due to
                Non-Disclosure Agreements (NDA) we have agreed upon with our
                clients.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

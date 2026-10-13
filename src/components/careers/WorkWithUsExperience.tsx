"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gallery = [
  {
    src: "/images/work-with-us/life-at-zunoks-01.png",
    alt: "ZUNOKS colleagues celebrating together",
  },
  {
    src: "/images/work-with-us/life-at-zunoks-02.png",
    alt: "ZUNOKS colleagues greeting one another",
  },
  {
    src: "/images/work-with-us/life-at-zunoks-03.png",
    alt: "ZUNOKS colleagues sharing a conversation",
  },
  {
    src: "/images/work-with-us/life-at-zunoks-04.png",
    alt: "ZUNOKS team gathered in the office",
  },
  {
    src: "/images/work-with-us/life-at-zunoks-05.png",
    alt: "ZUNOKS team enjoying a meal together",
  },
] as const;

export default function WorkWithUsExperience() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const media = gsap.matchMedia();

    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-hero-copy]",
            { opacity: 0, y: 18, filter: "blur(5px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.07,
            },
          )
          .fromTo(
            "[data-hero-photo]",
            { opacity: 0, scale: 1.08 },
            { opacity: 1, scale: 1, duration: 1.05 },
            0.08,
          )
          .fromTo(
            "[data-apply]",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.65 },
            0.45,
          );

        gsap.to("[data-hero-photo] img", {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero]",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.fromTo(
          "[data-life-copy]",
          { opacity: 0, y: 20, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-life]",
              start: "top 86%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-gallery-card]",
          { opacity: 0, y: 22, scale: 0.985 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.075,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-gallery]",
              start: "top 84%",
              once: true,
            },
          },
        );
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
      className="relative overflow-hidden bg-[#f7f8f1] pb-[clamp(2.5rem,4vw,4rem)] pt-[6.25rem] text-[#101510] md:pt-[7rem]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-24 h-72 w-72 rounded-full border border-[#e1be42]/20" />
        <div className="absolute -right-28 top-[46%] h-80 w-80 rounded-full bg-[#dcefd4]/55 blur-2xl" />
        <div className="absolute right-[-4rem] top-[56%] h-64 w-64 rounded-full border border-[var(--z-green)]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div
          data-hero
          className="relative isolate overflow-hidden rounded-[1.55rem] border border-[#d7e2cc] bg-[#eef5df] shadow-[0_22px_65px_-42px_rgba(34,75,39,0.35)]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.94),transparent_34%),linear-gradient(105deg,#eff6e1_0%,#edf4dd_55%,#f9f5dc_100%)]" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#ddb92d]/25" />
          <div className="pointer-events-none absolute left-[44%] top-[14%] h-2 w-2 rounded-full bg-[#efbd28] shadow-[0_0_18px_rgba(239,189,40,0.55)]" />

          <div className="grid min-h-[310px] grid-cols-[1.03fr_0.97fr] sm:min-h-[360px] lg:min-h-[430px]">
            <div className="relative z-20 flex flex-col justify-center py-7 pl-5 pr-1 sm:py-10 sm:pl-9 md:pl-12 lg:pl-16">
              <p
                data-hero-copy
                className="text-[0.47rem] font-semibold uppercase tracking-[0.18em] text-[var(--z-green)] sm:text-[0.58rem]"
              >
                Work With Us
              </p>

              <h1 className="mt-2 max-w-[13ch] font-serif text-[clamp(1.32rem,4.5vw,4.65rem)] leading-[0.9] tracking-[-0.045em] sm:mt-3">
                <span data-hero-copy className="block">
                  We are always on the lookout for the best and the brightest
                  talents, especially those who are looking to establish
                  themselves as
                </span>{" "}
                <span data-hero-copy className="text-[var(--z-green)]">
                  consulting professionals.
                </span>
              </h1>

              <div
                data-hero-copy
                className="mt-3 max-w-[34rem] space-y-2 pr-2 text-[0.52rem] leading-[1.55] text-black/55 sm:mt-5 sm:text-[0.72rem] lg:text-[0.82rem]"
              >
                <p>
                  ZUNOKS employs young and aspiring talents for full-time
                  opportunities. We also offer contingent opportunities for
                  professionals in career break, maternity leave etc. looking
                  for part-time opportunities.
                </p>
                <p>
                  Explore our services to get an idea of our areas of work, and
                  see where you can add the most value that falls in line with
                  your passion, strength and experience.
                </p>
              </div>
            </div>

            <div
              data-hero-photo
              className="relative min-h-full overflow-hidden rounded-bl-[5rem] sm:rounded-bl-[9rem] lg:rounded-bl-[14rem]"
            >
              <Image
                src="/images/careers/work-with-us-hero.png"
                alt="Three professionals having a conversation in a bright office"
                fill
                priority
                sizes="(max-width: 767px) 50vw, 48vw"
                className="scale-[1.1] object-cover object-[54%_center]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#eef5df]/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />
            </div>
          </div>
        </div>

        <div
          data-apply
          className="relative z-30 mx-2 -mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-[1.15rem] border border-white/90 bg-white/80 px-3 py-2.5 shadow-[0_18px_40px_-28px_rgba(37,75,40,0.4)] backdrop-blur-xl sm:mx-6 sm:gap-4 sm:px-5 sm:py-3.5 lg:mx-10"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f3df] text-[var(--z-green)] sm:h-10 sm:w-10">
            <Mail size={14} strokeWidth={1.7} aria-hidden="true" />
          </span>

          <p className="text-[0.48rem] leading-[1.45] text-black/54 sm:text-[0.68rem] lg:text-[0.76rem]">
            Interested in joining ZUNOKS? Mail your updated CV along with a
            Cover Letter to{" "}
            <a
              href="mailto:recruitment@zunoks.com?subject=Work%20with%20ZUNOKS"
              className="font-semibold text-[var(--z-green)] transition-colors hover:text-[#207c35]"
            >
              recruitment@zunoks.com
            </a>{" "}
            with the subject: “Work with ZUNOKS”
          </p>

          <a
            href="mailto:recruitment@zunoks.com?subject=Work%20with%20ZUNOKS"
            aria-label="Send your application to ZUNOKS"
            className="group flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.06] bg-white text-[var(--z-green)] shadow-sm transition-all duration-300 hover:bg-[var(--z-green)] hover:text-white sm:h-9 sm:w-9"
          >
            <ArrowRight
              size={13}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div data-life className="relative pt-[clamp(2.5rem,4.5vw,4.5rem)]">
          <div className="max-w-[70rem]">
            <p
              data-life-copy
              className="text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)] sm:text-[0.62rem]"
            >
              Inside ZUNOKS
            </p>
            <h2
              data-life-copy
              className="mt-1.5 font-serif text-[clamp(2.25rem,5.3vw,6rem)] leading-[0.92] tracking-[-0.045em]"
            >
              Life at <span className="text-[var(--z-green)]">ZUNOKS</span>
              <span className="text-[var(--z-orange)]">.</span>
            </h2>
            <p
              data-life-copy
              className="mt-3 max-w-[70rem] text-[0.68rem] leading-[1.65] text-black/50 sm:text-[0.82rem] lg:text-[0.95rem]"
            >
              We are a closely knit unit that believes in creating an
              environment that fosters openness and enables collaboration. Our
              open work &amp; fun environment doesn’t limit you to a desk.
              Whether it’s over a cup of Espresso or a can of soda, we free up
              your mind, stimulate your creative ingenuity and inspire you to
              innovate to learn from the best resources and deliver work of
              highest professional standard for our clients.
            </p>
          </div>

          <div
            data-gallery
            className="mt-5 grid grid-cols-2 gap-2 sm:mt-7 sm:gap-3"
          >
            {gallery.map((image, index) => (
              <div
                key={image.src}
                data-gallery-card
                className={`group relative overflow-hidden rounded-[0.85rem] border border-white bg-white shadow-[0_14px_38px_-26px_rgba(25,51,28,0.38)] sm:rounded-[1.1rem] ${
                  index === 0
                    ? "col-span-2 aspect-[3.7/1]"
                    : "aspect-[1.85/1]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 1535px) 100vw, 1536px"
                      : "(max-width: 767px) 50vw, 768px"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-65 transition-opacity duration-500 group-hover:opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

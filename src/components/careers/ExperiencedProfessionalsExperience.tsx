"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Leaf,
  Mail,
  UsersRound,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "/images/careers/experienced-professionals-hero.png";

export default function ExperiencedProfessionalsExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .fromTo(
            "[data-exp-eyebrow]",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.7 },
          )
          .fromTo(
            "[data-exp-title-line]",
            { opacity: 0, yPercent: 110, filter: "blur(8px)" },
            {
              opacity: 1,
              yPercent: 0,
              filter: "blur(0px)",
              duration: 0.95,
              stagger: 0.1,
            },
            "-=0.4",
          )
          .fromTo(
            "[data-exp-hero-copy]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 },
            "-=0.5",
          );

        if (heroImageRef.current) {
          gsap.fromTo(
            heroImageRef.current,
            { scale: 1.06 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: "[data-exp-hero]",
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }

        gsap.to("[data-exp-orbit]", {
          rotation: 360,
          duration: 36,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        gsap.fromTo(
          "[data-exp-reveal]",
          { opacity: 0, y: 30, filter: "blur(7px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-exp-content]",
              start: "top 80%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-exp-cta]",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-exp-cta]",
              start: "top 86%",
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f8f3_0%,#f4f5ed_62%,#edf2e8_100%)] pb-[clamp(3rem,5vw,5rem)] pt-[7.25rem] text-[#111411] md:pt-[7.75rem]"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        <div
          data-exp-hero
          className="relative isolate min-h-[420px] overflow-hidden rounded-[2.25rem] border border-white/35 bg-[#24140d] px-6 py-10 text-white shadow-[0_30px_90px_-38px_rgba(76,39,14,0.58)] md:px-10 lg:px-14"
        >
          <Image
            ref={heroImageRef}
            src={heroImage}
            alt="Experienced professional working in a contemporary office"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-[66%_center]"
          />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(25,12,7,0.92)_0%,rgba(37,18,10,0.84)_34%,rgba(31,16,9,0.35)_63%,rgba(10,8,5,0.06)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          <div data-exp-orbit className="pointer-events-none absolute -right-[5rem] -top-[13rem] h-[34rem] w-[34rem] rounded-full border border-[#efbd6a]/55">
            <span className="absolute bottom-[15%] left-[5%] h-3 w-3 rounded-full bg-[#f3b34c] shadow-[0_0_22px_rgba(243,179,76,0.65)]" />
          </div>
          <div className="pointer-events-none absolute right-[11%] top-[18%] hidden h-[15rem] w-[15rem] rounded-full border border-white/12 lg:block" />

          <div className="relative z-10 flex min-h-[340px] max-w-[46rem] flex-col justify-center">
            <div data-exp-eyebrow className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#e8c84c]" />
              <span className="text-[0.61rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                Experienced Professionals
              </span>
              <span className="h-px w-8 bg-[#70c879]" />
            </div>

            <h1 className="mt-5 font-serif text-[clamp(3rem,5.6vw,6.15rem)] font-normal leading-[0.88] tracking-[-0.055em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-exp-title-line className="block">
                  Bring your experience
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-exp-title-line className="block text-[#f1bd78]">
                  into meaningful work<span className="text-[#79d37b]">.</span>
                </span>
              </span>
            </h1>

            <p data-exp-hero-copy className="mt-5 max-w-[40rem] text-[clamp(0.96rem,1.2vw,1.08rem)] leading-7 text-white/74">
              We also offer contingent opportunities for professionals in
              career break, maternity leave etc. looking for part-time
              opportunities.
            </p>

            <Link
              data-exp-hero-copy
              href="/careers/work-with-us"
              className="group mt-6 inline-flex w-fit items-center gap-3 text-sm font-medium text-white/72 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/22 bg-white/[0.08] backdrop-blur-xl transition-transform duration-400 group-hover:-translate-x-1">
                <ArrowLeft size={14} strokeWidth={1.7} aria-hidden="true" />
              </span>
              Back to Work With Us
            </Link>
          </div>
        </div>

        <div
          data-exp-content
          className="relative grid gap-8 py-[clamp(3rem,5vw,5rem)] lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
        >
          <div className="pointer-events-none absolute -left-[20%] top-[15%] h-72 w-72 rounded-full border border-[#e8c84c]/20" />
          <div className="pointer-events-none absolute right-[3%] top-[8%] h-2 w-2 rounded-full bg-[var(--z-orange)]" />

          <div data-exp-reveal className="relative z-10 lg:pl-[5%]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[var(--z-green)]">02</span>
              <span className="h-px w-7 bg-[var(--z-green)]" />
              <span className="text-[0.61rem] font-semibold uppercase tracking-[0.22em] text-[#316942]">
                Experienced Professionals
              </span>
            </div>

            <h2 className="mt-5 max-w-[11ch] font-serif text-[clamp(3rem,5.2vw,6.1rem)] font-normal leading-[0.88] tracking-[-0.055em]">
              Flexible opportunities for{" "}
              <span className="bg-gradient-to-r from-[#2f7138] via-[#789632] to-[#d69419] bg-clip-text text-transparent">
                experienced professionals
              </span>
              <span className="text-[var(--z-orange)]">.</span>
            </h2>

            <p className="mt-5 max-w-[38rem] text-[clamp(1rem,1.25vw,1.12rem)] leading-7 text-black/52">
              We also offer contingent opportunities for professionals in
              career break, maternity leave etc. looking for part-time
              opportunities.
            </p>
          </div>

          <div data-exp-reveal className="relative mx-auto h-[480px] w-full max-w-[610px]">
            <div className="absolute bottom-[2%] left-[18%] h-[74%] w-[52%] overflow-hidden rounded-[3rem] border border-white/75 bg-white shadow-[0_30px_75px_-35px_rgba(45,66,34,0.5)]">
              <Image
                src={heroImage}
                alt="Experienced professional considering flexible work opportunities"
                fill
                sizes="(max-width: 1024px) 70vw, 35vw"
                className="object-cover object-[73%_center] transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            <div className="absolute left-[2%] top-[46%] z-10 flex h-[190px] w-[170px] flex-col justify-between rounded-[2rem] border border-white/75 bg-white/80 p-6 shadow-[0_24px_60px_-32px_rgba(30,58,35,0.4)] backdrop-blur-2xl">
              <UsersRound size={28} strokeWidth={1.35} className="text-[var(--z-green)]" />
              <div>
                <p className="font-serif text-xl leading-[1.05] tracking-[-0.03em] text-[#18231a]">
                  Your Experience Matters
                </p>
                <span className="mt-3 block h-0.5 w-7 bg-[var(--z-orange)]" />
              </div>
            </div>

            <div className="absolute right-[1%] top-[8%] z-10 w-[180px] rounded-[1.8rem] border border-white/75 bg-white/82 p-5 shadow-[0_22px_55px_-30px_rgba(30,58,35,0.38)] backdrop-blur-2xl">
              <Leaf size={25} strokeWidth={1.4} className="text-[var(--z-green)]" />
              <p className="mt-5 text-sm font-medium text-[#18231a]">Meaningful Work</p>
              <p className="mt-1 text-xs text-black/38">On Your Terms</p>
            </div>

            <div className="absolute bottom-0 right-[3%] h-[42%] w-[26%] overflow-hidden rounded-[2.3rem] border border-white/70 shadow-[0_22px_55px_-34px_rgba(30,58,35,0.45)]">
              <Image
                src={heroImage}
                alt=""
                fill
                sizes="180px"
                className="object-cover object-[35%_center] blur-[0.2px]"
              />
              <div className="absolute inset-0 bg-[#d6c66a]/10" />
            </div>
          </div>
        </div>

        <div
          data-exp-cta
          className="relative overflow-hidden rounded-[2rem] border border-[var(--z-green)]/18 bg-[linear-gradient(110deg,rgba(222,242,211,0.78),rgba(255,255,255,0.82),rgba(250,232,148,0.48))] px-6 py-7 shadow-[0_24px_65px_-38px_rgba(35,70,40,0.4)] backdrop-blur-2xl md:px-9 md:py-8"
        >
          <div className="pointer-events-none absolute -left-16 -bottom-24 h-64 w-64 rounded-full border border-[var(--z-green)]/12" />
          <div className="pointer-events-none absolute -right-16 -top-28 h-64 w-64 rounded-full border border-[#e8c84c]/22" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-5">
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--z-green)]/15 bg-white/45 text-[var(--z-green)] sm:flex">
                <Mail size={24} strokeWidth={1.45} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                  Interested in joining ZUNOKS?
                </p>
                <p className="mt-3 max-w-[50rem] font-serif text-[clamp(1.3rem,2vw,2rem)] leading-[1.3] tracking-[-0.025em] text-black/72">
                  Mail your updated CV along with a Cover Letter to{" "}
                  <span className="font-semibold text-[var(--z-green)]">
                    recruitment@zunoks.com
                  </span>{" "}
                  with the subject: <span className="font-semibold">“Work with ZUNOKS”</span>
                </p>
              </div>
            </div>

            <div className="lg:text-right">
              <a
                href="mailto:recruitment@zunoks.com?subject=Work%20with%20ZUNOKS"
                className="group inline-flex items-center gap-5 rounded-full bg-[var(--z-green)] p-1.5 pl-6 text-sm font-medium text-white shadow-[0_14px_35px_rgba(49,155,66,0.22)] transition-transform duration-500 hover:-translate-y-1"
              >
                Send your application
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--z-green)] transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </a>
              <p className="mt-3 text-[0.52rem] uppercase tracking-[0.2em] text-black/28">
                We look forward to hearing from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

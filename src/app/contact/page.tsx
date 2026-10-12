"use client";

import { useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll("[data-header-reveal]"),
        {
          opacity: 0,
          y: 24,
          filter: "blur(7px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.07,
          ease: "power4.out",
        },
      );

      gsap.fromTo(
        section.querySelectorAll("[data-reveal]"),
        {
          opacity: 0,
          y: 32,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        },
      );

      gsap.to("[data-contact-glow]", {
        scale: 1.08,
        opacity: 0.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f2f3ed] pb-[clamp(3rem,5vw,5rem)] pt-[8.5rem] text-black md:pt-[9.5rem]"
    >
      {/* BACKGROUND ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,155,66,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(49,155,66,0.025)_1px,transparent_1px)] bg-[size:84px_84px]" />

        <div
          data-contact-glow
          className="absolute -left-[10rem] top-[4%] h-[26rem] w-[26rem] rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[130px]"
        />

        <div
          data-contact-glow
          className="absolute -bottom-[12rem] right-[5%] h-[24rem] w-[24rem] rounded-full bg-[var(--z-orange)] opacity-[0.07] blur-[125px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--container-wide)] px-[var(--page-gutter)]">
        {/* SIMPLE CENTERED HEADER */}
        <div className="mx-auto mb-10 flex max-w-[760px] flex-col items-center text-center md:mb-12">
          <div
            data-header-reveal
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-7 bg-[var(--z-orange)]" />

            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-black/38">
              Contact ZUNOKS
            </span>

            <span className="h-[2px] w-7 bg-[var(--z-green)]" />
          </div>

          <h1
            data-header-reveal
            className="mt-4 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.065em]"
          >
            Let&apos;s work{" "}
            <span className="text-[var(--z-green)]">
              together
            </span>
            <span className="text-[var(--z-orange)]">
              .
            </span>
          </h1>

          <p
            data-header-reveal
            className="mt-4 max-w-[38rem] text-sm leading-7 text-black/45"
          >
            From Recruitment to Restructuring, we have your
            business covered. Leave us a message and our team
            will get in touch with you.
          </p>
        </div>

        {/* MASTER GLASS SHELL */}
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/[0.34] p-4 shadow-[0_30px_100px_rgba(25,50,30,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[32px] backdrop-saturate-[1.3] md:p-5"
        >
          {/* TOP / BOTTOM GLASS EDGES */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/45 to-transparent" />

          <div className="pointer-events-none absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--z-orange)]/35 to-transparent" />

          {/* MASTER GLOW */}
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-28 right-[16%] h-64 w-64 rounded-full bg-[var(--z-orange)] opacity-[0.07] blur-[95px]" />

          <div className="relative grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT */}
            <div className="flex flex-col gap-4">
              {/* GET IN TOUCH */}
              <div
                data-reveal
                className="relative overflow-hidden rounded-[1.75rem] border border-[var(--z-green)]/15 bg-[rgba(225,242,226,0.48)] px-6 py-5 shadow-[0_16px_45px_rgba(49,155,66,0.06),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[24px]"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[var(--z-green)]/55 to-transparent" />

                <div className="pointer-events-none absolute -right-14 -top-16 h-36 w-36 rounded-full bg-[var(--z-green)] opacity-[0.09] blur-[55px]" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[var(--z-green)] shadow-[0_0_15px_rgba(49,155,66,0.55)]" />

                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[var(--z-green)]">
                      Contact ZUNOKS
                    </span>
                  </div>

                  <h2 className="mt-2 text-[1.35rem] font-medium tracking-[-0.035em]">
                    Get in touch
                  </h2>

                  <p className="mt-2 max-w-[36rem] text-sm leading-6 text-black/52">
                    We help organizations across strategy,
                    people, transformation, operations and
                    leadership. Reach out for consultations,
                    partnerships or project discussions.
                  </p>
                </div>
              </div>

              {/* INFO CARDS */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* OFFICE */}
                <div
                  data-reveal
                  className="group relative min-h-[190px] overflow-hidden rounded-[1.65rem] border border-[var(--z-green)]/18 bg-[rgba(220,240,222,0.48)] p-5 shadow-[0_15px_42px_rgba(49,155,66,0.07),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-[24px] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--z-green)]/30 hover:bg-[rgba(220,240,222,0.62)]"
                >
                  <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/55 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--z-green)] opacity-[0.10] blur-[50px] transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--z-green)]/15 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                      <MapPin
                        size={17}
                        strokeWidth={1.6}
                        className="text-[var(--z-green)]"
                      />
                    </span>

                    <h3 className="mt-3 text-base font-medium">
                      Office
                    </h3>

                    <p className="mt-1.5 text-sm leading-[1.65] text-black/52">
                      Unit C1, 3rd Floor,
                      <br />
                      House 35/B, Road 63,
                      <br />
                      Gulshan-2, Dhaka 1212,
                      <br />
                      Bangladesh
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--z-orange)]/25 to-transparent" />
                </div>

                {/* CALL */}
                <div
                  data-reveal
                  className="group relative min-h-[190px] overflow-hidden rounded-[1.65rem] border border-[var(--z-green)]/18 bg-[rgba(220,240,222,0.48)] p-5 shadow-[0_15px_42px_rgba(49,155,66,0.07),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-[24px] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--z-green)]/30 hover:bg-[rgba(220,240,222,0.62)]"
                >
                  <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/55 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--z-green)] opacity-[0.10] blur-[50px] transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--z-orange)]/18 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                      <Phone
                        size={17}
                        strokeWidth={1.6}
                        className="text-[var(--z-orange)]"
                      />
                    </span>

                    <h3 className="mt-3 text-base font-medium">
                      Call
                    </h3>

                    <a
                      href="tel:+8809678224224"
                      className="mt-1.5 block text-sm leading-6 text-black/52 transition-colors duration-300 hover:text-[var(--z-green)]"
                    >
                      +880 9678 224224
                    </a>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--z-orange)]/25 to-transparent" />
                </div>

                {/* EMAIL */}
                <div
                  data-reveal
                  className="group relative min-h-[175px] overflow-hidden rounded-[1.65rem] border border-[var(--z-green)]/18 bg-[rgba(220,240,222,0.48)] p-5 shadow-[0_15px_42px_rgba(49,155,66,0.07),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-[24px] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--z-green)]/30 hover:bg-[rgba(220,240,222,0.62)]"
                >
                  <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/55 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--z-green)] opacity-[0.10] blur-[50px] transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--z-green)]/15 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                      <Mail
                        size={17}
                        strokeWidth={1.6}
                        className="text-[var(--z-green)]"
                      />
                    </span>

                    <h3 className="mt-3 text-base font-medium">
                      Email
                    </h3>

                    <a
                      href="mailto:zunoks.consulting@zunoks.com"
                      className="mt-1.5 block break-all text-sm leading-6 text-black/52 transition-colors duration-300 hover:text-[var(--z-green)]"
                    >
                      zunoks.consulting@zunoks.com
                    </a>

                    <a
                      href="mailto:recruitment@zunoks.com"
                      className="mt-1 block break-all text-sm leading-6 text-black/52 transition-colors duration-300 hover:text-[var(--z-green)]"
                    >
                      recruitment@zunoks.com
                    </a>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--z-orange)]/25 to-transparent" />
                </div>

                {/* BUSINESS HOURS */}
                <div
                  data-reveal
                  className="group relative min-h-[175px] overflow-hidden rounded-[1.65rem] border border-[var(--z-green)]/18 bg-[rgba(220,240,222,0.48)] p-5 shadow-[0_15px_42px_rgba(49,155,66,0.07),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-[24px] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--z-green)]/30 hover:bg-[rgba(220,240,222,0.62)]"
                >
                  <div className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/55 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--z-green)] opacity-[0.10] blur-[50px] transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--z-orange)]/18 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                      <Clock3
                        size={17}
                        strokeWidth={1.6}
                        className="text-[var(--z-orange)]"
                      />
                    </span>

                    <h3 className="mt-3 text-base font-medium">
                      Business Hours
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-black/52">
                      Sunday – Thursday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--z-orange)]/25 to-transparent" />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              data-reveal
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/[0.30] p-6 shadow-[0_25px_80px_rgba(25,45,30,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[34px] backdrop-saturate-[1.3] md:p-8"
            >
              <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[var(--z-green)] opacity-[0.08] blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-20 left-[12%] h-44 w-44 rounded-full bg-[var(--z-orange)] opacity-[0.06] blur-[70px]" />

              <div className="relative">
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--z-green)] shadow-[0_0_14px_rgba(49,155,66,0.5)]" />

                    <span className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[var(--z-green)]">
                      Start a conversation
                    </span>
                  </div>

                  <h2 className="mt-2 text-[1.5rem] font-medium tracking-[-0.035em]">
                    Send us a message
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-black/48">
                    Fill up the form below and our team will
                    contact you shortly.
                  </p>
                </div>

                <form className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="h-14 rounded-[1rem] border border-[rgba(239,125,34,0.58)] bg-white/[0.48] px-4 text-sm text-black outline-none shadow-[0_0_0_1px_rgba(239,125,34,0.12),0_0_18px_rgba(239,125,34,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[20px] transition-all duration-300 placeholder:text-black/32 focus:border-[var(--z-orange)] focus:bg-white/[0.62] focus:shadow-[0_0_0_1px_rgba(239,125,34,0.34),0_0_24px_rgba(239,125,34,0.24),inset_0_1px_0_rgba(255,255,255,0.9)]"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 rounded-[1rem] border border-[rgba(239,125,34,0.58)] bg-white/[0.48] px-4 text-sm text-black outline-none shadow-[0_0_0_1px_rgba(239,125,34,0.12),0_0_18px_rgba(239,125,34,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[20px] transition-all duration-300 placeholder:text-black/32 focus:border-[var(--z-orange)] focus:bg-white/[0.62] focus:shadow-[0_0_0_1px_rgba(239,125,34,0.34),0_0_24px_rgba(239,125,34,0.24),inset_0_1px_0_rgba(255,255,255,0.9)]"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="h-14 rounded-[1rem] border border-[rgba(239,125,34,0.58)] bg-white/[0.48] px-4 text-sm text-black outline-none shadow-[0_0_0_1px_rgba(239,125,34,0.12),0_0_18px_rgba(239,125,34,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[20px] transition-all duration-300 placeholder:text-black/32 focus:border-[var(--z-orange)] focus:bg-white/[0.62] focus:shadow-[0_0_0_1px_rgba(239,125,34,0.34),0_0_24px_rgba(239,125,34,0.24),inset_0_1px_0_rgba(255,255,255,0.9)]"
                    />

                    <input
                      type="text"
                      placeholder="Company / Organization"
                      className="h-14 rounded-[1rem] border border-[rgba(239,125,34,0.58)] bg-white/[0.48] px-4 text-sm text-black outline-none shadow-[0_0_0_1px_rgba(239,125,34,0.12),0_0_18px_rgba(239,125,34,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[20px] transition-all duration-300 placeholder:text-black/32 focus:border-[var(--z-orange)] focus:bg-white/[0.62] focus:shadow-[0_0_0_1px_rgba(239,125,34,0.34),0_0_24px_rgba(239,125,34,0.24),inset_0_1px_0_rgba(255,255,255,0.9)]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="h-14 rounded-[1rem] border border-[rgba(239,125,34,0.58)] bg-white/[0.48] px-4 text-sm text-black outline-none shadow-[0_0_0_1px_rgba(239,125,34,0.12),0_0_18px_rgba(239,125,34,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[20px] transition-all duration-300 placeholder:text-black/32 focus:border-[var(--z-orange)] focus:bg-white/[0.62] focus:shadow-[0_0_0_1px_rgba(239,125,34,0.34),0_0_24px_rgba(239,125,34,0.24),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  />

                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="min-h-[160px] rounded-[1rem] border border-[rgba(239,125,34,0.58)] bg-white/[0.48] px-4 py-4 text-sm text-black outline-none shadow-[0_0_0_1px_rgba(239,125,34,0.12),0_0_18px_rgba(239,125,34,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[20px] transition-all duration-300 placeholder:text-black/32 focus:border-[var(--z-orange)] focus:bg-white/[0.62] focus:shadow-[0_0_0_1px_rgba(239,125,34,0.34),0_0_24px_rgba(239,125,34,0.24),inset_0_1px_0_rgba(255,255,255,0.9)]"
                  />

                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-fit items-center gap-4 rounded-full bg-[var(--z-green)] p-1.5 pl-5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(49,155,66,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#258638] hover:shadow-[0_18px_38px_rgba(49,155,66,0.30)]"
                  >
                    <span>Send Message</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--z-green)] transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div
          data-reveal
          className="relative mt-6 overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/[0.32] p-3 shadow-[0_25px_80px_rgba(20,45,25,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-[30px]"
        >
          <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--z-green)]/45 to-transparent" />

          <div className="relative overflow-hidden rounded-[1.55rem]">
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/55 bg-white/[0.62] px-4 py-2 text-xs font-medium text-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              Gulshan-2 · Dhaka
            </div>

            <div className="h-[320px] w-full md:h-[400px]">
              <iframe
                title="ZUNOKS Office Location"
                src="https://www.google.com/maps?q=House%2035%2FB%2C%20Road%2063%2C%20Gulshan-2%2C%20Dhaka%201212%2C%20Bangladesh&z=16&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[var(--z-orange)]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
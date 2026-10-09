"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Clients", href: "/clients" },
  { label: "Insights", href: "/insights" },
  { label: "Work With Us", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const expertiseLinks = [
  {
    label: "Strategic Interventions",
    href: "/services/strategic-interventions",
  },
  {
    label: "Human Resources",
    href: "/services/human-resources",
  },
  {
    label: "Executive Search",
    href: "/services/executive-search",
  },
  {
    label: "Executive Coaching",
    href: "/services/executive-coaching",
  },
  {
    label: "Gamified Recruitment",
    href: "/services/gamified-recruitment",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#f6f6f2] px-3 pb-5 pt-40 sm:px-5 lg:px-7 lg:pb-7 lg:pt-48">
      <div className="relative mx-auto max-w-[1500px]">

        {/* BLACK BASE */}
        <div className="relative min-h-[570px] overflow-visible rounded-[22px] bg-[#050505] px-6 pb-7 pt-[178px] text-white sm:px-10 lg:min-h-[600px] lg:px-[72px] lg:pt-[190px]">

          {/* FLOATING CTA CARD */}
          <div className="absolute left-1/2 top-0 z-20 w-[86%] -translate-x-1/2 -translate-y-[44%] overflow-hidden rounded-[18px] border border-white/[0.09] bg-[#111311] shadow-[0_28px_70px_rgba(0,0,0,0.28)]">

            <div className="relative grid min-h-[285px] lg:grid-cols-[0.53fr_0.47fr] lg:min-h-[305px]">

              {/* LEFT CONTENT */}
              <div className="relative z-20 flex flex-col justify-center px-7 py-9 sm:px-10 lg:px-12">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--z-green)]">
                  Start a Conversation
                </p>

                <h2 className="mt-4 max-w-[11ch] text-[clamp(2rem,3.4vw,3.65rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white">
                  Transform complexity into momentum.
                </h2>

                <p className="mt-4 max-w-[29rem] text-[0.83rem] leading-6 text-white/45">
                  Practical, senior-led consulting across strategy, people,
                  operations and transformation.
                </p>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex w-fit items-center gap-2.5 rounded-md border border-white bg-white px-5 py-3 text-[0.78rem] font-semibold text-black transition-all duration-300 hover:border-[var(--z-green)] hover:bg-[var(--z-green)] hover:text-white"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                >
                  <span>Get started</span>

                  <ArrowRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* EARTH VISUAL */}
              <div className="relative hidden overflow-hidden lg:block">

                {/* green atmospheric glow */}
                <div className="pointer-events-none absolute right-[5%] top-[8%] h-[17rem] w-[17rem] rounded-full bg-[var(--z-green)] opacity-[0.07] blur-[105px]" />

                {/* orange atmospheric glow */}
                <div className="pointer-events-none absolute right-[22%] top-[4%] h-[12rem] w-[12rem] rounded-full bg-[var(--z-orange)] opacity-[0.05] blur-[90px]" />

                {/* EARTH — MOVED UP */}
                <div className="absolute bottom-[4%] -right-[17%] h-[150%] w-[132%] rotate-[-11deg]">
                  <Image
                    src="/images/footer/earth-horizon.png"
                    alt="Earth horizon"
                    fill
                    sizes="45vw"
                    className="object-contain object-bottom-right"
                  />
                </div>

                {/* left-side blending */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#111311_0%,rgba(17,19,17,0.94)_8%,rgba(17,19,17,0.58)_27%,rgba(17,19,17,0.16)_50%,transparent_72%)]" />

                {/* subtle vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

                {/* subtle decorative orbit */}
                <div className="pointer-events-none absolute -right-[10%] top-[6%] aspect-square w-[72%] rounded-full border border-white/[0.07]" />

                <div className="pointer-events-none absolute -right-[5%] top-[11%] aspect-square w-[63%] rounded-full border border-dashed border-white/[0.055]" />

                <div className="pointer-events-none absolute right-[18%] top-[11%] h-2 w-2 rounded-full bg-[var(--z-orange)] shadow-[0_0_18px_rgba(239,125,34,0.7)]" />

                <div className="pointer-events-none absolute bottom-[19%] right-[33%] h-2 w-2 rounded-full bg-[var(--z-green)] shadow-[0_0_18px_rgba(49,155,66,0.65)]" />
              </div>
            </div>
          </div>

          {/* MAIN FOOTER */}
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.75fr_0.7fr_0.9fr_0.65fr] lg:gap-12">

            {/* BRAND */}
            <div>
              <Link
                href="/"
                aria-label="ZUNOKS Home"
                className="inline-flex"
              >
                <Image
                  src="/images/logo/zunoks-logo.png"
                  alt="ZUNOKS — Inspire to Innovate"
                  width={777}
                  height={249}
                  className="h-auto w-[122px]"
                />
              </Link>

              <p className="mt-5 max-w-[20rem] text-[0.76rem] leading-5 text-white/42">
                Senior-led management consulting across strategy, people,
                leadership, operations, transformation and talent.
              </p>

              <address className="mt-6 max-w-[18rem] not-italic text-[0.75rem] leading-[1.55] text-white/48">
                Unit C1, 3rd Floor,
                <br />
                House 35/B, Road 63,
                <br />
                Gulshan-2, Dhaka 1212,
                <br />
                Bangladesh
              </address>

              <div className="mt-7 grid max-w-[24rem] grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.12em] text-white/28">
                    Phone number
                  </p>

                  <a
                    href="tel:+8809678224224"
                    className="mt-2 flex items-center gap-2 text-[0.73rem] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <Phone
                      size={12}
                      strokeWidth={1.7}
                      className="text-[var(--z-green)]"
                    />

                    +880 9678 224224
                  </a>
                </div>

                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.12em] text-white/28">
                    Email
                  </p>

                  <a
                    href="mailto:zunoks.consulting@zunoks.com"
                    className="mt-2 flex items-center gap-2 text-[0.73rem] text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <Mail
                      size={12}
                      strokeWidth={1.7}
                      className="text-[var(--z-orange)]"
                    />

                    zunoks.consulting@zunoks.com
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <p className="text-[0.62rem] font-medium text-white/35">
                Quick links
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-[0.72rem] text-white/66 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* EXPERTISE */}
            <div>
              <p className="text-[0.62rem] font-medium text-white/35">
                Expertise
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {expertiseLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-[0.72rem] leading-5 text-white/66 transition-colors duration-300 hover:text-[var(--z-green)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* LEGAL */}
            <div>
              <p className="text-[0.62rem] font-medium text-white/35">
                Legal
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {legalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-[0.72rem] text-white/66 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <p className="text-[0.62rem] font-medium text-white/35">
                  Recruitment
                </p>

                <a
                  href="mailto:recruitment@zunoks.com"
                  className="mt-3 block text-[0.72rem] leading-5 text-white/66 transition-colors duration-300 hover:text-[var(--z-orange)]"
                >
                  recruitment@
                  <br />
                  zunoks.com
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <p className="text-[0.58rem] tracking-[0.02em] text-white/28">
              © ZUNOKS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type AboutPageCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export default function AboutPageCTA({
  eyebrow = "Continue the journey",
  title,
  description,
  href,
  buttonLabel,
}: AboutPageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0e0b] px-[var(--page-gutter)] py-[clamp(3.5rem,6vw,6rem)] text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--z-green)] opacity-[0.12] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-28 right-[8%] h-72 w-72 rounded-full bg-[var(--z-orange)] opacity-[0.10] blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-[var(--container-wide)] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[var(--z-orange)]" />

            <span className="text-[0.61rem] font-semibold uppercase tracking-[0.2em] text-white/40">
              {eyebrow}
            </span>
          </div>

          <h2 className="mt-5 max-w-[13ch] text-[clamp(2.8rem,5vw,5.6rem)] font-medium leading-[0.9] tracking-[-0.065em]">
            {title}
          </h2>

          <p className="mt-5 max-w-[42rem] text-sm leading-7 text-white/45">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className="group inline-flex w-fit items-center gap-5 rounded-full border border-white/15 bg-white/[0.08] p-1.5 pl-5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-500 hover:border-[var(--z-green)] hover:bg-[var(--z-green)]"
        >
          <span>{buttonLabel}</span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </span>
        </Link>
      </div>
    </section>
  );
}
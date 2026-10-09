"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logoMaskRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const greenPanelRef = useRef<HTMLDivElement>(null);
  const orangePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, {
        yPercent: 115,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(greenPanelRef.current, {
        yPercent: 100,
      });

      gsap.set(orangePanelRef.current, {
        yPercent: 100,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
        onComplete,
      });

      tl.to(logoRef.current, {
        yPercent: 0,
        duration: 0.9,
      })
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
          },
          "-=0.35",
        )
        .to(
          greenPanelRef.current,
          {
            yPercent: 0,
            duration: 0.7,
            ease: "power4.inOut",
          },
          "+=0.25",
        )
        .to(
          orangePanelRef.current,
          {
            yPercent: 0,
            duration: 0.7,
            ease: "power4.inOut",
          },
          "-=0.58",
        )
        .to(
          rootRef.current,
          {
            yPercent: -100,
            duration: 0.95,
            ease: "power4.inOut",
          },
          "+=0.05",
        );
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[1000] overflow-hidden bg-black text-white"
    >
      <div
        ref={greenPanelRef}
        className="absolute inset-x-0 bottom-0 h-full bg-[var(--z-green)]"
      />

      <div
        ref={orangePanelRef}
        className="absolute inset-x-0 bottom-0 h-full bg-[var(--z-orange)]"
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="flex w-full max-w-[720px] flex-col items-center text-center">
          <div
            ref={logoMaskRef}
            className="overflow-hidden pb-2"
          >
            <div
              ref={logoRef}
              className="flex w-[clamp(12.5rem,32vw,16.25rem)] justify-center"
            >
              <Image
                src="/images/logo/zunoks-logo.png"
                alt="ZUNOKS — Inspire to Innovate"
                width={777}
                height={249}
                priority
                sizes="(max-width: 768px) 200px, 260px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-8 h-px w-full max-w-[280px] overflow-hidden bg-white/15">
            <div
              ref={lineRef}
              className="h-full w-full bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

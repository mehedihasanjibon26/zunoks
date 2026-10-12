"use client";

import {
  ReactNode,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  const wrapperRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const ctx = gsap.context(() => {
      gsap.set(wrapper, {
        y: 110,
        scale: 0.985,
        borderRadius: "34px 34px 0 0",
        transformOrigin: "center top",
      });

      gsap.to(wrapper, {
        y: 0,
        scale: 1,
        borderRadius: "0px 0px 0px 0px",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 94%",
          end: "top 58%",
          scrub: 1.25,
          invalidateOnRefresh: true,
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative z-20 overflow-hidden shadow-[0_-35px_80px_rgba(0,0,0,0.10)] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

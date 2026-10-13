"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1,
      autoRaf: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    let hashFrame = 0;

    const scrollToHash = () => {
      window.cancelAnimationFrame(hashFrame);
      hashFrame = window.requestAnimationFrame(() => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        const target = id ? document.getElementById(id) : null;

        if (target) {
          lenis.scrollTo(target);
        }
      });
    };

    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("zunoks:about-hash-ready", scrollToHash);

    ScrollTrigger.refresh();

    return () => {
      window.cancelAnimationFrame(hashFrame);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("zunoks:about-hash-ready", scrollToHash);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

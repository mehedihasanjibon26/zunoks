"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

import Preloader from "./Preloader";

type PreloaderControllerProps = {
  children: React.ReactNode;
};

export default function PreloaderController({
  children,
}: PreloaderControllerProps) {
  const contentRef =
    useRef<HTMLDivElement>(null);

  const [showPreloader, setShowPreloader] =
    useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const content = contentRef.current;

    if (content) {
      /*
       * IMPORTANT:
       * Do not apply transform / filter to the
       * entire website wrapper.
       *
       * Hero uses GSAP ScrollTrigger + pinning,
       * which can conflict with a transformed
       * parent.
       */
      gsap.set(content, {
        opacity: 0.68,
        visibility: "visible",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleRevealStart = () => {
    const content = contentRef.current;

    if (!content) return;

    gsap.killTweensOf(content);

    /*
     * Soft landing-page arrival while the final
     * orange preloader panel moves upward.
     */
    gsap.to(content, {
      opacity: 1,
      duration: 1.25,
      ease: "power3.out",
    });
  };

  const handleComplete = () => {
    const content = contentRef.current;

    if (content) {
      /*
       * Explicitly leave the website in a clean,
       * normal DOM state after the preloader.
       */
      gsap.set(content, {
        opacity: 1,
        clearProps: "willChange",
      });
    }

    setShowPreloader(false);

    document.body.style.overflow = "";

    /*
     * Recalculate GSAP layouts after the
     * preloader has completely disappeared.
     */
    window.requestAnimationFrame(() => {
      window.dispatchEvent(
        new Event("resize"),
      );
    });
  };

  return (
    <>
      {/* MAIN WEBSITE */}
      <div
        ref={contentRef}
        className="relative"
        style={{
          visibility: "visible",
          opacity: 0.68,
        }}
      >
        {children}
      </div>

      {/* PRELOADER */}
      {showPreloader && (
        <Preloader
          onRevealStart={handleRevealStart}
          onComplete={handleComplete}
        />
      )}
    </>
  );
}

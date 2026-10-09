"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Search,
} from "lucide-react";
import gsap from "gsap";

type CursorMode =
  | "default"
  | "link"
  | "menu"
  | "search"
  | "button";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine) and (hover: hover)",
    );

    const updateState = () => {
      setEnabled(mediaQuery.matches);
    };

    updateState();

    mediaQuery.addEventListener("change", updateState);

    return () => {
      mediaQuery.removeEventListener("change", updateState);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    gsap.set(dot, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    const moveCursorX = gsap.quickTo(cursor, "x", {
      duration: 0.48,
      ease: "power3.out",
    });

    const moveCursorY = gsap.quickTo(cursor, "y", {
      duration: 0.48,
      ease: "power3.out",
    });

    const moveDotX = gsap.quickTo(dot, "x", {
      duration: 0.07,
      ease: "power2.out",
    });

    const moveDotY = gsap.quickTo(dot, "y", {
      duration: 0.07,
      ease: "power2.out",
    });

    const setDefaultState = () => {
      setMode("default");

      gsap.to(cursor, {
        width: 32,
        height: 32,
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "rgba(0,0,0,0.22)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        scale: 1,
        duration: 0.5,
        ease: "power4.out",
      });

      gsap.to(dot, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const setGlassState = (
      nextMode: CursorMode,
      size = 58,
    ) => {
      setMode(nextMode);

      gsap.to(cursor, {
        width: size,
        height: size,
        backgroundColor: "rgba(255,255,255,0.34)",
        borderColor: "rgba(49,155,66,0.34)",
        boxShadow:
          "0 10px 35px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        scale: 1,
        duration: 0.55,
        ease: "power4.out",
      });

      gsap.to(dot, {
        opacity: 0,
        scale: 0,
        duration: 0.22,
      });
    };

    const resolveState = (element: HTMLElement) => {
      const ariaLabel =
        element.getAttribute("aria-label")?.toLowerCase() ?? "";

      if (
        ariaLabel.includes("navigation") ||
        ariaLabel.includes("menu")
      ) {
        setGlassState("menu", 60);
        return;
      }

      if (ariaLabel.includes("search")) {
        setGlassState("search", 60);
        return;
      }

      if (element.tagName === "A") {
        setGlassState("link", 56);
        return;
      }

      if (element.tagName === "BUTTON") {
        setGlassState("button", 56);
        return;
      }

      setDefaultState();
    };

    const handleMouseMove = (event: MouseEvent) => {
      moveCursorX(event.clientX);
      moveCursorY(event.clientY);

      moveDotX(event.clientX);
      moveDotY(event.clientY);

      gsap.to(cursor, {
        opacity: 1,
        duration: 0.2,
        overwrite: "auto",
      });

      if (mode === "default") {
        gsap.to(dot, {
          opacity: 1,
          duration: 0.2,
          overwrite: "auto",
        });
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) return;

      if (
        target.closest(
          "input, textarea, select, option",
        )
      ) {
        setDefaultState();
        return;
      }

      const interactive = target.closest<HTMLElement>(
        "a, button, [data-cursor]",
      );

      if (!interactive) {
        setDefaultState();
        return;
      }

      resolveState(interactive);
    };

    const handleMouseOut = (event: MouseEvent) => {
      const relatedTarget = event.relatedTarget as HTMLElement | null;

      if (
        relatedTarget?.closest(
          "a, button, [data-cursor]",
        )
      ) {
        return;
      }

      setDefaultState();
    };

    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.84,
        duration: 0.16,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.8)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, dot], {
        opacity: 0,
        duration: 0.25,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.25,
      });

      if (mode === "default") {
        gsap.to(dot, {
          opacity: 1,
          duration: 0.25,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter,
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
    };
  }, [enabled, mode]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-[32px] w-[32px] items-center justify-center rounded-full border border-black/20"
      >
        {mode === "menu" && (
          <Menu
            size={18}
            strokeWidth={1.8}
            className="text-[var(--z-green)]"
          />
        )}

        {mode === "search" && (
          <Search
            size={18}
            strokeWidth={1.8}
            className="text-[var(--z-green)]"
          />
        )}

        {(mode === "link" || mode === "button") && (
          <ArrowUpRight
            size={18}
            strokeWidth={1.8}
            className="text-[var(--z-green)]"
          />
        )}
      </div>

      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[5px] w-[5px] rounded-full bg-[var(--z-orange)]"
      />
    </>
  );
}
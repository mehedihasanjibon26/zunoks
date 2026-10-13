"use client";

import { useEffect, useLayoutEffect } from "react";

export default function AboutHashNavigation() {
  useLayoutEffect(() => {
    if (window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;

    let secondFrame = 0;
    let scrollTimer = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        scrollTimer = window.setTimeout(() => {
          window.dispatchEvent(new Event("zunoks:about-hash-ready"));
        }, 200);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

type PreloaderControllerProps = {
  children: React.ReactNode;
};

export default function PreloaderController({
  children,
}: PreloaderControllerProps) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleComplete = () => {
    setShowPreloader(false);
    setContentReady(true);
    document.body.style.overflow = "";
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}

      <div
        style={{
          opacity: contentReady ? 1 : 0,
          visibility: contentReady ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </>
  );
}
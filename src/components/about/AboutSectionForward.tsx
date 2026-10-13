"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutSectionForward({ hash }: { hash: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/about#${hash}`);
  }, [hash, router]);

  return null;
}

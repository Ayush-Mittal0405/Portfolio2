"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotionPreference();

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return children;
}

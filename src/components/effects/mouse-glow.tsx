"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 28, stiffness: 120 });
  const smoothY = useSpring(y, { damping: 28, stiffness: 120 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(35,216,255,0.13), transparent 44%)`;

  useEffect(() => {
    const update = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, [x, y]);

  return <motion.div className="pointer-events-none fixed inset-0 z-[2]" style={{ background }} />;
}

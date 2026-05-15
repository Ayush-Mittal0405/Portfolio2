"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorEffects() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.2 });
  const ringY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.2 });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }} />
      <motion.div className="cursor-dot" style={{ x, y }} />
    </>
  );
}

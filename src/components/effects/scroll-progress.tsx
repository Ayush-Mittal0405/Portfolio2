"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyanGlow via-blue-500 to-violetGlow"
      style={{ scaleX, width: "100%" }}
    />
  );
}

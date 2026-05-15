"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1350);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#020712]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
        >
          <div className="relative grid place-items-center">
            <motion.div
              className="absolute h-44 w-44 rounded-full border border-cyanGlow/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-violetGlow/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyanGlow to-violetGlow shadow-glow"
              animate={{ scale: [0.92, 1.08, 0.92], rotate: [0, 14, 0] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="mt-64 font-mono text-xs uppercase tracking-[0.42em] text-cyan-100/80">
              Initializing Interface
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

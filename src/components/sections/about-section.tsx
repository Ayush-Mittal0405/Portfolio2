"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Cpu, Orbit, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";
import { aboutStats } from "@/constants/profile";

const SceneCanvas = dynamic(() => import("@/components/three/scene-canvas").then((mod) => mod.SceneCanvas), {
  ssr: false,
});
const TechOrbitScene = dynamic(
  () => import("@/components/three/tech-orbit-scene").then((mod) => mod.TechOrbitScene),
  { ssr: false },
);

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel neon-border relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyanGlow/15 blur-3xl" />
            <div className="relative h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
              <SceneCanvas className="absolute inset-0" camera={[0, 0, 5.2]}>
                <TechOrbitScene />
              </SceneCanvas>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cyanGlow/15 text-cyan-100">
                    <Orbit className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Tech Stack Orbit</p>
                    <p className="text-sm text-slate-400">AI, CV, VR, IoT, R3F, UX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <Cpu className="h-4 w-4" /> About
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
              Engineering future-facing systems with product taste.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Ayush Mittal is a Computer Engineering student passionate about AI, computer
                vision, full stack development, VR/AR, Raspberry Pi, IoT, and modern UI/UX.
              </p>
              <p>
                His work focuses on building real-world AI systems, experimenting with immersive
                technologies, and shaping smart automation projects into interfaces that feel
                technical, fast, and futuristic.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutStats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.2 + index * 0.07}>
                <motion.div
                  whileHover={{ y: -5, rotateX: 4, rotateY: -4 }}
                  className="glass-panel rounded-2xl p-5"
                >
                  <Sparkles className="mb-4 h-5 w-5 text-cyanGlow" />
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-3xl font-black text-white"
                  />
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

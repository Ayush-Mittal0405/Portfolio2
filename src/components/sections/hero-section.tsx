"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CheckCircle2, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { heroStats, profile, socialLinks } from "@/constants/profile";
import { fadeUp, staggerContainer } from "@/animations/variants";
import { Badge } from "@/components/ui/badge";

const SceneCanvas = dynamic(() => import("@/components/three/scene-canvas").then((mod) => mod.SceneCanvas), {
  ssr: false,
});
const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid-cyan bg-[length:58px_58px] opacity-[0.08] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <motion.div
        className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-10 !py-0 lg:grid-cols-[1.02fr_0.98fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-10">
          <motion.div variants={fadeUp}>
            <Badge className="mb-6 border-cyanGlow/30 bg-cyanGlow/10 text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              Available for ambitious builds
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-gradient max-w-4xl text-6xl font-black leading-[0.95] sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-xl font-semibold text-cyan-100 sm:text-2xl">
            {profile.role}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.headline}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button asChild size="lg" className="h-12">
                <a href="#projects">
                  View Projects <ArrowRight />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="secondary" className="h-12">
                <a href="#contact">
                  Contact Me <Mail />
                </a>
              </Button>
            </Magnetic>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const fallback = link.label === "GitHub" ? Github : link.label === "LinkedIn" ? Linkedin : Mail;
              const SocialIcon = Icon ?? fallback;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/7 text-slate-300 transition hover:border-cyanGlow/50 hover:text-white hover:shadow-glow"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative min-h-[460px] lg:min-h-[620px]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyanGlow/10 via-transparent to-violetGlow/10 blur-2xl" />
          <SceneCanvas className="absolute inset-0">
            <HeroScene />
          </SceneCanvas>
          <div className="pointer-events-none absolute inset-x-4 bottom-6 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 + index * 0.1 }}
                className="glass-panel rounded-2xl p-4"
              >
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="absolute right-5 top-10 hidden rounded-2xl border border-cyanGlow/20 bg-slate-950/50 p-4 shadow-glow backdrop-blur-xl md:block">
            <div className="flex items-center gap-3 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Neural UI online
            </div>
          </div>
          <div className="absolute left-5 top-24 hidden rounded-2xl border border-violetGlow/20 bg-slate-950/50 p-4 shadow-violet backdrop-blur-xl md:block">
            <div className="flex items-center gap-3 text-sm text-violet-100">
              <CheckCircle2 className="h-4 w-4" />
              Edge AI ready
            </div>
          </div>
        </motion.div>
      </motion.div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-300 shadow-glass backdrop-blur-xl transition hover:text-white md:grid"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

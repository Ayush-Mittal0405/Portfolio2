"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ContactSection } from "@/components/sections/contact-section";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CursorEffects } from "@/components/effects/cursor-effects";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { MouseGlow } from "@/components/effects/mouse-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { SmoothScrollProvider } from "@/components/effects/smooth-scroll-provider";

export function SiteShell() {
  const auroraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!auroraRef.current) return;

    const tween = gsap.to(auroraRef.current, {
      rotate: 8,
      scale: 1.08,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />
      <CursorEffects />
      <div ref={auroraRef} className="aurora" />
      <div className="noise-overlay" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

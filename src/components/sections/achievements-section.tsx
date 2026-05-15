"use client";

import { Award } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";
import { achievements } from "@/constants/profile";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden">
      <div className="section-shell">
        <Reveal className="text-center">
          <span className="eyebrow">
            <Award className="h-4 w-4" /> Achievements
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            Momentum across hackathons, research, and advanced prototypes.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Reveal key={achievement.label} delay={index * 0.05}>
                <div className="glass-panel relative h-full overflow-hidden rounded-3xl p-6">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyanGlow/10 blur-2xl" />
                  <Icon className="relative h-7 w-7 text-cyanGlow" />
                  <AnimatedCounter
                    value={achievement.value}
                    suffix={achievement.suffix}
                    className="relative mt-8 block text-4xl font-black text-white"
                  />
                  <p className="relative mt-3 text-sm leading-6 text-slate-300">{achievement.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

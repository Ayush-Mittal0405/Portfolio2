"use client";

import { motion } from "framer-motion";
import { Route } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/constants/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-shell">
        <Reveal className="text-center">
          <span className="eyebrow">
            <Route className="h-4 w-4" /> Experience
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            A technical timeline shaped by experiments that become systems.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyanGlow via-violetGlow to-transparent md:left-1/2" />
          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <motion.article
                    whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                    className={`relative grid gap-6 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>div]:col-start-2"}`}
                  >
                    <div className="glass-panel ml-14 rounded-3xl p-6 md:ml-0">
                      <div className="mb-4 flex items-center gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyanGlow/12 text-cyan-100 ring-1 ring-cyanGlow/20">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                    </div>
                    <span className="absolute left-0 top-8 grid h-10 w-10 place-items-center rounded-full border border-cyanGlow/30 bg-slate-950 text-sm font-bold text-cyan-100 shadow-glow md:left-1/2 md:-translate-x-1/2">
                      {index + 1}
                    </span>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { skillGroups } from "@/constants/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="section-shell">
        <Reveal className="text-center">
          <span className="eyebrow">
            <Code2 className="h-4 w-4" /> Skills
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            A stack built for intelligent, interactive products.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.category} delay={groupIndex * 0.05}>
                <motion.article
                  whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
                  className="glass-panel group h-full rounded-3xl p-6 transition hover:border-cyanGlow/35 hover:shadow-glow"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyanGlow/12 text-cyan-100 ring-1 ring-cyanGlow/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold text-white">{group.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-slate-200">{skill.name}</span>
                          <span className="font-mono text-cyan-100">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyanGlow via-blue-500 to-violetGlow"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

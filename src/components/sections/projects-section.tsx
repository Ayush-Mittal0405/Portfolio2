"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3, Radio, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/constants/profile";
import { cn, isPlaceholderUrl } from "@/lib/utils";

const SceneCanvas = dynamic(() => import("@/components/three/scene-canvas").then((mod) => mod.SceneCanvas), {
  ssr: false,
});
const ProjectHologram = dynamic(
  () => import("@/components/three/project-hologram").then((mod) => mod.ProjectHologram),
  { ssr: false },
);

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violetGlow/10 blur-3xl" />
      <div className="section-shell">
        <Reveal className="text-center">
          <span className="eyebrow">
            <Layers3 className="h-4 w-4" /> Projects
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            Product-grade prototypes across AI, health, VR, and security research.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={index * 0.04}>
                <Dialog>
                  <motion.article
                    whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 ? 2 : -2 }}
                    className={cn(
                      "glass-panel group relative h-full overflow-hidden rounded-3xl p-6 transition duration-300 hover:border-cyanGlow/35",
                      project.flagship ? "lg:col-span-2" : "",
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1 bg-gradient-to-r", project.accent)} />
                    <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyanGlow/10 blur-3xl transition group-hover:bg-cyanGlow/20" />
                    <div className={cn("grid gap-6", project.flagship ? "lg:grid-cols-[1fr_0.8fr]" : "")}>
                      <div className="relative z-10">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/8 text-cyan-100 ring-1 ring-white/10">
                            <Icon className="h-5 w-5" />
                          </span>
                          <Badge className="border-cyanGlow/20 bg-cyanGlow/8 text-cyan-100">{project.eyebrow}</Badge>
                          {project.flagship ? (
                            <Badge className="border-violetGlow/30 bg-violetGlow/12 text-violet-100">
                              Flagship Build
                            </Badge>
                          ) : null}
                        </div>
                        <h3 className="text-2xl font-black text-white sm:text-3xl">{project.title}</h3>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{project.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} className="bg-white/6">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <DialogTrigger asChild>
                            <Button variant="secondary">
                              Live Preview <Radio />
                            </Button>
                          </DialogTrigger>
                          <Button asChild variant="outline">
                            <a href={project.repoUrl} target="_blank" rel="noreferrer">
                              GitHub <Github />
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55">
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40", project.accent)} />
                        <div className="absolute inset-0 bg-grid-cyan bg-[length:32px_32px] opacity-20" />
                        {project.flagship ? (
                          <SceneCanvas className="absolute inset-0" camera={[0, 0, 4.7]}>
                            <ProjectHologram />
                          </SceneCanvas>
                        ) : (
                          <div className="absolute inset-0 grid place-items-center">
                            <motion.div
                              className="grid h-28 w-28 place-items-center rounded-[2rem] border border-white/15 bg-white/10 shadow-glow backdrop-blur-xl"
                              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Icon className="h-10 w-10 text-white" />
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>

                  <DialogContent>
                    <DialogHeader>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyanGlow/12 text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </span>
                        <Badge>{project.eyebrow}</Badge>
                      </div>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                      <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", project.accent)} />
                        <div className="absolute inset-0 bg-grid-cyan bg-[length:28px_28px] opacity-20" />
                        <SceneCanvas className="absolute inset-0" camera={[0, 0, 4.8]}>
                          <ProjectHologram />
                        </SceneCanvas>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Core Features</h4>
                        <ul className="mt-4 space-y-3">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                              <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-cyanGlow" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech}>{tech}</Badge>
                          ))}
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <Button asChild>
                            <a href={project.demoUrl} target="_blank" rel="noreferrer">
                              {isPlaceholderUrl(project.demoUrl) ? "Preview Placeholder" : "Open Demo"} <ArrowUpRight />
                            </a>
                          </Button>
                          <Button asChild variant="secondary">
                            <a href={project.repoUrl} target="_blank" rel="noreferrer">
                              Repository <Github />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

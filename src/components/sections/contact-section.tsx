"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { profile, socialLinks } from "@/constants/profile";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { message?: string };

    setState(response.ok ? "success" : "error");
    setMessage(result.message ?? "Something went wrong. Please try again.");
    if (response.ok) form.reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-cyanGlow/10 to-transparent" />
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">
              <Mail className="h-4 w-4" /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
              Let’s build something intelligent, immersive, and useful.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Reach out for AI prototypes, full stack products, computer vision ideas, VR/AR experiments,
              IoT automation, or futuristic interface collaborations.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button key={link.label} asChild variant="secondary">
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <link.icon /> {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <motion.form
            onSubmit={onSubmit}
            whileHover={{ y: -4 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violetGlow/15 blur-3xl" />
            <div className="relative mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-cyanGlow/12 text-cyan-100">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-white">Signal Ayush</h3>
                <p className="text-sm text-slate-400">API stub ready for a live mail provider.</p>
              </div>
            </div>
            <div className="relative grid gap-4">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <Input name="name" placeholder="Your name" autoComplete="name" required minLength={2} />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <Input name="email" placeholder="you@example.com" type="email" autoComplete="email" required />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <Textarea name="message" placeholder="Tell me about your idea..." required minLength={10} />
              </label>
              <Button type="submit" size="lg" className="h-12 justify-self-start" disabled={state === "loading"}>
                {state === "loading" ? "Sending..." : "Send Message"} <Send />
              </Button>
              {message ? (
                <p
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    state === "success"
                      ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
                      : "border-red-300/25 bg-red-300/10 text-red-100"
                  }`}
                  role="status"
                >
                  {message}
                </p>
              ) : null}
              <p className="text-xs leading-5 text-slate-500">
                Current placeholder email: {profile.email}. Update central links in the profile constants.
              </p>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
}

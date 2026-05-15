"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile, socialLinks } from "@/constants/profile";
import { Button } from "@/components/ui/button";
import { TooltipLabel } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 140], [18, 10]);
  const width = useTransform(scrollY, [0, 160], ["min(1120px, calc(100% - 2rem))", "min(940px, calc(100% - 2rem))"]);

  const close = () => setOpen(false);

  return (
    <motion.header className="fixed left-0 right-0 top-0 z-50 flex justify-center" style={{ y }}>
      <motion.nav
        style={{ width }}
        className="glass-panel flex h-16 items-center justify-between rounded-full px-3 pl-5"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyanGlow to-violetGlow text-sm font-black text-slate-950 shadow-glow">
            AM
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((item) => (
            <TooltipLabel key={item.label} label={item.label}>
              <Button asChild variant="ghost" size="icon" aria-label={item.label}>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <item.icon />
                </a>
              </Button>
            </TooltipLabel>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            className={cn(
              "glass-panel absolute top-20 w-[min(420px,calc(100%-2rem))] rounded-2xl p-3 lg:hidden",
            )}
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

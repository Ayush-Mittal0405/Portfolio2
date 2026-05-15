import { socialLinks } from "@/constants/profile";

export function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-8">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-cyanGlow/70 to-transparent shadow-glow" />
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyanGlow to-violetGlow text-sm font-black text-slate-950 shadow-glow">
              AM
            </span>
            <span className="font-semibold text-white">Ayush Mittal</span>
          </a>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ayush Mittal. Built for the future web.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-slate-400 transition hover:text-cyan-100"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

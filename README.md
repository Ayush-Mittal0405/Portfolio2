# Ayush Mittal Futuristic Portfolio

A cinematic personal portfolio for Ayush Mittal, built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, Drei, GSAP, Lenis, shadcn-style local UI primitives, and Lucide Icons.

## Features

- Immersive dark glassmorphism interface with neon cyan, blue, and violet accents.
- Responsive sticky navbar, animated mobile menu, smooth scrolling, custom cursor, loading screen, and scroll progress.
- React Three Fiber hero scene with particle field, holographic sphere, floating objects, animated grid floor, and mouse-reactive lighting.
- Animated About, Skills, Projects, Experience, Achievements, Contact, and Footer sections.
- Project showcase with premium 3D hover cards, modal previews, badges, repository/demo CTAs, and centralized placeholder links.
- Typed contact API stub at `POST /api/contact` with validation and a clear TODO for connecting Resend, EmailJS, or another provider.
- SEO metadata, reduced-motion support, accessible focus states, and mobile-friendly fallbacks.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Customize Content

Update `src/constants/profile.ts` for:

- Name, role, headline, email, GitHub, LinkedIn
- Navigation links
- Hero/about stats
- Skills
- Projects and placeholder demo/repository URLs
- Timeline and achievement counters

## Contact Form

The contact form currently posts to `src/app/api/contact/route.ts`. It validates the payload and returns a simulated success response.

To make it live:

1. Add provider credentials to Vercel environment variables.
2. Replace the TODO in `POST /api/contact` with a server-side email provider call.
3. Keep validation and secrets server-side.

## Vercel Deployment

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js framework settings.
4. Add email provider environment variables later if the contact form is made live.
5. Deploy.

## Performance Notes

- Three.js sections are lazy-loaded client components.
- Canvas DPR and particle counts are reduced on mobile.
- Reduced-motion preferences disable smooth scroll and simplify motion.
- Heavy visuals are code-generated, avoiding large media assets.

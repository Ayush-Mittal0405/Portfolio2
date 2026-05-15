import {
  Activity,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Cpu,
  Database,
  Eye,
  Figma,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Network,
  PanelsTopLeft,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Ayush Mittal",
  role: "Computer Engineering Student | AI & Full Stack Developer",
  headline:
    "Building immersive AI-powered experiences, intelligent systems, and futuristic web applications.",
  email: "ayushmittal0456@gmail.com",
  github: "https://github.com/Ayush-Mittal0405",
  linkedin: "https://www.linkedin.com/in/ayush-mittal06/",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const heroStats = [
  { value: "06+", label: "Advanced Projects" },
  { value: "05", label: "Core Domains" },
  { value: "24/7", label: "Learning Mode" },
];

export const aboutStats = [
  { value: 6, suffix: "+", label: "Technical prototypes" },
  { value: 5, suffix: "", label: "Innovation domains" },
  { value: 3, suffix: "+", label: "Immersive systems" },
];

export const skillGroups = [
  {
    category: "Frontend",
    icon: PanelsTopLeft,
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 84 },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Firebase", level: 86 },
      { name: "APIs", level: 84 },
    ],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    skills: [
      { name: "YOLOv5", level: 86 },
      { name: "Computer Vision", level: 88 },
      { name: "Python", level: 84 },
      { name: "OpenCV", level: 82 },
    ],
  },
  {
    category: "Hardware / IoT",
    icon: Cpu,
    skills: [
      { name: "Raspberry Pi", level: 86 },
      { name: "Arduino", level: 78 },
      { name: "IoT Systems", level: 82 },
    ],
  },
  {
    category: "Design",
    icon: Figma,
    skills: [
      { name: "Figma", level: 80 },
      { name: "UI / UX", level: 86 },
      { name: "Motion Design", level: 78 },
    ],
  },
];

export const projects = [
  {
    title: "AI-Based Algae Detection System",
    eyebrow: "Flagship AI Project",
    description:
      "An AI-powered algae detection platform using YOLOv5, OpenCV, and Raspberry Pi deployment for real-time environmental monitoring.",
    features: [
      "Computer vision detection pipeline",
      "Custom dataset training workflow",
      "Real-time object detection",
      "Raspberry Pi edge deployment",
    ],
    tech: ["Python", "YOLOv5", "OpenCV", "Raspberry Pi"],
    icon: Eye,
    accent: "from-cyan-400 via-blue-500 to-violet-500",
    demoUrl: "https://drive.google.com/file/d/1nsnQ26zYqUfDxoYLN5NxSrZoGFarhnwf/view?usp=sharing",
    repoUrl: "https://github.com/example-ayush/algae-detection",
    flagship: true,
  },
  {
    title: "Agentic AI OCR Translation System",
    eyebrow: "Intelligent Documents",
    description:
      "Advanced OCR and AI translation architecture focused on preserving document formatting, layout, fonts, and multilingual meaning.",
    features: [
      "OCR processing pipeline",
      "AI translation orchestration",
      "Layout and typography preservation",
      "Dockerized processing architecture",
    ],
    tech: ["AI", "OCR", "Docker", "Translation"],
    icon: Bot,
    accent: "from-violet-400 via-fuchsia-500 to-cyan-400",
    demoUrl: "https://example.com/ocr-translation",
    repoUrl: "https://github.com/example-ayush/ocr-translation",
  },
  {
    title: "MediLogs",
    eyebrow: "Healthcare Platform",
    description:
      "Smart healthcare form platform with dynamic appointment-based forms, modern healthcare workflows, and a hackathon-ready user experience.",
    features: [
      "Dynamic appointment-based forms",
      "Smart healthcare workflows",
      "Modern responsive interface",
      "Hackathon-ready architecture",
    ],
    tech: ["React", "Firebase", "Web APIs"],
    icon: Activity,
    accent: "from-sky-400 via-cyan-400 to-emerald-300",
    demoUrl: "https://example.com/medilogs",
    repoUrl: "https://github.com/example-ayush/medilogs",
  },
  {
    title: "PackMate",
    eyebrow: "Collaborative Planning",
    description:
      "A collaborative packing checklist platform for group events with Firebase Authentication, event management, and responsive UI.",
    features: [
      "Group event packing",
      "Smart checklist system",
      "Firebase Authentication",
      "Event management",
    ],
    tech: ["React", "Firebase", "Auth", "Responsive UI"],
    icon: Layers3,
    accent: "from-blue-400 via-indigo-500 to-purple-500",
    demoUrl: "https://example.com/packmate",
    repoUrl: "https://github.com/example-ayush/packmate",
  },
  {
    title: "VR Apartment Tour App",
    eyebrow: "Immersive Real Estate",
    description:
      "An immersive Quest 2 apartment walkthrough system with VR streaming, mobile viewing, and real estate visualization workflows.",
    features: [
      "Virtual apartment touring",
      "VR streaming",
      "Remote mobile viewing",
      "Real estate visualization",
    ],
    tech: ["VR", "Android", "Quest 2", "Streaming"],
    icon: Smartphone,
    accent: "from-indigo-400 via-cyan-500 to-blue-400",
    demoUrl: "https://example.com/vr-apartment",
    repoUrl: "https://github.com/example-ayush/vr-apartment-tour",
  },
  {
    title: "UAC Bypass Educational Research Project",
    eyebrow: "Cybersecurity Research",
    description:
      "A strictly educational system security learning project studying Windows privilege escalation concepts in a controlled research context.",
    features: [
      "Cybersecurity research framing",
      "Educational demonstration only",
      "Windows security concept analysis",
      "Responsible system learning",
    ],
    tech: ["Security Research", "Windows", "Education"],
    icon: ShieldCheck,
    accent: "from-cyan-300 via-slate-300 to-violet-400",
    demoUrl: "https://drive.google.com/file/d/1niArt4l9VJDIXkEBuaDxP6LV0-wUOYOO/view?usp=sharing",
    repoUrl: "https://github.com/example-ayush/security-research",
  },
];

export const timeline = [
  {
    title: "AI Research & Development",
    description:
      "Designing practical AI systems that convert data, documents, and visual inputs into intelligent workflows.",
    icon: BrainCircuit,
  },
  {
    title: "IoT Experimentation",
    description:
      "Building smart automation prototypes with Raspberry Pi, sensors, and edge-friendly software.",
    icon: RadioTower,
  },
  {
    title: "Full Stack Development",
    description:
      "Creating responsive products with React, Firebase, APIs, and clean user-centered interfaces.",
    icon: Workflow,
  },
  {
    title: "VR / AR Exploration",
    description:
      "Experimenting with immersive interfaces for remote walkthroughs, spatial viewing, and 3D interaction.",
    icon: Globe2,
  },
  {
    title: "Computer Vision Projects",
    description:
      "Training and deploying object detection pipelines with YOLOv5, OpenCV, and edge devices.",
    icon: Network,
  },
];

export const achievements = [
  { value: 6, suffix: "+", label: "Advanced technical prototypes", icon: Sparkles },
  { value: 3, suffix: "+", label: "Hackathon-ready builds", icon: Trophy },
  { value: 2, suffix: "+", label: "Research-focused initiatives", icon: GraduationCap },
  { value: 5, suffix: "", label: "AI and immersive domains", icon: BadgeCheck },
];

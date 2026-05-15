import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-mittal-portfolio.vercel.app"),
  title: {
    default: "Ayush Mittal | AI & Full Stack Developer",
    template: "%s | Ayush Mittal",
  },
  description:
    "A futuristic portfolio of Ayush Mittal, Computer Engineering student building AI systems, full stack products, computer vision projects, IoT prototypes, and immersive VR experiences.",
  keywords: [
    "Ayush Mittal",
    "Computer Engineering",
    "AI Developer",
    "Full Stack Developer",
    "Computer Vision",
    "React",
    "Next.js",
    "Raspberry Pi",
    "VR",
  ],
  authors: [{ name: "Ayush Mittal" }],
  creator: "Ayush Mittal",
  openGraph: {
    title: "Ayush Mittal | AI & Full Stack Developer",
    description:
      "Immersive AI-powered experiences, intelligent systems, and futuristic web applications.",
    url: "https://ayush-mittal-portfolio.vercel.app",
    siteName: "Ayush Mittal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Mittal | AI & Full Stack Developer",
    description:
      "Computer Engineering student building AI systems, computer vision tools, IoT prototypes, and immersive interfaces.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

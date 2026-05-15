"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion";

export function SceneCanvas({
  children,
  camera = [0, 0, 7],
  className,
}: {
  children: React.ReactNode;
  camera?: [number, number, number];
  className?: string;
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const reduceMotion = useReducedMotionPreference();

  return (
    <div className={className}>
      <Canvas
        dpr={isMobile ? [1, 1.35] : [1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: camera, fov: isMobile ? 52 : 46 }}
        frameloop={reduceMotion ? "demand" : "always"}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}

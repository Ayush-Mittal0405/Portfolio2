"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

export function ParticleField({ count = 700 }: { count?: number }) {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      values[i * 3] = (Math.random() - 0.5) * 14;
      values[i * 3 + 1] = (Math.random() - 0.5) * 9;
      values[i * 3 + 2] = (Math.random() - 0.5) * 9;
    }
    return values;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.025;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#72eaff"
        size={0.026}
        sizeAttenuation
        depthWrite={false}
        opacity={0.72}
      />
    </Points>
  );
}

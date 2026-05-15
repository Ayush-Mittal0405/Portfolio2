"use client";

import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function ProjectHologram() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.45;
  });

  return (
    <>
      <ambientLight intensity={1.1} />
      <pointLight position={[2, 2, 4]} intensity={4} color="#23d8ff" />
      <Float speed={1.35} floatIntensity={0.45} rotationIntensity={0.22}>
        <group ref={group}>
          <mesh>
            <torusKnotGeometry args={[0.86, 0.22, 170, 18]} />
            <MeshTransmissionMaterial
              color="#7dd3fc"
              transmission={0.72}
              thickness={0.32}
              roughness={0.18}
              chromaticAberration={0.08}
              anisotropy={0.2}
            />
          </mesh>
          <mesh scale={1.65}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
          </mesh>
        </group>
      </Float>
    </>
  );
}

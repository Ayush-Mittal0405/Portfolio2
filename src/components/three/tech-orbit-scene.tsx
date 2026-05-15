"use client";

import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const tech = ["AI", "CV", "VR", "IoT", "R3F", "UX"];

export function TechOrbitScene() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      tech.map((label, index) => {
        const angle = (index / tech.length) * Math.PI * 2;
        return {
          label,
          position: [Math.cos(angle) * 2.15, Math.sin(angle) * 1.05, Math.sin(angle) * 0.9],
        };
      }),
    [],
  );

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35;
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[2, 3, 4]} intensity={4} color="#23d8ff" />
      <group ref={group}>
        <mesh>
          <sphereGeometry args={[0.82, 42, 42]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#23d8ff"
            emissiveIntensity={0.45}
            transparent
            opacity={0.62}
            wireframe
          />
        </mesh>
        {nodes.map((node) => (
          <Float key={node.label} speed={1.35} floatIntensity={0.25}>
            <group position={node.position as [number, number, number]}>
              <mesh>
                <sphereGeometry args={[0.2, 24, 24]} />
                <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.4} />
              </mesh>
              <Text
                position={[0, -0.42, 0]}
                fontSize={0.18}
                anchorX="center"
                anchorY="middle"
                color="#dff9ff"
              >
                {node.label}
              </Text>
            </group>
          </Float>
        ))}
      </group>
    </>
  );
}

"use client";

import { Float, MeshDistortMaterial, Torus } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ParticleField } from "@/components/three/particle-field";

function HolographicSphere() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const reduceMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * 0.32;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.42) * 0.16;
    if (mesh.current) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.45, 24]} />
        <MeshDistortMaterial
          color="#36e7ff"
          distort={0.34}
          speed={1.4}
          roughness={0.18}
          metalness={0.35}
          transparent
          opacity={0.62}
          emissive="#1fb6ff"
          emissiveIntensity={0.42}
        />
      </mesh>
      <Torus args={[1.85, 0.012, 16, 160]} rotation={[Math.PI / 2.5, 0.2, 0]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.55} />
      </Torus>
      <Torus args={[2.05, 0.008, 16, 160]} rotation={[1.1, 0.7, 0.6]}>
        <meshBasicMaterial color="#23d8ff" transparent opacity={0.42} />
      </Torus>
    </group>
  );
}

function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { position: [-3.2, 1.7, -0.8], color: "#8b5cf6", geometry: "box" },
      { position: [3.3, 1.2, -0.5], color: "#23d8ff", geometry: "octa" },
      { position: [-2.4, -1.8, 0.4], color: "#60a5fa", geometry: "tetra" },
      { position: [2.4, -1.5, 0.2], color: "#a78bfa", geometry: "box" },
    ],
    [],
  );

  return (
    <>
      {shapes.map((shape, index) => (
        <Float key={`${shape.color}-${index}`} speed={1.4 + index * 0.18} rotationIntensity={0.85} floatIntensity={0.7}>
          <mesh position={shape.position as [number, number, number]} scale={0.28 + index * 0.035}>
            {shape.geometry === "box" ? (
              <boxGeometry args={[1, 1, 1]} />
            ) : shape.geometry === "octa" ? (
              <octahedronGeometry args={[1, 0]} />
            ) : (
              <tetrahedronGeometry args={[1, 0]} />
            )}
            <meshStandardMaterial
              color={shape.color}
              emissive={shape.color}
              emissiveIntensity={0.28}
              roughness={0.22}
              metalness={0.4}
              transparent
              opacity={0.78}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.z += delta * 0.65;
      if (ref.current.position.z > 1) ref.current.position.z = 0;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[18, 42, "#23d8ff", "#1e3a8a"]}
      position={[0, -2.7, -1.6]}
      rotation={[0, 0, 0]}
    />
  );
}

function MouseReactiveRig() {
  const light = useRef<THREE.PointLight>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!light.current) return;
    light.current.position.x = pointer.x * 4;
    light.current.position.y = pointer.y * 3;
  });

  return <pointLight ref={light} position={[0, 0, 4]} intensity={6} color="#73f3ff" distance={9} />;
}

export function HeroScene({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} color="#b7ecff" />
      <pointLight position={[-4, -2, 3]} intensity={3.8} color="#8b5cf6" distance={8} />
      <MouseReactiveRig />
      <ParticleField count={compact ? 260 : 780} />
      <Float speed={1.2} floatIntensity={0.32} rotationIntensity={0.12}>
        <HolographicSphere />
      </Float>
      <FloatingShapes />
      <GridFloor />
    </>
  );
}

"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function SparkScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      // Rotation effect
      groupRef.current.rotation.y += delta * 0.5;
      
      // Arc reactor color pulse based on time and local progress
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material as THREE.MeshStandardMaterial;
          // Pulse effect
          const intensity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.5;
          material.emissiveIntensity = intensity * localProgress;
        }
      });
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* Central spark */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#38bdf8" 
          emissive="#38bdf8"
          emissiveIntensity={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#a1a1aa" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

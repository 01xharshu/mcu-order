"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function FirstHeroesScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      // Rotate the group
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

      // Scale effect based on progress
      const scale = 1 + localProgress * 0.5;
      groupRef.current.scale.set(scale, scale, scale);
      
      // Fade in/out
      const opacity = Math.sin(localProgress * Math.PI);
      groupRef.current.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial;
          mat.opacity = opacity * 0.8;
        }
      });
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* 3 distinctive floating elements representing Cap, Thor, Hulk */}
      <mesh position={[-1.5, 0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#ef4444" transparent opacity={0} metalness={0.8} />
      </mesh>
      <mesh position={[1.5, 0.5, 0]}>
        <boxGeometry args={[0.6, 1, 0.6]} />
        <meshStandardMaterial color="#94a3b8" transparent opacity={0} metalness={0.9} />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#22c55e" transparent opacity={0} roughness={0.8} />
      </mesh>
    </group>
  );
}

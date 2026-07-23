"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

const INFINITY_COLORS = ["#3b82f6", "#eab308", "#ef4444", "#a855f7", "#22c55e", "#f97316"];

export function InfinityScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.z += delta * 0.1;
      
      // Pull stones together based on progress
      const radius = 3 - (localProgress * 2.5);
      
      groupRef.current.children.forEach((child, i) => {
        const angle = (i / 6) * Math.PI * 2;
        child.position.x = Math.cos(angle) * radius;
        child.position.y = Math.sin(angle) * radius;
        
        // Intensity spike at the end (the snap)
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial;
          mat.emissiveIntensity = localProgress > 0.9 ? 5 : 1 + localProgress;
        }
      });
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {INFINITY_COLORS.map((color, i) => (
        <mesh key={i}>
          <octahedronGeometry args={[0.2, 1]} />
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={1}
            transparent
            opacity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function ArchiveScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      
      // Data pillars forming
      groupRef.current.children.forEach((child, i) => {
        const targetHeight = 1 + Math.sin(i * 1.5) * 0.5;
        const currentHeight = Math.max(0.1, targetHeight * localProgress);
        
        child.scale.y = currentHeight;
        child.position.y = currentHeight / 2 - 1; // Anchor to base
        
        const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
        mat.opacity = localProgress;
      });
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* 10 data pillars */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 2;
        return (
          <mesh 
            key={i} 
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
          >
            <boxGeometry args={[0.2, 1, 0.2]} />
            <meshStandardMaterial 
              color="#e2e8f0" 
              metalness={0.5} 
              transparent 
              opacity={0}
            />
          </mesh>
        );
      })}
    </group>
  );
}

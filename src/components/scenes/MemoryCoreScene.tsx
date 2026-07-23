"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function MemoryCoreScene({ localProgress, active }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!active) return;
    if (meshRef.current) {
      // Slow rotation for the core
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
      
      // Scale based on local progress (0 to 1)
      const scale = 1 + localProgress * 0.5;
      meshRef.current.scale.set(scale, scale, scale);
      
      // Fade out as progress approaches 1
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (material) {
        material.opacity = 1 - localProgress;
      }
    }
  });

  return (
    <mesh ref={meshRef} visible={active}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial 
        color="#a1a1aa" 
        wireframe 
        transparent 
        opacity={1} 
      />
    </mesh>
  );
}

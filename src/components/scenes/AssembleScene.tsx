"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function AssembleScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      // Rotate the entire formation slowly
      groupRef.current.rotation.y -= delta * 0.1;
      
      // Individual elements move based on local progress
      groupRef.current.children.forEach((child, i) => {
        // Move towards center as progress increases
        const radius = 5 - (localProgress * 3);
        const angle = (i / 6) * Math.PI * 2 + state.clock.elapsedTime * 0.2;
        
        child.position.x = Math.cos(angle) * radius;
        child.position.z = Math.sin(angle) * radius;
        
        // Bobbing effect
        child.position.y = Math.sin(state.clock.elapsedTime * 2 + i) * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* 6 nodes representing the original Avengers */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial 
            color="#facc15" 
            metalness={0.5}
            roughness={0.2}
            emissive="#facc15"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

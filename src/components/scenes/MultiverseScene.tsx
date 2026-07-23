"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function MultiverseScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.2;
      groupRef.current.rotation.z += delta * 0.05;
      
      // Branching lines effect
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.MeshStandardMaterial;
          mat.opacity = (Math.sin(state.clock.elapsedTime * 2 + i) * 0.5 + 0.5) * Math.sin(localProgress * Math.PI);
        }
      });
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* 5 branching timeline rings */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <torusGeometry args={[1.5 + i * 0.5, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#a855f7" : "#3b82f6"} 
            emissive={i % 2 === 0 ? "#a855f7" : "#3b82f6"}
            emissiveIntensity={0.5}
            transparent 
            opacity={0}
          />
        </mesh>
      ))}
    </group>
  );
}

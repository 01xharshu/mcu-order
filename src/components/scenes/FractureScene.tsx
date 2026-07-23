"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function FractureScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      // Rotate the group
      groupRef.current.rotation.y += delta * 0.1;
      
      // Separate the halves based on progress
      const separation = Math.sin(localProgress * Math.PI) * 1.5;
      
      const leftHalf = groupRef.current.children[0];
      const rightHalf = groupRef.current.children[1];
      
      if (leftHalf) leftHalf.position.x = -separation;
      if (rightHalf) rightHalf.position.x = separation;
      
      // Jitter effect
      const jitter = (Math.random() - 0.5) * 0.05 * localProgress;
      groupRef.current.position.set(jitter, jitter, jitter);
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      {/* Left fracture */}
      <mesh position={[-0.5, 0, 0]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.6} />
      </mesh>
      {/* Right fracture */}
      <mesh position={[0.5, 0, 0]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#ef4444" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

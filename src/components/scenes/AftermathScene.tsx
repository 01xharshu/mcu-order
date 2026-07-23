"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneProps {
  localProgress: number;
  active: boolean;
}

export function AftermathScene({ localProgress, active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Dust particles representing the snap aftermath
  const particleCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!active) return;
    if (groupRef.current) {
      // Swirling drift
      groupRef.current.rotation.y += delta * 0.05;
      
      // Fade out and expand
      const scale = 1 + (localProgress * 2);
      groupRef.current.scale.set(scale, scale, scale);
      
      const material = (groupRef.current.children[0] as THREE.Points).material as THREE.PointsMaterial;
      material.opacity = 1 - localProgress;
    }
  });

  return (
    <group ref={groupRef} visible={active}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          color="#9ca3af" 
          transparent 
          opacity={1}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

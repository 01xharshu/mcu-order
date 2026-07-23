"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function PrologueTableau() {
  const silhouetteRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!silhouetteRef.current) return;
    const { x, y } = useExperienceStore.getState().pointer;
    const current = useExperienceStore.getState().current;
    
    // Subtle parallax response to pointer
    silhouetteRef.current.position.x = THREE.MathUtils.lerp(silhouetteRef.current.position.x, x * 0.5, 3 * delta);
    silhouetteRef.current.position.y = THREE.MathUtils.lerp(silhouetteRef.current.position.y, -1 + (y * 0.2), 3 * delta);

    // Fade out past 0.08
    const alpha = Math.max(0, Math.min(1, 1 - (current - 0.06) / 0.02));
    silhouetteRef.current.visible = alpha > 0.01;
    silhouetteRef.current.position.z = THREE.MathUtils.lerp(5, 0, alpha); // push away as it fades
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2.0} color="#F2F0EA" />
      <spotLight position={[-2, -2, 5]} intensity={1.5} color="#B51F28" angle={0.6} penumbra={1} />
      
      {/* Abstract Human Silhouette */}
      <group ref={silhouetteRef} position={[0, -1, 0]}>
        {/* Head/Shoulders abstraction */}
        <mesh position={[0, 1.5, 0]}>
          <capsuleGeometry args={[0.8, 1.2, 4, 16]} />
          <meshStandardMaterial color="#0A0B0D" roughness={0.9} metalness={0.1} />
        </mesh>
        
        {/* Torso abstraction */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[1.5, 1.8, 4, 16]} />
          <meshStandardMaterial color="#0A0B0D" roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Floating geometric fragments representing memory/data */}
        <mesh position={[1.5, 2, 1]} rotation={[Math.PI/4, Math.PI/4, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#B51F28" roughness={0.2} metalness={0.8} />
        </mesh>
        
        <mesh position={[-1.2, 0, 1.5]} rotation={[0, Math.PI/3, 0]}>
          <boxGeometry args={[0.2, 0.8, 0.2]} />
          <meshStandardMaterial color="#F2F0EA" roughness={0.4} metalness={0.5} />
        </mesh>
      </group>
    </>
  );
}

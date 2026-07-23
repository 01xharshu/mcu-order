"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useExperienceStore } from "@/lib/stores/experienceStore";

export function OriginTableau() {
  const groupRef = useRef<THREE.Group>(null);
  const inventorRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current || !inventorRef.current) return;
    
    const current = useExperienceStore.getState().current;
    
    // Origin is fully active between 0.08 and 0.21
    // Fade in from 0.06 to 0.08
    const alpha = Math.max(0, Math.min(1, (current - 0.06) / 0.02));
    
    // Scale or move into position
    groupRef.current.position.z = THREE.MathUtils.lerp(-5, 0, alpha);
    groupRef.current.visible = alpha > 0.01;

    // Parallax logic
    const { x, y } = useExperienceStore.getState().pointer;
    inventorRef.current.position.x = THREE.MathUtils.lerp(inventorRef.current.position.x, x * 0.2, 2 * delta);
    inventorRef.current.position.y = THREE.MathUtils.lerp(inventorRef.current.position.y, -1 + (y * 0.1), 2 * delta);
  });

  const holdingTime = useExperienceStore(s => s.holdingTime);
  const current = useExperienceStore(s => s.current);
  const isOrigin = current >= 0.08 && current < 0.23;
  const isSchematic = isOrigin && holdingTime;

  return (
    <group ref={groupRef}>
      {/* Warm low-right light */}
      <ambientLight intensity={isSchematic ? 0.1 : 0.4} />
      <directionalLight position={[5, -2, 5]} intensity={isSchematic ? 0.2 : 2.5} color="#C78450" />
      
      {/* Background Workshop (Compressed, Abstract) */}
      <mesh position={[2, 0, -3]} rotation={[0, -Math.PI/4, 0]}>
        <boxGeometry args={[4, 5, 1]} />
        <meshStandardMaterial 
          color={isSchematic ? "#B51F28" : "#26282C"} 
          roughness={0.8} 
          wireframe={isSchematic} 
        />
      </mesh>
      <mesh position={[-2, -1, -2]} rotation={[0, Math.PI/4, 0]}>
        <cylinderGeometry args={[1, 1, 3, 16]} />
        <meshStandardMaterial 
          color={isSchematic ? "#B51F28" : "#1A1A1A"} 
          roughness={0.9} 
          wireframe={isSchematic} 
        />
      </mesh>

      {/* Foreground metal edge */}
      <mesh position={[3, -2, 2]} rotation={[0, 0, Math.PI/12]}>
        <boxGeometry args={[4, 2, 0.5]} />
        <meshStandardMaterial 
          color={isSchematic ? "#B51F28" : "#0A0B0D"} 
          roughness={0.3} 
          metalness={0.8} 
          wireframe={isSchematic}
        />
      </mesh>

      {/* Back-view Inventor Figure */}
      <group ref={inventorRef} position={[0, -1, 0]}>
        <mesh position={[0, 1.2, 0]}>
          <capsuleGeometry args={[0.7, 1.0, 4, 16]} />
          <meshStandardMaterial 
            color={isSchematic ? "#F2F0EA" : "#050505"} 
            roughness={0.6} 
            metalness={0.4} 
            wireframe={isSchematic}
          />
        </mesh>
        
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[1.6, 2.5, 0.8]} />
          <meshStandardMaterial 
            color={isSchematic ? "#F2F0EA" : "#050505"} 
            roughness={0.8} 
            wireframe={isSchematic}
          />
        </mesh>

        {/* Small glowing core representing the invention/arc reactor */}
        <mesh position={[0, 0, -0.5]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#78E7FF" />
        </mesh>
      </group>
    </group>
  );
}

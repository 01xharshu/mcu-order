import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function SparkScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.075) / (0.205 - 0.075)));
    
    // Separates into strata
    meshRef.current.position.z = prog * -5;
    meshRef.current.rotation.y = prog * Math.PI * 0.1;
  });

  return (
    <group position={[0, -5, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[8, 4]} />
        <meshBasicMaterial color="#ff3333" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function BlipScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.730) / (0.810 - 0.730)));
    
    // Absent topology - slow haunting drift
    meshRef.current.position.y = prog * 2;
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = 0.1;
  });

  return (
    <group position={[0, -50, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

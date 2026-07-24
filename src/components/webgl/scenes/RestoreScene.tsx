import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function RestoreScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!meshRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.810) / (0.920 - 0.810)));
    
    // Woven topology - elements return
    meshRef.current.scale.setScalar(prog);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = Math.min(1, prog * 2);
  });

  return (
    <group position={[0, -60, 0]}>
      <mesh ref={meshRef}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial color="#33ffaa" transparent opacity={0} />
      </mesh>
    </group>
  );
}

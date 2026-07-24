import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { engine } from '@/engine/ExperienceEngine';

export function FractureScene() {
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (!leftRef.current || !rightRef.current) return;
    const { current } = engine.getState();
    const prog = Math.max(0, Math.min(1, (current - 0.485) / (0.610 - 0.485)));
    
    // Causal shear splits the scene
    leftRef.current.position.x = -2 - prog * 2;
    rightRef.current.position.x = 2 + prog * 2;
    leftRef.current.position.z = prog * 1;
    rightRef.current.position.z = prog * -1;
  });

  return (
    <group position={[0, -30, 0]}>
      <mesh ref={leftRef}>
        <planeGeometry args={[4, 5]} />
        <meshBasicMaterial color="#3355ff" transparent opacity={0.7} />
      </mesh>
      <mesh ref={rightRef}>
        <planeGeometry args={[4, 5]} />
        <meshBasicMaterial color="#ff5533" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

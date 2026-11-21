'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export function Hero3DObject() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.4;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group>
      {/* Central Interactive Organic Sphere */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <Sphere ref={sphereRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>

      {/* Outer Floating Kinetic Ring */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={0.6}>
        <Torus ref={torusRef} args={[2.2, 0.08, 32, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      </Float>

      {/* Floating Orbital Particle Accents */}
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const radius = 3.2 + (i % 3) * 0.4;
        const x = Math.cos(angle) * radius;
        const y = (Math.sin(i * 1.5) * 1.2);
        const z = Math.sin(angle) * radius;

        return (
          <Float key={i} speed={1.5 + (i % 2)} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color={i % 2 === 0 ? "#06b6d4" : "#ec4899"} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

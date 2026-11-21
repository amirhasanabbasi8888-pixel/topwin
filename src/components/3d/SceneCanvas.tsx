'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Hero3DObject } from './Hero3DObject';

export function SceneCanvas() {
  return (
    <div className="relative w-full h-[520px] md:h-[650px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]} // Clamp for mobile performance
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[10, 5, 2]} intensity={1.2} color="#8b5cf6" />

        <Suspense fallback={null}>
          <Hero3DObject />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>
    </div>
  );
}

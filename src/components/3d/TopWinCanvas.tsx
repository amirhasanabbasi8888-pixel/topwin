'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { TopWinHero3D } from './TopWinHero3D';

export function TopWinCanvas() {
  return (
    <div className="relative w-full h-[580px] lg:h-[720px] select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        {/* Bright Studio & Architectural Lighting so the 3D window is gleaming and bright */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[6, 10, 6]} intensity={3.5} color="#ffffff" castShadow />
        <directionalLight position={[-6, 4, 4]} intensity={2.0} color="#bae6fd" />
        <pointLight position={[0, 4, 2]} intensity={2.5} color="#38bdf8" />
        <pointLight position={[3, -2, 3]} intensity={1.8} color="#fbbf24" />
        {/* Backlight so the window outline shines through */}
        <directionalLight position={[0, -2, -4]} intensity={2.0} color="#ffffff" />

        <Suspense fallback={null}>
          <TopWinHero3D />
          <Environment preset="apartment" />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.4}
            scale={7}
            blur={2.5}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.75}
          minPolarAngle={Math.PI / 2.35}
          maxAzimuthAngle={Math.PI / 5}
          minAzimuthAngle={-Math.PI / 5}
          dampingFactor={0.06}
        />
      </Canvas>
    </div>
  );
}

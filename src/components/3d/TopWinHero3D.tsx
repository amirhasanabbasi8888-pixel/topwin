'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface HotspotProps {
  position: [number, number, number];
  title: string;
  detail: string;
  badge: string;
}

function Hotspot({ position, title, detail, badge }: HotspotProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Html position={position} center distanceFactor={7}>
      <div className="relative group pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-5 h-5 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg shadow-cyan-400/80 hover:scale-125 transition-transform duration-200 border-2 border-white focus:outline-none"
          aria-label={title}
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        </button>

        {isOpen && (
          <div className="absolute bottom-7 right-1/2 translate-x-1/2 w-64 p-3.5 rounded-2xl bg-zinc-950/95 border border-cyan-400/40 backdrop-blur-2xl text-right text-xs shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[10px] text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 font-medium">
                {badge}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>
            <div className="font-bold text-white text-sm mb-1">{title}</div>
            <p className="text-zinc-300 leading-relaxed text-[11px]">{detail}</p>
          </div>
        )}
      </div>
    </Html>
  );
}

export function TopWinHero3D() {
  const windowSashRef = useRef<THREE.Group>(null);
  const handleLeverRef = useRef<THREE.Group>(null);
  const [isOpenSash, setIsOpenSash] = useState(true);

  useFrame((state, delta) => {
    if (windowSashRef.current) {
      // Smooth animated opening/closing of the window sash
      const targetRotation = isOpenSash ? -0.58 : 0;
      windowSashRef.current.rotation.y = THREE.MathUtils.damp(
        windowSashRef.current.rotation.y,
        targetRotation,
        4.5,
        delta
      );
    }

    if (handleLeverRef.current) {
      // Rotate handle lever when window is opened (like rotating 90 degrees to unlock)
      const targetLeverAngle = isOpenSash ? Math.PI / 2 : 0;
      handleLeverRef.current.rotation.z = THREE.MathUtils.damp(
        handleLeverRef.current.rotation.z,
        targetLeverAngle,
        6,
        delta
      );
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* 1. Outer Sculptural Frame matching the TopWin Logo geometry (Vibrant Blue + Golden Accent) */}
      {/* Top Bar of the "T" with Golden Top Cap Accent */}
      <group position={[0, 1.45, 0]}>
        <RoundedBox args={[3.6, 0.18, 0.28]} radius={0.03} smoothness={4}>
          <meshStandardMaterial
            color="#0284c7"
            roughness={0.2}
            metalness={0.4}
            envMapIntensity={1.5}
          />
        </RoundedBox>
        {/* Golden Chamfer on Top right (as in TopWin Logo) */}
        <RoundedBox args={[1.2, 0.05, 0.29]} radius={0.01} smoothness={2} position={[0.8, 0.1, 0]}>
          <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.7} />
        </RoundedBox>
      </group>

      {/* Left Vertical Frame (Blue "T" Pillar) */}
      <RoundedBox args={[0.2, 2.9, 0.28]} radius={0.03} smoothness={4} position={[-1.7, 0, 0]}>
        <meshStandardMaterial color="#0369a1" roughness={0.2} metalness={0.4} envMapIntensity={1.5} />
      </RoundedBox>

      {/* Right Vertical Frame */}
      <RoundedBox args={[0.2, 2.9, 0.28]} radius={0.03} smoothness={4} position={[1.7, 0, 0]}>
        <meshStandardMaterial color="#0284c7" roughness={0.2} metalness={0.4} envMapIntensity={1.5} />
      </RoundedBox>

      {/* Bottom Frame (Angled Base geometry of TopWin) */}
      <RoundedBox args={[3.6, 0.18, 0.28]} radius={0.03} smoothness={4} position={[0, -1.45, 0]}>
        <meshStandardMaterial color="#0a3871" roughness={0.2} metalness={0.4} envMapIntensity={1.5} />
      </RoundedBox>

      {/* Center Divider Mullion (White UPVC Profile) */}
      <RoundedBox args={[0.12, 2.7, 0.24]} radius={0.02} smoothness={3} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.1} />
      </RoundedBox>

      {/* 2. Fixed Left Window (Pure White UPVC Profile + Transparent Double Glazing) */}
      <group position={[-0.85, 0, 0]}>
        {/* Inner White UPVC Frame */}
        <RoundedBox args={[1.5, 2.65, 0.18]} radius={0.02} smoothness={3}>
          <meshStandardMaterial color="#f8fafc" roughness={0.15} metalness={0.05} />
        </RoundedBox>

        {/* Clear Crystal Transparent Glass Pane (You can see TOPWIN right through it!) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.32, 2.45, 0.03]} />
          <meshPhysicalMaterial
            color="#e0f2fe"
            transmission={0.96}
            opacity={1}
            transparent
            roughness={0.04}
            ior={1.5}
            thickness={0.5}
            reflectivity={0.85}
            clearcoat={1}
            clearcoatRoughness={0.02}
          />
        </mesh>
      </group>

      {/* 3. Operable Right Window Sash (Openable, matching the open window in Logo!) */}
      <group position={[0.85, 0, 0]}>
        {/* Sash Frame Pivot along the Right Post */}
        <group ref={windowSashRef} position={[0.72, 0, 0]}>
          <group position={[-0.72, 0, 0]}>
            {/* White UPVC Sash Profile Frame */}
            <RoundedBox args={[1.44, 2.58, 0.16]} radius={0.02} smoothness={3}>
              <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.05} />
            </RoundedBox>

            {/* Clear Transparent Double Glass Pane */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.26, 2.38, 0.03]} />
              <meshPhysicalMaterial
                color="#bae6fd"
                transmission={0.94}
                opacity={1}
                transparent
                roughness={0.03}
                ior={1.5}
                thickness={0.5}
                reflectivity={0.9}
                clearcoat={1}
                clearcoatRoughness={0.02}
              />
            </mesh>

            {/* Interactive Handle with Button Directly Attached to it! */}
            <group
              position={[-0.64, 0, 0.11]}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenSash(!isOpenSash);
              }}
            >
              {/* Handle Base Rose */}
              <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.025, 0.025, 0.05, 16]} />
                <meshStandardMaterial color="#0284c7" metalness={0.8} roughness={0.2} />
              </mesh>

              {/* Handle Rotating Lever */}
              <group ref={handleLeverRef} position={[0, 0, 0.03]}>
                <mesh position={[0, -0.09, 0]}>
                  <boxGeometry args={[0.024, 0.22, 0.016]} />
                  <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.15} />
                </mesh>
              </group>

              {/* Glowing Interactive Pill Button Mounted Directly on the Handle */}
              <Html position={[0.18, 0, 0.05]} center distanceFactor={6}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpenSash(!isOpenSash);
                  }}
                  className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-zinc-950 font-black text-[11px] shadow-2xl shadow-amber-500/60 border-2 border-white transition-all active:scale-95 whitespace-nowrap cursor-pointer animate-bounce"
                  title="کلیک برای باز و بسته کردن پنجره"
                >
                  <span className="w-2 h-2 rounded-full bg-zinc-950 animate-ping" />
                  <span>{isOpenSash ? 'بستن پنجره ✕' : 'باز کردن پنجره ✓'}</span>
                </button>
              </Html>
            </group>
          </group>
        </group>
      </group>

      {/* 4. Sunlight Ray Beams (Sunburst through the open window, just like in TopWin Logo!) */}
      <group position={[0.4, 0.8, -0.5]}>
        <pointLight intensity={3.5} color="#fffbeb" distance={8} />
      </group>

      {/* 5. Interactive 3D Hotspots on Technical Highlights */}
      <Hotspot
        position={[-0.85, 0.5, 0.14]}
        title="شیشه دوجداره ۶+۱۲+۴ گاز آرگون"
        detail="شفافیت کریستالی فوق‌العاده با گاز آرگون عایق صوت و حرارت، بدون کاهش نور ورودی."
        badge="شیشه شفاف آکوستیک"
      />
      <Hotspot
        position={[0.75, -0.7, 0.2]}
        title="پروفیل ۵ کاناله سفید صیقلی UPVC"
        detail="مقاوم در برابر اشعه فرابنفش، با گالوانیزه U شکل ۱.۵ میلی‌متری و لاستیک EPDM دوبل."
        badge="پروفیل اختصاصی TopWin"
      />
      <Hotspot
        position={[0.1, 0.7, 0.16]}
        title="یراق‌آلات دوحالته آلمانی"
        detail="مکانیزم قفل چندنقطه‌ای ضدسرقت با چرخش ۱۸۰ درجه برای تهویه ایمن یا بازشوی کامل."
        badge="یراق‌آلات روان Roto"
      />
    </group>
  );
}

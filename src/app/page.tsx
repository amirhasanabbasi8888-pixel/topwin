import { TopWinHero } from '@/components/hero/TopWinHero';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { WindowConfigurator } from '@/components/sections/WindowConfigurator';
import { AcousticThermalSim } from '@/components/sections/AcousticThermalSim';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { OnlineCalculator } from '@/components/sections/OnlineCalculator';
import { TopWinFooter } from '@/components/ui/TopWinFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070a0f] text-foreground relative selection:bg-cyan-500 selection:text-black">
      {/* 1. Hero Section (Direct Reference 1 Style: Giant TOPWIN typography, 3D interactive window, spec card, pill nav) */}
      <TopWinHero />

      {/* 2. Window Profiles & Chamber Cross-Sections (Direct Reference 3 Style) */}
      <ProfileSection />

      {/* 3. Interactive Window Customizer & Configurator */}
      <WindowConfigurator />

      {/* 4. Acoustic & Thermal Insulation Simulator */}
      <AcousticThermalSim />

      {/* 5. Luxury Architectural Projects Gallery */}
      <ProjectsGallery />

      {/* 6. Smart Instant Online Price & Dimension Estimator */}
      <OnlineCalculator />

      {/* 7. Comprehensive Minimal Luxury Footer */}
      <TopWinFooter />
    </main>
  );
}

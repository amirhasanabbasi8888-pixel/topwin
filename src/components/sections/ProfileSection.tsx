'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layers, ShieldCheck, Flame, VolumeX, Sparkles, Check, ArrowLeft } from 'lucide-react';

const profileVariants = [
  {
    id: 'wood',
    name: 'لمینت طرح چوب بلوطی',
    subtitle: 'طبیعی، مقاوم در برابر نور شدید آفتاب و شرجی',
    colorHex: '#854d0e',
    accentBorder: 'border-amber-600',
    layers: '۵ کاناله سری ۷۰ با گالوانیزه دوبل',
    thermalLoss: '۸۵٪ جلوگیری از اتلاف گرما',
    acoustic: 'کاهش صدای محیط تا ۴۳ دسی‌بل',
    glassType: 'شیشه دوجداره ۶+۱۲+۴ دودی رفلکس',
    description: 'روکش لمینت آلمانی ضدخش و ضد اشعه UV با بافت طبیعی رگه‌های چوب، ایده‌آل برای ویلاهای لوکس و مناطق مرطوب بدون نیاز به رنگ‌آمیزی مجدد.',
  },
  {
    id: 'anthracite',
    name: 'آنتراسیت متالیک مات',
    subtitle: 'سبک معماری معاصر و مینیمال اروپایی',
    colorHex: '#334155',
    accentBorder: 'border-slate-500',
    layers: '۵ کاناله فوق مقاوم با هسته ضخیم',
    thermalLoss: '۸۲٪ جلوگیری از اتلاف حرارتی',
    acoustic: 'کاهش صدای محیط تا ۴۱ دسی‌بل',
    glassType: 'شیشه دوجداره سکوریت سوپرسیلور',
    description: 'رنگ‌آمیزی کوره‌ای مات ضدجذب لکه و دوده مناسب برای نمای ساختمان‌های مدرن و بتن اکسپوز که هارمونی جذابی با معماری نوگرا ایجاد می‌کند.',
  },
  {
    id: 'white',
    name: 'سفید صدفی صیقلی کلاسیک',
    subtitle: 'درخشندگی ماندگار با فرمولاسیون ضدزردی',
    colorHex: '#f1f5f9',
    accentBorder: 'border-cyan-400',
    layers: '۵ کاناله استاندارد رال آلمان',
    thermalLoss: '۸۰٪ کاهش مصرف گاز و برق',
    acoustic: 'کاهش صدای محیط تا ۴۰ دسی‌بل',
    glassType: 'شیشه دوجداره شفاف کلیر صنعتی',
    description: 'تولیدشده با تیتانیوم دی‌اکسید با خلوص بالا برای تضمین عدم تغییر رنگ و عدم زرد شدن حتی پس از ۱۵ سال تابش مداوم خورشید.',
  },
  {
    id: 'triple',
    name: 'مقطع ۳ جداره آکوستیک سایلنت',
    subtitle: 'حداکثر ایزولاسیون برای بر اتوبان‌ها و فرودگاه‌ها',
    colorHex: '#0284c7',
    accentBorder: 'border-blue-500',
    layers: '۷ کاناله سری ۸۰ فوق‌عایق صنعتی',
    thermalLoss: '۹۲٪ جلوگیری کامل از اتلاف انرژی',
    acoustic: 'کاهش استثنایی صدای محیط تا ۵۲ دسی‌بل',
    glassType: 'سه جداره ۶+۱۰+۴+۱۰+۴ گاز آرگون',
    description: 'مقطع پیشرفته با ۳ لایه شیشه مجزا و ۲ محفظه گاز آرگون، عایق‌بندی بی‌رقیب برای محیط‌های فوق‌العاده شلوغ شهری و اقلیم‌های فوق سردسیر.',
  },
];

export function ProfileSection() {
  const [selectedProfile, setSelectedProfile] = useState(profileVariants[0]);
  const [activeChamber, setActiveChamber] = useState<number | null>(null);

  return (
    <section id="profiles" className="relative py-24 bg-[#090e17] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Top Header (Matching Ref 3 layout style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-xs text-cyan-400 font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>مهندسی مقاطع و لایه‌های عایق</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              برترین مقاطع پنجره‌های دوجداره{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 via-blue-400 to-white">
                تاپ‌وین (TopWin)
              </span>
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              جزئیات فنی فراوانی در ساختار داخلی پروفیل‌های UPVC وجود دارد. کارشناسان فنی تاپ‌وین با بررسی دقیق محل نصب و شرایط اقلیمی پروژه، بالاترین سطح عایق‌بندی حرارتی، صوتی و آب‌بندی را تضمین می‌کنند.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            <a
              href="#calculator"
              className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs tracking-tight hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-white/10 flex items-center gap-2"
            >
              <span>درخواست کاتالوگ و نمونه مقاطع</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Profile Switcher Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {profileVariants.map((item) => {
            const isSelected = selectedProfile.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedProfile(item)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-zinc-800 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-white/30"
                  style={{ backgroundColor: item.colorHex }}
                />
                <span>{item.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid (Visual Cut & Chamber Breakdown) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/60 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
          {/* Left / Center: Interactive Profile Diagram & Visual Presentation */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Visual Profile Representation with Highlight Hotspots */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black border border-white/10 p-6 flex flex-col justify-between shadow-2xl">
              {/* Background Reference Image Thumbnail */}
              <div className="absolute inset-0 opacity-40 mix-blend-luminosity hover:opacity-70 transition-opacity duration-300">
                <Image
                  src="/images/profile-ref.png"
                  alt="مقطع پروفیل پنجره تاپ وین"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Foreground Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

              {/* Top Tags */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/70 border border-white/15 text-[11px] font-mono text-cyan-300">
                  {selectedProfile.layers}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-[11px] font-semibold text-amber-300">
                  RAL آلمان
                </span>
              </div>

              {/* Chamber Interactive Hotspots */}
              <div className="relative z-10 space-y-2">
                <div
                  onMouseEnter={() => setActiveChamber(1)}
                  onMouseLeave={() => setActiveChamber(null)}
                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    activeChamber === 1
                      ? 'bg-cyan-500/20 border-cyan-400 text-white'
                      : 'bg-black/60 border-white/10 text-zinc-300 hover:border-white/30'
                  }`}
                >
                  <span className="font-bold text-cyan-400">۱. کانال‌های ۵ گانه تخلیه هوا:</span> مانع از انتقال گرما، سرما و نفوذ قطرات باران.
                </div>

                <div
                  onMouseEnter={() => setActiveChamber(2)}
                  onMouseLeave={() => setActiveChamber(null)}
                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    activeChamber === 2
                      ? 'bg-blue-500/20 border-blue-400 text-white'
                      : 'bg-black/60 border-white/10 text-zinc-300 hover:border-white/30'
                  }`}
                >
                  <span className="font-bold text-blue-400">۲. گالوانیزه ۱.۵mm فرم U:</span> استحکام بی‌نظیر مکانیکی و مقاومت در برابر زلزله و تندباد.
                </div>

                <div
                  onMouseEnter={() => setActiveChamber(3)}
                  onMouseLeave={() => setActiveChamber(null)}
                  className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    activeChamber === 3
                      ? 'bg-amber-500/20 border-amber-400 text-white'
                      : 'bg-black/60 border-white/10 text-zinc-300 hover:border-white/30'
                  }`}
                >
                  <span className="font-bold text-amber-400">۳. لاستیک EPDM دوبل:</span> پایداری در دمای منفی ۳۰ تا مثبت ۸۰ درجه سانتی‌گراد.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Performance Numbers */}
          <div className="lg:col-span-5 text-right flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                بررسی مشخصات مقطع انتخابی
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {selectedProfile.name}
              </h3>
              <p className="text-zinc-400 text-xs mt-1">
                {selectedProfile.subtitle}
              </p>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {selectedProfile.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Flame className="w-4 h-4" />
                  <span className="text-[11px] font-bold">عایق حرارتی</span>
                </div>
                <div className="text-sm font-extrabold text-white">
                  {selectedProfile.thermalLoss}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 text-violet-400 mb-1">
                  <VolumeX className="w-4 h-4" />
                  <span className="text-[11px] font-bold">عایق صوتی</span>
                </div>
                <div className="text-sm font-extrabold text-white">
                  {selectedProfile.acoustic}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200">
              <span className="font-bold text-white">ساختار شیشه سازگار: </span>
              {selectedProfile.glassType}
            </div>
          </div>
        </div>

        {/* 4. Real Stats & Metrics (Direct Translation of Reference 3 Bottom Numbers) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-3xl bg-zinc-950/40 border border-white/10 backdrop-blur-md">
            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              ۱۰ سال
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
              ضمانت کتبی تعویض و عدم تغییر فرم
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950/40 border border-white/10 backdrop-blur-md">
            <div className="text-3xl sm:text-5xl font-black text-cyan-400 tracking-tight">
              ۱۰۰۰+
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
              پروژه مسکونی، تجاری و ویلایی موفق
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950/40 border border-white/10 backdrop-blur-md">
            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              ۲۵۰+
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
              تنوع رنگ، لمینت و بازشوهای اختصاصی
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950/40 border border-white/10 backdrop-blur-md">
            <div className="text-3xl sm:text-5xl font-black text-amber-400 tracking-tight">
              ۸۵٪
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-2 font-medium">
              صرفه‌جویی در مصرف گاز و برق ساختمان
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

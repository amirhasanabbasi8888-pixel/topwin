'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowLeft, Sparkles, PhoneCall } from 'lucide-react';

const TopWinCanvas = dynamic(
  () => import('@/components/3d/TopWinCanvas').then((mod) => mod.TopWinCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[580px] lg:h-[720px] flex items-center justify-center">
        <div className="relative flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
          <span className="text-xs text-zinc-400 tracking-wider">بارگذاری مدل سه‌بعدی تاپ‌وین...</span>
        </div>
      </div>
    ),
  }
);

export function TopWinHero() {
  return (
    <section className="relative min-h-screen bg-[#070a0f] text-white overflow-hidden flex flex-col justify-between pt-4 pb-10">
      {/* Background Volumetric Lighting & Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-cyan-900/15 via-blue-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* 1. Floating Pill Header / Navigation (Matching Reference 1) */}
      <header className="relative z-30 max-w-7xl mx-auto w-full px-4 pt-2">
        <div className="flex items-center justify-between gap-4">
          {/* Right: Pill Navigation items */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#hero"
              className="px-4 py-2 rounded-full bg-white text-zinc-950 font-bold text-xs tracking-tight shadow-lg shadow-white/10"
            >
              صفحه اصلی
            </a>
            <a
              href="#profiles"
              className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 text-xs transition-all"
            >
              مقاطع پروفیل
            </a>
            <a
              href="#configurator"
              className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 text-xs transition-all"
            >
              انتخاب پنجره سه‌بعدی
            </a>
            <a
              href="#projects"
              className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 text-xs transition-all"
            >
              پروژه‌ها
            </a>
            <a
              href="#calculator"
              className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 text-xs transition-all"
            >
              محاسبه آنلاین قیمت
            </a>
          </div>

          {/* Center: TopWin Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-xl shadow-cyan-500/20 bg-white">
              <Image
                src="/images/topwin-logo.jpg"
                alt="لوگوی رسمی تاپ وین TopWin"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-extrabold text-lg tracking-wider text-white">
                TopWin
              </span>
              <span className="text-[10px] text-cyan-400 tracking-tight font-medium -mt-1">
                صنایع پنجره دوجداره UPVC
              </span>
            </div>
          </div>

          {/* Left: Contact CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:02191000000"
              className="hidden lg:flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span dir="ltr">۰۲۱-۸۸۸۸۴۴۴۴</span>
            </a>
            <a
              href="#calculator"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-cyan-500/25"
            >
              <span>استعلام آنلاین و بازدید</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Center: Giant Architectural Typography & 3D Interactive Canvas */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center mt-2 mb-4 overflow-hidden">
        {/* Giant Architectural Typography "TOPWIN" Positioned High & Prominent (Direct Reference 1 "TERRA") */}
        <div className="absolute top-[8%] lg:top-[11%] left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0">
          <span className="text-[18vw] lg:text-[19vw] font-black uppercase tracking-[0.08em] text-[#f5f1ea]/[0.45] leading-none block font-sans drop-shadow-sm">
            TOPWIN
          </span>
          <span className="text-xl lg:text-3xl italic font-serif text-amber-300/70 tracking-widest block -mt-4 lg:-mt-8">
            insulated serenity
          </span>
        </div>

        {/* 3D Interactive Canvas Scene (Positioned so the transparent crystal glass overlays the typography) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-6">
          <TopWinCanvas />
        </div>
      </div>

      {/* 3. Hero Bottom Overlay: Glassmorphic Spec Box + Narrative Text + Social Pills (Reference 1 Layout) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          {/* Bottom Left: Social Media & Action Pills */}
          <div className="lg:col-span-3 flex flex-wrap lg:flex-col gap-2.5 order-3 lg:order-1">
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-[11px] text-zinc-300 transition-all flex items-center gap-1.5"
              >
                <span>اینستاگرام</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-[11px] text-zinc-300 transition-all flex items-center gap-1.5"
              >
                <span>تلگرام</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-[11px] text-zinc-300 transition-all flex items-center gap-1.5"
              >
                <span>واتساپ</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </a>
            </div>

            <div className="text-[11px] text-zinc-400 font-mono tracking-wider">
              EST. 2012 — گواهینامه استاندارد RAL آلمان
            </div>
          </div>

          {/* Bottom Center: Glassmorphism Technical Spec Card (Exact match of Ref 1 box) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="p-5 rounded-3xl bg-zinc-950/75 border border-white/15 backdrop-blur-xl shadow-2xl text-right">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                <span className="text-[10px] text-cyan-400 font-bold px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/60">
                  مشخصات فنی مقطع
                </span>
                <span className="text-xs font-semibold text-zinc-200">
                  صنایع پنجره دوجداره تاپ‌وین
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px]">
                <div className="flex flex-col">
                  <span className="text-zinc-500">پروفیل پایه:</span>
                  <span className="text-zinc-200 font-medium">UPVC سری ۷۰ گالوانیزه ۱.۵mm</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500">ساختار شیشه:</span>
                  <span className="text-zinc-200 font-medium">۶+۱۲+۴ گاز آرگون آکوستیک</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500">ضریب کاهش صوت:</span>
                  <span className="text-cyan-400 font-bold">کاهش ۴۴ دسی‌بل نویز محیط</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500">گارانتی محصول:</span>
                  <span className="text-amber-400 font-bold">۱۰ سال ضمانت کتبی طلایی</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right: Editorial Narrative Paragraph (Direct Reference 1 style) */}
          <div className="lg:col-span-4 text-right order-2 lg:order-3">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>عایق آرامش، انتخاب هوشمندانه</span>
            </div>
            <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
              پنجره‌های دوجداره و سه‌جداره تاپ‌وین با ترکیب مهندسی پیشرفته پروفیل‌های چندکاناله و یراق‌آلات آلمانی، نهایت سکوت، عایق‌بندی حرارتی و ظرافت مینیمال را برای ساختمان‌های مدرن به ارمغان می‌آورند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

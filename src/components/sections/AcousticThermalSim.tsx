'use client';

import { useState } from 'react';
import { Volume2, VolumeX, Flame, Snowflake, ShieldCheck, Zap, ArrowLeft, Wind } from 'lucide-react';

export function AcousticThermalSim() {
  const [isTopWin, setIsTopWin] = useState(true);

  return (
    <section id="simulator" className="py-24 bg-[#070a0f] text-white relative overflow-hidden border-t border-white/[0.08]">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-amber-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>آزمایشگاه عایق‌بندی تاپ‌وین</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            شبیه‌ساز تعاملی آرامش صوتی و مهار انرژی
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
            تفاوت واقعی پنجره‌های قدیمی تک‌جداره را با مهندسی دوجداره ۵ کاناله تاپ‌وین مقایسه کنید. آرامش مطلق در میان شلوغ‌ترین خیابان‌های شهر.
          </p>

          {/* Interactive Toggle Button */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-zinc-900 border border-white/10 shadow-2xl">
            <button
              onClick={() => setIsTopWin(false)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                !isTopWin
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              پنجره قدیمی فلزی / تک‌جداره
            </button>
            <button
              onClick={() => setIsTopWin(true)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                isTopWin
                  ? 'bg-cyan-500 text-zinc-950 font-extrabold shadow-lg shadow-cyan-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>پنجره دوجداره تاپ‌وین (TopWin)</span>
            </button>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Acoustic Insulation (Sound Isolation) */}
          <div className="p-8 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-zinc-400">شاخص شدت آلودگی صوتی (dB)</span>
                <div
                  className={`p-2.5 rounded-2xl border ${
                    isTopWin
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                      : 'bg-rose-500/20 border-rose-400 text-rose-400'
                  }`}
                >
                  {isTopWin ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {isTopWin ? '۳۲' : '۸۲'}
                </span>
                <span className="text-base text-zinc-400 font-bold">دسی‌بل</span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-bold mr-auto ${
                    isTopWin
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}
                >
                  {isTopWin ? 'سکوت کامل در سطح اتاق خواب' : 'آلودگی صوتی شدید ترافیک و بوق'}
                </span>
              </div>

              {/* Animated Sound Wave Graphic */}
              <div className="h-16 w-full rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center gap-1.5 px-4 overflow-hidden mb-6">
                {Array.from({ length: 24 }).map((_, i) => {
                  const heightFactor = isTopWin ? (i % 3 === 0 ? 12 : 6) : ((i * 7) % 38) + 16;
                  return (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isTopWin ? 'bg-cyan-400/60' : 'bg-rose-500/80 animate-pulse'
                      }`}
                      style={{ height: `${heightFactor}px` }}
                    />
                  );
                })}
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {isTopWin
                  ? 'گاز آرگون تزریق‌شده بین دوجداره شیشه با فاصله اسپیسر ۱۲ میلی‌متری و درزبندی دوبل EPDM، فرکانس‌های آزاردهنده صدای اتومبیل‌ها و ترافیک را بیش از ۴۴ دسی‌بل کاهش می‌دهد.'
                  : 'پنجره‌های آهنی و آلومینیومی قدیمی به دلیل منافذ باز و ساختار تک‌جداره، تمام لرزش‌ها و فرکانس‌های صدای شهر را مستقیماً به داخل خانه هدایت می‌کنند.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>گاز عایق: {isTopWin ? 'آرگون با خلوص ۹۵٪' : 'هوای معمولی بدون عایق'}</span>
              <span className="font-mono text-cyan-400">{isTopWin ? 'ISO 10140-2 OK' : 'FAIL'}</span>
            </div>
          </div>

          {/* Card 2: Thermal Insulation (Heat & Cold Barrier) */}
          <div className="p-8 rounded-3xl bg-zinc-950/70 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-zinc-400">ثبات دمای داخلی و کنترل اتلاف انرژی</span>
                <div
                  className={`p-2.5 rounded-2xl border ${
                    isTopWin
                      ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                      : 'bg-rose-500/20 border-rose-400 text-rose-400'
                  }`}
                >
                  <Flame className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {isTopWin ? '۲۳.۵°' : '۱۴°'}
                </span>
                <span className="text-base text-zinc-400 font-bold">سانتی‌گراد</span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-bold mr-auto ${
                    isTopWin
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  {isTopWin ? 'دمای مطبوع با مصرف حداقل انرژی' : 'اتلاف شدید گرما و سرمای سوزناک'}
                </span>
              </div>

              {/* Thermal Heat Map Bar */}
              <div className="h-16 w-full rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between px-6 mb-6 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  <Snowflake className="w-4 h-4" />
                  <span>دمای بیرون: منفی ۵ درجه</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Flame className="w-4 h-4" />
                  <span>دمای داخل: {isTopWin ? '۲۳.۵ درجه' : '۱۴ درجه'}</span>
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {isTopWin
                  ? 'ساختار ۵ کاناله پروفیل UPVC تاپ‌وین ضریب انتقال حرارت (U-Value) را به زیر ۱.۳ وات بر مترمربع کلوین می‌رساند و مانع از تشکیل قطرات عرق روی شیشه‌ها می‌شود.'
                  : 'رسانایی بالای پروفیل‌های فلزی و نبود پل حرارتی موجب سرمای دائم حاشیه پنجره، یخ‌زدگی و افزایش ۴۰ تا ۶۰ درصدی قبوض گاز و برق در زمستان و تابستان می‌شود.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>درزبندی در برابر باد و گردوغبار:</span>
              <span className="font-bold text-emerald-400">{isTopWin ? '۱۰۰٪ هوابند' : 'نفوذ دوده و باد'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

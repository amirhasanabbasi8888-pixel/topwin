'use client';

import { useState } from 'react';
import { Sliders, CheckCircle2, Shield, Eye, HelpCircle, ArrowRight } from 'lucide-react';

const windowTypes = [
  {
    id: 'tilt-turn',
    name: 'دوحالته (Tilt & Turn)',
    description: 'بازشوی استاندارد اروپایی؛ چرخش به سمت داخل و بازشوی شیب‌دار از بالا جهت تهویه ایمن بدون جریان شدید باد.',
    openingAngle: '۹۰ درجه و ۱۵ درجه از بالا',
    hardware: 'یراق آلمانی Roto / Siegenia',
    recommendation: 'اتاق خواب، پذیرایی، ویلاها',
  },
  {
    id: 'sliding',
    name: 'کشویی ریلی مونو ریل',
    description: 'لنگه‌ها روی ریل آلومینیومی روان حرکت می‌کنند بدون اشغال کردن فضای داخلی چیدمان پرده یا مبل.',
    openingAngle: 'حرکت خطی نرم سایلنت',
    hardware: 'بلبرینگ‌های سرامیکی تقویت‌شده',
    recommendation: 'آشپزخانه، تراس و فضاهای جمع‌وجور',
  },
  {
    id: 'french',
    name: 'فرانسوی دوبل بدون ستون',
    description: 'هر دو لنگه هم‌زمان باز می‌شوند بدون ستون میانی؛ دید پانورامای ۱۰۰ درصدی برای انتقال اثاثیه یا بالکن.',
    openingAngle: 'بازشوی کامل ۱۸۰ درجه جفت لنگه',
    hardware: 'مکانیسم قفل هم‌زمان و چفت سرتاسری',
    recommendation: 'ورودی بالکن، روف‌گاردن و پاسیو',
  },
  {
    id: 'tilt-slide',
    name: 'فولکس‌واگنی (Tilt & Slide)',
    description: 'تلفیقی از پنجره کشویی و عایق‌بندی بی‌نقص دوحالته با نوار درزبندی لاستیکی و هوابندی کامل ۱۰۰ درصدی.',
    openingAngle: 'حرکت پیستونی و ریلی روان',
    hardware: 'سیستم نیمه‌اتومات یا فول‌اتوماتیک GU',
    recommendation: 'پنجره‌های قدی بزرگ ویلاها و پنت‌هاوس',
  },
];

const colorOptions = [
  { id: 'c-white', name: 'سفید صدفی صیقلی', hex: '#f8fafc', border: 'border-zinc-300' },
  { id: 'c-anthracite', name: 'طوسی آنتراسیت مات', hex: '#334155', border: 'border-slate-500' },
  { id: 'c-wood', name: 'لمینت بلوط تیره', hex: '#78350f', border: 'border-amber-700' },
  { id: 'c-black', name: 'مشکی کربن متالیک', hex: '#18181b', border: 'border-zinc-700' },
];

const glassOptions = [
  { id: 'g-clear', name: 'شفاف دوجداره صنعتی (۴+۱۲+۴ گاز آرگون)', spec: '۷۰٪ عبور نور طبیعی، استاندارد مسکونی' },
  { id: 'g-silver', name: 'سوپرسیلور رفلکس آینه‌ای', spec: 'حفظ حریم خصوصی در طول روز و کاهش تابش آفتاب' },
  { id: 'g-smoke', name: 'دودی ملایم سکوریت نشکن', spec: 'لوکس و مدرن، مقاومت مکانیکی ۵ برابری در برابر ضربه' },
  { id: 'g-sound', name: 'آکوستیک لمینت ضدصدا (PVB سایلنت)', spec: 'کاهش صدای تردد سنگین خودرو تا ۸۵ درصد' },
];

export function WindowConfigurator() {
  const [selectedType, setSelectedType] = useState(windowTypes[0]);
  const [selectedColor, setSelectedColor] = useState(colorOptions[1]);
  const [selectedGlass, setSelectedGlass] = useState(glassOptions[0]);

  return (
    <section id="configurator" className="py-24 bg-[#070a0f] text-white relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 inline-flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>پیکربندی هوشمند و شخصی‌سازی</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            انتخاب مدل بازشو و رنگ پنجره تاپ‌وین
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
            سیستم بازشو، رنگ فریم و ساختار شیشه را متناسب با معماری ساختمان، اقلیم آب و هوایی و ابعاد بازشوها شخصی‌سازی کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Live Preview Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl text-right">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 rounded-full">
                  پیش‌نمایش پیکربندی تاپ‌وین
                </span>
                <span className="text-xs text-zinc-400 font-mono">TOPWIN CONFIG</span>
              </div>

              {/* Graphic Representation Box */}
              <div
                className="w-full aspect-[4/3] rounded-2xl p-6 flex flex-col justify-center items-center transition-all duration-300 relative border-4 shadow-inner"
                style={{
                  backgroundColor: selectedColor.hex === '#f8fafc' ? '#18181b' : '#090d16',
                  borderColor: selectedColor.hex,
                }}
              >
                {/* Simulated Window Frame */}
                <div
                  className="w-4/5 h-4/5 rounded-xl border-4 relative overflow-hidden flex items-center justify-center shadow-2xl transition-all"
                  style={{ borderColor: selectedColor.hex }}
                >
                  {/* Glass Color Overlay */}
                  <div
                    className="absolute inset-0 transition-colors duration-300"
                    style={{
                      backgroundColor:
                        selectedGlass.id === 'g-silver'
                          ? 'rgba(148, 163, 184, 0.35)'
                          : selectedGlass.id === 'g-smoke'
                          ? 'rgba(30, 41, 59, 0.65)'
                          : selectedGlass.id === 'g-sound'
                          ? 'rgba(56, 189, 248, 0.25)'
                          : 'rgba(255, 255, 255, 0.1)',
                    }}
                  />

                  {/* Window Divider / Sash lines based on type */}
                  <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/20" />
                  <div className="relative z-10 text-center p-4">
                    <span className="text-xs font-black text-white bg-black/60 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                      {selectedType.name}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-zinc-400 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>طرح شبیه‌سازی فنی مقطع</span>
                </div>
              </div>

              {/* Summary Specs */}
              <div className="mt-6 space-y-2.5 text-xs border-t border-white/10 pt-5">
                <div className="flex justify-between">
                  <span className="text-zinc-500">مکانیزم بازشو:</span>
                  <span className="text-white font-bold">{selectedType.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">پوشش رنگ پروفیل:</span>
                  <span className="text-white font-bold">{selectedColor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">ساختار شیشه:</span>
                  <span className="text-cyan-400 font-bold">{selectedGlass.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">یراق‌آلات پیشنهادی:</span>
                  <span className="text-zinc-300">{selectedType.hardware}</span>
                </div>
              </div>

              <a
                href="#calculator"
                className="mt-6 w-full py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs tracking-tight transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>محاسبه قیمت این پیکربندی</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </a>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Window Type Selector */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 text-right">
                ۱. انتخاب نوع مکانیزم بازشو
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {windowTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-2xl text-right transition-all border ${
                        isSelected
                          ? 'bg-zinc-900 border-cyan-400 shadow-md shadow-cyan-500/10'
                          : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-xs text-white">{type.name}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed mb-2">
                        {type.description}
                      </p>
                      <span className="text-[10px] text-zinc-500 font-medium">
                        کاربرد: {type.recommendation}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Color Options */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 text-right">
                ۲. انتخاب رنگ و پوشش پروفیل UPVC
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {colorOptions.map((c) => {
                  const isSelected = selectedColor.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedColor(c)}
                      className={`p-3 rounded-2xl text-center border transition-all flex flex-col items-center gap-2 ${
                        isSelected
                          ? 'bg-zinc-900 border-cyan-400'
                          : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full border border-white/30 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-[11px] font-semibold text-zinc-200">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Glass Options */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 text-right">
                ۳. انتخاب ساختار و نوع شیشه دوجداره
              </label>
              <div className="space-y-2.5">
                {glassOptions.map((g) => {
                  const isSelected = selectedGlass.id === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGlass(g)}
                      className={`w-full p-3.5 rounded-2xl text-right border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-zinc-900 border-cyan-400'
                          : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-zinc-500'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-white">{g.name}</div>
                          <div className="text-[11px] text-zinc-400">{g.spec}</div>
                        </div>
                      </div>
                      <Shield className="w-4 h-4 text-zinc-500" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

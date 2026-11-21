'use client';

import { useState } from 'react';
import { Calculator, Send, CheckCircle2, Phone, Sparkles, MessageCircle } from 'lucide-react';

const profileRates: Record<string, { name: string; meterRate: number }> = {
  white: { name: 'سفید ۵ کاناله استاندارد', meterRate: 480000 },
  wood: { name: 'لمینت طرح چوب بلوطی', meterRate: 720000 },
  anthracite: { name: 'طوسی آنتراسیت متالیک مات', meterRate: 690000 },
  triple: { name: 'مقطع ۳ جداره فوق عایق', meterRate: 850000 },
};

const glassRates: Record<string, { name: string; sqMeterRate: number }> = {
  clear: { name: 'دوجداره شفاف گاز آرگون (۴+۱۲+۴)', sqMeterRate: 650000 },
  silver: { name: 'سوپرسیلور رفلکس آینه‌ای', sqMeterRate: 820000 },
  smoke: { name: 'دودی ملایم سکوریت نشکن', sqMeterRate: 980000 },
  acoustic: { name: 'لمینت آکوستیک سایلنت (PVB)', sqMeterRate: 1350000 },
};

export function OnlineCalculator() {
  const [width, setWidth] = useState<number>(150); // cm
  const [height, setHeight] = useState<number>(180); // cm
  const [panels, setPanels] = useState<number>(2);
  const [selectedProfile, setSelectedProfile] = useState<string>('anthracite');
  const [selectedGlass, setSelectedGlass] = useState<string>('clear');
  const [userPhone, setUserPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Calculations
  const widthM = width / 100;
  const heightM = height / 100;
  const glassArea = Math.max(0.2, (widthM * heightM * 0.85)).toFixed(2); // m^2
  const profileLength = ((widthM + heightM) * 2 + (panels > 1 ? heightM * (panels - 1) : 0)).toFixed(1); // meters

  const estimatedTotal = Math.round(
    Number(profileLength) * profileRates[selectedProfile].meterRate +
    Number(glassArea) * glassRates[selectedGlass].sqMeterRate +
    panels * 1200000 // Hardware & accessories per sash
  );

  const formattedPrice = new Intl.NumberFormat('fa-IR').format(estimatedTotal);

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `سلام وقت بخیر، درخواست استعلام قیمت پنجره تاپ‌وین با ابعاد:\nعرض: ${width} سانتی‌متر\nارتفاع: ${height} سانتی‌متر\nتعداد لنگه: ${panels}\nنوع پروفیل: ${profileRates[selectedProfile].name}\nنوع شیشه: ${glassRates[selectedGlass].name}\nبرآورد قیمت تقریبی سایت: ${formattedPrice} تومان\nشماره تماس: ${userPhone}`
    );
    window.open(`https://wa.me/989120000000?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userPhone.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#070a0f] text-white relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>شفافیت و سرعت محاسبه</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            محاسبه‌گر هوشمند ابعاد و پیش‌فاکتور آنلاین
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
            ابعاد حدودی پنجره، تعداد لنگه‌ها و مشخصات را وارد کنید تا برآورد فوری هزینه و متراژ را مشاهده نمایید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-zinc-950/70 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl text-right space-y-6">
            {/* Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  عرض پنجره (سانتی‌متر): {width} cm
                </label>
                <input
                  type="range"
                  min="60"
                  max="400"
                  step="5"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
                  <span>۶۰ cm</span>
                  <span>۴۰۰ cm</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  ارتفاع پنجره (سانتی‌متر): {height} cm
                </label>
                <input
                  type="range"
                  min="60"
                  max="320"
                  step="5"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
                  <span>۶۰ cm</span>
                  <span>۳۲۰ cm</span>
                </div>
              </div>
            </div>

            {/* Panels / Sashes */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2">
                تعداد لنگه‌ها (تقسیم‌بندی فرم):
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPanels(n)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                      panels === n
                        ? 'bg-cyan-500 text-zinc-950 border-cyan-400 shadow-md'
                        : 'bg-zinc-900 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {n} لنگه
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Selection */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2">
                نوع و رنگ مقطع پروفیل UPVC:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(profileRates).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedProfile(key)}
                    className={`p-3 rounded-2xl text-right text-xs transition-all border ${
                      selectedProfile === key
                        ? 'bg-zinc-900 border-cyan-400 text-white shadow-md'
                        : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold mb-0.5">{item.name}</div>
                    <div className="text-[10px] text-zinc-500">متری {new Intl.NumberFormat('fa-IR').format(item.meterRate)} تومان</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Glass Selection */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2">
                نوع شیشه و گاز عایق:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(glassRates).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedGlass(key)}
                    className={`p-3 rounded-2xl text-right text-xs transition-all border ${
                      selectedGlass === key
                        ? 'bg-zinc-900 border-cyan-400 text-white shadow-md'
                        : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="font-bold mb-0.5">{item.name}</div>
                    <div className="text-[10px] text-cyan-400/80">مترمربع {new Intl.NumberFormat('fa-IR').format(item.sqMeterRate)} تومان</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Action Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-3xl border border-white/15 backdrop-blur-xl shadow-2xl text-right sticky top-24 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 rounded-full">
                پیش‌فاکتور شفاف آنلاین
              </span>
              <span className="text-xs text-zinc-500 font-mono">TOPWIN ESTIMATE</span>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>ابعاد پنجره:</span>
                <span className="text-white font-mono">{width} × {height} سانتی‌متر</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>مساحت مفید شیشه:</span>
                <span className="text-white font-mono">{glassArea} مترمربع</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>متراژ طول پروفیل:</span>
                <span className="text-white font-mono">{profileLength} متر</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>پروفیل انتخابی:</span>
                <span className="text-zinc-200 font-semibold">{profileRates[selectedProfile].name}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>شیشه انتخابی:</span>
                <span className="text-zinc-200 font-semibold">{glassRates[selectedGlass].name}</span>
              </div>
            </div>

            {/* Total Estimated Price */}
            <div className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-800/50 text-center">
              <span className="text-[11px] text-zinc-400 block mb-1">برآورد تقریبی هزینه ساخت (با یراق‌آلات کامل):</span>
              <div className="text-3xl sm:text-4xl font-black text-cyan-300">
                {formattedPrice}{' '}
                <span className="text-xs font-normal text-zinc-400">تومان</span>
              </div>
              <span className="text-[10px] text-zinc-400 mt-1 block">
                * همراه با ۱۰ سال گارانتی رسمی و خدمات نصب تخصصی
              </span>
            </div>

            {/* Quick Action Buttons */}
            {isSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>درخواست شما ثبت شد. کارشناسان تاپ‌وین حداکثر تا ۲ ساعت آینده با شما تماس خواهند گرفت.</span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="شماره تماس خود را وارد کنید (مثال: ۰۹۱۲...)"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-black/60 border border-white/20 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400 text-right"
                    dir="rtl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>ثبت درخواست بازدید و اندازه‌گیری رایگان</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-tight transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ارسال مستقیم این پیش‌فاکتور در واتساپ</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

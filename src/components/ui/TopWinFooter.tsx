'use client';

import Image from 'next/image';
import { Phone, MapPin, Mail, ShieldCheck, Award, Clock, ArrowUp } from 'lucide-react';

export function TopWinFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] text-white border-t border-white/10 relative overflow-hidden pt-20 pb-12">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Footer Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-zinc-900/60 to-zinc-950 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-2xl">
          <div className="text-right">
            <span className="text-xs font-bold text-cyan-400">مشاوره تخصصی و بازدید رایگان در محل پروژه</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              آماده‌اید آرامش و زیبایی را به ساختمان خود بیاورید؟
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              کارشناسان تاپ‌وین با تجهیزات اندازه‌گیری لیزری آماده اعزام به پروژه شما هستند.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:02191000000"
              className="px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs tracking-tight transition-all active:scale-95 shadow-xl shadow-cyan-500/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>تماس فوری: ۰۲۱-۸۸۸۸۴۴۴۴</span>
            </a>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-right">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cyan-400/40 shadow-lg shadow-cyan-500/20 bg-white">
                <Image
                  src="/images/topwin-logo.jpg"
                  alt="لوگوی رسمی تاپ وین TopWin"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">TopWin</span>
                <span className="text-[10px] text-cyan-400 font-medium -mt-1">
                  عایق آرامش، انتخاب هوشمندانه
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              صنایع پنجره دوجداره و سه‌جداره تاپ‌وین با بیش از یک دهه تجربه در تولید و اجرای تخصصی سیستم‌های UPVC و آلومینیوم ترمال‌بریک، حافظ انرژی و آرامش فضای زندگی شماست.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>استاندارد RAL آلمان</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>گارانتی ۱۰ ساله</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#profiles" className="hover:text-cyan-400 transition-colors">
                  مشخصات مقاطع و کاتالوگ
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-cyan-400 transition-colors">
                  پیکربندی سه‌بعدی بازشوها
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-cyan-400 transition-colors">
                  شبیه‌ساز صوتی و حرارتی
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  پروژه‌های شاخص ویلایی و برجی
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  محاسبه‌گر پیش‌فاکتور آنلاین
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products & Profile Types */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
              محصولات تخصصی
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>پنجره دوجداره دوحالته (Tilt & Turn)</li>
              <li>پنجره کشویی مونو ریل و جفت ریل</li>
              <li>سیستم پنجره فولکس‌واگنی اتوماتیک</li>
              <li>درب و پنجره فرانسوی بدون ستون میانی</li>
              <li>پروفیل‌های لمینت طرح چوب بلوط و گردو</li>
              <li>شیشه‌های سه‌جداره آکوستیک گاز آرگون</li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
              اطلاعات کارخانه و شوروم
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>دفتر مرکزی: تهران، سعادت‌آباد، میدان کاج، مجتمع اداری سرو</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>کارخانه: شهرک صنعتی شمس‌آباد، بلوار بوستان</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span dir="ltr">۰۲۱-۸۸۸۸۴۴۴۴</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>ساعات کاری: شنبه تا چهارشنبه ۹ الی ۱۸ | پنجشنبه‌ها ۹ الی ۱۴</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © ۲۰۲۶ صنایع درب و پنجره دوجداره <span className="text-zinc-300 font-bold">تاپ‌وین (TopWin)</span>. تمام حقوق محفوظ است.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}

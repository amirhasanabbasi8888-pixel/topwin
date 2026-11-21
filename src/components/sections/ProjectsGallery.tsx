'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Building2, MapPin, Layers, Maximize2, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'ویلای معلق صخره‌ای',
    location: 'مازندران، چلک',
    category: 'villa',
    categoryName: 'ویلاهای مدرن',
    profile: 'UPVC سری ۷۰ لمینت بلوطی تیره',
    glass: 'دوجداره سوپرسیلور رفلکس سکوریت',
    area: '۲۸۰ مترمربع بازشوی قدی',
    image: '/images/hero-ref.jpg',
    description: 'طراحی و اجرای پنجره‌های سرتاسری پانوراما با بازشوی فرانسوی بدون ستون میانی، عایق کامل در برابر رطوبت شدید شمال و بادهای ساحلی.',
  },
  {
    id: 2,
    title: 'پنت‌هاوس مینیمال فرشته',
    location: 'تهران، خیابان فرشته',
    category: 'penthouse',
    categoryName: 'پنت‌هاوس و لوکس',
    profile: 'پروفیل آنتراسیت متالیک مات ۵ کاناله',
    glass: 'سه‌جداره اولترا آکوستیک گاز آرگون',
    area: '۱۹۰ مترمربع پنجره‌های لیفت اند اسلاید',
    image: '/images/hero-ref.jpg',
    description: 'مهندسی اختصاصی برای کاهش بیش از ۴۸ دسی‌بل نویز شهری تهران با شیشه‌های لمینت ضدسرقت و یراق‌آلات توکار آلمانی.',
  },
  {
    id: 3,
    title: 'ویلای بتن و چوب کوهسار',
    location: 'البرز، شهرک ویلایی کوهسار',
    category: 'villa',
    categoryName: 'ویلاهای مدرن',
    profile: 'طرح چوب گردویی و مشکی کربن',
    glass: 'دوجداره کلیر گرید A با گاز آرگون',
    area: '۳۴۰ مترمربع شیشه و فریم',
    image: '/images/hero-ref.jpg',
    description: 'تلفیق معماری ارگانیک با بازشوهای بزرگ فولکس‌واگنی، مهار کامل سرمای سوزناک زمستانی مناطق کوهپایه‌ای.',
  },
  {
    id: 4,
    title: 'بازسازی برج مسکونی سعادت‌آباد',
    location: 'تهران، میدان کاج',
    category: 'renovation',
    categoryName: 'تعویض بدون تخریب',
    profile: 'پروفیل سفید صدفی بازسازی (فریم پرواز دار)',
    glass: 'دوجداره آکوستیک عایق ۴+۱۲+۴',
    area: '۱۲۰ لنگه پنجره استاندارد',
    image: '/images/hero-ref.jpg',
    description: 'جایگزینی سریع و پاکیزه پنجره‌های قدیمی آهنی با پنجره‌های تاپ‌وین طی یک روز کاری بدون کوچک‌ترین تخریب گچ و رنگ دیوار.',
  },
];

export function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#090e17] text-white relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-right">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 inline-flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>کارنامه و اعتبار تاپ‌وین</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              پروژه‌های شاخص معماری اجراشده
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              نگاهی به برخی از پروژه‌های برجسته مسکونی، ویلایی و بازسازی مجهز به سیستم‌های مدرن درب و پنجره دوجداره تاپ‌وین.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'همه پروژه‌ها' },
              { id: 'villa', label: 'ویلاهای مدرن' },
              { id: 'penthouse', label: 'پنت‌هاوس و لوکس' },
              { id: 'renovation', label: 'تعویض بدون تخریب' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  activeFilter === f.id
                    ? 'bg-cyan-500 text-zinc-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-zinc-900/60 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col"
            >
              {/* Architectural Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white">
                    {item.categoryName}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 left-4 z-10 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <span className="font-mono text-cyan-400 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                    {item.area}
                  </span>
                </div>
              </div>

              {/* Technical Details Body */}
              <div className="p-6 sm:p-7 text-right flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">نوع پروفیل:</span>
                    <span className="text-zinc-200 font-semibold">{item.profile}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">نوع شیشه:</span>
                    <span className="text-cyan-400 font-semibold">{item.glass}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

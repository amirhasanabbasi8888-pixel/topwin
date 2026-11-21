'use client';

import { Box, Layers, Cpu, Shield, Activity, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'رندرینگ Real-time با Three.js',
    description: 'صحنه‌های سه‌بعدی تعاملی و پرفورمنس ۶۰ تا ۱۲۰ فریم بر ثانیه با شیدرهای اختصاصی GLSL و لایپلیپ بافت فشرده.',
    icon: Box,
    badge: 'WebGL 2.0',
    colSpan: 'md:col-span-2',
    gradient: 'from-cyan-500/10 via-transparent to-transparent',
  },
  {
    title: 'دیزاین مدرن و Bento Grid',
    description: 'هارمونی رنگی اختصاصی، گلس‌مورفیزم عمیق و میکرو-اینترکشن‌های لمسی مطابق با استانداردهای Taste Skill.',
    icon: Layers,
    badge: 'Design Craft',
    colSpan: 'md:col-span-1',
    gradient: 'from-violet-500/10 via-transparent to-transparent',
  },
  {
    title: 'معماری مدرن Next.js App Router',
    description: 'بارگذاری بهینه با Server Components (RSC)، زمان لود اولیه زیر ۵۰۰ میلی‌ثانیه و فچ دیتای تایپ‌سیف.',
    icon: Cpu,
    badge: 'Fullstack Next.js',
    colSpan: 'md:col-span-1',
    gradient: 'from-emerald-500/10 via-transparent to-transparent',
  },
  {
    title: 'سئو مدرن و آمادگی برای موتورهای AEO',
    description: 'تزریق خودکار اسکیماهای JSON-LD، تگ‌های OpenGraph و ساختار بهینه برای موتورهای هوش مصنوعی و گوگل.',
    icon: Sparkles,
    badge: 'SEO / AEO Ready',
    colSpan: 'md:col-span-1',
    gradient: 'from-amber-500/10 via-transparent to-transparent',
  },
  {
    title: 'استقرار داکر چندمرحله‌ای و CI/CD',
    description: 'پکیجینگ سبک و بهینه با Multi-Stage Dockerfile و ایمیج Alpine، همراه با ارکستراسیون دیتابیس PostgreSQL.',
    icon: Shield,
    badge: 'DevOps Ready',
    colSpan: 'md:col-span-1',
    gradient: 'from-blue-500/10 via-transparent to-transparent',
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
          معماری مدرن
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4">
          طراحی‌شده برای نهایت پرفورمنس و زیبایی
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          ترکیبی از گرافیک خیره‌کننده سه‌بعدی و کدنویسی استاندارد با بالاترین بازدهی در مرورگرها و دستگاه‌های موبایل.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bento-glow group relative p-7 rounded-3xl bg-zinc-900/40 border border-white/[0.07] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between ${item.colSpan}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.04] flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>بهینه‌سازی شده در سطح هسته</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

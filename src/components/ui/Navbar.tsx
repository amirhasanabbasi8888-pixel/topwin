'use client';

import { Sparkles, Box, ShieldCheck, Zap } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 text-sm max-w-4xl w-full">
        <div className="flex items-center gap-2 font-bold tracking-tight text-white">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Box className="w-4 h-4" />
          </div>
          <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Nexus3D
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">قابلیت‌ها</a>
          <a href="#experience" className="hover:text-white transition-colors">بوم سه‌بعدی</a>
          <a href="#architecture" className="hover:text-white transition-colors">معماری</a>
          <a href="#devops" className="hover:text-white transition-colors">استقرار</a>
        </div>

        <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all active:scale-95 shadow-md shadow-white/10 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>شروع رایگان</span>
        </button>
      </nav>
    </header>
  );
}

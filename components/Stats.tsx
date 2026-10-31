import React from 'react';
import { Tv, Film, Activity, Clock } from 'lucide-react';

export function Stats() {
  return (
    <section className="bg-slate-900/60 border-y border-slate-800/80 py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="block text-2xl sm:text-3xl font-black text-white tracking-tight">+25 000</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
              <Tv className="w-3.5 h-3.5 text-blue-400" />
              <span>Chaînes Direct</span>
            </span>
          </div>
          <div className="space-y-1 border-l border-slate-800">
            <span className="block text-2xl sm:text-3xl font-black text-white tracking-tight">+90 000</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
              <Film className="w-3.5 h-3.5 text-purple-400" />
              <span>Films & Séries 4K</span>
            </span>
          </div>
          <div className="space-y-1 border-l border-slate-800">
            <span className="block text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight">99.9%</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Stabilité Anti-Freeze</span>
            </span>
          </div>
          <div className="space-y-1 border-l border-slate-800">
            <span className="block text-2xl sm:text-3xl font-black text-white tracking-tight">&lt; 3 min</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Activation Express</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

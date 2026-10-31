import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  ShieldCheck, 
  Tv, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Radio, 
  Play
} from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-slate-950 text-white py-12 lg:py-20 relative overflow-hidden border-b border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Main Value Proposition & H1 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>N°1 IPTV France 2026 &middot; Serveurs Dédiés Anti-Coupure</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Abonnement IPTV Smarters Pro <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Vos Chaînes & VOD en 4K Sans Coupure
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Profitez du meilleur <strong className="text-white font-semibold">abonnement IPTV Smarters Pro</strong> en France. Accédez à plus de 25 000 chaînes directes et 90 000 films et séries en qualité 4K Ultra HD à 60 FPS avec notre technologie anti-freeze garantie.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="#pricing" 
                className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider transition-all hover:scale-[1.02]"
              >
                <span>Choisir Mon Abonnement</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/guide-installation" 
                className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold rounded-xl text-sm transition-all"
              >
                <span>Guide d'Installation Rapide</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-0.5">
                <span className="block text-xl font-bold text-white">4K UHD 60FPS</span>
                <span className="block text-xs text-slate-400">Flux Sport & Direct</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-xl font-bold text-white">&lt; 3 min</span>
                <span className="block text-xs text-slate-400">Livraison Express</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-xl font-bold text-white">99.9% Uptime</span>
                <span className="block text-xs text-slate-400">Serveurs Anti-Freeze</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High-Trust Live Streaming Hub Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-7 space-y-6 shadow-2xl">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                    <Tv className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Diffusion Serveur France</h2>
                    <span className="text-xs text-slate-400">Cluster CDN Haute Disponibilité</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>En Ligne (12ms)</span>
                </span>
              </div>

              {/* Bouquets & Content Pills */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Bouquets Premium Inclus
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-semibold text-slate-200">Canal+ & Cinéma</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="font-semibold text-slate-200">beIN Sports 1-10</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-semibold text-slate-200">RMC Sport & DAZN</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-200">TNT France HD 4K</span>
                  </div>
                </div>
              </div>

              {/* Technical Features Checklist */}
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guide TV électronique (EPG) 7 jours synchronisé</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Replay (Catch-up) 48h à 72h disponible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Identifiants Xtream Codes + Playlist M3U inclus</span>
                </li>
              </ul>

              {/* Direct Card Action Button */}
              <div className="pt-2">
                <Link
                  href="/abonnement-iptv-12-mois"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <span>Activer la Formule 12 Mois VIP (1 Mois Offert)</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

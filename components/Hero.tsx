import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <section className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-12 lg:py-20 relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 font-sans">
      {/* Background Image: World-Class Cinematic Scrim & High Vibrancy */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero-family-bg.jpg"
          alt="Famille profitant d'un abonnement IPTV Smarters Pro 4K sur Smart TV"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-40 sm:opacity-55 lg:opacity-70 dark:opacity-70 dark:sm:opacity-80 dark:lg:opacity-85"
        />
        {/* Directional Scrim: Strong on left for H1/CTA contrast, feathering into vivid TV & family on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 sm:via-slate-50/85 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:sm:via-slate-950/80 lg:w-7/12" />
        
        {/* Subtle global veil to preserve color richness without washing out */}
        <div className="absolute inset-0 bg-slate-100/30 dark:bg-slate-950/20" />

        {/* Top/Bottom seamless fade to navbar and following section */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-transparent to-slate-50 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols): Main Value Proposition & H1 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/80 dark:border-blue-800/60 dark:text-blue-300 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>N°1 IPTV France 2026 &middot; Serveurs Dédiés Anti-Coupure</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
              Abonnement IPTV France <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400">
                Serveur Stable &amp; Streaming 4K Premium
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Profitez du meilleur <strong className="text-slate-900 dark:text-white font-semibold">abonnement IPTV en France</strong>. Accédez à plus de 25 000 chaînes directes et 90 000 films et séries sur notre <strong className="text-slate-900 dark:text-white">serveur stable et premium</strong> en qualité 4K Ultra HD à 60 FPS sans coupure.
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
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700/80 font-bold rounded-xl text-sm transition-all"
              >
                <span>Guide d'Installation Rapide</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <div className="space-y-0.5">
                <span className="block text-xl font-bold text-slate-900 dark:text-white">4K UHD 60FPS</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">Flux Sport &amp; Direct</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-xl font-bold text-slate-900 dark:text-white">&lt; 3 min</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">Livraison Express</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-xl font-bold text-slate-900 dark:text-white">99.9% Uptime</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">Serveurs Anti-Freeze</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): High-Trust Live Streaming Hub Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 p-6 sm:p-7 space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
                    <Tv className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-none">Diffusion Serveur France</h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Cluster CDN Haute Disponibilité</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>En Ligne (12ms)</span>
                </span>
              </div>

              {/* Bouquets & Content Pills */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Bouquets Premium Inclus
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Cinéma &amp; Séries</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Sport en Direct HD</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Football &amp; Ligues 4K</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">TNT France HD 4K</span>
                  </div>
                </div>
              </div>

              {/* Technical Features Checklist */}
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Guide TV électronique (EPG) 7 jours synchronisé</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Replay (Catch-up) 48h à 72h disponible</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
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

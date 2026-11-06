import React from 'react';
import Link from 'next/link';
import { Tv, Flame, Trophy, Film, Globe2, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export function HomeChannelsSport() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900 font-sans text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            <span>Diffusion Directe 4K UHD</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            +25 000 Chaînes TV en Direct &amp; Tout le Sport en 60 FPS
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Accédez à l&apos;intégralité des compétitions sportives majeures et aux meilleurs bouquets généralistes mondiaux avec un guide EPG 7 jours synchronisé et zéro coupure lors des affiches à forte audience.
          </p>
        </div>

        {/* 3 Pillars Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Sports Direct 4K */}
          <div className="p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500/40 flex flex-col justify-between space-y-6 shadow-xl shadow-emerald-950/20">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Pass Sport Complet</span>
                <h3 className="text-xl font-extrabold text-white">Football &amp; Sports en Direct 4K</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Suivez la Ligue 1, l&apos;UEFA Champions League, la Premier League, la Formule 1, l&apos;UFC et le Top 14 en qualité 4K Ultra HD à 60 FPS sans aucun décalage d&apos;image.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Tous les canaux Canal+, beIN Sports, DAZN, RMC</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Flux 60 FPS anti-freeze pour le sport d&apos;action</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Replay 72h pour revoir les rencontres manquées</span>
                </li>
              </ul>
            </div>

            <Link
              href="/sport"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Découvrir le Bouquet Sport</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Bouquet TNT & Francophonie */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Tv className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">TNT &amp; Régions</span>
                <h3 className="text-xl font-extrabold text-white">Bouquet France, Belgique &amp; Suisse</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toutes les chaînes nationales de la TNT française en haute définition sans antenne râteau, complétées par les bouquets officiels francophones de Belgique, Suisse et Canada.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>TF1, France TV, M6, Canal+ en qualité native</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Chaînes régionales et locales d&apos;information</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Guide des programmes XMLTV 7 jours complet</span>
                </li>
              </ul>
            </div>

            <Link
              href="/chaine"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Voir la Liste des Chaînes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Cinéma, Séries & Monde */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">International</span>
                <h3 className="text-xl font-extrabold text-white">Bouquets Monde &amp; Cinéma Premium</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Large sélection de chaînes cinéma, documentaires, divertissement jeunesse et bouquets internationaux (Espagne, Portugal, Italie, Maghreb, UK, USA).
              </p>
              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Canal+ Cinéma, OCS, Discovery, National Geo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Audio multilingue VF / VOSTFR sur le cinéma</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Zapping instantané inférieur à 0,4 seconde</span>
                </li>
              </ul>
            </div>

            <Link
              href="/catalogue-vod"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Explorer la VOD (+90 000 Titres)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Test Préalable Disponible</span>
            <p className="text-sm font-semibold text-white">Vous souhaitez vérifier la fluidité des chaînes 4K sur votre téléviseur ?</p>
          </div>
          <Link
            href="/test-iptv-gratuit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Lancer un Test IPTV 24h</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


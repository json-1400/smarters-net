import React from 'react';
import Link from 'next/link';
import { Tv, Trophy, Film, Globe2, Sparkles, Shield, ArrowRight, Check } from 'lucide-react';

interface Bouquet {
  id: string;
  count: string;
  badge: string;
  title: string;
  description: string;
  channels: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
}

const BOUQUETS: Bouquet[] = [
  {
    id: 'france',
    count: '700+ chaînes',
    badge: 'TNT & Premium',
    title: 'Chaînes France en Direct',
    description: 'Toute la TNT française, le bouquet Canal+ complet, les chaînes d\'information en continu et les déclinaisons régionales en qualité 4K et Full HD.',
    channels: ['TF1 4K', 'France 2 / 3 / 5', 'M6 HD', 'Canal+', 'Canal+ Cinéma', 'BFM TV', 'LCI', 'C8'],
    icon: Tv,
    accentColor: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800',
  },
  {
    id: 'sport',
    count: '350+ chaînes',
    badge: '100% Sport 60 FPS',
    title: 'Sport & Compétitions en Direct',
    description: 'Ligue 1, UEFA Champions League, Premier League, F1, NBA, Roland-Garros et Top 14. Flux anti-freeze ultra-fluides sans aucun pass supplémentaire.',
    channels: ['BeIN Sports 1-3', 'Canal+ Sport 360', 'RMC Sport 1-4', 'Eurosport 1-2', 'DAZN', 'Automoto'],
    icon: Trophy,
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
  },
  {
    id: 'vod',
    count: '230 000+ titres',
    badge: 'Cinéma & Séries',
    title: 'Films & Séries VOD à la Demande',
    description: 'Vidéothèque enrichie chaque semaine avec les sorties cinéma récentes et séries originales Netflix, Prime et Disney+. Versions VF, VOSTFR et VO.',
    channels: ['Sorties Cinéma 2026', 'Séries Netflix / Prime', 'Blockbusters 4K HDR', 'Comédies & Drames', 'Animation'],
    icon: Film,
    accentColor: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800',
  },
  {
    id: 'international',
    count: '3 000+ chaînes',
    badge: 'Multi-Pays',
    title: 'Bouquet International & Monde',
    description: 'Le meilleur des télévisions étrangères pour les foyers multiculturels : chaînes anglo-saxonnes, hispaniques, arabophones, italiennes et portugaises.',
    channels: ['Royaume-Uni (BBC/Sky)', 'Espagne (Movistar)', 'Maroc / Algérie / Tunisie', 'USA & Canada', 'Italie / Portugal'],
    icon: Globe2,
    accentColor: 'text-amber-600 dark:text-amber-400',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
  },
  {
    id: 'jeunesse',
    count: '200+ chaînes',
    badge: 'Contrôle Parental',
    title: 'Jeunesse, Famille & Dessins Animés',
    description: 'Univers télévisuel sécurisé pour les enfants de tous âges avec contrôle parental natif intégré pour encadrer facilement le temps d\'écran familial.',
    channels: ['Disney Channel', 'Gulli Max', 'Nickelodeon', 'Piwi+', 'Cartoon Network', 'Toonami'],
    icon: Shield,
    accentColor: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
  },
  {
    id: 'premium',
    count: '260+ chaînes',
    badge: 'Documentaires & Culture',
    title: 'Bouquet Documentaires & Premium',
    description: 'Grandes chaînes de sciences, histoire, exploration et lifestyle incluses dans toutes les formules sans aucun coût additionnel.',
    channels: ['Discovery Channel', 'National Geographic', 'History Channel', 'Planète+ Crime', 'Science & Vie TV', 'Voyage'],
    icon: Sparkles,
    accentColor: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800',
  },
];

export function ThematicBouquets() {
  return (
    <section id="bouquets" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            <span>Tout inclus dans un seul abonnement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Tous nos Bouquets Thématiques en Qualité 4K Direct &amp; VOD
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Au lieu de cumuler Canal+, Netflix, Disney+, Prime Video et BeIN Sports à plus de <strong className="text-slate-900 dark:text-white">90 €/mois</strong>, notre abonnement centralise l&apos;intégralité de vos divertissements dans une seule application IPTV sans surcoût.
          </p>
        </div>

        {/* 6 Thematic Bouquets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BOUQUETS.map((bouquet) => {
            const Icon = bouquet.icon;
            return (
              <div
                key={bouquet.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${bouquet.accentColor}`} />
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-black uppercase text-slate-900 dark:text-white tracking-wide">
                        {bouquet.count}
                      </span>
                      <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded border mt-0.5 ${bouquet.badgeBg}`}>
                        {bouquet.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                      {bouquet.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {bouquet.description}
                    </p>
                  </div>
                </div>

                {/* Sample Channels Chips */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Exemples de chaînes incluses :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {bouquet.channels.map((ch, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50"
                      >
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{ch}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="bg-white dark:bg-gradient-to-r dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              Prêt à profiter de l&apos;intégralité de ces bouquets sur vos écrans ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Activation immédiate en moins de 10 minutes avec identifiants Xtream Codes et lien M3U sécurisé.
            </p>
          </div>
          <Link
            href="#pricing"
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 shrink-0"
          >
            <span>Voir les Formules &amp; Tarifs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}


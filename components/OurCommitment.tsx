import React from 'react';
import Link from 'next/link';
import { Server, Zap, Clock, CheckCircle2, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'cdn',
    icon: Server,
    tag: 'Haute Disponibilité',
    title: 'Infrastructure CDN Multi-Pays Européenne',
    description: 'Data centers européens géo-distribués avec basculement automatique. Latence mesurée à moins de 80 ms sur tout le territoire français pour garantir zéro écran noir pendant les grands matchs.',
    metric: '99.8%',
    metricLabel: 'Uptime réseau garanti',
  },
  {
    id: 'h265',
    icon: Zap,
    tag: 'Zéro Buffering',
    title: 'Stabilité Éprouvée Codec H.265 / HEVC',
    description: 'Optimisation de pointe du flux 4K 60 FPS sans coupure, même sur une connexion ADSL modeste. Basculement dynamique de serveur en 500 ms en cas de pic d\'audience.',
    metric: '500 ms',
    metricLabel: 'Failover automatique',
  },
  {
    id: 'activation',
    icon: Clock,
    tag: 'Processus Express',
    title: 'Activation Garantie en Moins de 10 Minutes',
    description: 'Votre commande est traitée automatiquement. Vos identifiants de connexion Xtream Codes et votre lien M3U sécurisé vous sont expédiés par e-mail et WhatsApp dès validation.',
    metric: '< 10 min',
    metricLabel: 'Livraison des accès',
  },
  {
    id: 'all-inclusive',
    icon: CheckCircle2,
    tag: 'Tarif Transparent',
    title: 'Un Prix Unique, 100% Tout Inclus',
    description: 'Pas de pack sport payant à débloquer séparément, pas de chaîne cachée. Votre abonnement donne accès à l\'intégralité des chaînes TV, du sport et de la VOD dès le premier jour.',
    metric: '100%',
    metricLabel: 'Catalogue débloqué',
  },
  {
    id: 'support',
    icon: Headphones,
    tag: 'Assistance 7j/7',
    title: 'Support Client Francophone Réactif 24/7',
    description: 'Une équipe technique experte basée localement, disponible en direct par WhatsApp et par e-mail pour vous assister pas-à-pas lors de l\'installation et de l\'utilisation quotidienne.',
    metric: '< 30 min',
    metricLabel: 'Temps de réponse',
  },
  {
    id: 'guarantee',
    icon: ShieldCheck,
    tag: 'Sérénité Totale',
    title: 'Garantie Satisfait ou Remboursé 14 Jours',
    description: 'Testez notre abonnement en conditions réelles sans aucun risque. Si le service ne correspond pas à vos attentes, nous procédons au remboursement intégral sans démarche complexe.',
    metric: '14 Jours',
    metricLabel: 'Garantie intégrale',
  },
];

export function OurCommitment() {
  return (
    <section id="engagement" className="py-20 sm:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Server className="w-3.5 h-3.5" />
            <span>Notre engagement &amp; expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Pourquoi Choisir notre Infrastructure IPTV en France
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Derrière chaque flux vidéo se trouve une architecture serveur européenne calibrée pour la très haute disponibilité. Découvrez ce qui nous différencie concrètement des serveurs génériques.
          </p>
        </div>

        {/* 6 Commitment Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-900/50 transition-all"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon and Metric Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="block text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                        {pillar.metric}
                      </span>
                      <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Tag and Title */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                      {pillar.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Reassurance Strip */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                Testez sans engagement de durée
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Paiement unique sécurisé sans prélèvement automatique ni reconduction cachée.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/test-iptv-gratuit"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              Test Gratuit 24h
            </Link>
            <Link
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider text-center inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir les Offres</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}


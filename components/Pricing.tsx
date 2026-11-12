import React from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, Zap, MessageCircle, Users, ArrowRight } from 'lucide-react';
import { buildWhatsappUrl } from '@/lib/contact';

const PLANS = [
  {
    id: 'Starter',
    name: 'Abonnement IPTV 3 Mois',
    price: '19.99',
    originalPrice: '34.99',
    duration: '3 Mois',
    popular: false,
    color: 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-slate-700 shadow-sm dark:shadow-none',
    btnBg: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700',
    badge: 'Formule Découverte',
    savings: 'Économisez 42%',
    whatsappMessage: "Bonjour, je souhaite commander la Formule Découverte 3 Mois à 19,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?",
    features: [
      '1 Connexion active simultanée',
      'Qualité IPTV 4K & HD',
      '+25 000 Chaînes TV en Direct',
      '+90 000 Films & Séries (VOD)',
      'Replay 48h sur les chaînes principales',
      'Mises à jour quotidiennes du catalogue',
      'Technologie anti-freeze intégrée',
      'Assistance client par WhatsApp 7j/7'
    ]
  },
  {
    id: 'Confort',
    name: 'Abonnement IPTV 6 Mois',
    price: '29.99',
    originalPrice: '49.99',
    duration: '6 Mois',
    popular: false,
    color: 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-slate-700 shadow-sm dark:shadow-none',
    btnBg: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700',
    badge: 'Formule Avantage',
    savings: 'Économisez 40%',
    whatsappMessage: "Bonjour, je souhaite commander la Formule Confort 6 Mois à 29,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?",
    features: [
      '1 Connexion active simultanée',
      'Qualité IPTV 4K & HD',
      '+25 000 Chaînes TV en Direct',
      '+90 000 Films & Séries (VOD)',
      'Replay 48h sur toutes les chaînes',
      'Mises à jour quotidiennes de la VOD',
      'Technologie anti-freeze v4.2',
      'Assistance client prioritaire WhatsApp'
    ]
  },
  {
    id: 'Premium',
    name: 'Abonnement IPTV 12 Mois VIP',
    price: '49.99',
    originalPrice: '69.99',
    duration: '12 Mois',
    popular: true,
    color: 'border-blue-600 bg-gradient-to-b from-blue-50/70 via-white to-white dark:from-blue-950/30 dark:to-slate-900 ring-2 ring-blue-500/30 shadow-2xl shadow-blue-500/10 dark:border-blue-500',
    btnBg: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30',
    badge: 'MEILLEURE VENTE & RECOMMANDÉ',
    savings: 'Économisez 28% — Meilleur Tarif',
    whatsappMessage: "Bonjour, je souhaite commander l'Abonnement 12 Mois VIP (1 Écran + 1 Mois Offert) à 49,99 €. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?",
    features: [
      '1 Connexion 4K dédiée (1 Mois Offert)',
      'Qualité IPTV 4K & UHD 60fps',
      '+25 000 Chaînes TV en Direct',
      '+90 000 Films & Séries (VOD) 4K',
      'Replay 72h & EPG électronique complet',
      'Serveurs VIP ultra-rapides sans buffering',
      'Technologie anti-freeze avancée',
      'Support VIP dédié WhatsApp & Live Chat 7j/7'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 font-sans text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 px-3.5 py-1.5 text-xs font-bold mb-4 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Tarifs Transparents &amp; Sans Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
            Choisissez Votre Formule IPTV Smarters Pro
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Profitez de nos offres d'abonnement en France. Aucun renouvellement automatique caché : vous renouvelez uniquement si vous êtes 100% satisfait.
          </p>
        </div>

        {/* Cards Grid (3 Core Plans: 3, 6, 12 Mois) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`border rounded-2xl p-6 sm:p-7 flex flex-col relative transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${plan.color}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                  MEILLEURE VENTE &middot; RECOMMANDÉ
                </span>
              )}
              
              {/* Card Header */}
              <div className="mb-6 border-b border-slate-200 dark:border-slate-800 pb-6">
                <span className="text-[11px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1">
                  {plan.badge}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white min-h-[3.2rem] flex items-center leading-snug">
                  {plan.name}
                </h3>
                
                {/* Price Display */}
                <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-slate-400 dark:text-slate-500 text-sm font-semibold line-through mr-2">
                    {plan.originalPrice} €
                  </span>
                  <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400 ml-1">€</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs font-semibold ml-2">/ {plan.duration}</span>
                </div>
                
                {/* Savings tag */}
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
                  {plan.savings}
                </span>
              </div>

              {/* Card Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    <Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Links */}
              <div className="mt-auto pt-2 space-y-2">
                <Link
                  href={`/checkout?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center font-extrabold py-3.5 px-4 rounded-xl text-xs transition-all uppercase tracking-wider text-center ${plan.btnBg}`}
                >
                  Choisir cette formule &rarr;
                </Link>
                <a
                  href={buildWhatsappUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30 dark:text-emerald-300 dark:border-emerald-500/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 text-center pt-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>Activation manuelle sécurisée en 15 min</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Écrans / Multi-Connexions / Multiroom CTA Banner */}
        <div className="mt-14 max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border border-blue-200 dark:border-blue-500/30 p-6 sm:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-500/15 dark:border-blue-500/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Solution Famille, Multiroom &amp; Multi-Connexions</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Besoin de Regarder sur Plusieurs Écrans en Simultané ?
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Les formules ci-dessus sont configurées pour <strong>1 écran actif</strong>. Pour équiper simultanément le salon, les chambres et vos smartphones ou tablettes, optez pour nos offres <strong>IPTV multi-écrans</strong> : profitez de <strong>2 à 4 flux 4K 60 FPS 100% indépendants</strong> et sans freeze, à partir de <strong>5,83 € / mois par écran</strong>.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>2, 3 ou 4 connexions 4K actives en simultané</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Compatible Smart TV, Box Android, Fire Stick, iOS &amp; PC</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Bande passante CDN dédiée sans interférence</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/tarifs/iptv-multi-ecran"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] text-center"
              >
                <span>Voir les Packs Multi-Écrans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={buildWhatsappUrl("Bonjour, je souhaite des renseignements sur les abonnements IPTV multi-écrans (2, 3 ou 4 connexions simultanées pour mon foyer).")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 font-bold text-xs uppercase tracking-wider transition-colors text-center shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Conseil Famille WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

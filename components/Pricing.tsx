import React from 'react';
import Link from 'next/link';
import { Check, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { buildWhatsappUrl } from '@/lib/contact';

const PLANS = [
  {
    id: 'Starter',
    name: 'Abonnement IPTV 3 Mois',
    price: '19.99',
    originalPrice: '34.99',
    duration: '3 Mois',
    popular: false,
    color: 'border-slate-800 bg-slate-900/90 hover:border-slate-700',
    btnBg: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
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
    color: 'border-slate-800 bg-slate-900/90 hover:border-slate-700',
    btnBg: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
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
    color: 'border-blue-500 bg-gradient-to-b from-blue-950/30 to-slate-900 ring-2 ring-blue-500/30 shadow-2xl shadow-blue-500/10',
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
  },
  {
    id: 'Pack2',
    name: 'Abonnement Pack Duo (2 Écrans)',
    price: '69.99',
    originalPrice: '89.99',
    duration: '12 Mois (2 Appareils)',
    popular: false,
    color: 'border-slate-800 bg-slate-900/90 hover:border-slate-700',
    btnBg: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    badge: 'Offre Duo & Foyer',
    savings: 'Économisez 22%',
    whatsappMessage: "Bonjour, je souhaite commander le Pack Duo (2 Écrans en simultané) à 69,99 € / 12 mois. Pouvez-vous m'envoyer le lien de paiement et mes accès 4K ?",
    features: [
      '2 Connexions actives indépendantes',
      'Qualité IPTV 4K & HD',
      '+25 000 Chaînes TV en Direct',
      '+90 000 Films & Séries (VOD) 4K',
      'Replay 72h sur toutes les chaînes',
      'Mises à jour quotidiennes de la VOD',
      'Technologie anti-freeze v4.2',
      'Assistance technique VIP 7j/7'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 border-t border-slate-900 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Tarifs Transparents & Sans Engagement
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
            Choisissez Votre Formule IPTV Smarters Pro
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Profitez de nos offres d'abonnement en France. Aucun renouvellement automatique caché : vous renouvelez uniquement si vous êtes 100% satisfait.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`border rounded-2xl p-6 flex flex-col relative transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${plan.color}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                  MEILLEURE VENTE
                </span>
              )}
              
              {/* Card Header */}
              <div className="mb-6 border-b border-slate-800 pb-6">
                <span className="text-[11px] font-extrabold text-blue-400 uppercase tracking-widest block mb-1">
                  {plan.badge}
                </span>
                <h3 className="text-lg font-black text-white min-h-[3.2rem] flex items-center leading-snug">
                  {plan.name}
                </h3>
                
                {/* Price Display */}
                <div className="flex items-baseline mt-4 mb-2">
                  <span className="text-slate-500 text-sm font-semibold line-through mr-2">
                    {plan.originalPrice} €
                  </span>
                  <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-xl font-bold text-blue-400 ml-1">€</span>
                  <span className="text-slate-400 text-xs font-semibold ml-2">/ {plan.duration}</span>
                </div>
                
                {/* Savings tag */}
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  {plan.savings}
                </span>
              </div>

              {/* Card Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-300 font-medium leading-relaxed">
                    <Check className="h-4 w-4 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Links */}
              <div className="mt-auto pt-2 space-y-2">
                <Link
                  href={`/checkout?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center font-extrabold py-3 px-4 rounded-xl text-xs transition-all uppercase tracking-wider text-center ${plan.btnBg}`}
                >
                  Choisir cette formule &rarr;
                </Link>
                <a
                  href={buildWhatsappUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander via WhatsApp</span>
                </a>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center pt-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Activation manuelle sécurisée</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

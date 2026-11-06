import React from 'react';
import { Zap, Tv, ShieldCheck, CheckCircle2 } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Tv,
    title: 'Abonnement IPTV taillé pour la France',
    desc: 'Chaînes TNT françaises, sport en direct, cinéma, séries et des milliers de chaînes régionales, européennes et internationales — tout votre IPTV France dans un seul abonnement IPTV Smarters Pro, sans frais cachés.'
  },
  {
    icon: Zap,
    title: 'Qualité IPTV 4K & HD incomparable',
    desc: 'Profitez de vos chaînes IPTV en 4K Ultra HD, HD 1080p et 60 FPS. Notre technologie anti-coupure garantit un flux ininterrompu même lors des grands événements sportifs — la raison pour laquelle nos clients nous considèrent comme le meilleur IPTV du marché.'
  },
  {
    icon: ShieldCheck,
    title: 'Service IPTV France fiable à 99,9%',
    desc: 'Nos serveurs haute performance sont surveillés 24h/24 pour assurer une disponibilité de 99,9%. En cas de question, notre équipe technique francophone intervient en direct par WhatsApp. Plus de 28 000 abonnés nous font confiance chaque jour.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900/40 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Pourquoi Choisir IPTV Smarters Pro ?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Le Meilleur Abonnement IPTV pour les Utilisateurs en France
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            IPTV Smarters Pro est reconnu comme le meilleur IPTV France grâce à son infrastructure dédiée, ses serveurs ultra-performants et son catalogue de plus de 25 000 chaînes et 90 000 VOD en qualité 4K Ultra HD. Notre service est pensé pour vous offrir une expérience télévisuelle sans compromis — fluide, stable et immédiatement disponible sur tous vos appareils.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="h-10 w-10 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

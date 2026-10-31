import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Qu\'est-ce que l\'IPTV Smarters Pro ?',
    a: 'IPTV Smarters Pro est l\'application de lecture de flux vidéo la plus performante et populaire au monde. Elle permet aux abonnés de charger leur abonnement IPTV France via l\'API Xtream Codes ou un lien M3U pour regarder les chaînes de télévision en direct, les replays et la VOD (films et séries) avec une interface fluide et agréable.'
  },
  {
    q: 'Comment installer l\'abonnement sur Smart TV Samsung / LG ?',
    a: 'C\'est très simple : téléchargez l\'application officielle "IPTV Smarters Pro" ou "Smarters Player Lite" depuis le magasin d\'applications de votre Smart TV (Samsung Smart Hub ou LG Content Store). Lancez l\'application, choisissez "Connexion avec l\'API Xtream Codes" et saisissez le nom d\'utilisateur, le mot de passe et l\'URL du serveur fournis par notre équipe après votre commande.'
  },
  {
    q: 'Puis-je utiliser mon abonnement sur plusieurs écrans en même temps ?',
    a: 'Pour les abonnements classiques (Starter, Confort, Premium), vous pouvez installer les codes sur autant d\'appareils que vous le souhaitez, mais la diffusion est limitée à 1 connexion active à la fois. Si vous souhaitez utiliser 2 appareils en même temps dans votre foyer, nous vous recommandons l\'offre "Pack Duo" qui inclut 2 lignes indépendantes.'
  },
  {
    q: 'Quel débit internet est recommandé pour regarder en 4K ?',
    a: 'Pour regarder vos programmes en HD 1080p, une connexion de 10 Mbps stable est suffisante. Pour profiter de la qualité IPTV 4K Ultra HD à 60 FPS sans aucune coupure, nous vous recommandons un débit d\'au moins 20 à 25 Mbps. Pour une meilleure stabilité, privilégiez toujours une connexion par câble Ethernet RJ45 à votre box internet.'
  },
  {
    q: 'Le paiement est-il sécurisé et confidentiel ?',
    a: 'Oui, à 100%. Pour vous garantir une sécurité absolue et protéger votre confidentialité, vos coordonnées de facturation sont traitées de manière chiffrée. Vous passez votre commande sur le site, puis vous recevez vos identifiants par e-mail et WhatsApp.'
  },
  {
    q: 'Comment se passe la livraison des codes après l\'achat ?',
    a: 'Dès validation de votre commande, nos techniciens configurent manuellement vos accès sur nos clusters de serveurs haute vitesse. Vos identifiants de connexion vous sont envoyés en moins de 3 minutes par e-mail et enregistrés dans votre espace client.'
  },
  {
    q: 'Proposez-vous une assistance technique en cas de problème ?',
    a: 'Absolument. Nous offrons un service client premium 7j/7 par WhatsApp et via notre système de tickets d\'assistance. Si vous rencontrez la moindre difficulté lors de l\'installation ou de l\'utilisation de vos codes, nos techniciens vous guideront pas à pas.'
  },
  {
    q: 'Quels sont les avantages de cet abonnement IPTV ?',
    a: 'Notre abonnement IPTV Smarters Pro Officiel intègre la technologie anti-freeze et des serveurs haute performance redondés. Vous profitez de plus de 25 000 chaînes mondiales et 90 000 VOD mis à jour tous les jours en qualité 4K/HD, sans aucune restriction géographique, sans coupure et à un tarif imbattable.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-900/40 border-t border-slate-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Réponses Claires
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Foire Aux Questions (FAQ)
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Retrouvez toutes les réponses aux questions les plus fréquentes sur notre service IPTV France.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details 
              key={idx} 
              className="group border border-slate-800 rounded-2xl p-6 bg-slate-900 [&_summary::-webkit-details-marker]:hidden shadow-lg hover:border-slate-700 transition-all"
            >
              <summary className="flex justify-between items-center font-bold text-white cursor-pointer select-none text-base sm:text-lg">
                <span>{faq.q}</span>
                <span className="transition-transform group-open:rotate-180 text-blue-400">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

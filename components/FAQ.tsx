import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const FAQS: FaqItem[] = [
  {
    q: 'Qu\'est-ce que l\'IPTV Smarters Pro ?',
    a: (
      <>
        <Link href="/applications/iptv-smarters-pro" className="text-blue-400 hover:underline font-semibold">
          IPTV Smarters Pro
        </Link>{' '}
        est l&apos;application de lecture de flux vidéo la plus performante et populaire au monde. Elle permet aux abonnés de charger leur abonnement IPTV France via l&apos;API Xtream Codes ou un lien M3U pour regarder les chaînes de télévision en direct, les replays et la VOD (films et séries) avec une interface fluide. Vous pouvez également demander un{' '}
        <Link href="/test-iptv-gratuit" className="text-blue-400 hover:underline font-semibold">
          test IPTV 24h
        </Link>{' '}
        pour vérifier la compatibilité sur votre écran.
      </>
    ),
  },
  {
    q: 'Comment installer l\'abonnement sur Smart TV Samsung / LG ?',
    a: (
      <>
        C&apos;est très simple : téléchargez l&apos;application officielle &laquo; IPTV Smarters Pro &raquo; ou &laquo; Smarters Player Lite &raquo; depuis le magasin d&apos;applications de votre téléviseur (Samsung Smart Hub ou LG Content Store), puis choisissez &laquo; Connexion avec l&apos;API Xtream Codes &raquo;. Consultez notre{' '}
        <Link href="/guide-installation/smart-tv-samsung-lg" className="text-blue-400 hover:underline font-semibold">
          tutoriel d&apos;installation Smart TV Samsung &amp; LG
        </Link>{' '}
        pour suivre les étapes illustrées pas à pas.
      </>
    ),
  },
  {
    q: 'Puis-je utiliser mon abonnement sur plusieurs écrans en même temps ?',
    a: (
      <>
        Toutes nos formules individuelles (3, 6 et{' '}
        <Link href="/abonnement-iptv-12-mois" className="text-blue-400 hover:underline font-semibold">
          12 mois VIP
        </Link>
        ) incluent 1 connexion active à la fois. Pour regarder sur 2 à 5 écrans simultanément au sein de votre foyer, nos offres{' '}
        <Link href="/tarifs-abonnement/iptv-multi-ecran" className="text-blue-400 hover:underline font-semibold">
          IPTV Multi-Écran
        </Link>{' '}
        proposent des packs Duo (2 écrans), Trio (3 écrans) et Maxi (4-5 écrans) sans coupure.
      </>
    ),
  },
  {
    q: 'Quel débit internet est recommandé pour regarder en 4K ?',
    a: (
      <>
        Pour regarder vos programmes en HD 1080p, une connexion de 10 Mbps stable est suffisante. Pour profiter de la qualité IPTV 4K Ultra HD à 60 FPS sans aucune coupure, nous recommandons un débit d&apos;au moins 25 Mbps. Retrouvez toutes nos astuces d&apos;optimisation réseau dans notre{' '}
        <Link href="/guide-iptv" className="text-blue-400 hover:underline font-semibold">
          guide anti-coupure IPTV
        </Link>{' '}
        ainsi que notre tutoriel pour{' '}
        <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 hover:underline font-semibold">
          éviter le bridage FAI (DNS &amp; VPN)
        </Link>.
      </>
    ),
  },
  {
    q: 'Le paiement est-il sécurisé et confidentiel ?',
    a: 'Oui, à 100 %. Pour vous garantir une sécurité absolue et protéger votre confidentialité, vos coordonnées de commande sont traitées de manière chiffrée et sans aucun renouvellement automatique caché. Vous commandez en ligne et recevez vos accès sur mesure par e-mail et WhatsApp.',
  },
  {
    q: 'Comment se passe la livraison des codes après l\'achat ?',
    a: 'Dès validation de votre commande, nos techniciens provisionnent vos accès dédiés sur nos clusters de serveurs haute vitesse. Vos identifiants Xtream Codes et votre lien M3U vous sont envoyés par e-mail et WhatsApp en moins de 15 minutes.',
  },
  {
    q: 'Proposez-vous une assistance technique en cas de problème ?',
    a: (
      <>
        Absolument. Nous offrons un{' '}
        <Link href="/support" className="text-blue-400 hover:underline font-semibold">
          support client francophone 7j/7 par WhatsApp
        </Link>{' '}
        et par e-mail. Si vous rencontrez la moindre difficulté lors de l&apos;installation ou de la configuration de vos codes, nos techniciens vous accompagnent pas à pas jusqu&apos;à la mise en route complète.
      </>
    ),
  },
  {
    q: 'Quels sont les avantages de cet abonnement IPTV ?',
    a: 'Notre abonnement IPTV Smarters Pro Officiel intègre la technologie anti-freeze et des serveurs européens haute performance redondés. Vous profitez de plus de 25 000 chaînes mondiales et 90 000 VOD mis à jour quotidiennement en qualité 4K/HD, avec EPG complet et Replay 72h.',
  },
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

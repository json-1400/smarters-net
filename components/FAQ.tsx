import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: React.ReactNode;
}

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    q: 'Comment fonctionne l\'activation de mon abonnement ?',
    a: (
      <>
        L&apos;activation est 100% automatisée. Dès validation de votre commande, notre cluster provisionne vos accès sécurisés en moins de 10 minutes. Vous recevez instantanément vos identifiants (API Xtream Codes, URL du serveur, lien Playlist M3U et portail Stalker/MAG) par e-mail et WhatsApp, accompagnés d&apos;un guide pas-à-pas personnalisé selon votre matériel. Vous pouvez également tester notre service via notre{' '}
        <Link href="/test-iptv-gratuit" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          test IPTV gratuit 24h
        </Link>.
      </>
    ),
  },
  {
    q: 'Qu\'est-ce qui est inclus dans l\'offre Premium France ?',
    a: (
      <>
        Tout est inclus sans aucun pack additionnel : plus de <strong>25 000 chaînes TV en direct</strong> (toute la TNT française, le bouquet Canal+ complet, les chaînes d&apos;information et internationales), l&apos;intégralité des bouquets sportifs (BeIN Sports, RMC Sport, DAZN, Eurosport), plus de <strong>90 000 films et séries VOD 4K</strong> mis à jour chaque semaine, un guide des programmes EPG sur 7 jours et le Replay 72h.
      </>
    ),
  },
  {
    q: 'Quelle est la qualité du streaming 4K Ultra HD ?',
    a: (
      <>
        Nos flux sont encodés avec le codec de pointe <strong>H.265 / HEVC à 60 FPS</strong>, garantissant une définition 4K Ultra HD cristalline et des couleurs éclatantes (HDR10+ / Dolby Vision) sans saturer votre bande passante. Pour la 4K, un débit stable de 25 Mbps est recommandé (fibre ou 4G/5G). Pour le Full HD 1080p, une connexion de 8 à 10 Mbps suffit amplement.
      </>
    ),
  },
  {
    q: 'Combien d\'écrans simultanés avec le Pack Famille ?',
    a: (
      <>
        Nos formules individuelles standards autorisent 1 connexion active à la fois. Nos offres{' '}
        <Link href="/tarifs/iptv-multi-ecran" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          IPTV Multi-Écran
        </Link>{' '}
        (Packs Duo, Trio et Famille) permettent de connecter de <strong>2 à 5 écrans simultanés</strong> au sein du même foyer (Smart TV du salon, tablette des enfants, smartphone ou PC dans la chambre) en conservant une bande passante indépendante pour chaque écran sans coupure.
      </>
    ),
  },
  {
    q: 'Sur quels appareils puis-je regarder l\'IPTV ?',
    a: (
      <>
        Notre service est universellement compatible : Smart TV (Samsung Tizen, LG webOS), clés HDMI (Amazon Fire TV Stick, Chromecast Google TV), boîtiers Android TV (Nvidia Shield, Xiaomi Box), décodeurs dédiés ({' '}
        <Link href="/guide-installation/mag-box" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          MAG Infomir &amp; Formuler MyTVOnline 3
        </Link>
        ), appareils Apple (Apple TV, iPhone, iPad, Mac) ainsi que PC Windows et navigateurs web. Consultez tous nos{' '}
        <Link href="/guide-installation" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          guides d&apos;installation détaillés
        </Link>.
      </>
    ),
  },
  {
    q: 'Y a-t-il un engagement ou renouvellement automatique ?',
    a: (
      <>
        <strong>Aucun engagement, aucun prélèvement récurrent caché.</strong> Toutes nos formules (3 mois, 6 mois, 12 mois VIP) fonctionnent en prépaiement unique. Nous ne conservons aucune coordonnée bancaire. À l&apos;approche de l&apos;échéance, un simple rappel par e-mail vous est adressé, libre à vous de renouveler ou non.
      </>
    ),
  },
  {
    q: 'Puis-je regarder la Ligue 1 et la Champions League en direct ?',
    a: (
      <>
        Oui, l&apos;ensemble des grandes compétitions européennes et internationales est diffusé en direct et en 60 FPS sans coupure : Ligue 1, UEFA Champions League, Premier League, Liga, Serie A, Formule 1, MotoGP, UFC, NBA et Roland-Garros, accessibles sur Canal+, beIN Sports, RMC Sport et DAZN sans aucun abonnement supplémentaire.
      </>
    ),
  },
  {
    q: 'Comment fonctionne la technologie Anti-Freeze ?',
    a: (
      <>
        Notre infrastructure s&apos;appuie sur un réseau de serveurs CDN géo-distribués en Europe avec équilibrage dynamique de charge (Load Balancing). Lors des soirs de grands matchs à très forte affluence, le flux bascule automatiquement en moins de 500 ms vers un serveur relais disponible, garantissant zéro écran noir et zéro mise en mémoire tampon (buffering).
      </>
    ),
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: (
      <>
        Nous proposons des règlements sécurisés chiffrés SSL aux standards bancaires européens : Carte Bancaire (Visa, MasterCard, American Express via Stripe), PayPal ainsi que les cryptomonnaies (Bitcoin, USDT). Un lien direct sécurisé vous est transmis après validation de votre commande.
      </>
    ),
  },
  {
    q: 'Puis-je annuler et être remboursé ?',
    a: (
      <>
        Absolument. Conformément à notre{' '}
        <Link href="/politique-de-remboursement" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          politique de remboursement
        </Link>
        , vous bénéficiez d&apos;une <strong>garantie satisfait ou remboursé de 14 jours</strong>. Si le service présente une incompatibilité technique non résolue par nos techniciens, nous procédons au remboursement intégral sans démarche complexe.
      </>
    ),
  },
  {
    q: 'Ai-je besoin d\'un VPN pour utiliser le service ?',
    a: (
      <>
        Non, un VPN n&apos;est pas obligatoire car nos flux transitent par des serveurs européens sécurisés en protocole chiffré. Cependant, si votre fournisseur d&apos;accès internet applique un bridage lors des soirées de football, notre service fonctionne parfaitement avec tous les VPN majeurs ou un simple changement de DNS vers Cloudflare (1.1.1.1). Consultez notre guide pour{' '}
        <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          contourner le blocage FAI
        </Link>.
      </>
    ),
  },
  {
    q: 'Le service IPTV fonctionne-t-il à l\'étranger ?',
    a: (
      <>
        Oui, votre abonnement est nomade et fonctionne partout dans le monde (Europe, Maghreb, Amérique du Nord, Asie). Il vous suffit d&apos;une connexion internet stable (Wi-Fi d&apos;hôtel, 4G/5G, fibre) sur votre smartphone, tablette, PC portable ou clé Fire TV Stick pour retrouver toutes vos chaînes françaises et internationales en voyage.
      </>
    ),
  },
  {
    q: 'Quelle différence entre Premium, 4K Ultra et Famille ?',
    a: (
      <>
        Toutes nos formules incluent 100% des chaînes et du catalogue VOD en 4K UHD. La différence réside uniquement dans la durée d&apos;abonnement (dégressive dès la formule 12 mois) et le nombre d&apos;écrans autorisés en simultané (1 écran pour les formules Solo, 2 à 4 écrans pour les packs Multi-Écran / Famille). Découvrez le détail sur notre page{' '}
        <Link href="/tarifs" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          tarifs et abonnements IPTV
        </Link>.
      </>
    ),
  },
  {
    q: 'Recevrai-je les nouvelles séries Netflix/Disney+ en avant-première ?',
    a: (
      <>
        Oui. Notre vidéothèque VOD compte plus de 90 000 titres et est enrichie quotidiennement avec les dernières sorties cinéma et les séries originales des principales plateformes de streaming (Netflix, Prime Video, Disney+, Apple TV+, Max), disponibles en version française (VF), version originale sous-titrée (VOSTFR) et 4K HDR.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 font-sans transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-4 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Réponses Claires &amp; Précises</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Foire Aux Questions (FAQ)
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Retrouvez toutes les réponses aux questions les plus fréquentes sur notre abonnement IPTV France.
          </p>
        </div>

        <div className="space-y-4">
          {HOMEPAGE_FAQS.map((faq, idx) => (
            <details 
              key={idx} 
              className="group border border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-white dark:bg-slate-900 [&_summary::-webkit-details-marker]:hidden shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <summary className="flex justify-between items-center font-bold text-slate-900 dark:text-white cursor-pointer select-none text-base sm:text-lg gap-4">
                <span>{faq.q}</span>
                <span className="transition-transform group-open:rotate-180 text-blue-600 dark:text-blue-400 shrink-0">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, CheckCircle2, Lock, Clock, HelpCircle } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/terms';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Conditions Générales de Vente (CGV) — IPTV Smarters Pro France',
    description:
      'Consultez les Conditions Générales de Vente et d\'Utilisation de nos formules d\'abonnement 3, 6 et 12 mois : activation sous 15 minutes, sans engagement ni renouvellement caché.',
    canonicalUrl: PAGE_CANONICAL,
  });
}

export default function TermsPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_CANONICAL}/#webpage`,
        name: 'Conditions Générales de Vente (CGV) — IPTV Smarters Pro France',
        url: PAGE_CANONICAL,
        description: 'Conditions contractuelles régissant les commandes et l\'utilisation des formules IPTV Smarters Pro en France.',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        publisher: { '@id': `${SITE_CONFIG.domain}/#organization` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Conditions Générales de Vente', item: PAGE_CANONICAL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      <nav aria-label="Fil d'Ariane" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Conditions Générales de Vente</span></li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-grow w-full">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparence Contractuelle &amp; Zéro Renouvellement Automatique</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conditions Générales de Vente et d'Utilisation (CGV)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Les présentes <strong>Conditions Générales de Vente</strong> définissent les droits et obligations réciproques régissant la souscription aux formules d'accès et d'assistance technique proposées sur la plateforme <strong>{SITE_CONFIG.domain}</strong>.
          </p>
        </header>

        {/* 3 Core Guarantees Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zéro Tacite Reconduction</span>
            </div>
            <p className="text-xs text-slate-300">Paiement unique au forfait. Vous ne serez jamais prélevé automatiquement à échéance.</p>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-1">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase">
              <Clock className="w-4 h-4" />
              <span>Livraison 5 à 15 min</span>
            </div>
            <p className="text-xs text-slate-300">Codes Xtream et lien M3U générés immédiatement dès confirmation du règlement.</p>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-1">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase">
              <Lock className="w-4 h-4" />
              <span>Paiement 100% Sécurisé</span>
            </div>
            <p className="text-xs text-slate-300">Règlement par lien certifié Stripe ou PayPal. Aucune coordonnée bancaire stockée.</p>
          </div>
        </div>

        {/* Full Contract Articles */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2">1. Objet et Champ d'Application</h2>
            <p>
              Les présentes Conditions Générales de Vente (ci-après « CGV ») s'appliquent sans restriction ni réserve à l'ensemble des commandes passées sur le site <strong>https://smarterspro12.net</strong> par toute personne physique ou morale (ci-après « le Client »).
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Toute validation de commande implique l'acceptation pleine, entière et sans réserve des présentes CGV par le Client.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">2. Description des Prestations</h2>
            <p>
              {SITE_CONFIG.name} propose des formules d'accès technique et d'assistance pour le lecteur multimédia IPTV Smarters Pro et applications compatibles. Chaque formule comprend :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li>L'attribution d'identifiants sécurisés (Nom d'utilisateur, Mot de passe et URL de serveur via API Xtream Codes).</li>
              <li>Un lien de lecture direct au format M3U / M3U Plus.</li>
              <li>L'accès au guide électronique des programmes (EPG) interactif.</li>
              <li>L'assistance technique francophone 7j/7 pour la configuration sur tous terminaux compatibles.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">3. Processus de Commande &amp; Modalités de Paiement</h2>
            <p>
              Afin de garantir la plus haute sécurité financière et de prévenir toute fraude, les commandes s'opèrent selon un processus transparent en 3 étapes :
            </p>
            <ol className="list-decimal list-inside mt-2 space-y-2 text-xs sm:text-sm text-slate-300">
              <li><strong>Sélection de l'offre :</strong> Le Client choisit sa formule (<Link href="/tarifs" className="text-blue-400 underline">3 mois, 6 mois, 12 mois VIP ou Multi-Écran</Link>) et renseigne son email et WhatsApp sur la page de paiement sécurisée.</li>
              <li><strong>Contact sous 1 heure :</strong> Notre équipe opérationnelle valide la disponibilité et envoie un lien de paiement sécurisé officiel (Stripe ou PayPal) par email et WhatsApp.</li>
              <li><strong>Livraison instantanée :</strong> Dès réception de la confirmation de paiement, vos identifiants personnalisés et le tutoriel d'installation vous sont transmis sous 5 à 15 minutes.</li>
            </ol>
            <p className="mt-2 text-xs text-slate-400">
              Le site <strong>smarterspro12.net ne collecte ni ne stocke aucune coordonnée bancaire ou numéro de carte de crédit</strong> sur ses serveurs. L'ensemble des transactions est pris en charge par des établissements de paiement tiers certifiés PCI-DSS de niveau 1.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">4. Tarifs Forfaitaires &amp; Absence Totale de Renouvellement Automatique</h2>
            <p>
              Les tarifs des abonnements sont indiqués en Euros toutes taxes comprises (€ TTC). Chaque souscription constitue un <strong>forfait à durée déterminée</strong> (1 mois, 3 mois, 6 mois ou 12 mois) réglé en une seule fois.
            </p>
            <div className="bg-slate-950/60 rounded-xl p-4 mt-2 border border-slate-800/80 text-xs text-slate-300">
              <strong className="text-emerald-400">Garantie anti-prélèvement caché :</strong> Aucun prélèvement récurrent, aucune tacite reconduction et aucun débit automatique n'est jamais effectué à l'issue de la période souscrite. Le Client reste totalement maître de renouveler ou non son accès à l'échéance.
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">5. Règles d'Usage &amp; Connexions Simultanées</h2>
            <p>
              Sauf souscription explicite à une formule <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 underline">IPTV Multi-Écran</Link> (2, 3 ou 4 connexions simultanées), les identifiants standards autorisent <strong>une seule connexion active à la fois</strong> (1 écran).
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Le partage non autorisé d'identifiants entre plusieurs adresses IP publiques simultanées sur un compte mono-écran déclenche automatiquement un verrouillage de sécurité temporaire par les serveurs pour prévenir le vol d'accès.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">6. Prérequis Techniques &amp; Équipements</h2>
            <p>
              Pour bénéficier d'une expérience fluide en 4K Ultra HD sans mise en mémoire tampon (buffering), le Client doit disposer :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li>D'une connexion internet stable avec un débit réel supérieur ou égal à 15 Mbps pour la Full HD, et supérieur ou égal à 30 Mbps pour la 4K. Une connexion en câble Ethernet ou Wi-Fi 5 GHz est vivement recommandée.</li>
              <li>D'un terminal compatible : Smart TV (Samsung, LG, Philips), Box Android TV, Amazon Fire TV Stick, Apple TV, iPhone/iPad, smartphone Android, PC Windows ou Mac.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">7. Droit de Rétractation &amp; Garantie 7 Jours</h2>
            <p>
              Conformément à l'article L. 221-28 13° du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de contenu numérique indépendant de tout support matériel dont l'exécution a commencé avec l'accord préalable exprès du consommateur.
            </p>
            <p className="mt-2">
              Néanmoins, afin d'offrir une sécurité d'achat maximale, {SITE_CONFIG.name} accorde une <strong>garantie technique de satisfaction de 7 jours calendaires</strong>. Si un problème serveur persistant ne peut être résolu par nos techniciens, un remboursement intégral ou un avoir commercial bonifié de +10% est immédiatement émis selon les termes de notre <Link href="/politique-de-remboursement" className="text-blue-400 underline">Politique de Remboursement</Link>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">8. Disponibilité des Serveurs &amp; FAI</h2>
            <p>
              Nos serveurs CDN haute disponibilité sont administrés pour assurer un taux de disponibilité supérieur à 99,9 %. En cas de ralentissement imputable aux filtres de certains fournisseurs d'accès internet locaux, notre équipe d'assistance fournit des solutions immédiates (optimisation DNS 1.1.1.1 ou configuration VPN).
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">9. Assistance Client &amp; Réclamations</h2>
            <p>
              Pour toute demande d'assistance technique ou réclamation, le Client peut contacter le service client 7j/7 :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li>Par email officiel : <a href={CONTACT.emailUrl} className="text-blue-400 underline">{CONTACT.email}</a></li>
              <li>Par WhatsApp direct : <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">{CONTACT.whatsappDisplay}</a></li>
              <li>Via notre <Link href="/support" className="text-blue-400 underline">centre d'assistance en ligne</Link></li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">10. Droit Applicable &amp; Règlement des Litiges</h2>
            <p>
              Les présentes CGV sont soumises à la législation applicable aux services de commerce électronique au sein de l'Union Européenne. En cas de différend relatif à l'interprétation ou à l'exécution de la commande, le Client et {SITE_CONFIG.name} s'engagent à rechercher préalablement un arrangement amiable par voie d'échange direct.
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

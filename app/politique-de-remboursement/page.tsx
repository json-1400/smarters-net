import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  MessageSquare,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/politique-de-remboursement';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Politique de Remboursement & Garantie 7 Jours — IPTV Smarters Pro',
    description:
      'Consultez notre politique de remboursement transparente et notre garantie de satisfaction 7 jours : conditions d\'éligibilité, assistance technique prioritaire et procédure de demande simplifiée.',
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'politique de remboursement iptv',
      'remboursement iptv smarters pro',
      'garantie satisfait ou rembourse iptv',
      'conditions remboursement iptv',
      'sav iptv france',
    ],
  });
}

export default function PolitiqueRemboursementPage() {
  const faqs = [
    {
      q: 'Quel est le délai légal pour demander un remboursement sur mon abonnement IPTV ?',
      a: 'Vous disposez d\'un délai de 7 jours calendaires suivant votre date de commande pour solliciter notre garantie de satisfaction si notre équipe technique ne parvient pas à résoudre un dysfonctionnement serveur avéré.',
    },
    {
      q: 'Combien de temps prend le virement du remboursement une fois validé ?',
      a: 'Une fois la demande validée par notre service client, le remboursement est émis sous 24 à 48 heures ouvrées. Les fonds apparaissent sur votre compte bancaire sous 5 à 7 jours ouvrés selon votre banque.',
    },
    {
      q: 'Puis-je être remboursé si mon fournisseur d\'accès internet bloque les flux le soir ?',
      a: 'Le bridage d\'un opérateur (Orange, SFR, Free, Bouygues) est un blocage externe indépendant de nos serveurs CDN. Notre support vous accompagne pour configurer le DNS 1.1.1.1 ou un VPN en moins de 2 minutes pour rétablir le flux immédiatement.',
    },
    {
      q: 'Comment contacter le service pour ouvrir un dossier de remboursement ?',
      a: 'Contactez directement notre support par WhatsApp au +212 715 214 002 ou par e-mail à contact@smarterspro12.com en précisant votre adresse e-mail de commande, le modèle de votre appareil et la capture d\'écran du code d\'erreur constaté.',
    },
  ];

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_CANONICAL}/#webpage`,
        name: 'Politique de Remboursement & Garantie de Satisfaction — IPTV Smarters Pro',
        url: PAGE_CANONICAL,
        description:
          'Conditions générales de remboursement, garantie technique de 7 jours et procédure de réclamation officielle pour les abonnements IPTV Smarters Pro.',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Politique de Remboursement', item: PAGE_CANONICAL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
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
          <li><span className="text-slate-200 font-medium" aria-current="page">Politique de Remboursement</span></li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 flex-grow w-full">
        {/* En-tête de la page */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantie Transparente &amp; E-E-A-T</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Politique de Remboursement &amp; Garantie de Satisfaction
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Délai de garantie : <strong>7 jours calendaires</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>Délai de traitement : <strong>24h à 48h ouvrées</strong></span>
            </span>
          </div>

          {/* Direct Answer Callout Box */}
          <div className="p-5 rounded-2xl bg-slate-900 border-l-4 border-emerald-500 space-y-2 text-slate-200 text-sm sm:text-base leading-relaxed">
            <p>
              Notre <strong>politique de remboursement</strong> garantit une sécurité totale à chaque souscription : si vous rencontrez un problème technique serveur avéré sur votre abonnement durant les <strong>7 jours suivant votre achat</strong> et que nos ingénieurs ne peuvent le résoudre sous 24 heures, vous bénéficiez d&apos;un remboursement intégral sans pénalité.
            </p>
          </div>
        </header>

        {/* Section 1 : Cadre Général */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            1. Cadre Général de la Garantie Satisfait ou Remboursé
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Chez <strong>IPTV Smarters Pro France</strong>, nous dimensionnons nos infrastructures CDN européennes à 10 Gbps pour maintenir un taux de disponibilité supérieur à <strong>99,9 %</strong>, même lors des grandes soirées sportives de Ligue des Champions ou de Ligue 1. Nous croyons en la qualité de nos flux 4K Ultra HD et appliquons une politique commerciale claire et équitable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1.1 Test préalable recommandé</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Avant de souscrire une formule annuelle, nous encourageons l&apos;utilisation d&apos;un <Link href="/test-iptv-gratuit" className="text-blue-400 underline">test IPTV 24h</Link> ou de notre Formule Découverte 3 Mois pour valider la compatibilité de votre équipement domestique.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1.2 Engagement de disponibilité</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tout abonnement actif bénéficie d&apos;une surveillance réseau 24h/24. En cas d&apos;interruption majeure imputable à nos serveurs, une prolongation automatique ou un remboursement proportionnel est appliqué.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 : Conditions d'Éligibilité */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            2. Conditions d'Éligibilité au Remboursement
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pour être admissible à un remboursement complet ou partiel au titre de la présente politique de remboursement, votre demande doit répondre à l&apos;un des critères vérifiables suivants :
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white">2.1 Panne technique serveur non résolue sous 24h</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Impossibilité avérée de charger les listes de chaînes ou de visionner les flux en direct en raison d&apos;un dysfonctionnement de notre grappe de serveurs, après intervention infructueuse de notre support technique sous un délai de 24 heures ouvrées.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white">2.2 Incompatibilité technique majeure constatée</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Incapacité matérielle avérée de votre appareil (Smart TV Samsung/LG, Fire TV Stick, Box Android TV, Apple TV) à décoder les flux vidéo malgré le respect strict de nos tutoriels d&apos;installation et des recommandations de nos techniciens.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <h3 className="text-sm font-bold text-white">2.3 Erreur de commande ou double prélèvement</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Paiement dupliqué par erreur lors du tunnel de commande ou souscription involontaire signalée dans un délai maximal de 24 heures suivant la transaction, avant toute consommation massive de bande passante.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 : Cas Non Éligibles */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            3. Cas Non Éligibles au Remboursement
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Afin de préserver la qualité de nos serveurs pour l&apos;ensemble de nos abonnés légitimes et de prévenir les abus, aucun remboursement ne sera accordé dans les situations suivantes :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>3.1 Connexion internet domestique insuffisante</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Débit descendant réel inférieur à 15 Mbps (ADSL faible, 4G instable ou saturation du Wi-Fi domestique). Les flux 4K nécessitent une bande passante minimale garantie.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>3.2 Bridage FAI sans application de notre guide</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ralentissements provoqués par votre opérateur (Orange, SFR, Free, Bouygues) que vous refusez de corriger via le <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 underline">DNS Cloudflare 1.1.1.1 ou un VPN</Link>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>3.3 Demande formulée après le délai de 7 jours</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Toute réclamation reçue au-delà du 7ᵉ jour calendaire suivant la commande n&apos;ouvre droit à aucun remboursement monétaire. Une compensation de temps peut être étudiée au cas par cas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>3.4 Utilisation non autorisée ou partage de ligne</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connexion simultanée sur plusieurs adresses IP différentes sur un abonnement 1 écran VIP, entraînant le blocage automatique de sécurité anti-fraude par le serveur.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 : Procédure en 3 Étapes */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            4. Procédure de Demande de Remboursement en 3 Étapes
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Pour garantir un traitement équitable et rapide de votre dossier, veuillez respecter le protocole officiel suivant :
          </p>

          <ol className="space-y-3 pt-2">
            <li className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                1
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Étape 1 : Contactez notre Support Technique</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Envoyez un message sur WhatsApp au <strong>{CONTACT.whatsappDisplay}</strong> ou un e-mail à <strong>{SITE_CONFIG.supportEmail}</strong> avec votre numéro de commande, l&apos;adresse e-mail renseignée lors du paiement et la description précise du problème rencontré.
                </p>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                2
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Étape 2 : Diagnostic et Vérification Technique</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Un technicien dédié vérifie les logs de votre ligne (codes d&apos;erreur, statut DNS, latence du flux) et vous propose une solution adaptée sous 24 heures (changement de port serveur, identifiants de secours ou réglage d&apos;application).
                </p>
              </div>
            </li>

            <li className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                3
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Étape 3 : Validation et Remboursement Sous 5 à 7 Jours</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Si le dysfonctionnement serveur persiste après l&apos;intervention, votre remboursement est immédiatement émis via le mode de paiement d&apos;origine. Le virement bancaire apparaît sur votre relevé sous 5 à 7 jours ouvrés.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 5 : FAQ */}
        <section className="space-y-4 pt-4 border-t border-slate-900">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Foire Aux Questions : Remboursement &amp; SAV</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Support Box */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 border border-blue-200 dark:border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm dark:shadow-none">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">Assistance Prioritaire 7j/7</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Une question sur votre formule ou votre garantie ?</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Nos techniciens vous répondent en moins de 15 minutes sur WhatsApp.</p>
          </div>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-2 shrink-0 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contacter le Support</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}


import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/privacy';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Politique de Confidentialité & RGPD — IPTV Smarters Pro France',
    description:
      'Consultez notre politique de confidentialité et de protection des données personnelles (RGPD) : chiffrement SSL, confidentialité des commandes et zéro revente de données.',
    canonicalUrl: PAGE_CANONICAL,
  });
}

export default function PrivacyPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_CANONICAL}/#webpage`,
        name: 'Politique de Confidentialité & RGPD — IPTV Smarters Pro',
        url: PAGE_CANONICAL,
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Politique de Confidentialité', item: PAGE_CANONICAL },
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
          <li><span className="text-slate-200 font-medium" aria-current="page">Politique de Confidentialité</span></li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-grow w-full">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>Protection des Données Personnelles &amp; Chiffrement SSL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Politique de Confidentialité &amp; Protection de la Vie Privée
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Notre <strong>politique de confidentialité</strong> garantit la protection stricte des informations transmises lors de vos commandes et échanges d'assistance sur {SITE_CONFIG.name}.
          </p>
        </header>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Cadre Général de Notre Politique de Confidentialité</h2>
          <p>
            Dans le cadre du traitement de votre commande, nous collectons uniquement les informations strictement nécessaires à la livraison de vos identifiants : votre prénom/nom, votre adresse e-mail et votre numéro WhatsApp. Aucune donnée bancaire n'est stockée sur nos serveurs.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">2. Utilisation &amp; Non-Divulgation à des Tiers</h2>
          <p>
            Vos coordonnées servent exclusivement à l'envoi de vos codes d'accès Xtream/M3U et au suivi technique assuré par notre support 7j/7. Nous ne vendons, ne louons et ne partageons jamais vos données avec des tiers publicitaires.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">3. Droit d'Accès et de Suppression (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez demander la suppression intégrale de vos informations à tout moment en écrivant à <strong>{SITE_CONFIG.supportEmail}</strong>.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">4. Sécurité des Échanges et Chiffrement SSL</h2>
          <p>
            L'ensemble des communications entre votre terminal et nos serveurs est protégé par un protocole de chiffrement <strong>SSL/TLS 256 bits</strong> de grade bancaire, garantissant l'intégrité et la confidentialité absolue de vos échanges.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">5. Politique Relative aux Cookies Techniques</h2>
          <p>
            Notre plateforme emploie uniquement des traceurs strictement techniques nécessaires au maintien de session et à la sécurité du site, sans aucun ciblage publicitaire ni revente à des tiers.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">6. Durée de Conservation des Informations</h2>
          <p>
            Les données relatives à votre souscription sont conservées uniquement pendant la durée d'activation de votre formule, avant archivage sécurisé ou purge intégrale sur simple demande écrite.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}


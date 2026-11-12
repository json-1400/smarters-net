import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
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
        name: 'Conditions Générales de Vente (CGV) — IPTV Smarters Pro',
        url: PAGE_CANONICAL,
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparence Contractuelle &amp; Zéro Renouvellement Automatique</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conditions Générales de Vente et d'Utilisation (CGV)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Les présentes <strong>Conditions Générales de Vente</strong> encadrent la souscription aux formules d'accès et d'assistance technique proposées sur {SITE_CONFIG.name}.
          </p>
        </header>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Champ d'Application des Conditions Générales de Vente</h2>
          <p>
            Nos formules (<Link href="/tarifs" className="text-blue-400 underline">3 mois, 6 mois et 12 mois VIP</Link>) font l'objet d'un paiement unique forfaitaire pour la durée choisie. Aucun renouvellement tacite ni prélèvement bancaire récurrent automatique n'est appliqué à échéance.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">2. Livraison des Identifiants &amp; Activation</h2>
          <p>
            Après validation de votre commande, vos paramètres de configuration (API Xtream Codes et lien M3U) sont générés et transmis par e-mail et/ou WhatsApp dans un délai moyen de 15 minutes.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">3. Règles d'Utilisation &amp; Connexions Simultanées</h2>
          <p>
            Les formules Starter (3 mois), Confort (6 mois) et VIP (12 mois) autorisent 1 connexion active simultanée. Pour équiper plusieurs téléviseurs en simultané, les packs <Link href="/tarifs/iptv-multi-ecran" className="text-blue-400 underline">IPTV Multi-Écran</Link> permettent de connecter de 2 à 5 écrans indépendants.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">4. Support Technique et Accompagnement 7j/7</h2>
          <p>
            Notre équipe technique francophone accompagne gratuitement chaque abonné sur <Link href="/support" className="text-blue-400 underline">notre page d'assistance</Link> pour la configuration pas-à-pas sur Smart TV, Fire TV Stick, Box Android, PC et iOS.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">5. Garantie de Service et Résolution Amiable</h2>
          <p>
            Nos infrastructures CDN européennes sont dimensionnées pour assurer une disponibilité de 99,9 %. En cas d'incompatibilité matérielle initiale non résolue par nos techniciens sous 48 heures, notre service client privilégie une conciliation directe et équitable.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">6. Évolution des Offres et Tarification Forfaitaire</h2>
          <p>
            Les conditions tarifaires applicables sont celles validées lors de la commande. Aucune modification ultérieure de tarif ne peut s'appliquer à une formule en cours d'exécution jusqu'à son terme naturel.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}


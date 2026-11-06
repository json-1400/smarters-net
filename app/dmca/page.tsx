import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Mail, ChevronRight } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/dmca';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Politique DMCA & Droits d\'Auteur — IPTV Smarters Pro France',
    description:
      'Consultez notre politique officielle de conformité DMCA et de respect de la propriété intellectuelle pour la plateforme logicielle IPTV Smarters Pro.',
    canonicalUrl: PAGE_CANONICAL,
  });
}

export default function DmcaPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_CANONICAL}/#webpage`,
        name: 'Politique DMCA & Droits d\'Auteur — IPTV Smarters Pro',
        url: PAGE_CANONICAL,
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Notice DMCA', item: PAGE_CANONICAL },
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
          <li><span className="text-slate-200 font-medium" aria-current="page">Politique DMCA</span></li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-grow w-full">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Conformité Légale &amp; Propriété Intellectuelle</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Politique DMCA &amp; Avis de Non-Responsabilité
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            La présente <strong>politique DMCA</strong> (Digital Millennium Copyright Act) précise le rôle purement technique et logiciel de la plateforme {SITE_CONFIG.name} ainsi que la procédure de signalement mise à disposition des ayants droit.
          </p>
        </header>

        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-4 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Absence d'Hébergement de Flux Audiovisuels</h2>
          <p>
            Le site <strong>{SITE_CONFIG.domain}</strong> n'héberge, ne stocke, n'encode et ne diffuse aucun fichier vidéo, flux télévisuel en continu ou contenu multimédia protégé par le droit d'auteur sur ses serveurs web. IPTV Smarters Pro est une interface logicielle de lecture multimédia fonctionnant à la manière d'un navigateur ou d'un lecteur vidéo (tel que VLC Media Player).
          </p>

          <h2 className="text-xl font-bold text-white pt-2">2. Procédure et Notification de Notre Politique DMCA</h2>
          <p>
            Conformément aux dispositions relatives à la propriété intellectuelle, toute demande formelle de retrait portant sur un élément référencé doit inclure :
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-400">
            <li>L'identification précise de l'œuvre protégée faisant l'objet de la réclamation ;</li>
            <li>L'URL exacte concernée et les coordonnées complètes du déclarant ;</li>
            <li>Une déclaration sur l'honneur attestant que le demandeur est le titulaire des droits ou son représentant légalement mandaté.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-2">3. Délais de Traitement et Coopération Légale</h2>
          <p>
            Dès réception d'une notification valide respectant les critères énoncés ci-dessus, notre service juridique s'engage à traiter la demande et à prendre les mesures conservatoires requises dans un délai maximum de <strong>48 heures ouvrées</strong>. Nous collaborons activement avec l'ensemble des créateurs et ayants droit.
          </p>

          <h2 className="text-xl font-bold text-white pt-2">4. Contact du Service Juridique &amp; Conformité</h2>
          <p className="flex items-center gap-2 text-slate-200 font-semibold">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Adresse de contact officielle : {SITE_CONFIG.supportEmail}</span>
          </p>
          <p className="text-xs text-slate-400 leading-relaxed pt-1">
            Les demandes incomplètes ou dépourvues des justificatifs de titularité des droits de propriété intellectuelle ne pourront faire l'objet d'un examen prioritaire par nos services techniques.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}


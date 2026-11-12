import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Lock, ChevronRight, ShieldCheck, UserCheck, EyeOff, Server, Database } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/politique-confidentialite';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Politique de Confidentialité & RGPD — IPTV Smarters Pro France',
    description:
      'Consultez notre politique de confidentialité et de protection des données personnelles (RGPD) : chiffrement SSL 256 bits, confidentialité des commandes et zéro revente de données.',
    canonicalUrl: PAGE_CANONICAL,
  });
}

export default function PolitiqueConfidentialitePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_CANONICAL}/#webpage`,
        name: 'Politique de Confidentialité & RGPD — IPTV Smarters Pro France',
        url: PAGE_CANONICAL,
        description: 'Engagements de protection de la vie privée, traitement des données personnelles et conformité RGPD.',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        publisher: { '@id': `${SITE_CONFIG.domain}/#organization` },
        inLanguage: 'fr-FR',
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Protection des Données Personnelles (RGPD UE 2016/679)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Politique de Confidentialité &amp; Vie Privée
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Notre <strong>politique de confidentialité</strong> formalise les principes stricts appliqués par <strong>{SITE_CONFIG.domain}</strong> pour la collecte, le traitement et la préservation de la confidentialité de vos données personnelles.
          </p>
        </header>

        {/* RGPD Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase">
              <EyeOff className="w-4 h-4" />
              <span>Zéro Revente de Données</span>
            </div>
            <p className="text-xs text-slate-300">Vos informations ne sont jamais partagées, louées ou cédées à des courtiers ou régies publicitaires.</p>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-1">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase">
              <Lock className="w-4 h-4" />
              <span>Chiffrement SSL 256 bits</span>
            </div>
            <p className="text-xs text-slate-300">Toutes les communications bénéficient d'un protocole de chiffrement TLS de niveau bancaire.</p>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase">
              <UserCheck className="w-4 h-4" />
              <span>Droit à l'Oubli Express</span>
            </div>
            <p className="text-xs text-slate-300">Purge intégrale de vos informations sur simple demande par email ou message WhatsApp.</p>
          </div>
        </div>

        {/* Main RGPD Sections */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              1. Responsable du Traitement &amp; Contact DPO
            </h2>
            <p>
              Le responsable du traitement des données à caractère personnel est l'opérateur technique <strong>{SITE_CONFIG.legalName}</strong> (site web : <strong>https://smarterspro12.net</strong>).
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Pour toute question relative à l'exercice de vos libertés individuelles ou pour joindre notre délégué à la protection des données : écrivez directement à <a href={CONTACT.emailUrl} className="text-blue-400 underline">{CONTACT.email}</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              2. Données Collectées &amp; Principe de Minimisation
            </h2>
            <p>
              En application du principe de minimisation des données préconisé par la CNIL et le RGPD, nous collectons exclusivement les informations strictement nécessaires à la finalisation de votre commande et à l'assistance technique :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li><strong>Adresse e-mail :</strong> Requise pour la transmission des identifiants API Xtream Codes, du lien M3U et du reçu de commande.</li>
              <li><strong>Numéro WhatsApp (optionnel / recommandé) :</strong> Utilisé pour le support direct, la transmission rapide des accès et l'assistance au paramétrage pas-à-pas.</li>
              <li><strong>Type d'appareil et application choisie :</strong> Permet de vous fournir le tutoriel personnalisé adapté à votre équipement (ex: Fire Stick, Smart TV, Box Android).</li>
              <li><strong>Logs techniques d'authentification serveur :</strong> Adresse IP et horodatage de connexion aux serveurs de streaming, strictement utilisés pour limiter le piratage d'accès et vérifier le respect du quota d'écrans autorisés.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">3. Absence de Données Bancaires Stockées</h2>
            <p>
              <strong>{SITE_CONFIG.domain} ne traite ni ne conserve aucune donnée de carte bancaire</strong>. Lorsque vous réglez votre commande via le lien officiel sécurisé Stripe ou PayPal envoyé par notre équipe, vos informations financières sont cryptées et gérées exclusivement par ces établissements agréés PCI-DSS de niveau 1.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">4. Finalités du Traitement &amp; Base Légale</h2>
            <p>
              Le traitement de vos données repose sur les bases légales reconnues par le RGPD :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li><strong>Exécution du contrat (Art. 6.1.b) :</strong> Création de votre compte d'accès, génération des identifiants et livraison du service commandé.</li>
              <li><strong>Assistance client (Art. 6.1.b) :</strong> Résolution des difficultés techniques de diffusion ou de configuration logicielle 7j/7.</li>
              <li><strong>Intérêt légitime et sécurité (Art. 6.1.f) :</strong> Lutte contre les attaques par déni de service (DDoS) et prévention du partage frauduleux d'accès.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">5. Durée de Conservation des Informations</h2>
            <p>
              Vos données sont conservées pendant la durée de validité de votre formule d'abonnement actif. À l'expiration de votre abonnement, vos coordonnées sont archivées de manière sécurisée pendant un délai maximal de 3 ans aux fins exclusives de support ou de renouvellement à votre demande, avant purge complète et irréversible de nos registres.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">6. Vos Droits &amp; Droit à l'Oubli (RGPD)</h2>
            <p>
              Conformément à la réglementation européenne, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li><strong>Droit d'accès et de rectification :</strong> Consulter ou corriger vos coordonnées à tout moment.</li>
              <li><strong>Droit à l'effacement (« Droit à l'oubli ») :</strong> Demander la suppression totale et immédiate de votre adresse email et de votre numéro de contact de nos bases.</li>
              <li><strong>Droit à la limitation et d'opposition :</strong> Limiter ou refuser certains traitements non essentiels.</li>
            </ul>
            <p className="mt-2 text-xs text-slate-400">
              Pour exercer l'un de ces droits, un simple email avec pour objet « RGPD / Droit à l'oubli » adressé à <a href={CONTACT.emailUrl} className="text-blue-400 underline">{CONTACT.email}</a> suffit. Votre demande sera traitée sous 48 heures ouvrées. Vous disposez également du droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés — www.cnil.fr).
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-400" />
              7. Politique Relative aux Cookies Techniques</h2>
            <p>
              Notre site web utilise exclusivement des <strong>cookies strictement techniques et nécessaires</strong> à l'expérience utilisateur (mémorisation de vos préférences de thème clair/sombre, sécurisation de session du panier). Nous n'installons aucun cookie publicitaire tiers, traceur de comportement ou pixel de profilage commercial intrusif.
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

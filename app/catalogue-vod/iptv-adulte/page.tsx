import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldAlert, 
  Lock, 
  EyeOff, 
  ShieldCheck, 
  KeyRound, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  ArrowRight,
  Tv,
  Film,
  Sparkles,
  HelpCircle,
  FolderLock
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { buildWhatsappUrl } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/catalogue-vod/iptv-adulte';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "IPTV avec Chaînes Adultes (+18) : VOD, Sécurité & Contrôle Parental PIN",
    description: "Guide complet IPTV avec chaînes adultes et VOD (+18) sur IPTV Smarters Pro : protection des mineurs, configuration du code PIN parental et suppression totale.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'iptv adulte',
      'chaines adulte iptv',
      'vod adulte iptv',
      'iptv +18 france',
      'controle parental iptv smarters pro',
      'code pin adulte iptv',
      'bloquer chaines adultes iptv',
      'masquer categorie adulte iptv'
    ],
  });
}

export default function IptvAdultePage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${PAGE_CANONICAL}/#article`,
        headline: "Guide IPTV Adulte & VOD +18 : Contrôle Parental et Sécurité du Foyer",
        description: "Tutoriel et explications complètes sur la gestion des chaînes adultes et VOD +18 sur IPTV Smarters Pro avec verrouillage parental sécurisé.",
        mainEntityOfPage: PAGE_CANONICAL,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: "Comment activer le contrôle parental et masquer les chaînes adultes sur IPTV Smarters Pro",
        description: "Procédure en 4 étapes pour sécuriser votre téléviseur familial et bloquer l'accès aux flux +18 avec un code PIN.",
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: "Ouvrir les Paramètres (Settings)",
            text: "Lancez IPTV Smarters Pro sur votre appareil et cliquez sur l'icône d'engrenage en haut à droite.",
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: "Sélectionner Contrôle Parental (Parental Control)",
            text: "Accédez à la section 'Parental Control' dans le menu des préférences.",
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: "Définir ou modifier le Code PIN",
            text: "Saisissez un mot de passe à 4 chiffres confidentiel que vous seul connaissez.",
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: "Verrouiller et masquer les catégories +18",
            text: "Cochez la catégorie 'Adultes / +18' dans la liste pour qu'elle disparaisse complètement de l'écran d'accueil sans le mot de passe.",
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: "Le contenu adulte (+18) est-il activé automatiquement sur tous les abonnements ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le bouquet adulte est inclus dans la liste générale des flux mais est protégé par défaut par un mot de passe parental. Si vous souhaitez que cette section n'apparaisse jamais dans votre liste de lecture, vous pouvez simplement nous demander la désactivation totale 'Option Famille Zéro Adulte' lors de votre commande.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment fonctionne le code PIN de contrôle parental sur IPTV Smarters Pro ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le contrôle parental permet de verrouiller individuellement n'importe quelle catégorie de chaînes ou de VOD. Dès qu'un utilisateur tente d'ouvrir une catégorie verrouillée, une fenêtre pop-up exige la saisie du code secret à 4 chiffres, empêchant tout accès accidentel par des enfants.",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je supprimer définitivement la catégorie adulte de mon abonnement ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, absolument. Notre serveur peut filtrer votre playlist à la racine avant de vous la livrer. En mentionnant 'Sans contenu adulte' par message WhatsApp lors de l'activation, aucun flux ni film +18 ne sera injecté dans vos codes Xtream.",
            },
          },
          {
            '@type': 'Question',
            name: "La facturation est-elle discrète ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui. Toutes nos transactions bancaires et confirmations de commande affichent un libellé totalement discret et neutre, sans aucune mention de contenu adulte ou explicite.",
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: SITE_CONFIG.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Catalogue VOD',
            item: `${SITE_CONFIG.domain}/catalogue-vod`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Contrôle Parental & Chaînes Adultes',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header />

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <Link href="/catalogue-vod" className="hover:text-blue-400 transition-colors">Catalogue VOD</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">Contrôle Parental & Chaînes Adultes</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Avertissement +18 &middot; Protection des Mineurs & Contrôle Parental Sécurisé</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IPTV avec Chaînes Adultes & VOD +18 : Guide, Protection et Contrôle Parental Sécurisé
            </h1>

            {/* AEO Direct Snippet Answer Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-sm leading-relaxed text-slate-300 space-y-2">
              <p>
                <strong>Réponse directe :</strong> Un abonnement <strong>IPTV avec chaînes adultes</strong> (+18) regroupe les chaînes de télévision pour adultes et contenus VOD réservés aux personnes majeures sur <strong>IPTV Smarters Pro</strong> (compatible <strong>Smart TV &amp; Firestick</strong>, <strong>Box Android</strong>, <strong>Windows &amp; iOS</strong>). Pour garantir la protection des mineurs, ce bouquet est verrouillable par un <strong>code PIN parental</strong> à 4 chiffres, et peut être totalement supprimé sur simple demande lors de l'activation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#tutoriel-pin"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Configurer le Code PIN Parental</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href={buildWhatsappUrl("Bonjour, je souhaite activer mon abonnement avec l'option Famille (Zéro Adulte)")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-400 font-semibold text-sm transition-all"
              >
                <span>Demander le Retrait Total (+18) sur WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Code PIN 4D</span>
                <span className="block text-xs text-slate-400">Verrouillage étanche</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Option Zéro +18</span>
                <span className="block text-xs text-slate-400">Suppression sur demande</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Discrétion 100%</span>
                <span className="block text-xs text-slate-400">Facturation neutre</span>
              </div>
            </div>
          </div>

          {/* Parental Control Visual Lock Card */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Verrouillage Parental Actif</h2>
                    <span className="text-[11px] text-slate-400">IPTV Smarters Pro &middot; Sécurité Foyer</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                  Protégé
                </span>
              </div>

              {/* Pin Code Simulation Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                <span className="text-xs text-slate-400 block">Saisissez votre code PIN parental pour accéder :</span>
                <div className="flex justify-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-white text-lg font-bold">&bull;</span>
                  <span className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-white text-lg font-bold">&bull;</span>
                  <span className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-white text-lg font-bold">&bull;</span>
                  <span className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-white text-lg font-bold">&bull;</span>
                </div>
                <span className="text-[10px] text-slate-500 block">Le contenu reste masqué tant que le code n'est pas validé</span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Défend les enfants contre tout contenu inadapté</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Masquage des noms et affiches de catégories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Modifiable à tout moment depuis les réglages</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 w-full">

        {/* Section 1: Ethical Commitments & Legal Notice */}
        <section className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Nos Engagements : Éthique, Protection des Mineurs & Discrétion
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              La diffusion de programmes pour adultes est strictement encadrée. Nous appliquons les standards de sécurité les plus rigoureux pour préserver l'intégrité de votre cercle familial :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>Strictement Réservé aux Majeurs (+18)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conformément aux lois en vigueur, l'accès aux programmes pour adultes est réservé aux personnes âgées de 18 ans et plus.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <EyeOff className="w-4 h-4" />
                <span>Option "Famille Zéro Adulte"</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sur simple notification à notre équipe lors de la commande, nous pouvons expurger 100% des catégories adultes de votre compte avant activation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Facturation et Données Neutres</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aucune mention explicite n'apparaît sur vos relevés de compte bancaire. La discrétion de votre vie privée est garantie.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Tutorial to Configure Parental Control on IPTV Smarters Pro */}
        <section id="tutoriel-pin" className="space-y-6 scroll-mt-24">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tutoriel : Comment verrouiller ou masquer les chaînes adultes sur IPTV Smarters Pro ?
            </h2>
            <p className="text-sm text-slate-400">
              Suivez ce guide pratique pas-à-pas pour sécuriser votre lecteur en moins de 2 minutes sur votre Smart TV ou Fire Stick :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h3 className="font-bold text-white text-base">Ouvrir les Paramètres</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sur l'écran principal d'IPTV Smarters Pro, cliquez sur l'icône <strong>Paramètres (Settings)</strong> symbolisée par un engrenage en haut à droite.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h3 className="font-bold text-white text-base">Parental Control</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Faites défiler le menu et sélectionnez l'onglet <strong>Contrôle Parental (Parental Password)</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                3
              </span>
              <h3 className="font-bold text-white text-base">Créer votre Code PIN</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Saisissez un mot de passe à 4 chiffres personnalisé (par défaut, le code initial est souvent 0000). Confirmez et validez.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                4
              </span>
              <h3 className="font-bold text-white text-base">Masquer les Catégories</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dans la liste des bouquets, cochez <strong>Adulte / For Adults</strong> pour verrouiller ou faire disparaître ces canaux de l'accueil.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Overview of Available Adult Channels & VOD */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Aperçu des Chaînes et Contenus VOD Inclus (Pour Utilisateurs Majeurs)
            </h2>
            <p className="text-sm text-slate-400">
              Pour les adultes souhaitant conserver cette option, le bouquet intègre les grandes chaînes thématiques internationales en qualité HD/FHD :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Chaînes TV en Direct</h3>
                  <span className="text-[11px] text-slate-400">Diffusion continue 24h/24</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Accès aux chaînes internationales de divertissement pour adultes (Dorcel TV, Hustler TV, Brazzers TV Europe, Evil Angel, Penthouse, etc.) avec flux stables 1080p.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Catalogue VOD +18 Dédié</h3>
                  <span className="text-[11px] text-slate-400">Section VOD séparée</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Une vidéothèque complète classée par catégories, totalement isolée des films grand public, également soumise au mot de passe parental.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400">
                  <FolderLock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Isolation Totale des Dossiers</h3>
                  <span className="text-[11px] text-slate-400">Aucun mélange d'affiches</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Les dossiers VOD +18 n'apparaissent pas dans les recommandations d'accueil, garantissant une interface familiale saine et propre.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: AEO FAQ Section */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Foire Aux Questions : IPTV Adulte & Contrôle Parental
            </h2>
            <p className="text-sm text-slate-400">
              Retrouvez toutes les précisions sur la gestion sécurisée des accès et la confidentialité de votre compte.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Le contenu adulte (+18) est-il activé automatiquement sur tous les abonnements ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le bouquet adulte est inclus dans la liste générale des flux mais est protégé par défaut par un mot de passe parental. Si vous souhaitez que cette section n'apparaisse jamais dans votre liste de lecture, vous pouvez simplement nous demander la désactivation totale 'Option Famille Zéro Adulte' lors de votre commande.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Comment fonctionne le code PIN de contrôle parental sur IPTV Smarters Pro ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le contrôle parental permet de verrouiller individuellement n'importe quelle catégorie de chaînes ou de VOD. Dès qu'un utilisateur tente d'ouvrir une catégorie verrouillée, une fenêtre pop-up exige la saisie du code secret à 4 chiffres, empêchant tout accès accidentel par des enfants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                Puis-je supprimer définitivement la catégorie adulte de mon abonnement ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui, absolument. Notre serveur peut filtrer votre playlist à la racine avant de vous la livrer. En mentionnant 'Sans contenu adulte' par message WhatsApp lors de l'activation, aucun flux ni film +18 ne sera injecté dans vos codes Xtream.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-base">
                La facturation est-elle discrète ?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui. Toutes nos transactions bancaires et confirmations de commande affichent un libellé totalement discret et neutre, sans aucune mention de contenu adulte ou explicite.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Assistance Personnalisée</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Besoin de configurer votre profil sur mesure ?
            </h2>
            <p className="text-sm text-slate-300">
              Demandez à notre équipe d'activer votre abonnement avec ou sans contenu adulte selon vos préférences exactes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={buildWhatsappUrl("Bonjour, je souhaite commander avec l'option Zéro Adulte pour ma famille")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all"
            >
              <span>Demander l'Option Famille sur WhatsApp</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Laptop, 
  Tv, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Monitor,
  Layers,
  FileCode,
  Flame,
  Radio
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation/pc-mac-windows';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Installer IPTV sur PC Windows et Mac : Tutoriel Pas-à-Pas 2026",
    description: "Guide officiel 2026 pour regarder l'IPTV sur PC Windows et Mac. Téléchargement d'IPTV Smarters Pro desktop et lecture 4K sans coupure via VLC.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'iptv sur pc windows et mac',
      'iptv pc',
      'iptv windows 11',
      'iptv mac',
      'iptv smarters pro pc',
      'iptv vlc',
      'regarder iptv sur ordinateur'
    ],
  });
}

export default function PcMacWindowsTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Installer IPTV Smarters Pro sur PC Windows et Mac',
        description: 'Tutoriel complet pour installer le logiciel IPTV Smarters Pro sur ordinateur Windows (10/11) et macOS.',
        totalTime: 'PT3M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Télécharger le client Desktop officiel',
            text: 'Téléchargez le fichier d\'installation adapté à votre système d\'exploitation (.exe pour Windows ou .dmg pour macOS).',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Exécuter l\'installation sur votre ordinateur',
            text: 'Lancez l\'installateur et suivez l\'assistant de configuration en acceptant les autorisations de sécurité requises.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Ouvrir IPTV Smarters Pro',
            text: 'Démarrez l\'application depuis votre bureau ou votre dossier Applications.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Sélectionner l\'API Xtream Codes',
            text: 'Choisissez la méthode de connexion recommandée avec l\'API Xtream Codes.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Renseigner vos identifiants d\'accès',
            text: 'Indiquez le nom de profil, identifiant, mot de passe et l\'URL serveur transmise lors de votre abonnement.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Peut-on utiliser le lecteur VLC pour regarder les flux sur PC ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, VLC Media Player permet de lire directement votre flux IPTV. Ouvrez simplement VLC, allez dans Média > Ouvrir un flux réseau (Ctrl+N), collez votre lien M3U et cliquez sur Lire.',
            },
          },
          {
            '@type': 'Question',
            name: 'IPTV Smarters Pro est-il compatible avec Windows 11 ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, la version desktop d\'IPTV Smarters Pro est 100% compatible avec Windows 10 et Windows 11 (architectures 64 bits et ARM).',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment fonctionne l\'enregistrement des programmes sur PC ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Grâce à la version desktop, vous pouvez enregistrer en direct vos émissions et matchs préférés directement sur le disque dur de votre ordinateur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Faut-il une carte graphique dédiée pour la 4K sur ordinateur ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Non, un processeur Intel Core ou AMD Ryzen récent avec puce graphique intégrée prend en charge le décodage matériel H.265 à 60 FPS sans aucune surcharge.',
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
            name: 'Guide d\'Installation',
            item: `${SITE_CONFIG.domain}/guide-installation`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'PC & Mac',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <Link href="/guide-installation" className="hover:text-blue-400 transition-colors">Guide d'Installation</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">PC Windows 11 & Apple Mac</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold">
              <Laptop className="w-4 h-4 text-indigo-400" />
              <span>Logiciel Desktop Certifié Windows & macOS 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comment Configurer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">IPTV sur PC Windows et Mac</span> en 2026
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transformez votre ordinateur en écran TV 4K de salon. Découvrez notre guide complet pour installer et configurer <strong>IPTV sur PC Windows et Mac</strong> via le client officiel <strong>IPTV Smarters Pro Desktop</strong> ou le lecteur universel <strong>VLC Media Player</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Découvrir nos Abonnements 4K</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#tutoriel-desktop"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Étapes d'Installation Pas-à-Pas</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Multi-Fenêtre</span>
                <span className="block text-xs text-slate-400">Mode Picture-in-Picture</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 3 min</span>
                <span className="block text-xs text-slate-400">Installation .exe / .dmg</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">Enregistreur</span>
                <span className="block text-xs text-slate-400">Capture sur Disque Dur</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Fiche Client Desktop</h2>
                    <span className="text-xs text-slate-400">Windows & macOS 2026</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Gratuit
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Systèmes Compatibles</dt>
                  <dd className="font-semibold text-slate-200">Windows 10/11 (64-bit) & macOS</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Logiciels Testés</dt>
                  <dd className="font-semibold text-slate-200">Smarters Pro Desktop & VLC Player</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Formats Pris en Charge</dt>
                  <dd className="font-semibold text-indigo-400">Xtream Codes API & M3U_Plus</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Enregistrement Direct</dt>
                  <dd className="font-semibold text-slate-200">Format MP4 / TS natif</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Consommation CPU</dt>
                  <dd className="font-semibold text-emerald-400">&lt; 5% (Accélération GPU)</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/checkout?plan=Premium"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>Activer mon Accès Serveur 4K</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Article Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Pourquoi regarder l'IPTV sur Ordinateur */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Les Avantages de l'IPTV sur Ordinateur de Bureau ou PC Portable
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Regarder vos chaînes sur <strong>ordinateur Windows ou Mac</strong> offre une flexibilité incomparable pour les passionnés de sport et de divertissement. Vous pouvez garder un match en direct en mode fenêtré tout en continuant votre travail, ou brancher un câble HDMI vers votre écran géant pour transformer votre PC en station multimédia.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La version pour ordinateur permet également d'<strong>enregistrer en temps réel</strong> n'importe quel flux TV directement sur votre disque dur ou SSD sans limitation de stockage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Zap className="w-6 h-6 text-indigo-400" />
              <h3 className="text-base font-bold text-white">Mode Fenêtré & Multi-Tâches</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suivez votre match de football tout en travaillant sur votre second moniteur avec fluidité 60 FPS garantie.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <Radio className="w-6 h-6 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Enregistreur Numérique Intégré</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capturez vos émissions favorites en format vidéo MP4 sans perte de qualité directement sur votre disque dur.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Compatibilité VLC Universelle</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pas besoin d'installation complexe : collez votre URL M3U dans VLC Media Player et commencez à regarder immédiatement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Étapes Pas-à-Pas Desktop */}
        <section id="tutoriel-desktop" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tutoriel d'Installation : IPTV sur PC Windows et Mac Pas-à-Pas
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Suivez ces 4 étapes simples pour installer le client officiel et vous connecter :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">Télécharger le Logiciel</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Téléchargez le fichier officiel adapté : le programme d'installation <code>.exe</code> pour Windows (10/11) ou l'image <code>.dmg</code> pour Mac OS.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">Installer l'Application</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Double-cliquez sur le fichier téléchargé et suivez les instructions. Sous Windows, si le filtre SmartScreen apparaît, cliquez sur <em>Informations complémentaires</em> puis <em>Exécuter quand même</em>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-white">Choisir "Add User" (Xtream Codes)</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                Ouvrez IPTV Smarters Pro Desktop et cliquez sur le bouton <strong className="text-white">Add New User</strong>, puis sélectionnez la méthode de connexion Xtream Codes API.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-white">Entrer vos identifiants VIP</h3>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed pl-11 space-y-2">
                <p>Complétez les 4 champs d'accès :</p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                  <div>Any Name : Mon Ordinateur VIP</div>
                  <div>Username : VotreIdentifiant</div>
                  <div>Password : VotreMotDePasse</div>
                  <div>Server URL : http://serveur-dns.com:port</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Alternative Rapide VLC Media Player */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase">
              Sans Installation Supplémentaire
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Méthode Alternative : Lecture Universelle avec VLC Media Player
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si vous avez déjà le lecteur gratuit <strong>VLC</strong> installé sur votre PC ou Mac, vous pouvez visionner vos chaînes en 3 clics :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-indigo-400">Étape A</span>
              <h3 className="text-sm font-bold text-white">Ouvrir le flux réseau</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dans VLC, appuyez sur <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300">Ctrl + N</code> (ou menu Média &gt; Ouvrir un flux réseau).
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-indigo-400">Étape B</span>
              <h3 className="text-sm font-bold text-white">Coller l'URL M3U</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Collez votre lien de playlist M3U complète reçue lors de votre souscription et cliquez sur Lire.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-indigo-400">Étape C</span>
              <h3 className="text-sm font-bold text-white">Afficher la liste des chaînes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Appuyez sur <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300">Ctrl + L</code> pour faire apparaître la liste complète des chaînes et bouquets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/60 border border-indigo-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Profitez d'un Streaming 4K Sans Coupure sur PC & Mac
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Débloquez +25 000 chaînes en direct et +90 000 VOD avec serveurs haute vitesse dédiés et assistance 7j/7.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP (1 Mois Offert)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique PC & Mac en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur l'IPTV sur Ordinateur
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses pratiques pour regarder l'IPTV sur PC Windows et Apple Mac.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Peut-on utiliser VLC pour regarder l'IPTV sur PC ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, VLC Media Player permet de lire directement votre flux IPTV. Ouvrez simplement VLC, allez dans Média &gt; Ouvrir un flux réseau (Ctrl+N), collez votre lien M3U et cliquez sur Lire.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>IPTV Smarters Pro est-il compatible avec Windows 11 ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui, la version desktop d'IPTV Smarters Pro est 100% compatible avec Windows 10 et Windows 11 (architectures 64 bits et processeurs ARM).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Comment fonctionne l'enregistrement des programmes ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Grâce à la version desktop, vous pouvez enregistrer en direct vos émissions et matchs préférés directement sur le disque dur de votre ordinateur en format vidéo MP4.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Faut-il une carte graphique dédiée pour la 4K ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Non, un processeur Intel Core ou AMD Ryzen récent avec puce graphique intégrée prend en charge le décodage matériel H.265 à 60 FPS sans aucune surcharge CPU.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

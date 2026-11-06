import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  KeyRound, 
  FileCode, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Layers, 
  Flame, 
  Radio, 
  Server,
  Sliders,
  Wifi
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/guide-installation/xtream-codes-m3u';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Xtream Codes vs M3U IPTV : Comparatif & Configuration 2026",
    description: "Comparatif complet Xtream Codes vs M3U en 2026 : Différences techniques, tutoriel de configuration pas-à-pas et résolution des erreurs d'authentification IPTV.",
    canonicalUrl: PAGE_CANONICAL,
    type: 'article',
    keywords: [
      'xtream codes vs m3u',
      'xtream codes iptv',
      'lien m3u iptv',
      'configuration xtream codes',
      'm3u vs xtream codes',
      'comment utiliser lien m3u',
      'url serveur port username password iptv'
    ],
  });
}

export default function XtreamCodesM3uTutorialPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': `${PAGE_CANONICAL}/#howto`,
        name: 'Comment Configurer ses Identifiants Xtream Codes API et Playlist M3U',
        description: 'Tutoriel complet pour comprendre et renseigner correctement ses accès Xtream Codes API et liens M3U sur n\'importe quel lecteur IPTV.',
        totalTime: 'PT2M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Récupérer vos identifiants d\'accès',
            text: 'Consultez votre e-mail de confirmation d\'abonnement ou votre message WhatsApp d\'activation pour obtenir vos 3 données clés : Nom d\'utilisateur, Mot de passe et URL du serveur avec le port.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Identifier le protocole de votre application',
            text: 'Déterminez si votre lecteur IPTV utilise l\'API Xtream Codes (recommandé pour Smarters Pro, TiviMate, XCIPTV) ou un lien M3U brut (VLC, Smart IPTV).',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Extraire les informations d\'une URL M3U si nécessaire',
            text: 'Une URL M3U contient généralement la structure : http://serveur:port/get.php?username=XXX&password=YYY&type=m3u_plus.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Valider la connexion',
            text: 'Vérifiez l\'exactitude des majuscules/minuscules et enregistrez pour télécharger la liste des chaînes et le guide EPG.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_CANONICAL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Pourquoi privilégier l\'API Xtream Codes par rapport au lien M3U ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'L\'API Xtream Codes est nettement plus performante : elle charge les chaînes par catégories dynamiques, met à jour automatiquement le guide électronique des programmes (EPG) sans ralentir votre appareil, et permet d\'accéder aux fonctionnalités avancées comme le Replay et le contrôle du direct.',
            },
          },
          {
            '@type': 'Question',
            name: 'Que faire en cas d\'erreur "Invalid Details" ou "Check Login Details" ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vérifiez qu\'aucun espace inutile n\'a été copié avant ou après vos identifiants. Vérifiez également que le préfixe http:// (et non https:// si non configuré) et le numéro de port (ex: :80 ou :8080) sont bien indiqués dans l\'URL serveur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment trouver le port de connexion de mon serveur IPTV ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Le port est le numéro situé immédiatement après les deux-points dans l\'URL de votre serveur (par exemple 8080 dans http://monserveur.com:8080). Si aucun port n\'est spécifié, le port standard est le 80.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je convertir un lien M3U en identifiants Xtream Codes ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui ! Un lien M3U se décompose en URL serveur (avant get.php), nom d\'utilisateur (username=) et mot de passe (password=). Vous pouvez les isoler pour vous connecter sur n\'importe quelle application utilisant Xtream Codes.',
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
            name: 'Xtream Codes & M3U',
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
            <span className="text-slate-200 font-medium" aria-current="page">Xtream Codes & M3U</span>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold">
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>Guide Technique & Diagnostic de Connexion 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comprendre vos Accès : <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Xtream Codes vs M3U</span> pour IPTV en 2026
            </h1>

            <div className="p-4 rounded-xl bg-slate-900 border-l-4 border-amber-500 space-y-1">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Réponse Directe &amp; Résumé Clé</span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Découvrez notre guide technique complet analysant <strong>Xtream Codes vs M3U</strong> pour configurer votre <strong>abonnement IPTV 4K</strong> sans ralentissement. Découvrez la différence fondamentale entre l&apos;<strong>API Xtream Codes</strong> et la <strong>playlist M3U</strong>, comment convertir l&apos;une en l&apos;autre et comment résoudre les erreurs d&apos;authentification sur <strong>Smart TV Samsung et LG</strong>, <strong>Fire TV Stick</strong> ou <strong>Box Android TV</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/abonnement-iptv-12-mois"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Recevoir mes Codes VIP en 3 Min</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="#comparatif-protocoles"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                <span>Comparatif Technique Xtream vs M3U</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">EPG Auto</span>
                <span className="block text-xs text-slate-400">Guide TV Intégré</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">&lt; 1 sec</span>
                <span className="block text-xs text-slate-400">Authentification API</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white">100% Apps</span>
                <span className="block text-xs text-slate-400">Smarters, TiviMate, IBO</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-slate-950 font-black text-lg">
                    <KeyRound className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-none">Format des Accès</h2>
                    <span className="text-xs text-slate-400">Protocoles de Connexion 2026</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                  Standard IPTV
                </span>
              </div>

              <dl className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Protocole Recommandé</dt>
                  <dd className="font-semibold text-amber-400">Xtream Codes API</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Champs Requis</dt>
                  <dd className="font-semibold text-slate-200">Username, Password, Server:Port</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Format Fichier</dt>
                  <dd className="font-semibold text-slate-200">Playlist M3U / M3U_Plus (.m3u)</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                  <dt className="text-slate-400">Mise à Jour EPG</dt>
                  <dd className="font-semibold text-emerald-400">Automatique en temps réel</dd>
                </div>
                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Replay & VOD</dt>
                  <dd className="font-semibold text-slate-200">Totalement supporté via Xtream</dd>
                </div>
              </dl>

              <div className="pt-2">
                <Link
                  href="/tarifs-abonnement"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-slate-950 font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  <span>Recevoir mes Accès Serveur 4K</span>
                  <Zap className="w-3.5 h-3.5 text-slate-950" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Article Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Section 1: Comparatif Xtream Codes vs M3U */}
        <section id="comparatif-protocoles" className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Comparatif Technique : Xtream Codes vs M3U pour Votre Lecteur IPTV
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Comprendre la différence fondamentale entre ces deux technologies vous permet de configurer votre application de manière optimale pour éviter les ralentissements :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Xtream Codes */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-amber-500/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-bold uppercase">
                  Recommandé par les Experts
                </span>
                <KeyRound className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">API Xtream Codes</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Vos accès sont segmentés en 4 champs distincts. L'application interroge la base de données du serveur uniquement lorsque vous naviguez dans une catégorie, sans saturer la mémoire vive de votre <strong>Smart TV Samsung et LG</strong> ou de votre <strong>Amazon Fire TV Stick</strong>.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Synchronisation <strong>guide TV EPG</strong> en direct sur 7 jours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accès instantané aux fiches VOD (jaquettes, acteurs, résumés)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zéro plantage de mémoire sur les téléviseurs connectés</span>
                </li>
              </ul>
            </div>

            {/* Card Playlist M3U */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold uppercase">
                  Format Fichier Brut
                </span>
                <FileCode className="w-6 h-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Playlist M3U / M3U_Plus</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fichier texte brut ou lien URL unique listant l'intégralité des 25 000+ chaînes. Utilisé principalement pour VLC Media Player ou d'anciens décodeurs satellites.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Compatible avec 100% des lecteurs multimédias universels</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Temps de chargement plus long lors de la première ouverture</span>
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Nécessite souvent une URL XMLTV séparée pour le guide EPG</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
              <thead className="bg-slate-950 text-slate-200 border-b border-slate-800 text-[11px] sm:text-xs uppercase font-bold">
                <tr>
                  <th className="p-3.5 sm:p-4">Critère Technique</th>
                  <th className="p-3.5 sm:p-4">API Xtream Codes</th>
                  <th className="p-3.5 sm:p-4">Lien Playlist M3U</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-semibold text-white">Format des Données</td>
                  <td className="p-3.5 sm:p-4 text-amber-400 font-mono">Serveur, Port, Username, Password</td>
                  <td className="p-3.5 sm:p-4 text-slate-400 font-mono">URL complète type get.php?...</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-semibold text-white">Vitesse de Synchronisation</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-semibold">Instantanée (&lt; 2 secondes)</td>
                  <td className="p-3.5 sm:p-4 text-slate-400">Plus lente (téléchargement intégral)</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-semibold text-white">Guide des Programmes (EPG)</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-semibold">Intégré et synchronisé automatiquement</td>
                  <td className="p-3.5 sm:p-4 text-slate-400">Nécessite une URL XMLTV distincte</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-semibold text-white">Catalogue VOD (Films & Séries)</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-semibold">Jaquettes, casting, synopsis complets</td>
                  <td className="p-3.5 sm:p-4 text-slate-400">Liste textuelle simple sans métadonnées</td>
                </tr>
                <tr className="hover:bg-slate-800/40">
                  <td className="p-3.5 sm:p-4 font-semibold text-white">Fonction Replay / Catch-up</td>
                  <td className="p-3.5 sm:p-4 text-emerald-400 font-semibold">Prise en charge native avec décalage</td>
                  <td className="p-3.5 sm:p-4 text-slate-400">Non disponible ou instable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Décodage d'un lien M3U */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Comment Isoler vos Identifiants Xtream Codes depuis une URL M3U ?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si vous n'avez sous la main qu'une longue URL M3U, vous pouvez extraire vos 3 données de connexion en observant sa structure standard :
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 break-all leading-relaxed">
            <span className="text-amber-400 font-bold">http://serveur-iptv-dns.com:8080</span>
            /get.php?username=
            <span className="text-emerald-400 font-bold">mon_identifiant</span>
            &password=
            <span className="text-cyan-400 font-bold">mon_mot_de_passe</span>
            &type=m3u_plus
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-amber-400 font-bold block text-xs">1. URL du Serveur</span>
              <span className="text-xs text-slate-300">Tout ce qui se situe avant le <code>/get.php</code>, y compris le port (ex: <code>http://serveur.com:8080</code>).</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-emerald-400 font-bold block text-xs">2. Nom d'utilisateur</span>
              <span className="text-xs text-slate-300">Ce qui se trouve après <code>username=</code> et avant <code>&password=</code>.</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block text-xs">3. Mot de passe</span>
              <span className="text-xs text-slate-300">Ce qui se trouve après <code>password=</code> et avant <code>&type=</code>.</span>
            </div>
          </div>
        </section>

        {/* Section 3: Diagnostic Erreurs de Connexion */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Diagnostic & Résolution des Messages d'Erreur Fréquents
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si votre application refuse de se connecter, appliquez ces vérifications rapides :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white">Erreur "Invalid Login Details"</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cette erreur indique une faute de frappe dans vos identifiants. Vérifiez la casse (majuscules/minuscules) et assurez-vous qu'aucun espace parasite n'a été inséré au début ou à la fin lors du copier-coller.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white">Erreur "Network Error" ou Sablier Infini</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ce problème se produit lorsque le numéro de port (ex: <code>:8080</code>) est oublié dans l'URL serveur, ou lorsque votre fournisseur d'accès internet bloque le résolveur DNS par défaut. Changez vos DNS vers <strong>DNS Cloudflare 1.1.1.1</strong> pour rétablir la connexion.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Banner CTA pour l'abonnement */}
        <section className="rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-orange-950/60 border border-amber-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Recevez vos Identifiants Xtream Codes Sécurisés en 3 Minutes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Accédez immédiatement à vos accès VIP par e-mail et WhatsApp avec lien M3U haute vitesse et guide pas-à-pas personnalisé pour tous vos écrans.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/abonnement-iptv-12-mois"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Découvrir l'Abonnement 12 Mois VIP (2 Écrans Inclus)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: FAQ Spécifique Xtream Codes & M3U en 2 colonnes */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Foire Aux Questions sur Xtream Codes & M3U
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Toutes les réponses pour bien gérer vos identifiants et protocoles de streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Pourquoi privilégier Xtream Codes par rapport au M3U ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                L'API Xtream Codes est nettement plus performante : elle charge les chaînes par catégories dynamiques, met à jour automatiquement le guide électronique des programmes (EPG) sans ralentir votre appareil, et permet d'accéder aux fonctionnalités avancées comme le Replay et le contrôle du direct.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Que faire en cas d'erreur "Check Login Details" ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Vérifiez qu'aucun espace inutile n'a été copié avant ou après vos identifiants. Vérifiez également que le préfixe http:// (et non https:// si non configuré) et le numéro de port (ex: :80 ou :8080) sont bien indiqués dans l'URL serveur.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Comment trouver le port de connexion du serveur ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Le port est le numéro situé immédiatement après les deux-points dans l'URL de votre serveur (par exemple 8080 dans http://monserveur.com:8080). Si aucun port n'est spécifié, le port standard est le 80.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Peut-on convertir un lien M3U en identifiants Xtream ?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pl-6">
                Oui ! Un lien M3U se décompose en URL serveur (avant get.php), nom d'utilisateur (username=) et mot de passe (password=). Vous pouvez les isoler pour vous connecter sur n'importe quelle application utilisant Xtream Codes.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

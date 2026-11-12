import React from 'react';
import Link from 'next/link';
import { Tv, Smartphone, Flame, Laptop, Box, Layers, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

interface DeviceItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  badge: string;
  description: string;
  guideHref: string;
}

interface AppItem {
  name: string;
  platform: string;
  description: string;
  href?: string;
}

const DEVICES: DeviceItem[] = [
  {
    icon: Tv,
    name: 'Smart TV (Samsung & LG)',
    badge: 'Tizen & webOS',
    description: 'Compatible sans boîtier additionnel via IPTV Smarters Pro, IBO Player Pro ou Smart IPTV directement depuis l\'App Store de votre téléviseur.',
    guideHref: '/guide-installation/smart-tv-samsung-lg',
  },
  {
    icon: Flame,
    name: 'Amazon Fire TV Stick',
    badge: 'Fire OS / 4K Max',
    description: 'Installation rapide sur Fire TV Stick Lite, 4K, 4K Max et Fire Cube via l\'application Downloader pour un streaming ultra-fluide.',
    guideHref: '/guide-installation/fire-tv-stick',
  },
  {
    icon: Smartphone,
    name: 'Android TV & Box TV',
    badge: 'Google TV / Shield',
    description: 'Compatible avec Nvidia Shield, Xiaomi Mi Box, Chromecast avec Google TV et l\'ensemble des smartphones et tablettes Android.',
    guideHref: '/guide-installation/android-tv-box',
  },
  {
    icon: Tv,
    name: 'Apple TV, iPhone & iPad',
    badge: 'iOS & tvOS',
    description: 'Profitez de la 4K 60 FPS sur vos appareils Apple via Smarters Lite, GSE Smart IPTV ou TiviMax avec prise en charge native d\'AirPlay.',
    guideHref: '/guide-installation/apple-tv-ios',
  },
  {
    icon: Box,
    name: 'Boîtiers MAG & Formuler',
    badge: 'Stalker & MyTVOnline',
    description: 'Prise en charge intégrale par adresse MAC pour les boîtiers MAG (254, 322, 520) et l\'application MyTVOnline des boîtiers Formuler.',
    guideHref: '/guide-installation/mag-box',
  },
  {
    icon: Laptop,
    name: 'PC Windows, Mac & Web',
    badge: 'Ordinateur & Navigateur',
    description: 'Visionnez vos chaînes en direct et VOD sur votre ordinateur via IPTV Smarters Desktop, VLC Media Player ou directement dans votre navigateur web.',
    guideHref: '/guide-installation/pc-mac-windows',
  },
];

const APPS: AppItem[] = [
  {
    name: 'IPTV Smarters Pro',
    platform: 'Universel (Smart TV, Android, iOS, PC)',
    description: 'L\'application de référence : interface intuitive, gestion des favoris, EPG 7 jours et contrôle du direct.',
    href: '/applications/iptv-smarters-pro',
  },
  {
    name: 'TiviMate IPTV Player',
    platform: 'Android TV & Fire TV Stick',
    description: 'Interface télévisuelle moderne type décodeur opérateur avec zapping instantané et multi-écrans.',
    href: '/applications/tivimate',
  },
  {
    name: 'MyTVOnline 3 (MOL3)',
    platform: 'Boîtiers Formuler (Z11, Z10, Z Mini)',
    description: 'Expérience décodeur d\'exception : Groupes Universels, Picture-in-Picture double flux et PVR.',
    href: '/applications/mytvonline-3',
  },
  {
    name: 'IBO Player Pro',
    platform: 'Smart TV (Samsung / LG) & Android',
    description: 'Lecteur léger et ultra-rapide compatible 4K HDR avec chargement optimisé des playlists.',
    href: '/applications/ibo-player',
  },
  {
    name: 'Flix IPTV',
    platform: 'Smart TV & Lecteurs multimédias',
    description: 'Excellente alternative avec lecteur vidéo interne avancé et personnalisation de la mémoire tampon.',
    href: '/applications/flix-iptv',
  },
  {
    name: 'GSE Smart IPTV',
    platform: 'Apple TV, iPhone, iPad & Mac',
    description: 'Solution complète pour l\'écosystème iOS et tvOS avec prise en charge des protocoles M3U et Xtream.',
    href: '/applications/gse-smart-iptv',
  },
  {
    name: 'XCIPTV & Smart IPTV',
    platform: 'Android Box, Fire Stick & Smart TV',
    description: 'Lecteurs épurés et éprouvés pour une mise en service rapide sur n\'importe quel écran.',
    href: '/applications/xciptv',
  },
];

export function UniversalCompatibility() {
  return (
    <section id="compatibilite" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Compatibilité universelle &amp; matériel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Compatible avec Tous vos Appareils &amp; Applications IPTV
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Notre abonnement s&apos;adapte instantanément à votre équipement grâce aux formats reconnus mondialement : <strong className="text-slate-900 dark:text-white">API Xtream Codes, liens Playlist M3U et portails MAG</strong>.
          </p>
        </div>

        {/* Part A: 6 Hardware Devices Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Tv className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>1. Vos Écrans &amp; Équipements Compatibles</span>
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Guides d&apos;installation inclus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVICES.map((device, idx) => {
              const Icon = device.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {device.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {device.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {device.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={device.guideHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
                    >
                      <span>Consulter le guide pas à pas</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part B: Popular Applications */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>2. Les Meilleures Applications IPTV Prises en Charge</span>
            </h3>
            <Link
              href="/applications"
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Voir toutes les applications</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPS.map((app, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {app.name}
                    </h4>
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 block">
                    {app.platform}
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {app.href && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <Link
                      href={app.href}
                      className="text-xs font-bold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Tutoriel de configuration</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Part C: Protocol Standards & Reassurance */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Protocole Recommandé
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">API Xtream Codes</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Synchronisation automatique du guide EPG, affichage par catégories et gestion des replays.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Compatibilité Totale
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Lien Playlist M3U</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              URL sécurisée ou fichier M3U direct compatible avec VLC, Kodi et les lecteurs multimédias.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-950">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Boîtiers Spécifiques
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Adresse MAC &amp; Portal</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Liaison immédiate sur serveur Stalker pour boîtiers MAG et récepteurs Formuler.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}


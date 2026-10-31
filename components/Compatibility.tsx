import React from 'react';
import Link from 'next/link';
import { Tv, Smartphone, Flame, Laptop, Layers, Box, ChevronRight } from 'lucide-react';

const COMPATIBLE_DEVICES = [
  { 
    icon: Tv,
    name: 'Smart TV (Samsung & LG)', 
    desc: 'Compatible avec Smarters Player Lite, IBO Player, Smart IPTV directement sur Tizen OS et webOS.',
    href: '/guide-installation/smart-tv-samsung-lg'
  },
  { 
    icon: Flame,
    name: 'Amazon Fire TV Stick', 
    desc: 'Fonctionne parfaitement sur Fire Stick Lite, 4K, 4K Max et Fire TV Cube via l\'utilitaire Downloader.',
    href: '/guide-installation/fire-tv-stick'
  },
  { 
    icon: Smartphone,
    name: 'Android TV Box & Smartphones', 
    desc: 'Compatible avec Nvidia Shield, Xiaomi Mi Box, Google TV et tous téléphones/tablettes Android.',
    href: '/guide-installation/android-tv-box'
  },
  { 
    icon: Tv,
    name: 'Apple TV, iPhone & iPad', 
    desc: 'Téléchargez Smarters Player Lite sur l\'App Store Apple officiel avec prise en charge 4K HDR et AirPlay.',
    href: '/guide-installation/apple-tv-ios'
  },
  { 
    icon: Laptop,
    name: 'PC Windows & Mac OS', 
    desc: 'Regardez sur grand écran d\'ordinateur via l\'application officielle Desktop ou VLC Media Player.',
    href: '/guide-installation/pc-mac-windows'
  },
  { 
    icon: Box,
    name: 'Boîtiers MAG & Formuler', 
    desc: 'Compatibilité totale avec les boîtiers MAG et les modèles Formuler Z via portail Xtream Codes ou M3U.',
    href: '/guide-installation/xtream-codes-m3u'
  }
];

export function Compatibility() {
  return (
    <section id="compatibility" className="py-24 bg-slate-950 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            Écosystème Universel
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Appareils & Applications Supportés
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Notre abonnement IPTV Smarters Pro fonctionne à la perfection sur 100% des systèmes d'exploitation et lecteurs multimédias modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPATIBLE_DEVICES.map((device, idx) => {
            const Icon = device.icon;
            return (
              <Link
                key={idx} 
                href={device.href}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg group space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {device.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors pt-2 border-t border-slate-800/60">
                  <span>Voir le tutoriel dédié</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

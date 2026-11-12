'use client';
// CLIENT: Interactive dual-mode channel accordions (country vs category) with instant search

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Globe, 
  Tv, 
  Trophy, 
  Film, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Radio, 
  Zap,
  SlidersHorizontal
} from 'lucide-react';

interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60fps' | 'FHD' | 'HD';
  hasReplay?: boolean;
}

interface ChannelGroup {
  id: string;
  title: string;
  subtitle: string;
  flag?: string;
  iconName: 'tv' | 'trophy' | 'film' | 'globe' | 'radio' | 'zap';
  count: string;
  channels: Channel[];
}

const COUNTRY_GROUPS: ChannelGroup[] = [
  {
    id: 'france',
    title: 'France (TNT, Canal+, Cinéma & Sport)',
    subtitle: 'TNT intégrale, bouquets payants, cinéma et sport en direct',
    flag: '🇫🇷',
    iconName: 'tv',
    count: '+1 850 chaînes',
    channels: [
      { name: 'TF1 4K HDR', quality: '4K UHD', hasReplay: true },
      { name: 'France 2 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'France 3 HD Régions', quality: 'FHD', hasReplay: true },
      { name: 'Canal+ 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'Canal+ Foot FHD', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Canal+ Sport 360', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Canal+ Box Office', quality: '4K UHD', hasReplay: true },
      { name: 'M6 4K HDR', quality: '4K UHD', hasReplay: true },
      { name: 'beIN Sports 1 4K', quality: '4K UHD', hasReplay: true },
      { name: 'beIN Sports 2-10 Max', quality: 'FHD 60fps', hasReplay: true },
      { name: 'RMC Sport 1-2', quality: 'FHD 60fps', hasReplay: true },
      { name: 'DAZN Ligue 1', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Eurosport 1-2 FHD', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Ciné+ OCS Premier', quality: '4K UHD', hasReplay: true },
      { name: 'Arte FHD', quality: 'FHD', hasReplay: true },
      { name: 'CNews 24/7', quality: 'FHD', hasReplay: true },
      { name: 'BFM TV HD', quality: 'FHD', hasReplay: true },
      { name: "L'Équipe 21", quality: 'FHD 60fps', hasReplay: true },
      { name: 'Disney Channel FHD', quality: 'FHD', hasReplay: true },
      { name: 'Planète+ 4K', quality: '4K UHD', hasReplay: true },
    ],
  },
  {
    id: 'belgique',
    title: 'Belgique (RTBF, RTL-TVI & Proximus)',
    subtitle: 'Bouquets francophones et flamands complets avec Replay 7j',
    flag: '🇧🇪',
    iconName: 'globe',
    count: '+620 chaînes',
    channels: [
      { name: 'La Une FHD', quality: 'FHD', hasReplay: true },
      { name: 'Tipik HD', quality: 'FHD', hasReplay: true },
      { name: 'La Trois HD', quality: 'FHD', hasReplay: true },
      { name: 'RTL-TVI HD', quality: 'FHD', hasReplay: true },
      { name: 'Club RTL', quality: 'FHD', hasReplay: true },
      { name: 'Plug RTL', quality: 'FHD', hasReplay: true },
      { name: 'DAZN Eleven Pro League 1-3', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Pickx+ Sports 1-6', quality: 'FHD 60fps', hasReplay: true },
      { name: 'VTM FHD (Flandre)', quality: 'FHD' },
      { name: 'Play4 HD', quality: 'FHD' },
    ],
  },
  {
    id: 'suisse',
    title: 'Suisse (RTS, SRF & Blue Sport)',
    subtitle: 'Toutes les chaînes RTS 1-2 et les canaux Blue Sport exclusifs',
    flag: '🇨🇭',
    iconName: 'globe',
    count: '+480 chaînes',
    channels: [
      { name: 'RTS 1 FHD', quality: 'FHD', hasReplay: true },
      { name: 'RTS 2 FHD', quality: 'FHD', hasReplay: true },
      { name: 'Blue Sport 1 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'Blue Sport 2-6 Live', quality: 'FHD 60fps', hasReplay: true },
      { name: 'SRF 1 HD (Alémanique)', quality: 'FHD' },
      { name: 'SRF zwei HD', quality: 'FHD 60fps' },
      { name: 'RSI LA 1 HD (Tessin)', quality: 'FHD' },
      { name: 'Teleclub Cinema', quality: 'FHD' },
    ],
  },
  {
    id: 'canada',
    title: 'Canada & Québec (RDS, TVA & ICI)',
    subtitle: 'Le meilleur de la télévision québécoise et sports US/Canada',
    flag: '🇨🇦',
    iconName: 'globe',
    count: '+750 chaînes',
    channels: [
      { name: 'ICI Télé Montréal', quality: 'FHD', hasReplay: true },
      { name: 'TVA Québec FHD', quality: 'FHD', hasReplay: true },
      { name: 'RDS 1 & 2 HD (LNH/Hockey)', quality: 'FHD 60fps', hasReplay: true },
      { name: 'TVA Sports 1-3 HD', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Noovo HD', quality: 'FHD' },
      { name: 'TSN 1-5 (Canada Anglais)', quality: 'FHD 60fps' },
      { name: 'Sportsnet East/Ontario/West', quality: 'FHD 60fps' },
      { name: 'Télé-Québec', quality: 'FHD' },
    ],
  },
  {
    id: 'maghreb',
    title: 'Maghreb & Moyen-Orient (Arabe & Berbère)',
    subtitle: 'Maroc, Algérie, Tunisie, beIN Mena & bouquets Nilesat',
    flag: '🇲🇦',
    iconName: 'globe',
    count: '+3 400 chaînes',
    channels: [
      { name: 'Al Aoula HD Maroc', quality: 'FHD', hasReplay: true },
      { name: '2M Monde HD', quality: 'FHD', hasReplay: true },
      { name: 'Arryadia TNT HD', quality: 'FHD 60fps', hasReplay: true },
      { name: 'ENTV Algérie 1-9', quality: 'FHD' },
      { name: 'Echourouk TV HD', quality: 'FHD' },
      { name: 'El Watania 1 & 2 Tunisie', quality: 'FHD' },
      { name: 'beIN Sports Mena 4K', quality: '4K UHD', hasReplay: true },
      { name: 'beIN Sports Mena 1-9 HD', quality: 'FHD 60fps', hasReplay: true },
      { name: 'MBC 1-5 & Action FHD', quality: 'FHD' },
      { name: 'Rotana Cinema HD', quality: 'FHD' },
    ],
  },
  {
    id: 'uk_usa',
    title: 'Royaume-Uni & USA (Sky, TNT, ESPN & NBC)',
    subtitle: 'Premier League, NFL, NBA, HBO et grandes chaînes américaines',
    flag: '🇬🇧',
    iconName: 'trophy',
    count: '+4 200 chaînes',
    channels: [
      { name: 'Sky Sports Main Event 4K', quality: '4K UHD', hasReplay: true },
      { name: 'Sky Sports Premier League', quality: 'FHD 60fps', hasReplay: true },
      { name: 'TNT Sports 1-4 Ultimate 4K', quality: '4K UHD', hasReplay: true },
      { name: 'BBC One & Two 4K UHD', quality: '4K UHD' },
      { name: 'ESPN & ESPN 2 USA', quality: 'FHD 60fps' },
      { name: 'NBC Sports & CBS Sports', quality: 'FHD 60fps' },
      { name: 'HBO East/West HD', quality: 'FHD' },
      { name: 'Fox Sports 1 & 2', quality: 'FHD 60fps' },
    ],
  },
  {
    id: 'europe',
    title: 'Espagne, Italie, Portugal & Allemagne',
    subtitle: 'Movistar+, DAZN Italia, Sky Deutschland, Sport TV Portugal',
    flag: '🇪🇺',
    iconName: 'globe',
    count: '+5 100 chaînes',
    channels: [
      { name: 'Movistar LaLiga 4K (Espagne)', quality: '4K UHD', hasReplay: true },
      { name: 'DAZN 1-4 LaLiga España', quality: 'FHD 60fps' },
      { name: 'Sky Sport Uno 4K (Italie)', quality: '4K UHD' },
      { name: 'DAZN 1-2 Italia Serie A', quality: 'FHD 60fps' },
      { name: 'Sport TV 1-6 Portugal', quality: 'FHD 60fps' },
      { name: 'Benfica TV HD', quality: 'FHD' },
      { name: 'Sky Bundesliga 1-10 (Allemagne)', quality: 'FHD 60fps' },
      { name: 'DAZN 1-2 Deutschland', quality: 'FHD 60fps' },
    ],
  },
];

const CATEGORY_GROUPS: ChannelGroup[] = [
  {
    id: 'sport',
    title: 'Sport Direct & Événements 4K',
    subtitle: 'Football, Champions League, Ligue 1, F1, MotoGP, UFC, NBA & Tennis',
    iconName: 'trophy',
    count: '+3 200 canaux sportifs',
    channels: [
      { name: 'Canal+ Foot 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'beIN Sports 1-10 HD/4K', quality: '4K UHD', hasReplay: true },
      { name: 'RMC Sport 1-2 4K', quality: '4K UHD', hasReplay: true },
      { name: 'DAZN Ligue 1 Live', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Eurosport 1 & 2 FHD', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Sky Sports Premier League', quality: 'FHD 60fps', hasReplay: true },
      { name: 'TNT Sports Ultimate 4K', quality: '4K UHD', hasReplay: true },
      { name: 'DAZN Eleven Pro League', quality: 'FHD 60fps', hasReplay: true },
      { name: 'Blue Sport 1 4K Suisse', quality: '4K UHD', hasReplay: true },
      { name: 'Movistar LaLiga 4K', quality: '4K UHD', hasReplay: true },
      { name: 'UFC Fight Pass Live', quality: 'FHD 60fps' },
      { name: 'F1 TV Pro Feed Direct', quality: '4K UHD', hasReplay: true },
    ],
  },
  {
    id: 'cinema',
    title: 'Cinéma, Séries & Fiction Premium',
    subtitle: 'Sorties cinéma récentes, séries US en direct et chaînes thématiques',
    iconName: 'film',
    count: '+2 100 canaux cinéma',
    channels: [
      { name: 'Canal+ 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'Canal+ Box Office 4K', quality: '4K UHD', hasReplay: true },
      { name: 'Canal+ Grand Écran', quality: 'FHD', hasReplay: true },
      { name: 'Canal+ Séries FHD', quality: 'FHD', hasReplay: true },
      { name: 'Ciné+ OCS Premier', quality: '4K UHD', hasReplay: true },
      { name: 'Ciné+ Frisson & Émotion', quality: 'FHD', hasReplay: true },
      { name: 'Paramount Channel 4K', quality: '4K UHD', hasReplay: true },
      { name: 'Action HD', quality: 'FHD' },
      { name: 'TCM Cinéma FHD', quality: 'FHD' },
      { name: 'Warner TV HD', quality: 'FHD', hasReplay: true },
    ],
  },
  {
    id: 'generaliste',
    title: 'Généralistes & TNT Nationale',
    subtitle: 'Toutes les grandes chaînes publiques et privées européennes',
    iconName: 'tv',
    count: '+1 450 canaux',
    channels: [
      { name: 'TF1 4K HDR', quality: '4K UHD', hasReplay: true },
      { name: 'France 2 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'France 3 Régions', quality: 'FHD', hasReplay: true },
      { name: 'M6 4K HDR', quality: '4K UHD', hasReplay: true },
      { name: 'Arte 4K UHD', quality: '4K UHD', hasReplay: true },
      { name: 'W9 FHD', quality: 'FHD', hasReplay: true },
      { name: 'TMC HD', quality: 'FHD', hasReplay: true },
      { name: 'La Une RTBF (Belgique)', quality: 'FHD', hasReplay: true },
      { name: 'RTL-TVI HD (Belgique)', quality: 'FHD', hasReplay: true },
      { name: 'RTS 1 FHD (Suisse)', quality: 'FHD', hasReplay: true },
    ],
  },
  {
    id: 'news',
    title: 'Informations 24h/24 & Actualités Mondiales',
    subtitle: 'Suivez les flux infos en direct continu en français et langues internationales',
    iconName: 'radio',
    count: '+850 canaux info',
    channels: [
      { name: 'BFM TV HD', quality: 'FHD', hasReplay: true },
      { name: 'CNews HD', quality: 'FHD', hasReplay: true },
      { name: 'LCI La Chaîne Info', quality: 'FHD', hasReplay: true },
      { name: 'France Info TV', quality: 'FHD', hasReplay: true },
      { name: 'Euronews Français', quality: 'FHD' },
      { name: 'France 24 Français & Arabe', quality: 'FHD' },
      { name: 'BBC News HD', quality: 'FHD' },
      { name: 'CNN International', quality: 'FHD' },
      { name: 'Al Jazeera Français & Arabe', quality: 'FHD' },
    ],
  },
  {
    id: 'docu_jeunesse',
    title: 'Documentaires, Découverte & Jeunesse',
    subtitle: 'Animaux, sciences, histoire et programmes sécurisés pour enfants',
    iconName: 'zap',
    count: '+1 900 canaux',
    channels: [
      { name: 'National Geographic 4K', quality: '4K UHD', hasReplay: true },
      { name: 'Nat Geo Wild FHD', quality: 'FHD', hasReplay: true },
      { name: 'Discovery Channel HD', quality: 'FHD', hasReplay: true },
      { name: 'Planète+ 4K', quality: '4K UHD', hasReplay: true },
      { name: 'Planète+ Crime & Aventure', quality: 'FHD', hasReplay: true },
      { name: 'Disney Channel FHD', quality: 'FHD', hasReplay: true },
      { name: 'Cartoon Network HD', quality: 'FHD', hasReplay: true },
      { name: 'Nickelodeon France', quality: 'FHD', hasReplay: true },
      { name: 'Gulli FHD', quality: 'FHD', hasReplay: true },
    ],
  },
];

export function ChannelAccordions() {
  const [mode, setMode] = useState<'country' | 'category'>('country');
  const [search, setSearch] = useState('');
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    france: true,
    sport: true,
  });

  const activeGroups = mode === 'country' ? COUNTRY_GROUPS : CATEGORY_GROUPS;

  const filteredGroups = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return activeGroups;

    return activeGroups
      .map((group) => {
        const groupMatch = group.title.toLowerCase().includes(q) || group.subtitle.toLowerCase().includes(q);
        const matchedChannels = group.channels.filter((c) => c.name.toLowerCase().includes(q));

        if (groupMatch) {
          return group;
        }

        if (matchedChannels.length > 0) {
          return {
            ...group,
            channels: matchedChannels,
          };
        }

        return null;
      })
      .filter((g): g is ChannelGroup => g !== null);
  }, [activeGroups, search]);

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    activeGroups.forEach((g) => {
      next[g.id] = true;
    });
    setOpenGroups(next);
  };

  const collapseAll = () => {
    setOpenGroups({});
  };

  return (
    <div className="w-full space-y-8">
      {/* Search and Controls Toolbar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm dark:shadow-xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Instant Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une chaîne (ex: Canal+, beIN, TF1, RTS, RTBF, DAZN)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-2 py-1"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Dual Mode Switcher Tabs */}
          <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-950 p-1 border border-slate-200 dark:border-slate-800 shrink-0">
            <button
              onClick={() => {
                setMode('country');
                setOpenGroups((prev) => ({ ...prev, france: true }));
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                mode === 'country'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Par Pays / Région</span>
            </button>
            <button
              onClick={() => {
                setMode('category');
                setOpenGroups((prev) => ({ ...prev, sport: true }));
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                mode === 'category'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Par Thématique</span>
            </button>
          </div>
        </div>

        {/* Action bar (total & expand/collapse) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>
              {filteredGroups.length} bouquet(s) affiché(s) &middot; Total +25 000 chaînes 4K/FHD disponibles
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
            >
              Tout Déplier
            </button>
            <span>&middot;</span>
            <button
              onClick={collapseAll}
              className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-medium"
            >
              Tout Replier
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Groups List */}
      <div className="space-y-4">
        {filteredGroups.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <Radio className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Aucune chaîne ne correspond à votre recherche</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Essayez un autre mot-clé ou réinitialisez votre filtre pour afficher l'ensemble des +25 000 chaînes.
            </p>
            <button
              onClick={() => setSearch('')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider"
            >
              Réinitialiser la recherche
            </button>
          </div>
        ) : (
          filteredGroups.map((group) => {
            const isOpen = Boolean(openGroups[group.id] || search.length > 0);
            return (
              <div
                key={group.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm dark:shadow-md transition-all hover:border-blue-400 dark:hover:border-slate-700"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 flex items-center justify-center shrink-0 text-lg">
                      {group.flag ? <span>{group.flag}</span> : <Tv className="w-5 h-5" />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                          {group.title}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-300 text-[10px] font-extrabold uppercase">
                          {group.count}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
                      {group.channels.map((channel, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 hover:border-blue-500 flex items-center justify-between gap-2 transition-all hover:-translate-y-0.5 shadow-sm dark:shadow-none"
                        >
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block">
                              {channel.name}
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span
                                className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                                  channel.quality === '4K UHD'
                                    ? 'bg-amber-50 text-amber-800 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30'
                                    : channel.quality === 'FHD 60fps'
                                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30'
                                    : 'bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-300'
                                }`}
                              >
                                {channel.quality}
                              </span>
                              {channel.hasReplay && (
                                <span className="text-[9px] bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-semibold px-1 rounded">
                                  Replay 7j
                                </span>
                              )}
                            </div>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        Bande passante CDN garantie sans coupure &middot; EPG automatique inclus
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        Tous flux disponibles en direct avec votre abonnement
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}


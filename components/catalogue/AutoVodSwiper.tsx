'use client';
// CLIENT: Auto-advancing VOD marquee and interactive filter / sorting showcase

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Star, 
  Film, 
  Tv, 
  Trophy, 
  Search, 
  ArrowUpDown, 
  Sparkles,
  SlidersHorizontal 
} from 'lucide-react';
import { VodItem, VodModal } from '@/components/vod/VodModal';
import { SAMPLE_VOD_CATALOG } from '@/components/vod/VodSwiper';

// Extended Catalog with diverse 4K titles
const EXTENDED_CATALOG: VodItem[] = [
  ...SAMPLE_VOD_CATALOG,
  {
    id: 'vod-8',
    title: 'The Batman Part II',
    category: 'film',
    genre: ['Action', 'Thriller Noir', '4K UHD'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR 5.1',
    rating: 8.8,
    year: 2026,
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Dans les ténèbres de Gotham, le chevalier noir poursuit sa traque contre la corruption systémique face à une nouvelle menace calculatrice.',
    trailerId: 'mqqft2x_Aa4',
  },
  {
    id: 'vod-9',
    title: 'Stranger Things - Saison Finale',
    category: 'serie',
    genre: ['Science-Fiction', 'Mystère', 'Nouveauté 2026'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR Dolby Atmos',
    rating: 9.1,
    year: 2026,
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'La confrontation ultime contre le Monde à l\'Envers s\'abat sur Hawkins. Tous les mystères enfouis sont enfin révélés.',
    trailerId: 'b9EkMc79ZSU',
  },
  {
    id: 'vod-10',
    title: 'UEFA Champions League 2026 : Intégrale',
    category: 'sport',
    genre: ['Football', 'Ligue des Champions', '4K 60fps'],
    quality: '4K Ultra HD',
    audio: 'Commentaires Français 50 FPS',
    rating: 9.6,
    year: 2026,
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1489944445391-11dd35574ca6?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Tous les matchs des phases de poules et matchs à élimination directe en Replay 4K sans coupure avec résumés condensés 15 minutes.',
    trailerId: 'r53Tf2e8yXg',
  },
];

type CategoryFilter = 'all' | 'film' | 'serie' | 'sport';
type SortOption = 'rating_desc' | 'year_desc' | 'title_asc';

export function AutoVodSwiper() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [sortOption, setSortOption] = useState<SortOption>('rating_desc');
  const [search, setSearch] = useState('');
  const [activeModalItem, setActiveModalItem] = useState<VodItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filtered and sorted titles
  const displayedItems = useMemo(() => {
    let items = [...EXTENDED_CATALOG];

    if (selectedCategory !== 'all') {
      items = items.filter((item) => item.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.genre.some((g) => g.toLowerCase().includes(q))
      );
    }

    items.sort((a, b) => {
      if (sortOption === 'rating_desc') return b.rating - a.rating;
      if (sortOption === 'year_desc') return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

    return items;
  }, [selectedCategory, sortOption, search]);

  // Smooth auto-scroll carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, displayedItems]);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <div className="w-full space-y-8">
      {/* Search, Filter & Sort Controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm dark:shadow-xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Instant Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un film, une série ou un genre (ex: Dune, Gladiator, Action, 4K)..."
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

          {/* Category Tabs */}
          <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-950 p-1 border border-slate-200 dark:border-slate-800 shrink-0 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tout (+90 000 VOD)</span>
            </button>
            <button
              onClick={() => setSelectedCategory('film')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'film'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Films 4K</span>
            </button>
            <button
              onClick={() => setSelectedCategory('serie')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'serie'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Séries Complètes</span>
            </button>
            <button
              onClick={() => setSelectedCategory('sport')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'sport'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Sport Replay</span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
            >
              <option value="rating_desc">Meilleures Notes (Top IMDb)</option>
              <option value="year_desc">Plus Récents (2024-2026)</option>
              <option value="title_asc">Ordre Alphabétique (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Toolbar Footer / Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {displayedItems.length} titre(s) disponible(s) en démonstration &middot; Défilement automatique actif
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              aria-label="Titre précédent"
              className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Titre suivant"
              className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Advancing Swiper Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar scrollbar-none snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative flex-none w-[270px] sm:w-[300px] rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 snap-start"
            >
              {/* Poster Image with fixed aspect-ratio to prevent layout shift */}
              <div className="relative aspect-[2/3] w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.poster}
                  alt={`Affiche du film ou de la série ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 270px, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center gap-1 text-xs font-black text-amber-400 shadow">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>

                {/* Quality Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider shadow">
                  {item.quality}
                </div>

                {/* Play Button Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/50 transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>
              </div>

              {/* Title & Metadata Details */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-blue-400 uppercase tracking-wider">
                    {item.category === 'film' ? 'Film 4K' : item.category === 'serie' ? 'Série Complète' : 'Sport Replay'}
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.synopsis}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.genre.slice(0, 2).map((g, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-950 border border-slate-800 text-slate-300 px-2 py-0.5 rounded-full"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer & Details Modal */}
      <VodModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onSelectPlan={() => {
          setActiveModalItem(null);
          router.push('/tarifs');
        }}
      />
    </div>
  );
}


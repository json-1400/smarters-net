'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Sparkles, Film, Tv, Trophy } from 'lucide-react';
import { VodItem, VodModal } from './VodModal';
export type { VodItem } from './VodModal';
import { useRouter } from 'next/navigation';

export const SAMPLE_VOD_CATALOG: VodItem[] = [
  {
    id: 'vod-1',
    title: 'Dune : Deuxième Partie',
    category: 'film',
    genre: ['Science-Fiction', 'Aventure', '4K UHD'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR 5.1',
    rating: 8.6,
    year: 2024,
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Paul Atréides s\'unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Pris entre l\'amour de sa vie et le destin de l\'univers, il doit empêcher un avenir terrible.',
    trailerId: 'Way9Dexny3w'
  },
  {
    id: 'vod-2',
    title: 'Gladiator II (2024)',
    category: 'film',
    genre: ['Action', 'Drame Historique', 'HDR'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR',
    rating: 7.8,
    year: 2024,
    poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Des années après le sacrifice de Maximus, Lucius est forcé d\'entrer dans le Colisée après la conquête de sa patrie par les empereurs tyranniques qui gouvernent Rome.',
    trailerId: '4rgYUipGJNo'
  },
  {
    id: 'vod-3',
    title: 'House of the Dragon - Saison 2',
    category: 'serie',
    genre: ['Fantasy', 'Guerre', 'Drame'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR Dolby Atmos',
    rating: 8.5,
    year: 2024,
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Westeros est au bord d\'une guerre civile sanglante entre le Conseil Vert et le Conseil Noir pour le Trône de Fer. Les dragons s\'élèvent dans le ciel.',
    trailerId: 'DotnJ7tTA34'
  },
  {
    id: 'vod-4',
    title: 'Top 14 & Ligue 1 : Les Grands Chocs',
    category: 'sport',
    genre: ['Rugby', 'Football', 'Direct & Replay'],
    quality: '4K Ultra HD',
    audio: 'Commentaires Français 50 FPS',
    rating: 9.2,
    year: 2026,
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1489944445391-11dd35574ca6?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Vivez l\'intégralité des championnats nationaux et coupes d\'Europe en direct sans coupure. Replays intégraux disponibles 48h après chaque diffusion.',
    trailerId: 'r53Tf2e8yXg'
  },
  {
    id: 'vod-5',
    title: 'Le Seigneur des Anneaux : Les Anneaux de Pouvoir',
    category: 'serie',
    genre: ['Aventure', 'Fantastique', 'Série Événement'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR',
    rating: 7.9,
    year: 2024,
    poster: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Pendant une période de paix relative, les héros affrontent la réémergence du mal en Terre du Milieu. Des profondeurs des Monts Brumeux aux majestueuses forêts de Lindon.',
    trailerId: 'v7v1h8T_t_8'
  },
  {
    id: 'vod-6',
    title: 'Grand Prix Formule 1 & Moto GP 2026',
    category: 'sport',
    genre: ['Sports Mécaniques', 'Vitesse', 'Direct 60fps'],
    quality: '4K Ultra HD',
    audio: 'Français Direct',
    rating: 9.4,
    year: 2026,
    poster: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1532974297617-c0f05fe47bff?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'Chaque séance d\'essais, qualifications et Grand Prix en direct intégral 4K avec caméras embarquées, télémétrie et son spatialisé surround.',
    trailerId: 'QvW61K2SpPc'
  },
  {
    id: 'vod-7',
    title: 'Oppenheimer',
    category: 'film',
    genre: ['Biopic', 'Histoire', 'Cinéma'],
    quality: '4K Ultra HD',
    audio: 'VF / VOSTFR IMAX Ratio',
    rating: 8.9,
    year: 2023,
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    synopsis: 'L\'histoire du physicien J. Robert Oppenheimer et du rôle décisif qu\'il a joué dans la conception et le développement de la première bombe atomique au sein du projet Manhattan.',
    trailerId: 'uYPbbksJxIg'
  }
];

export function VodSwiper() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<'all' | 'film' | 'serie' | 'sport'>('all');
  const [selectedItem, setSelectedItem] = useState<VodItem | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'all' 
    ? SAMPLE_VOD_CATALOG 
    : SAMPLE_VOD_CATALOG.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectPlan = () => {
    router.push('#pricing');
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Catalogue VOD & Directs 2026
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Plus de 90 000 Films, Séries & Événements en 4K
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Accédez aux dernières nouveautés cinéma, aux saisons complètes de vos séries préférées et aux grands championnats sportifs en qualité cristalline sans coupure.
            </p>
          </div>

          {/* Controls: Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Tout Explorer
          </button>
          <button
            onClick={() => setActiveCategory('film')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'film'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Film className="w-4 h-4" />
            Films & Box-Office 4K
          </button>
          <button
            onClick={() => setActiveCategory('serie')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'serie'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Tv className="w-4 h-4" />
            Séries Complètes (VF & VOSTFR)
          </button>
          <button
            onClick={() => setActiveCategory('sport')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'sport'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            Sport Direct & Replays
          </button>
        </div>

        {/* Interactive Swiper / Carousel Grid */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none select-none cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="flex-none w-64 sm:w-72 snap-start group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Poster Image with ratio */}
              <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Quality & Audio Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                    {item.quality}
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-slate-300 text-[9px] font-bold px-2 py-0.5 rounded border border-white/10">
                    {item.audio}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-yellow-400 text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1 border border-white/10">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{item.rating}</span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-3.5 bg-blue-600 text-white rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300 flex items-center justify-center">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </span>
                </div>
              </div>

              {/* Item Info Card Footer */}
              <div className="p-4 bg-slate-900 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-medium">
                  <span>{item.year}</span>
                  <span className="truncate max-w-[120px]">{item.genre[0]}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.synopsis}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-blue-400 font-bold group-hover:underline">
                    Aperçu & Détails &rarr;
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                    Inclus
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for subscription conversion */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
              <Film className="w-6 h-6" />
            </span>
            <div>
              <h4 className="text-base font-bold text-white">
                Envie de profiter de tout le catalogue sans limite ?
              </h4>
              <p className="text-xs text-slate-400">
                Tous ces contenus sont inclus immédiatement dans nos abonnements 3, 6 et 12 mois.
              </p>
            </div>
          </div>
          <button
            onClick={handleSelectPlan}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide shadow-md transition-all whitespace-nowrap"
          >
            Choisir un Abonnement IPTV &rarr;
          </button>
        </div>
      </div>

      {/* Modal Quick View */}
      <VodModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectPlan={handleSelectPlan}
      />
    </section>
  );
}

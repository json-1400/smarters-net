'use client';
// CLIENT: Modal dialog with Escape key listener for VOD preview

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, Play, Star, Calendar, Film, CheckCircle2 } from 'lucide-react';

export interface VodItem {
  id: string;
  title: string;
  category: 'film' | 'serie' | 'sport';
  genre: string[];
  quality: '4K Ultra HD' | 'FHD 1080p' | 'HDR 10+';
  audio: string;
  rating: number;
  year: number;
  duration?: string;
  poster: string;
  backdrop: string;
  synopsis: string;
  trailerId?: string; // YouTube ID for trailer preview
}

interface VodModalProps {
  item: VodItem | null;
  onClose: () => void;
  onSelectPlan: () => void;
}

export function VodModal({ item, onClose, onSelectPlan }: VodModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
          aria-label="Fermer la modale"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Backdrop Preview Banner */}
        <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
          {item.trailerId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${item.trailerId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
              title={`Bande-annonce ${item.title}`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={item.backdrop || item.poster}
                alt={item.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={onSelectPlan}
                  className="p-4 bg-blue-600/90 hover:bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 group"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-bold px-2 py-0.5 rounded">
                  {item.quality}
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-2 py-0.5 rounded">
                  {item.audio}
                </span>
                <span className="bg-slate-800 text-slate-300 text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" /> {item.rating} / 10
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.year}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {item.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectPlan();
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
            >
              <Film className="w-4 h-4" />
              <span>Regarder avec mon abonnement</span>
            </button>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-1.5">
            {item.genre.map((g) => (
              <span key={g} className="text-xs bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/50">
                {g}
              </span>
            ))}
          </div>

          {/* Synopsis */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
            {item.synopsis}
          </p>

          {/* Value highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Disponible en direct & VOD illimitée</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Compatible Smart TV, Box & Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Serveurs haute vitesse anti-buffering</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

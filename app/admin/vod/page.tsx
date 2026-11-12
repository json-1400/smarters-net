'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SAMPLE_VOD_CATALOG } from '@/components/vod/VodSwiper';
import type { VodItem } from '@/components/vod/VodModal';
import { Film, Plus, Star, Trash2, Edit3, CheckCircle2, Sparkles } from 'lucide-react';

export default function AdminVodPage() {
  const [items, setItems] = useState<VodItem[]>(SAMPLE_VOD_CATALOG);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'film' | 'serie' | 'sport'>('film');
  const [newQuality, setNewQuality] = useState<'4K Ultra HD' | 'FHD 1080p' | 'HDR 10+'>('4K Ultra HD');
  const [newAudio, setNewAudio] = useState('VF / VOSTFR');
  const [newRating, setNewRating] = useState('8.5');
  const [newYear, setNewYear] = useState('2026');
  const [newPoster, setNewPoster] = useState('');
  const [newSynopsis, setNewSynopsis] = useState('');
  const [newTrailer, setNewTrailer] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newItem: VodItem = {
      id: `vod-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      genre: [newCategory === 'film' ? 'Film 4K' : newCategory === 'serie' ? 'Série VFF' : 'Sport Direct'],
      quality: newQuality,
      audio: newAudio,
      rating: parseFloat(newRating) || 8.0,
      year: parseInt(newYear) || 2026,
      poster: newPoster || 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
      backdrop: newPoster || 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      synopsis: newSynopsis || 'Ajouté récemment au catalogue haute définition.',
      trailerId: newTrailer || undefined,
    };

    setItems([newItem, ...items]);
    setShowAddModal(false);
    setNewTitle('');
    setNewPoster('');
    setNewSynopsis('');
    setNewTrailer('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Voulez-vous supprimer ce titre du catalogue ?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Film className="w-6 h-6 text-blue-600" />
            Gestion du Catalogue VOD & Swiper
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Gérez les affiches, bandes-annonces et nouveautés mises en avant sur la page d'accueil et le catalogue.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-sm transition-all"
        >
          <Plus className="w-4 h-4" />
          Ajouter un Film / Série
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Titre ajouté avec succès dans le catalogue VOD !
        </div>
      )}

      {/* Grid of current items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <Image
                src={item.backdrop || item.poster}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                unoptimized
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
                {item.quality}
              </div>
              <div className="absolute top-2 right-2 bg-yellow-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5 z-10">
                <Star className="w-3 h-3 fill-current" /> {item.rating}
              </div>
            </div>

            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="uppercase font-bold text-[10px] text-blue-600">{item.category}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.synopsis}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                  {item.audio}
                </span>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-3">
              Ajouter un Titre au Catalogue VOD
            </h2>
            <form onSubmit={handleAddItem} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Titre de l'œuvre</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex: Gladiator II ou Stranger Things S5"
                  className="w-full border rounded-lg p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Catégorie</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="film">Film 4K</option>
                    <option value="serie">Série Complète</option>
                    <option value="sport">Sport en Direct & Replay</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Qualité</label>
                  <select
                    value={newQuality}
                    onChange={(e) => setNewQuality(e.target.value as any)}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="4K Ultra HD">4K Ultra HD</option>
                    <option value="FHD 1080p">FHD 1080p</option>
                    <option value="HDR 10+">HDR 10+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Langue Audio</label>
                  <input
                    type="text"
                    value={newAudio}
                    onChange={(e) => setNewAudio(e.target.value)}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Note (sur 10)</label>
                  <input
                    type="text"
                    value={newRating}
                    onChange={(e) => setNewRating(e.target.value)}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Année</label>
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">URL de l'Affiche (Poster)</label>
                <input
                  type="url"
                  value={newPoster}
                  onChange={(e) => setNewPoster(e.target.value)}
                  placeholder="https://..."
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">ID Vidéo YouTube (Trailer)</label>
                <input
                  type="text"
                  value={newTrailer}
                  onChange={(e) => setNewTrailer(e.target.value)}
                  placeholder="Ex: Way9Dexny3w"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Synopsis</label>
                <textarea
                  rows={3}
                  value={newSynopsis}
                  onChange={(e) => setNewSynopsis(e.target.value)}
                  className="w-full border rounded-lg p-2"
                  placeholder="Résumé du film ou de la série..."
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded-lg text-slate-600 font-bold hover:bg-slate-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
                >
                  Ajouter au catalogue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

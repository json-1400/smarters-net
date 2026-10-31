import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Trophy, ArrowRight, ChevronRight, Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

const PAGE_CANONICAL = 'https://smarterspro12.net/sport';

export function generateMetadata(): Metadata {
  const title = "Football Streaming IPTV France : Matchs en Direct 4K Sans Coupure";
  const description = "Regardez tout le football en direct streaming en 4K Ultra HD : Ligue 1, Ligue des Champions, Premier League et Coupe du Monde sans lag avec IPTV Smarters Pro.";

  return {
    title,
    description,
    alternates: {
      canonical: PAGE_CANONICAL,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function FootballStreamingAliasPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-20 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <Trophy className="w-7 h-7" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Football Streaming & Sports en Direct IPTV 4K
        </h1>
        
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Retrouvez l'intégralité du calendrier des matchs de football en streaming, les classements et les bouquets sportifs en ultra haute définition sur notre hub officiel.
        </p>

        <div className="pt-2">
          <Link
            href="/sport"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            <span>Accéder au Hub Sport & Football Direct</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

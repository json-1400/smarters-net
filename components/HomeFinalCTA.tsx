import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

export function HomeFinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-900 font-sans text-slate-800 dark:text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          <span>Activation Immédiate Sans Coupure</span>
        </span>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Prêt à Profiter du Meilleur IPTV 4K en France ?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Rejoignez nos abonnés et accédez à plus de 25 000 chaînes direct et 90 000 VOD avec serveurs CDN 10 Gbps anti-freeze, activation en 15 minutes et support WhatsApp 7j/7.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <Link
            href="/tarifs"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Choisir Mon Abonnement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 dark:bg-emerald-600/20 dark:hover:bg-emerald-600/30 dark:text-emerald-300 dark:border dark:border-emerald-500/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Assistance WhatsApp Directe</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Garantie Satisfait ou Remboursé 7 Jours</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Sans engagement &middot; Renouvellement manuel</span>
          </span>
        </div>
      </div>
    </section>
  );
}


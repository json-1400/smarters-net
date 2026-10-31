import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Newspaper, ChevronRight, Clock, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    slug: 'configurer-smarters-pro-smart-tv',
    title: 'Comment configurer IPTV Smarters Pro sur Smart TV Samsung & LG',
    desc: 'Découvrez notre guide complet étape par étape pour installer et activer l\'application IPTV Smarters Pro directement sur votre téléviseur connecté sans aucun boîtier externe.',
    date: '28 Mai 2026',
    category: 'Tutoriels',
    readTime: '4 min de lecture'
  },
  {
    slug: 'eviter-coupures-iptv-conseils',
    title: '5 Astuces pour éviter les micro-coupures et le buffering en 4K',
    desc: 'Des saccades régulières sur vos flux sportifs ? Appliquez ces configurations réseau simples (DNS, filaire, bande passante) pour retrouver une stabilité de diffusion optimale.',
    date: '15 Mai 2026',
    category: 'Optimisation',
    readTime: '6 min de lecture'
  },
  {
    slug: 'comparatif-meilleures-applications-iptv',
    title: 'Comparatif : Les meilleures applications IPTV en 2026',
    desc: 'Smarters Pro, IBO Player, IPTV Stream Player ou XCIPTV ? Découvrez notre analyse détaillée des meilleures applications de lecture Xtream et M3U du marché.',
    date: '02 Mai 2026',
    category: 'Guides',
    readTime: '5 min de lecture'
  }
];

export const metadata = {
  title: 'Blog Officiel — IPTV Smarters Pro Conseils & Astuces',
  description: 'Retrouvez nos guides d\'installation, tutoriels de configuration et conseils réseau pour profiter au mieux de votre abonnement IPTV 4K stable.',
};

export default function BlogFeedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100">
      {/* Universal Navigation */}
      <Header />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 mb-4 uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5 text-blue-400" />
            Actualités & Guides Techniques
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Notre Blog IPTV
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Consultez nos articles et astuces rédigés par nos techniciens pour configurer, optimiser et savourer vos flux de streaming en ultra haute définition.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <article 
              key={idx} 
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col shadow-xl hover:border-slate-700 transition-all relative group"
            >
              <div className="flex items-center space-x-3 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md">
                  {post.category}
                </span>
                <span>&bull;</span>
                <span>{post.date}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                {post.desc}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>Lire l'article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}

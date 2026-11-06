import React from 'react';
import Link from 'next/link';
import { Newspaper, ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { POSTS_LIST } from '@/lib/blog-data';

export function HomeBlogSection() {
  return (
    <section className="py-24 bg-slate-900/60 border-t border-slate-900 font-sans text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Dossiers &amp; Comparatifs 2026</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Analyses Techniques &amp; Guides d&apos;Experts IPTV
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Consultez nos comparatifs indépendants sur la stabilité des serveurs CDN, la migration depuis les anciens fournisseurs et les critères d&apos;un flux 4K sans coupure.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>Voir tous les dossiers</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>

        {/* 4 Comparative Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS_LIST.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 hover:-translate-y-1 transition-all duration-200 shadow-lg space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white leading-snug line-clamp-2 hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500">
                  {post.dateModifiedFormatted}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group"
                >
                  <span>Lire l&apos;analyse</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


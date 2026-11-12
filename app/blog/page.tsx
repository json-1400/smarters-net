import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Newspaper, ChevronRight, Clock } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { POSTS_LIST } from '@/lib/blog-data';

const PAGE_CANONICAL = 'https://smarterspro12.net/blog';

const POSTS = POSTS_LIST.map((post) => ({
  slug: post.slug,
  title: post.title,
  desc: post.excerpt,
  date: post.dateFormatted,
  dateIso: post.datePublished,
  category: post.category,
  readTime: post.readTime,
  image: post.image,
}));
export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Blog IPTV : Actualités, Dossiers & Analyses | Smarters Pro',
    description:
      "Retrouvez l'ensemble de nos articles, dossiers et analyses d'experts pour tout comprendre sur l'univers du streaming et des technologies IPTV en France.",
    canonicalUrl: PAGE_CANONICAL,
  });
}

export default function BlogFeedPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_CANONICAL}#webpage`,
        name: 'Blog IPTV : Actualités, Dossiers & Analyses',
        description:
          "Articles, dossiers d'actualité et analyses sur l'univers du streaming et de l'IPTV.",
        url: PAGE_CANONICAL,
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Blog IPTV', item: PAGE_CANONICAL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold text-blue-400 border border-blue-500/20 uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5 text-blue-400" />
            Actualités &amp; Décryptages
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Le Blog IPTV : Actualités, Dossiers &amp; Analyses
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Bienvenue sur l&apos;espace éditorial officiel de Smarters Pro. Retrouvez nos analyses d&apos;experts, nos décryptages techniques et nos dossiers d&apos;actualité pour comprendre le fonctionnement du streaming haute performance.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Explorez nos publications régulières, nos éclairages sur les protocoles et les technologies de diffusion pour profiter au mieux de vos divertissements sur tous vos écrans.
          </p>
        </div>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Tous les Articles &amp; Dossiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-slate-700 transition-colors group"
              >
                {post.image && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block mb-6 overflow-hidden rounded-xl border border-slate-800 aspect-video relative bg-slate-950"
                  >
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      width={1200}
                      height={675}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                )}

                <div className="flex items-center space-x-3 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                  <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md">
                    {post.category}
                  </span>
                  <span>&bull;</span>
                  <time dateTime={post.dateIso}>{post.date}</time>
                </div>

                <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

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
                    <span>Lire le comparatif</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section Méthodologie */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Méthodologie de Test des Fournisseurs Analysés sur Notre Blog IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pour vous guider vers un streaming durable sans coupure, notre équipe évalue chaque offre selon des critères d'ingénierie réseau stricts :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">1. Charge aux Heures de Pointe</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mesure du débit réel entre 20h45 et 23h00 lors des grands soirs de Ligue des Champions pour identifier les serveurs saturés par l'overselling.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">2. Compression HEVC &amp; 60 FPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Vérification du codec <strong>HEVC H.265</strong> natif garantissant une <strong>qualité 4K Ultra HD</strong> fluide sans surconsommation de bande passante.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">3. Robustesse Anti-Blocage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capacité de bascule automatique via l'<strong>API Xtream Codes</strong> et compatibilité certifiée avec le <strong>DNS Cloudflare 1.1.1.1</strong> en France.
              </p>
            </div>
          </div>
        </section>

        {/* Section FAQ Blog */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Questions Fréquentes sur Nos Enquêtes &amp; Comparatifs Blog IPTV
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Retrouvez toutes les précisions sur l'objectivité de nos analyses techniques et les conseils de prévention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Pourquoi publier ces comparatifs ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Face à la prolifération de vendeurs éphémères et de playlists instables, ce <strong>blog IPTV</strong> apporte des tests concrets pour sécuriser votre investissement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Comment éviter les arnaques à bas coût ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fuyez les offres à 10 € sur marketplaces non spécialisées qui disparaissent au bout de quelques semaines, et privilégiez un service avec <strong>support technique 7j/7</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Quelles applications sont recommandées ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nos guides comparent et recommandent <strong>IPTV Smarters Pro</strong> et TiviMate pour leur gestion transparente des flux directs et du catalogue VOD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Comment fonctionne le protocole Xtream Codes ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contrairement aux fichiers M3U statiques volumineux, l'API Xtream Codes communique de façon dynamique avec les serveurs pour ne charger que les bouquets demandés et rafraîchir automatiquement l'EPG.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Que faire si mon fournisseur actuel ne répond plus ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                En cas de fermeture inopinée ou de black-out de votre ancien prestataire, vous pouvez tester nos accès 4K en quelques minutes via notre formule Découverte ou contacter nos techniciens sur WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">Les comparatifs sont-ils actualisés régulièrement ?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Oui, nos ingénieurs réseau effectuent des audits mensuels sur les débits, l'encodage H.265 et la disponibilité des flux pour maintenir ce <strong>blog IPTV</strong> à la pointe de l'actualité.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogArticleBody } from '@/components/BlogArticleBody';
import { renderRichText } from '@/components/BlogRichText';
import {
  ArrowLeft,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Newspaper,
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/contact';
import { POSTS_LIST, getPostBySlug } from '@/lib/blog-data';
import type { BlogPost } from '@/lib/blog/types';

export function generateStaticParams() {
  return POSTS_LIST.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return constructMetadata({ title: 'Article introuvable | Smarters Pro', noIndex: true });
  }
  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    canonicalUrl: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    type: 'article',
    keywords: [post.primaryKw, 'comparatif iptv france', 'abonnement iptv 4k'],
  });
}

function buildSchemaGraph(post: BlogPost, pageCanonical: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageCanonical}/#article`,
        headline: post.title,
        description: post.excerpt,
        inLanguage: 'fr-FR',
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        image: post.image ? `${SITE_CONFIG.domain}${post.image.src}` : undefined,
        mainEntityOfPage: pageCanonical,
        author: { '@type': 'Organization', name: 'Équipe Éditoriale Smarters Pro 12', url: SITE_CONFIG.domain },
        publisher: { '@id': `${SITE_CONFIG.domain}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageCanonical}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Blog IPTV', item: `${SITE_CONFIG.domain}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: pageCanonical },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageCanonical}#faq`,
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const pageCanonical = `${SITE_CONFIG.domain}/blog/${post.slug}`;
  const otherPosts = POSTS_LIST.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchemaGraph(post, pageCanonical)) }}
      />
      <Header />

      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li className="truncate max-w-xs"><span className="text-slate-200 font-medium">{post.title}</span></li>
        </ol>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <article className="lg:col-span-8 space-y-8">
            <Link href="/blog" className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour aux dossiers comparatifs</span>
            </Link>

            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">{post.category}</span>
                <time dateTime={post.datePublished}>{post.dateFormatted}</time>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /><span>{post.readTime}</span></span>
                <span className="text-emerald-400">
                  Mis à jour le <time dateTime={post.dateModified}>{post.dateModifiedFormatted}</time>
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">{post.title}</h1>
              <p className="text-base text-slate-200 leading-relaxed bg-slate-900 border-l-4 border-blue-500 rounded-r-xl p-4">
                {renderRichText(post.directAnswer)}
              </p>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Points clés à retenir</span>
                <ul className="space-y-2 text-sm text-slate-300">
                  {post.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {post.image && (
                <figure className="my-6 space-y-2">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      width={1200}
                      height={675}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="text-center text-xs text-slate-400">
                    {post.image.caption}
                  </figcaption>
                </figure>
              )}
            </header>

            <BlogArticleBody post={post} />

            <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-white">Questions Fréquentes</h2>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <div key={faq.q} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <h3 className="text-sm font-bold text-white">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-slate-900 border border-blue-500/40 rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">Passez sur un Serveur CDN 4K Garanti Sans Coupure</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                <strong className="text-white">Activez vos accès Xtream Codes et M3U</strong> en moins de 15 minutes avec <strong>plus de 25 000 chaînes</strong> et <strong>90 000 VOD 4K</strong> sur nos <strong>serveurs CDN 10 Gbps</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link href="/abonnement-iptv-12-mois" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
                  <span>Abonnement 12 Mois VIP (49,99 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/test-iptv-gratuit" className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-xl text-xs uppercase tracking-wider">
                  Voir les Conditions de Test
                </Link>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Rédigé par l&apos;Équipe Éditoriale Smarters Pro 12, spécialistes du streaming IPTV et des architectures CDN. Dernière vérification technique : {post.dateModifiedFormatted}.
            </p>
          </article>

          <PostSidebar otherPosts={otherPosts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PostSidebar({ otherPosts }: { otherPosts: BlogPost[] }) {
  return (
    <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
      <div className="p-6 rounded-2xl bg-slate-900 border-2 border-blue-500/40 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300">Offre N°1 France</span>
          <span className="text-xs font-black text-emerald-400">4,16 € / mois</span>
        </div>
        <div className="text-lg font-extrabold text-white">Abonnement 12 Mois 4K VIP</div>
        <ul className="space-y-2 text-xs text-slate-300">
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>1 Connexion simultanée (multi-écrans en option)</span></li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Serveurs CDN 4K 60 FPS Anti-Freeze</span></li>
          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span>Support WhatsApp 7j/7</span></li>
        </ul>
        <Link href="/abonnement-iptv-12-mois" className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block">
          Commander pour 49,99 €
        </Link>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-blue-400" />
          <span>Autres Comparatifs</span>
        </div>
        {otherPosts.map((other) => (
          <Link key={other.slug} href={`/blog/${other.slug}`} className="block p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700">
            <span className="text-[10px] font-bold uppercase text-blue-400 block mb-1">{other.category}</span>
            <span className="text-xs font-bold text-white line-clamp-2 block">{other.title}</span>
          </Link>
        ))}
      </div>

      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
          <MessageSquare className="w-4 h-4" />
          <span>Migration &amp; Aide Directe</span>
        </div>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center block">
          Assistance WhatsApp ({CONTACT.whatsappDisplay})
        </a>
      </div>
    </aside>
  );
}

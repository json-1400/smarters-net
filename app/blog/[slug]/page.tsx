import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  ArrowLeft, 
  Clock, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Tv, 
  Smartphone, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight, 
  Newspaper,
  Laptop
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

interface PostData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

const POSTS_DATA: Record<string, PostData> = {
  'configurer-smarters-pro-smart-tv': {
    title: 'Comment configurer IPTV Smarters Pro sur Smart TV Samsung & LG',
    category: 'Tutoriels',
    date: '28 Mai 2026',
    readTime: '4 min de lecture',
    excerpt: 'Guide complet pour installer et activer l\'application IPTV Smarters Pro sur Smart TV Samsung (Tizen) et LG (webOS) avec identifiants Xtream Codes en moins de 5 minutes.',
    content: [
      'L\'application IPTV Smarters Pro est sans conteste le lecteur de flux Xtream le plus populaire et le plus convivial du marché. Si vous possédez un téléviseur connecté Samsung (Tizen OS) ou LG (webOS), l\'installation ne prend que quelques minutes.',
      'Étape 1 : Téléchargement de l\'application. Allumez votre Smart TV et rendez-vous sur le magasin d\'applications officiel (Samsung App Store ou LG Content Store). Recherchez "IPTV Smarters Pro" ou "Smarters Player Lite" et installez l\'application gratuite.',
      'Étape 2 : Lancement et choix de l\'API. Ouvrez l\'application sur votre téléviseur. Vous serez invité à accepter les conditions d\'utilisation, puis vous arriverez sur l\'écran d\'accueil de connexion. Sélectionnez l\'option "Connexion avec l\'API Xtream Codes". C\'est la méthode la plus rapide et la plus stable.',
      'Étape 3 : Saisie de vos identifiants. Saisissez les quatre champs requis de votre abonnement Smarters Pro Officiel : \n1. Nom de la playlist (mettez ce que vous voulez, ex: "Smarters Pro")\n2. Nom d\'utilisateur (envoyé dans vos accès)\n3. Mot de passe (envoyé dans vos accès)\n4. URL du serveur (ex: http://serveur-officiel.com:8080)',
      'Étape 4 : Chargement des listes. Cliquez sur "Add User". L\'application va télécharger les chaînes de télévision en direct, les films et les séries en quelques secondes. Une fois le téléchargement terminé, vous accédez à l\'interface officielle et pouvez commencer à regarder en HD/4K !'
    ]
  },
  'eviter-coupures-iptv-conseils': {
    title: '5 Astuces pour éviter les micro-coupures et le buffering en 4K',
    category: 'Optimisation',
    date: '15 Mai 2026',
    readTime: '6 min de lecture',
    excerpt: 'Des saccades régulières sur vos flux sportifs ? Appliquez ces 5 configurations réseau simples (DNS Cloudflare, câble Ethernet RJ45, cache) pour retrouver une stabilité 4K optimale.',
    content: [
      'Rien n\'est plus frustrant qu\'une coupure d\'image ou un chargement infini (buffering) en plein milieu d\'un match en direct ou d\'une scène d\'action en haute définition. Voici les recommandations de nos techniciens pour éliminer ces désagréments.',
      'Astuce 1 : Privilégiez une connexion filaire Ethernet. Le WiFi est sujet aux perturbations électromagnétiques de votre environnement. En reliant directement votre Smart TV ou votre box Android à votre routeur internet avec un câble RJ45, vous divisez par 10 les pertes de paquets de données.',
      'Astuce 2 : Modifiez vos DNS pour ceux de Google ou Cloudflare. Les serveurs DNS de votre fournisseur d\'accès internet (Orange, SFR, Free, Bouygues) sont parfois lents ou censurent certains flux de diffusion. Configurez les serveurs DNS suivants sur votre appareil : \n- Google : 8.8.8.8 et 8.8.4.4\n- Cloudflare : 1.1.1.1 et 1.0.0.1',
      'Astuce 3 : Vérifiez votre bande passante réelle. Assurez-vous d\'avoir au moins 15 Mbps de débit stable pour de la Full HD, et 25 Mbps pour de la 4K. Vous pouvez tester votre débit sur fast.com directement depuis le navigateur de votre appareil.',
      'Astuce 4 : Videz le cache de l\'application. Les applications accumulent des données de playlist temporaires qui ralentissent le décodeur vidéo. Allez dans les paramètres de votre appareil, section Applications, choisissez IPTV Smarters Pro, et cliquez sur "Vider le cache".',
      'Astuce 5 : Activez un VPN si votre FAI bride les flux. Aux heures de pointe le soir, certains fournisseurs limitent le débit vidéo vers les serveurs de streaming. Un VPN chiffre votre trafic et contourne ce bridage.'
    ]
  },
  'comparatif-meilleures-applications-iptv': {
    title: 'Comparatif : Les meilleures applications IPTV en 2026',
    category: 'Guides',
    date: '02 Mai 2026',
    readTime: '5 min de lecture',
    excerpt: 'Smarters Pro, IBO Player, TiviMate ou XCIPTV ? Analyse comparative détaillée des meilleurs lecteurs IPTV du marché : ergonomie, fluidité, EPG et compatibilité Smart TV.',
    content: [
      'Le choix du lecteur de flux est déterminant pour la fluidité, l\'organisation des catégories et le rendu visuel de votre abonnement. Comparatif détaillé des quatre applications les plus utilisées en 2026.',
      '1. IPTV Smarters Pro (Note: 9.5/10) : C\'est la référence universelle. Elle offre une interface extrêmement intuitive divisée en trois blocs (Live, Movies, Series), supporte le multi-écrans, le replay et permet de télécharger des guides de programmes électroniques (EPG). Elle est gratuite et disponible sur tous les supports.',
      '2. IBO Player (Note: 9/10) : Une excellente application (environ 8€ pour une licence à vie) réputée pour sa vitesse de chargement instantanée et sa compatibilité optimale avec les Smart TV Samsung et LG de dernière génération.',
      '3. TiviMate (Note: 9.2/10) : Le lecteur le plus poussé pour les utilisateurs de box Android TV et Nvidia Shield. Interface moderne type décodeur satellite, zapping ultra-rapide et gestion poussée des listes.',
      '4. XCIPTV (Note: 8.5/10) : Un lecteur minimaliste très apprécié pour son interface sobre et simple d\'accès. Très stable avec une prise en main immédiate.',
      'Conclusion : Pour la majorité des utilisateurs, l\'application officielle IPTV Smarters Pro reste le choix numéro un pour allier simplicité, gratuité et richesse fonctionnelle.'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(POSTS_DATA).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = POSTS_DATA[params.slug];
  if (!post) {
    return {
      title: 'Article introuvable | Smarters Pro',
    };
  }

  const canonical = `${SITE_CONFIG.domain}/blog/${params.slug}`;

  return {
    title: `${post.title} | Blog Smarters Pro Officiel`,
    description: post.excerpt,
    alternates: {
      canonical,
      languages: {
        'fr-FR': `${canonical}?lang=fr-fr`,
        'fr-BE': `${canonical}?lang=fr-be`,
        'fr-CH': `${canonical}?lang=fr-ch`,
        'fr-CA': `${canonical}?lang=fr-ca`,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: 'fr_FR',
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS_DATA[params.slug];

  if (!post) {
    notFound();
  }

  const pageCanonical = `${SITE_CONFIG.domain}/blog/${params.slug}`;

  // JSON-LD Schema
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageCanonical}/#article`,
        headline: post.title,
        description: post.excerpt,
        mainEntityOfPage: pageCanonical,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageCanonical}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: SITE_CONFIG.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_CONFIG.domain}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: pageCanonical,
          },
        ],
      },
    ],
  };

  // Other posts for sidebar
  const otherPosts = Object.entries(POSTS_DATA).filter(([slug]) => slug !== params.slug);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Navbar Header */}
      <Header />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li className="truncate max-w-[200px] sm:max-w-md">
            <span className="text-slate-200 font-medium" aria-current="page">{post.title}</span>
          </li>
        </ol>
      </nav>

      {/* Main Container with 12-Column Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Content Column (8 cols) */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Back to Blog */}
            <div>
              <Link 
                href="/blog" 
                className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Retour à la liste des articles</span>
              </Link>
            </div>

            {/* Post Header */}
            <header className="space-y-4">
              <div className="flex items-center space-x-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  {post.category}
                </span>
                <span>&bull;</span>
                <span>{post.date}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-1">
                {post.excerpt}
              </p>
            </header>

            {/* Article Body Content */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* In-Article Conversion Banner */}
            <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-2xl p-8 sm:p-10 text-center space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Prêt à tester l'IPTV Smarters Pro Officiel ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
                Profitez de plus de 25 000 chaînes de télévision et 90 000 VOD en 4K avec notre serveur européen ultra stable et sans coupure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link 
                  href="/abonnement-iptv-12-mois" 
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/30 text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
                >
                  <span>Prendre l'Abonnement 12 Mois (39,99 €)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/tarifs-abonnement/iptv-pas-cher" 
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
                >
                  Comparatif IPTV Pas Cher
                </Link>
              </div>
            </div>

          </article>

          {/* Sticky Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Widget 1 : Best-Seller Subscription Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-blue-500/40 shadow-xl space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                  Offre VIP N°1 France
                </span>
                <span className="text-xs font-black text-emerald-400">3,33 € / mois</span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white">Abonnement 12 Mois 4K</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Accès complet sans coupure à tous les bouquets sportifs, chaînes en direct et VOD récentes.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+25 000 chaînes & 90 000 VOD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flux 4K UHD 60 FPS Anti-Freeze</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Assistance WhatsApp 7j/7</span>
                </div>
              </div>

              <Link
                href="/abonnement-iptv-12-mois"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Commander pour 39,99 €
              </Link>
            </div>

            {/* Widget 2 : Quick Installation Guides */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Tv className="w-4 h-4 text-blue-400" />
                <span>Tutoriels d'Installation</span>
              </h3>

              <div className="space-y-2.5 text-xs">
                <Link
                  href="/guide-installation/fire-tv-stick"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Amazon Fire TV Stick</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <Link
                  href="/guide-installation/smart-tv-samsung-lg"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Smart TV Samsung & LG</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <Link
                  href="/guide-installation/android-tv-box"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Box Android TV & Mobile</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <Link
                  href="/guide-installation/xtream-codes-m3u"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>API Xtream Codes & M3U</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Widget 3 : Other Blog Articles */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-blue-400" />
                <span>Articles Recommandés</span>
              </h3>

              <div className="space-y-3">
                {otherPosts.map(([slug, otherPost]) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="block p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                  >
                    <span className="text-[10px] font-bold uppercase text-blue-400 block mb-1">
                      {otherPost.category}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {otherPost.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      {otherPost.date} &middot; {otherPost.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 4 : Direct Support Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>Besoin d'aide technique ?</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Notre équipe vous guide pas-à-pas pour configurer vos codes Xtream sur votre appareil.
              </p>
              <a
                href="https://wa.me/33600000000?text=Bonjour,%20j'ai%20besoin%20d'aide%20pour%20configurer%20mon%20IPTV%20Smarters%20Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center block transition-colors"
              >
                Assistance WhatsApp 7j/7
              </a>
            </div>

          </aside>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

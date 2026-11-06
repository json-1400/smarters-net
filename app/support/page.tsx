import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Headphones, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  HelpCircle, 
  Clock, 
  Zap,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { buildWhatsappUrl } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/support';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: "Support Client IPTV Smarters Pro 7j/7 : Centre d'Aide & Assistance France",
    description: "Contacter le support client IPTV officiel en France : assistance WhatsApp 7j/7 en moins de 5 minutes, guides de dépannage et suivi de commande.",
    canonicalUrl: PAGE_CANONICAL,
    keywords: [
      'support client iptv',
      'support iptv smarters pro',
      'assistance iptv france',
      'contact iptv',
      'aide iptv 7j7',
      'depannage iptv smarters pro',
      'whatsapp support iptv'
    ],
  });
}

export default function SupportPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${PAGE_CANONICAL}#webpage`,
        name: 'Centre d\'Aide & Assistance Technique IPTV Smarters Pro',
        description: 'Support technique francophone disponible 7 jours sur 7 pour toute question sur la configuration et les abonnements.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
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
            name: 'Support & Assistance',
            item: PAGE_CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased flex flex-col">
      {/* Header */}
      <Header />

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li>
            <span className="text-slate-200 font-medium" aria-current="page">Support & Assistance</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Headphones className="w-3.5 h-3.5" />
            <span>Support Francophone Réactif 7j/7 &middot; 09h00 à 23h00</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Support Client IPTV &amp; Centre d'Assistance Technique 7j/7
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Bienvenue sur le service de <strong>support client IPTV</strong> officiel. Une question avant de commander ? Besoin d'aide pour configurer votre application sur Smart TV, Firestick ou renouveler votre formule ? Notre équipe technique vous répond en direct.
          </p>
        </div>
      </header>

      {/* Contact Channels Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp Support */}
          <div className="p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500/40 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Support Client IPTV sur WhatsApp</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Le moyen le plus rapide d'obtenir une réponse ou de vous faire guider pas à pas lors de l'installation de vos codes.
              </p>
              <div className="pt-2 text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Temps de réponse moyen : &lt; 5 minutes</span>
              </div>
            </div>

            <a
              href={buildWhatsappUrl("Bonjour, j'ai besoin d'aide avec mon abonnement IPTV Smarters Pro")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02]"
            >
              <span>Discuter sur WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Email Support */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Support par E-mail</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pour toute demande administrative, facturation, réclamation DMCA ou question technique non urgente.
              </p>
              <div className="pt-2 text-xs text-slate-300 font-semibold">
                <span>{SITE_CONFIG.supportEmail}</span>
              </div>
            </div>

            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Envoyer un E-mail
            </a>
          </div>

          {/* Guides d'Installation & Dépannage */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Guides &amp; Dépannage Réseau</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consultez nos tutoriels pas-à-pas pour Smart TV, Fire Stick, Android et notre guide de déblocage FAI (DNS Cloudflare &amp; VPN).
              </p>
              <div className="pt-2 text-xs text-purple-300 font-semibold">
                <span>Accès libre 24h/24 et 7j/7</span>
              </div>
            </div>

            <Link
              href="/guide-installation"
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Ouvrir les Guides d'Installation
            </Link>
          </div>

        </div>

        {/* Quick Diagnostic Guide */}
        <section className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold text-white">Diagnostic Express en 3 Étapes</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Avant de contacter le support, vérifiez ces 3 points qui résolvent 95% des demandes :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">1. Erreur "Invalid Details"</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Attention aux majuscules et aux espaces insérés par le clavier de votre téléviseur. Vérifiez scrupuleusement votre nom d'utilisateur et mot de passe.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">2. Liste de lecture vide</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dans les paramètres de l'application, cliquez sur <strong>Actualiser les données (Refresh Channels/Movies)</strong> pour forcer la synchronisation avec nos serveurs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="font-bold text-sm text-white block">3. Coupures ou buffering</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Redémarrez votre box internet et votre appareil. Si le problème persiste le soir, activez un VPN pour vérifier si votre FAI ne bride pas les flux.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

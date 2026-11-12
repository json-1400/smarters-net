'use client';
// CLIENT: Semantic footer navigation with dynamic active-page detection (aria-current="page")

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Mail, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

interface FooterLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

function FooterLink({ href, className = 'hover:text-blue-400 transition-colors', activeClassName = 'text-blue-400 font-bold', children }: FooterLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isActive) {
    return (
      <span aria-current="page" className={`${className} ${activeClassName} cursor-default select-none`}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Brand Bar & Trust Badges */}
        <div className="pb-12 mb-12 border-b border-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <Image 
                src="/favicon.svg" 
                alt="Logo IPTV Smarters Pro" 
                width={32} 
                height={32} 
                className="rounded-xl shadow-md shrink-0" 
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight leading-none">
                  SMARTERS <span className="text-blue-500">PRO</span>
                </span>
                <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                  France &amp; Francophonie
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Plateforme d'accès et d'assistance pour le lecteur IPTV Smarters Pro en France. Stabilité 4K maximale, guide TV complet et support réactif 7j/7.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-300 font-semibold">Garantie anti-freeze 99.9% &amp; Activation en 15 min</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300">{SITE_CONFIG.supportEmail}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-3 rounded-xl text-emerald-400 font-semibold">
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>WhatsApp &amp; Chat 7j/7</span>
            </div>
          </div>
        </div>

        {/* 5-Column Thematic SEO Silos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Silo 1: Abonnements & Tarifs */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Abonnements &amp; Tarifs</h4>
            <ul className="space-y-2 text-xs">
              <li><FooterLink href="/tarifs">Grille Tarifaire Complète</FooterLink></li>
              <li><FooterLink href="/abonnement-iptv-12-mois" className="hover:text-blue-400 transition-colors font-medium text-slate-200">Abonnement 12 Mois VIP</FooterLink></li>
              <li><FooterLink href="/tarifs/iptv-multi-ecran">IPTV Multi-Écran (2-4 Écrans)</FooterLink></li>
              <li><FooterLink href="/tarifs/iptv-pas-cher">IPTV Pas Cher &amp; Fiable</FooterLink></li>
              <li><FooterLink href="/test-iptv-gratuit">Test IPTV 24h Gratuit</FooterLink></li>
              <li><FooterLink href="/blog/meilleur-abonnement-iptv">Comparatif Meilleur IPTV 2026</FooterLink></li>
            </ul>
          </div>

          {/* Silo 2: Applications IPTV (Spokes) */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Applications IPTV</h4>
            <ul className="space-y-2 text-xs">
              <li><FooterLink href="/applications" className="hover:text-blue-400 transition-colors font-medium text-slate-200">Hub Applications IPTV</FooterLink></li>
              <li><FooterLink href="/applications/iptv-smarters-pro">IPTV Smarters Pro Officiel</FooterLink></li>
              <li><FooterLink href="/applications/tivimate">TiviMate IPTV Player</FooterLink></li>
              <li><FooterLink href="/applications/ibo-player">IBO Player Pro</FooterLink></li>
              <li><FooterLink href="/applications/smart-iptv">Smart IPTV (SIPTV)</FooterLink></li>
              <li><FooterLink href="/applications/xciptv">XCIPTV Player</FooterLink></li>
            </ul>
          </div>

          {/* Silo 3: Guides par Appareil & OS (Spokes) */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Installation &amp; OS</h4>
            <ul className="space-y-2 text-xs">
              <li><FooterLink href="/guide-installation" className="hover:text-blue-400 transition-colors font-medium text-slate-200">Hub Guides d'Installation</FooterLink></li>
              <li><FooterLink href="/guide-installation/android-tv-box">Box Android TV &amp; Mobile</FooterLink></li>
              <li><FooterLink href="/guide-installation/apple-tv-ios">Apple TV &amp; iPhone (iOS)</FooterLink></li>
              <li><FooterLink href="/guide-installation/pc-mac-windows">PC Windows &amp; Mac</FooterLink></li>
              <li><FooterLink href="/guide-installation/xtream-codes-m3u">Xtream Codes API &amp; M3U</FooterLink></li>
              <li><FooterLink href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn">Contourner Blocage FAI</FooterLink></li>
            </ul>
          </div>

          {/* Silo 4: Catalogue, Chaînes & VOD */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Catalogue &amp; Contenus</h4>
            <ul className="space-y-2 text-xs">
              <li><FooterLink href="/catalogue">Hub Catalogue Global</FooterLink></li>
              <li><FooterLink href="/catalogue/chaines">+25 000 Chaînes TV</FooterLink></li>
              <li><FooterLink href="/catalogue/vod">Catalogue VOD 4K</FooterLink></li>
              <li><FooterLink href="/guide-depannage">Guide Dépannage IPTV</FooterLink></li>
              <li><FooterLink href="/blog">Blog &amp; Comparatifs</FooterLink></li>
            </ul>
          </div>

          {/* Silo 5: Légal & Confiance E-E-A-T */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Légal &amp; Sécurité</h4>
            <ul className="space-y-2 text-xs">
              <li><FooterLink href="/mentions-legales" className="hover:text-blue-400 transition-colors font-medium text-slate-200">Mentions Légales</FooterLink></li>
              <li><FooterLink href="/terms">Conditions Générales de Vente</FooterLink></li>
              <li><FooterLink href="/privacy">Politique de Confidentialité</FooterLink></li>
              <li><FooterLink href="/politique-de-remboursement">Politique de Remboursement</FooterLink></li>
              <li><FooterLink href="/support" className="hover:text-emerald-400 transition-colors font-semibold">Assistance &amp; Dépannage 7j/7</FooterLink></li>
              <li><FooterLink href="/checkout">Tunnel de Commande Sécurisé</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0 text-slate-400">
            Contact : <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="hover:text-blue-400 transition-colors underline">{SITE_CONFIG.supportEmail}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

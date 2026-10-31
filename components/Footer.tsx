import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Brand Info & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
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
                  France & Francophonie
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Plateforme d'accès et d'assistance pour le lecteur IPTV Smarters Pro en France. Profitez d'une stabilité 4K maximale, d'un guide TV complet et d'un support réactif 7j/7.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold bg-slate-900 border border-slate-800 p-3 rounded-xl max-w-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Garantie anti-freeze 99.9% & Activation manuelle sécurisée</span>
            </div>
            <div className="pt-1 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{SITE_CONFIG.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Support réactif 7j/7 par WhatsApp & Chat</span>
              </div>
            </div>
          </div>

          {/* Silo 1: Abonnements & Tarifs */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Tarifs & Offres</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tarifs-abonnement" className="hover:text-blue-400 transition-colors">Grille Tarifaire Complète</Link></li>
              <li><Link href="/abonnement-iptv-12-mois" className="hover:text-blue-400 transition-colors font-medium text-slate-200">Abonnement 12 Mois VIP (Top)</Link></li>
              <li><Link href="/tarifs-abonnement/iptv-pas-cher" className="hover:text-emerald-400 transition-colors">IPTV Pas Cher & Fiable</Link></li>
              <li><Link href="/tarifs-abonnement/iptv-multi-ecran" className="hover:text-blue-400 transition-colors">IPTV Multi-Écran (2-5 Écrans)</Link></li>
              <li><Link href="/checkout?plan=Confort" className="hover:text-blue-400 transition-colors">Formule Confort 6 Mois</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Espace Client & Xtream</Link></li>
            </ul>
          </div>

          {/* Silo 2: Tutoriels & Installation */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Installation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/guide-installation" className="hover:text-blue-400 transition-colors font-medium text-slate-200">Guide d'Installation Complet</Link></li>
              <li><Link href="/guide-installation/fire-tv-stick" className="hover:text-blue-400 transition-colors">Amazon Fire TV Stick</Link></li>
              <li><Link href="/guide-installation/smart-tv-samsung-lg" className="hover:text-blue-400 transition-colors">Smart TV Samsung & LG</Link></li>
              <li><Link href="/guide-installation/android-tv-box" className="hover:text-blue-400 transition-colors">Box Android TV & Mobile</Link></li>
              <li><Link href="/guide-installation/apple-tv-ios" className="hover:text-blue-400 transition-colors">Apple TV, iPhone & iPad</Link></li>
              <li><Link href="/guide-installation/xtream-codes-m3u" className="hover:text-blue-400 transition-colors">Xtream Codes API & M3U</Link></li>
            </ul>
          </div>

          {/* Silo 3: Chaînes, Sport & VOD */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Direct & VOD</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/chaine" className="hover:text-blue-400 transition-colors font-medium text-slate-200">+25 000 Chaînes TV en Direct</Link></li>
              <li><Link href="/sport" className="hover:text-emerald-400 transition-colors">Football & Sports Direct 4K</Link></li>
              <li><Link href="/catalogue-vod" className="hover:text-blue-400 transition-colors">Catalogue VOD (+90 000 Titres)</Link></li>
              <li><Link href="/catalogue-vod/iptv-adulte" className="hover:text-amber-400 transition-colors">Contrôle Parental & +18</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog & Comparatifs IPTV</Link></li>
              <li><Link href="/support" className="hover:text-emerald-400 transition-colors font-semibold">Support Client WhatsApp 7j/7</Link></li>
            </ul>
          </div>

          {/* Silo 4: Légal & Conformité */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase">Légal & Contact</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/dmca" className="hover:text-red-400 transition-colors font-bold text-slate-300 flex items-center gap-1">
                  <span>Politique DMCA</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </Link>
              </li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Conditions Générales de Vente</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Politique de Confidentialité</Link></li>
              <li><Link href="/support" className="hover:text-blue-400 transition-colors">Assistance & Dépannage</Link></li>
            </ul>
          </div>
        </div>

        {/* DMCA & Safe Harbor Legal Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-300">
            Avis de non-responsabilité & Conformité aux droits d'auteur :
          </p>
          <p>
            IPTV Smarters Pro est un lecteur multimédia et une solution logicielle tierce. Ce site n'héberge, ne retransmet et ne stocke aucun flux vidéo en continu ou contenu audiovisuel protégé par des droits de propriété intellectuelle. Les utilisateurs sont seuls responsables de la légalité des flux et listes de lecture (M3U / Xtream) qu'ils chargent dans leurs applications. Pour toute réclamation relative aux droits d'auteur ou demande de retrait de lien, veuillez vous référer à notre procédure officielle sur notre page <Link href="/dmca" className="text-blue-400 underline">Notice DMCA</Link>.
          </p>
        </div>

        {/* Bottom Rights */}
        <div className="border-t border-slate-900 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0 text-slate-400">
            Optimisé pour le marché français et francophone &middot; Core Web Vitals Ultra-Fast
          </p>
        </div>
      </div>
    </footer>
  );
}

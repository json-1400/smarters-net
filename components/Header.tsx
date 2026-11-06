'use client';
// CLIENT: Interactive header navigation with responsive mega-menu dropdowns and active state tracking

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Tv,
  Flame,
  ShieldCheck,
  HelpCircle,
  Zap,
  Download,
  CreditCard,
  Sparkles,
  Users,
  Newspaper,
  BookOpen,
} from 'lucide-react';

interface NavItemProps {
  href: string;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function NavItem({ href, className = '', activeClassName = '', onClick, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isActive) {
    return (
      <span
        aria-current="page"
        className={`${className} ${activeClassName} cursor-default select-none`}
        onClick={(e) => {
          e.preventDefault();
          if (onClick) onClick();
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setOpenMobileSection(openMobileSection === section ? null : section);
  };

  const isTarifsActive = pathname.startsWith('/tarifs-abonnement') || pathname === '/abonnement-iptv-12-mois' || pathname === '/test-iptv-gratuit';
  const isInstallActive = pathname.startsWith('/guide-installation');
  const isChaineActive = pathname === '/chaine' || pathname === '/sport' || pathname.startsWith('/catalogue-vod');

  return (
    <header className="w-full bg-slate-950 border-b border-slate-800/80 sticky top-0 z-50 text-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image 
              src="/favicon.svg" 
              alt="Logo IPTV Smarters Pro" 
              width={36} 
              height={36} 
              className="rounded-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0" 
              priority 
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base tracking-tight leading-none">
                SMARTERS <span className="text-blue-500">PRO</span>
              </span>
              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-0.5">
                Officiel France
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links with Mega-Menu Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-slate-300">
          <NavItem 
            href="/" 
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors"
            activeClassName="text-white bg-slate-900 font-black"
          >
            Accueil
          </NavItem>

          {/* 1. Tarifs & Abonnements Dropdown */}
          <div className="relative group">
            <NavItem
              href="/tarifs-abonnement"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors ${
                isTarifsActive ? 'text-blue-400 font-black' : ''
              }`}
            >
              <span>Tarifs</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </NavItem>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 space-y-1 normal-case text-left">
                <NavItem
                  href="/tarifs-abonnement"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Grille Tarifaire Complète</span>
                    <span className="block text-[11px] text-slate-400">Comparatif 3, 6 et 12 mois</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/abonnement-iptv-12-mois"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">Abonnement 12 Mois VIP</span>
                      <span className="text-[9px] bg-blue-600 text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase">1 Mois Offert</span>
                    </div>
                    <span className="block text-[11px] text-slate-400">49.99 € — 1 connexion 4K dédiée</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/tarifs-abonnement/iptv-multi-ecran"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">IPTV Multi-Écran</span>
                    <span className="block text-[11px] text-slate-400">2 à 4 connexions simultanées sans freeze</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/test-iptv-gratuit"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Test IPTV 24h &amp; Découverte</span>
                    <span className="block text-[11px] text-slate-400">Tester la stabilité 4K sans risque</span>
                  </div>
                </NavItem>
              </div>
            </div>
          </div>

          {/* 2. Applications Hub (Lien Pilier) */}
          <NavItem 
            href="/applications" 
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors"
            activeClassName="text-white bg-slate-900 font-black"
          >
            Applications
          </NavItem>

          {/* 3. Installation Dropdown */}
          <div className="relative group">
            <NavItem
              href="/guide-installation"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors ${
                isInstallActive ? 'text-blue-400 font-black' : ''
              }`}
            >
              <span>Installation</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </NavItem>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 space-y-1 normal-case text-left">
                <NavItem
                  href="/guide-installation"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Guide d'Installation Complet</span>
                    <span className="block text-[11px] text-slate-400">Tutoriels pas à pas par appareil</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/guide-installation/fire-tv-stick"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-orange-600/20 text-orange-400 group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Amazon Fire TV Stick</span>
                    <span className="block text-[11px] text-slate-400">Installation pas à pas avec Downloader</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/guide-installation/smart-tv-samsung-lg"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Smart TV (Samsung & LG)</span>
                    <span className="block text-[11px] text-slate-400">Configuration Tizen et webOS</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Débloquer FAI (DNS &amp; VPN)</span>
                    <span className="block text-[11px] text-slate-400">Solution Free, Orange, SFR, Bouygues</span>
                  </div>
                </NavItem>
              </div>
            </div>
          </div>

          {/* 4. Chaînes & Direct Dropdown */}
          <div className="relative group">
            <NavItem
              href="/chaine"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors ${
                isChaineActive ? 'text-blue-400 font-black' : ''
              }`}
            >
              <span>Chaînes & Direct</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </NavItem>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 space-y-1 normal-case text-left">
                <NavItem
                  href="/chaine"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">+25 000 Chaînes TV en Direct</span>
                    <span className="block text-[11px] text-slate-400">TNT France HD, Belgique, Suisse, Monde</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/sport"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Football & Sports en Direct 4K</span>
                    <span className="block text-[11px] text-slate-400">Ligue 1, Champions League, F1, UFC</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/catalogue-vod"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-slate-800 text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">Catalogue VOD (+90 000 Titres)</span>
                    <span className="block text-[11px] text-slate-400">Films récents & Séries intégrales 4K</span>
                  </div>
                </NavItem>
              </div>
            </div>
          </div>

          {/* 5. Blog Hub (Lien Pilier) */}
          <NavItem 
            href="/blog" 
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors"
            activeClassName="text-white bg-slate-900 font-black"
          >
            Blog
          </NavItem>

          {/* 6. Support Direct Link */}
          <NavItem 
            href="/support" 
            className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors"
            activeClassName="text-emerald-400 bg-slate-900 font-black"
          >
            Support 7j/7
          </NavItem>
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center space-x-3">
          <Link
            href="/tarifs-abonnement"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-xl shadow-md shadow-blue-600/30 transition-all uppercase tracking-wider"
          >
            Commander
          </Link>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 font-sans">
          
          {/* Tarifs Section */}
          <div className="border-b border-slate-900 pb-2">
            <button
              onClick={() => toggleMobileSection('abonnements')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-200"
            >
              <span>Tarifs & Abonnements</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'abonnements' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'abonnements' && (
              <div className="pl-3 pr-1 py-1 space-y-1.5 text-xs text-slate-400">
                <NavItem href="/tarifs-abonnement" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Grille Tarifaire Complète
                </NavItem>
                <NavItem href="/abonnement-iptv-12-mois" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-blue-400 font-bold" activeClassName="text-white font-extrabold">
                  Abonnement 12 Mois VIP (49.99 €)
                </NavItem>
                <NavItem href="/tarifs-abonnement/iptv-multi-ecran" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Packs IPTV Multi-Écrans
                </NavItem>
                <NavItem href="/test-iptv-gratuit" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Test IPTV 24h Gratuit
                </NavItem>
              </div>
            )}
          </div>

          {/* Applications Hub */}
          <div className="border-b border-slate-900 pb-2">
            <NavItem
              href="/applications"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
              activeClassName="text-blue-400 font-black"
            >
              Applications IPTV
            </NavItem>
          </div>

          {/* Installation Section */}
          <div className="border-b border-slate-900 pb-2">
            <button
              onClick={() => toggleMobileSection('tutoriels')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-200"
            >
              <span>Installation & Tutoriels</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'tutoriels' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'tutoriels' && (
              <div className="pl-3 pr-1 py-1 space-y-1.5 text-xs text-slate-400">
                <NavItem href="/guide-installation" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-blue-400 font-bold" activeClassName="text-white font-extrabold">
                  Guide d'Installation Complet
                </NavItem>
                <NavItem href="/guide-installation/fire-tv-stick" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Amazon Fire TV Stick
                </NavItem>
                <NavItem href="/guide-installation/smart-tv-samsung-lg" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Smart TV Samsung & LG
                </NavItem>
                <NavItem href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Débloquer FAI (DNS & VPN)
                </NavItem>
              </div>
            )}
          </div>

          {/* Chaînes, Sport & VOD Section */}
          <div className="border-b border-slate-900 pb-2">
            <button
              onClick={() => toggleMobileSection('chaines')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-200"
            >
              <span>Chaînes, Sport & VOD</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'chaines' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'chaines' && (
              <div className="pl-3 pr-1 py-1 space-y-1.5 text-xs text-slate-400">
                <NavItem href="/chaine" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  +25 000 Chaînes TV en Direct
                </NavItem>
                <NavItem href="/sport" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-emerald-400 font-bold" activeClassName="text-white font-extrabold">
                  Football & Sports en Direct 4K
                </NavItem>
                <NavItem href="/catalogue-vod" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-white" activeClassName="text-blue-400 font-bold">
                  Catalogue VOD (+90 000 Films & Séries)
                </NavItem>
              </div>
            )}
          </div>

          {/* Blog & Support Links */}
          <NavItem
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-200 hover:text-white"
            activeClassName="text-blue-400 font-black"
          >
            Blog & Comparatifs IPTV
          </NavItem>

          <NavItem
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"
            activeClassName="text-white font-black"
          >
            Support Client WhatsApp 7j/7
          </NavItem>

          <NavItem
            href="/dmca"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-400"
            activeClassName="text-white font-bold"
          >
            Notice DMCA & Légalité
          </NavItem>

          <div className="pt-3 border-t border-slate-900 space-y-2">
            <Link
              href="/tarifs-abonnement"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-xl shadow-md uppercase tracking-wider"
            >
              Commander mon Abonnement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

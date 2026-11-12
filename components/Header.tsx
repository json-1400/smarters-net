'use client';
// CLIENT: Interactive header navigation with responsive mega-menu dropdowns and active state tracking

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
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
  Radio,
  Film,
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

  const isTarifsActive = pathname.startsWith('/tarifs') || pathname === '/abonnement-iptv-12-mois' || pathname === '/test-iptv-gratuit';
  const isInstallActive = pathname.startsWith('/guide-installation');
  const isChaineActive = pathname.startsWith('/catalogue');

  return (
    <header className="w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 sticky top-0 z-50 text-slate-800 dark:text-slate-200 font-sans transition-colors">
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
              <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-none">
                SMARTERS <span className="text-blue-600 dark:text-blue-500">PRO</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase mt-0.5">
                Officiel France
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links with Mega-Menu Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <NavItem 
            href="/" 
            className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-colors"
            activeClassName="text-blue-600 bg-blue-50 font-black dark:text-white dark:bg-slate-900"
          >
            Accueil
          </NavItem>

          {/* 1. Tarifs & Abonnements Dropdown */}
          <div className="relative group">
            <NavItem
              href="/tarifs"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-colors ${
                isTarifsActive ? 'text-blue-600 dark:text-blue-400 font-black' : ''
              }`}
            >
              <span>Tarifs</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </NavItem>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-3 space-y-1 normal-case text-left">
                <NavItem
                  href="/tarifs"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Grille Tarifaire Complète</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Comparatif 3, 6 et 12 mois</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/abonnement-iptv-12-mois"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-600/20 dark:text-emerald-400 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Abonnement 12 Mois VIP</span>
                      <span className="text-[9px] bg-blue-600 text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase">1 Mois Offert</span>
                    </div>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">49.99 € — 1 connexion 4K dédiée</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/tarifs/iptv-multi-ecran"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-400 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">IPTV Multi-Écran</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">2 à 4 connexions simultanées sans freeze</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/test-iptv-gratuit"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-600/20 dark:text-purple-400 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Test IPTV 24h &amp; Découverte</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Tester la stabilité 4K sans risque</span>
                  </div>
                </NavItem>
              </div>
            </div>
          </div>

          {/* 2. Applications Hub (Lien Pilier) */}
          <NavItem 
            href="/applications" 
            className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-colors"
            activeClassName="text-blue-600 bg-blue-50 font-black dark:text-white dark:bg-slate-900"
          >
            Applications
          </NavItem>

          {/* 3. Installation Dropdown */}
          <div className="relative group">
            <NavItem
              href="/guide-installation"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-colors ${
                isInstallActive ? 'text-blue-600 dark:text-blue-400 font-black' : ''
              }`}
            >
              <span>Installation</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </NavItem>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-3 space-y-1 normal-case text-left">
                <NavItem
                  href="/guide-installation"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Guide d'Installation Complet</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Tutoriels pas à pas par appareil</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/guide-installation/fire-tv-stick"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-600/20 dark:text-orange-400 group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Amazon Fire TV Stick</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Installation pas à pas avec Downloader</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/guide-installation/smart-tv-samsung-lg"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-400 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Smart TV (Samsung &amp; LG)</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Configuration Tizen et webOS</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-600/20 dark:text-emerald-400 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Débloquer FAI (DNS &amp; VPN)</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Solution Free, Orange, SFR, Bouygues</span>
                  </div>
                </NavItem>
              </div>
            </div>
          </div>

          {/* 4. Chaînes & Direct Dropdown */}
          <div className="relative group">
            <NavItem
              href="/catalogue"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-colors ${
                isChaineActive ? 'text-blue-600 dark:text-blue-400 font-black' : ''
              }`}
            >
              <span>Catalogue &amp; Chaînes</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </NavItem>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-3 space-y-1 normal-case text-left">
                <NavItem
                  href="/catalogue"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <Radio className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Hub Catalogue Global</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Vue d'ensemble Chaînes &amp; VOD</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/catalogue/chaines"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-600/20 dark:text-cyan-400 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">+25 000 Chaînes TV en Direct</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">TNT France, Belgique, Suisse, Monde</span>
                  </div>
                </NavItem>

                <NavItem
                  href="/catalogue/vod"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  activeClassName="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400"
                >
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-600/20 dark:text-purple-400 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Catalogue VOD (+90 000 Titres)</span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">Films récents &amp; Séries intégrales 4K</span>
                  </div>
                </NavItem>
              </div>
            </div>
          </div>

          {/* 5. Blog Hub (Lien Pilier) */}
          <NavItem 
            href="/blog" 
            className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900 transition-colors"
            activeClassName="text-blue-600 bg-blue-50 font-black dark:text-white dark:bg-slate-900"
          >
            Blog
          </NavItem>

          {/* 6. Support Direct Link */}
          <NavItem 
            href="/support" 
            className="px-3 py-2 rounded-lg text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:text-white dark:hover:bg-slate-900 transition-colors"
            activeClassName="text-emerald-600 bg-emerald-50 font-black dark:text-emerald-400 dark:bg-slate-900"
          >
            Support 7j/7
          </NavItem>
        </nav>

        {/* Right Action CTAs */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />

          <Link
            href="/tarifs"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-xl shadow-md shadow-blue-600/30 transition-all uppercase tracking-wider"
          >
            S&apos;abonner
          </Link>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 font-sans shadow-xl">
          
          {/* Tarifs Section */}
          <div className="border-b border-slate-200 dark:border-slate-900 pb-2">
            <button
              onClick={() => toggleMobileSection('abonnements')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-slate-200"
            >
              <span>Tarifs &amp; Abonnements</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'abonnements' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'abonnements' && (
              <div className="pl-3 pr-1 py-1 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <NavItem href="/tarifs" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Grille Tarifaire Complète
                </NavItem>
                <NavItem href="/abonnement-iptv-12-mois" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-blue-600 dark:text-blue-400 font-bold" activeClassName="text-blue-700 dark:text-white font-extrabold">
                  Abonnement 12 Mois VIP (49.99 €)
                </NavItem>
                <NavItem href="/tarifs/iptv-multi-ecran" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Packs IPTV Multi-Écrans
                </NavItem>
                <NavItem href="/test-iptv-gratuit" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Test IPTV 24h Gratuit
                </NavItem>
              </div>
            )}
          </div>

          {/* Applications Hub */}
          <div className="border-b border-slate-200 dark:border-slate-900 pb-2">
            <NavItem
              href="/applications"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white"
              activeClassName="text-blue-600 dark:text-blue-400 font-black"
            >
              Applications IPTV
            </NavItem>
          </div>

          {/* Installation Section */}
          <div className="border-b border-slate-200 dark:border-slate-900 pb-2">
            <button
              onClick={() => toggleMobileSection('tutoriels')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-slate-200"
            >
              <span>Installation &amp; Tutoriels</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'tutoriels' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'tutoriels' && (
              <div className="pl-3 pr-1 py-1 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <NavItem href="/guide-installation" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-blue-600 dark:text-blue-400 font-bold" activeClassName="text-blue-700 dark:text-white font-extrabold">
                  Guide d'Installation Complet
                </NavItem>
                <NavItem href="/guide-installation/fire-tv-stick" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Amazon Fire TV Stick
                </NavItem>
                <NavItem href="/guide-installation/smart-tv-samsung-lg" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Smart TV Samsung &amp; LG
                </NavItem>
                <NavItem href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Débloquer FAI (DNS &amp; VPN)
                </NavItem>
              </div>
            )}
          </div>

          {/* Chaînes, Sport & VOD Section */}
          <div className="border-b border-slate-200 dark:border-slate-900 pb-2">
            <button
              onClick={() => toggleMobileSection('chaines')}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900 dark:text-slate-200"
            >
              <span>Catalogue, Chaînes &amp; VOD</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSection === 'chaines' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileSection === 'chaines' && (
              <div className="pl-3 pr-1 py-1 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <NavItem href="/catalogue" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Hub Catalogue 4K
                </NavItem>
                <NavItem href="/catalogue/chaines" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  +25 000 Chaînes TV en Direct
                </NavItem>
                <NavItem href="/catalogue/vod" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-blue-600 dark:hover:text-white" activeClassName="text-blue-600 dark:text-blue-400 font-bold">
                  Catalogue VOD (+90 000 Films &amp; Séries)
                </NavItem>
              </div>
            )}
          </div>

          {/* Blog & Support Links */}
          <NavItem
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white"
            activeClassName="text-blue-600 dark:text-blue-400 font-black"
          >
            Blog &amp; Comparatifs IPTV
          </NavItem>

          <NavItem
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
            activeClassName="text-emerald-700 dark:text-white font-black"
          >
            Support Client WhatsApp 7j/7
          </NavItem>

          <NavItem
            href="/dmca"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-400"
            activeClassName="text-blue-600 dark:text-white font-bold"
          >
            Notice DMCA &amp; Légalité
          </NavItem>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-900 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Mode d&apos;affichage (Clair / Sombre)</span>
            <ThemeToggle />
          </div>

          <div className="pt-2 space-y-2">
            <Link
              href="/tarifs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold rounded-xl shadow-md uppercase tracking-wider"
            >
              S&apos;abonner
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

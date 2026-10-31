import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { VodSwiper } from '@/components/vod/VodSwiper';
import { Steps } from '@/components/Steps';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Compatibility } from '@/components/Compatibility';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans antialiased text-slate-100">
      {/* Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Header */}
        <Hero />

        {/* Stats Trust Indicators */}
        <Stats />

        {/* Interactive VOD Catalogue Swiper (Visual Attachment & Catchy) */}
        <VodSwiper />

        {/* Step by Step Manual Checkout Flow */}
        <Steps />

        {/* Highlights & Features Grid */}
        <Features />

        {/* Premium Plans Cards */}
        <Pricing />

        {/* Support Compatibilities Grid */}
        <Compatibility />

        {/* FAQ Accordion Module */}
        <FAQ />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}

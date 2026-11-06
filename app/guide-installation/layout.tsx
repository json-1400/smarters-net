import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function GuideInstallationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}


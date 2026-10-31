'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Clock, MessageSquare } from 'lucide-react';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'Starter';
  const paymentId = searchParams.get('paymentId') || '';
  const method = searchParams.get('method') || 'paypal';

  const getPlanPrice = (p: string) => {
    if (p === 'Premium') return '39.99 €';
    if (p === 'Confort') return '29.99 €';
    if (p === 'Pack2') return '59.99 €';
    return '19.99 €';
  };

  const isPayPal = method === 'paypal';
  const whatsappNumber = '+33612345678';

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16 flex-grow font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8 text-center mb-8 space-y-4">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Commande Validée avec Succès !
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Votre souscription pour la formule <span className="font-bold text-white">{plan}</span> ({getPlanPrice(plan)}) est enregistrée sur nos serveurs.
        </p>

        {paymentId && (
          <div className="mt-3 inline-block bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-lg text-xs text-slate-400 font-mono">
            Référence Commande : <span className="font-bold text-blue-400">{paymentId}</span>
          </div>
        )}
      </div>

      {/* Step by Step Guide tailored to method */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Instructions pour votre règlement</span>
          </h2>
          <span className="text-xs bg-blue-500/10 text-blue-400 font-extrabold px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-wider">
            {isPayPal ? 'PayPal' : 'Carte Bancaire'}
          </span>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-xl bg-blue-600 text-white font-black text-sm mr-4">
              1
            </span>
            <div>
              <h3 className="font-bold text-white text-base">Consultez votre boîte e-mail de réception</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Un e-mail de confirmation récapitulatif vient de vous être adressé avec les détails sécurisés du virement {isPayPal ? 'PayPal' : 'par Carte Bancaire'}.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-xl bg-blue-600 text-white font-black text-sm mr-4">
              2
            </span>
            <div>
              <h3 className="font-bold text-white text-base">Effectuez votre règlement</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Effectuez le règlement du montant exact de <span className="text-blue-400 font-bold">{getPlanPrice(plan)}</span> en indiquant votre référence commande en commentaire.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-xl bg-emerald-600 text-white font-black text-sm mr-4">
              3
            </span>
            <div>
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <span>Activation Express en moins de 3 minutes</span>
                <Clock className="w-4 h-4 text-emerald-400" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Envoyez simplement votre confirmation par WhatsApp à notre conseiller ou signalez-le dans le chat en direct. Vos identifiants Xtream Codes et votre lien M3U vous seront délivrés immédiatement !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Bonjour!%20Je%20viens%20d'enregistrer%20ma%20commande%20${plan}%20(Réf:%20${paymentId})%20via%20${isPayPal ? 'PayPal' : 'Carte%20Bancaire'}.%20Pouvez-vous%20m'activer%20?`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm gap-2 uppercase tracking-wider"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Activer sur WhatsApp &rarr;</span>
        </a>

        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-800 transition-all text-sm"
        >
          Accéder à mon Espace Client
        </Link>
      </div>
    </main>
  );
}

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between antialiased font-sans">
      <Header />
      <Suspense fallback={<div className="p-12 text-center text-slate-400">Chargement de votre confirmation...</div>}>
        <ConfirmationContent />
      </Suspense>
      <Footer />
    </div>
  );
}

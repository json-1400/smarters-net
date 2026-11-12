'use client';
// CLIENT: Interactive guest checkout form with client-side validation

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Lock, 
  CreditCard, 
  ChevronRight, 
  HelpCircle,
  Clock,
  ArrowRight,
  Tv,
  Smartphone
} from 'lucide-react';

interface PlanDetail {
  name: string;
  price: string;
  duration: string;
  features: string[];
}

const PLAN_INFO: Record<string, PlanDetail> = {
  Starter: {
    name: 'Abonnement IPTV 3 Mois',
    price: '19.99 €',
    duration: '3 Mois',
    features: [
      '1 Connexion active simultanée',
      'Qualité IPTV 4K & HD',
      '+25 000 Chaînes TV en Direct',
      '+90 000 Films & Séries (VOD)',
      'Replay 48h inclus',
      'Technologie anti-freeze intégrée',
      'Assistance WhatsApp 7j/7',
    ],
  },
  Confort: {
    name: 'Abonnement IPTV 6 Mois',
    price: '29.99 €',
    duration: '6 Mois',
    features: [
      '1 Connexion active simultanée',
      'Qualité IPTV 4K & HD',
      '+25 000 Chaînes TV en Direct',
      '+90 000 Films & Séries (VOD)',
      'Replay 48h sur toutes les chaînes',
      'Mises à jour quotidiennes de la VOD',
      'Assistance prioritaire 7j/7',
    ],
  },
  Premium: {
    name: 'Abonnement IPTV 12 Mois VIP',
    price: '49.99 €',
    duration: '12 Mois',
    features: [
      '1 Connexion VIP (1 Mois Offert)',
      'Qualité Ultra HD, 4K & 60 FPS',
      '+25 000 Chaînes & +90 000 VOD',
      'Replay 72h & EPG complet',
      'Technologie anti-freeze v4.2',
      'Assistance VIP Dédiée WhatsApp',
    ],
  },
  Pack2: {
    name: 'Abonnement Pack Duo (2 Écrans)',
    price: '69.99 €',
    duration: '12 Mois',
    features: [
      '2 Connexions simultanées indépendantes',
      'Qualité 4K Ultra HD & Full HD',
      '+25 000 Chaînes & VOD Illimitées',
      'Serveurs Ultra-Haute Performance',
      'Support VIP Prioritaire 24/7',
    ],
  },
  Pack3: {
    name: 'Abonnement Pack Trio (3 Écrans)',
    price: '100.00 €',
    duration: '12 Mois',
    features: [
      '3 Connexions simultanées indépendantes',
      'Qualité 4K Ultra HD & 60 FPS',
      '+25 000 Chaînes & +90 000 VOD',
      'Technologie anti-freeze 10 Gbps',
      'Support VIP Dédié 24/7',
    ],
  },
  Pack4: {
    name: 'Abonnement Pack Maxi (4 Écrans)',
    price: '120.00 €',
    duration: '12 Mois',
    features: [
      '4 Connexions simultanées indépendantes',
      'Qualité 4K Ultra HD & 60 FPS',
      '+25 000 Chaînes & +90 000 VOD',
      'Bande passante prioritaire dédiée',
      'Support VIP Prioritaire 24/7',
    ],
  },
};

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planQuery = searchParams.get('plan') || 'Premium';
  const plan = PLAN_INFO[planQuery] ? planQuery : 'Premium';
  const planDetails = PLAN_INFO[plan];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [deviceApp, setDeviceApp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Client-side validation
    if (!fullName.trim()) {
      setError('Veuillez renseigner votre nom complet.');
      setLoading(false);
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Veuillez renseigner une adresse email valide.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planType: plan,
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          deviceType: deviceType || null,
          deviceApp: deviceApp || null,
        }),
      });

      const data: { error?: string; orderRef?: string } = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue lors de la création de la commande.');
      }

      router.push(`/thank-you?ref=${encodeURIComponent(data.orderRef || '')}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Une erreur inattendue est survenue.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16 flex-grow font-sans">
      {/* Header Title */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          Commande Rapide & 100% Sécurisée
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Finaliser Votre Abonnement
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
          Renseignez vos coordonnées de réception. Vos identifiants de streaming 4K et les instructions d'activation vous seront transmis immédiatement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Input Details Form */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Coordonnées de Facturation & Réception</span>
            </h2>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
              Activation Directe
            </span>
          </div>

          {error && (
            <div className="p-4 bg-red-950/40 border border-red-800/80 text-red-200 text-xs sm:text-sm rounded-xl font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Nom et Prénom <span className="text-red-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="ex: Jean Dupont"
                className="w-full border border-slate-700/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-950 text-white placeholder-slate-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Adresse Email de Réception <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex: jean.dupont@email.com"
                className="w-full border border-slate-700/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-950 text-white placeholder-slate-500 transition-all"
              />
              <span className="text-[11px] text-slate-400 mt-1.5 block">
                Votre email de confirmation de commande sera envoyé à cette adresse.
              </span>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Numéro WhatsApp (Recommandé pour support direct)
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+33 6 12 34 56 78"
                className="w-full border border-slate-700/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-950 text-white placeholder-slate-500 transition-all"
              />
              <span className="text-[11px] text-slate-400 mt-1.5 block">
                Pour vous contacter facilement au sujet de votre commande.
              </span>
            </div>

            {/* Optional Device & Application Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label htmlFor="deviceType" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-blue-400" />
                  <span>Appareil / Écran <span className="text-slate-500 font-normal normal-case">(facultatif)</span></span>
                </label>
                <select
                  id="deviceType"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full border border-slate-700/80 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-950 text-white transition-all cursor-pointer"
                >
                  <option value="">Sélectionner un appareil</option>
                  <option value="Smart TV (Samsung / LG / Android TV)">Smart TV (Samsung / LG / Android TV)</option>
                  <option value="Boîtier Android / Fire TV Stick">Boîtier Android / Amazon Fire TV Stick</option>
                  <option value="Apple TV / iPhone / iPad">Apple TV / iPhone / iPad (iOS)</option>
                  <option value="Smartphone / Tablette Android">Smartphone / Tablette Android</option>
                  <option value="PC Windows / Mac">Ordinateur (PC Windows / Mac)</option>
                  <option value="Boîtier MAG / Formuler">Boîtier MAG / Formuler (MyTVOnline)</option>
                  <option value="Autre / Non spécifié">Autre / Je ne sais pas encore</option>
                </select>
              </div>

              <div>
                <label htmlFor="deviceApp" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Application IPTV <span className="text-slate-500 font-normal normal-case">(facultatif)</span></span>
                </label>
                <select
                  id="deviceApp"
                  value={deviceApp}
                  onChange={(e) => setDeviceApp(e.target.value)}
                  className="w-full border border-slate-700/80 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-950 text-white transition-all cursor-pointer"
                >
                  <option value="">Sélectionner une application</option>
                  <option value="IPTV Smarters Pro">IPTV Smarters Pro (Recommandé)</option>
                  <option value="TiviMate IPTV Player">TiviMate IPTV Player</option>
                  <option value="IBO Player Pro">IBO Player Pro</option>
                  <option value="Smart IPTV (SIPTV)">Smart IPTV (SIPTV)</option>
                  <option value="Flix IPTV">Flix IPTV</option>
                  <option value="GSE Smart IPTV">GSE Smart IPTV</option>
                  <option value="MyTVOnline (Formuler)">MyTVOnline (Formuler)</option>
                  <option value="XCIPTV Player">XCIPTV Player</option>
                  <option value="Autre / Je souhaite un conseil">Autre / Je souhaite un conseil</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aucun paiement n'est demandé à cette étape.</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-extrabold py-4 px-6 rounded-xl transition-all text-sm shadow-xl shadow-blue-600/30 uppercase tracking-wider flex justify-center items-center cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Génération de votre accès VIP...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>Valider ma Commande</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Right Column (5 cols): Order Summary Card */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
            Récapitulatif de Votre Formule
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800/80">
              <div>
                <span className="font-extrabold text-white block text-base leading-snug">{planDetails.name}</span>
                <span className="text-xs text-slate-400">Durée d'accès garantie : {planDetails.duration}</span>
              </div>
              <span className="text-3xl font-black text-blue-400">{planDetails.price}</span>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Services Inclus dans cette Formule :
              </span>
              <ul className="space-y-2">
                {planDetails.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-white font-black text-lg">
              <span>Total TTC :</span>
              <span className="text-blue-400 text-2xl font-black">{planDetails.price}</span>
            </div>

            {(deviceType || deviceApp) && (
              <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs space-y-1.5">
                <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Votre configuration :</span>
                {deviceType && (
                  <div className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Tv className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{deviceType}</span>
                  </div>
                )}
                {deviceApp && (
                  <div className="text-blue-400 font-medium flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{deviceApp}</span>
                  </div>
                )}
              </div>
            )}

            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-slate-700 dark:text-emerald-200 p-4 rounded-xl text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
                <Clock className="w-4 h-4" />
                <span>Confirmation par Email</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Dès validation, vous recevez un email de confirmation avec le récapitulatif de votre commande et nos liens de contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased font-sans">
      <Header />
      <Suspense fallback={
        <div className="flex-grow flex items-center justify-center py-24">
          <svg className="animate-spin h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      }>
        <CheckoutContent />
      </Suspense>
      <Footer />
    </div>
  );
}

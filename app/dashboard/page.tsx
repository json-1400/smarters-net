import React from 'react';
import { redirect } from 'next/navigation';
import { createServerSideClient } from '@/lib/supabase';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = createServerSideClient();

  // 1. Authenticate user
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) {
    redirect('/login');
  }

  const userId = session.user.id;

  // 2. Fetch user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (profile?.is_blocked) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md bg-slate-900 border border-red-500/30 rounded-2xl p-6 text-center">
          <h1 className="text-xl font-bold text-red-400">Compte Bloqué</h1>
          <p className="text-slate-400 text-sm mt-2">
            Votre compte a été bloqué par un administrateur. Veuillez contacter le support pour en savoir plus.
          </p>
          <Link
            href="/support"
            className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors"
          >
            Contacter le support
          </Link>
        </div>
      </div>
    );
  }

  // 3. Fetch user subscriptions
  const { data: subscriptions } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  // 4. Fetch user payments
  const { data: payments } = await supabase
    .from('payments')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  // 5. Fetch user support tickets
  const { data: tickets } = await supabase
    .from('support_tickets')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  const activeSub = subscriptions?.find(sub => sub.status === 'active');
  const pendingSub = subscriptions?.find(sub => sub.status === 'pending_payment');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/20">Actif</span>;
      case 'pending_payment':
        return <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-500/20">En attente de paiement</span>;
      case 'expired':
        return <span className="bg-slate-800 text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-700">Expiré</span>;
      default:
        return <span className="bg-red-500/10 text-red-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-500/20">Annulé</span>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/20">Confirmé</span>;
      case 'pending_confirmation':
        return <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-amber-500/20">Vérification en cours</span>;
      case 'pending_instruction':
        return <span className="bg-slate-800 text-slate-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-slate-700">Instructions envoyées</span>;
      default:
        return <span className="bg-red-500/10 text-red-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-red-500/20">Échoué</span>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        {/* Welcome Block */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-slate-800 mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bonjour, {profile?.full_name || 'Client'}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Gérez vos abonnements IPTV Smarters Pro et consultez votre historique de facturation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/support"
              className="inline-flex items-center justify-center px-4 py-2 border border-slate-800 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors"
            >
              Assistance Technique
            </Link>
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-slate-800 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-red-950/60 hover:text-red-300 hover:border-red-500/30 transition-colors"
              >
                Déconnexion
              </button>
            </form>
          </div>
        </div>

        {/* Pending Activation Banner */}
        {pendingSub && (
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-2xl p-5 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-extrabold text-amber-300 text-base">⚠️ Commande en attente de paiement</h3>
                <p className="text-sm text-amber-200/80 mt-1">
                  Votre abonnement <span className="font-bold text-white">{pendingSub.plan_type}</span> est enregistré. Veuillez finaliser votre transfert et nous notifier sur WhatsApp pour activer votre compte.
                </p>
              </div>
              <a
                href="https://wa.me/33600000000?text=Bonjour!%20Je%20souhaite%20activer%20mon%20abonnement%20en%20attente."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors shrink-0 shadow-lg shadow-amber-500/20"
              >
                Envoyer le reçu sur WhatsApp
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Subscriptions & Payments */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Subscription Summary */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-white border-b border-slate-800 pb-3 mb-4">
                Mon Abonnement IPTV Actif
              </h2>

              {activeSub ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Formule active</span>
                    <span className="text-lg font-extrabold text-white">{activeSub.plan_type}</span>
                    <div className="mt-1">{getStatusBadge(activeSub.status)}</div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Période de validité</span>
                    <span className="text-sm text-slate-300 block">
                      <strong className="text-white">Début :</strong> {new Date(activeSub.current_period_start!).toLocaleDateString('fr-FR')}
                    </span>
                    <span className="text-sm text-slate-300 block">
                      <strong className="text-white">Fin / Expiration :</strong> {new Date(activeSub.current_period_end!).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-slate-400 text-sm">Vous n'avez aucun abonnement actif en cours.</p>
                  <Link
                    href="/#pricing"
                    className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
                  >
                    Souscrire maintenant
                  </Link>
                </div>
              )}
            </div>

            {/* Historical Payments Grid */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-white border-b border-slate-800 pb-3 mb-4">
                Historique des transactions
              </h2>

              {payments && payments.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-800 text-sm">
                    <thead>
                      <tr className="text-left text-slate-400 text-xs font-semibold uppercase">
                        <th className="py-2.5">Date</th>
                        <th className="py-2.5">Mode</th>
                        <th className="py-2.5">Montant</th>
                        <th className="py-2.5">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-medium text-slate-300">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-3">{new Date(payment.created_at).toLocaleDateString('fr-FR')}</td>
                          <td className="py-3 capitalize">{payment.payment_method.replace('_', ' ')}</td>
                          <td className="py-3 font-semibold text-white">{(payment.amount / 100).toFixed(2)} €</td>
                          <td className="py-3">{getPaymentStatusBadge(payment.status)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-slate-500 text-sm text-center py-4">Aucune transaction enregistrée.</p>
              )}
            </div>
          </div>

          {/* Right Column: Support Ticket List */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                <h2 className="text-lg font-extrabold text-white">Mes tickets d'assistance</h2>
                <Link
                  href="/support"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Nouveau +
                </Link>
              </div>

              {tickets && tickets.length > 0 ? (
                <div className="space-y-3.5">
                  {tickets.map((ticket) => (
                    <div 
                      key={ticket.id} 
                      className="border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex flex-col bg-slate-950/60 transition-colors"
                    >
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="font-semibold text-slate-400">
                          {new Date(ticket.created_at).toLocaleDateString('fr-FR')}
                        </span>
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                          ticket.status === 'open' 
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                            : ticket.status === 'in_progress' 
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}>
                          {ticket.status === 'in_progress' ? 'En cours' : ticket.status === 'open' ? 'Ouvert' : 'Résolu'}
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-sm leading-snug">{ticket.subject}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{ticket.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-400 text-sm">
                  <p>Aucun ticket ouvert.</p>
                  <Link
                    href="/support"
                    className="mt-3 inline-flex text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-2 rounded-xl transition-colors"
                  >
                    Créer mon premier ticket
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

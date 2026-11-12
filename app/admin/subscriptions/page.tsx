'use client';
// CLIENT: Admin orders and active subscriptions management

import React, { useState, useEffect, useCallback } from 'react';
import { createClientSideClient } from '@/lib/supabase-client';
import { 
  Package, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Send, 
  MessageCircle, 
  Tv, 
  RefreshCw,
  BellRing
} from 'lucide-react';

interface OrderItem {
  id: string;
  order_ref: string;
  user_id?: string | null;
  customer_name: string;
  customer_email: string;
  customer_phone?: string | null;
  device_type?: string | null;
  device_app?: string | null;
  plan_type: string;
  amount: number;
  status: string; // 'pending', 'paid', 'cancelled', 'pending_instruction', 'confirmed'
  payment_method: string;
  notes?: string | null;
  created_at: string;
}

interface SubscriptionItem {
  id: string;
  order_id?: string | null;
  user_id: string;
  plan_type: string;
  status: string;
  current_period_start: string | null;
  current_period_end: string | null;
  renewal_reminder_sent_at?: string | null;
  created_at: string;
  user?: {
    full_name?: string | null;
    phone?: string | null;
  } | null;
  order?: {
    order_ref?: string | null;
    customer_name?: string | null;
    customer_email?: string | null;
    customer_phone?: string | null;
    device_type?: string | null;
    device_app?: string | null;
  } | null;
}

export default function AdminSubscriptionsPage() {
  const supabase = createClientSideClient();

  const [activeTab, setActiveTab] = useState<'orders' | 'subscriptions'>('orders');
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [subscriptions, setSubscriptions] = useState<SubscriptionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [orderFilter, setOrderFilter] = useState<'all' | 'pending' | 'paid'>('all');

  // Confirmation / Rejection modals
  const [confirmingOrder, setConfirmingOrder] = useState<OrderItem | null>(null);
  const [rejectingOrder, setRejectingOrder] = useState<OrderItem | null>(null);
  const [notes, setNotes] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [cronLoading, setCronLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Fetch orders (checks `orders` table first, falls back to `payments`)
  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const { data: orderData, error: orderErr } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (!orderErr && orderData) {
        setOrders(orderData as OrderItem[]);
      } else {
        // Fallback to legacy payments table
        const { data: payData, error: payErr } = await supabase
          .from('payments')
          .select('*, user:profiles(*), subscription:subscriptions(*)')
          .order('created_at', { ascending: false });

        if (!payErr && payData) {
          const mapped: OrderItem[] = payData.map((p: any) => ({
            id: p.id,
            order_ref: `SP-${String(p.id).slice(0, 8).toUpperCase()}`,
            user_id: p.user_id,
            customer_name: p.user?.full_name || 'Client',
            customer_email: '',
            customer_phone: p.user?.phone || null,
            device_type: p.device_type || null,
            device_app: p.device_app || null,
            plan_type: p.subscription?.plan_type || 'Starter',
            amount: p.amount,
            status: p.status === 'confirmed' ? 'paid' : p.status === 'failed' ? 'cancelled' : 'pending',
            payment_method: p.payment_method,
            notes: p.notes,
            created_at: p.created_at,
          }));
          setOrders(mapped);
        }
      }
    } catch (err: unknown) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // Fetch active subscriptions
  const fetchSubscriptions = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select(`
          *,
          user:profiles(full_name, phone),
          order:orders(order_ref, customer_name, customer_email, customer_phone, device_type, device_app)
        `)
        .eq('status', 'active')
        .order('current_period_end', { ascending: true });

      if (!error && data) {
        setSubscriptions(data as SubscriptionItem[]);
      }
    } catch (err: unknown) {
      console.error('Error fetching subscriptions:', err);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    if (activeTab === 'orders') {
      fetchOrders();
    } else {
      fetchSubscriptions();
    }
  }, [activeTab, fetchOrders, fetchSubscriptions]);

  // Confirm order action
  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmingOrder) return;

    setActionLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/admin/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: confirmingOrder.id,
          paymentId: confirmingOrder.id,
          notes: notes.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la validation.');
      }

      setMessage({ type: 'success', text: 'Commande confirmée et abonnement actif créé avec succès.' });
      setConfirmingOrder(null);
      setNotes('');
      fetchOrders();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Une erreur est survenue.';
      setMessage({ type: 'error', text: msg });
    } finally {
      setActionLoading(false);
    }
  };

  // Reject order action
  const handleReject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rejectingOrder) return;

    setActionLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/admin/reject-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: rejectingOrder.id,
          paymentId: rejectingOrder.id,
          notes: notes.trim(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors du rejet.');
      }

      setMessage({ type: 'success', text: 'Commande rejetée et annulée.' });
      setRejectingOrder(null);
      setNotes('');
      fetchOrders();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Une erreur est survenue.';
      setMessage({ type: 'error', text: msg });
    } finally {
      setActionLoading(false);
    }
  };

  // Trigger automated renewal reminders
  const handleTriggerRenewals = async () => {
    setCronLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/cron/renewals', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors du déclenchement des rappels.');

      setMessage({
        type: 'success',
        text: `Vérification terminée : ${data.remindersSent} email(s) de rappel de renouvellement envoyé(s) sur ${data.processed} abonnement(s) éligible(s).`,
      });
      fetchSubscriptions();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erreur lors des rappels.';
      setMessage({ type: 'error', text: msg });
    } finally {
      setCronLoading(false);
    }
  };

  const filteredOrders = orders.filter((o) => {
    if (orderFilter === 'pending') return o.status === 'pending' || o.status === 'pending_instruction';
    if (orderFilter === 'paid') return o.status === 'paid' || o.status === 'confirmed';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Gestion des Commandes & Abonnements</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Validez les commandes entrantes et suivez les abonnements actifs pour les relances automatiques.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-200/80 p-1 rounded-xl text-xs font-bold text-slate-600 gap-1 self-start sm:self-center shadow-inner">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'orders' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
            }`}
          >
            <Package className="w-4 h-4 text-blue-600" />
            <span>Commandes ({orders.filter(o => o.status === 'pending' || o.status === 'pending_instruction').length} en attente)</span>
          </button>
          <button
            onClick={() => setActiveTab('subscriptions')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
              activeTab === 'subscriptions' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Abonnements Actifs ({subscriptions.length})</span>
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 border rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between ${
          message.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)} className="text-xs underline ml-4">Fermer</button>
        </div>
      )}

      {/* TAB 1: ORDERS TABLE */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                onClick={() => setOrderFilter('all')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  orderFilter === 'all' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                Toutes ({orders.length})
              </button>
              <button
                onClick={() => setOrderFilter('pending')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  orderFilter === 'pending' ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                En attente ({orders.filter(o => o.status === 'pending' || o.status === 'pending_instruction').length})
              </button>
              <button
                onClick={() => setOrderFilter('paid')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  orderFilter === 'paid' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                Payées ({orders.filter(o => o.status === 'paid' || o.status === 'confirmed').length})
              </button>
            </div>

            <button
              onClick={fetchOrders}
              className="text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Actualiser</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            {loading ? (
              <div className="text-center py-20 text-slate-400 text-sm">Chargement des commandes...</div>
            ) : filteredOrders.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <tr className="text-left">
                      <th className="px-5 py-3.5">Réf & Date</th>
                      <th className="px-5 py-3.5">Client & Contact</th>
                      <th className="px-5 py-3.5">Appareil & Application</th>
                      <th className="px-5 py-3.5">Formule</th>
                      <th className="px-5 py-3.5">Montant</th>
                      <th className="px-5 py-3.5">Statut</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                    {filteredOrders.map((ord) => {
                      const isPending = ord.status === 'pending' || ord.status === 'pending_instruction';
                      const isPaid = ord.status === 'paid' || ord.status === 'confirmed';
                      const cleanPhone = ord.customer_phone?.replace(/\D/g, '') || '';

                      return (
                        <tr key={ord.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span className="font-mono font-bold text-slate-900 block">{ord.order_ref}</span>
                            <span className="text-[11px] text-slate-400">{new Date(ord.created_at).toLocaleDateString('fr-FR')}</span>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span className="font-bold text-slate-900 block">{ord.customer_name}</span>
                            {ord.customer_email && <span className="text-xs text-slate-500 block">{ord.customer_email}</span>}
                            {ord.customer_phone && (
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-xs font-mono text-slate-600">{ord.customer_phone}</span>
                                {cleanPhone && (
                                  <a
                                    href={`https://wa.me/${cleanPhone.startsWith('0') ? `33${cleanPhone.slice(1)}` : cleanPhone}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-emerald-600 hover:text-emerald-700 p-0.5"
                                    title="Ouvrir WhatsApp"
                                  >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-xs">
                            {ord.device_type || ord.device_app ? (
                              <div className="space-y-1">
                                {ord.device_type && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-medium block w-fit">
                                    <Tv className="w-3 h-3" /> {ord.device_type}
                                  </span>
                                )}
                                {ord.device_app && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] font-medium block w-fit">
                                    ⚡ {ord.device_app}
                                  </span>
                                )}
                              </div>
                            ) : ord.notes ? (
                              <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200">{ord.notes}</span>
                            ) : (
                              <span className="text-slate-400 text-xs italic">Non spécifié</span>
                            )}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap font-bold text-slate-800">{ord.plan_type}</td>
                          <td className="px-5 py-4 whitespace-nowrap font-black text-slate-900">{(ord.amount / 100).toFixed(2)} €</td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            {isPaid ? (
                              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">Payée ✓</span>
                            ) : isPending ? (
                              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">En attente</span>
                            ) : (
                              <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full">Annulée</span>
                            )}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-right text-xs">
                            <div className="flex items-center justify-end gap-1.5">
                              {isPending ? (
                                <>
                                  <button
                                    onClick={() => setConfirmingOrder(ord)}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                                  >
                                    Confirmer
                                  </button>
                                  <button
                                    onClick={() => setRejectingOrder(ord)}
                                    className="bg-red-100 hover:bg-red-200 text-red-700 font-bold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                                  >
                                    Rejeter
                                  </button>
                                </>
                              ) : isPaid ? (
                                <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                                  Abonnement Actif
                                </span>
                              ) : (
                                <span className="text-slate-400 text-xs">-</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-20 text-slate-400 text-sm">Aucune commande trouvée.</div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: ACTIVE SUBSCRIPTIONS TABLE */}
      {activeTab === 'subscriptions' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">Suivi des Abonnés Actifs & Relances</h2>
              <p className="text-xs text-slate-500">Ces abonnements ont été payés et validés. Le système vérifie les échéances pour envoyer les e-mails de rappel.</p>
            </div>

            <button
              onClick={handleTriggerRenewals}
              disabled={cronLoading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2 self-start cursor-pointer disabled:opacity-60"
            >
              <BellRing className="w-4 h-4" />
              <span>{cronLoading ? 'Vérification en cours...' : 'Envoyer Rappels Renouvellement (J-7)'}</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            {loading ? (
              <div className="text-center py-20 text-slate-400 text-sm">Chargement des abonnements actifs...</div>
            ) : subscriptions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <tr className="text-left">
                      <th className="px-5 py-3.5">Abonné</th>
                      <th className="px-5 py-3.5">Formule</th>
                      <th className="px-5 py-3.5">Date Début</th>
                      <th className="px-5 py-3.5">Date Expiration</th>
                      <th className="px-5 py-3.5">Échéance & Reste</th>
                      <th className="px-5 py-3.5">Dernier Rappel</th>
                      <th className="px-5 py-3.5 text-right">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 bg-white">
                    {subscriptions.map((sub) => {
                      const clientName = sub.order?.customer_name || sub.user?.full_name || 'Client';
                      const clientPhone = sub.order?.customer_phone || sub.user?.phone || '';
                      const clientEmail = sub.order?.customer_email || '';
                      const cleanPhone = clientPhone.replace(/\D/g, '');

                      const endDate = sub.current_period_end ? new Date(sub.current_period_end) : null;
                      const now = new Date();
                      const daysLeft = endDate ? Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : null;

                      return (
                        <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span className="font-bold text-slate-900 block">{clientName}</span>
                            {clientEmail && <span className="text-xs text-slate-500 block">{clientEmail}</span>}
                            {clientPhone && <span className="text-xs font-mono text-slate-600 block">{clientPhone}</span>}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <span className="font-bold text-blue-600">{sub.plan_type}</span>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-xs text-slate-600">
                            {sub.current_period_start ? new Date(sub.current_period_start).toLocaleDateString('fr-FR') : '-'}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-xs font-bold text-slate-900">
                            {endDate ? endDate.toLocaleDateString('fr-FR') : '-'}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            {daysLeft !== null ? (
                              daysLeft <= 0 ? (
                                <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full">Expiré</span>
                              ) : daysLeft <= 7 ? (
                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">
                                  Expire dans {daysLeft}j
                                </span>
                              ) : (
                                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                                  {daysLeft} jours restants
                                </span>
                              )
                            ) : '-'}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-xs text-slate-500">
                            {sub.renewal_reminder_sent_at ? (
                              <span className="text-emerald-700 font-medium">
                                Envoyé le {new Date(sub.renewal_reminder_sent_at).toLocaleDateString('fr-FR')}
                              </span>
                            ) : (
                              <span className="text-slate-400">Aucun</span>
                            )}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap text-right">
                            {cleanPhone && (
                              <a
                                href={`https://wa.me/${cleanPhone.startsWith('0') ? `33${cleanPhone.slice(1)}` : cleanPhone}?text=${encodeURIComponent(`Bonjour ${clientName}, concernant votre abonnement IPTV Smarters Pro (${sub.plan_type}) :`)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs border border-emerald-200 transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                              </a>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-20 text-slate-400 text-sm">
                Aucun abonnement actif pour le moment. Validez une commande entrante pour l'activer.
              </div>
            )}
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {confirmingOrder && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-none z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in duration-100">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Valider la commande & Activer l'accès</span>
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Vous êtes sur le point de confirmer la commande <strong>{confirmingOrder.order_ref}</strong> ({confirmingOrder.plan_type} - {(confirmingOrder.amount / 100).toFixed(2)} €) pour <strong>{confirmingOrder.customer_name}</strong>.
            </p>

            {(confirmingOrder.device_type || confirmingOrder.device_app) && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 space-y-1">
                <span className="font-bold block uppercase tracking-wider text-[10px]">Configuration demandée par le client :</span>
                {confirmingOrder.device_type && <div>📺 Appareil : {confirmingOrder.device_type}</div>}
                {confirmingOrder.device_app && <div>⚡ Application : {confirmingOrder.device_app}</div>}
              </div>
            )}

            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Notes internes d'activation (Facultatif)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Identifiants transmis par WhatsApp, preuve de virement reçue"
                  rows={3}
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => { setConfirmingOrder(null); setNotes(''); }}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center cursor-pointer"
                >
                  {actionLoading ? 'Activation...' : 'Confirmer et Activer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* REJECTION MODAL */}
      {rejectingOrder && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-none z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in duration-100">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              <span>Rejeter la commande</span>
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Vous êtes sur le point de rejeter la commande <strong>{rejectingOrder.order_ref}</strong> de <strong>{rejectingOrder.customer_name}</strong>.
            </p>
            <form onSubmit={handleReject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Raison du rejet (Sera envoyé par e-mail au client)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Virement non reçu sous 48h, référence introuvable"
                  rows={3}
                  required
                  className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 font-medium"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => { setRejectingOrder(null); setNotes(''); }}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors flex items-center justify-center cursor-pointer"
                >
                  {actionLoading ? 'Rejet...' : 'Rejeter et Annuler'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

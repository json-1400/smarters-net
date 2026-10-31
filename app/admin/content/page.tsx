import React from 'react';
import { createServerSideClient } from '@/lib/supabase';
import { PaymentInstructionsEditor } from '@/components/admin/PaymentInstructionsEditor';

export const dynamic = 'force-dynamic';

export default async function AdminContentPage() {
  const supabase = createServerSideClient();

  // Fetch payment instructions
  const { data: paymentInstructions } = await supabase
    .from('payment_instructions')
    .select('*')
    .order('plan_type', { ascending: true });

  const plans = ['Starter', 'Confort', 'Premium'];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Gestion du Contenu</h1>
        <p className="text-sm text-slate-500 mt-1">Gérez les instructions de paiement, le blog et la FAQ.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-indigo-900">Articles de Blog</h3>
            <p className="text-xs text-indigo-700 mt-1">Gérés via Sanity CMS</p>
          </div>
          <button className="mt-4 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-indigo-700">
            Ouvrir Sanity Studio
          </button>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-emerald-900">FAQ & Témoignages</h3>
            <p className="text-xs text-emerald-700 mt-1">Gérés via Sanity CMS</p>
          </div>
          <button className="mt-4 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-emerald-700">
            Ouvrir Sanity Studio
          </button>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-5 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-amber-900">Modèles d'Email</h3>
            <p className="text-xs text-amber-700 mt-1">Gérés via Resend</p>
          </div>
          <button className="mt-4 bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-amber-700">
            Ouvrir Resend Dashboard
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50">
          <h2 className="text-lg font-extrabold text-slate-900">Instructions de Paiement (par plan)</h2>
          <p className="text-xs text-slate-500 mt-1">
            Ces instructions seront envoyées par e-mail aux clients après qu'ils ont cliqué sur "Placer la commande".
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {plans.map((plan) => {
            const instruction = paymentInstructions?.find(p => p.plan_type === plan);
            return (
              <PaymentInstructionsEditor 
                key={plan}
                plan={plan}
                instruction={instruction}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

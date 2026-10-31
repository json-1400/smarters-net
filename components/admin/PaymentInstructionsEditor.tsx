'use client';

import React, { useState, useTransition } from 'react';
import { savePaymentInstruction } from '@/app/admin/content/actions';

interface PaymentInstructionsEditorProps {
  plan: string;
  instruction?: {
    instruction_text: string;
    bank_details: string;
    whatsapp_number: string;
  };
}

export function PaymentInstructionsEditor({ plan, instruction }: PaymentInstructionsEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    instruction_text: instruction?.instruction_text || '',
    bank_details: instruction?.bank_details || '',
    whatsapp_number: instruction?.whatsapp_number || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await savePaymentInstruction({
        plan_type: plan,
        ...formData,
      });

      if (res.error) {
        alert('Erreur: ' + res.error);
      } else {
        setIsEditing(false);
      }
    });
  };

  if (!isEditing) {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-900 text-base">Plan {plan}</h3>
          <button 
            onClick={() => setIsEditing(true)}
            className="text-xs font-semibold text-blue-600 hover:underline"
          >
            Modifier
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Message d'Instruction (Email)</span>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded text-slate-700 whitespace-pre-wrap min-h-[100px]">
              {instruction?.instruction_text || "Aucune instruction définie."}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Détails Bancaires (IBAN)</span>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-slate-700 font-mono text-xs break-all">
                {instruction?.bank_details || "Non défini"}
              </div>
            </div>
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Numéro WhatsApp (Override)</span>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded text-slate-700 font-mono text-xs">
                {instruction?.whatsapp_number || "Utilise le numéro global"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-50 border-y border-slate-200 shadow-inner">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-900 text-base">Modifier Plan {plan}</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
            Message d'Instruction (Email)
          </label>
          <textarea
            required
            value={formData.instruction_text}
            onChange={(e) => setFormData({ ...formData, instruction_text: e.target.value })}
            placeholder="Ex: Merci pour votre commande ! Pour activer votre compte, veuillez effectuer un virement bancaire..."
            className="w-full bg-white border border-slate-300 rounded p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Détails Bancaires (IBAN)
            </label>
            <textarea
              required
              value={formData.bank_details}
              onChange={(e) => setFormData({ ...formData, bank_details: e.target.value })}
              placeholder="Ex: FR76 3000 1234 5678 9012 3456 789"
              className="w-full bg-white border border-slate-300 rounded p-3 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Numéro WhatsApp
            </label>
            <input
              type="text"
              value={formData.whatsapp_number}
              onChange={(e) => setFormData({ ...formData, whatsapp_number: e.target.value })}
              placeholder="Ex: +33 6 12 34 56 78"
              className="w-full bg-white border border-slate-300 rounded p-3 text-sm font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-xs text-slate-500 mt-2">Laissez vide pour utiliser le numéro par défaut du site.</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            disabled={isPending}
            className="px-4 py-2 bg-white border border-slate-300 rounded text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700 shadow-sm disabled:opacity-50 flex items-center gap-2"
          >
            {isPending ? 'Enregistrement...' : 'Enregistrer'}
          </button>
        </div>
      </form>
    </div>
  );
}

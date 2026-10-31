import React from 'react';
import { Layers, ShieldCheck, CreditCard, Send, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    icon: Layers,
    title: 'Choisissez votre Formule',
    desc: 'Sélectionnez l\'abonnement qui correspond à vos besoins : 3 mois, 6 mois ou 12 mois VIP avec remise exclusive.'
  },
  {
    num: '02',
    icon: CreditCard,
    title: 'Validez votre Commande',
    desc: 'Renseignez vos coordonnées de contact. Vos accès sont préparés manuellement par nos techniciens.'
  },
  {
    num: '03',
    icon: Send,
    title: 'Règlement Sécurisé',
    desc: 'Effectuez votre paiement sécurisé ou virement sans transmettre de coordonnées bancaires sensibles.'
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Activation en 3 Minutes',
    desc: 'Recevez instantanément vos identifiants Xtream Codes et lien M3U par e-mail et WhatsApp avec guide pas-à-pas.'
  }
];

export function Steps() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs bg-blue-500/10 text-blue-400 font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-500/20 inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Processus Simple & Sécurisé
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
            Comment Activer Votre Abonnement en 4 Étapes ?
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Notre procédure d'activation rapide vous permet de commencer à visionner vos chaînes en moins de 3 minutes sur n'importe quel téléviseur ou appareil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-blue-500/30 tracking-tight">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

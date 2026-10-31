import React from 'react';
import { createServerSideClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function AdminUsersPage() {
  const supabase = createServerSideClient();

  // Fetch all admin profiles
  const { data: admins } = await supabase
    .from('profiles')
    .select('*')
    .eq('is_admin', true)
    .order('created_at', { ascending: false });

  // Fetch recent audit logs
  const { data: auditLogs } = await supabase
    .from('admin_audit_log')
    .select(`
      *,
      admin:profiles(full_name, email)
    `)
    .order('created_at', { ascending: false })
    .limit(20);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Gestion des Utilisateurs</h1>
        <p className="text-sm text-slate-500 mt-1">Gérez les administrateurs et consultez le journal d'audit.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Admin List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-extrabold text-slate-900">Administrateurs ({admins?.length || 0})</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-xs font-bold rounded">
                + Inviter Admin
              </button>
            </div>
            <div className="p-0">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left text-slate-500 text-xs font-semibold uppercase">
                    <th className="px-4 py-3">Nom</th>
                    <th className="px-4 py-3">Date de Création</th>
                    <th className="px-4 py-3">Statut</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {admins?.map((admin) => (
                    <tr key={admin.id}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{admin.full_name || 'Admin Utilisateur'}</td>
                      <td className="px-4 py-3 text-slate-500">
                        {new Date(admin.created_at).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-[10px] uppercase font-bold rounded ${admin.is_blocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                          {admin.is_blocked ? 'Bloqué' : 'Actif'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-blue-600 hover:underline text-xs font-semibold">Gérer</button>
                      </td>
                    </tr>
                  ))}
                  {!admins || admins.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-slate-500 text-sm">
                        Aucun administrateur trouvé.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Audit Log */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 text-slate-400 rounded-lg shadow-sm">
            <div className="p-4 border-b border-slate-800">
              <h3 className="font-extrabold text-white text-lg">Journal d'Audit</h3>
            </div>
            <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
              {auditLogs?.map((log) => (
                <div key={log.id} className="text-xs space-y-1 pb-3 border-b border-slate-800 last:border-0 last:pb-0">
                  <div className="flex justify-between items-center text-slate-500">
                    <span className="font-semibold text-slate-300">{(log as any).admin?.full_name || 'Système'}</span>
                    <span>{new Date(log.created_at).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <p className="text-white font-medium">
                    {log.action} sur <span className="text-blue-400">{log.target_type}</span>
                  </p>
                  <p className="text-[10px] text-slate-600 font-mono break-all">
                    ID: {log.target_id} | IP: {log.ip_address || 'N/A'}
                  </p>
                </div>
              ))}
              {!auditLogs || auditLogs.length === 0 ? (
                <p className="text-center py-4 text-slate-500">Aucun journal disponible.</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

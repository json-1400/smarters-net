import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const serverClient = createServerSideClient();
    const { data: { user } } = await serverClient.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Session non authentifiée.' }, { status: 401 });
    }

    const adminClient = createAdminClient();

    // Verify admin role
    const { data: profile } = await adminClient
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single();

    const isUserAdmin = Boolean(profile?.is_admin || user.user_metadata?.is_admin);

    if (!isUserAdmin) {
      return NextResponse.json({ error: 'Accès administrateur requis.' }, { status: 403 });
    }

    // Fetch rooms from chat_rooms
    const { data: rawRooms, error: roomsErr } = await adminClient
      .from('chat_rooms')
      .select('*')
      .order('last_message_at', { ascending: false });

    if (roomsErr) {
      console.error('Error fetching chat_rooms:', roomsErr);
      return NextResponse.json({ error: 'Erreur lors de la récupération des salons.' }, { status: 500 });
    }

    const roomsList = rawRooms || [];
    const userIds = roomsList.map(r => r.user_id).filter((id): id is string => Boolean(id));

    const profileMap = new Map<string, { id: string; full_name: string | null; email: string | null }>();
    if (userIds.length > 0) {
      const { data: profiles } = await adminClient
        .from('profiles')
        .select('id, full_name, email')
        .in('id', userIds);

      (profiles || []).forEach(p => profileMap.set(p.id, p));
    }

    const enrichedRooms = roomsList.map(r => ({
      ...r,
      user: r.user_id ? profileMap.get(r.user_id) || null : null,
    }));

    return NextResponse.json({ rooms: enrichedRooms });
  } catch (err: unknown) {
    console.error('Admin chat rooms API error:', err instanceof Error ? err.message : err);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}


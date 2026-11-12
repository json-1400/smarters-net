import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const roomId = searchParams.get('roomId');

    if (!roomId) {
      return NextResponse.json({ error: 'Paramètre roomId requis.' }, { status: 400 });
    }

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

    // Fetch messages for room
    const { data: messages, error: msgErr } = await adminClient
      .from('chat_messages')
      .select('*')
      .eq('room_id', roomId)
      .order('created_at', { ascending: true });

    if (msgErr) {
      console.error('Error fetching chat_messages:', msgErr);
      return NextResponse.json({ error: 'Erreur lors de la récupération des messages.' }, { status: 500 });
    }

    // Mark room unread count as read
    await adminClient
      .from('chat_rooms')
      .update({ unread_admin_count: 0 })
      .eq('id', roomId);

    return NextResponse.json({ messages: messages || [] });
  } catch (err: unknown) {
    console.error('Admin chat messages API error:', err instanceof Error ? err.message : err);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}


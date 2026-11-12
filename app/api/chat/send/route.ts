import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendChatReplyEmail } from '@/lib/resend';
import { chatSendSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const rawPayload: unknown = await request.json();
    const parsed = chatSendSchema.safeParse(rawPayload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || 'Données de message incomplètes.';
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { roomId, message: trimmedMessage, isFromAdmin } = parsed.data;

    if (trimmedMessage.length > 2000) {
      return NextResponse.json({ error: 'Message trop long (maximum 2000 caractères).' }, { status: 400 });
    }

    const adminClient = createAdminClient();
    const serverClient = createServerSideClient();
    const { data: { user } } = await serverClient.auth.getUser();

    // 1. Strict Admin Authorization Check (Zero Trust)
    let verifiedIsAdmin = false;
    if (isFromAdmin) {
      if (!user) {
        return NextResponse.json(
          { error: 'Accès refusé. Session administrateur requise.' },
          { status: 403 }
        );
      }

      // Check metadata and profile table
      const metaAdmin = Boolean(user.user_metadata?.is_admin);
      if (metaAdmin) {
        verifiedIsAdmin = true;
      } else {
        const { data: profile } = await adminClient
          .from('profiles')
          .select('is_admin')
          .eq('id', user.id)
          .single();
        if (profile?.is_admin) {
          verifiedIsAdmin = true;
        }
      }

      if (!verifiedIsAdmin) {
        return NextResponse.json(
          { error: 'Accès non autorisé. Droits administrateur introuvables.' },
          { status: 403 }
        );
      }
    }

    // 2. Identify sender, user and guest contexts
    const senderId = verifiedIsAdmin ? user?.id : (user ? user.id : null);
    let targetUserId: string | null = null;
    let guestId: string | null = null;

    if (roomId.startsWith('user_')) {
      targetUserId = roomId.replace('user_', '').replace('_admin', '');
    } else if (roomId.startsWith('guest_')) {
      guestId = roomId.replace('guest_', '').replace('_admin', '');
    }

    const nowIso = new Date().toISOString();
    const summaryText = trimmedMessage.length > 200 ? `${trimmedMessage.substring(0, 197)}...` : trimmedMessage;

    // 3. Upsert into chat_rooms table
    try {
      const { data: existingRoom } = await adminClient
        .from('chat_rooms')
        .select('unread_admin_count, unread_user_count')
        .eq('id', roomId)
        .single();

      const unreadAdmin = verifiedIsAdmin ? 0 : ((existingRoom?.unread_admin_count || 0) + 1);
      const unreadUser = verifiedIsAdmin ? ((existingRoom?.unread_user_count || 0) + 1) : 0;

      await adminClient
        .from('chat_rooms')
        .upsert({
          id: roomId,
          user_id: targetUserId || (user ? user.id : null),
          guest_id: guestId || (user ? null : 'guest'),
          last_message: summaryText,
          last_message_at: nowIso,
          unread_admin_count: unreadAdmin,
          unread_user_count: unreadUser,
          status: 'open',
        });
    } catch (roomErr) {
      console.warn('Warning: Failed to upsert chat_room state:', roomErr);
    }

    // 4. Insert message into chat_messages
    const { data: insertedMsg, error: insertError } = await adminClient
      .from('chat_messages')
      .insert({
        room_id: roomId,
        sender_id: senderId,
        guest_id: user ? null : guestId,
        message: trimmedMessage,
        is_admin: verifiedIsAdmin,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Failed to insert chat message:', insertError);
      return NextResponse.json({ error: "Erreur lors de l'enregistrement du message." }, { status: 500 });
    }

    // 5. If message is sent by ADMIN to an authenticated user, send email notification via Resend
    if (verifiedIsAdmin && targetUserId) {
      try {
        const { data: targetProfile } = await adminClient
          .from('profiles')
          .select('full_name, email')
          .eq('id', targetUserId)
          .single();

        let recipientEmail = targetProfile?.email;

        if (!recipientEmail) {
          const { data: authUser } = await adminClient.auth.admin.getUserById(targetUserId);
          recipientEmail = authUser?.user?.email;
        }

        if (recipientEmail) {
          await sendChatReplyEmail(
            recipientEmail,
            targetProfile?.full_name || 'Client Smarters Pro',
            trimmedMessage.length > 180 ? `${trimmedMessage.substring(0, 180)}...` : trimmedMessage
          );
        }
      } catch (emailErr) {
        console.warn('Failed to send chat reply email notification:', emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: insertedMsg,
    });
  } catch (err: unknown) {
    console.error('Chat send error:', err instanceof Error ? err.message : err);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { createServerSideClient, createAdminClient } from '@/lib/supabase';
import { sendChatReplyEmail } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const { roomId, message, guestName, isFromAdmin } = await request.json();

    if (!roomId || !message?.trim()) {
      return NextResponse.json({ error: 'Données de message incomplètes.' }, { status: 400 });
    }

    const adminClient = createAdminClient();
    const serverClient = createServerSideClient();
    const { data: { session } } = await serverClient.auth.getSession();

    const senderId = session?.user?.id || null;
    const trimmedMessage = message.trim();

    // 1. Insert message into chat_messages
    const { data: insertedMsg, error: insertError } = await adminClient
      .from('chat_messages')
      .insert({
        room_id: roomId,
        sender_id: senderId,
        message: trimmedMessage,
        is_admin: isFromAdmin || false,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Failed to insert chat message:', insertError);
      return NextResponse.json({ error: "Erreur lors de l'enregistrement du message." }, { status: 500 });
    }

    // 2. If message is sent by ADMIN to an authenticated user (room_id starts with user_), send email notification!
    if (isFromAdmin && roomId.startsWith('user_')) {
      const targetUserId = roomId.replace('user_', '').replace('_admin', '');
      
      try {
        // Fetch target user's email and profile
        const { data: targetProfile } = await adminClient
          .from('profiles')
          .select('full_name, email')
          .eq('id', targetUserId)
          .single();

        let recipientEmail = targetProfile?.email;

        // Fallback: check auth.users directly if email is not stored in profiles
        if (!recipientEmail) {
          const { data: authUser } = await adminClient.auth.admin.getUserById(targetUserId);
          recipientEmail = authUser?.user?.email;
        }

        if (recipientEmail) {
          // Trigger asynchronous email via Resend
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
  } catch (err: any) {
    console.error('Chat send error:', err);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}

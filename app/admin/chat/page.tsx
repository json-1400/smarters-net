'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createClientSideClient } from '@/lib/supabase-client';

interface ChatRoom {
  id: string;
  user_id: string | null;
  guest_id: string | null;
  status: string;
  unread_admin_count: number;
  unread_user_count: number;
  last_message: string | null;
  last_message_at: string;
  user?: {
    id: string;
    full_name: string | null;
    email: string | null;
  } | null;
}

interface ChatMessage {
  id: string;
  room_id: string;
  sender_id: string | null;
  message: string;
  is_admin: boolean;
  created_at: string;
  isOptimistic?: boolean;
}

function formatGuestNumber(roomId: string): string {
  const clean = roomId.replace(/^guest_/, '').replace(/^guest_/, '').replace(/_admin$/, '');
  if (/^\d+$/.test(clean)) {
    return clean;
  }
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) % 90000;
  }
  return String(10000 + Math.abs(hash));
}

export default function AdminChatPage() {
  const supabase = createClientSideClient();

  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [chatLoading, setChatLoading] = useState(false);
  const [adminId, setAdminId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function initAdmin() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) setAdminId(session.user.id);
    }
    initAdmin();
  }, [supabase]);

  // 1. Fetch active rooms via secure Server API (bypasses browser RLS issues)
  const fetchRooms = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/chat/rooms');
      if (res.ok) {
        const data = await res.json();
        setRooms(data.rooms || []);
      }
    } catch (err) {
      console.error('Error fetching rooms:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 2. Fetch messages for the selected room (spinner only on initial selection)
  const fetchMessages = useCallback(async (roomId: string, showSpinner = false) => {
    if (showSpinner) setChatLoading(true);
    try {
      const res = await fetch(`/api/admin/chat/messages?roomId=${encodeURIComponent(roomId)}`);
      if (res.ok) {
        const data = await res.json();
        const incoming = (data.messages || []) as ChatMessage[];
        setMessages(prev => {
          if (prev.length === incoming.length && prev[prev.length - 1]?.id === incoming[incoming.length - 1]?.id) {
            return prev;
          }
          return incoming;
        });
        if (showSpinner) scrollToBottom();
      }
    } catch (err) {
      console.error('Error fetching chat messages:', err);
    } finally {
      if (showSpinner) setChatLoading(false);
    }
  }, []);

  // Initial load of rooms on mount (No continuous interval spam)
  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  // Realtime subscription on chat_rooms: only updates when database actually changes
  useEffect(() => {
    const roomChannel = supabase
      .channel('admin_chat_rooms_channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'chat_rooms',
        },
        () => {
          fetchRooms();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(roomChannel);
    };
  }, [fetchRooms, supabase]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectRoom = (roomId: string) => {
    if (selectedRoomId === roomId) return;
    setSelectedRoomId(roomId);
    setRooms(prev => prev.map(r => r.id === roomId ? { ...r, unread_admin_count: 0 } : r));
  };

  // When room is selected, load messages once + listen to Realtime WebSocket
  useEffect(() => {
    if (!selectedRoomId) return;

    // Load messages once with spinner
    fetchMessages(selectedRoomId, true);

    // WebSocket Realtime for instant push updates when new message arrives
    const channel = supabase
      .channel(`admin_chat_messages_${selectedRoomId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `room_id=eq.${selectedRoomId}`,
        },
        (payload) => {
          const newMsg = payload.new as ChatMessage;
          setMessages((prev) => {
            const alreadyExists = prev.some(
              m => m.id === newMsg.id || (m.isOptimistic && m.message === newMsg.message)
            );
            if (alreadyExists) {
              return prev.map(m => (m.isOptimistic && m.message === newMsg.message) ? newMsg : m);
            }
            return [...prev, newMsg];
          });
          scrollToBottom();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedRoomId, supabase, fetchMessages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedRoomId || !adminId) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    // Optimistic UI update
    const tempId = crypto.randomUUID();
    const tempMsg: ChatMessage = {
      id: tempId,
      room_id: selectedRoomId,
      sender_id: adminId,
      message: messageText,
      is_admin: true,
      created_at: new Date().toISOString(),
      isOptimistic: true,
    };
    setMessages(prev => [...prev, tempMsg]);
    scrollToBottom();

    try {
      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId: selectedRoomId,
          message: messageText,
          isFromAdmin: true,
        }),
      });

      if (!res.ok) {
        throw new Error("Échec de l'envoi du message.");
      }

      // Refresh to confirm server state
      fetchRooms();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Échec de l'envoi du message.";
      alert(errorMessage);
      setMessages(prev => prev.filter(m => m.id !== tempId));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)] min-h-[30rem] items-stretch">
      {/* Left Pane: Chat Feed */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between flex-shrink-0">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Discussions Actives</h3>
          <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-extrabold px-2 py-0.5 rounded uppercase">
            {rooms.length} Salles
          </span>
        </div>

        {loading ? (
          <div className="flex-grow flex items-center justify-center">
            <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        ) : rooms && rooms.length > 0 ? (
          <div className="flex-grow overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 text-sm">
            {rooms.map((r) => {
              const isUser = r.id.startsWith('user_');
              const isSelected = selectedRoomId === r.id;

              return (
                <div 
                  key={r.id} 
                  onClick={() => handleSelectRoom(r.id)}
                  className={`p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col ${
                    isSelected ? 'bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-600' : 'border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-bold text-slate-800 dark:text-slate-100 truncate flex items-center gap-1.5">
                      {isUser ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                          <span className="truncate">{r.user?.full_name || `Client #${r.id.replace('user_', '').replace('_admin', '').substring(0, 6)}`}</span>
                        </>
                      ) : (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                          <span>Visiteur #{formatGuestNumber(r.id)}</span>
                        </>
                      )}
                    </span>
                    <div className="flex items-center gap-1">
                      {r.unread_admin_count > 0 && (
                        <span className="text-[10px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded-full">
                          {r.unread_admin_count}
                        </span>
                      )}
                      {isUser && (
                        <span className="text-[9px] bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-1 rounded font-bold">
                          Email
                        </span>
                      )}
                    </div>
                  </div>
                  {r.last_message && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mb-1">
                      {r.last_message}
                    </p>
                  )}
                  <span className="text-[10px] text-slate-400">
                    {new Date(r.last_message_at).toLocaleString('fr-FR', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center text-slate-400 text-xs">
            Aucune discussion active.
          </div>
        )}
      </div>

      {/* Right Pane: Selected conversation feed */}
      <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col overflow-hidden shadow-sm">
        {selectedRoomId ? (
          <div className="flex-grow flex flex-col overflow-hidden">
            {/* Chat Room Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950 flex-shrink-0">
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <span>Salle de discussion</span>
                  {selectedRoomId.startsWith('user_') ? (
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded font-bold">
                      Client Authentifié &bull; Réponse envoyée aussi par Email
                    </span>
                  ) : (
                    <span className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-bold">
                      Visiteur Invité (En direct)
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {selectedRoomId.startsWith('user_')
                    ? `Client Connecté • ID: #${selectedRoomId.replace('user_', '').replace('_admin', '').substring(0, 8)}`
                    : `Visiteur Web #${formatGuestNumber(selectedRoomId)}`}
                </p>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-slate-50 dark:bg-slate-950/60 space-y-4">
              {chatLoading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                </div>
              ) : messages && messages.length > 0 ? (
                messages.map((m) => {
                  const isMe = m.is_admin;
                  return (
                    <div 
                      key={m.id} 
                      className={`flex items-start max-w-[85%] ${isMe ? 'ml-auto justify-end' : ''}`}
                    >
                      <div className={`p-3 rounded-2xl shadow-sm ${
                        isMe 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'
                      }`}>
                        <div className={`flex justify-between items-center text-[9px] gap-6 font-bold mb-1 ${isMe ? 'text-blue-200' : 'text-slate-400'}`}>
                          <span>{isMe ? 'Moi (Support)' : 'Client / Visiteur'}</span>
                          <span>{new Date(m.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <p className="text-xs font-medium leading-relaxed whitespace-pre-wrap">
                          {m.message}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-center items-center h-full text-slate-400 text-sm">
                  Début de la discussion.
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Rédigez votre réponse ici..."
                className="flex-grow border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors disabled:opacity-50 shadow"
              >
                Envoyer
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center text-slate-400 text-sm bg-slate-50 dark:bg-slate-950/40">
            Sélectionnez une discussion dans le menu de gauche pour répondre.
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createClientSideClient } from '@/lib/supabase-client';

export default function AdminChatPage() {
  const supabase = createClientSideClient();

  const [rooms, setRooms] = useState<any[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  
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

  // Fetch active rooms
  async function fetchRooms() {
    try {
      // Fetch latest messages to infer active rooms
      const { data, error } = await supabase
        .from('chat_messages')
        .select(`
          room_id,
          created_at,
          sender:profiles!chat_messages_sender_id_fkey(id, full_name)
        `)
        .order('created_at', { ascending: false })
        .limit(200);

      if (error) throw error;
      
      // Deduplicate to get rooms
      const uniqueRooms = new Map();
      (data || []).forEach(msg => {
        if (!uniqueRooms.has(msg.room_id)) {
          // If the sender is an admin, we still need the user's name.
          // Since room_id is user_UUID_admin, we can try to extract UUID if needed,
          // but for now we just use the sender's name if they started it.
          uniqueRooms.set(msg.room_id, {
            room_id: msg.room_id,
            last_message_at: msg.created_at,
            last_sender: msg.sender
          });
        }
      });
      
      setRooms(Array.from(uniqueRooms.values()));
    } catch (err) {
      console.error('Error fetching rooms:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRooms();
  }, []);

  // Fetch chat messages when room is selected
  async function fetchMessages(roomId: string) {
    setChatLoading(true);
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select(`
          *,
          sender:profiles!chat_messages_sender_id_fkey(full_name)
        `)
        .eq('room_id', roomId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (err) {
      console.error('Error fetching chat messages:', err);
    } finally {
      setChatLoading(false);
      scrollToBottom();
    }
  }

  useEffect(() => {
    if (!selectedRoomId) return;

    fetchMessages(selectedRoomId);

    const channel = supabase
      .channel(`admin_chat_${selectedRoomId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `room_id=eq.${selectedRoomId}`,
        },
        (payload) => {
          setMessages((prev) => {
             if (prev.find(m => m.id === payload.new.id)) return prev;
             return [...prev, payload.new];
          });
          scrollToBottom();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedRoomId, supabase]);

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedRoomId || !adminId) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    // Optimistic
    const tempMsg = {
      id: crypto.randomUUID(),
      room_id: selectedRoomId,
      sender_id: adminId,
      message: messageText,
      created_at: new Date().toISOString(),
      sender: { full_name: 'Support (Moi)' }
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
    } catch (err: any) {
      alert(err.message || "Échec de l'envoi du message.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)] min-h-[30rem] items-stretch">
      {/* Left Pane: Chat Feed */}
      <div className="bg-white border border-slate-200 rounded-lg flex flex-col overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 bg-slate-55 flex items-center justify-between flex-shrink-0">
          <h3 className="font-extrabold text-slate-900 text-sm">Discussions Actives</h3>
          <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-2 py-0.5 rounded uppercase">
            {rooms.length} Salles
          </span>
        </div>

        {loading ? (
          <div className="flex-grow flex items-center justify-center">
             <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        ) : rooms && rooms.length > 0 ? (
          <div className="flex-grow overflow-y-auto divide-y divide-slate-100 text-sm">
            {rooms.map((r) => (
              <div 
                key={r.room_id} 
                onClick={() => handleSelectRoom(r.room_id)}
                className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col ${selectedRoomId === r.room_id ? 'bg-blue-50 border-l-2 border-blue-600' : 'border-l-2 border-transparent'}`}
              >
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-bold text-slate-800 truncate flex items-center gap-1.5">
                    {r.room_id.startsWith('user_') ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        <span>Client #{r.room_id.replace('user_', '').replace('_admin', '').substring(0, 6)}</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>Visiteur #{r.room_id.replace('guest_', '').replace('_admin', '').substring(0, 6)}</span>
                      </>
                    )}
                  </span>
                  {r.room_id.startsWith('user_') && (
                    <span className="text-[9px] bg-blue-50 text-blue-700 border border-blue-200 px-1 rounded font-bold">
                      Email
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1">Dernier msg: {new Date(r.last_message_at).toLocaleString('fr-FR')}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center text-slate-400 text-xs">
            Aucune discussion active.
          </div>
        )}
      </div>

      {/* Right Pane: Selected conversation feed */}
      <div className="md:col-span-2 bg-white border border-slate-200 rounded-lg flex flex-col overflow-hidden shadow-sm">
        {selectedRoomId ? (
          <div className="flex-grow flex flex-col overflow-hidden">
            {/* Chat Room Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 flex-shrink-0">
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <span>Salle de discussion</span>
                  {selectedRoomId.startsWith('user_') ? (
                    <span className="text-[10px] bg-blue-100 text-blue-800 border border-blue-200 px-2 py-0.5 rounded font-bold">
                      Client Authentifié &bull; Réponse envoyée aussi par Email
                    </span>
                  ) : (
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-bold">
                      Visiteur Invité (En direct)
                    </span>
                  )}
                </h4>
                <p className="text-[10px] text-slate-500 mt-0.5 font-mono">{selectedRoomId}</p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold">
                 <button onClick={() => {}} className="px-2 py-1 rounded bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors">Clôturer</button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
              {chatLoading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                </div>
              ) : messages && messages.length > 0 ? (
                messages.map((m) => {
                  const isMe = m.sender_id === adminId;
                  return (
                    <div 
                      key={m.id} 
                      className={`flex items-start max-w-[85%] ${isMe ? 'ml-auto justify-end' : ''}`}
                    >
                      <div className={`p-3 rounded-lg shadow-sm ${
                        isMe 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                      }`}>
                        <div className={`flex justify-between items-center text-[9px] gap-6 font-bold mb-1 ${isMe ? 'text-blue-200' : 'text-slate-400'}`}>
                          <span>{isMe ? 'Moi' : (m.sender?.full_name || 'Client')}</span>
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
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Rédigez votre réponse ici..."
                className="flex-grow border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors disabled:opacity-50"
              >
                Envoyer
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center text-slate-400 text-sm bg-slate-50">
            Sélectionnez une salle dans le menu de gauche pour discuter.
          </div>
        )}
      </div>
    </div>
  );
}

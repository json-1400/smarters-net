'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createClientSideClient } from '@/lib/supabase-client';
import { MessageCircle, X, Send, ShieldCheck, Mail } from 'lucide-react';

export function ChatWidget({ user }: { user: any | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [guestId, setGuestId] = useState<string>('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const supabase = createClientSideClient();

  // Initialize persistent guest ID if unauthenticated
  useEffect(() => {
    if (!user) {
      let storedId = localStorage.getItem('smarters_guest_chat_id');
      if (!storedId) {
        storedId = `guest_${Math.random().toString(36).substring(2, 9)}_${Date.now().toString(36)}`;
        localStorage.setItem('smarters_guest_chat_id', storedId);
      }
      setGuestId(storedId);
    }
  }, [user]);

  const roomId = user ? `user_${user.id}_admin` : (guestId ? `guest_${guestId}_admin` : '');

  // Fetch initial messages and subscribe
  useEffect(() => {
    if (!roomId) return;

    let channel: any;

    const fetchMessages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('room_id', roomId)
        .order('created_at', { ascending: true });
        
      if (!error && data) {
        setMessages(data);
        const currentUserId = user?.id || guestId;
        const unread = data.filter(m => m.sender_id !== currentUserId && !m.is_read && m.is_admin).length;
        setUnreadCount(isOpen ? 0 : unread);
      }
      setLoading(false);
      scrollToBottom();
    };

    fetchMessages();

    // Subscribe to real-time events
    channel = supabase
      .channel(`chat_room_${roomId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `room_id=eq.${roomId}`,
        },
        (payload) => {
          setMessages((prev) => {
            if (prev.find(m => m.id === payload.new.id || (m.isOptimistic && m.message === payload.new.message))) {
              return prev.map(m => (m.isOptimistic && m.message === payload.new.message) ? payload.new : m);
            }
            return [...prev, payload.new];
          });
          
          const currentUserId = user?.id || guestId;
          if (!isOpen && payload.new.sender_id !== currentUserId) {
            setUnreadCount(prev => prev + 1);
          } else {
            scrollToBottom();
          }
        }
      )
      .subscribe();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, [user, guestId, roomId, isOpen, supabase]);

  // Handle UX when Widget Opens
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // Keyboard shortcut to close (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !roomId) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    const currentUserId = user?.id || guestId;

    // Optimistic UI update
    const tempId = crypto.randomUUID();
    const tempMsg = {
      id: tempId,
      room_id: roomId,
      sender_id: currentUserId,
      message: messageText,
      created_at: new Date().toISOString(),
      is_admin: false,
      isOptimistic: true,
    };
    
    setMessages(prev => [...prev, tempMsg]);
    scrollToBottom();

    try {
      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId,
          message: messageText,
          isFromAdmin: false,
        }),
      });

      if (!res.ok) {
        throw new Error('Erreur lors de l\'envoi.');
      }
    } catch (error) {
      console.error('Failed to send chat message:', error);
      // Rollback on failure
      setMessages(prev => prev.filter(m => m.id !== tempId));
    }
  };

  return (
    <>
      {isOpen ? (
        <div 
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 flex flex-col bg-slate-900 sm:rounded-2xl sm:shadow-2xl sm:border border-slate-800 w-full sm:w-[380px] h-[100dvh] sm:h-[600px] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-slate-100"
          role="dialog"
          aria-label="Support client en direct"
        >
          {/* Header */}
          <header className="bg-slate-950 text-white p-4 flex justify-between items-center flex-shrink-0 border-b border-slate-800 z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full flex items-center justify-center font-black text-sm tracking-wider shadow">
                  SP
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-extrabold text-sm leading-tight flex items-center gap-1.5">
                  <span>Support Smarters Pro</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded font-bold">
                    En ligne
                  </span>
                </h3>
                <p className="text-[10px] text-slate-400 font-medium">
                  {user ? 'Compte Client (Alertes email actives)' : 'Visiteur en direct'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-colors focus:outline-none"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </header>

          {/* Email Notification Notice for Authenticated Customers */}
          {user ? (
            <div className="bg-blue-950/60 border-b border-blue-900/50 px-4 py-2 text-[11px] text-blue-300 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span>Vous recevez également chaque réponse du conseiller sur votre email.</span>
            </div>
          ) : (
            <div className="bg-slate-950/60 border-b border-slate-800/80 px-4 py-2 text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Assistance en direct pour vos questions avant commande.</span>
            </div>
          )}

          {/* Messages Feed */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-900/90 text-sm">
            {/* Automated Welcome Bubble */}
            <div className="flex flex-col items-start max-w-[85%]">
              <div className="bg-slate-800 border border-slate-700/80 text-slate-200 p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed shadow-sm">
                Bonjour ! Bienvenue sur le support IPTV Smarters Pro France. Comment pouvons-nous vous aider aujourd'hui ? (Activation express, PayPal, Carte Bancaire, tutoriel d'installation...)
              </div>
              <span className="text-[10px] text-slate-500 mt-1 pl-1">Équipe Support &middot; En ligne</span>
            </div>

            {loading && (
              <div className="text-center text-xs text-slate-500 py-2">
                Connexion sécurisée au chat...
              </div>
            )}

            {messages.map((msg) => {
              const currentUserId = user?.id || guestId;
              const isMine = msg.sender_id === currentUserId || (!msg.is_admin && msg.sender_id !== 'admin');

              return (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${isMine ? 'items-end' : 'items-start'} ${msg.isOptimistic ? 'opacity-70' : 'opacity-100'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      isMine 
                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                        : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-sm'
                    }`}
                  >
                    {msg.message}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">
                    {isMine ? 'Moi' : 'Conseiller'} &middot; {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Écrivez votre message ici..."
              className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-all shadow"
              aria-label="Envoyer le message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      ) : (
        /* Floating Launcher Bubble */
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Ouvrir le support en direct"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-105 transition-transform" />
          
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-950 shadow-md">
              {unreadCount}
            </span>
          )}

          {/* Subtle pulsating online badge */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
        </button>
      )}
    </>
  );
}

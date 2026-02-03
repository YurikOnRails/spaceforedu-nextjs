"use client";

import React, { useActionState } from 'react';
import { Phone, Mail, Loader2, CheckCircle } from 'lucide-react';
import { sendTelegramMessage } from '../app/actions';

const Contact = () => {
  const [state, formAction, isPending] = useActionState(sendTelegramMessage, {
    success: false,
    message: "",
  });

  return (
    <section id="Contact" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="flex-1 p-12 md:p-20 bg-cyan-900/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Начните свой путь <br />к образованию</h2>
            <p className="text-gray-400 mb-10">Оставьте заявку, и наш эксперт свяжется с вами в течение 15 минут для подробной консультации.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Звонок</div>
                  <div className="font-bold">+34 983 889 093</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Email</div>
                  <div className="font-bold">hello@spaceforedu.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-12 md:p-20 border-l border-white/10">
            {state.success ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                <p className="text-gray-400">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-400 text-sm ml-1">Как вас зовут?</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="Иван Иванов" 
                  />
                  {state.errors?.name && <p className="text-red-400 text-sm ml-1">{state.errors.name[0]}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-400 text-sm ml-1">Номер телефона</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="+7 (999) 000-00-00" 
                  />
                  {state.errors?.phone && <p className="text-red-400 text-sm ml-1">{state.errors.phone[0]}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-400 text-sm ml-1">Ваше сообщение</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                    placeholder="Меня интересует бакалавриат в Мадриде..."
                  ></textarea>
                </div>

                {state.message && !state.success && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {state.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full bg-cyan-500 py-5 rounded-xl text-white font-bold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Отправка...
                    </>
                  ) : (
                    "Отправить заявку"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

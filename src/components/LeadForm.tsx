"use client";

import React, { useActionState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import { sendTelegramMessage } from '../app/actions';

interface LeadFormProps {
  className?: string;
  onSuccess?: () => void;
}

const LeadForm = ({ className = "", onSuccess }: LeadFormProps) => {
  const [state, formAction, isPending] = useActionState(sendTelegramMessage, {
    success: false,
    message: "",
  });

  // Effect to handle success callback if provided
  React.useEffect(() => {
    if (state.success && onSuccess) {
      const timer = setTimeout(() => {
        onSuccess();
      }, 3000); // Optional: close after 3 seconds or just let the user see the success message
      return () => clearTimeout(timer);
    }
  }, [state.success, onSuccess]);

  if (state.success) {
    return (
      <div className={`h-full flex flex-col items-center justify-center text-center animate-fadeIn ${className}`}>
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
        <p className="text-gray-400">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={`space-y-6 ${className}`}>
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
  );
};

export default LeadForm;

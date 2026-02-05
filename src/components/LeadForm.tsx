"use client";

import React, { useActionState } from 'react';
import { Loader2, CheckCircle2, ArrowRight, AlertCircle, Award, Clock } from 'lucide-react';
import { sendTelegramMessage } from '../app/actions';

interface LeadFormProps {
  className?: string;
  onSuccess?: () => void;
  withHeader?: boolean;
}

const LeadForm = ({ className = "", onSuccess, withHeader = true }: LeadFormProps) => {
  const [state, formAction, isPending] = useActionState(sendTelegramMessage, {
    success: false,
    message: "",
  });

  // Effect to handle success callback if provided
  React.useEffect(() => {
    if (state.success && onSuccess) {
      const timer = setTimeout(() => {
        onSuccess();
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [state.success, onSuccess]);

  if (state.success) {
    return (
      <div className={`h-full flex flex-col items-center justify-center text-center animate-fadeIn py-10 ${className}`}>
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="text-emerald-500 w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
        <p className="text-gray-400 max-w-xs mx-auto mb-6">{state.message}</p>
        <div className="text-sm text-gray-500">
           Менеджер свяжется с вами в ближайшее время
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Header Section - Conditionally rendered */}
      {withHeader && (
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-amber-400 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.1)]">
              <Award size={12} />
              Официальные партнеры
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-wider">
              <Clock size={12} />
              10+ лет опыта
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
            Профессиональная консультация
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Оставьте заявку, и мы составим для вас персональную стратегию поступления.
          </p>
        </div>
      )}

      <form action={formAction} className="space-y-5">
        
        {/* Service Selection */}
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Что вас интересует?</label>
          <div className="relative group">
            <select 
              id="service"
              name="service"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white/10 transition-all appearance-none cursor-pointer hover:border-white/20"
            >
              <option value="" className="bg-[#0f172a] text-gray-500">Выберите направление...</option>
              <option value="university" className="bg-[#0f172a]">ВУЗы Испании (Бакалавриат/Магистратура)</option>
              <option value="school" className="bg-[#0f172a]">Частные школы и колледжи</option>
              <option value="business" className="bg-[#0f172a]">Business Space (AI & Startups)</option>
              <option value="courses" className="bg-[#0f172a]">Языковые курсы</option>
              <option value="other" className="bg-[#0f172a]">Другой вопрос</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Info Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Имя</label>
            <input 
              id="name"
              name="name"
              type="text" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white/10 transition-all hover:border-white/20" 
              placeholder="Юрий Гагарин" 
            />
            {state.errors?.name && (
              <div className="flex items-center gap-1.5 text-red-400 text-xs ml-1 mt-1 animate-fadeIn">
                <AlertCircle size={12} />
                {state.errors.name[0]}
              </div>
            )}
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Телефон / WhatsApp</label>
            <input 
              id="phone"
              name="phone"
              type="tel" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white/10 transition-all hover:border-white/20" 
              placeholder="+34..." 
            />
            {state.errors?.phone && (
               <div className="flex items-center gap-1.5 text-red-400 text-xs ml-1 mt-1 animate-fadeIn">
               <AlertCircle size={12} />
               {state.errors.phone[0]}
             </div>
            )}
          </div>
        </div>
        
        {/* Message Area */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Комментарий</label>
          <textarea 
            id="message"
            name="message"
            rows={3} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:bg-white/10 transition-all resize-none hover:border-white/20" 
            placeholder="Например: хочу поступить на архитектуру..."
          ></textarea>
        </div>

        {/* Global Error Message */}
        {state.message && !state.success && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2 text-red-400 text-sm">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{state.message}</span>
          </div>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isPending}
          className="group w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Отправляем...
              </>
            ) : (
              <>
                Получить стратегию
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
        </button>
        
        <p className="text-center text-xs text-slate-500 mt-4">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  );
};

export default LeadForm;

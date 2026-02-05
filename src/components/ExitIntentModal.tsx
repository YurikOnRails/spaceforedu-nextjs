"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FileText, Download, X } from 'lucide-react';
import { sendTelegramMessage } from '../app/actions';

const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isDismissed && !isSubmitted) {
        // Only trigger once per session to avoid annoyance
        if (!sessionStorage.getItem('exit_intent_shown')) {
          setIsOpen(true);
          sessionStorage.setItem('exit_intent_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isDismissed, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Simulate API call or just log
    const formData = new FormData();
    formData.append('name', 'Lead Magnet Request');
    formData.append('phone', email); // Reusing phone field for email/contact
    formData.append('service', 'lead-magnet');
    
    await sendTelegramMessage(
      { success: false, message: '' }, 
      formData
    );
    
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-[30px] shadow-2xl overflow-hidden animate-fadeIn p-8 text-center">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20 rotate-3">
              <FileText className="text-white w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Подождите!</h3>
            <p className="text-gray-400 mb-6">
              Не уходите с пустыми руками. Скачайте бесплатно чек-лист <br/>
              <span className="text-cyan-400 font-bold">"ТОП-10 ошибок при поступлении в Испанию"</span>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="Ваш Email или WhatsApp"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button 
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Скачать чек-лист
              </button>
            </form>
            <button 
              onClick={handleClose}
              className="mt-4 text-gray-500 text-sm hover:text-gray-300 underline decoration-gray-700"
            >
              Нет, спасибо, я знаю всё сам
            </button>
          </>
        ) : (
          <div className="py-10">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">Отправлено!</h3>
            <p className="text-gray-400">Проверьте вашу почту/мессенджер через пару минут.</p>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ExitIntentModal;

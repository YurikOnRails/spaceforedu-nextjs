"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import LeadForm from './LeadForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-[30px] shadow-2xl overflow-hidden animate-fadeIn scale-100 opacity-100 transition-all">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h3 className="text-xl font-bold text-white">Бесплатная консультация</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            Получите бесплатный план зачисления и список подходящих заведений. Мы <span className="text-cyan-400 font-bold">гарантируем поступление</span> или вернем деньги.
          </p>
          <LeadForm onSuccess={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;

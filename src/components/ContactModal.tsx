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
        {/* Close Button Only (Header is inside LeadForm now) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer backdrop-blur-sm"
        >
          <X size={20} />
        </button>

        {/* Body */}
        <div className="p-6 sm:p-8 pt-10">
          <LeadForm onSuccess={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;

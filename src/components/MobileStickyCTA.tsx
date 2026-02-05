"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare, Calculator } from 'lucide-react';
import ContactModal from './ContactModal';
import ChancesCalculatorModal from './ChancesCalculatorModal';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden transition-all duration-700 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          
          {/* Chances Button - Minimalist / Ghost style */}
          <button 
            onClick={() => setIsCalculatorOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-gray-200 hover:bg-white/10 transition-all active:scale-95 group"
          >
            <Calculator size={16} className="text-purple-400 group-hover:text-purple-300" />
            <span className="text-xs font-bold uppercase tracking-wide">Шансы</span>
          </button>

          {/* Separator */}
          <div className="w-px h-4 bg-white/10"></div>

          {/* Consultation Button - Primary CTA */}
          <button 
            onClick={() => setIsContactOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-95"
          >
            <span className="text-xs font-bold uppercase tracking-wide">Консультация</span>
            <MessageSquare size={16} fill="currentColor" className="opacity-90" />
          </button>

        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ChancesCalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </>
  );
};

export default MobileStickyCTA;

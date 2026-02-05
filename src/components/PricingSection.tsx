"use client";

import React, { useState } from 'react';
import { Section } from './ui/Section';
import RevealOnScroll from './RevealOnScroll';
import { CheckCircle2 } from 'lucide-react';
import ContactModal from './ContactModal';

export interface Plan {
  name: string;
  price: string;
  features: string[];
  accent: boolean;
  desc?: string; // Optional description
}

interface PricingSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  highlightedWord?: string;
  plans: Plan[];
  accentColor?: string; // "cyan" or "purple" to determine styling classes
  buttonText?: string;
}

const PricingSection = ({ 
  id, 
  title, 
  subtitle, 
  highlightedWord, 
  plans, 
  accentColor = "cyan",
  buttonText = "Выбрать план"
}: PricingSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Dynamic classes based on accent color
  const getCardStyles = (isAccent: boolean) => {
    if (!isAccent) return 'bg-white/5 border-white/10';
    
    if (accentColor === 'purple') {
      return 'bg-gradient-to-b from-purple-900/40 to-black border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.2)]';
    }
    return 'bg-gradient-to-b from-cyan-900/40 to-black border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.2)]';
  };

  const getButtonStyles = (isAccent: boolean) => {
    if (!isAccent) return 'border border-white/20 text-white hover:bg-white/10';
    
    if (accentColor === 'purple') {
      return 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20';
    }
    return 'bg-cyan-500 text-white hover:bg-cyan-400';
  };

  const getIconColor = (isAccent: boolean) => {
    if (accentColor === 'purple') return 'text-purple-400';
    return 'text-cyan-400';
  };

  const getLabelColor = () => {
    if (accentColor === 'purple') return 'bg-purple-600';
    return 'bg-cyan-500';
  }

  const getHighlightColor = () => {
      if (accentColor === 'purple') return 'text-purple-400';
      return 'text-cyan-400';
  }

  return (
    <Section id={id} className="bg-black/40 backdrop-blur-md">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title} {highlightedWord && <span className={getHighlightColor()}>{highlightedWord}</span>}
        </h2>
        {subtitle && <p className="text-gray-400">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <RevealOnScroll key={i}>
            <div className={`relative p-10 rounded-3xl border transition-all hover:scale-105 duration-300 h-full flex flex-col ${getCardStyles(plan.accent)}`}>
              {plan.accent && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${getLabelColor()} text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg`}>
                  Популярный выбор
                </div>
              )}
              <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
              {plan.desc && <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>}
              <div className="text-4xl font-black text-white mb-8">{plan.price}</div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${getIconColor(plan.accent)}`} />
                    {f}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-4 rounded-xl font-bold transition-all cursor-pointer ${getButtonStyles(plan.accent)}`}
              >
                {buttonText}
              </button>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
};

export default PricingSection;

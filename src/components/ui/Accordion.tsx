"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  accentColor?: string;
}

export const AccordionItem = ({ title, content, isOpen, onToggle, accentColor = "text-cyan-400" }: AccordionItemProps) => {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
      <button 
        className="w-full p-6 text-left flex justify-between items-start text-white font-bold hover:bg-white/5 transition-colors cursor-pointer gap-4"
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} ${accentColor}`}>
          <Plus />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm animate-fadeIn border-t border-white/5 pt-4">
          {content}
        </div>
      )}
    </div>
  );
};

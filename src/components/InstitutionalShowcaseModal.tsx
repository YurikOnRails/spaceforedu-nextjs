"use client";

import React, { useEffect, useState } from 'react';
import { X, GraduationCap, Building2, School, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import ContactModal from './ContactModal';

interface Institution {
  name: string;
  location: string;
  ranking: string;
  image: string;
  type: 'university' | 'business' | 'school';
  tags: string[];
}

const INSTITUTIONS: Institution[] = [
  // Universities
  {
    name: "Universitat de Barcelona (UB)",
    location: "Барселона",
    ranking: "№1 в Испании (QS Ranking)",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
    type: 'university',
    tags: ["Медицина", "Гуманитарные науки", "Государственный"]
  },
  {
    name: "Universidad Complutense de Madrid",
    location: "Мадрид",
    ranking: "Топ-3 в Испании",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
    type: 'university',
    tags: ["Право", "Политология", "История"]
  },
  {
    name: "Universidad Autónoma de Madrid",
    location: "Мадрид",
    ranking: "Лидер по научным исследованиям",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600",
    type: 'university',
    tags: ["Физика", "Биология", "Государственный"]
  },
  {
    name: "Universidad de Navarra",
    location: "Памплона / Мадрид",
    ranking: "Лучший частный вуз Испании",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
    type: 'university',
    tags: ["Бизнес", "Медицина", "Частный"]
  },
  // Business Schools
  {
    name: "IE University / IE Business School",
    location: "Мадрид / Сеговия",
    ranking: "Топ-5 бизнес-школ мира",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    type: 'business',
    tags: ["MBA", "Предпринимательство", "Инновации"]
  },
  {
    name: "IESE Business School",
    location: "Барселона / Мадрид",
    ranking: "№1 в мире по версии Financial Times",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    type: 'business',
    tags: ["Executive MBA", "Лидерство", "Премиум"]
  },
  {
    name: "ESADE Business School",
    location: "Барселона",
    ranking: "Мировой лидер бизнес-образования",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600",
    type: 'business',
    tags: ["Финансы", "Право", "Интернациональность"]
  },
  // Private Schools
  {
    name: "King's College",
    location: "Мадрид / Аликанте",
    ranking: "Лучшая британская школа",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
    type: 'school',
    tags: ["British System", "IB", "Элитная"]
  },
  {
    name: "American School of Barcelona",
    location: "Барселона",
    ranking: "Лидер американского образования",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    type: 'school',
    tags: ["USA System", "Баскетбол", "Технологии"]
  },
  {
    name: "British Council School",
    location: "Мадрид",
    ranking: "Первая билингвальная школа",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    type: 'school',
    tags: ["Bilingual", "Культура", "Престиж"]
  },
  {
    name: "Sotogrande International School",
    location: "Кадис",
    ranking: "Топ-10 Apple Distinguished School",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    type: 'school',
    tags: ["IB", "Спорт", "Пансион"]
  }
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const InstitutionalShowcaseModal = ({ isOpen, onClose }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'university' | 'business' | 'school'>('university');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const filteredInstitutions = INSTITUTIONS.filter(item => item.type === activeTab);

  const tabs = [
    { id: 'university', label: 'ВУЗы', icon: <GraduationCap size={18} /> },
    { id: 'business', label: 'Бизнес-школы', icon: <Building2 size={18} /> },
    { id: 'school', label: 'Частные школы', icon: <School size={18} /> },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#020617] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 md:px-10 border-b border-white/10 bg-white/5 relative z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Топовые учебные заведения</h2>
            <p className="text-gray-400 text-sm hidden sm:block">Лучшие возможности для вашего образования в Испании</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-4 md:p-6 bg-white/5 border-b border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id 
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstitutions.map((item, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col">
                <div className="relative h-48">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 shadow-xl">
                    <Star size={10} fill="currentColor" />
                    PREMIUM
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <CheckCircle2 size={14} className="text-cyan-500" />
                    {item.location} • {item.ranking}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/5 text-[10px] text-gray-400 px-2 py-1 rounded-md border border-white/5 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="mt-auto w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-bold group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all flex items-center justify-center gap-2"
                  >
                    Узнать условия
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Insight Block */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-[40px] border border-white/10 relative overflow-hidden text-center">
             <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-4">Нужна помощь в выборе?</h4>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  В Испании более 80 государственных и 30 частных университетов, а также сотни международных школ. Мы подберем идеальный вариант именно под ваш бэкграунд и цели.
                </p>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-cyan-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                >
                  Получить персональную подборку
                </button>
             </div>
             {/* Abstract glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>,
    document.body
  );
};

export default InstitutionalShowcaseModal;

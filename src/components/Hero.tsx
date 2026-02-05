"use client";

import React, { useState } from 'react';
import { Star, ChevronRight, ShieldCheck, GraduationCap, Users, Mouse, ChevronDown, Calculator } from 'lucide-react';
import LogoMarquee from './ui/LogoMarquee';
import ContactModal from './ContactModal';
import InstitutionalShowcaseModal from './InstitutionalShowcaseModal';
import ChancesCalculatorModal from './ChancesCalculatorModal';

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-cinematic">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-cyan-400 text-sm mb-8 animate-[fadeIn_0.5s_ease-out_forwards]">
            <Star className="w-4 h-4 fill-cyan-400" />
            <span>№1 Агентство по образованию в Испании</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight animate-[fadeIn_0.7s_ease-out_0.2s_forwards] opacity-0">
            <span className="block mb-2 text-3xl md:text-6xl lg:text-7xl font-bold text-gray-100">
              ОБУЧЕНИЕ В ИСПАНИИ
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)] animate-text-shimmer">
              ПОСТУПЛЕНИЕ С ГАРАНТИЕЙ
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            Полное сопровождение в лучшие государственные и частные вузы Испании. 
            Мы берем на себя всю бюрократию, пока вы готовитесь к новой жизни.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 group cursor-pointer active:scale-95 transform duration-200"
            >
              Бесплатная консультация
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setIsCalculatorOpen(true)}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2 group backdrop-blur-md active:scale-95 transform duration-200 hover:border-white/20"
            >
              <Calculator className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Рассчитать шансы</span>
              <span className="text-white/40 text-xs sm:text-sm font-normal">(1 мин)</span>
            </button>
          </div>
        </div>

        <LogoMarquee />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">

          {[
            { icon: <ShieldCheck />, title: "100% Гарантия", desc: "Возвращаем деньги, если вы не поступите" },
            { icon: <GraduationCap />, title: "200+ ВУЗов", desc: "Доступ ко всем учебным заведениям Испании" },
            { icon: <Users />, title: "500+ Студентов", desc: "Успешно зачислены в этом году" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl text-left hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
        <Mouse className="w-6 h-6 text-gray-400" />
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ChancesCalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </section>
  );
};

export default Hero;


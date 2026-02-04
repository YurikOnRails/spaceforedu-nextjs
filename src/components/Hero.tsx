"use client";

import React, { useState } from 'react';
import { Star, ChevronRight, ShieldCheck, GraduationCap, Users, Mouse, ChevronDown } from 'lucide-react';
import Starfield from './Starfield';
import LogoMarquee from './ui/LogoMarquee';
import ContactModal from './ContactModal';
import InstitutionalShowcaseModal from './InstitutionalShowcaseModal';

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#020617]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <Starfield />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-cinematic">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-cyan-400 text-sm mb-8">
            <Star className="w-4 h-4 fill-cyan-400" />
            <span>№1 Агентство по образованию в Испании</span>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            <span className="block mb-2 text-3xl md:text-6xl lg:text-7xl font-bold text-gray-100">
              ОБУЧЕНИЕ В ИСПАНИИ
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)] animate-text-shimmer">
              ПОСТУПЛЕНИЕ С ГАРАНТИЕЙ
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            Полное сопровождение в лучшие государственные и частные вузы Испании. 
            Мы берем на себя всю бюрократию, пока вы готовитесь к новой жизни.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="bg-cyan-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-600 transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
            >
              Бесплатная консультация
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setIsShowcaseOpen(true)}
              className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all cursor-pointer"
            >
              Посмотреть вузы
            </button>
          </div>
        </div>

        <LogoMarquee />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          {[
            { icon: <ShieldCheck />, title: "100% Гарантия", desc: "Возвращаем деньги, если вы не поступите" },
            { icon: <GraduationCap />, title: "200+ ВУЗов", desc: "Доступ ко всем учебным заведениям Испании" },
            { icon: <Users />, title: "500+ Студентов", desc: "Успешно зачислены в этом году" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-left hover:border-cyan-500/50 transition-colors">
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
        <Mouse className="w-6 h-6 text-gray-400" />
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <InstitutionalShowcaseModal isOpen={isShowcaseOpen} onClose={() => setIsShowcaseOpen(false)} />
    </section>
  );
};

export default Hero;


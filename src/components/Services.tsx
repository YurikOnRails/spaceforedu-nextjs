"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import RevealOnScroll from './RevealOnScroll';
import ContactModal from './ContactModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    "Сопровождение в государственные вузы под ключ",
    "Профессиональная подготовка к экзаменам",
    "Подбор сертификата DELE/SIELE",
    "Помощь с визой и ВНЖ в Испании",
    "Признание аттестатов и дипломов (Омологация)",
    "Professional Talent Consulting"
  ];

  return (
    <section id="Услуги" className="py-16 md:py-32 bg-black/20 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Наши профессиональные <br />
                <span className="text-cyan-400">услуги</span>
              </h2>
              <p className="text-gray-400 mb-12 text-lg">
                Мы разработали уникальную систему сопровождения, которая минимизирует риски отказа и делает процесс переезда легким и понятным.
              </p>
              <div className="space-y-4">
                {services.map((service, i) => (
                  <div 
                    key={i} 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-4 group cursor-pointer bg-white/5 p-4 rounded-xl border border-transparent hover:border-cyan-500/30 transition-all hover:bg-white/10"
                  >
                    <div className="w-6 h-6 rounded-full border border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              <Image 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200" 
                alt="Students in Spain" 
                width={1000}
                height={667}
                className="w-full h-auto"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            {/* Decorative orbit */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-cyan-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-cyan-500/10 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Services;

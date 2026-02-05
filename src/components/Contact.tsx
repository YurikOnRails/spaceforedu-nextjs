"use client";

import React from 'react';
import { Phone, Mail } from 'lucide-react';
import LeadForm from './LeadForm';

const Contact = () => {
  return (
    <section id="Contact" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="flex-1 p-8 md:p-20 bg-cyan-950/20 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Гарантируем поступление <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  в учебные заведения Испании
                </span>
              </h2>
              <div className="w-16 h-1 bg-cyan-500 rounded-full mb-8"></div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 max-w-md">
                Получите бесплатный план зачисления и список подходящих заведений за <span className="text-cyan-400 font-bold">15 минут</span>. Если вы не поступите — мы вернем деньги.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 text-white group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 border border-white/10 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-all duration-300 shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Звонок</div>
                    <a href="tel:+34983889093" className="text-lg font-bold hover:text-cyan-400 transition-colors whitespace-nowrap">+34 983 889 093</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 text-white group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 border border-white/10 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-all duration-300 shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">Email</div>
                    <a href="mailto:hello@spaceforedu.com" className="text-lg font-bold hover:text-cyan-400 transition-colors whitespace-nowrap">hello@spaceforedu.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-12 md:p-20 border-l border-white/10">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

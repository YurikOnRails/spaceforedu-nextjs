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
          <div className="flex-1 p-12 md:p-20 bg-cyan-900/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Начните свой путь <br />к образованию</h2>
            <p className="text-gray-400 mb-10">Оставьте заявку, и наш эксперт свяжется с вами в течение 15 минут для подробной консультации.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <a href="tel:+34983889093" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                  <Phone size={20} />
                </a>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Звонок</div>
                  <a href="tel:+34983889093" className="font-bold hover:text-cyan-400 transition-colors">+34 983 889 093</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <a href="mailto:hello@spaceforedu.com" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                  <Mail size={20} />
                </a>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Email</div>
                  <a href="mailto:hello@spaceforedu.com" className="font-bold hover:text-cyan-400 transition-colors">hello@spaceforedu.com</a>
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

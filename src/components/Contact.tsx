"use client";

import { Phone, Mail, MessageSquare, ShieldCheck, Star, UserCircle, Award, CheckCircle2 } from 'lucide-react';
import LeadForm from './LeadForm';

const Contact = () => {
  return (
    <section id="Contact" className="py-16 md:py-32 relative overflow-hidden bg-[#020617]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020617] to-[#020617] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_80px_rgba(0,0,0,0.6)]">
          
          {/* Left Side: Brand Authority & Trust */}
          <div className="flex-1 p-6 md:p-12 lg:p-16 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
            {/* Ambient Light */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-950/30 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <Award size={14} />
                Официальные партнеры ВУЗов
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Ваше будущее в Испании <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  начинается здесь
                </span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
                Мы берем на себя всю бюрократию. Вы получаете <span className="text-white font-semibold">персональную стратегию</span> поступления и гарантию результата, прописанную в договоре.
              </p>

              {/* Contact Links */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap gap-6 items-center">
               <a href="https://wa.me/34663689393" target="_blank" className="flex items-center gap-3 text-white hover:text-green-400 transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                    <MessageSquare size={18} />
                 </div>
                 <span className="font-medium">WhatsApp</span>
               </a>
               <a href="tel:+34983889093" className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors group">
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                    <Phone size={18} />
                 </div>
                 <span className="font-medium">+34 983 889 093</span>
               </a>
            </div>
          </div>
          </div>

          {/* Right Side: High-Conversion Form */}
          <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white/[0.02]">
            {/* Subtle glow effect behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="relative z-10 max-w-md mx-auto w-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  Экспертная консультация
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Заполните форму, и мы составим для вас <span className="text-white font-medium">персональный план поступления</span>. Это бесплатно и ни к чему вас не обязывает.
                </p>
              </div>
              <LeadForm withHeader={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import ContactModal from '../../components/ContactModal';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection from '../../components/PricingSection';
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Heart,
  ArrowRight,
  Mouse,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const AboutHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-transparent"></div>
      {/* Navy & Gold Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-amber-400 text-sm mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span>Ваш надежный партнер</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            ОБРАЗОВАНИЕ В ИСПАНИИ<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              С ГАРАНТИЕЙ БЕЗОПАСНОСТИ
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Наша цель - быть вашим надежным партнером в выборе будущего ваших детей при поступлении в школы, вузы и переезде в Испанию.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-500/20 cursor-pointer"
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              <ArrowRight size={20} />
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
        <Mouse className="w-6 h-6 text-gray-400" />
        <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

const GlobalReach = () => {
  const countries = [
    "Испания", "Швейцария", "Монако", "Франция", 
    "Россия", "Украина", "Белоруссия", "Казахстан", 
    "США", "Аргентина", "Мексика", "Чили", "Сингапур"
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Тысячи <span className="text-amber-400">судеб</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Деятельность компании отразилась на тысячах семей по всему миру. Мы строим мосты между континентами.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {countries.map((country, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 hover:border-amber-500/50 transition-colors cursor-default">
                <Globe size={16} className="text-amber-400" />
                <span className="text-gray-300 font-medium">{country}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const CoreValues = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 space-y-32">
      {/* Block 1: Safety & Turnkey */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-amber-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-amber-500/30 pb-2">
              <ShieldCheck size={18} />
              <span>Безопасность</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Подбор школы или вуза ”под ключ” с гарантией
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Воплощаем мечты родителей о будущем детей. Тарифные планы – это индивидуальные решения «под ключ», которые включают разные аспекты жизни ребенка, в том числе гарантии безопасности.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Забота о будущем</h4>
                    <p className="text-sm text-gray-400">Индивидуальные решения для каждой семьи</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                alt="Happy students" 
                fill
                className="object-cover"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Block 2: Multilingual & Support */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-amber-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-amber-500/30 pb-2">
              <Users size={18} />
              <span>Сервис</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Мультиязычность и полное сопровождение
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Мы говорим на русском, украинском, английском, испанском, немецком, французском и других языках. Мы полностью покрываем потребности иностранных клиентов.
              </p>
              <ul className="space-y-4">
                {[
                  "Выбор школы или вуза ”под ключ”",
                  "Решение бытовых и юридических вопросов",
                  "Иммиграционная поддержка",
                  "Подбор жилья и оформление мед. страховки"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] -rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Support team" 
                fill
                className="object-cover"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default function About() {
  const plans = [
    {
      name: "План Планета",
      price: "",
      desc: "Базовый уровень",
      features: [
        "Подбор лучшего варианта школы или вуза",
        "Сопровождение при поступлении и оформление как в частном, так и в государственном учреждении Испании"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "",
      desc: "Оптимальный уровень",
      features: [
        "Индивидуальный подбор школы или вуза",
        "Гарантия поступления 100%",
        "Безопасность обучения",
        "Трудовая практика и трудоустройство",
        "Легализация в Европе"
      ],
      accent: true
    },
    {
      name: "План Галактика",
      price: "",
      desc: "Максимальный уровень",
      features: [
        "Поступление и в частный и в государственный университет Испании",
        "Признание дипломов в Испании",
        "Сопровождение в подборе студенческой резиденции",
        "Оформление мед страховки в Испании школьного образования в Министерстве Образования Испании"
      ],
      accent: false
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      <Navbar />
      <AboutHero />
      <GlobalReach />
      <CoreValues />
      <PricingSection
        id="Тарифы"
        title="Тарифные"
        highlightedWord="пакеты"
        subtitle="Комфортабельное решение «под ключ» с гарантией поступления"
        plans={plans}
        accentColor="purple"
        buttonText="консультация"
      />
      <Contact />
      <Footer />
    </div>
  );
}

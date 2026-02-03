"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import { 
  FileCheck, 
  Stamp, 
  Scale, 
  ScrollText, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';

const OmissionHero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[#020617]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <RevealOnScroll>
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-emerald-400 text-sm mb-8">
          <Stamp className="w-4 h-4" />
          <span>Легализация документов в Испании</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          ОМОЛОГАЦИЯ<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            ДИПЛОМОВ И АТТЕСТАТОВ
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Признание ваших документов об образовании в Испании. Мы берем на себя взаимодействие с Министерством образования, переводы и бюрократию.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-500/20 cursor-pointer">
            Начать процесс
            <ArrowRight size={20} />
          </button>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const WhatIsIt = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" 
                alt="Documents processing" 
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">Volante</div>
                  <div className="text-gray-400 text-xs">Временная справка</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Позволяет начать учиться до завершения официальной процедуры.</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Зачем нужна <span className="text-emerald-400">омологация?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Homologación — это официальное признание вашего иностранного диплома или аттестата эквивалентным испанскому. Без этого процесса невозможно поступить в государственный университет или работать по специальности в Испании.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex gap-4 items-start">
                  <BookOpen className="text-emerald-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Для школьников</h3>
                    <p className="text-gray-400">
                      Необходима для зачисления в испанские школы (начиная с 4 класса). Обычно достаточно подать заявление и получить "Volante", чтобы ребенка приняли условно.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex gap-4 items-start">
                  <Scale className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Для студентов ВУЗов</h3>
                    <p className="text-gray-400">
                      Обязательна для поступления в государственные университеты (через UNEDassis) или для продолжения обучения в магистратуре.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Documents = () => {
  const docs = [
    { icon: <ScrollText />, text: "Аттестат/Диплом с приложением" },
    { icon: <Globe />, text: "Апостиль на оригиналах" },
    { icon: <Scale />, text: "Присяжный перевод (Traducción Jurada)" },
    { icon: <FileCheck />, text: "Копия загранпаспорта" },
    { icon: <Stamp />, text: "Оплата госпошлины (Tasa 079)" },
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Необходимые <span className="text-emerald-400">документы</span>
            </h2>
            <p className="text-gray-400">Стандартный пакет для подачи в Министерство образования</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {docs.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-8 py-6 rounded-xl flex items-center gap-4 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                <div className="text-emerald-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default function SpaceOmission() {
  const plans = [
    {
      name: "Базовый",
      price: "450€",
      desc: "Только подача",
      features: [
        "Аудит документов",
        "Заполнение заявления (Modelo 790)",
        "Подача документов в Министерство",
        "Получение Volante"
      ],
      accent: false
    },
    {
      name: "Стандарт",
      price: "850€",
      desc: "С переводами",
      features: [
        "Все услуги тарифа Базовый",
        "Присяжный перевод (Traductor Jurado)",
        "Оплата госпошлин включена",
        "Контроль статуса заявки"
      ],
      accent: true
    },
    {
      name: "Премиум",
      price: "1,500€",
      desc: "Сложные случаи",
      features: [
        "Работа с отказами",
        "Омологация медицинских дипломов",
        "Ускоренная процедура (где возможно)",
        "Персональный менеджер"
      ],
      accent: false
    }
  ];

  const faqs = [
    { q: "Сколько времени занимает омологация?", a: "Для школьных аттестатов процесс занимает от 3 до 6 месяцев. Для университетских дипломов сроки могут варьироваться от 9 месяцев до 2 лет в зависимости от загруженности Министерства." },
    { q: "Можно ли учиться, пока идет процесс?", a: "Да! При подаче документов мы получаем 'Volante de Inscripción Condicional', который позволяет вам зачислиться в учебное заведение условно." },
    { q: "Нужен ли оригинал диплома?", a: "Мы не забираем ваши оригиналы. Нам потребуются только заверенные копии или сканы, а оригиналы вы предъявляете только при необходимости сверки." },
    { q: "Что такое присяжный перевод?", a: "Это официальный перевод (Traducción Jurada), выполненный переводчиком, сертифицированным МИД Испании. Обычный нотариальный перевод из РФ/СНГ часто не принимается." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      <Navbar />
      <OmissionHero />
      <WhatIsIt />
      <Documents />
      <PricingSection
        id="Тарифы"
        title="Стоимость"
        highlightedWord="услуг"
        subtitle="Прозрачные цены на бюрократические услуги"
        plans={plans}
        accentColor="purple" // Re-using purple styled cards but with custom content context, or could define green in PricingSection if updated. Let's stick to existing logic, effectively purple highlights or add green support.
        // Wait, PricingSection only supports 'cyan' or 'purple' based on previous code. I will use 'purple' for contrast or update component. 
        // Let's use 'purple' for now as it's safe, or update component to support custom colors. 
        // Actually, let's keep it 'purple' to imply 'Business/Formal' or stick to 'cyan'. 
        // Re-reading: The Hero is Emerald. It would be nice if Pricing matched.
        // I'll update the component separately if needed, but for now 'cyan' or 'purple' are the options. Let's use 'cyan' as a neutral option or 'purple' for premium.
        // Actually, I can pass a class via a new prop or just accept the limitation. Let's stick to 'cyan' to match the Space theme if Emerald isn't available in PricingSection logic.
      />
      <FAQSection
        title="Вопросы об"
        highlightedWord="омологации"
        items={faqs}
        accentColor="text-emerald-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

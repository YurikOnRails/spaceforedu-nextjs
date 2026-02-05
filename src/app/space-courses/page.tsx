"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import { 
  Languages, 
  MessageCircle, 
  Users, 
  GraduationCap, 
  BrainCircuit, 
  Target,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

const CoursesHero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-transparent"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <RevealOnScroll>
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-orange-400 text-sm mb-8">
          <Languages className="w-4 h-4" />
          <span>Испанский язык без границ</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
          КУРСЫ ИСПАНСКОГО<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
            ОТ ПЕРВЫХ СЛОВ ДО DELE
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Курсы испанского для взрослых и детей от первых слов до DELE2
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-orange-500/20 cursor-pointer">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            <ArrowRight size={20} />
          </button>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Target size={32} />,
      title: "Подбор курсов",
      desc: "Поможем определить уровень владения испанским языком. Подберем подходящие курсы и программы по изучению испанского."
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Практика с носителями",
      desc: "Обеспечим разговорную практику и расширение словарного запаса."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Занятия для детей",
      desc: "Подготовим вашего ребенка к аттестации по испанскому языку."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-colors group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const InfoBlocks = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 space-y-32">
      {/* Block 1 */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-orange-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-orange-500/30 pb-2">
              <BrainCircuit size={18} />
              <span>Важность языка</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Для адаптации и успешной учебы в новой среде
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Для адаптации и успешной учебы в новой среде, очень важно хорошо владеть испанским языком. Рекомендуется посещение курсов испанского языка и дополнительные уроки для овладения свободным разговорным на испанском.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="text-white font-medium italic">
                  "Для минимального уровня испанского языка обычно требуется знать около 500 различных слов. Это включает базовую лексику и фразы: знакомство, покупки, деловая поездка."
                </p>
              </div>
              <p>
                Однако изучение дополнительных слов и фраз поможет школьнику лучше разговаривать на испанском языке.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] rotate-2 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                alt="Language learning" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Block 2 */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-orange-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-orange-500/30 pb-2">
              <Sparkles size={18} />
              <span>Методика</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Как работает услуга<br />«Курсы испанского языка»
            </h2>
            <ul className="space-y-4 text-gray-400 text-lg leading-relaxed">
              {[
                "Обучаем языку, используя разнообразные ресурсы: учебники, онлайн-уроки, видео и аудиотреки.",
                "Постоянно обновляем методы обучения.",
                "Обеспечиваем практику разговорной речи, как индивидуально, так и в малых группах.",
                "Помогаем погрузиться в языковую среду, чтобы стать более сфокусированным на изучении испанского.",
                "Контролируем процесс обучения, постоянно фиксируем прогресс."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] -rotate-2 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default function SpaceCourses() {
  const plans = [
    {
      name: "План Планета",
      price: "",
      desc: "Для начинающих",
      features: [
        "Подбор лучшего варианта школы или вуза",
        "Сопровождение при поступлении и оформление как в частном, так и в государственном учреждении Испании"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "",
      desc: "Интенсив",
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
      desc: "Полное погружение",
      features: [
        "Поступление и в частный и в государственный университет Испании",
        "Признание дипломов в Испании",
        "Сопровождение в подборе студенческой резиденции",
        "Оформление мед страховки в Испании школьного образования в Министерстве Образования Испании"
      ],
      accent: false
    }
  ];

  const faqs = [
    { q: "Заговорить по-испански за 70 часов", a: "Наши интенсивные методики позволяют получить базовые разговорные навыки в кратчайшие сроки." },
    { q: "Получи сертификат DELE B2", a: "Специализированная подготовка к официальным экзаменам Института Сервантеса." },
    { q: "Индивидуальная подготовка к экзаменам", a: "Персональные занятия с репетитором для устранения пробелов и сдачи тестов." }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-orange-500/30 selection:text-orange-200 font-sans">
      <Navbar />
      <CoursesHero />
      <Features />
      <InfoBlocks />
      <PricingSection
        id="Тарифы"
        title="Тарифные"
        highlightedWord="пакеты"
        plans={plans}
        accentColor="purple" 
        buttonText="консультация"
      />
      <FAQSection
        title="Популярные"
        highlightedWord="курсы"
        items={faqs}
        accentColor="text-orange-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

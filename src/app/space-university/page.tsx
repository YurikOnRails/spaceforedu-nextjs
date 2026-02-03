"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import { 
  GraduationCap, 
  BookOpen, 
  Landmark, 
  Briefcase, 
  Globe, 
  Award,
  ScrollText,
  Compass,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const UniversityHero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[#020617]"></div>
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-cyan-400 text-sm mb-8">
              <Landmark className="w-4 h-4" />
              <span>Высшее образование в Европе</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              УНИВЕРСИТЕТЫ<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                ИСПАНИИ
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl mx-auto lg:mx-0 mb-10">
              Ваш диплом — это пропуск в глобальную карьеру. Мы поможем поступить в топовые государственные и частные вузы, даже если вы не знаете испанский.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 cursor-pointer">
                Подобрать ВУЗ
                <ArrowRight size={20} />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all cursor-pointer">
                Узнать шансы
              </button>
            </div>
          </RevealOnScroll>
        </div>
        
        <div className="flex-1 relative hidden lg:block">
          <RevealOnScroll>
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" 
                alt="Students walking in university campus" 
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500 rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Award className="text-cyan-400" />, title: "Европейский Диплом", desc: "Признается во всем мире, открывая двери в международные корпорации." },
            { icon: <Globe className="text-purple-400" />, title: "Язык обучения", desc: "Учитесь на английском, испанском или билингвальных программах." },
            { icon: <Briefcase className="text-green-400" />, title: "Стажировки", desc: "Обязательная практика в компаниях — часть учебного процесса." },
            { icon: <ScrollText className="text-pink-400" />, title: "Без ЕГЭ", desc: "Поступление по результатам легализации аттестата и внутренних тестов." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    {
      icon: <Compass size={32} />,
      title: "Стратегия и Выбор",
      desc: "Анализируем ваш бэкграунд. Подбираем ВУЗы (государственные или частные) и программы, где вы точно сможете учиться и получить визу."
    },
    {
      icon: <ScrollText size={32} />,
      title: "Документы и Омологация",
      desc: "Самый сложный этап мы берем на себя. Легализация аттестата, присяжные переводы, подача заявок в UNEDassis и университеты."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Зачисление и Виза",
      desc: "Получаем 'Carta de admisión', готовим досье для консульства, помогаем с поиском жилья и оформлением страховки для переезда."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Как мы <span className="text-cyan-400">поступаем</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Поступление в Испанию — это бюрократический квест. Мы знаем все короткие пути и подводные камни.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  {i + 1}
                </div>
                <div className="mt-6 text-center">
                  <div className="flex justify-center text-cyan-400 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default function SpaceUniversity() {
  const plans = [
    {
      name: "План Планета",
      price: "1,500€",
      desc: "Для самостоятельных",
      features: [
        "Подбор 3-х университетских программ",
        "Аудит документов и шансов",
        "Инструкция по легализации (Омологация)",
        "Подача заявок в 3 вуза"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "3,500€",
      desc: "Оптимальный выбор",
      features: [
        "Стратегия поступления под ключ",
        "Полное сопровождение омологации",
        "Регистрация в UNEDassis",
        "Подача заявок (до 7 вузов)",
        "Визовое сопровождение"
      ],
      accent: true
    },
    {
      name: "План Галактика",
      price: "5,900€",
      desc: "Максимальный комфорт",
      features: [
        "Все услуги плана Космос",
        "Гарантированное поступление (частные вузы)",
        "Подбор жилья и общежития",
        "Сопровождение в Испании (TIE, банк, сим-карта)",
        "Личный менеджер 24/7"
      ],
      accent: false
    }
  ];

  const faqs = [
    { q: "Можно ли поступить сразу после школы?", a: "Да, российские/СНГ аттестаты признаются в Испании. Процесс называется 'омологация'. Мы помогаем начать учебу еще до получения официального подтверждения (volante)." },
    { q: "Нужно ли сдавать ЕГЭ?", a: "Для испанских вузов ЕГЭ не является обязательным критерием (хотя в некоторых случаях может учитываться). Главное — это средний балл аттестата и, для госвузов, сдача экзаменов PCE (испанский аналог ЕГЭ)." },
    { q: "Можно ли учиться на английском?", a: "Конечно. В Испании огромный выбор программ Bachelor Degree полностью на английском языке, особенно в бизнес-школах и частных университетах Мадрида и Барселоны." },
    { q: "Можно ли работать во время учебы?", a: "Студенческая виза позволяет работать до 30 часов в неделю. Также после окончания вуза вы можете остаться на год для поиска работы." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      <Navbar />
      <UniversityHero />
      <Features />
      <Process />
      <PricingSection
        id="Тарифы"
        title="Инвестируйте в"
        highlightedWord="карьеру"
        subtitle="Прозрачные условия поступления в лучшие вузы Европы"
        plans={plans}
        accentColor="cyan"
        buttonText="Выбрать программу"
      />
      <FAQSection
        title="Частые вопросы"
        highlightedWord="абитуриентов"
        items={faqs}
        accentColor="text-cyan-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

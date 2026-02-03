"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection, { Plan } from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import { 
  Bot, 
  Cpu, 
  Database, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Users,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const ProHero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[#020617]"></div>
    {/* Tech/AI theme - Blue/Teal/Neon */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <RevealOnScroll>
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-blue-400 text-sm mb-8">
          <Bot className="w-4 h-4" />
          <span>Business Space</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
          ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            В ВАШЕМ БИЗНЕСЕ
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
          Обучите вашу команду современным инструментам, а мы позаботимся, чтобы программа обучения была адаптирована под ваш продукт и рынок.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-blue-500/20 cursor-pointer">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            <ArrowRight size={20} />
          </button>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Solutions = () => {
  const solutions = [
    {
      icon: <Database size={32} />,
      title: "Data Bootcamps",
      desc: "Для прокачки команды. Обучение работе с данными, аналитике и инструментам AI для принятия решений."
    },
    {
      icon: <Users size={32} />,
      title: "Talent Factory",
      desc: "6 месяцев командной работы. Автоматизация продаж, сервиса и изменение матриц взаимодействия."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Integration",
      desc: "Автоматизация рутинных задач, анализ больших объемов данных и персонализированные стратегии."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((item, i) => (
              <div key={i} className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
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
      {/* Block 1: AI Context */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-blue-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-blue-500/30 pb-2">
              <TrendingUp size={18} />
              <span>Конкурентное преимущество</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Бизнес-программы на основе AI
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Один из инструментов, который важен для принятия корректных решений это владение информацией и скорость. Можно долго читать и анализировать открытия последних лет, а можно научиться создавать код, который позволит осознать и воспользоваться тенденциями и возможностями.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="italic text-gray-300">
                  "Ваш бизнес уже может быть эффективнее, обучите вашу команду современным инструментам."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Technology" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Block 2: Transform Business */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-3 text-blue-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-blue-500/30 pb-2">
              <Zap size={18} />
              <span>Трансформация</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Индивидуальные образовательные курсы
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Наша цель - помочь вам выразить уникальность через:
              </p>
              <ul className="space-y-4">
                {[
                  "Создание индивидуального стиля продукта и услуг",
                  "Пересмотр бизнес-процессов для повышения эффективности",
                  "Повышение мотивации в команде",
                  "Увеличение прибыли"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-white border-t border-white/10 pt-4 mt-4">
                Мы гарантируем, что программа будет разработана специально для вашего бизнеса.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] -rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                alt="Business Transformation" 
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

export default function SpacePro() {
  const plans: Plan[] = [
    {
      name: "Data Bootcamps",
      price: "По запросу",
      desc: "Интенсив для команды",
      features: [
        "Обучение работе с данными",
        "Инструменты AI для принятия решений",
        "Адаптация под ваш рынок",
        "Практические кейсы"
      ],
      accent: false
    },
    {
      name: "AI в Бизнесе",
      price: "По запросу",
      desc: "Полная интеграция",
      features: [
        "Автоматизация рутинных задач",
        "Анализ больших объемов данных",
        "Персонализированный маркетинг",
        "Безопасность данных"
      ],
      accent: true
    },
    {
      name: "Talent Factory",
      price: "По запросу",
      desc: "6 месяцев сопровождения",
      features: [
        "Командная работа (6 месяцев)",
        "Внедрение алгоритмов продаж",
        "Изменение матриц взаимодействия",
        "Развитие талантов сотрудников"
      ],
      accent: false
    }
  ];

  const faqs = [
    { q: "Зачем AI моему бизнесу?", a: "AI позволяет автоматизировать рутину, быстрее принимать решения на основе данных и повысить качество обслуживания клиентов." },
    { q: "Как проходит обучение?", a: "Мы предлагаем как интенсивные буткемпы (Data Bootcamps), так и длительные программы сопровождения (Talent Factory) сроком на 6 месяцев." },
    { q: "Это подходит для любого бизнеса?", a: "Да, программы адаптируются под ваш конкретный продукт, рынок и цели, будь то увеличение прибыли или пересмотр процессов." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      <Navbar />
      <ProHero />
      <Solutions />
      <InfoBlocks />
      <PricingSection
        id="Тарифы"
        title="Курсы для"
        highlightedWord="бизнеса"
        subtitle="Выберите курс, который изменит ваше будущее"
        plans={plans}
        accentColor="cyan" // Using cyan/blue theme for tech vibe
        buttonText="ЗАПИСАТЬСЯ"
      />
      <FAQSection
        title="Вопросы про"
        highlightedWord="AI в бизнесе"
        items={faqs}
        accentColor="text-blue-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

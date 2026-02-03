"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import { 
  BookOpen, 
  BrainCircuit, 
  Lightbulb, 
  Calendar, 
  UserCheck,
  GraduationCap,
  ArrowRight,
  Pencil
} from 'lucide-react';
import Image from 'next/image';

const TutoringHero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[#020617]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <RevealOnScroll>
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-pink-400 text-sm mb-8">
          <BookOpen className="w-4 h-4" />
          <span>Extraescolares в Испании</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          ВНЕКЛАССНЫЕ ЗАНЯТИЯ<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500">
            И РЕПЕТИТОРСТВО
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Обеспечим вашему ребенку эффективную дополнительную помощь и поддержку в учебе.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-pink-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-pink-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-pink-500/20 cursor-pointer">
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
      icon: <BrainCircuit size={32} />,
      title: "Репетиторство",
      desc: "Обеспечим вашему ребенку эффективную дополнительную помощь и поддержку в учебе. Поможем улучшить понимание материалов школьной программы."
    },
    {
      icon: <Calendar size={32} />,
      title: "Планирование учебы",
      desc: "Поможем развить навыки самоорганизации и концентрации. Обучим стратегиям изучения школьных дисциплин, поможем с планированием учебы."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Мотивация ребенка",
      desc: "Наша помощь будет источником мотивации и вдохновения вашему ребенку."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-pink-500/50 transition-colors group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
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
            <div className="inline-flex items-center gap-3 text-pink-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-pink-500/30 pb-2">
              <UserCheck size={18} />
              <span>Индивидуальный подход</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Репетиторство для школьников в Испании
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Является популярной и эффективной формой дополнительного образования. Вместе с тем, это отличная возможность для школьников получить дополнительную помощь и поддержку в учебе.
              </p>
              <p>
                Одной из основных причин, по которым родители обращаются к репетиторам, является желание обеспечить успех своего ребенка в учебе. Некоторым детям может быть трудно справиться с определенными предметами или концепциями, и репетитор может помочь прояснить эти вопросы и улучшить понимание материала. Репетиторы часто имеют специализацию в определенных предметах, что позволяет им предоставлять более глубокую помощь и знания в этой области.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
                alt="Tutoring session" 
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
            <div className="inline-flex items-center gap-3 text-pink-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-pink-500/30 pb-2">
              <Pencil size={18} />
              <span>Процесс</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Как работает услуга<br />«Репетиторство»
            </h2>
            <ul className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-pink-500 flex-shrink-0" />
                <span>
                  Поможем определить сильные стороны ребенка, его интересы и увлечения. Опираясь на полученные результаты, разработаем персонализированный план, который учитывает уровень знаний и области, требующие наибольшего внимания.
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-pink-500 flex-shrink-0" />
                <span>
                  Подготовим к поступлению в вузы Испании. Индивидуальная подготовка позволяет студентам глубже усвоить материалы, работать над индивидуальными проектами и достичь лучших результатов на экзаменах.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] -rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Student studying" 
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

export default function SpaceTutoring() {
  const plans = [
    {
      name: "План Планета",
      price: "",
      desc: "",
      features: [
        "Подбор лучшего варианта школы или вуза",
        "Сопровождение при поступлении и оформление как в частном, так и в государственном учреждении Испании"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "",
      desc: "",
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
      desc: "",
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
    { q: "Какие предметы можно подтянуть?", a: "Мы работаем со всеми предметами школьной программы Испании: математика, физика, химия, испанский язык и литература, история и другие." },
    { q: "Занятия проходят онлайн или очно?", a: "Мы предлагаем оба формата. Вы можете выбрать удобный для вас вариант в зависимости от местоположения и предпочтений ребенка." },
    { q: "Вы готовите к вступительным экзаменам?", a: "Да, мы специализируемся на подготовке к PCE (Pruebas de Competencias Específicas) для иностранных студентов и EBAU." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-pink-500/30 selection:text-pink-200 font-sans">
      <Navbar />
      <TutoringHero />
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
        title="Частые"
        highlightedWord="вопросы"
        items={faqs}
        accentColor="text-pink-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

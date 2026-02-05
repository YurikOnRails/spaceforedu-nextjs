"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import ContactModal from '../../components/ContactModal';
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
  Pencil,
  Sparkles,
  Target,
  Mouse,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const TutoringHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-indigo-300 text-sm mb-8">
            <BookOpen className="w-4 h-4" />
            <span>Extraescolares в Испании</span>
          </div>
          <h1 className="text-3xl md:text-7xl font-black text-white mb-8 leading-tight">
            ВНЕКЛАССНЫЕ ЗАНЯТИЯ И<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
              РЕПЕТИТОРСТВО
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Обеспечим вашему ребенку эффективную дополнительную помощь и поддержку в учебе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none mx-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 group cursor-pointer active:scale-95 transform duration-200"
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
        <Mouse className="w-6 h-6 text-gray-400" />
        <ChevronDown className="w-4 h-4 text-pink-400 animate-bounce" />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

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
      desc: "Наша помощь будет источником мотивации и вдохновения вашему ребенку. Превратим сложный процесс в увлекательное путешествие."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="relative bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <RevealOnScroll>
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 text-indigo-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            <Sparkles size={18} />
            <span>Преимущества</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Почему родители выбирают <span className="text-indigo-300">нас?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {[
            {
              icon: <Target className="text-pink-400" size={32} />,
              title: "Успех в учебе",
              desc: "Обеспечиваем успех вашего ребенка, помогая разобраться с трудными предметами."
            },
            {
              icon: <UserCheck className="text-purple-400" size={32} />,
              title: "Глубокие знания",
              desc: "Наши репетиторы имеют специализацию, предоставляя более глубокую помощь в конкретных областях."
            },
            {
              icon: <BrainCircuit className="text-indigo-400" size={32} />,
              title: "Преодоление трудностей",
              desc: "Помогаем прояснить сложные вопросы и улучшить понимание материала, с которым ребенку трудно справиться."
            }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const InfoBlocks = () => (
  <section className="py-16 md:py-24 relative overflow-hidden">
    <div className="container mx-auto px-6 space-y-16 md:space-y-32">
      {/* Block 1 */}
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-3 text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm border-b border-indigo-500/30 pb-2">
              <UserCheck size={18} />
              <span>Индивидуальный подход</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
              Репетиторство для школьников в Испании
            </h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Является популярной и эффективной формой дополнительного образования. Вместе с тем, это отличная возможность для школьников получить дополнительную помощь и поддержку в учебе.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-indigo-500">
                <p className="italic text-gray-300">
                  "Одной из основных причин, по которым родители обращаются к репетиторам, является желание обеспечить успех своего ребенка в учебе."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
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
        <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-16 items-center">
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-3 text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm border-b border-indigo-500/30 pb-2">
              <Pencil size={18} />
              <span>Процесс</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
              Как работает услуга<br />«Репетиторство»
            </h2>
            <ul className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <li className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <span>
                  Поможем определить сильные стороны ребенка, его интересы и увлечения. Разработаем персонализированный план, учитывающий уровень знаний.
                </span>
              </li>
              <li className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <span>
                  Подготовим к поступлению в вузы Испании. Индивидуальная подготовка позволяет студентам глубже усвоить материалы и достичь лучших результатов.
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
      desc: "Базовый подбор",
      features: [
        "Подбор лучшего варианта школы или вуза",
        "Сопровождение при поступлении и оформление как в частном, так и в государственном учреждении Испании"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "",
      desc: "Полный пакет",
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
      desc: "VIP Сопровождение",
      features: [
        "Поступление и в частный и в государственный университет Испании",
        "Признание дипломов в Испании",
        "Сопровождение в подборе студенческой резиденции",
        "Оформление мед страховки в Испании"
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
    <div className="min-h-screen bg-transparent text-white selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      <Navbar />
      <TutoringHero />
      <Features />
      <WhyChooseUs />
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
        accentColor="text-indigo-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

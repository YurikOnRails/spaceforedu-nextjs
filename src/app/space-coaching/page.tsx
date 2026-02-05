"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import PricingSection from '../../components/PricingSection';
import FAQSection from '../../components/FAQSection';
import ContactModal from '../../components/ContactModal';
import { 
  Sparkles,
  User,
  GraduationCap,
  Award,
  Compass,
  Brain,
  ArrowRight,
  Target,
  Mouse,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const CoachingHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-transparent"></div>
      {/* Golden/Amber theme for "Talent" */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-amber-400 text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Тренируем таланты детей и подростков</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            PROFESSIONAL<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600">
              TALENT COACHING
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
            Профессиональный коучинг – это индивидуальный подход к обучению, гарантирующий максимальную эффективность учебного процесса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-500/20 cursor-pointer"
            >
              Раскрыть потенциал
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

const Benefits = () => {
  const benefits = [
    {
      icon: <User size={32} />,
      title: "Индивидуальный подход",
      desc: "Индивидуальный подход к каждому ребенку в процессе образования и личностного роста."
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Выбор учебного заведения",
      desc: "Помощь старшеклассникам с выбором специальности и высшего учебного заведения."
    },
    {
      icon: <Award size={32} />,
      title: "Даем гарантию",
      desc: "Гарантия успешного обучения и окончания школы."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ключевые <span className="text-amber-400">преимущества</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mt-10 mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
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
            <div className="inline-flex items-center gap-3 text-amber-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-amber-500/30 pb-2">
              <Brain size={18} />
              <span>Развитие навыков</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Коучинг — это больше, чем просто учеба
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                В рамках профессионального коучинга школьники получают не только необходимые знания и компетенции, но и активно развивают навыки самоорганизации, планирования и управления временем.
              </p>
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="italic text-gray-300">
                  "Это помогает им стать более самостоятельными и уверенными в своих действиях."
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Coaching session" 
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
            <div className="inline-flex items-center gap-3 text-amber-400 font-bold tracking-[0.2em] uppercase text-sm border-b border-amber-500/30 pb-2">
              <Compass size={18} />
              <span>Стратегия успеха</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Как работает услуга «Коучинг»
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Профессиональные коучи, специализирующиеся на поступлении в университеты Испании, обладают глубокими знаниями о системе образования и требованиях к студентам. Они помогают старшеклассникам:
              </p>
              <ul className="space-y-4">
                {[
                  "Определиться с выбором университета и специальности",
                  "Составить план действий",
                  "Разработать стратегию подготовки к поступлению",
                  "Выявить сильные и слабые стороны"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-white border-t border-white/10 pt-4 mt-4">
                Одним из главных преимуществ профессионального коучинга является гарантия успешного обучения и окончания школы.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[4/3] -rotate-1 hover:rotate-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategy planning" 
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

export default function SpaceCoaching() {
  const plans = [
    {
      name: "План Планета",
      price: "",
      desc: "Старт",
      features: [
        "Подбор лучшего варианта школы или вуза",
        "Сопровождение при поступлении и оформление как в частном, так и в государственном учреждении Испании"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "",
      desc: "Прогресс",
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
      desc: "Максимум",
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
    { q: "Как коучинг помогает с поступлением?", a: "Мы не просто подаем документы, а строим образовательную траекторию, которая соответствует талантам ребенка, что повышает мотивацию и шансы на успех." },
    { q: "С какого возраста можно начинать?", a: "Мы рекомендуем начинать профориентацию с 14-15 лет (средняя школа), чтобы осознанно выбрать профильные предметы (Bachillerato)." },
    { q: "Гарантируете ли вы результат?", a: "Да, наша методика позволяет гарантировать успешное окончание школы и поступление, так как мы подбираем программу, посильную и интересную ученику." }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      <Navbar />
      <CoachingHero />
      <Benefits />
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
        accentColor="text-amber-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

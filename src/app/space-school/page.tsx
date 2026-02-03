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
  FileCheck, 
  Users, 
  Globe, 
  School, 
  BrainCircuit,
  Languages,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const SchoolHero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[#020617]"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <RevealOnScroll>
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-purple-400 text-sm mb-8">
          <School className="w-4 h-4" />
          <span>Среднее образование в Европе</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          ШКОЛЫ ИСПАНИИ:<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            ФУНДАМЕНТ БУДУЩЕГО
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Откройте для своего ребенка двери в лучшие университеты мира. Мы гарантируем поступление в престижные частные и государственные школы Испании, избавляя вас от бюрократии и стресса.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-purple-500/20 cursor-pointer">
            Бесплатная консультация
            <ArrowRight size={20} />
          </button>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const Steps = () => {
  const steps = [
    {
      icon: <BrainCircuit size={32} />,
      title: "Стратегия и Подбор",
      desc: "Мы не просто ищем школу, мы строим образовательный маршрут. Анализируем таланты ребенка, ваши цели и бюджет, чтобы выбрать идеальное место (государственное или частное)."
    },
    {
      icon: <FileCheck size={32} />,
      title: "Бюрократия под ключ",
      desc: "Забудьте о сложностях перевода и легализации. Мы готовим полный пакет документов, переводим оценки, заполняем все формы и подаем заявки точно в срок."
    },
    {
      icon: <Users size={32} />,
      title: "Подготовка и Зачисление",
      desc: "Готовим ребенка к вступительным тестам и интервью. Организуем знакомство со школой (онлайн или лично) и сопровождаем вас до первого звонка."
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            Путь к зачислению <span className="text-purple-400">без стресса</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors relative group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mt-6 mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const SchoolTypes = () => (
  <section className="py-32 relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Какую школу <span className="text-cyan-400">выбрать?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Система образования Испании разнообразна. Мы поможем определиться с вектором развития вашего ребенка.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Международные (Private)</h3>
                  <p className="text-gray-400">
                    Идеально для карьеры в глобальном мире. Обучение на английском (British Council, American High School) или билингвальные программы. Дипломы IB (International Baccalaureate), открывающие двери в любые вузы мира.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Languages size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Государственные (Public)</h3>
                  <p className="text-gray-400">
                    Полное погружение в испанскую культуру и язык. Бесплатное или недорогое обучение, сильная социализация и интеграция в местное сообщество. Отличный старт для жизни в Испании.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Специализированные</h3>
                  <p className="text-gray-400">
                    Школы с уклоном в спорт, искусство или технологии. Поддержка талантов ребенка с ранних лет при сохранении высокого академического уровня.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="flex-1">
           <RevealOnScroll>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" 
                  alt="School in Spain" 
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                    <p className="text-white font-medium">"Испанские школы — это баланс между академической строгостью и счастьем ребенка. Здесь учат не только формулам, но и свободе мысли."</p>
                  </div>
                </div>
            </div>
           </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
);

export default function SpaceSchool() {
  const plans = [
    {
      name: "План Планета",
      price: "1,500€",
      desc: "Базовый старт",
      features: [
        "Подбор 3-х оптимальных школ",
        "Анализ документов и шансов",
        "Подача заявок в школы",
        "Инструкция по визе (без сопровождения)"
      ],
      accent: false
    },
    {
      name: "План Космос",
      price: "3,500€",
      desc: "Гарантия результата",
      features: [
        "Индивидуальная стратегия поступления",
        "Гарантия зачисления 100%",
        "Полное визовое сопровождение",
        "Подготовка к собеседованию",
        "Легализация документов"
      ],
      accent: true
    },
    {
      name: "План Галактика",
      price: "5,900€",
      desc: "VIP Сопровождение",
      features: [
        "Все опции плана Космос",
        "Поступление в ТОП частные школы",
        "Поиск жилья и резиденции",
        "Оформление мед. страховки",
        "Личный куратор 24/7 в Испании"
      ],
      accent: false
    }
  ];

  const faqs = [
    { q: "Нужно ли ребенку знать испанский язык?", a: "Для международных школ — нет, достаточно английского. Для государственных школ знание испанского желательно, но часто детей принимают с условием интенсивного изучения языка на месте. Мы подберем курсы." },
    { q: "В каком возрасте лучше переезжать?", a: "Оптимально — до 12-13 лет для легкой адаптации. Однако мы успешно устраиваем и старшеклассников (15-16 лет), подбирая программы Pre-University или IB." },
    { q: "Какие документы нужны в первую очередь?", a: "Загранпаспорт, свидетельство о рождении, выписка оценок за последние 2-3 года, прививочная карта. Остальное (переводы, апостили) мы берем на себя." },
    { q: "Гарантируете ли вы поступление?", a: "Да, в тарифах «Космос» и «Галактика» прописана 100% гарантия поступления. Мы подбираем список школ так, чтобы ребенок точно был зачислен." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-purple-500/30 selection:text-purple-200 font-sans">
      <Navbar />
      <SchoolHero />
      <Steps />
      <SchoolTypes />
      <PricingSection
        id="Тарифы"
        title="Ваш билет в"
        highlightedWord="будущее"
        subtitle="Инвестиция в образование ребенка — самая надежная инвестиция."
        plans={plans}
        accentColor="purple"
        buttonText="Начать поступление"
      />
      <FAQSection
        title="Вопросы"
        highlightedWord="родителей"
        items={faqs}
        accentColor="text-purple-400"
      />
      <Contact />
      <Footer />
    </div>
  );
}

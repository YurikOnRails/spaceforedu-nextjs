import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  const plans = [
    {
      name: "План Планета",
      price: "1,500€",
      features: ["Подбор 3-х вузов", "Консультация по документам", "Подача заявок", "Инструкция по визе"],
      accent: false
    },
    {
      name: "План Галактика",
      price: "3,200€",
      features: ["Подбор 7 вузов", "Полное визовое сопровождение", "Переводы документов", "Поиск жилья", "Личный куратор"],
      accent: true
    },
    {
      name: "План Вселенная",
      price: "5,500€",
      features: ["VIP сопровождение", "Гарантия поступления", "Адаптация в Испании", "Омологация под ключ", "Юридическая поддержка"],
      accent: false
    }
  ];

  const faqs = [
    { q: "Сложно ли поступить в Испанию без знания языка?", a: "Мы предлагаем программы как на испанском, так и на английском языках. Также у нас есть языковые курсы при университетах." },
    { q: "Какие документы нужны для омологации диплома?", a: "Стандартный пакет включает оригинал диплома с апостилем, приложение и паспорт. Мы берем весь процесс перевода и подачи на себя." },
    { q: "Есть ли возрастные ограничения для студентов?", a: "В Испании нет жестких возрастных цензов для высшего образования. Студентами становятся люди от 17 до 50+ лет." }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <PricingSection 
        id="Тарифы"
        title="Выбирайте свой" 
        highlightedWord="маршрут" 
        subtitle="Прозрачные тарифы без скрытых платежей"
        plans={plans}
        accentColor="cyan"
      />
      <FAQSection 
        title="Частые"
        highlightedWord="вопросы"
        items={faqs}
        accentColor="text-cyan-400"
      />
      <Contact />
      <Footer />
      
      {/* Floating Action Button for mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white animate-bounce cursor-pointer">
          <MessageSquare fill="white" size={24} />
        </button>
      </div>
    </div>
  );
}

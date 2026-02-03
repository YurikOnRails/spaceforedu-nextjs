"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: "Сложно ли поступить в Испанию без знания языка?", a: "Мы предлагаем программы как на испанском, так и на английском языках. Также у нас есть языковые курсы при университетах." },
    { q: "Какие документы нужны для омологации диплома?", a: "Стандартный пакет включает оригинал диплома с апостилем, приложение и паспорт. Мы берем весь процесс перевода и подачи на себя." },
    { q: "Есть ли возрастные ограничения для студентов?", a: "В Испании нет жестких возрастных цензов для высшего образования. Студентами становятся люди от 17 до 50+ лет." }
  ];

  return (
    <section id="FAQ" className="py-32 bg-black/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Частые <span className="text-cyan-400">вопросы</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
              <button 
                className="w-full p-6 text-left flex justify-between items-center text-white font-bold hover:bg-white/5 transition-colors cursor-pointer"
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                {faq.q}
                {openIdx === i ? <Minus className="text-cyan-400" /> : <Plus className="text-cyan-400" />}
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

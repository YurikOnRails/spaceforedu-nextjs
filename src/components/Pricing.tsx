import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Pricing = () => {
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

  return (
    <section id="Тарифы" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Выбирайте свой <span className="text-cyan-400">маршрут</span></h2>
          <p className="text-gray-400">Прозрачные тарифы без скрытых платежей</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <RevealOnScroll key={i}>
              <div className={`relative p-10 rounded-3xl border transition-all hover:scale-105 duration-300 ${plan.accent ? 'bg-gradient-to-b from-cyan-900/40 to-black border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.2)]' : 'bg-white/5 border-white/10'}`}>
                {plan.accent && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Популярный выбор
                  </div>
                )}
                <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-black text-white mb-8">{plan.price}</div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all cursor-pointer ${plan.accent ? 'bg-cyan-500 text-white hover:bg-cyan-400' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                  Выбрать план
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

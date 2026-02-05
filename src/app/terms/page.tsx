"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Section } from '../../components/ui/Section';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans">
      <Navbar />
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Публичная оферта (Aviso Legal)</h1>
          
          <p className="text-sm text-gray-500">Последнее обновление: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Правовая информация</h2>
            <p>
              В соответствии с Законом 34/2002 об услугах информационного общества и электронной коммерции (LSSI-CE) Испании, настоящий документ регулирует условия использования сайта spaceforedu.com.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Предмет соглашения</h2>
            <p>
              SpaceForEdu предоставляет информационные и консультационные услуги в сфере образования в Испании. Информация на сайте не является публичной офертой в смысле ст. 437 Гражданского кодекса РФ, а носит ознакомительный характер. Конкретные условия сотрудничества фиксируются в индивидуальном договоре.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Обязательства пользователя</h2>
            <p>Пользователь обязуется:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Использовать сайт в законных целях.</li>
              <li>Не предоставлять ложную информацию в формах заявки.</li>
              <li>Не нарушать права интеллектуальной собственности Компании.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Интеллектуальная собственность</h2>
            <p>
              Все материалы сайта (тексты, изображения, логотипы, дизайн) являются собственностью SpaceForEdu и защищены законодательством об авторском праве. Копирование материалов без письменного разрешения запрещено.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Ограничение ответственности</h2>
            <p>
              Компания не несет ответственности за:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Временные сбои в работе сайта.</li>
              <li>Решения приемных комиссий учебных заведений (так как они являются третьими лицами).</li>
              <li>Отказ в выдаче визы консульскими службами (при отсутствии вины Компании).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Применимое право</h2>
            <p>
              Отношения между Пользователем и Компанией регулируются законодательством Королевства Испания. Все споры подлежат разрешению в судах по месту нахождения Компании, если иное не предусмотрено императивными нормами закона о защите прав потребителей.
            </p>
          </section>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

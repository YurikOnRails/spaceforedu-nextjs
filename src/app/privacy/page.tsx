"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Section } from '../../components/ui/Section';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans">
      <Navbar />
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Политика конфиденциальности</h1>
          
          <p className="text-sm text-gray-500">Последнее обновление: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности описывает, как SpaceForEdu (далее «Мы», «Компания») собирает, использует и защищает персональные данные пользователей сайта spaceforedu.com в соответствии с Общим регламентом по защите данных (GDPR) Европейского Союза и Органическим законом 3/2018 о защите персональных данных (LOPDGDD) Испании.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Какие данные мы собираем</h2>
            <p>Мы можем собирать следующие категории персональных данных:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Идентификационные данные: имя, фамилия.</li>
              <li>Контактные данные: адрес электронной почты, номер телефона.</li>
              <li>Технические данные: IP-адрес, тип браузера, данные cookie.</li>
              <li>Данные, предоставленные вами в формах заявки: интересы в обучении, желаемый уровень образования.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Цели обработки данных</h2>
            <p>Ваши данные используются для следующих целей:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставление консультационных услуг по образованию.</li>
              <li>Обработка ваших заявок и обратная связь.</li>
              <li>Отправка информационных материалов (только с вашего согласия).</li>
              <li>Улучшение работы нашего сайта и аналитика.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Ваши права (GDPR)</h2>
            <p>Как субъект персональных данных, вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Запросить доступ к вашим данным.</li>
              <li>Требовать исправления неточных данных.</li>
              <li>Требовать удаления данных («право на забвение»).</li>
              <li>Отозвать согласие на обработку данных в любой момент.</li>
            </ul>
            <p>Для реализации этих прав свяжитесь с нами по адресу: <a href="mailto:hello@spaceforedu.com" className="text-cyan-400 hover:underline">hello@spaceforedu.com</a>.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Безопасность данных</h2>
            <p>
              Мы принимаем все необходимые технические и организационные меры для защиты ваших данных от несанкционированного доступа, изменения или уничтожения. Ваши данные хранятся на защищенных серверах в пределах Европейской экономической зоны (ЕЭЗ).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Использование Cookies</h2>
            <p>
              Наш сайт использует файлы cookie для улучшения пользовательского опыта. Продолжая использовать сайт, вы соглашаетесь с нашей политикой использования cookie. Вы можете отключить cookie в настройках вашего браузера.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Контакты</h2>
            <p>
              Владелец сайта: SpaceForEdu<br />
              Юридический адрес: Испания (адрес уточняется)<br />
              Email: hello@spaceforedu.com
            </p>
          </section>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

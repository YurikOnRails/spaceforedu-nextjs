import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { PLANS, FAQS } from '../constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <PricingSection 
        id="Тарифы"
        title="Выбирайте свой" 
        highlightedWord="маршрут" 
        subtitle="Прозрачные тарифы без скрытых платежей"
        plans={PLANS}
        accentColor="cyan"
      />
      <FAQSection 
        title="Частые"
        highlightedWord="вопросы"
        items={FAQS}
        accentColor="text-cyan-400"
      />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

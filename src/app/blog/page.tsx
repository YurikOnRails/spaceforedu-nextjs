import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Section } from '../../components/ui/Section';

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar />
      <Section className="min-h-[60vh] flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Блог
          </h1>
          <p className="text-xl text-gray-400">Страница в процессе обновления дизайна.</p>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

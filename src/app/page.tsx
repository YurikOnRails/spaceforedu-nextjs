import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Floating Action Button for mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white animate-bounce">
          <MessageSquare fill="white" size={24} />
        </button>
      </div>
    </div>
  );
}

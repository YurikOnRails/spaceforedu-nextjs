"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
            SPACEFOR<span className="text-cyan-400">EDU</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Услуги', 'Тарифы', 'Блог', 'FAQ'].map((item) => (
            <a key={item} href={`#${item}`} className="text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer">
            Связаться
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full p-6 flex flex-col gap-4 text-center border-t border-white/10">
          {['Услуги', 'Тарифы', 'Блог', 'FAQ'].map((item) => (
            <a key={item} href={`#${item}`} className="text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

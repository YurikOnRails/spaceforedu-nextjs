"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('RU');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'RU', label: 'Русский', flagUrl: 'https://flagcdn.com/w40/ru.png' },
    { code: 'ES', label: 'Español', flagUrl: 'https://flagcdn.com/w40/es.png' },
    { code: 'EN', label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  ];

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
          
          {/* Language Switcher Desktop */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest cursor-pointer"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <img 
                src={languages.find(l => l.code === language)?.flagUrl} 
                alt={language}
                className="w-5 h-auto rounded-sm object-cover"
              />
              <span>{language}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-4 w-40 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md animate-fadeIn">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition-colors flex items-center gap-3 ${language === lang.code ? 'text-cyan-400 bg-white/5' : 'text-gray-300'}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                  >
                    <img 
                      src={lang.flagUrl} 
                      alt={lang.code}
                      className="w-5 h-auto rounded-sm object-cover"
                    />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full p-6 flex flex-col gap-4 text-center border-t border-white/10 h-screen">
          {['Услуги', 'Тарифы', 'Блог', 'FAQ'].map((item) => (
            <a key={item} href={`#${item}`} className="text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          
          <div className="flex justify-center gap-4 py-4 border-t border-white/10 mt-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${language === lang.code ? 'bg-white/10 text-cyan-400' : 'text-gray-400'}`}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsMobileMenuOpen(false);
                }}
              >
                <img 
                  src={lang.flagUrl} 
                  alt={lang.code}
                  className="w-8 h-auto rounded-sm object-cover mb-1"
                />
                <span className="text-xs font-bold">{lang.code}</span>
              </button>
            ))}
          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 text-white w-full py-4 rounded-xl font-bold mt-4">
            Связаться
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

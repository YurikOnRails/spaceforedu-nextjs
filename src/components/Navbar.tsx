"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('RU');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const languages = [
    { code: 'RU', label: 'Русский', flagUrl: 'https://flagcdn.com/w40/ru.png' },
    { code: 'ES', label: 'Español', flagUrl: 'https://flagcdn.com/w40/es.png' },
    { code: 'EN', label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
  ];

  const mainLinks = [
    { label: 'Школы', href: '/space-school' },
    { label: 'ВУЗы', href: '/space-university' },
    { label: 'Бизнес', href: '/space-pro' },
  ];

  const serviceLinks = [
    { label: 'Курсы', href: '/space-courses' },
    { label: 'Репетиторство', href: '/space-tutoring' },
    { label: 'Коучинг', href: '/space-coaching' },
    { label: 'Омологация', href: '/space-omission' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <img 
            src="/logo.png" 
            alt="SpaceForEdu Logo" 
            className="h-16 w-auto" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {mainLinks.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`hover:text-cyan-400 transition-colors uppercase tracking-widest ${pathname === item.href ? 'text-cyan-400' : 'text-gray-300'}`}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest cursor-pointer py-2">
              Услуги
              <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md p-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-cyan-400 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
            О нас
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-widest">
            Блог
          </Link>
          
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

        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 absolute top-full left-0 w-full p-6 flex flex-col gap-4 text-center border-t border-white/10 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-6 py-4">
            {[...mainLinks, ...serviceLinks, { label: 'О нас', href: '/about' }, { label: 'Блог', href: '/blog' }].map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-white text-xl font-medium" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 py-6 border-t border-white/10 mt-auto mb-20">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;

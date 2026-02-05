import React from 'react';
import { Rocket, MessageSquare, Globe } from 'lucide-react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <img 
              src="/logo.png" 
              alt="SpaceForEdu Logo" 
              className="h-16 w-auto" 
            />
          </Link>
          <p className="text-gray-500 text-sm">SpaceForEdu.com - ваш надежный проводник в мире испанского образования. Профессионально, быстро, с гарантией.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full lg:w-auto">
          <div>
            <h4 className="text-white font-bold mb-6">Образование</h4>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link href="/space-school" className="hover:text-cyan-400 transition-colors">Школы</Link>
              <Link href="/space-university" className="hover:text-cyan-400 transition-colors">Университеты</Link>
              <Link href="/space-courses" className="hover:text-cyan-400 transition-colors">Языковые курсы</Link>
              <Link href="/space-tutoring" className="hover:text-cyan-400 transition-colors">Репетиторы</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Услуги</h4>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link href="/space-pro" className="hover:text-cyan-400 transition-colors">AI для бизнеса</Link>
              <Link href="/space-coaching" className="hover:text-cyan-400 transition-colors">Коучинг</Link>
              <Link href="/space-omission" className="hover:text-cyan-400 transition-colors">Омологация</Link>
              <Link href="/space-school" className="hover:text-cyan-400 transition-colors">Визовая поддержка</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Компания</h4>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <Link href="/about" className="hover:text-cyan-400 transition-colors">О нас</Link>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Блог</Link>
              <a href="#Contact" className="hover:text-cyan-400 transition-colors">Контакты</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Соцсети</h4>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/34663689393" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all cursor-pointer shadow-lg hover:shadow-[#25D366]/20"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
              </a>
              <a 
                href="https://t.me/+34663689393" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#229ED9] hover:text-white hover:border-[#229ED9] transition-all cursor-pointer shadow-lg hover:shadow-[#229ED9]/20"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all cursor-pointer shadow-lg hover:shadow-[#1877F2]/20"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 text-xs">© {new Date().getFullYear()} SpaceForEdu. Все права защищены.</div>
        <div className="flex gap-6 text-gray-600 text-xs">
          <a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="/terms" className="hover:text-white transition-colors">Публичная оферта</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

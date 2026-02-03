import React from 'react';
import { Rocket, MessageSquare, Globe } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <Rocket size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">SPACEFOR<span className="text-cyan-400">EDU</span></span>
          </div>
          <p className="text-gray-500 text-sm">Ваш надежный проводник в мире испанского образования. Профессионально, быстро, с гарантией.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-bold mb-6">Компания</h4>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">О нас</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Услуги</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Блог</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Помощь</h4>
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">FAQ</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Контакты</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Визовая помощь</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Соцсети</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer">
                <MessageSquare size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer">
                <Globe size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 text-xs">© 2024 SpaceForEdu. Все права защищены.</div>
        <div className="flex gap-6 text-gray-600 text-xs">
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

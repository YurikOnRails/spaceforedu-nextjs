"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-t border-white/10 p-6 animate-fadeIn">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-sm text-gray-300">
          <p className="mb-2 font-bold text-white">Мы используем файлы cookie 🍪</p>
          <p>
            Этот сайт использует файлы cookie для улучшения пользовательского опыта, аналитики и персонализации. 
            Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
            <Link href="/privacy" className="text-cyan-400 hover:underline">
              Политикой конфиденциальности
            </Link>.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-medium"
          >
            Отказаться
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors text-sm font-bold shadow-lg shadow-cyan-500/20"
          >
            Принять все
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

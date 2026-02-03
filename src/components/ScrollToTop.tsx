"use client";

import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-4 rounded-full bg-cyan-500 text-white shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-500/50 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } md:block hidden`} // Hidden on mobile to avoid conflict with chat button if needed, or adjust position
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}

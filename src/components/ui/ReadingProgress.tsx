"use client";

import React, { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[110]">
      {/* Glow Effect Container */}
      <div 
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-150 ease-out relative shadow-[0_0_10px_rgba(6,182,212,0.5)]"
        style={{ width: `${completion}%` }}
      >
        {/* Leading Spark/Head of the beam */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-[4px] bg-gradient-to-r from-transparent to-white blur-[1px] opacity-70 translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.8)] translate-x-1/2"></div>
      </div>
    </div>
  );
}

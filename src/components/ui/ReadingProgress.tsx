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

  if (completion === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[120] pointer-events-none">
      {/* Stardust Trail */}
      <div 
        className="h-full bg-gradient-to-r from-transparent via-purple-500/60 to-cyan-400 transition-all duration-150 ease-out relative"
        style={{ width: `${completion}%` }}
      >
        {/* The Star (Head) - Soft Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-cyan-400/30 rounded-full blur-[4px]"></div>
        
        {/* The Star (Core) - Bright Point */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
        
        {/* Trailing Tail (Speed effect) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent to-white/50"></div>
      </div>
    </div>
  );
}

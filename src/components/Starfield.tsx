'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      // Оптимальное количество звезд для естественности
      const starCount = Math.floor((canvas.width * canvas.height) / 6000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.1, // Очень маленькие точки, как реальные звезды
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005, // Скорость мерцания
          twinklePhase: Math.random() * Math.PI * 2, // Разная фаза для каждой звезды
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Очень медленный дрейф всего неба (вращение Земли)
      const driftX = 0.05; 
      const driftY = 0.02;

      stars.forEach((star) => {
        // Дрейф
        star.x -= driftX;
        star.y -= driftY;

        // Бесконечная прокрутка
        if (star.x < 0) star.x = canvas.width;
        if (star.y < 0) star.y = canvas.height;

        // Естественное мерцание (синусоидальное изменение прозрачности)
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7; // Колебание яркости от 0.4 до 1.0

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Добавляем едва заметное свечение для самых ярких звезд
        if (star.size > 1 && twinkle > 0.9) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = "white";
        } else {
            ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default Starfield;

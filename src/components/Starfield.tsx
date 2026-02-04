'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  density: number;
  opacity: number;
  parallaxFactor: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  opacity: number;
  active: boolean;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollY = useRef(0);
  const warpFactor = useRef(20); // Начальная скорость гиперпрыжка
  const targetWarpFactor = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let nebulae: Nebula[] = [];
    let shootingStar: ShootingStar = { x: 0, y: 0, vx: 0, vy: 0, len: 0, opacity: 0, active: false };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initNebulae();
    };

    const initNebulae = () => {
      nebulae = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: canvas.width * 0.4, color: 'rgba(6, 182, 212, 0.07)', vx: 0.02, vy: 0.01 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: canvas.width * 0.5, color: 'rgba(139, 92, 246, 0.05)', vx: -0.01, vy: 0.02 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: canvas.width * 0.3, color: 'rgba(59, 130, 246, 0.06)', vx: 0.015, vy: -0.015 }
      ];
    };

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < starCount; i++) {
        const density = Math.random() * 20 + 5;
        const size = Math.random() * 1.5 + 0.5;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (0.1 / (density * 0.1)),
          vy: (Math.random() - 0.5) * (0.1 / (density * 0.1)),
          size: size,
          density: density,
          opacity: Math.random() * 0.7 + 0.3,
          parallaxFactor: size * 0.2,
        });
      }
    };

    const createShootingStar = () => {
      if (shootingStar.active) return;
      shootingStar = {
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height / 2),
        vx: Math.random() * 15 + 10,
        vy: Math.random() * 5 + 2,
        len: Math.random() * 80 + 50,
        opacity: 1,
        active: true
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Плавное замедление гиперпрыжка (Lerp)
      if (warpFactor.current > targetWarpFactor.current) {
        warpFactor.current -= (warpFactor.current - targetWarpFactor.current) * 0.02;
      }

      // 1. Отрисовка Туманностей (Nebulae)
      nebulae.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        gradient.addColorStop(0, n.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // 2. Отрисовка Звезд
      stars.forEach((star) => {
        // Умножаем дрейф на текущий warpFactor
        star.x += star.vx * warpFactor.current;
        star.y += star.vy * warpFactor.current;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        let renderX = star.x;
        let renderY = (star.y + scrollY.current * star.parallaxFactor) % canvas.height;
        if (renderY < 0) renderY += canvas.height;

        const twinkle = Math.sin(Date.now() * 0.001 * star.density * 0.1) * 0.2;
        
        ctx.beginPath();
        // При высоком warpFactor вытягиваем звезды в линии (эффект скорости)
        if (warpFactor.current > 1.5) {
          ctx.moveTo(renderX, renderY);
          ctx.lineTo(renderX - star.vx * warpFactor.current * 2, renderY - star.vy * warpFactor.current * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.5})`;
          ctx.lineWidth = star.size;
          ctx.stroke();
        } else {
          ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, star.opacity + twinkle)})`;
          ctx.fill();
        }
      });

      // 3. Отрисовка Падающей звезды
      if (shootingStar.active) {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.opacity -= 0.01;

        if (shootingStar.opacity <= 0 || shootingStar.x > canvas.width) {
          shootingStar.active = false;
        } else {
          const grad = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y, 
            shootingStar.x - shootingStar.vx, shootingStar.y - shootingStar.vy
          );
          grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          grad.addColorStop(1, 'transparent');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(shootingStar.x - shootingStar.vx * 2, shootingStar.y - shootingStar.vy * 2);
          ctx.stroke();
        }
      }

      // Случайный запуск падающей звезды
      if (Math.random() < 0.005) createShootingStar();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
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

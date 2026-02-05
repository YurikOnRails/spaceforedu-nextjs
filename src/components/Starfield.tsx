'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number; // Depth factor (0 = far, 1 = near)
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  flareOpacity: number;
  isFlaring: boolean;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let nebulae: Nebula[] = [];
    let meteors: Meteor[] = [];

    // Initialize mouse at center
    targetMouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    currentMouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const initStars = (width: number, height: number) => {
      stars = [];
      const isMobile = width < 768;
      // Professional tweak: Reduce density on mobile by 40%
      const densityDivisor = isMobile ? 8000 : 4500;
      const starCount = Math.floor((width * height) / densityDivisor); 
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
          size: Math.random() * 1.3 + 0.1,
          baseOpacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.03 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          flareOpacity: 0,
          isFlaring: false,
        });
      }
    };

    const initNebulae = (width: number, height: number) => {
      nebulae = [];
      const nebulaCount = 4;
      const colors = [
        'rgba(6, 182, 212, 0.05)', 
        'rgba(147, 51, 234, 0.05)', 
        'rgba(59, 130, 246, 0.05)', 
      ];

      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 400 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05,
        });
      }
    };

    const spawnMeteor = () => {
      // Don't spawn meteors if scrolled deep into content
      if (scrollY.current > 800) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const side = Math.random() > 0.5 ? 'top' : 'right';
      
      let x, y;
      if (side === 'top') {
        x = Math.random() * width;
        y = -20;
      } else {
        x = width + 20;
        y = Math.random() * (height / 2);
      }

      meteors.push({
        x,
        y,
        vx: -(Math.random() * 10 + 10),
        vy: Math.random() * 10 + 10,
        size: Math.random() * 2 + 1,
        opacity: 1,
      });
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initStars(window.innerWidth, window.innerHeight);
      initNebulae(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.05;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.05;

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const mx = currentMouse.current.x;
      const my = currentMouse.current.y;
      const cx = width / 2;
      const cy = height / 2;

      // Professional Tweak: Scroll-based opacity factor
      // Stars fade out as user scrolls down to improve text readability
      const scrollFactor = Math.max(0.2, 1 - scrollY.current / 1000);

      // 1. Draw Nebulae
      nebulae.forEach((nebula) => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;
        if (nebula.x < -nebula.radius) nebula.x = width + nebula.radius;
        if (nebula.x > width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = height + nebula.radius;
        if (nebula.y > height + nebula.radius) nebula.y = -nebula.radius;

        const nx = nebula.x - (mx - cx) * 0.02;
        const ny = nebula.y - (my - cy) * 0.02;

        const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, nebula.radius);
        // Dim nebulae even more based on scroll
        const nebulaColorWithScroll = nebula.color.replace('0.05', (0.05 * scrollFactor).toString());
        gradient.addColorStop(0, nebulaColorWithScroll);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nx, ny, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Stars & Flare-ups
      stars.forEach((star) => {
        star.x -= 0.02 * (star.z * 0.5 + 0.5); 
        star.y -= 0.01 * (star.z * 0.5 + 0.5);
        if (star.x < 0) star.x = width;
        if (star.y < 0) star.y = height;

        // Flare-up Logic (Supernova effect)
        if (!star.isFlaring && Math.random() < 0.0001) {
          star.isFlaring = true;
        }
        if (star.isFlaring) {
          star.flareOpacity += 0.02;
          if (star.flareOpacity >= 1) star.isFlaring = false;
        } else if (star.flareOpacity > 0) {
          star.flareOpacity -= 0.01;
        }

        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const px = star.x - (mx - cx) * star.z * 0.05;
        const py = star.y - (my - cy) * star.z * 0.05;

        // Apply scrollFactor to star visibility
        const finalOpacity = ((star.baseOpacity * twinkle) + (star.flareOpacity * 2)) * scrollFactor;
        const finalSize = star.size * (1 + star.flareOpacity * 2);

        ctx.beginPath();
        ctx.arc(px, py, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, finalOpacity)})`;
        ctx.fill();
      });

      // 3. Draw Meteors
      if (Math.random() < 0.003) spawnMeteor();

      meteors = meteors.filter(m => m.opacity > 0);
      meteors.forEach(m => {
        m.x += m.vx;
        m.y += m.vy;
        m.opacity -= 0.008;

        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 2, m.y - m.vy * 2);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.opacity * scrollFactor})`);
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.size;
        ctx.lineCap = 'round';
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * 3, m.y - m.vy * 3);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default Starfield;

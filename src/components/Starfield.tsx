'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number; // Depth factor (0 = far, 1 = near)
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // targetMouse: The actual raw mouse position
  const targetMouse = useRef({ x: 0, y: 0 });
  // currentMouse: The smoothed/interpolated position
  const currentMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let nebulae: Nebula[] = [];

    // Initialize mouse at center to prevent initial jump
    targetMouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    currentMouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.current = { x: e.clientX, y: e.clientY };
    };

    const initStars = (width: number, height: number) => {
      stars = [];
      const starCount = Math.floor((width * height) / 4000); // More stars
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(), // Depth: 0 to 1
          size: Math.random() * 1.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const initNebulae = (width: number, height: number) => {
      nebulae = [];
      const nebulaCount = 4;
      const colors = [
        'rgba(6, 182, 212, 0.05)', // Cyan (very subtle)
        'rgba(147, 51, 234, 0.05)', // Purple
        'rgba(59, 130, 246, 0.05)', // Blue
      ];

      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 300 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.1, // Very slow drift
          vy: (Math.random() - 0.5) * 0.1,
        });
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      
      // Set physical dimensions
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Set logical (CSS) dimensions
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Scale context to ensure drawing operations match logical coordinates
      ctx.scale(dpr, dpr);
      
      initStars(window.innerWidth, window.innerHeight);
      initNebulae(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      // Lerp mouse position for smooth inertia
      // Lower factor = more inertia/smoother (0.05 is good)
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.05;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.05;

      // Clear using logical dimensions (since we scaled)
      // Or just clear the whole physical canvas to be safe
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform to clear full physical canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore(); // Restore the dpr scaling

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Mouse Parallax Calculation using smoothed coordinates
      const mx = currentMouse.current.x;
      const my = currentMouse.current.y;
      const cx = width / 2;
      const cy = height / 2;

      // Draw Nebulae (Background Layer)
      nebulae.forEach((nebula) => {
        nebula.x += nebula.vx;
        nebula.y += nebula.vy;

        // Wrap around (using logical dimensions)
        if (nebula.x < -nebula.radius) nebula.x = width + nebula.radius;
        if (nebula.x > width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = height + nebula.radius;
        if (nebula.y > height + nebula.radius) nebula.y = -nebula.radius;

        // Parallax for nebula (very distant, so very little movement)
        const nebulaParallaxX = (mx - cx) * 0.02;
        const nebulaParallaxY = (my - cy) * 0.02;

        const gradient = ctx.createRadialGradient(
          nebula.x - nebulaParallaxX, 
          nebula.y - nebulaParallaxY, 
          0, 
          nebula.x - nebulaParallaxX, 
          nebula.y - nebulaParallaxY, 
          nebula.radius
        );
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x - nebulaParallaxX, nebula.y - nebulaParallaxY, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Stars
      const driftX = 0.02; 
      const driftY = 0.01;

      stars.forEach((star) => {
        // Apply base drift
        star.x -= driftX * (star.z * 0.5 + 0.5); 
        star.y -= driftY * (star.z * 0.5 + 0.5);

        // Infinite scroll wrapping (using logical dimensions)
        if (star.x < 0) star.x = width;
        if (star.y < 0) star.y = height;

        // Twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

        // Parallax Offset
        // Closer stars (higher z) move MORE against mouse movement
        const parallaxX = (mx - cx) * star.z * 0.05;
        const parallaxY = (my - cy) * star.z * 0.05;

        // Final position
        const x = star.x - parallaxX;
        const y = star.y - parallaxY;

        ctx.beginPath();
        ctx.arc(x, y, star.size * (0.5 + star.z * 0.5), 0, Math.PI * 2);

        // Glow for bright stars (Removed for better performance and less jerkiness)
        // if (star.size > 1 && twinkle > 0.9) {
        //     ctx.shadowBlur = 4 * star.z;
        //     ctx.shadowColor = "white";
        // } else {
        //     ctx.shadowBlur = 0;
        // }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle * (0.5 + star.z * 0.5)})`; // Closer stars brighter
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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

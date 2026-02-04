'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [hovering, setHovering] = useState(false);
  const hoveringRef = useRef(hovering);

  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  // Refs for animation state
  const prevPos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorAngle = useRef(90); // Start pointing up/right-ish
  const targetAngle = useRef(90);

  // Initialize particles positions
  const particles = useRef(Array(4).fill(0).map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    // Only enable on devices with a mouse
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };

      // Calculate movement delta
      const dx = e.clientX - prevPos.current.x;
      const dy = e.clientY - prevPos.current.y;
      
      // Calculate rotation
      // Only update if there is actual movement to avoid jitter at rest
      if (dx !== 0 || dy !== 0) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        targetAngle.current = angle;
      }

      prevPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button') {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    // Animation loop
    let animationFrameId: number;

    const lerpAngle = (start: number, end: number, factor: number) => {
      let diff = end - start;
      // Normalize diff to -180 to 180
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      return start + diff * factor;
    };

    const animate = () => {
      // 1. Animate Main Cursor (Rocket)
      // Smoothly interpolate angle
      cursorAngle.current = lerpAngle(cursorAngle.current, targetAngle.current, 0.2);
      
      if (cursorRef.current) {
        // Lucide Rocket points Top-Right (45deg). 
        // atan2(0,1) = 0deg (Right). To align Top-Right icon to Right, we rotate 45deg.
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) rotate(${cursorAngle.current + 45}deg)`;
      }

      // 2. Animate Trail Particles
      const factor = 0.2; // Chain physics smoothing
      
      // First particle follows the cursor
      particles.current[0].x += (cursorPos.current.x - particles.current[0].x) * factor;
      particles.current[0].y += (cursorPos.current.y - particles.current[0].y) * factor;

      // Subsequent particles follow the previous one
      for (let i = 1; i < particles.current.length; i++) {
        particles.current[i].x += (particles.current[i - 1].x - particles.current[i].x) * factor;
        particles.current[i].y += (particles.current[i - 1].y - particles.current[i].y) * factor;
      }

      // Apply transforms to particles
      trailRefs.current.forEach((el, i) => {
        if (el) {
          const p = particles.current[i];
          const scale = hoveringRef.current ? 1.5 : 1;
          el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) scale(${scale})`;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  // Hide default cursor
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.body.style.cursor = 'none';
      const links = document.querySelectorAll('a, button');
      links.forEach(el => (el as HTMLElement).style.cursor = 'none');
    }
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main Cursor (Rocket) */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] text-white drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        style={{ 
          marginTop: -12, // Center the 24px icon
          marginLeft: -12,
          width: 24,
          height: 24,
          willChange: 'transform' 
        }}
      >
        <Rocket size={24} fill="currentColor" />
      </div>
      
      {/* Jet Stream Trail Particles */}
      {[0, 1, 2, 3].map(i => (
        <div 
          key={i}
          ref={el => { trailRefs.current[i] = el; }}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] bg-cyan-400 blur-[1px]"
          style={{ 
            width: 8 - (i * 1.5), // Decreasing size: 8, 6.5, 5, 3.5
            height: 8 - (i * 1.5),
            marginTop: -(8 - (i * 1.5)) / 2, // Center offset
            marginLeft: -(8 - (i * 1.5)) / 2,
            opacity: 0.8 - (i * 0.15), // Fading opacity: 0.8, 0.65, 0.5, 0.35
            willChange: 'transform',
            transition: 'opacity 0.2s'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

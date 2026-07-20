'use client';

import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    const animationFrameId = requestAnimationFrame(animateRing);

    // Expand on hoverable elements
    const onMouseEnter = () => document.body.classList.add('cursor-active');
    const onMouseLeave = () => document.body.classList.remove('cursor-active');

    const updateHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .cs-card, .group'
      );
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    updateHoverListeners();

    // Re-bind listeners on DOM changes (important for dynamically rendered elements)
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-rose-dust z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block"
      />
      <div
        ref={ringRef}
        className="cur-ring fixed top-0 left-0 w-9 h-9 rounded-full border border-rose-dust/30 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out hidden md:block"
      />
    </>
  );
}

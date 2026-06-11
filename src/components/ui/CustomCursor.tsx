"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const rippleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Global cursor hiding and animations
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }

      /* Precise center dot */
      .cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        mix-blend-mode: difference;
        will-change: transform;
      }

      /* Liquid stretching aura */
      .cursor-aura {
        position: fixed;
        top: 0;
        left: 0;
        width: 36px;
        height: 36px;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        mix-blend-mode: difference;
        will-change: transform;
        transform-origin: center;
      }

      /* Expanding ripple on click */
      @keyframes click-ripple-anim {
        0% {
          width: 6px;
          height: 6px;
          opacity: 1;
          border-width: 2px;
        }
        100% {
          width: 80px;
          height: 80px;
          opacity: 0;
          border-width: 0px;
        }
      }

      .cursor-ripple {
        position: absolute;
        top: 0;
        left: 0;
        border: 2px solid white;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: click-ripple-anim 0.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        pointer-events: none;
        mix-blend-mode: difference;
      }
    `;
    document.head.appendChild(style);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Aura state
    let auraX = mouseX;
    let auraY = mouseY;
    let lastAngle = 0;
    
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot immediately for 0-delay precise tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const update = () => {
      // Liquid Aura physics
      const dx = mouseX - auraX;
      const dy = mouseY - auraY;
      
      // Lerp position
      auraX += dx * 0.25;
      auraY += dy * 0.25;
      
      // Calculate velocity
      const velX = mouseX - auraX;
      const velY = mouseY - auraY;
      const speed = Math.sqrt(velX * velX + velY * velY);
      
      // Update angle only if moving fast enough to avoid jitter
      if (speed > 0.5) {
        lastAngle = Math.atan2(velY, velX) * (180 / Math.PI);
      }
      
      // Stretch based on speed
      // Max stretch scale is 2.5x length, 0.5x width
      const scaleX = 1 + Math.min(speed * 0.04, 1.5); 
      const scaleY = 1 - Math.min(speed * 0.015, 0.5);

      if (auraRef.current) {
        // We translate by (pos - halfWidth) then rotate and scale
        auraRef.current.style.transform = `translate3d(${auraX - 18}px, ${auraY - 18}px, 0) rotate(${lastAngle}deg) scale(${scaleX}, ${scaleY})`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      document.body.style.cursor = "auto";
    };
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    // Create ripple element dynamically
    if (rippleContainerRef.current) {
      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      
      rippleContainerRef.current.appendChild(ripple);
      
      // Cleanup ripple
      setTimeout(() => {
        if (rippleContainerRef.current && rippleContainerRef.current.contains(ripple)) {
          rippleContainerRef.current.removeChild(ripple);
        }
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  return (
    <div style={{ pointerEvents: "none", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 99999, overflow: "visible" }}>
      {/* Container for click ripples */}
      <div ref={rippleContainerRef} style={{ width: '100%', height: '100%', position: 'absolute' }} />
      
      {/* Stretching Liquid Aura */}
      <div ref={auraRef} className="cursor-aura" />
      
      {/* Precise Tracking Dot */}
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

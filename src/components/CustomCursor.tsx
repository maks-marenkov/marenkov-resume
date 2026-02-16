"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = () => cursorRef.current?.classList.add('cursor-hover');
    const handleUnhover = () => cursorRef.current?.classList.remove('cursor-hover');

    window.addEventListener('mousemove', moveCursor);
    
    // Ожидаем отрисовки контента, чтобы найти ссылки
    const updateLinks = () => {
      const links = document.querySelectorAll('a, button, .group');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleHover);
        link.addEventListener('mouseleave', handleUnhover);
      });
    };

    updateLinks();
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:flex" />;
}
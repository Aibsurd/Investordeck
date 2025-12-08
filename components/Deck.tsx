import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SLIDES } from '../constants';
import { SlideLayout } from './SlideLayout';
import { Background } from './Background';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Deck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div 
      className="relative w-full h-screen bg-[#030303] text-gray-200 overflow-hidden flex flex-col font-sans selection:bg-indigo-500/30"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Background />
      
      {/* Header / Brand - Ultra Minimal */}
      <div className="absolute top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 z-30 flex justify-between items-center mix-blend-difference text-white/50">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
           <div className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-bold text-white">Anóteros Lógos</div>
        </div>
        <div className="text-[10px] md:text-xs font-mono tracking-widest">
          <span className="text-white">{String(currentSlideIndex + 1).padStart(2, '0')}</span>
          <span className="mx-2 opacity-30">/</span>
          <span className="opacity-50">{String(SLIDES.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-grow relative w-full h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <SlideLayout key={currentSlideIndex} slide={SLIDES[currentSlideIndex]} />
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Minimal and Floating */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
         {/* Progress Bar - Thin line */}
        <div className="w-full h-[2px] bg-white/5">
          <div 
            className="h-full bg-indigo-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Controls - Only visible if interacting or on larger screens */}
        <div className="absolute bottom-8 right-8 pointer-events-auto hidden md:flex gap-2">
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 rounded-full hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 rounded-full hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
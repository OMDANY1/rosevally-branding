'use client';

import React, { useEffect, useState } from 'react';
import { useLang } from '../providers/LanguageProvider';
import { CHAPTERS } from '@/lib/constants';

export default function ChapterNav() {
  const { lang } = useLang();
  const [activeChapter, setActiveChapter] = useState('cover');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveChapter(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    CHAPTERS.forEach((ch) => {
      const el = document.getElementById(`chapter-${ch.id}`);
      if (el) observer.observe(el);
    });

    return () => {
      CHAPTERS.forEach((ch) => {
        const el = document.getElementById(`chapter-${ch.id}`);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(`chapter-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = CHAPTERS.findIndex((ch) => ch.id === activeChapter);
  const activeChapterData = CHAPTERS[activeIndex] || CHAPTERS[0];

  return (
    <div 
      className={`fixed bottom-10 left-6 md:left-12 z-40 hidden lg:flex flex-col gap-2 items-start text-mocha-brown select-none ${
        lang === 'ar' ? 'right-6 md:right-12 left-auto items-end text-right' : ''
      }`}
    >
      {/* Chapter Indicator Text */}
      <span className="text-[10px] tracking-[0.2em] uppercase font-mono opacity-40">
        {lang === 'ar' ? 'الفصل الحالي' : 'Active Chapter'}
      </span>
      
      {/* Number and Title */}
      <div className="flex items-center gap-3">
        <span className="font-serif text-3xl font-light text-rose-gold leading-none">
          {activeChapterData.num}
        </span>
        <div className="h-[14px] w-[1px] bg-mocha-brown/20" />
        <span className="font-serif text-sm tracking-wider font-light text-mocha-brown leading-none italic">
          {lang === 'ar' ? activeChapterData.titleAr : activeChapterData.title}
        </span>
      </div>

      {/* Micro Grid Navigation Dots */}
      <div className="flex gap-1.5 mt-2">
        {CHAPTERS.map((ch) => (
          <button
            key={ch.id}
            onClick={() => handleScrollTo(ch.id)}
            className={`w-[6px] h-[6px] rounded-full transition-all duration-500 cursor-pointer ${
              activeChapter === ch.id 
                ? 'bg-rose-gold scale-125' 
                : 'bg-mocha-brown/10 hover:bg-mocha-brown/30'
            }`}
            title={`${ch.num}: ${lang === 'ar' ? ch.titleAr : ch.title}`}
          />
        ))}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import { X, ArrowUpRight } from 'lucide-react';
import { CHAPTERS } from '@/lib/constants';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function Nav() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChapterClick = (id: string) => {
    setMenuOpen(false);
    // Give menu close animation time to play before scrolling
    setTimeout(() => {
      const el = document.getElementById(`chapter-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <>
      {/* Sticky Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-ivory-cream/90 backdrop-blur-xl border-b border-mocha-brown/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Name - Serif Editorial */}
          <a
            href="#chapter-cover"
            onClick={(e) => {
              e.preventDefault();
              handleChapterClick('cover');
            }}
            className="hover:opacity-60 transition-opacity block py-1"
          >
            <ValleyRoseLogo size="custom" className="w-[100px] h-[34px]" color="black" />
          </a>

          {/* Nav Controls */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Language Selector */}
            <div className="flex items-center gap-2 select-none">
              <button
                onClick={() => setLang('en')}
                className={`text-[10px] tracking-widest font-medium transition-colors cursor-pointer ${
                  lang === 'en' ? 'text-mocha-brown font-semibold' : 'text-taupe hover:text-mocha-brown'
                }`}
              >
                EN
              </button>
              <span className="text-[8px] text-taupe/30">|</span>
              <button
                onClick={() => setLang('ar')}
                className={`text-[10px] tracking-widest font-medium transition-colors cursor-pointer ${
                  lang === 'ar' ? 'text-mocha-brown font-semibold' : 'text-taupe hover:text-mocha-brown'
                }`}
              >
                ع
              </button>
            </div>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-mocha-brown cursor-pointer font-medium"
              aria-label="Toggle directory"
            >
              <span>{menuOpen ? (lang === 'ar' ? 'إغلاق' : 'Close') : (lang === 'ar' ? 'الفصول' : 'Chapters')}</span>
              <div className="relative w-5 h-5 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X size={15} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-1 w-4"
                    >
                      <span className="h-[1px] w-full bg-mocha-brown group-hover:scale-x-75 origin-right transition-transform" />
                      <span className="h-[1px] w-full bg-mocha-brown" />
                      <span className="h-[1px] w-full bg-mocha-brown group-hover:scale-x-75 origin-left transition-transform" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Swiss-Grid Chapter Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ivory-cream w-screen h-screen overflow-y-auto pt-24 px-6 md:px-12 pb-16 museum-grid"
          >
            <div className="max-w-7xl mx-auto w-full">
              {/* Header inside Menu */}
              <div className="border-b border-mocha-brown/10 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-dusty-rose uppercase block mb-1">
                    {lang === 'ar' ? 'فهرس الهوية البصرية' : 'Brand Identity Directory'}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-mocha-brown font-light italic">
                    {lang === 'ar' ? 'الأقسام والفصول الأربعة والعشرون' : 'Twenty-Four Chapters of Brand Strategy'}
                  </h2>
                </div>
                <span className="text-xs uppercase tracking-widest text-taupe font-mono">
                  {lang === 'ar' ? 'دليل شامل / فئة فاخرة' : 'Complete Manual / Ultra-Luxury Code'}
                </span>
              </div>

              {/* Grid Layout of Chapters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                {CHAPTERS.map((ch, idx) => (
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    key={ch.id}
                    onClick={() => handleChapterClick(ch.id)}
                    className="group text-left flex items-start gap-4 p-3 border border-transparent hover:border-mocha-brown/5 hover:bg-warm-beige/20 transition-all duration-300 cursor-pointer"
                  >
                    {/* Chapter Num */}
                    <span className="font-mono text-xs font-semibold text-dusty-rose bg-warm-beige/30 w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-dusty-rose group-hover:text-ivory-cream transition-colors duration-300 select-none">
                      {ch.num}
                    </span>
                    
                    {/* Chapter details */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <span className="font-serif text-base text-mocha-brown group-hover:text-rose-gold transition-colors truncate font-light leading-snug">
                        {lang === 'ar' ? ch.titleAr : ch.title}
                      </span>
                      <span className="text-[9px] tracking-wider text-taupe uppercase truncate font-sans font-light mt-0.5 group-hover:opacity-75">
                        {lang === 'ar' ? ch.subtitleAr : ch.subtitle}
                      </span>
                    </div>

                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-40 transition-opacity text-mocha-brown self-center" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

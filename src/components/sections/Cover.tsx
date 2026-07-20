'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function Cover() {
  const { lang } = useLang();

  return (
    <section
      id="chapter-cover"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ivory-cream museum-grid"
    >
      {/* Background Subtle Silhouette */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none flex items-center justify-center">
        <svg className="w-[80vw] h-[80vw] max-w-5xl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="250" cy="250" rx="180" ry="240" stroke="#6B4E42" strokeWidth="0.5" />
          <path d="M 250 50 Q 200 200 250 450" stroke="#6B4E42" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-between min-h-[70vh] text-center pt-24 pb-12">
        {/* Top Header info */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-taupe font-mono">
            {lang === 'ar' ? 'نظام الهوية البصرية المتكامل' : 'Complete Visual Identity Book'}
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-dusty-rose font-semibold bg-dusty-rose/10 px-3 py-1 rounded-full">
            {lang === 'ar' ? 'فصل ٠١ / ٢٤' : 'Chapter 01 / 24'}
          </span>
        </motion.div>

        {/* Center: Large Logo and Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="my-12"
        >
          <ValleyRoseLogo size="xl" color="#6B4E42" showText={true} />
        </motion.div>

        {/* Bottom Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center gap-6 border-t border-mocha-brown/10 pt-8"
        >
          <p className={`text-sm md:text-base text-taupe italic max-w-lg font-serif ${
            lang === 'ar' ? 'font-ar' : ''
          }`}>
            {lang === 'ar' 
              ? 'تعبير بصري معاصر عن الجمال العضوي والحرفية الفاخرة للزهور، مستوحى من الطبيعة وواحات القطيف.' 
              : 'A contemporary visual expression of botanical beauty and luxury floristry, rooted in the heritage of Saudi Arabia.'
            }
          </p>

          <div className="flex items-center gap-8 text-[10px] tracking-widest text-mocha-brown/60 uppercase font-mono mt-2">
            <span>{lang === 'ar' ? 'طبعة ٢٠٢٦' : 'Edition 2026'}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
            <span>{lang === 'ar' ? 'خاص وسري' : 'Confidential'}</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-2 select-none"
      >
        <span className="text-[8px] tracking-[0.3em] uppercase text-taupe">
          {lang === 'ar' ? 'اسحب للأسفل' : 'Scroll to explore'}
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-mocha-brown/20 to-transparent" />
      </motion.div>
    </section>
  );
}

'use client';

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-ivory-cream py-20 px-6 md:px-12 border-t border-mocha-brown/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="720" cy="350" rx="400" ry="120" stroke="#6B4E42" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 text-center relative z-10">
        {/* Wordmark */}
        <ValleyRoseLogo size="sm" color="black" />

        {/* Small line */}
        <div className="w-12 h-[1px] bg-rose-gold/40" />

        {/* Info */}
        <p className="text-xs tracking-[0.15em] text-taupe font-mono uppercase max-w-xl leading-loose">
          {lang === 'ar' 
            ? 'المجموعة الكاملة لهوية وادي الورد البصرية · سري وخاص · ٢٠٢٦' 
            : 'Complete Brand Identity & Guidelines · Confidential · © 2026'
          }
        </p>

        {/* Credit */}
        <p className="text-[10px] tracking-[0.08em] text-taupe/40 font-sans font-light max-w-2xl leading-relaxed">
          {lang === 'ar'
            ? 'تمت الصياغة والبرمجة بموجب المعايير الفنية الدولية لبيوت التصميم بنتاغرام، كولينز، وبورتو روشا.'
            : 'Visual identity manual formulated under the design philosophies of Pentagram, Collins, Porto Rocha, and DIA Studio.'
          }
        </p>
      </div>
    </footer>
  );
}

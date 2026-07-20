'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function ThankYou() {
  const { lang } = useLang();

  return (
    <section
      id="chapter-thank-you"
      className="py-32 md:py-48 px-6 md:px-12 bg-ivory-cream museum-grid relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg className="w-[60vw] h-[60vw] max-w-4xl" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="200" rx="140" ry="180" stroke="#6B4E42" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 relative z-10">
        {/* Chapter label */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] uppercase tracking-[0.3em] text-dusty-rose font-semibold bg-dusty-rose/10 px-3 py-1 rounded-full"
        >
          {lang === 'ar' ? 'فصل ٢٤ / ٢٤' : 'Chapter 24 / 24'}
        </motion.span>

        {/* Logo and Tagline centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="my-4"
        >
          <ValleyRoseLogo size="lg" color="#6B4E42" showText={true} />
        </motion.div>

        {/* Narrative closing */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`text-sm text-taupe font-sans font-light max-w-lg leading-relaxed ${
            lang === 'ar' ? 'font-ar' : ''
          }`}
        >
          {lang === 'ar'
            ? 'نشكركم على استكشاف الدليل الإرشادي لهوية وادي الورد البصرية. نرجو الحفاظ على هذه المعايير الفنية والنسب الجمالية لضمان بقاء علامتنا البصرية خالدة وراقية عبر كل نقطة اتصال.'
            : 'Thank you for exploring the Valley Rose brand guidelines. Let us preserve these standards to ensure our visual identity remains timeless, luxurious, and emotional across every touchpoint.'
          }
        </motion.p>

        {/* Small line */}
        <div className="w-12 h-[1px] bg-rose-gold/40" />

        {/* Contact detail */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-1 text-[10px] tracking-widest text-mocha-brown uppercase font-mono"
        >
          <span>{lang === 'ar' ? 'لجنة الهوية البصرية لوادي الورد' : 'Valley Rose Brand Committee'}</span>
          <span className="opacity-60">brand@valleyrose.com</span>
        </motion.div>
      </div>
    </section>
  );
}

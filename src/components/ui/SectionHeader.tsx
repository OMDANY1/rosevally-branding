'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';

interface SectionHeaderProps {
  num: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
}

export default function SectionHeader({
  num,
  title,
  titleAr,
  subtitle,
  subtitleAr
}: SectionHeaderProps) {
  const { lang } = useLang();

  return (
    <div className={`w-full flex flex-col gap-4 mb-12 md:mb-16 ${
      lang === 'ar' ? 'text-right items-end' : 'text-left items-start'
    }`}>
      {/* Chapter Number & Line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-4 w-full ${
          lang === 'ar' ? 'flex-row-reverse' : ''
        }`}
      >
        <span className="font-mono text-sm font-semibold text-dusty-rose bg-warm-beige/30 px-3 py-1 rounded-full select-none">
          {num}
        </span>
        <div className="h-[1px] bg-mocha-brown/10 flex-1" />
      </motion.div>

      {/* Title & Subtitle */}
      <div className="flex flex-col gap-2 w-full">
        {/* Title: Large Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-4xl md:text-5xl lg:text-6xl font-serif font-light text-mocha-brown leading-tight italic`}
        >
          {lang === 'ar' ? titleAr : title}
        </motion.h2>

        {/* Subtitle: Small Sans-Serif tracking */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.25em] text-taupe font-sans font-medium"
        >
          {lang === 'ar' ? subtitleAr : subtitle}
        </motion.p>
      </div>
    </div>
  );
}

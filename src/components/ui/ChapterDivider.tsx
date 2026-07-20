'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';

interface ChapterDividerProps {
  num: string;
  titleKey: string;
  subtitleKey?: string;
  id?: string;
}

export default function ChapterDivider({ num, titleKey, subtitleKey, id }: ChapterDividerProps) {
  const { lang, t } = useLang();

  return (
    <section
      id={id}
      className="min-h-[60vh] flex flex-col justify-center bg-soft-ivory py-24 md:py-36 px-6 md:px-12 border-y border-deep-earth/5"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          {/* Chapter Number */}
          <span className="font-mono text-5xl md:text-7xl font-extralight text-rose-dust tracking-tight">
            {num}
          </span>
          
          <div className="h-[1px] w-24 bg-rose-dust/30 my-4" />

          {/* Chapter Title */}
          <h2 className={`text-4xl md:text-6xl font-light tracking-tight text-deep-earth ${
            lang === 'ar' ? 'font-ar text-right' : 'font-sans text-left'
          }`}>
            {t(titleKey)}
          </h2>

          {/* Subtitle */}
          {subtitleKey && (
            <p className="text-sm tracking-widest text-stone-mist uppercase mt-2 font-medium max-w-xl">
              {t(subtitleKey)}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

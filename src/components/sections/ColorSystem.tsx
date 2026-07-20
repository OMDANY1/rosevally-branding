'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import { COLOR_SWATCHES } from '@/lib/constants';

export default function ColorSystem() {
  const { lang } = useLang();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 2000);
    });
  };

  const categories = [
    { key: 'primary', name: 'Primary Colors', nameAr: 'الألوان الأساسية', list: COLOR_SWATCHES.primary },
    { key: 'secondary', name: 'Secondary Colors', nameAr: 'الألوان الثانوية', list: COLOR_SWATCHES.secondary },
    { key: 'metallic', name: 'Metallic Accents', nameAr: 'اللمسات المعدنية', list: COLOR_SWATCHES.metallic }
  ];

  return (
    <section
      id="chapter-color-system"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      {/* Toast Alert for Copy Notification */}
      <AnimatePresence>
        {copiedColor && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-50 bg-mocha-brown text-ivory-cream px-6 py-3 rounded-full text-xs font-mono tracking-widest shadow-2xl"
          >
            {lang === 'ar' ? `تم نسخ ${copiedColor}` : `COPIED: ${copiedColor}`}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <SectionHeader
          num="10"
          title="Color System"
          titleAr="نظام الألوان"
          subtitle="Restraint, Warmth and Materiality"
          subtitleAr="الاعتدال والدفء وملمس المواد"
        />

        {/* Introduction text */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'يتجنب نظام الألوان لوادي الورد المظاهر الذهبية الزائفة والكليشيهات اللامعة التي تملأ السوق. بدلاً من ذلك، نعتمد على ألوان دافئة مأخوذة من بتلات الزهور والألياف الطبيعية وثقافة سيهات الساحلية العريقة. تم اختيار كل لون ليعبر عن الوقار والأناقة.'
              : 'Our palette rejects cheap, high-gloss gold laminates and cold corporate blacks. Instead, we rely on muted, organic tones derived from soft petals, unbleached linens, and coastal landscapes. True premium identity is expressed through balanced spacing and raw textures, not aggressive tones.'
            }
          </p>
        </div>

        {/* Categories rendering */}
        <div className="flex flex-col gap-16">
          {categories.map((cat) => (
            <div key={cat.key} className="flex flex-col gap-6">
              {/* Category Name */}
              <div className="border-b border-mocha-brown/10 pb-2">
                <h3 className={`text-xs uppercase tracking-[0.25em] text-mocha-brown font-mono font-semibold ${
                  lang === 'ar' ? 'text-right font-ar' : ''
                }`}>
                  {lang === 'ar' ? cat.nameAr : cat.name}
                </h3>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.list.map((swatch, idx) => (
                  <motion.div
                    key={swatch.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleCopy(swatch.hex)}
                    className="group bg-warm-beige/10 border border-mocha-brown/5 rounded-xl overflow-hidden hover:border-dusty-rose transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Visual block */}
                    <div 
                      className="w-full aspect-[3/1] transition-transform duration-500 group-hover:scale-[1.02] border-b border-mocha-brown/5" 
                      style={{ backgroundColor: swatch.hex }}
                    />

                    {/* Details Info */}
                    <div className={`p-5 flex flex-col gap-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-mocha-brown font-light italic truncate pr-2">
                          {swatch.name}
                        </span>
                        <span className="font-mono text-xs text-rose-gold font-medium shrink-0">
                          {swatch.hex}
                        </span>
                      </div>
                      <p className={`text-[11px] text-taupe font-sans font-light leading-relaxed min-h-[40px] ${
                        lang === 'ar' ? 'font-ar' : ''
                      }`}>
                        {lang === 'ar' ? swatch.descAr : swatch.desc}
                      </p>
                    </div>

                    {/* Action reveal */}
                    <div className="bg-warm-beige/30 border-t border-mocha-brown/5 py-2 px-5 text-center">
                      <span className="text-[9px] tracking-widest text-taupe uppercase font-mono group-hover:text-rose-gold transition-colors duration-300">
                        {lang === 'ar' ? 'انقر لنسخ رمز اللون' : 'Click to copy Hex'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

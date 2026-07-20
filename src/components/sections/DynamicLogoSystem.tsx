'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import { DYNAMIC_SYSTEM } from '@/lib/constants';
import Image from 'next/image';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function DynamicLogoSystem() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState('wedding');

  const activeItem = DYNAMIC_SYSTEM.find((item) => item.id === activeTab) || DYNAMIC_SYSTEM[0];

  return (
    <section
      id="chapter-dynamic-logo"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <SectionHeader
          num="09"
          title="Dynamic Logo System"
          titleAr="نظام الشعار الديناميكي"
          subtitle="One Identity. Infinite Adaptations."
          subtitleAr="هوية واحدة. تطبيقات لا حصر لها."
        />

        {/* Introduction block */}
        <div className="max-w-3xl mb-12 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'إن الشعار نفسه لا يتغير أو يتبدل؛ بل يظل ثابتاً لترسيخ التعرف والموثوقية. ومع ذلك، تتكيف البيئة الرسومية والألوان والخطوط والأعمال الفنية لتناسب الأجواء والسياقات المختلفة لمناسباتنا. يوضح المعرض التفاعلي أدناه كيفية تغير الهوية مع الحفاظ على الشعار الأساسي.'
              : 'Our logo acts as an unwavering anchor. It never shifts, bends, or alters. Instead, the typography styling, background layout borders, color tones, patterns, and floral imagery adapt dynamically. This system allows Valley Rose to speak contexts ranging from romantic weddings to minimal corporate gifts.'
            }
          </p>
        </div>

        {/* Responsive Horizontal Tabs Selector */}
        <div className="w-full overflow-x-auto pb-4 mb-12 scrollbar-thin border-b border-mocha-brown/10">
          <div className="flex gap-4 md:gap-6 min-w-max">
            {DYNAMIC_SYSTEM.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`py-2 px-4 text-xs uppercase tracking-widest transition-all duration-300 relative font-medium cursor-pointer ${
                  activeTab === item.id 
                    ? 'text-mocha-brown font-semibold' 
                    : 'text-taupe hover:text-mocha-brown'
                }`}
              >
                {lang === 'ar' ? item.nameAr : item.name}
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-rose-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left: Adaptive Card & Details (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Colored Badge */}
              <div className="flex items-center gap-4">
                <span 
                  className="w-4 h-4 rounded-full border border-mocha-brown/10" 
                  style={{ backgroundColor: activeItem.color }}
                />
                <h3 className={`text-2xl font-serif text-mocha-brown font-light italic ${
                  lang === 'ar' ? 'font-ar text-right' : ''
                }`}>
                  {lang === 'ar' ? activeItem.nameAr : activeItem.name}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-sm text-taupe font-sans font-light leading-relaxed ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}>
                {lang === 'ar' ? activeItem.descAr : activeItem.desc}
              </p>

              {/* Specific Visual Palette mapping */}
              <div className="flex flex-col gap-3 border-t border-mocha-brown/10 pt-6">
                <span className="text-[10px] uppercase tracking-widest text-taupe font-mono">
                  {lang === 'ar' ? 'المزاج اللوني والسياقي' : 'Contextual Palette'}
                </span>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1.5">
                    <div 
                      className="w-10 h-10 rounded-full border border-mocha-brown/10 shadow-sm" 
                      style={{ backgroundColor: activeItem.color }}
                    />
                    <span className="text-[9px] font-mono text-taupe">{activeItem.color}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div 
                      className="w-10 h-10 rounded-full border border-mocha-brown/10 shadow-sm" 
                      style={{ backgroundColor: activeItem.secondaryColor }}
                    />
                    <span className="text-[9px] font-mono text-taupe">{activeItem.secondaryColor}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div 
                      className="w-10 h-10 rounded-full border border-mocha-brown/10 shadow-sm" 
                      style={{ backgroundColor: activeItem.textColor }}
                    />
                    <span className="text-[9px] font-mono text-taupe">{activeItem.textColor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Real-World visual preview showing adaptive logo container (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-warm-beige/30 overflow-hidden border border-mocha-brown/5 rounded-xl group flex items-center justify-center">
                {/* Simulated adaptive layout styling based on activeTab */}
                <div 
                  className="absolute inset-0 z-0 transition-opacity duration-700 opacity-60 mix-blend-multiply filter contrast-[1.02]"
                >
                  <Image
                    src={activeItem.imagePath}
                    alt={lang === 'ar' ? activeItem.imageryDescAr : activeItem.imageryDesc}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                {/* Adaptive Card overlay on top of layout */}
                <div 
                  className="relative z-10 p-6 md:p-8 bg-ivory-cream/95 backdrop-blur-md shadow-2xl flex flex-col items-center text-center max-w-[280px]"
                  style={{ 
                    border: `1px solid rgba(107, 78, 66, 0.1)`,
                  }}
                >
                  <ValleyRoseLogo size="md" color={activeItem.textColor} showText={true} />
                </div>
              </div>
              <span className="text-[10px] tracking-widest text-taupe uppercase font-mono text-center block">
                {lang === 'ar' ? activeItem.imageryDescAr : activeItem.imageryDesc}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

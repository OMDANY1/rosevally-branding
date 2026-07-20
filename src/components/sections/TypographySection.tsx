'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';

export default function TypographySection() {
  const { lang } = useLang();

  const details = [
    {
      font: "Cormorant Garamond",
      type: "Primary Serif Headings",
      typeAr: "خط العناوين الرئيسي",
      char: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
      charAr: "أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي",
      rationale: "Cormorant Garamond is an editorial serif font carrying high-contrast, elegant proportions, and fine curves. Used for main headings, chapter dividers, and titles to convey a classic print-heritage identity.",
      rationaleAr: "هو خط كلاسيكي ذو حواف حادة وتباين عالٍ ومنحنيات غاية في الرقة. يُستخدم للعناوين الرئيسية، وفواصل الفصول، والأسماء التجارية للتعبير عن أصالة المطبوعات التحريرية والتراث الفني."
    },
    {
      font: "Inter",
      type: "Primary Geometric Sans-Serif Body",
      typeAr: "خط المتن والنصوص الرئيسي",
      char: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
      charAr: "٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩",
      rationale: "Inter is a modern, highly legible geometric sans-serif. It is utilized for body text, descriptions, table specs, and functional guides, guaranteeing breathing room and superior screen readability.",
      rationaleAr: "هو خط سان-سيريف هندسي معاصر يتسم بالوضوح المطلق وسلاسة القراءة على الشاشات والمطبوعات الوظيفية الصغيرة. يُستخدم للمتن والتفاصيل والشروح الفرعية لضمان مساحات تنفس مثالية."
    }
  ];

  return (
    <section
      id="chapter-typography"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <SectionHeader
          num="11"
          title="Typography"
          titleAr="الخطوط ونظام الطباعة"
          subtitle="Editorial Serb Headings paired with Modern Sans"
          subtitleAr="خطوط تحريرية كلاسيكية معاصرة"
        />

        {/* Specimens Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {details.map((item, idx) => (
            <motion.div
              key={item.font}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-warm-beige/10 border border-mocha-brown/5 rounded-xl flex flex-col gap-6"
            >
              {/* Font Header */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-dusty-rose font-mono">
                  {lang === 'ar' ? item.typeAr : item.type}
                </span>
                <span className="text-3xl font-serif text-mocha-brown font-light italic leading-none">
                  {item.font}
                </span>
              </div>

              <div className="h-[1px] bg-mocha-brown/10" />

              {/* Characters Preview */}
              <div className="py-4">
                <span className="text-[9px] tracking-widest text-taupe uppercase font-mono block mb-2">Character specimen</span>
                <p 
                  className={`text-xl tracking-widest font-serif text-mocha-brown leading-relaxed truncate ${
                    item.font === 'Inter' ? 'font-sans text-sm tracking-normal' : ''
                  }`}
                >
                  {lang === 'ar' ? item.charAr : item.char}
                </p>
                <p 
                  className={`text-2xl tracking-widest font-serif italic text-rose-gold leading-relaxed truncate mt-2`}
                >
                  {lang === 'ar' ? item.charAr : item.char.toLowerCase()}
                </p>
              </div>

              {/* Rationale */}
              <p className={`text-xs text-taupe font-sans font-light leading-relaxed ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}>
                {lang === 'ar' ? item.rationaleAr : item.rationale}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scale hierarchy demonstrator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 border-t border-mocha-brown/10 pt-16 flex flex-col gap-6"
        >
          <span className="text-[10px] tracking-[0.25em] text-taupe uppercase font-mono">
            {lang === 'ar' ? 'التسلسل الهرمي للمقاسات' : 'Typographic Size Scale'}
          </span>

          <div className="flex flex-col gap-8">
            {/* H1 */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-mocha-brown/5 pb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-light italic text-mocha-brown">
                {lang === 'ar' ? 'وادي الورد' : 'Valley Rose'}
              </span>
              <span className="font-mono text-[10px] text-taupe uppercase select-none">H1 / Cormorant Light / Letter Spacing: -0.01em</span>
            </div>

            {/* H2 */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-mocha-brown/5 pb-4">
              <span className="text-2xl md:text-3xl font-serif text-mocha-brown font-light">
                {lang === 'ar' ? 'تنسيق زهور فاخر' : 'Bespoke Floral Design'}
              </span>
              <span className="font-mono text-[10px] text-taupe uppercase select-none">H2 / Cormorant Regular / Letter Spacing: Normal</span>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-mocha-brown/5 pb-4">
              <p className="font-sans text-sm font-light text-mocha-brown max-w-xl leading-relaxed">
                {lang === 'ar' 
                  ? 'يتم تنسيق هذا النص بخط إنتير لتأكيد الوضوح والسهولة البصرية، مع مراعاة ارتفاع الأسطر لراحة العين.'
                  : 'This text is styled with the primary sans-serif font (Inter), establishing clean proportions and high readability across screens and labels.'
                }
              </p>
              <span className="font-mono text-[10px] text-taupe uppercase select-none">Body / Inter Light / Line Height: 1.75</span>
            </div>

            {/* Label */}
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-mocha-brown/5 pb-4">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-dusty-rose">
                {lang === 'ar' ? 'فصل الحرفية البصرية' : 'Chapter: Spatial Experience'}
              </span>
              <span className="font-mono text-[10px] text-taupe uppercase select-none">Label / Inter Semibold / Letter Spacing: 0.2em</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

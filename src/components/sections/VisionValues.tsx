'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';

export default function VisionValues() {
  const { lang } = useLang();

  const values = [
    {
      num: "01",
      title: "Editorial Elegance",
      titleAr: "الأناقة التحريرية",
      desc: "We prioritize restraint over decoration. Our visual language is defined by perfect geometry, generous white space, and subtle, soft tones that whisper instead of shouting.",
      descAr: "نحن نفضل الاعتدال والتبسيط على الزخرفة الزائدة. تُعرَّف لغتنا البصرية بالهندسة المثالية، والمساحات السلبية الواسعة، والنغمات الناعمة الهادئة التي تهمس بدلاً من الصراخ."
    },
    {
      num: "02",
      title: "Emotional Narrative",
      titleAr: "السرد العاطفي",
      desc: "Every floral arrangement is a form of respect and connection. We craft products and services to act as vessels for genuine human emotions, memories, and gratitude.",
      descAr: "كل تنسيق زهور هو شكل من أشكال التقدير والاتصال. نحن نصمم منتجاتنا وخدماتنا لتكون وسيلة لحمل المشاعر الإنسانية الصادقة، والذكريات، والامتنان المشترك."
    },
    {
      num: "03",
      title: "Meticulous Craft",
      titleAr: "الحرفية الدقيقة",
      desc: "From hand-sewn cotton ribbons and custom wax seals to the curation of rare stems, we believe that luxury is defined by the absolute obsession with tiny details.",
      descAr: "بدءاً من الأشرطة القطنية المخيطة يدوياً والأختام الشمعية المخصصة إلى تنسيق السيقان النادرة، نحن نؤمن بأن الفخامة تكمن في الاهتمام البالغ بأدق التفاصيل."
    },
    {
      num: "04",
      title: "Quiet Luxury",
      titleAr: "الفخامة الهادئة",
      desc: "True premium quality does not rely on bright colors or gold-foiled overlays. It is found in material integrity, composition balance, and respectful space.",
      descAr: "الجودة الفاخرة الحقيقية لا تعتمد على الألوان الصارخة أو الزخارف الذهبية اللامعة؛ بل تظهر في سلامة المواد وتناسق التكوين واحترام المساحة والمحيط."
    }
  ];

  return (
    <section
      id="chapter-vision-values"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <SectionHeader
          num="03"
          title="Vision & Values"
          titleAr="الرؤية والقيم"
          subtitle="The Pillars of Quiet Luxury"
          subtitleAr="ركائز الفخامة الهادئة"
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-8 bg-warm-beige/10 border border-mocha-brown/5 hover:border-dusty-rose transition-all duration-500 flex flex-col gap-6"
            >
              {/* Number and Line */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-rose-gold select-none">
                  {val.num}
                </span>
                <div className="h-[1px] bg-mocha-brown/10 flex-1" />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-serif font-light italic text-mocha-brown ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}>
                {lang === 'ar' ? val.titleAr : val.title}
              </h3>

              {/* Description */}
              <p className={`text-xs text-taupe font-sans font-light leading-relaxed ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}>
                {lang === 'ar' ? val.descAr : val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-mocha-brown/10 pt-16 mt-20 text-center flex flex-col items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.25em] text-dusty-rose uppercase font-mono">
            {lang === 'ar' ? 'بيان الهوية البصرية' : 'Brand Credo'}
          </span>
          <blockquote className={`text-xl md:text-2xl font-serif text-mocha-brown italic font-light max-w-2xl leading-relaxed ${
            lang === 'ar' ? 'font-ar' : ''
          }`}>
            {lang === 'ar'
              ? '«وادي الورد ينتمي للمكان. فخامتنا لا تأتي من البهرجة بل من الحضور الصادق والنسب البصرية الموزونة بدقة.»'
              : '“Luxury is not about what you add; it is about what you have the courage to leave out. We design for clarity, composure, and emotional depth.”'
            }
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

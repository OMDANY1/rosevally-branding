'use client';

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';

export default function GraphicPatternIcono() {
  const { lang } = useLang();

  const icons = [
    {
      name: "Bespoke Stem",
      nameAr: "ساق مخصصة",
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20" strokeLinecap="round" />
          <path d="M12 10C10.5 10 9 8.5 9 7C9 5.5 10.5 4 12 4C13.5 4 15 5.5 15 7C15 8.5 13.5 10 12 10Z" />
          <path d="M12 12C9 13.5 8 16 8 16" strokeLinecap="round" />
          <path d="M12 14C15 15.5 16 18 16 18" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Ribbon Knot",
      nameAr: "عقدة الشريط",
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" />
          <path d="M12 12L8 18" strokeLinecap="round" />
          <path d="M12 12L16 18" strokeLinecap="round" />
          <path d="M12 10V14" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Luxury Box",
      nameAr: "صندوق فاخر",
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <line x1="12" y1="6" x2="12" y2="18" />
        </svg>
      )
    },
    {
      name: "Calendar Event",
      nameAr: "موعد المناسبة",
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="14" rx="1.5" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="16" y1="3" x2="16" y2="7" />
          <circle cx="9" cy="14" r="1" fill="currentColor" />
          <circle cx="15" cy="14" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Oasis Spring",
      nameAr: "موقع الواحة",
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8 6 5 9 5 13C5 17 8 20 12 20C16 20 19 17 19 13C19 9 16 6 12 2Z" />
          <ellipse cx="12" cy="13" rx="4" ry="2" />
        </svg>
      )
    },
    {
      name: "Consultation",
      nameAr: "استشارة مخصصة",
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 16.1 20.1 17 19 17H7L3 21V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15Z" />
          <circle cx="8" cy="10" r="0.8" fill="currentColor" />
          <circle cx="12" cy="10" r="0.8" fill="currentColor" />
          <circle cx="16" cy="10" r="0.8" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-ivory-cream border-b border-mocha-brown/10">
      {/* 12 Graphic Language */}
      <section
        id="chapter-graphic-language"
        className="py-24 md:py-32 px-6 md:px-12 border-b border-mocha-brown/10"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="12"
            title="Graphic Language"
            titleAr="اللغة الرسومية"
            subtitle="The Architecture of Composition"
            subtitleAr="هندسة التكوين والشبكات"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-7 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
                {lang === 'ar'
                  ? 'تتأسس لغتنا الرسومية على مفاهيم التنظيم والاعتدال البصري المأخوذة من شبكات التصميم السويسرية والكتالوجات التحريرية الراقية. نستخدم خطوطاً بالغة الدقة (بين ٠.٥ بكسل و ١ بكسل) للفصل بين الفصول وتجميع البيانات، مع الحفاظ على مساحات بيضاء شاسعة تمنح التخطيط نفساً هادئاً. نتجنب تماماً المؤثرات البصرية الرخيصة مثل الظلال الساقطة والحدود السميكة.'
                  : 'Our graphic identity system is anchored on architectural layouts, Swiss grid modularity, and quiet negative space. We utilize ultra-thin rules (ranging from 0.5px to 1px) to divide chapters and categorize details. Composition itself acts as the primary ornament. Drop shadows, decorative borders, and loud graphics are strictly prohibited to maintain museum-grade composure.'
                }
              </p>
            </div>

            {/* Layout simulation card */}
            <div className="lg:col-span-5 p-8 bg-warm-beige/20 border border-mocha-brown/5 rounded-xl flex flex-col gap-6 select-none font-mono text-[9px] text-taupe">
              <div className="flex justify-between items-center border-b border-mocha-brown/10 pb-2">
                <span>SECTION ID: 082</span>
                <span>GRID: SYSTEM</span>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="h-6 bg-mocha-brown/5 border-l border-mocha-brown/20" />
                <div className="h-[1px] bg-mocha-brown/10" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-10 bg-mocha-brown/5" />
                  <div className="h-10 bg-mocha-brown/5" />
                  <div className="h-10 bg-mocha-brown/5" />
                </div>
              </div>
              <div className="flex justify-between text-[8px] opacity-60">
                <span>MARGIN: 40px</span>
                <span>RULE: 0.5px</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 14 Photography Style */}
      <section
        id="chapter-photography-style"
        className="py-24 md:py-32 px-6 md:px-12 border-b border-mocha-brown/10"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="14"
            title="Photography Style"
            titleAr="أسلوب التصوير"
            subtitle="The Texture of Natural Light"
            subtitleAr="نسيج الضوء الطبيعي"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <h4 className="font-serif text-lg text-mocha-brown font-light italic">
                {lang === 'ar' ? 'مبادئ التصوير الفني المعاصر' : 'Contemporary Editorial Directives'}
              </h4>
              <ul className={`list-disc list-inside flex flex-col gap-2 ${lang === 'ar' ? 'text-right' : ''}`}>
                <li>{lang === 'ar' ? 'إضاءة طبيعية ذات مصدر واحد فقط (الضوء الجانبي للنافذة).' : 'Single-source natural window light exclusively.'}</li>
                <li>{lang === 'ar' ? 'مساحات سلبية واسعة جداً (يحتل العنصر أقل من ٤٠٪ من الصورة).' : 'Extreme negative space (subject occupies < 40% of frame).'}</li>
                <li>{lang === 'ar' ? 'تصوير الماكرو المقرّب لقطرات الماء الندى وتفاصيل الأوراق.' : 'Macro water dew close-ups and stem textures.'}</li>
                <li>{lang === 'ar' ? 'أيدي بشرية تؤدي الحرفية الفنية (تجنب الوجوه للحفاظ على الغموض).' : 'Human hands in craft gestures, omitting visible faces.'}</li>
              </ul>
            </div>

            {/* Showcase Image */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-warm-beige/30 overflow-hidden border border-mocha-brown/5 rounded-xl group">
                <Image
                  src="/images/rose-macro.png"
                  alt="Photography Macro Style Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <span className="text-[10px] tracking-widest text-taupe uppercase font-mono text-center block">
                {lang === 'ar' ? 'مثال: لقطات الندى المقربة بنسب تباين عالية' : 'Specimen: Macro photography with extreme crop'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Iconography */}
      <section
        id="chapter-iconography"
        className="py-24 md:py-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="15"
            title="Iconography"
            titleAr="الأيقونات"
            subtitle="Outline Vector Integrity"
            subtitleAr="سلامة الخطوط المتجهة للأيقونات"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            <div className="lg:col-span-5 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
                {lang === 'ar'
                  ? 'تُرسم الأيقونات بخطوط متجهة بالغة الدقة (١ بكسل) مع الحفاظ على زوايا مفتوحة وتصميم هندسي مفرغ غير ممتلئ. يطابق لون الأيقونات لون النصوص الرئيسي (البني الداكن #6B4E42) لضمان التماسك المطلق. لا تستخدم أيقونات ممتلئة باللون أو ذات زوايا ملونة لكي لا تبدو رخيصة.'
                  : 'Valley Rose iconography is drawn with a strict 1px vector stroke, featuring open corners and outline-only configurations. Their color coordinates with our core typography text (Mocha Brown), rendering clean visual guides rather than decorative illustrations. Never fill or gradient the icons.'
                }
              </p>
            </div>

            {/* Icons Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {icons.map((ico, idx) => (
                <div key={idx} className="p-6 bg-warm-beige/10 border border-mocha-brown/5 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-rose-gold transition-colors duration-300">
                  <div className="text-rose-gold bg-warm-beige/30 p-4 rounded-full">
                    {ico.svg}
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-mono text-mocha-brown ${
                    lang === 'ar' ? 'font-ar' : ''
                  }`}>
                    {lang === 'ar' ? ico.nameAr : ico.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

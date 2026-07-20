'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function LogoSections() {
  const { lang } = useLang();
  const [hoveredGrid, setHoveredGrid] = useState(false);

  return (
    <div className="bg-ivory-cream border-b border-mocha-brown/10">
      {/* 04 Logo Story */}
      <section
        id="chapter-logo-story"
        className="py-24 md:py-32 px-6 md:px-12 border-b border-mocha-brown/10"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="04"
            title="Logo Story"
            titleAr="قصة الشعار"
            subtitle="The Vessel and the Bloom"
            subtitleAr="الوعاء والتفتّح"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className={`text-2xl font-serif text-mocha-brown italic font-light ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}>
                {lang === 'ar'
                  ? 'برعم واحد نقي، محمي داخل إطار بيضاوي متوازن.'
                  : 'A single pure bud, protected within a balanced oval capsule.'
                }
              </h3>
              <p className={`text-sm text-taupe font-sans font-light leading-relaxed max-w-xl ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}>
                {lang === 'ar'
                  ? 'يعبر الرمز عن تلاقي البنية المعمارية والحياة العضوية. تمثل الكبسولة المغلقة الاستقرار، وحماية الهدية الفاخرة، والإتقان، والاحتواء المادي. ينطلق برعم الوردة بلطف في المركز، بينما تكسر الأوراق الجانبية الحدود البيضاوية لتعلن عن النمو، والحياة، ورفرفة الطبيعة الحرة. الاسم والخط اللفظي يضفي صبغة كلاسيكية عريقة.'
                  : 'The master emblem represents the harmonious tension between structure and life. The outer oval represents physical enclosure, packaging protection, and architectural stability. At the center, the rosebud grows upward, while its two side leaves break the border to demonstrate organic freedom and vital force. The lettering is set in a customized serif typeface, delivering a classic print-heritage aesthetic.'
                }
              </p>
            </div>
            
            <div className="lg:col-span-5 flex justify-center py-8 bg-warm-beige/10 border border-mocha-brown/5 rounded-xl">
              <ValleyRoseLogo size="lg" color="black" />
            </div>
          </div>
        </div>
      </section>

      {/* 05 Logo Construction */}
      <section
        id="chapter-logo-construction"
        className="py-24 md:py-32 px-6 md:px-12 border-b border-mocha-brown/10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="05"
            title="Logo Construction"
            titleAr="بناء الشعار وهندسته"
            subtitle="Precise Proportions & Geometry"
            subtitleAr="النسب الدقيقة والهندسة"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Graphic construction visualizer */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-mocha-brown text-ivory-cream rounded-xl relative group">
              <span className="text-[9px] uppercase tracking-widest opacity-55 font-mono mb-6 select-none">
                {lang === 'ar' ? 'مرر لمشاهدة شبكة البناء' : 'Hover to reveal construction grid'}
              </span>

              {/* Master SVG with overlay grid lines on hover */}
              <div 
                className="relative w-48 h-64 flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setHoveredGrid(true)}
                onMouseLeave={() => setHoveredGrid(false)}
              >
                <ValleyRoseLogo size="custom" className="w-full h-full z-10" color="white" />
                
                {/* SVG Construction Overlay Lines */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 240">
                  {/* Axis lines */}
                  <motion.line 
                    x1="100" y1="0" x2="100" y2="240" 
                    stroke="#D9A28C" strokeWidth="1" strokeDasharray="3,3"
                    animate={{ opacity: hoveredGrid ? 1 : 0.2 }}
                  />
                  <motion.line 
                    x1="0" y1="87.5" x2="200" y2="87.5" 
                    stroke="#D9A28C" strokeWidth="1" strokeDasharray="3,3"
                    animate={{ opacity: hoveredGrid ? 1 : 0.2 }}
                  />
                  <motion.line 
                    x1="0" y1="120" x2="200" y2="120" 
                    stroke="#D9A28C" strokeWidth="1" strokeDasharray="3,3"
                    animate={{ opacity: hoveredGrid ? 1 : 0.2 }}
                  />

                  {/* Geometric circles */}
                  <motion.circle 
                    cx="100" cy="80" r="38" 
                    stroke="#D9A28C" strokeWidth="1" 
                    fill="none"
                    animate={{ opacity: hoveredGrid ? 0.8 : 0 }}
                  />
                  <motion.circle 
                    cx="100" cy="120" r="48" 
                    stroke="#D9A28C" strokeWidth="0.8" 
                    fill="none"
                    animate={{ opacity: hoveredGrid ? 0.6 : 0 }}
                  />
                  
                  {/* Angle tags */}
                  {hoveredGrid && (
                    <g className="text-[8px] fill-rose-gold font-mono">
                      <text x="145" y="85">R: 38</text>
                      <text x="15" y="125">Center Axis</text>
                      <text x="104" y="22">1:1.9 Ratio</text>
                    </g>
                  )}
                </svg>
              </div>

              <div className="mt-8 flex gap-4 text-[9px] tracking-wider font-mono opacity-50">
                <span>GRID SYSTEM: ACTIVE</span>
                <span>•</span>
                <span>SCALE: LOCKED</span>
              </div>
            </div>

            {/* Right: Technical specifications list */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <h4 className="font-serif text-lg text-mocha-brown font-light italic">
                {lang === 'ar' ? 'النسب الهندسية المحددة' : 'Locked Geometric Specifications'}
              </h4>
              <p>
                {lang === 'ar'
                  ? 'تمت مواءمة محاور الشعار مع نسب الشبكة المعيارية السويسرية. تبلغ نسبة ارتفاع الكبسولة إلى عرضها ١:١.٩ وهو المعيار الذهبي المتبع في البوابات والأقواس الكلاسيكية. وتلتقي الأوراق في المركز بزاوية متطابقة تماماً.'
                  : 'The master emblem uses precise vertical axis symmetry. The vertical oval capsule is calculated on a 1:1.9 proportional ratio, reflecting classic architectural archways. Petal shapes correspond exactly to concentric grids centered on the upper vertical axis, producing maximum stability, comfort, and timeless layout harmony.'
                }
              </p>
              <div className="border-t border-mocha-brown/10 pt-4 flex flex-col gap-2 font-mono text-xs">
                <div className="flex justify-between"><span>Capsule Proportion</span><span className="font-semibold text-mocha-brown">1:1.9 Ratio</span></div>
                <div className="flex justify-between"><span>Symmetry Axis</span><span className="font-semibold text-mocha-brown">Y-Axis (Centered)</span></div>
                <div className="flex justify-between"><span>Leaf Extension Angle</span><span className="font-semibold text-mocha-brown">15 Degrees (Offset)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Clear Space */}
      <section
        id="chapter-clear-space"
        className="py-24 md:py-32 px-6 md:px-12 border-b border-mocha-brown/10"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="06"
            title="Clear Space"
            titleAr="المساحة الآمنة للشعار"
            subtitle="Giving the Mark Room to Breathe"
            subtitleAr="منح الرمز مساحة للتنفس"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p>
                {lang === 'ar'
                  ? 'لضمان بقاء الشعار بارزاً وقوياً، يجب الحفاظ على مساحة آمنة حوله خالية تماماً من العناصر البصرية الأخرى. هذه المساحة يرمز لها بـ "X"، وهي تعادل عرض كوب برعم الوردة الداخلي. لا يُسمح بوضع نصوص، صور، حدود صفحات، أو علامات رسومية أخرى داخل هذا النطاق.'
                  : 'To guarantee visual clarity and impact, a strict isolation zone must be maintained around the emblem. This area must remain entirely clear of typography, page margins, secondary graphic assets, and photographic details. The size of this clear space is equal to “X”, defined as the outer width of the core rosebud.'
                }
              </p>
            </div>

            {/* Visualizer card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-12 bg-warm-beige/20 border border-mocha-brown/5 rounded-xl relative">
              <div className="relative p-8 border border-dashed border-rose-gold/40">
                <ValleyRoseLogo size="md" color="black" />
                
                {/* Exclusion Zone Indicators */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-rose-gold">Exclusion Zone (X)</div>
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 text-[9px] font-mono text-rose-gold rotate-90">X</div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-6 text-[9px] font-mono text-rose-gold -rotate-90">X</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-rose-gold">X</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 Minimum Size */}
      <section
        id="chapter-minimum-size"
        className="py-24 md:py-32 px-6 md:px-12 border-b border-mocha-brown/10"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="07"
            title="Minimum Size"
            titleAr="الحد الأدنى لحجم الشعار"
            subtitle="Preserving Legibility Across Mediums"
            subtitleAr="الحفاظ على الوضوح في كافة الوسائط"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visualizer cards */}
            <div className="lg:col-span-6 flex gap-6 items-end justify-center py-10 bg-warm-beige/10 border border-mocha-brown/5 rounded-xl">
              {/* Digital indicator */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-[32px] h-[38px] relative border border-mocha-brown/10 p-0.5">
                  <ValleyRoseLogo size="custom" className="w-full h-full" color="black" />
                </div>
                <span className="text-[10px] font-mono text-taupe">DIGITAL: 32px Wide</span>
              </div>

              <div className="h-16 w-[1px] bg-mocha-brown/10 self-center" />

              {/* Print indicator */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-[56px] h-[66px] relative border border-mocha-brown/10 p-1">
                  <ValleyRoseLogo size="custom" className="w-full h-full" color="black" />
                </div>
                <span className="text-[10px] font-mono text-taupe">PRINT: 15mm Wide</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p>
                {lang === 'ar'
                  ? 'الشعار مصمم ليتناسب مع التطبيقات الكبيرة والصغيرة جداً. ومع ذلك، للحفاظ على دقة التفاصيل، يجب عدم طباعته أو عرضه بأبعاد تقل عن الحدود الدنيا الموضحة. بالنسبة للمساحات الصغير جداً، نوصي باستخدام المونوغرام البسيط دون كتابة النص الفرعي.'
                  : 'To ensure fine lines do not blur or drop out, the logo must never be rendered below the specified dimensions. In digital layouts, preserve a minimum width of 32 pixels. For print applications (stationery, envelopes, tags), the width must not fall below 15mm. For formats smaller than this, utilize the simplified monogram (emblem only).'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 Logo Variations */}
      <section
        id="chapter-logo-variations"
        className="py-24 md:py-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="08"
            title="Logo Variations"
            titleAr="متغيرات الشعار"
            subtitle="Cohesive Expression Across Light & Dark"
            subtitleAr="التعبير المتناسق بين الفاتح والداكن"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Variation 1: Primary */}
            <div className="p-8 bg-ivory-cream border border-mocha-brown/10 flex flex-col items-center gap-6 rounded-xl">
              <ValleyRoseLogo size="md" color="black" />
              <div className="text-center font-mono text-[10px] text-taupe mt-4">
                <span className="font-semibold text-mocha-brown">PRIMARY</span>
                <p className="mt-1">Mocha Brown on Ivory Cream</p>
              </div>
            </div>

            {/* Variation 2: Reversed */}
            <div className="p-8 bg-mocha-brown text-ivory-cream flex flex-col items-center gap-6 rounded-xl">
              <ValleyRoseLogo size="md" color="white" />
              <div className="text-center font-mono text-[10px] text-ivory-cream/70 mt-4">
                <span className="font-semibold text-ivory-cream">REVERSED</span>
                <p className="mt-1">Ivory Cream on Mocha Brown</p>
              </div>
            </div>

            {/* Variation 3: Monochrome */}
            <div className="p-8 bg-white border border-mocha-brown/10 flex flex-col items-center gap-6 rounded-xl">
              <ValleyRoseLogo size="md" color="black" />
              <div className="text-center font-mono text-[10px] text-taupe mt-4">
                <span className="font-semibold text-black">MONOCHROME</span>
                <p className="mt-1">Pure Black on Solid White</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

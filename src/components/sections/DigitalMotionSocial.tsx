'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

export default function DigitalMotionSocial() {
  const { lang: currentLang } = useLang();
  
  // Motion states
  const [motionType, setMotionType] = useState<'fade' | 'mask' | 'scale' | 'none'>('none');

  // Social Grid
  const instagramGrid = [
    "/images/wedding.png",
    "/images/editorial-arrangement.png",
    "/images/packaging.png",
    "/images/qatif-oasis.png",
    "/images/rose-macro.png",
    "/images/arrangements.png"
  ];

  return (
    <div className="bg-ivory-cream border-b border-mocha-brown/10">
      {/* 20 Digital Experience */}
      <section
        id="chapter-digital-experience"
        className="py-24 md:py-36 px-6 md:px-12 border-b border-mocha-brown/5"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="20"
            title="Digital Experience"
            titleAr="التجربة الرقمية"
            subtitle="Quiet Interfaces & Responsive Grids"
            subtitleAr="واجهات هادئة وشبكات متجاوبة"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p className={currentLang === 'ar' ? 'text-right font-ar' : ''}>
                {currentLang === 'ar'
                  ? 'تحاكي واجهتنا الرقمية الإحساس المادي بتصفح كتالوج فني رفيع. نستخدم خلفيات ذات لون موحد وهو العاجي الدافئ (#F7F1E9)، وخطوطاً سوداء ناعمة قريبة من البني الداكن (#6B4E42)، مما يقلل من إجهاد العين ويضفي شعوراً بالدفء العضوي. نعتمد التخطيطات غير المتماثلة والمساحات الواسعة لعرض الأعمال الفنية للزهور كمعروضات متاحف.'
                  : 'Our digital footprint mimics opening a premium printed art catalog. We rely on single-shade Ivory Cream backdrops, thin rule separators, and Mocha Brown text to avoid high-contrast fatigue. Responsive layouts are asymmetrical, placing extreme focus on botanical assets as core exhibits. Grids stretch generously to let layouts breathe.'
                }
              </p>
            </div>

            {/* Simulated Desktop Preview */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-warm-beige/30 overflow-hidden border border-mocha-brown/15 rounded-lg flex flex-col">
                {/* Browser bar */}
                <div className="bg-mocha-brown/5 border-b border-mocha-brown/10 px-4 py-2 flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-mocha-brown/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-mocha-brown/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-mocha-brown/20" />
                  <div className="bg-ivory-cream/80 text-[8px] text-taupe/80 flex-1 py-1 px-4 ml-4 rounded font-mono text-center">
                    valleyrose.com
                  </div>
                </div>

                {/* Browser body */}
                <div className="flex-1 bg-ivory-cream p-6 flex flex-col justify-between items-center text-center">
                  <ValleyRoseLogo size="sm" color="#6B4E42" showText={true} />
                  <div className="w-16 h-[1px] bg-mocha-brown/15 my-2" />
                  <span className="text-[7px] uppercase tracking-[0.25em] text-taupe block">
                    {currentLang === 'ar' ? 'البوتيك الرقمي الفريد' : 'The Online Floral Studio'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21 Motion Principles */}
      <section
        id="chapter-motion-principles"
        className="py-24 md:py-36 px-6 md:px-12 border-b border-mocha-brown/5"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="21"
            title="Motion Principles"
            titleAr="مبادئ الحركة والانتقالات"
            subtitle="Ethereal Fades & Custom Easing Curves"
            subtitleAr="تلاشٍ أثيري ومنحنيات تسريع مخصصة"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Motion Sandbox (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-mocha-brown text-ivory-cream rounded-xl relative">
              <span className="text-[9px] uppercase tracking-widest opacity-50 font-mono mb-8">
                {currentLang === 'ar' ? 'انقر لتجربة حركة العناصر' : 'Click to preview motion guidelines'}
              </span>

              {/* Animating Subject Container */}
              <div className="relative w-48 h-48 bg-ivory-cream rounded-lg overflow-hidden flex items-center justify-center border border-ivory-cream/10 shadow-lg text-mocha-brown">
                <AnimatePresence mode="wait">
                  {motionType === 'none' && (
                    <motion.div key="none" className="text-center font-mono text-[10px] text-taupe">
                      SELECT EFFECT BELOW
                    </motion.div>
                  )}
                  {motionType === 'fade' && (
                    <motion.div
                      key="fade"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center"
                    >
                      <ValleyRoseLogo size="sm" showText={false} />
                      <span className="text-[9px] font-mono text-taupe mt-3">Soft Opacity Fade</span>
                    </motion.div>
                  )}
                  {motionType === 'mask' && (
                    <motion.div
                      key="mask"
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      animate={{ clipPath: 'inset(0% 0 0 0)' }}
                      exit={{ clipPath: 'inset(100% 0 0 0)' }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center"
                    >
                      <ValleyRoseLogo size="sm" showText={false} />
                      <span className="text-[9px] font-mono text-taupe mt-3">Reveal Mask Up</span>
                    </motion.div>
                  )}
                  {motionType === 'scale' && (
                    <motion.div
                      key="scale"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center"
                    >
                      <ValleyRoseLogo size="sm" showText={false} />
                      <span className="text-[9px] font-mono text-taupe mt-3">Soft Scale Expansion</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-3 gap-3 w-full mt-8">
                <button 
                  onClick={() => setMotionType('fade')}
                  className={`py-2 px-1 text-[9px] font-mono uppercase tracking-wider rounded border cursor-pointer transition-colors duration-300 ${
                    motionType === 'fade' 
                      ? 'bg-rose-gold text-mocha-brown border-rose-gold font-semibold' 
                      : 'border-ivory-cream/20 hover:bg-ivory-cream/10'
                  }`}
                >
                  Fade (1.2s)
                </button>
                <button 
                  onClick={() => setMotionType('mask')}
                  className={`py-2 px-1 text-[9px] font-mono uppercase tracking-wider rounded border cursor-pointer transition-colors duration-300 ${
                    motionType === 'mask' 
                      ? 'bg-rose-gold text-mocha-brown border-rose-gold font-semibold' 
                      : 'border-ivory-cream/20 hover:bg-ivory-cream/10'
                  }`}
                >
                  Reveal Mask
                </button>
                <button 
                  onClick={() => setMotionType('scale')}
                  className={`py-2 px-1 text-[9px] font-mono uppercase tracking-wider rounded border cursor-pointer transition-colors duration-300 ${
                    motionType === 'scale' 
                      ? 'bg-rose-gold text-mocha-brown border-rose-gold font-semibold' 
                      : 'border-ivory-cream/20 hover:bg-ivory-cream/10'
                  }`}
                >
                  Soft Scale
                </button>
              </div>
            </div>

            {/* Principles text descriptions */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p>
                {currentLang === 'ar'
                  ? 'تتحرك الانتقالات البصرية ببطء شديد وتدفق متزن، يحاكي تفتح بتلة الورد أو المد الساحلي الهادئ. نستخدم منحنى تسريع سويسري مخصص [0.16, 1, 0.3, 1] لتخفيف حدة الانتقال الرقمي. يتم الكشف عن الصور بتلاشي Opacity أو بالتمدد الطفيف من ٩٨٪ إلى ١٠٠٪ لتفادي المفاجآت البصرية.'
                  : 'Transitions in our digital ecosystem are slow, deliberate, and breath-like. We strictly apply a customized cubic-bezier ease curve [0.16, 1, 0.3, 1] to prevent sudden jumps. Image assets load via opacity fades and subtle scale changes (stretching from 98% to 100%), blending digital movement with print material presence.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 22 Social Media */}
      <section
        id="chapter-social-media"
        className="py-24 md:py-36 px-6 md:px-12 border-b border-mocha-brown/5"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="22"
            title="Social Media"
            titleAr="وسائل التواصل الاجتماعي"
            subtitle="Curated Exhibition Feed System"
            subtitleAr="معرض رقمي منسق ومنظم"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p>
                {currentLang === 'ar'
                  ? 'نعامل خلاصة منشوراتنا الاجتماعية كمعرض فني تحريري. لا ننشر صوراً صاخبة أو عشوائية؛ بل نلتزم بنسب مساحات سلبية تزيد عن ٥٠٪ ودرجات تباين منخفضة تماثل ألوان علامتنا. تكون العبارات قصيرة وشاعرية، ومكتوبة باللغة العربية الفصحى والإنجليزية.'
                  : 'Our social footprint is treated as a digital exhibition catalog. We maintain strict negative space ratios (above 50%), and desaturated, warm color grading. Captions are minimal and poetic, using lowercase English and formal Arabic. Loud marketing overlays and discount badges are completely forbidden.'
                }
              </p>
            </div>

            {/* IG Grid Preview */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-sm bg-warm-beige/20 p-4 border border-mocha-brown/10 rounded-xl flex flex-col gap-4 select-none">
                <span className="font-mono text-[9px] text-taupe uppercase tracking-widest text-center block border-b border-mocha-brown/15 pb-2">Instagram Grid Preview</span>
                <div className="grid grid-cols-3 gap-2">
                  {instagramGrid.map((img, idx) => (
                    <div key={idx} className="relative aspect-square bg-mocha-brown/5 overflow-hidden border border-mocha-brown/5">
                      <Image 
                        src={img} 
                        alt="Instagram specimen" 
                        fill 
                        sizes="(max-width: 640px) 30vw, 15vw" 
                        className="object-cover grayscale-[10%]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 23 Brand Applications */}
      <section
        id="chapter-brand-applications"
        className="py-24 md:py-36 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            num="23"
            title="Brand Applications"
            titleAr="تطبيقات العلامة التجارية"
            subtitle="Spatial Experience & Touchpoints"
            subtitleAr="التطبيقات الفراغية ونقاط الاتصال الملموسة"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Environment Image (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-warm-beige/30 overflow-hidden border border-mocha-brown/5 rounded-xl group">
                <Image
                  src="/images/closing-hero.png"
                  alt="Valley Rose Boutique spatial mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
              <span className="text-[10px] tracking-widest text-taupe uppercase font-mono text-center block">
                {currentLang === 'ar' ? 'محاكاة: المعرض الداخلي لبوتيك وادي الورد' : 'Mockup: Interior Space of Valley Rose Boutique'}
              </span>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
              <p>
                {currentLang === 'ar'
                  ? 'تمتد الهوية البصرية لوادي الورد لتشمل تصميم المعارض الحية والأزياء الموحدة ووسائل النقل. تتميز البوتيكات بوجود أسطح من الحجر المطفأ الطبيعي، وجدران من الجبس باللون العاجي (#F7F1E9)، وإضاءة خفية هادئة. ويرتدي الحرفيون مآزر قطنية بنية مخصصة (#6B4E42) مثبت عليها دبوس شعار نحاسي رقيق.'
                  : 'The Valley Rose visual footprint extends seamlessly into environmental spaces, uniforms, and vehicles. Physical boutiques feature lime-washed plaster walls, solid unpolished sandstone countertops, and hidden ambient lighting. Our florists wear bespoke, structured cotton aprons in Mocha Brown with a small, brushed brass logo badge pinned at the chest.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

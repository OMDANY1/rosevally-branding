'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';

export default function BrandStory() {
  const { lang } = useLang();

  return (
    <section
      id="chapter-brand-story"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <SectionHeader
          num="02"
          title="Brand Story"
          titleAr="قصة العلامة التجارية"
          subtitle="Cultivating Moments of Pure Emotion"
          subtitleAr="زراعة لحظات من المشاعر الصافية"
        />

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Big Statement & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`text-2xl md:text-3xl font-serif text-mocha-brown font-light italic leading-relaxed ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}
            >
              {lang === 'ar'
                ? '«لسنا مجرد متجر زهور؛ بل دار فنية للتصميم، تمتد جذورها في أعرق واحات الجزيرة العربية وتتلاقى مع آفاق الحاضر.»'
                : '“Valley Rose is not a shop. It is a design house. We do not arrange flowers; we cultivate emotions, transforming fleeting moments into permanent memories.”'
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-taupe font-sans font-light leading-relaxed ${
                lang === 'ar' ? 'font-ar text-right' : ''
              }`}
            >
              <div>
                <p>
                  {lang === 'ar'
                    ? 'نشأت دار وادي الورد من رغبة أصيلة في صياغة لغة تعبيرية جديدة للزهور في المنطقة الشرقية والمملكة. نستلهم رؤيتنا من الإرث الطبيعي الوافر للقطيف وسيهات — حيث تلتقي المياه العذبة للينابيع الارتوازية بمد وجزر مياه الخليج العربي.'
                    : 'Our journey began with a simple observation: the market is saturated with loud, generic floral arrangements that lack soul and identity. Valley Rose was born to offer an alternative — a standard of quiet luxury, meticulous craftsmanship, and poetic restraint.'
                  }
                </p>
              </div>
              <div>
                <p>
                  {lang === 'ar'
                    ? 'هذا التلاقي البديع بين خصوبة التربة وحركة البحر يمنحنا الفلسفة الإبداعية وراء علامتنا. كل غصن نختاره، وكل صندوق نقوم بتغليفه، وكل لون ندرجه في لوحة علامتنا، يحمل احتراماً عميقاً وثقافة كرم تعود لقرون مضت.'
                    : 'We look to the ancient oasis of Qatif, utilizing the geometry of date palm groves and the stillness of local artesian springs as our visual blueprint. The result is a brand that feels international in execution but deeply local in its intelligence and emotional resonance.'
                  }
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Embedded Editorial Image / Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="relative w-full aspect-[4/5] bg-warm-beige/30 overflow-hidden border border-mocha-brown/5">
              <Image
                src="/images/qatif-oasis.png"
                alt="Qatif Oasis Landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-75 hover:scale-105 transition-transform duration-1000 grayscale-[20%]"
              />
            </div>
            <span className="text-[10px] tracking-widest text-taupe uppercase font-mono text-center block">
              {lang === 'ar' ? 'صورة أرشيفية: مياه الواحة الهادئة بالقطيف' : 'Source: Silent Springs of Qatif Oasis'}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

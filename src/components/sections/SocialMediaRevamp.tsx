'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';
import { X, BookOpen } from 'lucide-react';

interface PostItem {
  id: string;
  category: string;
  categoryAr: string;
  title: string;
  titleAr: string;
  image: string;
  tagline: string;
  taglineAr: string;
  isQuote?: boolean;
  quoteText?: string;
  quoteTextAr?: string;
  specs: {
    font: string;
    layout: string;
    layoutAr: string;
    margin: string;
    color: string;
    copywriting: string;
    copywritingAr: string;
  };
}

export default function SocialMediaRevamp() {
  const { lang } = useLang();
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);

  const posts: PostItem[] = [
    {
      id: "ig-bouquet",
      category: "Branded Bouquet",
      categoryAr: "باقة بتوقيع العلامة",
      title: "Luxury Bouquet & Ribbon",
      titleAr: "باقة زهور وأشرطة مخصصة",
      image: "/images/ig-bouquet.png",
      tagline: "Floral stems wrapped in natural linen thread",
      taglineAr: "سيقان زهور ملفوفة بخيوط الكتان الطبيعية",
      specs: {
        font: "Inter Light, numbers in Cormorant Garamond Italic",
        layout: "Central focus crop, 40% surrounding negative space.",
        layoutAr: "تركيز مركزي مقرب، ٤٠٪ مساحة سلبية محيطة.",
        margin: "Natural margins with high-contrast framing.",
        color: "Ivory Cream background, natural green and dust tones.",
        copywriting: "Quiet descriptions of flower species, avoiding pricing.",
        copywritingAr: "وصف هادئ لأنواع الزهور ومواسمها دون ذكر الأسعار."
      }
    },
    {
      id: "ig-wrapping",
      category: "Pattern Wrapping",
      categoryAr: "غلاف منقوش بالنمط",
      title: "Custom Pattern Wrapping Paper",
      titleAr: "ورق التغليف بالنمط المعتمد",
      image: "/images/ig-wrapping.png",
      tagline: "Hand-illustrated seamless wrapping sheets",
      taglineAr: "ورق تغليف بنقوش عضوية منسابة",
      specs: {
        font: "Cormorant Garamond Regular, Inter Regular",
        layout: "Asymmetrical diagonal layout grid.",
        layoutAr: "تخطيط شبكي مائل غير متماثل مريح للعين.",
        margin: "Balanced borders mimicking print catalog pages.",
        color: "Dusty Rose (#D9B4B7) pattern base, Ivory Cream paper.",
        copywriting: "Focusing on packaging tactility and sustainable inks.",
        copywritingAr: "التركيز على ملمس ورق التغليف وأحبار الطباعة الصديقة للبيئة."
      }
    },
    {
      id: "ig-gift-box",
      category: "Luxury Gift Box",
      categoryAr: "علبة الهدايا الفاخرة",
      title: "Premium Gift Box & Tissue",
      titleAr: "صندوق هدايا فاخر وورق مناديل",
      image: "/images/ig-gift-box.png",
      tagline: "Rigid unbleached cardboard with wax seals",
      taglineAr: "كرتون صلب طبيعي مغلق بأختام الشمع",
      specs: {
        font: "Cormorant Garamond Italic (H1), Inter Light",
        layout: "Spacious flatlay composition, 55% negative space.",
        layoutAr: "تكوين مسطح واسع، ٥٥٪ مساحة سلبية خالية.",
        margin: "Outer canvas margin 60px, content offsets.",
        color: "Mocha Brown cardboard box, Blush Pink tissue wrap.",
        copywriting: "Sincere stories of gift curation and personal messages.",
        copywritingAr: "رواية تفاصيل إعداد الهدية وقيمة الرسائل الشخصية المكتوبة يدوياً."
      }
    },
    {
      id: "ig-quote",
      category: "Editorial Quote",
      categoryAr: "اقتباس تحريري ملهم",
      title: "Inspirational Brand Philosophy",
      titleAr: "فلسفة الدار الخطية الملهمة",
      image: "",
      isQuote: true,
      quoteText: "“Nature does not hurry, yet everything is accomplished.”",
      quoteTextAr: "“الطبيعة لا تستعجل خطتها، ومع ذلك يتم كل شيء في وقته.”",
      tagline: "Typography statement in massive space",
      taglineAr: "خطوط كلاسيكية في مساحة سلبية شاسعة",
      specs: {
        font: "Cormorant Garamond Italic",
        layout: "Pure typographical layout, perfectly centered.",
        layoutAr: "تكوين خطي نقي بالكامل، متمركز رأسياً وأفقياً.",
        margin: "Restricted to central 30% of the screen boundary.",
        color: "Ivory Cream background, Mocha Brown text.",
        copywriting: "Philosophical reflections on slow floristry and organic time.",
        copywritingAr: "تأملات فلسفية حول تنسيق الزهور البطيء والزمن الطبيعي للنمو."
      }
    },
    {
      id: "ig-wedding",
      category: "Spatial Installation",
      categoryAr: "التنسيق الفراغي للمناسبات",
      title: "Wedding Arch & Greenery",
      titleAr: "قوس الزفاف والنباتات المعلقة",
      image: "/images/ig-wedding.png",
      tagline: "Modern brass arch with cascading roses",
      taglineAr: "قوس نحاسي مع طبقات زهور متتالية",
      specs: {
        font: "Cormorant Garamond Light",
        layout: "Architectural grid alignment, tall vertical crops.",
        layoutAr: "محاذاة شبكية معمارية، لقطات رأسية طويلة.",
        margin: "Standardized borders mimicking design portfolios.",
        color: "Sage Green accents, warm brass reflections, soft whites.",
        copywriting: "Poetic summaries of architectural event spaces.",
        copywritingAr: "صياغة تعبيرية موجزة تصف فراغ المناسبة وهندستها."
      }
    },
    {
      id: "ig-shopping-bag",
      category: "Branded Bag",
      categoryAr: "حقيبة تسوق العلامة",
      title: "Textured Shopping Bag & Logo",
      titleAr: "حقيبة تسوق بملمس بارز وشعار مذهب",
      image: "/images/ig-shopping-bag.png",
      tagline: "Ivory laid paper with debossed monogram",
      taglineAr: "حقائب ورق عاجي بمونوغرام غائر خفيف",
      specs: {
        font: "Inter Light (Monogram labels)",
        layout: "Close-up macro angle, emphasizing textured paper grains.",
        layoutAr: "زاوية ماكرو مقربة تبرز نسيج الورق المحبب الفاخر.",
        margin: "12% safety margin on all edges.",
        color: "Ivory Cream board, soft shadow play.",
        copywriting: "Highlighting the post-purchase unboxing ritual.",
        copywritingAr: "إبراز طقوس استلام الحقيبة وتأثيرها البصري الملموس."
      }
    },
    {
      id: "ig-vase",
      category: "Curated Arrangement",
      categoryAr: "تنسيق زهور في مزهرية",
      title: "Vase Sculptural Composition",
      titleAr: "تكوين منحوت في مزهرية فاخرة",
      image: "/images/ig-vase.png",
      tagline: "Sculptural ranunculus in travertine vase",
      taglineAr: "تنسيق متوازن في وعاء حجر ترافرتين",
      specs: {
        font: "Cormorant Garamond Regular",
        layout: "Asymmetrical single-stem focus.",
        layoutAr: "تنسيق غير متماثل يركز على ساق زهرة منفردة.",
        margin: "Spacious borders, concrete backdrop.",
        color: "Stone texture, neutral taupe and warm white.",
        copywriting: "Silent statement on visual balance and sculptural form.",
        copywritingAr: "بيان فني صامت حول التوازن البصري والكتلة الهندسية الفنية."
      }
    },
    {
      id: "ig-mood",
      category: "Brand Story Mood",
      categoryAr: "منشور إلهام وهوية العلامة",
      title: "Unbleached Textures Moodboard",
      titleAr: "لوحة إلهام المواد الخام الملموسة",
      image: "/images/ig-mood.png",
      tagline: "Tactile materials, plaster, linen and petals",
      taglineAr: "لوحة مزاجية تجمع الكتان والجبس وبتلات الورد",
      specs: {
        font: "Inter Regular (small tags)",
        layout: "Masonry collage, overlapping grids.",
        layoutAr: "تنسيق كولاج غير متماثل بشبكات متداخلة.",
        margin: "8% border frame.",
        color: "Warm White, Sage Green, and Blush Pink tones.",
        copywriting: "Sensory keywords: organic, silent, raw, structured.",
        copywritingAr: "كلمات حسية مستهدفة: عضوي، صامت، خام، منظم."
      }
    },
    {
      id: "ig-packaging-detail",
      category: "Packaging Detail",
      categoryAr: "تفاصيل التعبئة والتغليف",
      title: "Wax Seal & Envelope Liner",
      titleAr: "الختم الشمعي وبطانة المغلف المطبوعة",
      image: "/images/ig-packaging-detail.png",
      tagline: "Hand-pressed wax seal on envelope liner",
      taglineAr: "ختم شمعي مضغوط يدوياً على بطانة المغلف",
      specs: {
        font: "Inter Light (Monogram), Cormorant Garamond Regular",
        layout: "Extreme close-up macro, natural window light.",
        layoutAr: "لقطة مقربة جداً ماكرو مع إضاءة نافذة طبيعية.",
        margin: "Centered content, high detail preservation.",
        color: "Terracotta-blush wax color, Ivory Cream envelope.",
        copywriting: "Focusing on the tactile and unhurried hand-craft process.",
        copywritingAr: "التركيز على العمل اليدوي المتأني وتوقيع العلامة الملموس."
      }
    }
  ];

  return (
    <section
      id="chapter-social-media"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      {/* Background visual arches */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg className="w-[90vw] h-[90vw]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="300" rx="200" ry="280" stroke="#6B4E42" strokeWidth="0.5" />
          <ellipse cx="300" cy="300" rx="100" ry="180" stroke="#6B4E42" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chapter Header */}
        <SectionHeader
          num="22"
          title="Social Media"
          titleAr="وسائل التواصل الاجتماعي"
          subtitle="Curated 3x3 Instagram Editorial Feed"
          subtitleAr="تخطيط شبكي متكامل ٣×٣ لإنستغرام منسق تحريرياً"
        />

        {/* Narrative layout */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'نعرض أدناه تخطيطاً شبكياً متكاملاً ٣×٣ لحساب إنستغرام الخاص بوادي الورد. تم تصميم كل منشور وتوليده بدقة ليعكس فلسفة العلامة وموادها الملموسة—من أشرطة الكتان المنسوجة وورق التغليف المنقوش بالنمط المعتمد، إلى المزهريات الحجرية واللافتات المعمارية. انقر على أي منشور لمعاينة التخطيط وتفاصيل المواصفات الفنية.'
              : 'Our social feed acts as a curated editorial magazine layout. Below is our complete 3x3 Instagram grid showcasing high-resolution branded visuals—including linen-wrapped bouquets, custom pattern wrapping paper, rigid gift boxes with wax seals, and concrete-framed spatial designs. Click any tile to inspect its typography, color palettes, and copywriting guidelines.'
            }
          </p>
        </div>

        {/* Instagram Premium 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-warm-beige/10 border border-mocha-brown/5 rounded-xl overflow-hidden hover:border-rose-gold transition-all duration-500 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-square bg-mocha-brown/5 overflow-hidden border-b border-mocha-brown/5 flex items-center justify-center">
                {/* Overlay details */}
                <div className="absolute inset-0 bg-mocha-brown/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-center p-6 text-center text-ivory-cream gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-gold bg-rose-gold/10 px-2.5 py-1 rounded-full">
                    {lang === 'ar' ? post.categoryAr : post.category}
                  </span>
                  <h4 className="font-serif text-lg italic font-light">
                    {lang === 'ar' ? post.titleAr : post.title}
                  </h4>
                  <span className="text-[10px] tracking-wider font-sans font-light opacity-75 mt-1 flex items-center gap-1.5">
                    <BookOpen size={10} />
                    {lang === 'ar' ? 'معاينة المواصفات' : 'Inspect Specifications'}
                  </span>
                </div>

                {post.isQuote ? (
                  /* Typographic Quote Specimen */
                  <div className="w-full h-full bg-ivory-cream p-8 flex flex-col justify-between text-center select-none text-mocha-brown relative">
                    <div className="absolute inset-4 border border-mocha-brown/5 rounded" />
                    <div className="w-8 h-8 mx-auto opacity-10 flex items-center justify-center">
                      <ValleyRoseLogo size="custom" className="w-full h-full" color="black" />
                    </div>
                    <p className="font-serif text-sm italic leading-relaxed px-4 my-auto">
                      {lang === 'ar' ? post.quoteTextAr : post.quoteText}
                    </p>
                    <span className="font-mono text-[7px] tracking-widest uppercase opacity-40">CHAPTER 22.04</span>
                  </div>
                ) : (
                  /* High resolution generated asset */
                  <Image
                    src={post.image}
                    alt={lang === 'ar' ? post.titleAr : post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              {/* Caption Summary Panel */}
              <div className={`p-5 flex flex-col gap-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                <span className="font-mono text-[8px] uppercase tracking-widest text-dusty-rose font-medium">
                  {lang === 'ar' ? post.categoryAr : post.category}
                </span>
                <span className="font-serif text-base text-mocha-brown font-light italic truncate">
                  {lang === 'ar' ? post.titleAr : post.title}
                </span>
                <span className="text-[10px] text-taupe font-sans font-light truncate mt-1">
                  {lang === 'ar' ? post.taglineAr : post.tagline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Specifications Drawer */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-black"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative bg-ivory-cream w-full max-w-xl h-full shadow-2xl flex flex-col justify-between z-10 border-l border-mocha-brown/10 p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-mocha-brown/10 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-dusty-rose font-semibold">
                      {lang === 'ar' ? selectedPost.categoryAr : selectedPost.category}
                    </span>
                    <h3 className="font-serif text-xl italic font-light text-mocha-brown">
                      {lang === 'ar' ? selectedPost.titleAr : selectedPost.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 text-taupe hover:text-mocha-brown cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
                  {/* Mockup Preview box */}
                  <div className="bg-warm-beige/30 p-6 rounded-xl flex justify-center items-center mb-8 border border-mocha-brown/5">
                    {selectedPost.isQuote ? (
                      <div className="w-full max-w-[280px] bg-ivory-cream border border-mocha-brown/10 p-6 rounded text-center flex flex-col items-center justify-center min-h-[140px] text-mocha-brown relative">
                        <div className="absolute inset-3 border border-mocha-brown/5 rounded" />
                        <p className="text-[13px] font-serif italic font-light leading-relaxed">
                          {lang === 'ar' ? selectedPost.quoteTextAr : selectedPost.quoteText}
                        </p>
                      </div>
                    ) : (
                      <div className="w-[240px] aspect-square relative bg-ivory-cream border border-mocha-brown/10 rounded overflow-hidden shadow-lg">
                        <Image
                          src={selectedPost.image}
                          alt="Feed visualizer"
                          fill
                          sizes="240px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Layout Specs */}
                  <div className="flex flex-col gap-4 border-t border-mocha-brown/10 pt-6">
                    <h4 className="font-serif text-base text-mocha-brown font-light italic">
                      {lang === 'ar' ? 'مواصفات التخطيط والتنسيق' : 'Layout Specifications'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-taupe uppercase">
                      <div className="flex flex-col gap-0.5">
                        <span>Typography Font</span>
                        <span className="text-mocha-brown font-semibold font-sans normal-case">{selectedPost.specs.font}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span>Layout Grids</span>
                        <span className="text-mocha-brown font-semibold font-sans normal-case">
                          {lang === 'ar' ? selectedPost.specs.layoutAr : selectedPost.specs.layout}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span>Standard Margins</span>
                        <span className="text-mocha-brown font-semibold font-sans normal-case">{selectedPost.specs.margin}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span>Color Backdrops</span>
                        <span className="text-mocha-brown font-semibold font-sans normal-case">{selectedPost.specs.color}</span>
                      </div>
                    </div>

                    {/* Copywriting Rules */}
                    <div className="flex flex-col gap-1 mt-2 border-t border-mocha-brown/5 pt-4">
                      <span className="font-mono text-[10px] text-taupe uppercase">Copywriting Rules</span>
                      <p className={`text-xs text-taupe font-sans font-light leading-relaxed mt-1 ${
                        lang === 'ar' ? 'text-right font-ar' : ''
                      }`}>
                        {lang === 'ar' ? selectedPost.specs.copywritingAr : selectedPost.specs.copywriting}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="border-t border-mocha-brown/10 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-taupe">
                  <span>VALLEY ROSE SOCIAL IDENTITY</span>
                  <span>ID: {selectedPost.id.toUpperCase()}</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

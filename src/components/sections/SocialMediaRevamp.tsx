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
  thumbnail: string;
  tagline: string;
  taglineAr: string;
  type: 'carousel' | 'story' | 'feed' | 'highlight' | 'reel';
  specs: {
    font: string;
    layout: string;
    layoutAr: string;
    margin: string;
    color: string;
    copywriting: string;
    copywritingAr: string;
  };
  carouselSlides?: {
    image: string;
    text: string;
    textAr: string;
  }[];
  storyDetails?: {
    bgImage: string;
    text: string;
    textAr: string;
  };
  quoteText?: string;
  careList?: string[];
  careListAr?: string[];
}

export default function SocialMediaRevamp() {
  const { lang } = useLang();
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const posts: PostItem[] = [
    {
      id: "carousel-cover",
      category: "Carousel Cover",
      categoryAr: "غلاف منشور دائري",
      title: "Al-Nab'a / The Spring",
      titleAr: "النبع / مجموعة الربيع",
      thumbnail: "/images/qatif-oasis.png",
      tagline: "Derived from silent natural waters",
      taglineAr: "مستوحى من المياه الساكنة",
      type: "carousel",
      specs: {
        font: "Cormorant Garamond Regular (H1), Inter Light (Body)",
        layout: "Asymmetrical vertical split, 60% negative space.",
        layoutAr: "تقسيم رأسي غير متماثل، ٦٠٪ مساحة سلبية.",
        margin: "Outer margin 80px, inner text spacing 24px.",
        color: "Ivory Cream (#F7F1E9) backdrop, Mocha Brown text.",
        copywriting: "Poetic, slow-paced, focusing on provenance and soil heritage.",
        copywritingAr: "صياغة شاعرية بطيئة، تركز على المنشأ وإرث الأرض والتربة."
      },
      carouselSlides: [
        { image: "/images/qatif-oasis.png", text: "01 / The Spring Collection", textAr: "٠١ / مجموعة النبع لربيع ٢٠٢٦" },
        { image: "/images/editorial-arrangement.png", text: "02 / Restrained Floristry", textAr: "٠٢ / تنسيق مبسط للزهور النادرة" },
        { image: "/images/packaging.png", text: "03 / The Unboxing Ceremony", textAr: "٠٣ / طقوس استلام وفتح الهدية" },
        { image: "/images/wedding.png", text: "04 / Artistry in Celebration", textAr: "٠٤ / تنسيق فني للمناسبات والأعراس" }
      ]
    },
    {
      id: "wedding-post",
      category: "Wedding Collection Post",
      categoryAr: "منشور مجموعة الأعراس",
      title: "Noor & Faisal Ceremony",
      titleAr: "زفاف نور وفيصل",
      thumbnail: "/images/wedding.png",
      tagline: "A spatial layout of floral architecture",
      taglineAr: "تنسيق فراغي لهندسة الزهور",
      type: "feed",
      specs: {
        font: "Cormorant Garamond Italic",
        layout: "High-contrast editorial grid crop, thin border line overlay.",
        layoutAr: "تخطيط شبكي تحريري عالي التباين مع خطوط حدود رقيقة.",
        margin: "Standard grid spacing with 10% outer padding.",
        color: "Mocha Brown on Blush Pink background.",
        copywriting: "Intimate and silent, carrying details of the couple's program.",
        copywritingAr: "نبرة هادئة وحميمة، تنقل تفاصيل حفل الزفاف ومزاج المناسبة."
      },
      storyDetails: {
        bgImage: "/images/wedding.png",
        text: "Noor & Faisal — Spatial Floristry Suite",
        textAr: "نور وفيصل — جناح التنسيق الزهري الفراغي"
      }
    },
    {
      id: "behind-scenes",
      category: "Behind The Scenes",
      categoryAr: "كواليس العمل الحرفي",
      title: "The Florist's Hands",
      titleAr: "أيدي منسق الزهور",
      thumbnail: "/images/editorial-arrangement.png",
      tagline: "Honoring the micro-details of craft",
      taglineAr: "تقدير التفاصيل الدقيقة للحرفة",
      type: "feed",
      specs: {
        font: "Inter Light, 9px tracking [0.2em] labels",
        layout: "Extreme close-up macro, natural window lighting.",
        layoutAr: "لقطة ماكرو مقربة للغاية مع إضاءة نافذة طبيعية جانبية.",
        margin: "Centered content offset, large white margins.",
        color: "Natural tones, low contrast saturation.",
        copywriting: "Focus on the tactile experience: unbleached cotton, woven linen.",
        copywritingAr: "التركيز على التجربة الملموسة للمواد: القطن غير المبيض، والكتان."
      }
    },
    {
      id: "story-template",
      category: "Story Template",
      categoryAr: "قالب قصص إنستغرام",
      title: "The Invitation Suite",
      titleAr: "دعوة زفاف خاصة",
      thumbnail: "/images/moodboard-01.png",
      tagline: "Vertical proportion and golden arch lines",
      taglineAr: "أبعاد رأسية وأقواس ذهبية رقيقة",
      type: "story",
      specs: {
        font: "Cormorant Garamond Light",
        layout: "Single column, centered vertical alignment with arch line boundary.",
        layoutAr: "عامود واحد، محاذاة رأسية متمركزة مع حدود منحنية دقيقة.",
        margin: "Safe zone margins 120px top and bottom.",
        color: "Ivory Cream background, Rose Gold borders.",
        copywriting: "Minimalist scheduling information, clean date formatting.",
        copywritingAr: "تفاصيل الموعد والجدولة بأسلوب مبسط وواضح."
      },
      storyDetails: {
        bgImage: "/images/moodboard-01.png",
        text: "A Ceremony of Art and Nature",
        textAr: "طقس فني يجمع الطبيعة بالتصميم"
      }
    },
    {
      id: "floral-tips",
      category: "Floral Care Tips",
      categoryAr: "إرشادات العناية بالزهور",
      title: "Preserving the Bloom",
      titleAr: "كيف نحافظ على تفتح الزهور",
      thumbnail: "/images/rose-macro.png",
      tagline: "Three steps to extend organic lifespan",
      taglineAr: "ثلاث خطوات لإطالة عمر الباقة",
      type: "carousel",
      specs: {
        font: "Inter Light, numbers in Cormorant Garamond Regular",
        layout: "Numbered list vertical stack, spacious lines.",
        layoutAr: "قائمة رقمية رأسية مع تباعد أسطر مريح وواسع.",
        margin: "Margin left 64px, listing indentation 32px.",
        color: "Ivory Cream background, Mocha Brown text.",
        copywriting: "Educational, direct, and respectful of the raw materials.",
        copywritingAr: "نبرة تعليمية ومباشرة تحترم الطبيعة والزهور."
      },
      careList: [
        "1. Trim stems at a 45-degree angle using sharp florist shears.",
        "2. Place in clean, room-temperature artesian water immediately.",
        "3. Position in shadow play, avoiding direct harsh sunlight."
      ],
      careListAr: [
        "١. قلم سيقان الزهور بزاوية ٤٥ درجة باستخدام مقص حاد.",
        "٢. ضع الباقة في ماء ينابيع عذب وبدرجة حرارة الغرفة فوراً.",
        "٣. اختر مكاناً ظليلاً وبارداً وتجنب أشعة الشمس المباشرة الحارة."
      ]
    },
    {
      id: "quote-post",
      category: "Quote Post",
      categoryAr: "منشور الاقتباس التحريري",
      title: "Editorial Statement",
      titleAr: "البيان الفني للهوية",
      thumbnail: "/images/moodboard-02.png",
      tagline: "Bold typography in negative space",
      taglineAr: "خطوط عريضة ومساحات سلبية واسعة",
      type: "feed",
      specs: {
        font: "Cormorant Garamond Italic",
        layout: "Completely typographical, centered, no backgrounds.",
        layoutAr: "تكوين خطي نقي بالكامل، متمركز، بدون خلفيات مشتتة.",
        margin: "Massive margins, text restricted to middle 30% of canvas.",
        color: "Mocha Brown text on Ivory Cream.",
        copywriting: "Poetic declarations about beauty, respect, and craftsmanship.",
        copywritingAr: "عبارات قصيرة ملهمة عن الجمال والاحترام والحرفية اليدوية."
      },
      quoteText: "“Some mornings, the light does half the work.” / “بعض الصباحات، الضوء يكمل نصف العمل.”"
    },
    {
      id: "social-thank-you",
      category: "Thank You Post",
      categoryAr: "منشور الشكر والختام",
      title: "Where Happiness Flows",
      titleAr: "حيث تتدفق السعادة",
      thumbnail: "/images/logo-sketches.jpg",
      tagline: "Solid white brand mark centered",
      taglineAr: "شعار الهوية باللون الأبيض المتمركز",
      type: "reel",
      specs: {
        font: "Inter Light (Tagline)",
        layout: "Centered emblem layout on solid dark canvas.",
        layoutAr: "تخطيط يتوسطه شعار الهوية الأبيض على خلفية داكنة.",
        margin: "Perfect centering on all axes.",
        color: "Ivory Cream emblem on Mocha Brown background.",
        copywriting: "Sincere gratitude, highlighting brand signature.",
        copywritingAr: "شكر وتقدير صادق، مع إبراز توقيع العلامة التجارية."
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
          subtitle="Fashion Editorial & Luxury Branding Feed"
          subtitleAr="معرض رقمي منسق مستوحى من مجلات الموضة"
        />

        {/* Narrative layout */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'لا نعامل حساباتنا الاجتماعية كقوالب تسويقية لترويج المبيعات العشوائية؛ بل نصوغها كمعرض فني يضاهي صفحات مجلات الموضة العالمية الفاخرة. نلتزم بمساحات سلبية تزيد عن ٦٠٪ وإضاءة طبيعية دافئة وتخطيطات سويسرية متباينة بدقة. انقر على أي منشور في المعرض أدناه لمعاينة النظام التفاعلي ومواصفاته الفنية.'
              : 'We reject standard commercial sales graphics, discount grids, and loud overlays. Our social presence functions as a high-end digital gallery space, echoing luxury fashion editorials. We respect the Swiss grid, massive white space, natural side-lighting, and poetic content. Click on any grid post below to open its specifications drawer and test carousels or mockups.'
            }
          </p>
        </div>

        {/* Instagram Premium Feed Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                setSelectedPost(post);
                setActiveSlide(0);
              }}
              className="group cursor-pointer bg-warm-beige/10 border border-mocha-brown/5 rounded-xl overflow-hidden hover:border-rose-gold transition-all duration-500 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-square bg-mocha-brown/5 overflow-hidden border-b border-mocha-brown/5">
                {/* Overlay details */}
                <div className="absolute inset-0 bg-mocha-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-center p-6 text-center text-ivory-cream gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rose-gold bg-rose-gold/10 px-2.5 py-1 rounded-full">
                    {lang === 'ar' ? post.categoryAr : post.category}
                  </span>
                  <h4 className="font-serif text-lg italic font-light">
                    {lang === 'ar' ? post.titleAr : post.title}
                  </h4>
                  <span className="text-[10px] tracking-wider font-sans font-light opacity-75 mt-1 flex items-center gap-1.5">
                    <BookOpen size={10} />
                    {lang === 'ar' ? 'انقر لعرض المواصفات' : 'Click to inspect specs'}
                  </span>
                </div>

                <Image
                  src={post.thumbnail}
                  alt={lang === 'ar' ? post.titleAr : post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.03] grayscale-[20%]"
                />
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

        {/* Dynamic Modal Drawer for Post Inspection */}
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

                {/* Body Content - Dual Split: Top Mockup, Bottom Specs */}
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin">
                  {/* Dynamic Post Mockup Renderer */}
                  <div className="bg-warm-beige/30 p-6 rounded-xl flex justify-center items-center mb-8 border border-mocha-brown/5">
                    {/* Carousel Swiper View */}
                    {selectedPost.type === 'carousel' && selectedPost.carouselSlides && (
                      <div className="w-full max-w-[280px] flex flex-col items-center">
                        <div className="relative w-full aspect-square bg-ivory-cream border border-mocha-brown/10 rounded overflow-hidden">
                          <Image
                            src={selectedPost.carouselSlides[activeSlide].image}
                            alt="Carousel slide"
                            fill
                            sizes="280px"
                            className="object-cover"
                          />
                          
                          {/* Indicator */}
                          <div className="absolute top-3 right-3 bg-mocha-brown/80 text-ivory-cream font-mono text-[8px] px-2 py-0.5 rounded">
                            {activeSlide + 1} / {selectedPost.carouselSlides.length}
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between w-full mt-4">
                          <button
                            disabled={activeSlide === 0}
                            onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                            className="text-[10px] font-mono uppercase text-taupe disabled:opacity-30 cursor-pointer"
                          >
                            Prev
                          </button>
                          <div className="flex gap-1.5">
                            {selectedPost.carouselSlides.map((_, sIdx) => (
                              <div
                                key={sIdx}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  activeSlide === sIdx ? 'bg-rose-gold' : 'bg-mocha-brown/10'
                                }`}
                              />
                            ))}
                          </div>
                          <button
                            disabled={activeSlide === selectedPost.carouselSlides.length - 1}
                            onClick={() => setActiveSlide(prev => Math.min(selectedPost.carouselSlides!.length - 1, prev + 1))}
                            className="text-[10px] font-mono uppercase text-taupe disabled:opacity-30 cursor-pointer"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Story phone frame mockup */}
                    {selectedPost.type === 'story' && selectedPost.storyDetails && (
                      <div className="w-[180px] h-[320px] bg-mocha-brown border-[3px] border-mocha-brown rounded-[16px] shadow-lg overflow-hidden relative flex flex-col justify-between p-4">
                        <div className="absolute inset-0 z-0 opacity-40">
                          <Image
                            src={selectedPost.storyDetails.bgImage}
                            alt="story background"
                            fill
                            sizes="180px"
                            className="object-cover"
                          />
                        </div>
                        {/* Story Top bar */}
                        <div className="relative z-10 flex justify-between items-center w-full">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-ivory-cream border border-mocha-brown/10 overflow-hidden relative flex items-center justify-center p-0.5">
                              <ValleyRoseLogo size="custom" className="w-full h-full" color="black" />
                            </div>
                            <span className="text-[6px] font-semibold text-ivory-cream tracking-wide">vallyrose</span>
                          </div>
                          <span className="text-[5px] text-ivory-cream/60">3h</span>
                        </div>

                        {/* Story content text centered */}
                        <div className="relative z-10 flex-1 flex items-center justify-center text-center px-2">
                          <p className="font-serif text-[10px] text-ivory-cream italic leading-relaxed">
                            {lang === 'ar' ? selectedPost.storyDetails.textAr : selectedPost.storyDetails.text}
                          </p>
                        </div>

                        {/* Story Bottom swipe indicator */}
                        <div className="relative z-10 flex flex-col items-center gap-0.5">
                          <span className="text-[5px] text-ivory-cream uppercase tracking-widest font-mono">Swipe Up</span>
                          <div className="w-[10px] h-[1px] bg-ivory-cream" />
                        </div>
                      </div>
                    )}

                    {/* Care list text frame */}
                    {selectedPost.id === 'floral-tips' && (
                      <div className="w-full max-w-[280px] bg-ivory-cream border border-mocha-brown/10 p-5 rounded font-sans text-left flex flex-col gap-4 text-mocha-brown">
                        <span className="font-serif text-sm italic font-light border-b border-mocha-brown/5 pb-2">Care Specimen</span>
                        <div className="flex flex-col gap-3">
                          {(lang === 'ar' ? selectedPost.careListAr : selectedPost.careList)?.map((tip, tIdx) => (
                            <p key={tIdx} className="text-[10px] font-light leading-relaxed">
                              {tip}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Testimonial Quote frame */}
                    {selectedPost.id === 'quote-post' && selectedPost.quoteText && (
                      <div className="w-full max-w-[280px] bg-ivory-cream border border-mocha-brown/10 p-6 rounded text-center flex flex-col items-center justify-center min-h-[140px] text-mocha-brown">
                        <span className="text-[14px] font-serif italic font-light leading-relaxed">
                          {selectedPost.quoteText}
                        </span>
                      </div>
                    )}

                    {/* Standard Feed mockup with logo centered */}
                    {selectedPost.type === 'feed' && selectedPost.id === 'behind-scenes' && (
                      <div className="w-[220px] aspect-square bg-ivory-cream border border-mocha-brown/10 rounded overflow-hidden relative flex items-center justify-center p-4">
                        <Image
                          src={selectedPost.thumbnail}
                          alt="Feed sample"
                          fill
                          sizes="220px"
                          className="object-cover opacity-75"
                        />
                      </div>
                    )}

                    {/* Thank You solid black frame */}
                    {selectedPost.id === 'social-thank-you' && (
                      <div className="w-[200px] h-[200px] bg-mocha-brown rounded flex items-center justify-center border border-ivory-cream/10 p-4">
                        <ValleyRoseLogo size="sm" color="white" />
                      </div>
                    )}
                  </div>

                  {/* Specifications details list */}
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
                  <span>SPECIFICATION MANUAL</span>
                  <span>PAGE: {selectedPost.id.toUpperCase()}</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

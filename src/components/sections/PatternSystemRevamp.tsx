'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import ValleyRoseLogo from '../ui/ValleyRoseLogo';

interface PatternItem {
  id: string;
  name: string;
  nameAr: string;
  desc: string;
  descAr: string;
  density: string;
  densityAr: string;
  patternDef: React.ReactNode; // SVG <pattern> definition
  appliedAsset: string;
  appliedAssetAr: string;
  appliedMockup: React.ReactNode; // Visual mockup representation
}

export default function PatternSystemRevamp() {
  const { lang } = useLang();
  const [activePattern, setActivePattern] = useState('hero');

  const patterns: PatternItem[] = [
    {
      id: "hero",
      name: "Hero Pattern",
      nameAr: "النمط الأساسي (البطل)",
      desc: "A bold, fashion-forward composition of interlocking rose petal outlines and flowing stem geometries. It stands as the chief surface identity asset for signature packaging, featuring clean, hand-illustrated weight and posture.",
      descAr: "تكوين جريء ومواكب للموضة من خطوط بتلات الورد المتداخلة وهندسة السيقان المنسابة. يمثل عنصر الهوية البصرية السطحية الأساسية للتغليف المتميز.",
      density: "Bold Statement / Main Box Wraps",
      densityAr: "تعبير جريء / كسوة الصناديق الأساسية",
      patternDef: (
        <pattern id="pattern-hero" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 0 30 C 15 10, 30 10, 30 30 C 30 50, 45 50, 60 30" stroke="#D9B4B7" strokeWidth="1.5" fill="none" />
          <path d="M 0 10 C 15 -10, 30 -10, 30 10 C 30 30, 45 30, 60 10" stroke="#D9B4B7" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 0 50 C 15 30, 30 30, 30 50 C 30 70, 45 70, 60 50" stroke="#D9B4B7" strokeWidth="1" fill="none" opacity="0.4" />
          {/* Stylized organic petal shape */}
          <path d="M 30 30 C 25 20, 35 15, 30 10 C 25 15, 35 20, 30 30 Z" fill="#D9B4B7" opacity="0.75" />
        </pattern>
      ),
      appliedAsset: "Bespoke Outer Gift Box wrap",
      appliedAssetAr: "الكسوة الخارجية لصناديق الهدايا الفاخرة",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-blush-pink rounded-2xl flex items-center justify-center shadow-xl border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 60 60'%3E%3Cpath d='M 0 30 C 15 10, 30 10, 30 30 C 30 50, 45 50, 60 30' stroke='%236B4E42' stroke-width='2' fill='none'/%3E%3Cpath d='M 30 30 C 25 20, 35 15, 30 10 C 25 15, 35 20, 30 30 Z' fill='%236B4E42'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative z-10 bg-ivory-cream/95 p-5 rounded-lg text-center border border-mocha-brown/10 text-mocha-brown shadow-lg max-w-[130px]">
            <ValleyRoseLogo size="custom" className="w-[80px] h-[26px] mx-auto mb-2" color="black" />
            <div className="w-10 h-[0.5px] bg-rose-gold/40 my-1 mx-auto" />
            <span className="text-[5px] tracking-widest uppercase block opacity-60">GIFT BOX</span>
          </div>
        </div>
      )
    },
    {
      id: "medium",
      name: "Medium Pattern",
      nameAr: "النمط متوسط الكثافة",
      desc: "Curving stem structures and concentric arches forming an elegant wave grid. It references the natural architecture of plant growth, balancing organic forms with Swiss structural precision.",
      descAr: "هياكل السيقان المنحنية والأقواس المتداخلة التي تشكل شبكة تموج أنيقة. تحاكي الهندسة الطبيعية لنمو النباتات وتوازن الشكل العضوي بالدقة السويسرية.",
      density: "Balanced Grid / Folder Backdrops",
      densityAr: "شبكة متوازنة / خلفيات مغلفات العرض",
      patternDef: (
        <pattern id="pattern-medium" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 20 5 A 15 15 0 0 0 5 20 L 35 20 A 15 15 0 0 0 20 5 Z" stroke="#E9C5C6" strokeWidth="1.2" fill="none" />
          <path d="M 20 20 C 15 28, 25 32, 20 40" stroke="#E9C5C6" strokeWidth="0.8" fill="none" opacity="0.6" />
          <circle cx="20" cy="5" r="2.5" fill="#D9A28C" />
        </pattern>
      ),
      appliedAsset: "Client Keepsake Presentation Folders",
      appliedAssetAr: "مجلدات عرض هدايا ومراسلات العملاء",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-ivory-cream rounded-2xl flex items-center justify-center shadow-xl border border-mocha-brown/15 overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 40 40'%3E%3Cpath d='M 20 5 A 15 15 0 0 0 5 20 L 35 20 A 15 15 0 0 0 20 5 Z' stroke='%236B4E42' stroke-width='1.5' fill='none'/%3E%3Ccircle cx='20' cy='5' r='2.5' fill='%236B4E42'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
          <div className="relative z-10 w-32 h-40 bg-ivory-cream border border-mocha-brown/10 rounded flex flex-col justify-between p-4 text-mocha-brown shadow-lg">
            <span className="font-serif text-[8px] tracking-wider uppercase font-semibold">Valley Rose</span>
            <div className="w-full h-[0.5px] bg-mocha-brown/10 my-1" />
            <span className="text-[5px] text-taupe leading-relaxed">BRAND SPECIFICATION FOLDER</span>
          </div>
        </div>
      )
    },
    {
      id: "micro",
      name: "Micro Pattern",
      nameAr: "النمط الدقيق (المايكرو)",
      desc: "Delicate clusters of small four-pointed stars and thin vertical capsule coordinates. Designed as a micro-textural accent, ideal for envelope liners and the inner faces of stationery folders.",
      descAr: "تجمعات دقيقة من النجوم رباعية الرؤوس الصغيرة وإحداثيات الكبسولة الرأسية. مصمم كعنصر ملمس مايكرو ناعم لبطانات أظرف الرسائل.",
      density: "Low Density / Micro-textures",
      densityAr: "كثافة خفيفة / ملمس مايكرو دقيق",
      patternDef: (
        <pattern id="pattern-micro" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 10 5 L 10 15" stroke="#E8DCCB" strokeWidth="0.6" />
          <path d="M 10 8 L 11.5 10 L 10 12 L 8.5 10 Z" fill="#D9A28C" />
          <circle cx="2" cy="2" r="0.5" fill="#B8A89A" opacity="0.4" />
        </pattern>
      ),
      appliedAsset: "Deluxe envelope inner lining sheets",
      appliedAssetAr: "بطانات المغاريف الورقية المبطنة الفاخرة",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-warm-beige/20 rounded-2xl flex items-center justify-center shadow-xl border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20'%3E%3Cpath d='M 10 8 L 11.5 10 L 10 12 L 8.5 10 Z' fill='%23D9A28C'/%3E%3C/svg%3E")`,
            backgroundSize: '16px 16px'
          }} />
          <div className="relative z-10 w-40 h-28 bg-ivory-cream border border-mocha-brown/10 shadow-md flex flex-col justify-between p-3.5 text-mocha-brown">
            <div className="flex justify-between items-center">
              <span className="font-serif text-[6px] tracking-widest uppercase opacity-75">Vally Rose</span>
              <span className="text-[4px] font-mono opacity-50">STATIONERY SPEC</span>
            </div>
            <div className="w-full h-8 border border-dashed border-mocha-brown/10 bg-warm-beige/5 rounded" />
          </div>
        </div>
      )
    },
    {
      id: "ribbon",
      name: "Ribbon Pattern",
      nameAr: "نمط الأشرطة المنسوجة",
      desc: "Parallel tide wave lines mirroring the flowing waters of coastal springs. Instills continuous graphic elegance along silk or unbleached woven cotton ribbons.",
      descAr: "خطوط تموجات متوازية تحاكي تدفق قنوات المياه الهادئة. تضفي انسيابية مستمرة ونقوشاً دقيقة على أشرطة الحرير والقطن الطبيعي المنسوج.",
      density: "Linear / Ribbon continuous wrap",
      densityAr: "خطي / تكرار أشرطة تغليف الباقات",
      patternDef: (
        <pattern id="pattern-ribbon" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 5 Q 10 15, 20 5 Q 30 -5, 40 5" stroke="#D9A28C" strokeWidth="1.2" fill="none" />
          <path d="M 0 15 Q 10 25, 20 15 Q 30 5, 40 15" stroke="#D9A28C" strokeWidth="0.8" fill="none" opacity="0.5" />
        </pattern>
      ),
      appliedAsset: "Woven Cotton Flower Wrapping Ribbons",
      appliedAssetAr: "أشرطة الكتان المنسوجة لتغليف الباقات الفاخرة",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-warm-beige/30 rounded-2xl flex flex-col justify-center items-center gap-5 shadow-xl border border-mocha-brown/5 overflow-hidden">
          {/* Ribbon wrap simulation */}
          <div className="w-full h-10 bg-mocha-brown relative flex items-center justify-center border-y border-rose-gold/10">
            <div className="absolute inset-0 opacity-25" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='10' viewBox='0 0 40 20'%3E%3Cpath d='M 0 5 Q 10 15, 20 5 Q 30 -5, 40 5' stroke='%23F7F1E9' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '20px 10px'
            }} />
            <span className="relative z-10 text-[7px] tracking-[0.35em] uppercase text-ivory-cream font-mono">Vally Rose</span>
          </div>
          <span className="text-[8px] font-sans text-taupe uppercase tracking-wider">Ribbon Specimen</span>
        </div>
      )
    },
    {
      id: "tissue",
      name: "Tissue Pattern",
      nameAr: "نمط مناديل التغليف الرقيقة",
      desc: "Delicate scattered organic rose petal contours overlayed at soft angles. Designed with transparent, airy qualities for thin acid-free wrapping tissue sheets.",
      descAr: "ظلال بتلات ورد عضوية متناثرة بزوايا واتجاهات ناعمة متداخلة. مصممة بخصائص رقيقة تضفي جودة ملموسة لورق المناديل الداخلي للتغليف.",
      density: "Scatter / Interlocking overlay",
      densityAr: "تشتت / بتلات ناعمة متداخلة",
      patternDef: (
        <pattern id="pattern-tissue" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 12 12 C 12 6, 22 6, 22 12 C 22 18, 12 18, 12 12 Z" fill="#E9C5C6" opacity="0.4" transform="rotate(15 17 12)" />
          <path d="M 30 28 C 30 22, 40 22, 40 28 C 40 34, 30 34, 30 28 Z" fill="#E9C5C6" opacity="0.4" transform="rotate(-30 35 28)" />
          <circle cx="5" cy="30" r="1.5" fill="#D9A28C" opacity="0.3" />
        </pattern>
      ),
      appliedAsset: "Acid-Free Wrapping Tissue paper sheets",
      appliedAssetAr: "ورق مناديل الحشو الداخلي الفاخر المعطر",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-ivory-cream rounded-2xl flex items-center justify-center shadow-xl border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 40 40'%3E%3Cpath d='M 12 12 C 12 6, 22 6, 22 12 C 22 18, 12 18, 12 12 Z' fill='%23E9C5C6'/%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px'
          }} />
          <div className="relative z-10 p-3.5 bg-mocha-brown text-ivory-cream rounded-lg flex items-center gap-2.5 shadow-2xl">
            <ValleyRoseLogo size="custom" className="w-[45px] h-[15px]" color="white" />
            <div className="w-[1px] h-3 bg-ivory-cream/20" />
            <span className="font-mono text-[6px] tracking-wider uppercase">Wax Stamp Seal</span>
          </div>
        </div>
      )
    },
    {
      id: "border",
      name: "Border Pattern",
      nameAr: "نمط الحواف والحدود الخطية",
      desc: "A linear repeating chain of stylized leaves and capsule contours, used along the margins of letterheads, envelopes, and ceremony programs to frame contents with brand structure.",
      descAr: "سلسلة خطية متكررة من الأوراق المبسطة وانحناءات الكبسولة. تُستخدم على حواف المطبوعات والبرامج الاحتفالية لتأطير المحتويات بهوية العلامة.",
      density: "Linear / Border rules",
      densityAr: "خطي / إطارات الحدود والحواف",
      patternDef: (
        <pattern id="pattern-border" width="50" height="10" patternUnits="userSpaceOnUse">
          <line x1="0" y1="5" x2="50" y2="5" stroke="#B8A89A" strokeWidth="0.6" />
          <rect x="5" y="2" width="6" height="6" rx="3" stroke="#B8A89A" strokeWidth="1" fill="none" />
          <rect x="25" y="2" width="6" height="6" rx="3" stroke="#B8A89A" strokeWidth="1" fill="none" />
          <rect x="45" y="2" width="6" height="6" rx="3" stroke="#B8A89A" strokeWidth="1" fill="none" />
        </pattern>
      ),
      appliedAsset: "Dinner Menu Card Margins & Stationery Borders",
      appliedAssetAr: "هوامش بطاقات العشاء والقرطاسية الفاخرة",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-ivory-cream rounded-2xl flex flex-col justify-between p-5 shadow-xl border border-mocha-brown/5 text-mocha-brown font-serif select-none">
          {/* Top border pattern */}
          <div className="h-2 w-full opacity-60" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='6' viewBox='0 0 50 10'%3E%3Crect x='5' y='2' width='6' height='6' rx='3' stroke='%236B4E42' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 6px'
          }} />
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-1.5 py-4">
            <span className="font-serif text-[11px] italic">Dinner Menu</span>
            <div className="w-8 h-[0.5px] bg-rose-gold/50" />
            <div className="flex flex-col gap-0.5 text-[5px] uppercase font-sans tracking-widest opacity-70">
              <span>Citrus Rose Starter</span>
              <span>Artesian Beef Fillet</span>
              <span>Saffron Rose Dessert</span>
            </div>
          </div>
          {/* Bottom border pattern */}
          <div className="h-2 w-full opacity-60" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='6' viewBox='0 0 50 10'%3E%3Crect x='5' y='2' width='6' height='6' rx='3' stroke='%236B4E42' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 6px'
          }} />
        </div>
      )
    },
    {
      id: "packaging",
      name: "Packaging Pattern",
      nameAr: "نمط كراتين التعبئة الكبيرة",
      desc: "Bold, large-scale abstract floral lines that wrap around gift box corners and bag structures, representing the brand's identity system in its most confident, fashion-inspired format.",
      descAr: "خطوط زهور تجريدية كبيرة وجريئة تلتف حول زوايا صناديق الهدايا وهياكل الحقائب، لتمثل هوية العلامة التجارية بأسلوب عصري واثق ومرئي.",
      density: "High Density / Large Scale print",
      densityAr: "كثافة عالية / طباعة بمقاييس كبيرة",
      patternDef: (
        <pattern id="pattern-packaging" width="80" height="80" patternUnits="userSpaceOnUse">
          <ellipse cx="40" cy="40" rx="30" ry="38" stroke="#D9B4B7" strokeWidth="1.5" fill="none" />
          <ellipse cx="40" cy="40" rx="15" ry="25" stroke="#D9B4B7" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M 40 10 C 35 2, 45 2, 40 10" stroke="#D9B4B7" strokeWidth="1.2" fill="none" />
          <line x1="0" y1="40" x2="80" y2="40" stroke="#D9B4B7" strokeWidth="0.8" opacity="0.3" />
        </pattern>
      ),
      appliedAsset: "Structured Shopping Bag Panel details",
      appliedAssetAr: "جوانب حقائب التسوق والكراتين الخارجية",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-ivory-cream rounded-2xl flex flex-col justify-end p-5 shadow-xl border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 80 80'%3E%3Cellipse cx='40' cy='40' rx='30' ry='38' stroke='%236B4E42' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px'
          }} />
          <div className="relative z-10 w-full bg-mocha-brown text-ivory-cream py-2.5 text-center rounded-lg flex flex-col items-center justify-center gap-1 shadow-md">
            <ValleyRoseLogo size="custom" className="w-[70px] h-[22px]" color="white" />
          </div>
        </div>
      )
    },
    {
      id: "monogram",
      name: "Monogram Pattern",
      nameAr: "النمط الرمزي (المونوغرام)",
      desc: "A diagonal repeating tessellation of the master oval capsule and inner rosebud monogram. Establishes strong visual branding across bag panels, letterhead seals, and stationery envelopes.",
      descAr: "شكل متكرر مائل لرمز الكبسولة البيضاوية وبراعم الورد الداخلية. يرسخ الهوية البصرية بقوة على جوانب الحقائب وأختام المراسلات الفاخرة.",
      density: "Structured Grid / Monogram Repeat",
      densityAr: "شبكة هندسية / مونوغرام متكرر",
      patternDef: (
        <pattern id="pattern-monogram" width="30" height="40" patternUnits="userSpaceOnUse">
          <rect x="8" y="5" width="14" height="26" rx="7" stroke="#B8A89A" strokeWidth="1" fill="none" opacity="0.7" />
          <circle cx="15" cy="15" r="2.5" fill="#B8A89A" opacity="0.6" />
          <line x1="15" y1="18" x2="15" y2="28" stroke="#B8A89A" strokeWidth="0.8" opacity="0.6" />
        </pattern>
      ),
      appliedAsset: "Structured Shopping Bag Panel & Gift Sleeve",
      appliedAssetAr: "جوانب حقائب التسوق وأكمام علب الهدايا",
      appliedMockup: (
        <div className="relative w-52 h-52 bg-ivory-cream rounded-2xl flex flex-col justify-end p-5 shadow-xl border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='24' viewBox='0 0 30 40'%3E%3Crect x='8' y='5' width='14' height='26' rx='7' stroke='%236B4E42' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '18px 24px'
          }} />
          <div className="relative z-10 w-full bg-mocha-brown text-ivory-cream py-2 text-center rounded-lg flex flex-col items-center justify-center gap-1 shadow-md">
            <ValleyRoseLogo size="custom" className="w-[60px] h-[20px]" color="white" />
          </div>
        </div>
      )
    }
  ];

  const activePatternItem = patterns.find(p => p.id === activePattern) || patterns[0];

  return (
    <section
      id="chapter-pattern-system"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream border-b border-mocha-brown/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chapter Header */}
        <SectionHeader
          num="13"
          title="Pattern System"
          titleAr="نظام الأنماط"
          subtitle="Original Signature Surface Patterns"
          subtitleAr="أنماط زخرفية أصلية مستوحاة من تفاصيل الرمز"
        />

        {/* Narrative layout */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'تتجنب علامتنا الأنماط الزخرفية الصاخبة أو ورق الحائط التقليدي المليء بالتفاصيل الواقعية. بدلاً من ذلك، صممنا نظاماً متكاملاً من الأنماط السطحية المنسجمة والمستوحاة مباشرة من انحناءات برعم شعار وادي الورد، وبتلاته المتداخلة، وتدفق مياه واحة القطيف. تُعرض هذه الأنماط بلمسات ناعمة شبه غير مرئية (شفافية بين ٣٪ و ٨٪) لإضافة جودة ملموسة ووقار فني.'
              : 'We reject realistic floral prints, heavy botanical sketches, and traditional wall-coverings. Instead, we have developed a complete signature pattern library derived directly from the organic contours of our master emblem, rose petal geometry, and Qatif water currents. These are applied with silent contrast (3% to 8% opacity) on physical materials, enhancing tactility without creating distraction.'
            }
          </p>
        </div>

        {/* Interactive Pattern Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left: Interactive list of 8 patterns (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.25em] text-taupe uppercase font-mono mb-2">
              {lang === 'ar' ? 'مكتبة الأنماط الثمانية' : 'Pattern Library (8 Variations)'}
            </span>
            {patterns.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePattern(item.id)}
                className={`py-3.5 px-5 text-left border rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  activePattern === item.id 
                    ? 'border-rose-gold bg-warm-beige/20 text-mocha-brown' 
                    : 'border-mocha-brown/5 hover:border-mocha-brown/20 bg-warm-beige/5 text-taupe'
                } ${lang === 'ar' ? 'text-right flex-row-reverse' : ''}`}
              >
                <div className="flex flex-col gap-0.5">
                  <span className={`font-serif text-base font-light italic ${
                    activePattern === item.id ? 'text-mocha-brown font-medium' : ''
                  }`}>
                    {lang === 'ar' ? item.nameAr : item.name}
                  </span>
                  <span className="text-[8px] font-mono uppercase tracking-wider opacity-60">
                    {lang === 'ar' ? item.densityAr : item.density}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-mocha-brown/5 overflow-hidden flex items-center justify-center bg-ivory-cream shrink-0">
                  {/* Small Pattern Swatch preview */}
                  <svg className="w-full h-full" viewBox="0 0 40 40">
                    <rect width="100%" height="100%" fill="#F7F1E9" />
                    {/* Simplified drawing for tiny thumbnail preview */}
                    <circle cx="20" cy="20" r="12" stroke="#D9B4B7" strokeWidth="1" fill="none" />
                    <circle cx="20" cy="20" r="4" fill="#D9B4B7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Immersive details and applied mockup preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePattern}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-warm-beige/10 border border-mocha-brown/5 rounded-2xl flex flex-col gap-6"
              >
                {/* Visual Grid pattern preview */}
                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-mocha-brown/10 bg-ivory-cream">
                  {/* SVG Repeating Pattern Display */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      {activePatternItem.patternDef}
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${activePatternItem.id})`} />
                  </svg>
                  
                  {/* Decorative centered tag */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 bg-ivory-cream/95 border border-mocha-brown/10 text-mocha-brown font-mono text-[9px] uppercase tracking-widest shadow-md">
                      Seamless Matrix
                    </span>
                  </div>
                </div>

                {/* Details text */}
                <div className={`flex flex-col gap-2 ${lang === 'ar' ? 'text-right' : ''}`}>
                  <h3 className="font-serif text-xl italic font-light text-mocha-brown">
                    {lang === 'ar' ? activePatternItem.nameAr : activePatternItem.name}
                  </h3>
                  <p className={`text-xs text-taupe font-sans font-light leading-relaxed ${
                    lang === 'ar' ? 'font-ar' : ''
                  }`}>
                    {lang === 'ar' ? activePatternItem.descAr : activePatternItem.desc}
                  </p>
                </div>

                {/* Applied mockup asset display */}
                <div className="border-t border-mocha-brown/10 pt-6">
                  <span className="text-[10px] tracking-[0.25em] text-taupe uppercase font-mono block mb-4">
                    {lang === 'ar' ? 'تطبيق عملي للنمط على أصول الهوية' : 'Applied Asset Mockup'}
                  </span>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-8 bg-warm-beige/30 p-6 rounded-xl border border-mocha-brown/5">
                    {/* Mockup wrapper */}
                    <div className="shrink-0 flex items-center justify-center">
                      {activePatternItem.appliedMockup}
                    </div>

                    {/* Technical details of application */}
                    <div className={`flex-1 flex flex-col gap-2 ${lang === 'ar' ? 'text-right' : ''}`}>
                      <span className="font-serif text-base text-mocha-brown font-light italic">
                        {lang === 'ar' ? activePatternItem.appliedAssetAr : activePatternItem.appliedAsset}
                      </span>
                      <p className={`text-[11px] text-taupe font-sans font-light leading-relaxed ${
                        lang === 'ar' ? 'font-ar' : ''
                      }`}>
                        {lang === 'ar'
                          ? 'تطبيق خافت للنمط ذي الكثافة والخطوط المحددة بحدود طباعة شفافة على أسطح الورق المقوى والمواد الملموسة.'
                          : 'Applied with blind-stamp letterpress or low-contrast opacity prints to emphasize raw cardboard weight, texture, and composition.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

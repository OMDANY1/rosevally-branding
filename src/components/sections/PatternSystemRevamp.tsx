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
  svgBackground: string;
  svgViewBox: string;
  svgContent: React.ReactNode;
  appliedAsset: string;
  appliedAssetAr: string;
  appliedMockup: React.ReactNode;
}

export default function PatternSystemRevamp() {
  const { lang } = useLang();
  const [activePattern, setActivePattern] = useState('hero');

  const patterns: PatternItem[] = [
    {
      id: "hero",
      name: "Hero Pattern",
      nameAr: "النمط الأساسي (البطل)",
      desc: "An organic flowing pattern composed of winding tide lines and stylized petals wrapping around central rose silhouettes. Designed to serve as the signature surface asset for large-scale packaging boxes.",
      descAr: "نمط عضوي منساب يتكون من خطوط التموجات الساحلية وبتلات الورد الملتفة حول ظلال البراعم المركزية. مصمم ليكون العنصر السطحي المميز لصناديق الهدايا الكبيرة.",
      density: "High Density / Statement asset",
      densityAr: "كثافة عالية / عنصر بيان فني",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 60 60",
      svgContent: (
        <>
          <path d="M 0 30 Q 15 15 30 30 Q 45 45 60 30" stroke="#D9B4B7" strokeWidth="0.8" fill="none" />
          <path d="M 0 10 Q 15 -5 30 10 Q 45 25 60 10" stroke="#D9B4B7" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M 0 50 Q 15 35 30 50 Q 45 65 60 50" stroke="#D9B4B7" strokeWidth="0.8" fill="none" opacity="0.5" />
          <circle cx="30" cy="30" r="4" fill="#D9B4B7" opacity="0.7" />
          <path d="M 27 27 C 27 23, 33 23, 33 27 Z" fill="#D9B4B7" opacity="0.8" />
        </>
      ),
      appliedAsset: "Signature Luxury Gift Box Wrap",
      appliedAssetAr: "كسوة صندوق الهدايا الفاخر الأساسي",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-blush-pink rounded-xl flex items-center justify-center shadow-lg border border-mocha-brown/5 overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 60 60'%3E%3Cpath d='M 0 30 Q 15 15 30 30 Q 45 45 60 30' stroke='%236B4E42' stroke-width='1.2' fill='none'/%3E%3Ccircle cx='30' cy='30' r='4' fill='%236B4E42'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
          <div className="relative z-10 bg-ivory-cream/95 p-4 rounded text-center border border-mocha-brown/10 text-mocha-brown max-w-[120px]">
            <span className="font-serif text-[10px] tracking-widest uppercase block">Valley Rose</span>
            <div className="w-8 h-[1px] bg-rose-gold/50 my-1.5 mx-auto" />
            <span className="text-[6px] tracking-wider uppercase block">Gift Box</span>
          </div>
        </div>
      )
    },
    {
      id: "medium-density",
      name: "Medium Density Pattern",
      nameAr: "النمط متوسط الكثافة",
      desc: "Concentric arches and leaf tips arranged in a structured grid. It balances organic flow with architectural Swiss alignment, representing Qatif's palm geometries.",
      descAr: "أقواس دائرية متداخلة ورؤوس أوراق مرتبة في شبكة هندسية. يوازن بين الانسيابية العضوية والتنسيق المعماري، محاكياً سعف النخيل الهندسي بالقطيف.",
      density: "Medium Density / Collateral background",
      densityAr: "كثافة متوسطة / خلفية المطبوعات",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 40 40",
      svgContent: (
        <>
          <path d="M 20 10 A 10 10 0 0 0 10 20 L 30 20 A 10 10 0 0 0 20 10 Z" stroke="#E9C5C6" strokeWidth="0.8" fill="none" />
          <path d="M 20 20 L 20 38" stroke="#E9C5C6" strokeWidth="0.6" strokeDasharray="2,2" />
          <path d="M 12 28 C 16 28, 20 24, 20 20 C 20 24, 24 28, 28 28 Z" fill="#E9C5C6" opacity="0.6" />
        </>
      ),
      appliedAsset: "Wedding Ceremony Invitation Folders",
      appliedAssetAr: "مجلدات دعوة حفل الزفاف المخصصة",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-ivory-cream rounded-xl flex items-center justify-center shadow-lg border border-mocha-brown/15 overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 40 40'%3E%3Cpath d='M 20 10 A 10 10 0 0 0 10 20 L 30 20 A 10 10 0 0 0 20 10 Z' stroke='%236B4E42' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }} />
          <div className="relative z-10 w-28 h-36 bg-ivory-cream border border-mocha-brown/10 rounded flex flex-col justify-between p-3 text-mocha-brown shadow-md">
            <span className="font-serif text-[8px] italic">Invitation Suite</span>
            <div className="w-full h-[1px] bg-mocha-brown/10 my-1" />
            <div className="text-[5px] flex flex-col gap-1 opacity-70">
              <span>NOOR & FAISAL</span>
              <span>20 . 08 . 2026</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "micro",
      name: "Micro Pattern",
      nameAr: "النمط الدقيق (المايكرو)",
      desc: "Delicate 4-pointed stars and thin vertical capsule boundaries repeating across a tight matrix. Designed to act as an unboxing texture for secondary letterheads and envelop liners.",
      descAr: "نجوم رباعية رقيقة وحدود كبسولة رأسية متكررة في مصفوفة ضيقة. مصممة لتكون خلفية رقيقة لبطانات المغاريف وخطابات المراسلات الفاخرة.",
      density: "Low Density / Micro details",
      densityAr: "كثافة منخفضة / تفاصيل دقيقة للغاية",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 20 20",
      svgContent: (
        <>
          <line x1="10" y1="2" x2="10" y2="18" stroke="#E8DCCB" strokeWidth="0.5" />
          <line x1="2" y1="10" x2="18" y2="10" stroke="#E8DCCB" strokeWidth="0.5" />
          <path d="M 10 7 L 11.5 10 L 10 13 L 8.5 10 Z" fill="#D9A28C" />
        </>
      ),
      appliedAsset: "Corporate Letterhead and Laid Envelopes",
      appliedAssetAr: "الخطابات الرسمية والمغاريف المبطنة",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-warm-beige/30 rounded-xl flex items-center justify-center shadow-lg border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 20 20'%3E%3Cpath d='M 10 7 L 11.5 10 L 10 13 L 8.5 10 Z' fill='%23D9A28C'/%3E%3C/svg%3E")`,
            backgroundSize: '15px 15px'
          }} />
          <div className="relative z-10 w-36 h-24 bg-ivory-cream border border-mocha-brown/10 shadow flex flex-col justify-between p-3 text-mocha-brown">
            <div className="flex justify-between items-center">
              <span className="font-serif text-[6px] tracking-widest uppercase">Vally Rose</span>
              <span className="text-[4px] opacity-60">CORRESPONDENCE</span>
            </div>
            <div className="w-12 h-[1px] bg-rose-gold/40" />
            <div className="w-full h-8 border border-dashed border-mocha-brown/5 bg-warm-beige/10" />
          </div>
        </div>
      )
    },
    {
      id: "border",
      name: "Border Pattern",
      nameAr: "نمط الحواف والحدود",
      desc: "A linear repeating chain of stylized leaves and capsule contours, used along the margins of letterheads, seating plans, and invitation suites to add structure.",
      descAr: "سلسلة خطية متكررة من الأوراق المبسطة والكبسولات الهندسية. تُستخدم على حواف المراسلات ومخططات الجلوس وبطاقات الدعوة لإضافة مظهر هيكلي أنيق.",
      density: "Linear / Border frames",
      densityAr: "خطي / إطارات الحدود والحواف",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 50 10",
      svgContent: (
        <>
          <line x1="0" y1="5" x2="50" y2="5" stroke="#B8A89A" strokeWidth="0.5" />
          <rect x="5" y="2" width="6" height="6" rx="3" stroke="#B8A89A" strokeWidth="0.8" fill="none" />
          <path d="M 8 2 C 7 0, 9 0, 8 2" stroke="#B8A89A" strokeWidth="0.5" />
          <rect x="25" y="2" width="6" height="6" rx="3" stroke="#B8A89A" strokeWidth="0.8" fill="none" />
          <rect x="45" y="2" width="6" height="6" rx="3" stroke="#B8A89A" strokeWidth="0.8" fill="none" />
        </>
      ),
      appliedAsset: "Dinner Menu Cards & Ceremony Signage",
      appliedAssetAr: "قوائم الطعام ولافتات حفل الاستقبال",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-ivory-cream rounded-xl flex flex-col justify-between p-4 shadow-lg border border-mocha-brown/5 text-mocha-brown font-serif select-none">
          {/* Border pattern repeat simulation top/bottom */}
          <div className="h-2 w-full opacity-60" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='6' viewBox='0 0 50 10'%3E%3Crect x='5' y='2' width='6' height='6' rx='3' stroke='%236B4E42' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 6px'
          }} />
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-1.5 py-4">
            <span className="font-serif text-[10px] italic">Menu</span>
            <div className="w-6 h-[0.5px] bg-rose-gold/50" />
            <div className="flex flex-col gap-0.5 text-[5px] uppercase font-sans tracking-widest opacity-70">
              <span>Citrus Rose Starter</span>
              <span>Artesian Beef Fillet</span>
              <span>Saffron Rose Dessert</span>
            </div>
          </div>
          <div className="h-2 w-full opacity-60" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='6' viewBox='0 0 50 10'%3E%3Crect x='5' y='2' width='6' height='6' rx='3' stroke='%236B4E42' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 6px'
          }} />
        </div>
      )
    },
    {
      id: "ribbon",
      name: "Ribbon Pattern",
      nameAr: "نمط أشرطة الحرير والكتان",
      desc: "Parallel tide wave lines mirroring the silent currents of the Saihat coast. Applies elegantly along silk or cotton wrapping ribbons.",
      descAr: "خطوط تموجات متوازية تحاكي حركة التيارات الهادئة لسواحل سيهات. يُطبع بنقوش رقيقة على أشرطة الحرير والكتان لتغليف باقات الهدايا.",
      density: "Linear / Ribbon repeat",
      densityAr: "خطي / تكرار الأشرطة",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 40 20",
      svgContent: (
        <>
          <path d="M 0 5 Q 10 15 20 5 Q 30 -5 40 5" stroke="#D9A28C" strokeWidth="0.8" fill="none" />
          <path d="M 0 15 Q 10 25 20 15 Q 30 5 40 15" stroke="#D9A28C" strokeWidth="0.8" fill="none" opacity="0.6" />
        </>
      ),
      appliedAsset: "Woven Ribbon and Fabric Ties",
      appliedAssetAr: "أشرطة الحرير المنسوجة للتغليف الفاخر",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-warm-beige/20 rounded-xl flex flex-col justify-center items-center gap-4 shadow-lg border border-mocha-brown/5 overflow-hidden">
          {/* Ribbon block */}
          <div className="w-full h-8 bg-mocha-brown relative flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='10' viewBox='0 0 40 20'%3E%3Cpath d='M 0 5 Q 10 15 20 5 Q 30 -5 40 5' stroke='%23F7F1E9' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '20px 10px'
            }} />
            <span className="relative z-10 text-[6px] tracking-[0.3em] uppercase text-ivory-cream font-mono">Vally Rose</span>
          </div>
          <span className="text-[8px] font-sans text-taupe uppercase tracking-widest">Ribbon Specimen</span>
        </div>
      )
    },
    {
      id: "tissue",
      name: "Tissue Pattern",
      nameAr: "نمط مناديل التغليف الرقيقة",
      desc: "Delicate, overlapping silhouettes of single rose petals tossed at varying angles. It features a transparent, organic feeling tailored for wrapping tissue wraps.",
      descAr: "ظلال بالغة الدقة والرقة لبتلات ورد متناثرة بزوايا واتجاهات عشوائية متباينة. يضفي شعوراً بالشفافية والنعومة لورق المناديل الداخلي لتغليف الزهور.",
      density: "Scatter / Interlocking petals",
      densityAr: "تشتت عشوائي / بتلات متداخلة",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 40 40",
      svgContent: (
        <>
          <path d="M 10 10 C 10 5, 20 5, 20 10 C 20 15, 10 15, 10 10 Z" fill="#E9C5C6" opacity="0.3" transform="rotate(15 15 10)" />
          <path d="M 28 25 C 28 20, 38 20, 38 25 C 38 30, 28 30, 28 25 Z" fill="#E9C5C6" opacity="0.3" transform="rotate(-30 33 25)" />
          <path d="M 5 30 C 5 27, 10 27, 10 30 C 10 33, 5 33, 5 30 Z" fill="#E9C5C6" opacity="0.2" transform="rotate(45 7.5 30)" />
        </>
      ),
      appliedAsset: "Textured Wrapping Tissue Paper",
      appliedAssetAr: "ورق مناديل الحشو الداخلي الفاخر",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-ivory-cream rounded-xl flex items-center justify-center shadow-lg border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 40 40'%3E%3Cpath d='M 10 10 C 10 5, 20 5, 20 10 C 20 15, 10 15, 10 10 Z' fill='%23E9C5C6'/%3E%3C/svg%3E")`,
            backgroundSize: '25px 25px'
          }} />
          <div className="relative z-10 p-3 bg-mocha-brown text-ivory-cream rounded flex items-center gap-2 shadow-2xl">
            <div className="w-6 h-6 border border-ivory-cream/20 flex items-center justify-center p-0.5">
              <ValleyRoseLogo size="custom" className="w-full h-full" color="white" />
            </div>
            <span className="font-mono text-[7px] tracking-wider uppercase">Wax Sealed</span>
          </div>
        </div>
      )
    },
    {
      id: "monogram",
      name: "Monogram Pattern",
      nameAr: "النمط الرمزي (المونوغرام)",
      desc: "A diagonal repeating tessellation of the master oval capsule and inner rosebud monogram. Establishes strong visual branding across bag panels and gift sleeves.",
      descAr: "شكل متكرر مائل لرمز الكبسولة البيضاوية وبراعم الورد الداخلية. يرسخ الهوية البصرية بقوة على جوانب الحقائب وأكمام علب الهدايا الكبيرة.",
      density: "Grid / Monogram repeat",
      densityAr: "شبكي / مونوغرام متكرر",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 40 50",
      svgContent: (
        <>
          <rect x="13" y="10" width="14" height="26" rx="7" stroke="#B8A89A" strokeWidth="0.8" fill="none" opacity="0.7" />
          <circle cx="20" cy="20" r="3" fill="#B8A89A" opacity="0.6" />
          <line x1="20" y1="23" x2="20" y2="34" stroke="#B8A89A" strokeWidth="0.6" opacity="0.6" />
        </>
      ),
      appliedAsset: "Structured Shopping Bag Panel",
      appliedAssetAr: "جوانب حقائب التسوق الورقية الفاخرة",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-ivory-cream rounded-xl flex flex-col justify-end p-4 shadow-lg border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 40 50'%3E%3Crect x='13' y='10' width='14' height='26' rx='7' stroke='%236B4E42' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '16px 20px'
          }} />
          <div className="relative z-10 w-full bg-mocha-brown text-ivory-cream py-2 text-center rounded flex flex-col items-center justify-center gap-1 shadow-md">
            <span className="font-serif text-[8px] tracking-[0.2em] uppercase">Vally Rose</span>
            <div className="w-8 h-[0.5px] bg-rose-gold/40" />
          </div>
        </div>
      )
    },
    {
      id: "minimal-line",
      name: "Minimal Line Pattern",
      nameAr: "النمط الخطي البسيط",
      desc: "Parallel thin wavy lines with vertical axis alignment guides. Represents the flowing water springs of Qatif in their purest, most abstract design expression.",
      descAr: "خطوط متوازية متموجة بالغة الدقة مع خطوط إرشادية رأسية خافتة. تمثل عيون واحات القطيف في أصفى تعبيراتها التصميمية تجريداً وبساطة.",
      density: "Low Density / Linear details",
      densityAr: "كثافة منخفضة / تفاصيل خطية نقية",
      svgBackground: "#F7F1E9",
      svgViewBox: "0 0 40 40",
      svgContent: (
        <>
          <path d="M 5 0 L 5 40" stroke="#E8DCCB" strokeWidth="0.5" strokeDasharray="3,3" />
          <path d="M 35 0 L 35 40" stroke="#E8DCCB" strokeWidth="0.5" strokeDasharray="3,3" />
          <path d="M 0 20 Q 10 10 20 20 Q 30 30 40 20" stroke="#B8A89A" strokeWidth="0.6" fill="none" opacity="0.6" />
        </>
      ),
      appliedAsset: "Keepsake Folders & Customer Cards",
      appliedAssetAr: "بطاقات الهدايا ومذكرات الشكر",
      appliedMockup: (
        <div className="relative w-48 h-48 bg-warm-beige/30 rounded-xl flex items-center justify-center shadow-lg border border-mocha-brown/5 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 40 40'%3E%3Cpath d='M 0 20 Q 10 10 20 20 Q 30 30 40 20' stroke='%236B4E42' stroke-width='1.2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }} />
          <div className="relative z-10 w-28 h-28 bg-ivory-cream border border-mocha-brown/10 shadow-lg flex flex-col justify-between p-3 text-mocha-brown text-center">
            <span className="font-mono text-[5px] uppercase tracking-widest">Note Card</span>
            <div className="flex-1 flex items-center justify-center p-2">
              <span className="font-serif text-[7px] italic text-rose-gold">“where happiness flows”</span>
            </div>
            <div className="w-4 h-[0.5px] bg-mocha-brown/20 mx-auto" />
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
          subtitle="Original Signature Floral Patterns"
          subtitleAr="أنماط زخرفية أصلية مستوحاة من تفاصيل الرمز"
        />

        {/* Narrative layout */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'تتجنب علامتنا الأنماط الزخرفية الصاخبة أو ورق الحائط التقليدي المليء بالتفاصيل الواقعية. بدلاً من ذلك، صممنا نظاماً متكاملاً من الأنماط السطحية المستوحاة مباشرة من انحناءات برعم شعار وادي الورد، وبتلاته المتداخلة، وتدفق مياه واحة القطيف. تُعرض هذه الأنماط بلمسات ناعمة شبه غير مرئية (شفافية بين ٣٪ و ٨٪) لإضافة جودة ملموسة ووقار فني.'
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
                  <svg className="w-full h-full" viewBox={item.svgViewBox}>
                    <rect width="100%" height="100%" fill={item.svgBackground} />
                    {item.svgContent}
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
                  <div className="absolute inset-0 opacity-40" style={{ 
                    backgroundImage: `radial-gradient(circle, #6B4E42 0.5px, transparent 0.5px)`,
                    backgroundSize: '20px 20px'
                  }} />
                  <div className="absolute inset-0" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='${activePatternItem.svgViewBox}'%3E%3Crect width='100%25' height='100%25' fill='%23F7F1E9'/%3E%3Cpath d='M 0 30 Q 15 15 30 30 Q 45 45 60 30' stroke='%236B4E42' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                    opacity: 0.15
                  }} />
                  
                  {/* Decorative centered tag */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 bg-ivory-cream border border-mocha-brown/10 text-mocha-brown font-mono text-[9px] uppercase tracking-widest shadow-md">
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

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import { Package, Heart, Store, FileText, Smartphone, Tv } from 'lucide-react';

interface AppItem {
  name: string;
  nameAr: string;
  size: string;
  substrate: string;
  substrateAr: string;
  printing: string;
  printingAr: string;
  finishing: string;
  finishingAr: string;
}

interface AppCategory {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  desc: string;
  descAr: string;
  items: AppItem[];
}

export default function BrandApplicationsRevamp() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('packaging');

  const categories: AppCategory[] = [
    {
      id: "packaging",
      name: "Packaging System",
      nameAr: "منظومة التعبئة والتغليف",
      icon: <Package size={16} />,
      desc: "Our packaging system is a tactile ritual designed to extend the emotional magnitude of gifting. We prioritize heavyweight rigid boards, unbleached papers, and custom wax seals, completely avoiding high-gloss plastics or synthetic wraps.",
      descAr: "تعد منظومة التعبئة والتغليف لدينا طقساً ملموساً مصمماً لإثراء المشاعر والقيم. نحن نركز على الكرتون الصلب السميك والورق الطبيعي غير المبيض والأختام الشمعية، ونتجنب البلاستيك اللامع والتغليف الصناعي تماماً.",
      items: [
        { name: "Flower Box S", nameAr: "علبة زهور (صغير)", size: "120 x 120 x 120 mm", substrate: "600gsm Blush Cardboard", substrateAr: "كرتون وردي خجول بوزن ٦٠٠ جرام", printing: "Blind Stamp Emblem", printingAr: "ختم محفور غائر للشعار", finishing: "Pre-tied Woven Cotton Ribbon", finishingAr: "شريط قطن منسوج ومربوط يدوياً" },
        { name: "Flower Box M", nameAr: "علبة زهور (وسط)", size: "240 x 240 x 180 mm", substrate: "600gsm Blush Cardboard", substrateAr: "كرتون وردي خجول بوزن ٦٠٠ جرام", printing: "Blind Stamp Emblem", printingAr: "ختم محفور غائر للشعار", finishing: "Cotton Ribbon Tie", finishingAr: "شريط قطن منسوج ومربوط يدوياً" },
        { name: "Flower Box L", nameAr: "علبة زهور (كبير)", size: "360 x 360 x 240 mm", substrate: "600gsm Blush Cardboard", substrateAr: "كرتون وردي خجول بوزن ٦٠٠ جرام", printing: "Blind Stamp Emblem", printingAr: "ختم محفور غائر للشعار", finishing: "Ribbon Handle Tie", finishingAr: "مقبض شريط قطن منسوج" },
        { name: "Luxury Hat Box", nameAr: "صندوق حات الفاخر", size: "200 x 200 mm (Round)", substrate: "Rigid Cardboard", substrateAr: "كرتون صلب دائري فاخر", printing: "Mocha letterpress typography", printingAr: "طباعة بني داكن بآلات الكبس", finishing: "Embroidery Border Details", finishingAr: "تفاصيل حواف مطرزة بخيط ناعم" },
        { name: "Acrylic Box", nameAr: "علبة أكريليك شفافة", size: "150 x 150 x 150 mm", substrate: "Polished Crystal Acrylic", substrateAr: "أكريليك كريستالي مصقول شفاف", printing: "Laser Etched Wordmark", printingAr: "حفر بالليزر لاسم العلامة التجارية", finishing: "Slide Lid Closure", finishingAr: "غطاء انزلاقي لسهولة الفتح" },
        { name: "Drawer Box", nameAr: "صندوق سحاب (درج)", size: "200 x 100 x 60 mm", substrate: "Textured Warm Beige Paper", substrateAr: "ورق بيج دافئ ذو ملمس بارز", printing: "Tonal blind deboss", printingAr: "نقش غائر متناسق النغمات", finishing: "Silk pull ribbon loop", finishingAr: "حلقة سحب من شريط الحرير الناعم" },
        { name: "Gift Box", nameAr: "صندوق الهدايا العام", size: "300 x 200 x 100 mm", substrate: "Recycled Kraft Board", substrateAr: "كرتون كرافت معاد تدويره", printing: "Mocha Brown ink letterpress", printingAr: "طباعة حبر بني داكن بآلات الكبس", finishing: "Wax Seal Seal", finishingAr: "ختم شمعي يدوي للإغلاق" },
        { name: "Shipping Box", nameAr: "صندوق الشحن البريدي", size: "400 x 300 x 150 mm", substrate: "Corrugated Kraft Cardboard", substrateAr: "كرتون مضلع قوي بلون كرافت", printing: "Flexography Mocha ink", printingAr: "طباعة فلكسوغرافية بحبر بني داكن", finishing: "Water-Activated Paper Tape", finishingAr: "شريط لاصق ورقي ينشط بالماء" },
        { name: "Wrapping Paper", nameAr: "ورق تغليف باقات الزهور", size: "700 x 500 mm Sheet", substrate: "80gsm Unbleached Laid Paper", substrateAr: "ورق طبيعي بوزن ٨٠ جراماً", printing: "Low-contrast pattern print", printingAr: "طباعة أنماط بتباين خافت جداً", finishing: "Concentric line print", finishingAr: "نقش خطوط دائرية ناعمة" },
        { name: "Tissue Paper", nameAr: "ورق المناديل الداخلي", size: "500 x 380 mm Sheet", substrate: "22gsm Acid-Free Tissue", substrateAr: "ورق مناديل خفيف بوزن ٢٢ جراماً", printing: "Scatter Rose Petal pattern", printingAr: "نقوش بتلات الورد المتناثرة الخفيفة", finishing: "Low opacity transparent ink", finishingAr: "طباعة حبر شفاف منخفض الشفافية" },
        { name: "Ribbon", nameAr: "شريط التغليف الحريري", size: "25mm Width (Rolls)", substrate: "Woven Woven Linen & Cotton", substrateAr: "ألياف كتان وقطن طبيعي منسوج", printing: "Tonal emboss lettering", printingAr: "حفر بارز خفيف للعلامة التجارية", finishing: "Raw fringe edge detail", finishingAr: "تفاصيل أطراف طبيعية غير مخيطة" },
        { name: "Sticker", nameAr: "ملصق التثبيت الدائري", size: "30mm Diameter", substrate: "Matte laid self-adhesive paper", substrateAr: "ورق لاصق مطفأ ذو ملمس بارز", printing: "Letterpress monogram", printingAr: "طباعة مونوغرام بآلات الكبس", finishing: "Die-cut custom oval", finishingAr: "قص قوالب مخصص بشكل بيضاوي" },
        { name: "Wax Seal", nameAr: "الختم الشمعي اليدوي", size: "25mm Diameter", substrate: "Terracotta-blush Flexible Wax", substrateAr: "شمع مرن بلون الطين المغبر", printing: "Hand-pressed mark die", printingAr: "كبس يدوي بقالب الختم النحاسي", finishing: "Low temperature melt", finishingAr: "إذابة بدرجة حرارة منخفضة" },
        { name: "Thank You Card", nameAr: "بطاقة الشكر والتقدير", size: "A6 (148 x 105 mm)", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", printing: "Mocha debossed lettering", printingAr: "حفر حروف بني داكن بآلات الكبس", finishing: "Hand-painted edge rose gold", finishingAr: "طلاء حواف يدوي بالذهب الوردي" },
        { name: "Care Card", nameAr: "بطاقة إرشادات العناية", size: "120 x 80 mm", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", printing: "Standard Mocha layout print", printingAr: "طباعة تخطيط بني داكن ناعم", finishing: "Spacious typography rules", finishingAr: "ترتيب نصوص مبسط ومريح للعين" },
        { name: "Gift Card", nameAr: "بطاقة الإهداء الفاخرة", size: "100 x 70 mm", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", printing: "Embossed wordmark outline", printingAr: "حفر حروف بارز لاسم العلامة", finishing: "Envelope slide pocket tuck", finishingAr: "جيب إدخال منزلق للمغاريف" },
        { name: "Envelope", nameAr: "المغلف الورقي المبطن", size: "115 x 85 mm", substrate: "120gsm laid unbleached paper", substrateAr: "ورق عاجي طبيعي بوزن ١٢٠ جراماً", printing: "Micro-pattern liner print", printingAr: "بطانة مطبوعة بالنمط المايكرو", finishing: "Wax seal closure flap", finishingAr: "إغلاق بطية شمعية يدوية" },
        { name: "Shopping Bag S", nameAr: "حقيبة تسوق (صغير)", size: "200 x 220 x 100 mm", substrate: "Structured unbleached board", substrateAr: "كرتون طبيعي سميك غير مبيض", printing: "Monogram pattern blind print", printingAr: "طباعة نمط مونوغرام غائرة خافتة", finishing: "Braided cotton rope handles", finishingAr: "حبال قطنية منسوجة للمقابض" },
        { name: "Shopping Bag M", nameAr: "حقيبة تسوق (وسط)", size: "320 x 360 x 140 mm", substrate: "Structured unbleached board", substrateAr: "كرتون طبيعي سميك غير مبيض", printing: "Monogram pattern blind print", printingAr: "طباعة نمط مونوغرام غائرة خافتة", finishing: "Braided rope handles", finishingAr: "حبال قطنية منسوجة للمقابض" },
        { name: "Shopping Bag L", nameAr: "حقيبة تسوق (كبير)", size: "450 x 500 x 180 mm", substrate: "Structured unbleached board", substrateAr: "كرتون طبيعي سميك غير مبيض", printing: "Monogram pattern blind print", printingAr: "طباعة نمط مونوغرام غائرة خافتة", finishing: "Double braided rope handles", finishingAr: "حقيبة بمقابض مزدوجة سميكة" }
      ]
    },
    {
      id: "wedding",
      name: "Wedding & Signage",
      nameAr: "الأعراس واللافتات الاحتفالية",
      icon: <Heart size={16} />,
      desc: "Wedding applications act as custom visual landmarks. The design system uses thin brass boundaries, edge-to-edge layout grids, and silk thread binds, emphasizing spatial elegance.",
      descAr: "تعد مطبوعات الزفاف بمثابة معالم بصرية احتفالية. يعتمد نظام التصميم على الفواصل النحاسية الدقيقة، وشبكات التخطيط الممتدة للحواف، وربطات خيوط الحرير الناعمة.",
      items: [
        { name: "Wedding Arch", nameAr: "قوس الزهور الرئيسي", size: "2.4m Height (Custom)", substrate: "Brushed Brass Outline Frame", substrateAr: "هيكل إطار من النحاس المصقول", printing: "Laser engraved wordmark plate", printingAr: "لوحة نحاس محفورة بالليزر", finishing: "Asymmetrical floral layering", finishingAr: "توزيع زهور غير متماثل متدرج" },
        { name: "Welcome Sign", nameAr: "لافتة الترحيب بالضيوف", size: "A1 (594 x 841 mm)", substrate: "Matte Ivory Acrylic panel", substrateAr: "لوحة أكريليك عاجية مطفأة", printing: "Mocha Brown screenprint text", printingAr: "طباعة حريرية بحبر بني داكن", finishing: "Brass stand hang fixtures", finishingAr: "تثبيت علاقات حوامل نحاسية فاخرة" },
        { name: "Seating Chart", nameAr: "مخطط جلوس المدعوين", size: "A0 (841 x 1189 mm)", substrate: "Linen cloth wrapped board", substrateAr: "لوح مغلف بقماش الكتان الطبيعي", printing: "Letterpress printed card lists", printingAr: "قوائم ورقية مطبوعة بآلات الكبس", finishing: "Thin brass guidelines frames", finishingAr: "إطارات إرشادية نحاسية بالغة الدقة" },
        { name: "Table Numbers", nameAr: "أرقام طاولات القاعة", size: "A6 (105 x 148 mm)", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", printing: "Large serif letterpress numbers", printingAr: "أرقام بخط سيريف مطبوعة بالكبس", finishing: "Solid oak wood holder block", finishingAr: "قالب حامل خشبي من البلوط الصلب" },
        { name: "Invitation Suite", nameAr: "مجموعات بطاقات الدعوة", size: "220 x 110 mm Folded", substrate: "600gsm Cotton board & Vellum", substrateAr: "ورق قطن سميك وورق فيلوم شفاف", printing: "Rose Gold foil stamping", printingAr: "ختم حراري بالذهب الوردي اللطيف", finishing: "Braided silk thread envelope tie", finishingAr: "ربط مغلفات بخيوط الحرير المنسوجة" }
      ]
    },
    {
      id: "retail",
      name: "Retail Experience",
      nameAr: "البوتيك وتجربة التجزئة",
      icon: <Store size={16} />,
      desc: "Our environments reflect the brand's quiet luxury. We prioritize raw tactile plaster, unpolished stone countertops, and hidden warm lighting, allowing florists to stand as design curators.",
      descAr: "تعكس البيئات الفراغية لدينا الفخامة الهادئة. نستخدم الجبس الطبيعي غير المصقول، والطاولات الحجرية، والإضاءة الدافئة المخفية لتبدو الدار كمعرض فني منسق.",
      items: [
        { name: "Exterior Signage", nameAr: "لافتة البوتيك الخارجية", size: "1200 x 400 mm", substrate: "Brushed Brass Plate Sign", substrateAr: "لوحة من النحاس المصقول الطبيعي", printing: "Precision dimensional deboss", printingAr: "حفر غائر ثلاثي الأبعاد دقيق", finishing: "Backlit halo warm LED", finishingAr: "إضاءة هالة خلفية دافئة غير مباشرة" },
        { name: "Interior Signage", nameAr: "اللافتات الداخلية للمحل", size: "600 x 200 mm", substrate: "Lime-washed Plaster insert", substrateAr: "لوح جبس مغسول باللون العاجي", printing: "Blind embossed emblem mark", printingAr: "نقش غائر خافت لشعار الهوية", finishing: "Minimal flush-wall mount", finishingAr: "تركيب متناسق مسطح مع الجدار" },
        { name: "Uniform", nameAr: "الزي الرسمي للفريق", size: "Standard Fit (Bespoke)", substrate: "Structured organic cotton", substrateAr: "قطن عضوي منسوج متماسك الألياف", printing: "Tonal Mocha embroidered badge", printingAr: "تطريز شعار ناعم بلون بني داكن", finishing: "Tailored structured outlines", finishingAr: "قصات وتفاصيل خياطة هندسية نظيفة" },
        { name: "Apron", nameAr: "مئزر العمل الحرفي", size: "Adjustable size", substrate: "Heavy-weight Mocha canvas", substrateAr: "قماش كانفاس سميك بلون بني داكن", printing: "Letterpress blind badge stamp", printingAr: "طباعة ختم بارز للعلامة التجارية", finishing: "Brushed brass strap adjusters", finishingAr: "حلقات حزام نحاسية مصقولة قابلة للضبط" },
        { name: "Delivery Van", nameAr: "سيارات التوصيل للمنازل", size: "Panel Van (Custom)", substrate: "Ivory Cream painted wrap", substrateAr: "دهان كامل بلون العاجي الدافئ الصلب", printing: "Minimal door side typography", printingAr: "طباعة حروف مبسطة على الأبواب", finishing: "Mocha Brown logo decal", finishingAr: "ملصق شعار بني داكن على الأبواب" }
      ]
    },
    {
      id: "stationery",
      name: "Stationery Suite",
      nameAr: "القرطاسية والمكاتبات الرسمية",
      icon: <FileText size={16} />,
      desc: "Tactile correspondence is a fundamental pillar of our brand equity. We focus on double-thick unbleached cotton papers, hand-debossed letterpress inks, and hand-painted edges.",
      descAr: "تعد المراسلات الملموسة ركيزة أساسية من ركائز علامتنا الفاخرة. نحن نركز على الأوراق القطنية المزدوجة السماكة، والطباعة اليدوية بآلات الكبس، وحواف الأوراق المطلية يدوياً.",
      items: [
        { name: "Business Card", nameAr: "بطاقات العمل الشخصية", size: "90 x 50 mm", substrate: "600gsm Cotton Laid paper", substrateAr: "ورق قطني سميك بوزن ٦٠٠ جرام", printing: "Deep deboss Mocha letterpress", printingAr: "حفر بني داكن بآلات الكبس اليدوية", finishing: "Hand-painted edge rose gold", finishingAr: "طلاء حواف يدوي بالذهب الوردي" },
        { name: "Letterhead", nameAr: "الورق الرسمي للمراسلات", size: "A4 (210 x 297 mm)", substrate: "120gsm Warm White laid paper", substrateAr: "ورق عاجي دافئ بوزن ١٢٠ جراماً", printing: "Minimal header typography print", printingAr: "طباعة ترويسة مبسطة أعلى الصفحة", finishing: "Subtle watermark logo emblem", finishingAr: "علامة مائية خافتة لشعار الهوية" },
        { name: "Folder", nameAr: "ملف المستندات والمقترحات", size: "225 x 310 mm Folded", substrate: "350gsm Textured Warm Beige", substrateAr: "ورق بيج دافئ بوزن ٣٥٠ جراماً", printing: "Blind embossed emblem mark", printingAr: "نقش غائر خافت لشعار الهوية", finishing: "Interior document envelope pocket", finishingAr: "جيب داخلي منزلق لحفظ الأوراق" },
        { name: "Stamp", nameAr: "الأختام الحبرية اليدوية", size: "40 x 40 mm", substrate: "Solid walnut wood stamp mount", substrateAr: "مقبض من خشب الجوز الصلب الفاخر", printing: "Natural rubber mark die", printingAr: "قالب مطاطي طبيعي محفور للشعار", finishing: "Self-ink layout Mocha pad", finishingAr: "وسادة حبر مخصصة بلون بني داكن" }
      ]
    },
    {
      id: "digital",
      name: "Digital Interface",
      nameAr: "الواجهات والتطبيقات الرقمية",
      icon: <Smartphone size={16} />,
      desc: "Our digital systems prioritize slow motion, low contrast, and screen breathing room. We completely avoid aggressive animations or distracting marketing overlays.",
      descAr: "تعطي أنظمتنا الرقمية الأولوية للحركة البطيئة، والتباين المنخفض، ومساحات تنفس الشاشة. نحن نتجنب الحركات الصاخبة واللافتات الترويجية المزعجة تماماً.",
      items: [
        { name: "Website Home", nameAr: "موقع الويب الرئيسي", size: "Responsive Grid Layout", substrate: "Ivory Cream background system", substrateAr: "نظام خلفية عاجي دافئ ثابت", printing: "CSS-based typography styles", printingAr: "تخطيطات خطوط تعتمد على لغة CSS", finishing: "Lenis smooth scrolling easing", finishingAr: "انسيابية حركة وتمرير Lenis سلسة" },
        { name: "Mobile UI App", nameAr: "واجهة الهاتف المحمول", size: "Adaptive Layout Screens", substrate: "Solid Ivory theme surfaces", substrateAr: "أسطح واجهة عاجية دافئة صلبة", printing: "Inter sans-serif interface text", printingAr: "نصوص واجهة بخط إنتير الهندسي", finishing: "Soft cubic-bezier slide reveals", finishingAr: "حركة سحب لطيفة بمنحنى cubic-bezier" },
        { name: "Email Signature", nameAr: "توقيع البريد الإلكتروني", size: "600 x 150 px", substrate: "HTML-based text template", substrateAr: "قالب نصوص بريدي بلغة HTML", printing: "System-optimized serif layout", printingAr: "ترتيب نصوص كلاسيكي محسّن للويب", finishing: "Minimal inline logo emblem", finishingAr: "إدراج شعار الهوية الخطي المصغر" }
      ]
    },
    {
      id: "events",
      name: "Events & Installations",
      nameAr: "الفعاليات والتنسيق الموقعي",
      icon: <Tv size={16} />,
      desc: "Event guidelines govern large-scale spatial installations. We treat spatial structures as clean architectural frameworks that support the natural form of the flowers.",
      descAr: "تحكم إرشادات الفعاليات التنسيقات الفراغية الكبيرة. نحن نتعامل مع الهياكل الإنشائية كأطر معمارية نظيفة تدعم الشكل الطبيعي للزهور دون تكلف.",
      items: [
        { name: "Backdrop Sign", nameAr: "خلفية منصة الفعاليات", size: "3.6m Width (Bespoke)", substrate: "Textured plaster framework", substrateAr: "إطار كامل من الجبس الطبيعي الملمس", printing: "Mocha letterpress branding plaque", printingAr: "لوحة نحاس محفورة بالاسم التجاري", finishing: "Soft warm directional lighting", finishingAr: "توزيع إضاءة دافئة موجهة خافتة" },
        { name: "Exhibition Booth", nameAr: "جناح المعارض الفنية", size: "Custom floor framework", substrate: "Unpolished sandstone & Oak", substrateAr: "حجر رملي غير مصقول وخشب البلوط", printing: "Minimal graphic layout borders", printingAr: "حدود تخطيط بصرية دقيقة وبسيطة", finishing: "Integrated floral water pools", finishingAr: "برك مائية مدمجة لزهور البوتيك" },
        { name: "Floral Installation", nameAr: "تنسيق الزهور الفني المعلق", size: "Custom spatial volume", substrate: "Natural organic botanical frames", substrateAr: "هياكل نباتية وعضوية معلقة طبيعية", printing: "Bespoke color thematic matching", printingAr: "تنسيق ألوان يتناسب مع طابع الفعالية", finishing: "Asymmetrical cascading layers", finishingAr: "طبقات زهور متتالية غير متماثلة" }
      ]
    }
  ];

  const activeCatItem = categories.find((cat) => cat.id === activeCategory) || categories[0];

  return (
    <section
      id="chapter-brand-applications"
      className="py-24 md:py-36 px-6 md:px-12 bg-ivory-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chapter Header */}
        <SectionHeader
          num="23"
          title="Brand Applications"
          titleAr="تطبيقات العلامة التجارية"
          subtitle="A Comprehensive System of Touchpoints"
          subtitleAr="دليل شامل لكافة تطبيقات الهوية ونقاط الاتصال"
        />

        {/* Narrative layout */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'تتجاوز الهوية البصرية لوادي الورد مجرد تطبيق الشعار على الأوراق؛ بل تمتد لتشمل دليلاً إرشادياً شاملاً لكافة تطبيقات العلامة التجارية من التعبئة والتغليف، وتنسيقات الأعراس، وبوتيكات التجزئة، والمراسلات الرسمية والواجهات الرقمية. يعرض المعرض التفاعلي أدناه مواصفات المواد وتفاصيل الطباعة واللمسات النهائية لكل نقطة اتصال.'
              : 'The Valley Rose visual identity extends beyond simple logo placement. It governs a comprehensive ecosystem of brand touchpoints ranging from luxury box collections and wedding ceremony signage to retail shop architecture, letterpress stationery suites, and interface design grids. Select a category below to explore the print layout standards.'
            }
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="w-full overflow-x-auto pb-4 mb-16 scrollbar-thin border-b border-mocha-brown/10">
          <div className="flex gap-4 md:gap-6 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3 px-5 text-xs uppercase tracking-widest transition-all duration-300 relative font-medium cursor-pointer flex items-center gap-2 rounded-lg border ${
                  activeCategory === cat.id 
                    ? 'border-rose-gold bg-warm-beige/20 text-mocha-brown font-semibold' 
                    : 'border-transparent text-taupe hover:text-mocha-brown'
                } ${lang === 'ar' ? 'flex-row-reverse font-ar' : ''}`}
              >
                {cat.icon}
                <span>{lang === 'ar' ? cat.nameAr : cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Application Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            {/* Category Intro Block */}
            <div className={`p-8 bg-warm-beige/10 border border-mocha-brown/5 rounded-2xl ${
              lang === 'ar' ? 'text-right' : ''
            }`}>
              <span className="font-mono text-[9px] uppercase tracking-widest text-dusty-rose font-semibold block mb-2">Category Mandate</span>
              <p className={`text-xs text-taupe font-sans font-light leading-relaxed max-w-3xl ${
                lang === 'ar' ? 'font-ar' : ''
              }`}>
                {lang === 'ar' ? activeCatItem.descAr : activeCatItem.desc}
              </p>
            </div>

            {/* Grid of items - editorial, spacious, Pentagram-style layout card lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {activeCatItem.items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 md:p-8 bg-warm-beige/5 border border-mocha-brown/5 hover:border-rose-gold transition-all duration-300 rounded-xl flex flex-col justify-between gap-6"
                >
                  {/* Name and dimensions */}
                  <div className={`flex flex-col gap-1.5 ${lang === 'ar' ? 'text-right' : ''}`}>
                    <span className="text-[10px] tracking-widest text-rose-gold uppercase font-mono">SPEC: {idx + 1}</span>
                    <h4 className="font-serif text-lg text-mocha-brown font-light italic leading-snug">
                      {lang === 'ar' ? item.nameAr : item.name}
                    </h4>
                    <span className="font-mono text-[10px] text-taupe opacity-85">DIMENSIONS: {item.size}</span>
                  </div>

                  {/* Specifications details divider list */}
                  <div className="border-t border-mocha-brown/10 pt-4 flex flex-col gap-2 font-mono text-[9px] text-taupe uppercase">
                    <div className="flex justify-between border-b border-mocha-brown/5 pb-1">
                      <span>{lang === 'ar' ? 'المادة الأساسية' : 'Substrate'}</span>
                      <span className="text-mocha-brown font-semibold font-sans normal-case">
                        {lang === 'ar' ? item.substrateAr : item.substrate}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-mocha-brown/5 pb-1">
                      <span>{lang === 'ar' ? 'تقنية الطباعة' : 'Printing'}</span>
                      <span className="text-mocha-brown font-semibold font-sans normal-case">
                        {lang === 'ar' ? item.printingAr : item.printing}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{lang === 'ar' ? 'اللمسات النهائية' : 'Finishing'}</span>
                      <span className="text-mocha-brown font-semibold font-sans normal-case">
                        {lang === 'ar' ? item.finishingAr : item.finishing}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

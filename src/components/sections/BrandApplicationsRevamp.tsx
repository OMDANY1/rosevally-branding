'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';
import { Package, Heart, Store, FileText, Smartphone } from 'lucide-react';

interface ApplicationItem {
  id: string;
  name: string;
  nameAr: string;
  size: string;
  substrate: string;
  substrateAr: string;
  patternUsed: string;
  patternUsedAr: string;
  printing: string;
  printingAr: string;
  finishing: string;
  finishingAr: string;
}

interface ApplicationSection {
  id: string;
  title: string;
  titleAr: string;
  icon: React.ReactNode;
  desc: string;
  descAr: string;
  image: string;
  caption: string;
  captionAr: string;
  items: ApplicationItem[];
}

export default function BrandApplicationsRevamp() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState('packaging');

  const sections: ApplicationSection[] = [
    {
      id: "packaging",
      title: "Packaging Suite",
      titleAr: "مجموعة التعبئة والتغليف",
      icon: <Package size={16} />,
      desc: "Our packaging is designed as a series of tactile interactions. Each box, sleeve, and tissue fold utilizes heavy-weight unbleached papers debossed with our signature patterns, sealed with terracotta wax. There are no synthetic finishes or plastic window inserts, preserving clean environmental integrity.",
      descAr: "تم تصميم التعبئة والتغليف كمسلسلة من التفاعلات الملموسة. تستخدم كل علبة وكم وورق حشو أوراقاً طبيعية سميكة منقوشة بالنمط المعتمد، ومختومة يدويًا بالشمع بلون الطين. نتجنب تماماً المواد البلاستيكية للحفاظ على النقاء البيئي.",
      image: "/images/ig-gift-box.png",
      caption: "Specimen: Premium Gift Box with custom patterned tissue wrap and wax seal",
      captionAr: "نموذج: علبة الهدايا الفاخرة مع ورق مناديل منقوش بالنمط وختم شمعي",
      items: [
        { id: "flower-box-s", name: "Flower Box S", nameAr: "صندوق زهور (صغير)", size: "120 x 120 x 120 mm", substrate: "600gsm Blush Cardboard", substrateAr: "كرتون وردي خجول بوزن ٦٠٠ جرام", patternUsed: "Hero Pattern (Interior)", patternUsedAr: "النمط البطل (داخلي)", printing: "Blind Stamp deboss", printingAr: "حفر غائر خافت للشعار", finishing: "Pre-tied Woven Cotton Ribbon", finishingAr: "شريط قطن منسوج ومربوط يدوياً" },
        { id: "flower-box-m", name: "Flower Box M", nameAr: "صندوق زهور (وسط)", size: "240 x 240 x 180 mm", substrate: "600gsm Blush Cardboard", substrateAr: "كرتون وردي خجول بوزن ٦٠٠ جرام", patternUsed: "Hero Pattern (Interior)", patternUsedAr: "النمط البطل (داخلي)", printing: "Blind Stamp deboss", printingAr: "حفر غائر خافت للشعار", finishing: "Cotton Ribbon Tie", finishingAr: "شريط قطن منسوج ومربوط يدوياً" },
        { id: "flower-box-l", name: "Flower Box L", nameAr: "صندوق زهور (كبير)", size: "360 x 360 x 240 mm", substrate: "600gsm Blush Cardboard", substrateAr: "كرتون وردي خجول بوزن ٦٠٠ جرام", patternUsed: "Hero Pattern (Interior)", patternUsedAr: "النمط البطل (داخلي)", printing: "Blind Stamp deboss", printingAr: "حفر غائر خافت للشعار", finishing: "Double Ribbon Handle Tie", finishingAr: "حلقات شريط مزدوجة قطنية منسوجة" },
        { id: "hat-box", name: "Luxury Hat Box", nameAr: "صندوق حات دائري فاخر", size: "200 x 200 mm", substrate: "Rigid circular fiberboard", substrateAr: "كرتون دائري مقوى سميك", patternUsed: "Monogram Pattern (Repeat)", patternUsedAr: "نمط المونوغرام (تكرار)", printing: "Mocha letterpress text", printingAr: "طباعة حروف بني داكن بالكبس", finishing: "Rose-gold embroidery edges", finishingAr: "تفاصيل حواف مطرزة بالخيوط الذهبية" },
        { id: "drawer-box", name: "Drawer Box", nameAr: "صندوق سحاب (درج)", size: "200 x 100 x 60 mm", substrate: "Textured Warm Beige Paper", substrateAr: "ورق بيج دافئ ذو ملمس بارز", patternUsed: "Micro Pattern (Interior liner)", patternUsedAr: "النمط الدقيق (بطانة داخلية)", printing: "Tonal debossed branding", printingAr: "نقش غائر متناسق النغمات للشعار", finishing: "Silk pull ribbon loop", finishingAr: "حلقة سحب من شريط الحرير المنسوج" },
        { id: "acrylic-box", name: "Acrylic Box", nameAr: "علبة أكريليك شفافة", size: "150 x 150 x 150 mm", substrate: "Polished Crystal Acrylic", substrateAr: "أكريليك كريستالي مصقول شفاف", patternUsed: "Minimal Line Pattern", patternUsedAr: "النمط الخطي البسيط", printing: "Laser Etched Wordmark", printingAr: "حفر بالليزر لاسم العلامة التجارية", finishing: "Slide Lid Closure", finishingAr: "غطاء انزلاقي لسهولة الفتح والإغلاق" },
        { id: "shipping-box", name: "Shipping Box", nameAr: "صندوق الشحن البريدي", size: "400 x 300 x 150 mm", substrate: "Corrugated Kraft Board", substrateAr: "كرتون مضلع بلون كرافت الطبيعي", patternUsed: "Packaging Pattern", patternUsedAr: "نمط التعبئة والتغليف المعتمد", printing: "Flexography Mocha ink", printingAr: "طباعة فلكسوغرافية بحبر بني داكن", finishing: "Water-Activated Paper Tape", finishingAr: "شريط لاصق ورقي ينشط بالماء" },
        { id: "flower-wrapping", name: "Flower Wrapping", nameAr: "ورق تغليف باقات الزهور", size: "700 x 500 mm Sheets", substrate: "80gsm Unbleached Laid Paper", substrateAr: "ورق طبيعي بوزن ٨٠ جراماً", patternUsed: "Medium Pattern", patternUsedAr: "النمط المتوسط الكثافة", printing: "Low-contrast pattern print", printingAr: "طباعة أنماط بتباين خافت جداً", finishing: "Silk Thread wrap bind", finishingAr: "ربط أوراق التغليف بخيوط الحرير" },
        { id: "tissue-paper", name: "Patterned Tissue Paper", nameAr: "ورق المناديل الداخلي المنقوش", size: "500 x 380 mm Sheets", substrate: "22gsm Acid-Free Tissue", substrateAr: "ورق مناديل خفيف بوزن ٢٢ جراماً", patternUsed: "Tissue Pattern (Scattered)", patternUsedAr: "نمط بتلات الورد المتناثرة الخفيف", printing: "Tonal low opacity print", printingAr: "طباعة أحبار خافتة شفافة النغمة", finishing: "Scented botanical mist spray", finishingAr: "تعطير برذاذ طبيعي خفيف قبل التغليف" },
        { id: "branded-ribbon", name: "Branded Ribbon", nameAr: "شريط التغليف المنسوج", size: "25mm Width (Rolls)", substrate: "Woven Linen & Cotton", substrateAr: "ألياف كتان وقطن طبيعي منسوج", patternUsed: "Ribbon Pattern (Waves)", patternUsedAr: "نمط أشرطة الحرير والتموجات", printing: "Tonal debossed lettering", printingAr: "حفر بارز خافت للعلامة التجارية", finishing: "Raw fringe edge details", finishingAr: "أطراف طبيعية ناعمة غير مطوية" },
        { id: "wax-seal", name: "Wax Seal Stamp", nameAr: "الختم الشمعي المعتمد", size: "25mm Diameter", substrate: "Terracotta-blush Flexible Wax", substrateAr: "شمع مرن بلون الطين الوردي", patternUsed: "Monogram emblem", patternUsedAr: "رمز المونوغرام المركزي", printing: "Hand-pressed stamp die", printingAr: "كبس يدوي بقالب الختم النحاسي", finishing: "Low temperature wax melt", finishingAr: "إذابة بدرجات حرارة منخفضة هادئة" },
        { id: "hang-tag", name: "Hang Tag", nameAr: "بطاقات الأسعار والتعليق", size: "90 x 40 mm", substrate: "300gsm Cotton Laid paper", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", patternUsed: "Border Pattern", patternUsedAr: "نمط الحواف والحدود الخطية", printing: "Letterpress Mocha text", printingAr: "طباعة حروف بني داكن بآلات الكبس", finishing: "Brass eyelet and thread tie", finishingAr: "حلقات نحاسية دقيقة مع ربطة خيط" },
        { id: "thank-you-card", name: "Thank You Card", nameAr: "بطاقة شكر وتقدير العملاء", size: "A6 (148 x 105 mm)", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", patternUsed: "Border Pattern (Margins)", patternUsedAr: "نمط الحدود الخطية على الهوامش", printing: "Mocha debossed lettering", printingAr: "حفر حروف بني داكن بآلات الكبس", finishing: "Hand-painted rose gold edges", finishingAr: "طلاء حواف يدوي بالذهب الوردي" },
        { id: "care-card", name: "Care Card", nameAr: "بطاقة إرشادات العناية", size: "120 x 80 mm", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", patternUsed: "Minimal Line Pattern", patternUsedAr: "النمط الخطي البسيط", printing: "Standard Mocha layout print", printingAr: "طباعة تخطيط بني داكن ناعم", finishing: "Clean structural typography", finishingAr: "ترتيب نصوص مبسط ومريح للعين" },
        { id: "gift-card", name: "Gift Card", nameAr: "بطاقة الإهداء الفاخرة", size: "100 x 70 mm", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", patternUsed: "Micro Pattern", patternUsedAr: "النمط الدقيق (المايكرو)", printing: "Embossed wordmark outline", printingAr: "حفر حروف بارز لاسم العلامة", finishing: "Sleeve card tuck holder", finishingAr: "جيب إدخال منزلق للمغاريف" },
        { id: "envelope", name: "Laid Envelope", nameAr: "المغلف الورقي المبطن", size: "115 x 85 mm", substrate: "120gsm laid unbleached paper", substrateAr: "ورق عاجي طبيعي بوزن ١٢٠ جراماً", patternUsed: "Micro Pattern (Liner)", patternUsedAr: "النمط الدقيق (بطانة داخلية)", printing: "Tonal printing on liner", printingAr: "طباعة أنماط بتباين متناسق داخلياً", finishing: "Wax seal flap closure", finishingAr: "إغلاق بطية شمعية يدوية" },
        { id: "sticker", name: "Packaging Sticker", nameAr: "ملصق التثبيت المعتمد", size: "30mm Diameter", substrate: "Matte laid adhesive paper", substrateAr: "ورق لاصق مطفأ ذو ملمس بارز", patternUsed: "Monogram logo", patternUsedAr: "شعار المونوغرام الدائري", printing: "Letterpress monogram stamp", printingAr: "طباعة مونوغرام بآلات الكبس", finishing: "Die-cut oval contour", finishingAr: "قص قوالب مخصص بشكل بيضاوي" },
        { id: "shopping-bag-s", name: "Shopping Bag S", nameAr: "حقيبة تسوق (صغير)", size: "200 x 220 x 100 mm", substrate: "Structured unbleached board", substrateAr: "كرتون طبيعي سميك غير مبيض", patternUsed: "Monogram Pattern (Repeat)", patternUsedAr: "نمط المونوغرام (تكرار)", printing: "Debossed pattern panel", printingAr: "كبس ونقش نمط غائر على اللوح", finishing: "Braided cotton rope handles", finishingAr: "حبال قطنية منسوجة للمقابض" },
        { id: "shopping-bag-m", name: "Shopping Bag M", nameAr: "حقيبة تسوق (وسط)", size: "320 x 360 x 140 mm", substrate: "Structured unbleached board", substrateAr: "كرتون طبيعي سميك غير مبيض", patternUsed: "Monogram Pattern (Repeat)", patternUsedAr: "نمط المونوغرام (تكرار)", printing: "Debossed pattern panel", printingAr: "كبس ونقش نمط غائر على اللوح", finishing: "Braided cotton rope handles", finishingAr: "حبال قطنية منسوجة للمقابض" },
        { id: "shopping-bag-l", name: "Shopping Bag L", nameAr: "حقيبة تسوق (كبير)", size: "450 x 500 x 180 mm", substrate: "Structured unbleached board", substrateAr: "كرتون طبيعي سميك غير مبيض", patternUsed: "Monogram Pattern (Repeat)", patternUsedAr: "نمط المونوغرام (تكرار)", printing: "Debossed pattern panel", printingAr: "كبس ونقش نمط غائر على اللوح", finishing: "Double braided rope handles", finishingAr: "حقيبة بمقابض مزدوجة سميكة" }
      ]
    },
    {
      id: "wedding",
      title: "Wedding Installations",
      titleAr: "تطبيقات الأعراس والمناسبات",
      icon: <Heart size={16} />,
      desc: "Wedding spatial installations prioritize architectural line structures. Thin brushed brass frames support organic cascading roses, while welcome signage and seating charts utilize laid papers and hand-tied ribbons.",
      descAr: "تعطي التركيبات الفراغية للأعراس الأولوية للهياكل الخطية المعمارية. تدعم الإطارات النحاسية طبقات الورد الطبيعية، بينما تستخدم لافتات الترحيب أوراقاً قطنية وأشرطة مربوطة يدوياً.",
      image: "/images/ig-wedding.png",
      caption: "Specimen: Asymmetrical wedding installation with modern brass arch frame and white roses",
      captionAr: "نموذج: تنسيق الزفاف غير المتماثل مع إطار نحاسي حديث وورود بيضاء",
      items: [
        { id: "wedding-arch", name: "Wedding Arch Frame", nameAr: "قوس الزهور الرئيسي", size: "2.4m Height (Bespoke)", substrate: "Brushed Brass hollow framing", substrateAr: "هيكل إطار من النحاس المصقول", patternUsed: "Minimal Line Pattern", patternUsedAr: "النمط الخطي البسيط", printing: "Laser engraved brass plate", printingAr: "لوحة نحاس محفورة بالليزر", finishing: "Asymmetrical floral layering", finishingAr: "توزيع زهور غير متماثل متدرج" },
        { id: "welcome-sign", name: "Welcome Signboard", nameAr: "لافتة الترحيب الاحتفالية", size: "A1 (594 x 841 mm)", substrate: "Matte Ivory Acrylic panel", substrateAr: "لوحة أكريليك عاجية مطفأة", patternUsed: "Border Pattern", patternUsedAr: "نمط الحواف والحدود الخطية", printing: "Mocha Brown screenprint text", printingAr: "طباعة شاشة حريرية بحبر بني داكن", finishing: "Brass hardware fittings", finishingAr: "تثبيت علاقات حوامل نحاسية فاخرة" },
        { id: "seating-chart", name: "Seating Chart", nameAr: "مخطط جلوس المدعوين", size: "A0 (841 x 1189 mm)", substrate: "Linen wrapped backing board", substrateAr: "لوح مغلف بقماش الكتان الطبيعي", patternUsed: "Monogram Pattern", patternUsedAr: "نمط المونوغرام المعتمد", printing: "Letterpress printed card lists", printingAr: "قوائم ورقية مطبوعة بآلات الكبس", finishing: "Brass guideline rods", finishingAr: "دعامات نحاسية دقيقة للفصل بين القوائم" },
        { id: "table-numbers", name: "Table Numbers", nameAr: "أرقام طاولات القاعة", size: "A6 (105 x 148 mm)", substrate: "300gsm Cotton Laid Board", substrateAr: "ورق قطني سميك بوزن ٣٠٠ جرام", patternUsed: "Border Pattern", patternUsedAr: "نمط الحواف والحدود الخطية", printing: "Serif letterpress print", printingAr: "طباعة بخط سيريف كلاسيكي بالكبس", finishing: "Oak wood holder blocks", finishingAr: "قوالب حامل خشبية من البلوط الصلب" },
        { id: "invitation-suite", name: "Invitation Suite", nameAr: "مجموعات بطاقات الدعوة", size: "220 x 110 mm Folded", substrate: "600gsm Cotton board & Vellum", substrateAr: "ورق قطن سميك وورق فيلوم شفاف", patternUsed: "Micro Pattern (Interior liner)", patternUsedAr: "النمط الدقيق (بطانة داخلية)", printing: "Rose Gold foil stamping", printingAr: "ختم حراري بالذهب الوردي اللطيف", finishing: "Silk thread envelope binding", finishingAr: "ربط مغلفات بخيوط الحرير المنسوجة" }
      ]
    },
    {
      id: "retail",
      title: "Retail Experience",
      titleAr: "البوتيك وتجربة التجزئة",
      icon: <Store size={16} />,
      desc: "Our environments reflect the brand's quiet luxury. Boutiques feature raw lime-washed plaster walls, unpolished sandstone surfaces, and custom embroidered linen uniforms, establishing a clean art-gallery feel.",
      descAr: "تعكس البيئات الفراغية البوتيكية الفخامة الهادئة للدار. تتميز المحلات بجدران جبسية ناصعة وأسطح حجرية غير مصقولة وأزياء من الكتان المطرز لتبدو كمعرض فني صامت.",
      image: "/images/ig-vase.png",
      caption: "Specimen: Minimalist sculptural floral arrangement in raw travertine stone vase",
      captionAr: "نموذج: تنسيق زهور منحوت ومبسط في وعاء من حجر الترافرتين الطبيعي",
      items: [
        { id: "store-signage", name: "Boutique Signage", nameAr: "لافتة المحل الخارجية", size: "1200 x 400 mm", substrate: "Brushed Brass Plate Sign", substrateAr: "لوحة من النحاس المصقول الطبيعي", patternUsed: "Minimal Line Pattern", patternUsedAr: "النمط الخطي البسيط", printing: "Precision dimensional deboss", printingAr: "حفر غائر ثلاثي الأبعاد دقيق", finishing: "Backlit halo warm LED", finishingAr: "إضاءة هالة خلفية دافئة غير مباشرة" },
        { id: "window-graphics", name: "Window Graphics", nameAr: "ملصقات الواجهات الزجاجية", size: "Various scaling", substrate: "Frosted matte transparent vinyl", substrateAr: "فينيل شفاف مطفأ بلون عاجي", patternUsed: "Border Pattern", patternUsedAr: "نمط الحواف والحدود الخطية", printing: "Tonal vinyl outline print", printingAr: "قص حروف فينيل دقيق متناسق", finishing: "Flush glass installation", finishingAr: "تركيب متناسق مسطح على الزجاج" },
        { id: "uniform", name: "Staff Uniform", nameAr: "الزي الرسمي للفريق", size: "Tailored (Bespoke)", substrate: "Structured organic cotton", substrateAr: "قطن عضوي منسوج متماسك الألياف", patternUsed: "Monogram (Lapel detail)", patternUsedAr: "مونوغرام العلامة على الياقة", printing: "Tonal Mocha embroidered badge", printingAr: "تطريز شعار ناعم بلون بني داكن", finishing: "Structured tailor layouts", finishingAr: "تفاصيل خياطة وربط هندسية نظيفة" },
        { id: "apron", name: "Florist Apron", nameAr: "مئزر العمل الحرفي", size: "Adjustable size", substrate: "Heavy-weight Canvas fabric", substrateAr: "قماش كانفاس سميك ومتين", patternUsed: "Hero Pattern (Pocket)", patternUsedAr: "النمط البطل (نقش الجيب)", printing: "Debossed leather badge print", printingAr: "طباعة ختم بارز على رقعة جلدية", finishing: "Brushed brass strap loops", finishingAr: "حلقات حزام نحاسية مصقولة قابلة للضبط" },
        { id: "delivery-van", name: "Delivery Van Wrap", nameAr: "سيارات التوصيل للمنازل", size: "Bespoke Panel Van", substrate: "Ivory Cream paint wrap", substrateAr: "دهان كامل بلون العاجي الدافئ الصلب", patternUsed: "Medium Pattern (Rear panels)", patternUsedAr: "النمط المتوسط الكثافة (اللوح الخلفي)", printing: "Matte vinyl print decals", printingAr: "ملصقات فينيل مطفأة متناسقة", finishing: "UV-resistant matte laminate", finishingAr: "طبقة حماية مطفأة مقاومة لأشعة الشمس" }
      ]
    },
    {
      id: "stationery",
      title: "Stationery Suite",
      titleAr: "القرطاسية والمراسلات الورقية",
      icon: <FileText size={16} />,
      desc: "Corporate communications represent physical brand touchpoints. We utilize unbleached heavyweight cotton papers, deep letterpress debossing, and signature hand-painted gold edges.",
      descAr: "تمثل القرطاسية والمكاتبات الرسمية نقاط الاتصال المادية الأكثر دقة. نحن نستخدم أوراقًا قطنية ثقيلة غير مبيضة، وحفر الحروف بآلات الكبس، وحواف الأوراق المطلية يدوياً بالذهب.",
      image: "/images/ig-packaging-detail.png",
      caption: "Specimen: Laid envelope liner with micro-pattern print and hand-pressed wax seal",
      captionAr: "نموذج: بطانة المغلف المطبوعة بالنمط المايكرو مع ختم شمعي يدوي",
      items: [
        { id: "business-card", name: "Business Card", nameAr: "بطاقات العمل الشخصية", size: "90 x 50 mm", substrate: "600gsm Cotton Laid paper", substrateAr: "ورق قطني سميك بوزن ٦٠٠ جرام", patternUsed: "Border Pattern (Frame)", patternUsedAr: "نمط الحدود الخطية على الإطار", printing: "Deep deboss Mocha letterpress", printingAr: "حفر بني داكن بآلات الكبس اليدوية", finishing: "Hand-painted edge rose gold", finishingAr: "طلاء حواف يدوي بالذهب الوردي" },
        { id: "letterhead", name: "Corporate Letterhead", nameAr: "الورق الرسمي للمراسلات", size: "A4 (210 x 297 mm)", substrate: "120gsm Warm White laid paper", substrateAr: "ورق عاجي دافئ بوزن ١٢٠ جراماً", patternUsed: "Micro Pattern (Footer area)", patternUsedAr: "النمط الدقيق (مساحة التذييل)", printing: "Header Mocha typography print", printingAr: "طباعة ترويسة مبسطة أعلى الصفحة", finishing: "Subtle watermark logo emblem", finishingAr: "علامة مائية خافتة لشعار الهوية" },
        { id: "folder", name: "Proposal Folder", nameAr: "ملف المستندات والمقترحات", size: "225 x 310 mm Folded", substrate: "350gsm Textured paper board", substrateAr: "ورق مقوى ذو ملمس بارز ٣٥٠ جراماً", patternUsed: "Monogram (Emboss cover)", patternUsedAr: "مونوغرام العلامة على الغلاف", printing: "Blind embossed emblem mark", printingAr: "نقش غائر خافت لشعار الهوية", finishing: "Linen tie cord closure", finishingAr: "إغلاق برباط من الكتان الطبيعي الناعم" },
        { id: "notebook", name: "Bespoke Journal", nameAr: "مذكرات العلامة الدفترية", size: "A5 (148 x 210 mm)", substrate: "Hardcover cloth wrapped notebook", substrateAr: "دفتر بغلاف من القماش القطني السميك", patternUsed: "Hero Pattern (Cover)", patternUsedAr: "النمط البطل (نقش كامل للغلاف)", printing: "Gold foil debossed text", printingAr: "حفر حروف بالذهب الوردي اللطيف", finishing: "Linen bookmark thread insert", finishingAr: "شريط كتان داخلي كعلامة للقراءة" }
      ]
    },
    {
      id: "digital",
      title: "Digital Accents",
      titleAr: "الواجهات والتطبيقات الرقمية",
      icon: <Smartphone size={16} />,
      desc: "Our digital systems prioritize breathing room, low contrast, and smooth transition easing. We strictly apply our signature line pattern as layout backgrounds and border guides.",
      descAr: "تعطي أنظمتنا الرقمية الأولوية لمساحات تنفس الشاشة، والتباين المنخفض، والانتقالات البصرية السلسة. نستخدم النمط الخطي البسيط كخلفيات دقيقة وفواصل بين الأقسام.",
      image: "/images/ig-mood.png",
      caption: "Specimen: Moodboard representation showing sensory keywords, textures and neutral palettes",
      captionAr: "نموذج: لوحة مزاجية تفاعلية تعرض الكلمات الحسية، المواد الخام والألوان المحايدة",
      items: [
        { id: "website-home", name: "Website Interface", nameAr: "موقع الويب الرئيسي", size: "Responsive Grid Layout", substrate: "HTML5/CSS3 Web surfaces", substrateAr: "شاشات ويب مبنية بلغات برمجية حديثة", patternUsed: "Minimal Line Pattern", patternUsedAr: "النمط الخطي البسيط", printing: "SVG inline pattern vectors", printingAr: "أكواد رسومية متجهة للأنماط المعتمدة", finishing: "Smooth scroll Lenis integration", finishingAr: "تمرير Lenis الملموس والانسيابي" },
        { id: "mobile-ui", name: "Mobile App UI", nameAr: "واجهة الهاتف المحمول", size: "Adaptive Layout Screens", substrate: "iOS & Android Interface themes", substrateAr: "شاشات واجهة مخصصة للهواتف الذكية", patternUsed: "Micro Pattern", patternUsedAr: "النمط الدقيق (المايكرو)", printing: "System optimized pixel render", printingAr: "عرض بكسل محسّن لأنظمة الهاتف", finishing: "Soft cubic-bezier transitions", finishingAr: "انتقالات ناعمة بمنحنيات تسريع مخصصة" }
      ]
    }
  ];

  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];

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
          subtitle="Expanded Portfolio Showcase & Blueprint Specs"
          subtitleAr="معرض شامل وموسع لكافة المطبوعات ونقاط الاتصال بالتصميم"
        />

        {/* Narrative layout */}
        <div className="max-w-3xl mb-16 text-sm text-taupe font-sans font-light leading-relaxed">
          <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
            {lang === 'ar'
              ? 'تتجاوز الهوية البصرية لوادي الورد مجرد تطبيق الشعار على الأوراق؛ بل تمتد لتشمل دليلاً إرشادياً شاملاً لكافة تطبيقات العلامة التجارية من التعبئة والتغليف، وتنسيقات الأعراس، وبوتيكات التجزئة، والمراسلات الرسمية والواجهات الرقمية. يعرض المعرض التفاعلي أدناه مواصفات المواد وتفاصيل الطباعة واللمسات النهائية لكل نقطة اتصال.'
              : 'Our visual identity is more than a logo; it is a meticulous system of physical and digital touchpoints. We have structured this expanded portfolio manual to present blueprints across packaging cardboard, event structures, retail spaces, stationery laid papers, and interface screens. Select a category tab below to view detailed specifications alongside custom visual mockups.'
            }
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="w-full overflow-x-auto pb-4 mb-16 scrollbar-thin border-b border-mocha-brown/10">
          <div className="flex gap-4 md:gap-6 min-w-max">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveTab(sec.id)}
                className={`py-3.5 px-6 text-xs uppercase tracking-widest transition-all duration-300 relative font-medium cursor-pointer flex items-center gap-2 rounded-lg border ${
                  activeTab === sec.id 
                    ? 'border-rose-gold bg-warm-beige/20 text-mocha-brown font-semibold' 
                    : 'border-transparent text-taupe hover:text-mocha-brown'
                } ${lang === 'ar' ? 'flex-row-reverse font-ar' : ''}`}
              >
                {sec.icon}
                <span>{lang === 'ar' ? sec.titleAr : sec.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Application Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Column: Visual Mockup (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-warm-beige/30 overflow-hidden border border-mocha-brown/10 rounded-2xl shadow-xl group">
                <Image
                  src={activeSection.image}
                  alt={lang === 'ar' ? activeSection.captionAr : activeSection.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  priority
                />
              </div>
              <span className="text-[10px] tracking-widest text-taupe uppercase font-mono text-center block mt-2 px-4 leading-relaxed">
                {lang === 'ar' ? activeSection.captionAr : activeSection.caption}
              </span>
            </div>

            {/* Right Column: Spec checklist (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {/* Category Mandate Intro */}
              <div className={`p-6 bg-warm-beige/10 border border-mocha-brown/5 rounded-xl ${
                lang === 'ar' ? 'text-right' : ''
              }`}>
                <span className="font-mono text-[9px] uppercase tracking-widest text-dusty-rose font-semibold block mb-2">Category Guideline Mandate</span>
                <p className={`text-xs text-taupe font-sans font-light leading-relaxed ${
                  lang === 'ar' ? 'font-ar' : ''
                }`}>
                  {lang === 'ar' ? activeSection.descAr : activeSection.desc}
                </p>
              </div>

              {/* Scrollable list of blueprint items */}
              <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                {activeSection.items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-5 bg-warm-beige/5 border border-mocha-brown/5 hover:border-rose-gold transition-colors duration-300 rounded-lg flex flex-col gap-4"
                  >
                    <div className={`flex flex-col gap-1 ${lang === 'ar' ? 'text-right' : ''}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] tracking-widest text-rose-gold uppercase font-mono">BLUEPRINT: {idx + 1}</span>
                        <span className="text-[8px] font-mono text-taupe bg-warm-beige/10 px-2 py-0.5 rounded uppercase">{item.size}</span>
                      </div>
                      <h4 className="font-serif text-base text-mocha-brown font-light italic mt-1 leading-snug">
                        {lang === 'ar' ? item.nameAr : item.name}
                      </h4>
                    </div>

                    <div className="border-t border-mocha-brown/10 pt-3 flex flex-col gap-2 font-mono text-[9px] text-taupe uppercase">
                      <div className="flex justify-between border-b border-mocha-brown/5 pb-1">
                        <span>{lang === 'ar' ? 'المادة الأساسية' : 'Substrate'}</span>
                        <span className="text-mocha-brown font-semibold font-sans normal-case">
                          {lang === 'ar' ? item.substrateAr : item.substrate}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-mocha-brown/5 pb-1">
                        <span>{lang === 'ar' ? 'النمط المستخدم' : 'Pattern Applied'}</span>
                        <span className="text-rose-gold font-semibold font-sans normal-case">
                          {lang === 'ar' ? item.patternUsedAr : item.patternUsed}
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
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

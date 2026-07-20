'use client';

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';

export default function PackagingApplications() {
  const { lang } = useLang();

  const specs = [
    {
      num: "16",
      title: "Packaging System",
      titleAr: "نظام التعبئة والتغليف",
      subtitle: "The Gift Box as a Keepsake",
      subtitleAr: "صندوق الهدايا كتحفة تذكارية",
      desc: "Our signature rigid gift box is constructed from heavy-weight, matte-finished Blush Pink cardstock with a blind-debossed logo mark. Inside, flowers are wrapped in custom ivory tissue paper sealed with a hand-pressed rose-gold wax stamp. The box is secured with a woven cotton ribbon. It is designed to be kept and reused as a premium keepsake organizer.",
      descAr: "صندوق الهدايا المميز مصنوع من ورق مقوى سميك بلون وردي خجول مطفأ وبشعار محفور غائر. في الداخل، تُلف الزهور بورق مناديل عاجي مخصص ومختوم بختم شمعي من الذهب الوردي يُكبس يدوياً. ويُؤمن الصندوق بشريط قطني منسوج.",
      image: "/images/packaging.png"
    },
    {
      num: "17",
      title: "Floral Wrapping",
      titleAr: "تغليف باقات الزهور",
      subtitle: "Tactile Papers & Seasonal Details",
      subtitleAr: "أوراق ملموسة وتفاصيل موسمية",
      desc: "For loose bouquets, we utilize a three-layer wrapping system: a translucent vellum inner sheet to protect petals, a mid-wrap of textured unbleached paper in Warm Beige, and a tied woven linen ribbon. A single dried botanical branch is tucked into the knot. We never use glossy plastics, loud cellophane, or pre-made synthetic bow knots.",
      descAr: "بالنسبة للباقات المفتوحة، نستخدم نظام تغليف ثلاثي الطبقات: ورقة داخلية من الفيلوم الشفاف لحماية البتلات، ولفافة متوسطة من الورق غير المبيض ذي الملمس بلون بيج دافئ، وشريط من الكتان المنسوج والمربوط يدوياً. يتم دمج غصن نباتي مجفف واحد في العقدة.",
      image: "/images/arrangements.png"
    },
    {
      num: "18",
      title: "Wedding Applications",
      titleAr: "تطبيقات حفلات الزفاف",
      subtitle: "Bespoke Ceremony Collaterals",
      subtitleAr: "مطبوعات الأعراس المخصصة",
      desc: "Wedding styling is our premier service. The visual identity extends to bespoke ceremony invitation folders wrapped in silk thread, blind-embossed dinner menus on cotton paper, and elegant seating cards. The colors coordinate with the wedding's theme but stay within the approved secondary palette, ensuring that the floral design and stationary feel like a single cohesive editorial environment.",
      descAr: "تنسيق حفلات الزفاف هو خدمتنا الأولى. تمتد الهوية البصرية لتشمل مجلدات دعوة الزفاف المخصصة والمحاطة بخيوط الحرير، وقوائم العشاء المحفورة على ورق قطني، وبطاقات جلوس أنيقة. وتتناسق الألوان مع طابع حفل الزفاف ولكنها تظل ضمن لوحة الألوان الثانوية المعتمدة.",
      image: "/images/wedding.png"
    },
    {
      num: "19",
      title: "Stationery",
      titleAr: "القرطاسية والمراسلات",
      subtitle: "Tactile Corporate Correspondence",
      subtitleAr: "المراسلات الرسمية والملموسة",
      desc: "Our physical correspondence is a tactile experience. Business cards are printed on double-thick 600gsm cotton paper with Mocha Brown letterpress text and painted rose-gold edges. Letterheads use 120gsm warm white laid paper with a subtle watermark. Envelopes feature a custom pattern liner and are sealed with the brand's signature wax stamp.",
      descAr: "مراسلاتنا المادية هي تجربة ملموسة. تُطبع بطاقات العمل على ورق قطني مزدوج السماكة بوزن ٦٠٠ جرام مع نص بني داكن وحواف مطلية بالذهب الوردي. وتستخدم الأوراق الرسمية ورقاً عاجياً دافئاً بوزن ١٢٠ جراماً مع علامة مائية رقيقة.",
      image: "/images/editorial-arrangement.png"
    }
  ];

  return (
    <div className="bg-ivory-cream border-b border-mocha-brown/10">
      {specs.map((item) => (
        <section
          key={item.num}
          id={`chapter-${item.num === "16" ? "packaging" : item.num === "17" ? "floral-wrapping" : item.num === "18" ? "wedding-applications" : "stationery"}`}
          className="py-24 md:py-36 px-6 md:px-12 border-b border-mocha-brown/5 last:border-b-0"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <SectionHeader
              num={item.num}
              title={item.title}
              titleAr={item.titleAr}
              subtitle={item.subtitle}
              subtitleAr={item.subtitleAr}
            />

            {/* Layout split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
              {/* Left text description */}
              <div className="lg:col-span-6 flex flex-col gap-6 text-sm text-taupe font-sans font-light leading-relaxed">
                <p className={lang === 'ar' ? 'text-right font-ar' : ''}>
                  {lang === 'ar' ? item.descAr : item.desc}
                </p>

                {/* Technical Print Spec chips */}
                <div className="border-t border-mocha-brown/10 pt-6 flex flex-col gap-2 font-mono text-[10px] text-taupe uppercase">
                  <span className="font-semibold text-mocha-brown mb-1">
                    {lang === 'ar' ? 'المواصفات الفنية والمواد' : 'Technical Specifications'}
                  </span>
                  <div className="flex justify-between border-b border-mocha-brown/5 pb-1">
                    <span>{lang === 'ar' ? 'نوع الورق والوزن' : 'Paper Stock'}</span>
                    <span className="text-mocha-brown font-medium">
                      {item.num === "16" ? "600gsm Rigid Board" : item.num === "17" ? "120gsm Laid Kraft / Vellum" : item.num === "18" ? "300gsm Cotton Paper" : "600gsm Letterpress Card"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-mocha-brown/5 pb-1">
                    <span>{lang === 'ar' ? 'طريقة الطباعة' : 'Print Method'}</span>
                    <span className="text-mocha-brown font-medium">
                      {item.num === "16" ? "Blind Stamp / Letterpress" : item.num === "17" ? "Outline Flexography" : item.num === "18" ? "Rose Gold Foil Hotstamp" : "Letterpress Ink Deboss"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'ar' ? 'اللمسات النهائية' : 'Finishing Detail'}</span>
                    <span className="text-mocha-brown font-medium">
                      {item.num === "16" ? "Ribbon Knot Tie" : item.num === "17" ? "Dried Stem Tuck" : item.num === "18" ? "Silk Thread Wrap" : "Edge-Paint Rose Gold"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right image mockup block */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] bg-warm-beige/30 overflow-hidden border border-mocha-brown/5 rounded-xl group">
                  <Image
                    src={item.image}
                    alt={lang === 'ar' ? item.subtitleAr : item.subtitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                  />
                </div>
                <span className="text-[10px] tracking-widest text-taupe uppercase font-mono text-center block">
                  {lang === 'ar' ? `تطبيق رقمي: ${item.titleAr}` : `Specimen: ${item.title}`}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.qatif': 'Saihat',
    'nav.strategy': 'Strategy',
    'nav.identity': 'Identity',
    'nav.territories': 'Territories',
    'nav.digital': 'Digital',
    'nav.launch': 'Launch',
    // Hero
    'hero.eyebrow': 'Luxury Contemporary Floral Design House',
    'hero.title1': 'Valley',
    'hero.title2': 'Rose',
    'hero.loc': 'Saihat · Qatif · Eastern Province · Saudi Arabia',
    'hero.chapters': 'Chapters',
    'hero.territories': 'Creative Territories',
    'hero.concepts': 'Logo Concepts',
    // Manifesto
    'manifesto.quote': '"Not a flower shop. A design house rooted in the oldest soil of Arabia."',
    // Qatif
    'qatif.title': 'Rooted in Saihat, Qatif',
    'qatif.sub': 'Where the Garden Meets the Gulf',
    'qatif.intro': 'Saihat, nestled within the ancient agricultural oasis of Qatif along the Arabian Gulf, is our source material. Valley Rose draws its visual intelligence from this meeting point of fertile land and tidal movement — where palm groves meet coastlines, and quiet spring waters flow into reflective seas.',
    'qatif.statement': '"Valley Rose carries the quiet rhythm of the Saihat coast and the fertile heritage of Qatif. The tide and the soil are invisible — but they determine every form."',
    // Market
    'market.title': 'Market Intelligence',
    'market.sub': 'Research · Competitive Analysis · Blue Ocean',
    'market.box1': 'Saudi gifting market',
    'market.box2': 'YoY luxury floral growth',
    'market.box3': 'Recipients photograph packaging',
    'market.box4': 'Average luxury wedding floral budget',
    'market.ocean.label': 'Blue Ocean Strategy',
    'market.ocean.quote': 'There is no luxury floral brand in the Eastern Province — or arguably all of KSA — that combines international luxury visual standards with authentic Saudi cultural intelligence. Valley Rose does not enter a crowded market. It creates a new category: Saudi Contemporary Luxury Floristry.',
    // Strategy
    'strategy.title': 'Brand Strategy',
    'strategy.sub': 'The Foundations That Cannot Be Copied',
    'strategy.essence.label': 'Brand Essence',
    'strategy.essence.val': 'Rooted in beauty. Expressed in form.',
    'strategy.archetype.label': 'Archetype',
    'strategy.category.label': 'Category',
    'strategy.category.val': 'Saudi Contemporary Luxury Floristry',
    'strategy.positioning.label': 'Positioning Statement',
    'strategy.positioning.quote': 'For the discerning residents of the Eastern Province and GCC who believe that beauty is a form of respect — Valley Rose is the luxury floral design house that transforms every occasion into an enduring memory, through arrangements of singular artistry, rooted in Saudi heritage and expressed in a contemporary luxury language.',
    // Chapters
    'chapter.01.title': 'Brand Vision & The Spirit of Saihat, Qatif',
    'chapter.01.sub': 'Chapter 01 / Where the Garden meets the Gulf',
    'chapter.02.title': 'Market Insights & Strategy',
    'chapter.02.sub': 'Chapter 02 / The Intelligence Grid',
    'chapter.03.title': 'Creative Territories',
    'chapter.03.sub': 'Chapter 03 / Visual Direction Proposals',
    'chapter.04.title': 'Visual Identity System',
    'chapter.04.sub': 'Chapter 04 / Graphic and Spatial Systems',
    'chapter.05.title': 'Digital & Social Expression',
    'chapter.05.sub': 'Chapter 05 / Immersive Interfaces',
    'chapter.06.title': 'Launch Strategy',
    'chapter.06.sub': 'Chapter 06 / The 90-Day Roadmap',
    // Footer
    'footer.doc': 'Complete Brand Strategy & Identity System · Confidential · 2026',
    'footer.credit': 'Collins · Pentagram · DesignStudio · Porto Rocha · Basic Agency — Inspired Standard',
    'footer.whatsapp': 'Start Your Consultation',
  },
  ar: {
    // Nav
    'nav.qatif': 'سيهات',
    'nav.strategy': 'الرؤية الاستراتيجية',
    'nav.identity': 'الهوية البصرية',
    'nav.territories': 'المناطق الإبداعية',
    'nav.digital': 'التجربة الرقمية',
    'nav.launch': 'مراحل الإطلاق',
    // Hero
    'hero.eyebrow': 'دار فنية معاصرة لتصميم وتنسيق الزهور النادرة',
    'hero.title1': 'وادي',
    'hero.title2': 'الورد',
    'hero.loc': 'سيهات · القطيف · المنطقة الشرقية · المملكة العربية السعودية',
    'hero.chapters': 'فصلاً استراتيجياً',
    'hero.territories': 'مناطق إبداعية ملهمة',
    'hero.concepts': 'مفاهيم شعار استثنائية',
    // Manifesto
    'manifesto.quote': '«لسنا مجرد متجر زهور؛ بل دار فنية للتصميم، تمتد جذورها في أعرق واحات الجزيرة العربية وتتلاقى مع آفاق الحاضر.»',
    // Qatif
    'qatif.title': 'أصالة سيهات والقطيف',
    'qatif.sub': 'حيث تلتقي الحديقة بالخليج العربي',
    'qatif.intro': 'سيهات، الوافرة بالخضرة على امتداد واحة القطيف التاريخية والمطلة على مياه الخليج العربي، ليست مجرد إطار جغرافي بل هي منطلق الهامنا. يستمد «وادي الورد» هويته البصرية من هذا التلاقي البديع بين بساتين النخيل الوارفة وإيقاع المد والجزر الساحلي — حيث تندمج عراقة الأرض مع انسيابية البحر ونقاء اللؤلؤ.',
    'qatif.statement': '«يحمل "وادي الورد" الإيقاع الهادئ لسواحل سيهات والعمق العريق لواحات القطيف؛ فالمد والتربة عنصران كامنان وراء الأثر، يمنحان الحياة لكل تكوين إبداعي.»',
    // Market
    'market.title': 'الذكاء السوقي والبحوث',
    'market.sub': 'البحوث والتحليل التنافسي ورؤية المحيط الأزرق',
    'market.box1': 'حجم سوق الهدايا في السعودية',
    'market.box2': 'النمو السنوي لقطاع الزهور الفاخرة',
    'market.box3': 'من المتلقين يصور التغليف قبل فتحه لمشاركته',
    'market.box4': 'متوسط ميزانية زهور الزفاف الفاخرة',
    'market.ocean.label': 'رؤية المحيط الأزرق الاستراتيجية',
    'market.ocean.quote': 'تخلو المنطقة الشرقية، والخليج العربي عموماً، من علامة تجارية فاخرة للزهور تدمج بين معايير الفخامة البصرية العالمية والعمق الثقافي والوطني الأصيل. هنا يبرز "وادي الورد" كفئة مبتكرة وفريدة.',
    // Strategy
    'strategy.title': 'استراتيجية العلامة التجارية',
    'strategy.sub': 'الركائز الأصيلة التي لا تُنسخ ولا تُقلد',
    'strategy.essence.label': 'جوهر الهوية',
    'strategy.essence.val': 'متجذرة في الجمال، ومجسّدة في أرقى الأشكال الفنية.',
    'strategy.archetype.label': 'النمط البدائي',
    'strategy.category.label': 'الفئة التنافسية',
    'strategy.category.val': 'الزهور الفاخرة السعودية المعاصرة',
    'strategy.positioning.label': 'بيان التموضع الاستراتيجي',
    'strategy.positioning.quote': 'للنخبة ومتذوقي الجمال في المنطقة الشرقية ودول الخليج الذين يرون في الجمال شكلاً من أشكال الاحترام والتقدير — "وادي الورد" هو دار التصميم الزهري الفاخرة التي تحول كل مناسبة إلى ذكرى خالدة، عبر تنسيقات فنية نادرة متجذرة في التراث الأصيل ومصاغة بلغة الفخامة المعاصرة.',
    // Chapters
    'chapter.01.title': 'الرؤية وفلسفة التأسيس: سيهات والقطيف',
    'chapter.01.sub': 'الفصل الأول / حيث تلتقي الحديقة بالخليج',
    'chapter.02.title': 'دراسة السوق ومصفوفة التموضع',
    'chapter.02.sub': 'الفصل الثاني / قراءة السوق والذكاء التنافسي',
    'chapter.03.title': 'التوجهات الإبداعية والمزاج الفني',
    'chapter.03.sub': 'الفصل الثالث / صياغة الهوية والمزاج البصري للمقترحات',
    'chapter.04.title': 'منظومة الهوية البصرية والملموسة',
    'chapter.04.sub': 'الفصل الرابع / الألوان والخطوط وعناصر التعبئة والتقديم',
    'chapter.05.title': 'التجربة الرقمية ووسائل التواصل الفني',
    'chapter.05.sub': 'الفصل الخامس / واجهات المستخدم وتفاعل الحركة الهادئة',
    'chapter.06.title': 'استراتيجية الإطلاق ومسار الإشهار والانتشار',
    'chapter.06.sub': 'الفصل السادس / خطة العمل والتأسيس والانتشار خلال ٩٠ يوماً',
    // Footer
    'footer.doc': 'نظام واستراتيجية الهوية البصرية الكاملة لوادي الورد · وثيقة سرية وللاستخدام الداخلي فقط · ٢٠٢٦',
    'footer.credit': 'استوحي هذا التصميم من المعايير الإبداعية لأعرق بيوت التصميم العالمية مثل كولينز، بنتاغرام، بورتو روشا، وبيسك أجينسي',
    'footer.whatsapp': 'ابدأ استشارتك الخاصة',
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('vr-lang') as Language;
    if (saved === 'en' || saved === 'ar') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('vr-lang', newLang);
  };

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      document.body.classList.add('ar-mode');
    } else {
      html.removeAttribute('dir');
      document.body.classList.remove('ar-mode');
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
};

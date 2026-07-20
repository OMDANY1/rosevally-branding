export interface ChapterData {
  id: string;
  num: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  theme?: 'light' | 'dark' | 'color';
}

export const CHAPTERS: ChapterData[] = [
  {
    id: "cover",
    num: "01",
    title: "Cover",
    titleAr: "الغلاف",
    subtitle: "Digital Brand Guidelines Identity Book",
    subtitleAr: "كتاب الهوية البصرية الرقمي",
    description: "Welcome to the digital identity book of Valley Rose. A luxury contemporary floral design house. Turn the pages to explore our visual language, layout principles, and brand architecture.",
    descriptionAr: "مرحباً بكم في كتاب الهوية البصرية الرقمي لدار وادي الورد. دار فنية معاصرة لتصميم وتنسيق الزهور النادرة. تصفّح الفصول لاستكشاف لغتنا البصرية، ومبادئ التخطيط، وبنية علامتنا التجارية."
  },
  {
    id: "brand-story",
    num: "02",
    title: "Brand Story",
    titleAr: "قصة العلامة التجارية",
    subtitle: "Cultivating Moments of Pure Emotion",
    subtitleAr: "زراعة لحظات من المشاعر الصافية",
    description: "Valley Rose is not just a florist. It is a design house born out of a desire to elevate floral gifting and spatial styling into a high art form. Rooted in the rich cultural oasis of Qatif, we blend international standards of visual luxury with deep local intelligence. Every arrangement is a narrative, crafted carefully to carry genuine human emotion, quiet respect, and timeless craftsmanship.",
    descriptionAr: "وادي الورد ليس مجرد متجر زهور؛ بل هو دار تصميم نشأت من رغبة في الارتقاء بإهداء الزهور والتنسيق الفراغي إلى مصاف الفنون الجميلة. متجذرين في واحة القطيف الثقافية الغنية، نمزج بين معايير الفخامة البصرية العالمية والذكاء المحلي العميق. كل تنسيق هو قصة، صيغت بعناية لتحمل مشاعر إنسانية صادقة، واحتراماً هادئاً، وحرفية خالدة."
  },
  {
    id: "vision-values",
    num: "03",
    title: "Vision & Values",
    titleAr: "الرؤية والقيم",
    subtitle: "The Pillars of Quiet Luxury",
    subtitleAr: "ركائز الفخامة الهادئة",
    description: "We believe in restraint over extravagance, in compose over clutter. Our vision is to define contemporary Saudi floristry by focusing on: 1. Elegance (calm and refined forms), 2. Emotion (carrying relationships through floral gestures), 3. Craftsmanship (meticulous detailing), and 4. Quiet Luxury (quality of materials, thoughtful composition, and breathing room). We do not shout; we whisper.",
    descriptionAr: "نحن نؤمن بالاعتدال والوقار بدلاً من البهرجة، وبالتكوين المدروس بدلاً من الفوضى. رؤيتنا هي إعادة تعريف تنسيق الزهور السعودي المعاصر من خلال التركيز على: ١. الأناقة (أشكال هادئة وراقية)، ٢. العاطفة (توطيد العلاقات عبر إيماءات الزهور)، ٣. الحرفية (التفاصيل الدقيقة المتقنة)، ٤. الفخامة الهادئة (جودة المواد، التكوين المدروس، ومساحات التنفس). نحن لا نصرخ، بل نهمس."
  },
  {
    id: "logo-story",
    num: "04",
    title: "Logo Story",
    titleAr: "قصة الشعار",
    subtitle: "The Vessel and the Bloom",
    subtitleAr: "الوعاء والتفتّح",
    description: "The Valley Rose master emblem represents a singular, stylized rose bud cradled within a vertical oval frame. The outer capsule symbolizes protection, containment, and luxury gifting. The leaves flare outward, breaking the border to show life, growth, and organic freedom. The custom serif typography reads 'VALLY ROSE' as a deliberate brand asset, carrying a timeless, editorial feeling. Underneath, a delicate 4-pointed star acts as a compass of happiness.",
    descriptionAr: "يمثل شعار وادي الورد الأساسي برعماً فريداً ومبسطاً لوردة تحتضنها كبسولة بيضاوية رأسية. يرمز الإطار الخارجي إلى الحماية والاحتواء وصناديق الهدايا الفاخرة. وتنطلق الأوراق إلى الخارج، لتكسر الحدود معلنةً عن الحياة والنمو والحرية العضوية. يُكتب الاسم بخط سيريف كلاسيكي راقٍ يحمل شعوراً تحريرياً خالداً. وأسفله، نجمة رباعية رقيقة تعمل كبوصلة للسعادة."
  },
  {
    id: "logo-construction",
    num: "05",
    title: "Logo Construction",
    titleAr: "بناء الشعار وهندسته",
    subtitle: "Precise Proportions & Geometry",
    subtitleAr: "النسب الدقيقة والهندسة",
    description: "Our logo is built on a strict geometric grid. The vertical oval capsule follows a 1:1.9 ratio, mirroring classic archways and historical luxury proportions. The rose bud is centered precisely along the vertical axis. The leaf curves are drawn using matching radii, ensuring absolute symmetry and harmony. Never alter, redraw, or distort these ratios. They are locked to maintain the visual balance.",
    descriptionAr: "يُبنى شعارنا على شبكة هندسية صارمة. تتبع الكبسولة البيضاوية الرأسية نسبة ١:١.٩، مما يعكس الأقواس الكلاسيكية ونسب الفخامة التاريخية. يتمركز برعم الوردة بدقة على طول المحور الرأسي. وتُرسم منحنيات الأوراق باستخدام أنصاف أقطار متطابقة، مما يضمن التماثل والانسجام المطلق. لا تقم أبداً بتعديل أو إعادة رسم أو تشويه هذه النسب."
  },
  {
    id: "clear-space",
    num: "06",
    title: "Clear Space",
    titleAr: "المساحة الآمنة للشعار",
    subtitle: "Giving the Mark Room to Breathe",
    subtitleAr: "منح الرمز مساحة للتنفس",
    description: "To maintain the dignity and impact of the master asset, a minimum clear space must be preserved around the logo. This exclusion zone is equal to 'X', where 'X' is defined as the width of the inner rosebud cup. No typography, imagery, page edges, or secondary graphics may enter this clear space. In editorial layouts, generous margins exceeding this minimum are highly recommended.",
    descriptionAr: "للحفاظ على هيبة الشعار الأساسي وتأثيره، يجب الحفاظ على حد أدنى من المساحة الآمنة حوله. تعادل هذه المنطقة العازلة القيمة 'X'، حيث تُعرَّف 'X' بأنها عرض كوب البرعم الداخلي للوردة. لا يُسمح بدخول أي نصوص أو صور أو حواف صفحات أو عناصر رسومية ثانوية ضمن هذا الفراغ."
  },
  {
    id: "minimum-size",
    num: "07",
    title: "Minimum Size",
    titleAr: "الحد الأدنى لحجم الشعار",
    subtitle: "Preserving Legibility Across Mediums",
    subtitleAr: "الحفاظ على الوضوح في كافة الوسائط",
    description: "For maximum legibility, the logo must never be scaled below these established minimum sizes. In digital formats, the emblem must not be displayed smaller than 32px in width. In printed communications, the emblem must not be smaller than 15mm in width. For applications smaller than this, use the simplified primary monogram version without tagline text.",
    descriptionAr: "لضمان أقصى درجات الوضوح، يجب عدم تصغير الشعار أبداً دون الأحجام الدنيا المعتمدة. في التنسيقات الرقمية، يجب ألا يُعرض الرمز بعرض أقل من ٣٢ بكسل. وفي المطبوعات الورقية، يجب ألا يقل عرضه عن ١٥ مم. بالنسبة للتطبيقات الأصغر من ذلك، يُستخدم المونوغرام البسيط بدون نص الشعار اللفظي."
  },
  {
    id: "logo-variations",
    num: "08",
    title: "Logo Variations",
    titleAr: "متغيرات الشعار",
    subtitle: "Cohesive Expression Across Light & Dark",
    subtitleAr: "التعبير المتناسق بين الفاتح والداكن",
    description: "The primary logo application is Mocha Brown (#6B4E42) on Ivory Cream (#F7F1E9). For reversed layouts, use Ivory Cream on Mocha Brown. Monochrome black and white configurations are reserved for packaging stamps, receipt tickets, and newspaper advertising. Never use unapproved colors, patterns, or gradients inside the logo mark.",
    descriptionAr: "التطبيق الأساسي للشعار هو البني الداكن (Mocha Brown - #6B4E42) على العاجي الدافئ (Ivory Cream - #F7F1E9). للتخطيطات المعكوسة، يُستخدم العاجي على البني الداكن. تُخصص التكوينات أحادية اللون (الأسود والأبيض) لأختام التغليف، تذاكر الاستلام، وإعلانات الصحف."
  },
  {
    id: "dynamic-logo",
    num: "09",
    title: "Dynamic Logo System",
    titleAr: "نظام الشعار الديناميكي",
    subtitle: "Adaptability Through Environment",
    subtitleAr: "المرونة والتكيف عبر البيئة",
    description: "The master logo itself NEVER changes. Instead, the surrounding visual language, grid layouts, color palettes, patterns, and supporting graphics adapt to reflect different occasions. This creates a flexible identity that feels responsive and contextual, while maintaining a single core anchor. Explore the tabs below to see how our design system evolves across seasonal, gifting, and corporate applications.",
    descriptionAr: "الشعار الأساسي نفسه لا يتغير أبداً. بدلاً من ذلك، تتكيف اللغة البصرية المحيطة، وتخطيطات الشبكة، ولوحات الألوان، والأنماط، والرسومات الداعمة لتعكس المناسبات المختلفة. يخلق هذا هوية مرنة تبدو متجاوبة وسياقية، مع الحفاظ على مرساة أساسية واحدة."
  },
  {
    id: "color-system",
    num: "10",
    title: "Color System",
    titleAr: "نظام الألوان",
    subtitle: "A Curated Palette of Quiet Luxury",
    subtitleAr: "لوحة ألوان منتقاة للفخامة الهادئة",
    description: "Our color system avoids cheap gold-foiled clichés. Instead, it relies on soft, warm, editorial tones. Ivory Cream serves as our primary canvas, Mocha Brown provides structural legibility, and Dusty Rose and Blush Pink bring modern femininity. Sage Green and Lavender Mist act as cool seasonal counterpoints, while Rose Gold provides a subtle metallic accent. Click on any swatch below to copy its Hex color value.",
    descriptionAr: "يتجنب نظام الألوان لدينا الكليشيهات الذهبية الرخيصة والمبتذلة. بدلاً من ذلك، يعتمد على نغمات ناعمة ودافئة ومناسبة للمجلات الفاخرة. يخدم العاجي الدافئ كخلفية أساسية، ويوفر البني الداكن القراءة الهيكلية، بينما يضفي الوردي المغبر والوردي الخجول أنوثة معاصرة. يعمل الأخضر واللافندر كعناصر موسمية باردة ومتباينة."
  },
  {
    id: "typography",
    num: "11",
    title: "Typography",
    titleAr: "الخطوط ونظام الطباعة",
    subtitle: "The Voice of Modern Craft",
    subtitleAr: "صوت الحرفية المعاصرة",
    description: "We pair Cormorant Garamond, an elegant editorial serif with generous tracking and high contrast, with Inter, a clean geometric sans-serif. Headings are set in Cormorant Garamond Light or Regular with loose letter-spacing to convey calm confidence. Body text uses Inter in Light or Regular weights with a spacious line-height (1.75) to guarantee breathing room and superior digital readability.",
    descriptionAr: "نحن نزاوج بين خط Cormorant Garamond، وهو خط سيريف تحريري أنيق ذو تباعد واسع وتباين عالٍ، وخط Inter، وهو خط سان-سيريف هندسي نقي. تُنسق العناوين بخط Cormorant Garamond بنمط خفيف أو عادي مع تباعد أحرف واسع للتعبير عن الثقة الهادئة. ويستخدم متن النص خط Inter بأوزان خفيفة مع ارتفاع سطر مريح لضمان سهولة القراءة."
  },
  {
    id: "graphic-language",
    num: "12",
    title: "Graphic Language",
    titleAr: "اللغة الرسومية",
    subtitle: "Fine Rules, Grids and Restraint",
    subtitleAr: "الخطوط الدقيقة، الشبكات والاعتدال",
    description: "Our graphic language is defined by the Swiss Grid: perfect vertical and horizontal alignment, ultra-thin divider lines (0.5px to 1px), and massive negative space. No drop shadows, no heavy borders, and no loud decorative graphics. The structure itself is the ornament. Fine rules are used to separate chapters and group information, mimicking premium printed gallery guides and architectural blueprints.",
    descriptionAr: "تُعرَّف لغتنا الرسومية بالشبكة السويسرية: محاذاة رأسية وأفقية مثالية، خطوط فاصلة بالغة الدقة (من ٠.٥ بكسل إلى ١ بكسل)، ومساحات سلبية شاسعة. لا توجد ظلال ساقطة، ولا حدود سميكة، ولا رسومات زخرفية صاخبة. الهيكل نفسه هو الزخرفة. تُستخدم الخطوط الدقيقة للفصل بين الفصول وتجميع المعلومات."
  },
  {
    id: "pattern-system",
    num: "13",
    title: "Pattern System",
    titleAr: "نظام الأنماط",
    subtitle: "Botanical Geometry in Repeat",
    subtitleAr: "الهندسة النباتية المتكررة",
    description: "Derived from the logo's inner rose curves and the vertical symmetry of palm leaves, our patterns are minimal, structural, and light. They are used on tissue paper wrap, envelope liners, and digital backdrops. They must always be printed tonal or in very low contrast (opacity between 3% and 8%) to ensure they never dominate the packaging or distract from the flowers.",
    descriptionAr: "مستوحاة من منحنيات الوردة الداخلية للشعار والتماثل الرأسي لأوراق النخيل، أنماطنا مبسطة وهيكلية وخفيفة. تُستخدم على ورق التغليف الرقيق، وبطانات المغاريف، والخلفيات الرقمية. يجب دائمًا طباعتها بدرجات لونية متقاربة أو بتباين منخفض جدًا (شفافية بين ٣٪ و ٨٪) لضمان عدم سيطرتها على التغليف."
  },
  {
    id: "photography-style",
    num: "14",
    title: "Photography Style",
    titleAr: "أسلوب التصوير",
    subtitle: "Museum Quality Light & Spacing",
    subtitleAr: "إضاءة ومساحات بجودة المتاحف",
    description: "Our photography is emotional, quiet, and tactile. We use single-source natural side lighting, extreme negative space (subject occupying less than 40% of the frame), and soft shadows to create depth. We focus on macro water-drop close-ups, single stems floating on reflective water, and human hands performing craft gestures. Ring lights, studio flashes, and artificial colored overlays are strictly forbidden.",
    descriptionAr: "تصويرنا عاطفي وهادئ وملموس. نستخدم الإضاءة الجانبية الطبيعية ذات المصدر الواحد، ومساحات سلبية شاسعة (يحتل الموضوع أقل من ٤٠٪ من الإطار)، وظلالاً ناعمة لخلق العمق. نركز على اللقطات القريبة لقطرات الماء الماكرو، والسيقان المفردة الطافية على المياه العاكسة، والأيدي البشرية أثناء العمل الحرفي."
  },
  {
    id: "iconography",
    num: "15",
    title: "Iconography",
    titleAr: "الأيقونات",
    subtitle: "Fine Line Custom Vector Assets",
    subtitleAr: "أيقونات متجهة ذات خطوط دقيقة ومخصصة",
    description: "Icons in the Valley Rose system are drawn with a 1px stroke, open corners, and clean geometric forms matching the graphic language. They act as quiet functional guides rather than decorative stickers. Their stroke color matches the body text (Mocha Brown), and they scale down gracefully to 16px. Never fill the icons; they must remain outline-only to preserve their light, premium weight.",
    descriptionAr: "تُرسم الأيقونات في نظام وادي الورد بخط سمكه ١ بكسل، وزوايا مفتوحة، وأشكال هندسية نظيفة تطابق لغتنا الرسومية. وهي تعمل كأدلة وظيفية هادئة بدلاً من الملصقات الزخرفية. يطابق لون خطها متن النص (Mocha Brown)، وتصغر بأناقة إلى ١٦ بكسل. لا تملأ الأيقونات أبداً؛ يجب أن تظل خطية فقط."
  },
  {
    id: "packaging",
    num: "16",
    title: "Packaging",
    titleAr: "التعبئة والتغليف",
    subtitle: "The Gift Box as a Keepsake",
    subtitleAr: "صندوق الهدايا كتحفة تذكارية",
    description: "Our packaging is an unboxing ritual. The signature gift box is constructed from heavy-weight, matte-finished Blush Pink cardstock with a blind-debossed logo mark. Inside, flowers are wrapped in custom ivory tissue paper sealed with a hand-pressed rose-gold wax stamp. The box is secured with a woven cotton ribbon. It is designed to be kept and reused as a premium keepsake organizer.",
    descriptionAr: "تغليفنا هو طقس لفتح الهدايا. يُصنع صندوق الهدايا المميز من ورق مقوى سميك بلون وردي خجول مطفأ وبشعار محفور غائر. في الداخل، تُلف الزهور بورق مناديل عاجي مخصص ومختوم بختم شمعي من الذهب الوردي يُكبس يدوياً. ويُؤمن الصندوق بشريط قطني منسوج. لقد صُمم ليُحتفظ به ويُعاد استخدامه."
  },
  {
    id: "floral-wrapping",
    num: "17",
    title: "Floral Wrapping",
    titleAr: "تغليف باقات الزهور",
    subtitle: "Tactile Papers & Seasonal Details",
    subtitleAr: "أوراق ملموسة وتفاصيل موسمية",
    description: "For loose bouquets, we utilize a three-layer wrapping system: a translucent vellum inner sheet to protect petals, a mid-wrap of textured unbleached paper in Warm Beige, and a tied woven linen ribbon. A single dried botanical branch is tucked into the knot. We never use glossy plastics, loud cellophane, or pre-made synthetic bow knots.",
    descriptionAr: "بالنسبة للباقات المفتوحة، نستخدم نظام تغليف ثلاثي الطبقات: ورقة داخلية من الفيلوم الشفاف لحماية البتلات، ولفافة متوسطة من الورق غير المبيض ذي الملمس بلون بيج دافئ، وشريط من الكتان المنسوج والمربوط يدوياً. يتم دمج غصن نباتي مجفف واحد في العقدة. لا نستخدم البلاستيك اللامع أو السلوفان الصاخب."
  },
  {
    id: "wedding-applications",
    num: "18",
    title: "Wedding Applications",
    titleAr: "تطبيقات حفلات الزفاف",
    subtitle: "Bespoke Ceremony Collaterals",
    subtitleAr: "مطبوعات الأعراس المخصصة",
    description: "Wedding styling is our premier service. The visual identity extends to bespoke ceremony invitation folders wrapped in silk thread, blind-embossed dinner menus on cotton paper, and elegant seating cards. The colors coordinate with the wedding's theme but stay within the approved secondary palette, ensuring that the floral design and stationary feel like a single cohesive editorial environment.",
    descriptionAr: "تنسيق حفلات الزفاف هو خدمتنا الأولى. تمتد الهوية البصرية لتشمل مجلدات دعوة الزفاف المخصصة والمحاطة بخيوط الحرير، وقوائم العشاء المحفورة على ورق قطني، وبطاقات جلوس أنيقة. وتتناسق الألوان مع طابع حفل الزفاف ولكنها تظل ضمن لوحة الألوان الثانوية المعتمدة."
  },
  {
    id: "stationery",
    num: "19",
    title: "Stationery",
    titleAr: "القرطاسية والمراسلات",
    subtitle: "Tactile Corporate Correspondence",
    subtitleAr: "المراسلات الرسمية والملموسة",
    description: "Our physical correspondence is a tactile experience. Business cards are printed on double-thick 600gsm cotton paper with Mocha Brown letterpress text and painted rose-gold edges. Letterheads use 120gsm warm white laid paper with a subtle watermark. Envelopes feature a custom pattern liner and are sealed with the brand's signature wax stamp.",
    descriptionAr: "مراسلاتنا المادية هي تجربة ملموسة. تُطبع بطاقات العمل على ورق قطني مزدوج السماكة بوزن ٦٠٠ جرام مع نص بني داكن وحواف مطلية بالذهب الوردي. وتستخدم الأوراق الرسمية ورقاً عاجياً دافئاً بوزن ١٢٠ جراماً مع علامة مائية رقيقة. وتتميز المغاريف ببطانة ذات نمط مخصص وتُغلق بختم شمعي."
  },
  {
    id: "digital-experience",
    num: "20",
    title: "Digital Experience",
    titleAr: "التجربة الرقمية",
    subtitle: "Quiet Interfaces & Editorial Layouts",
    subtitleAr: "واجهات هادئة وتخطيطات تحريرية",
    description: "The digital experience replicates opening a physical art catalog. We feature full-screen immersive photography, asymmetrical layouts, large typography with high contrast, and smooth transitions. The background is always solid Ivory Cream (#F7F1E9). Interactive elements use micro-animations like gentle fades and thin border reveals, avoiding sudden changes or flashing components.",
    descriptionAr: "تحاكي التجربة الرقمية فتح كتالوج فني مادي. نحن نتميز بالتصوير الغامر بملء الشاشة، والتخطيطات غير المتماثلة، والخطوط الكبيرة ذات التباين العالي، والانتقالات السلسة. الخلفية دائماً هي العاجي الدافئ الصلب. وتستخدم العناصر التفاعلية حركات دقيقة مثل التلاشي اللطيف والحدود الرقيقة."
  },
  {
    id: "motion-principles",
    num: "21",
    title: "Motion Principles",
    titleAr: "مبادئ الحركة والانتقالات",
    subtitle: "Natural Easing & Ethereal Fades",
    subtitleAr: "تخفيف طبيعي وتلاشٍ أثيري",
    description: "Motion in the Valley Rose digital environment is slow and deliberate, mimicking the gentle movement of water or wind-blown petals. We utilize a custom cubic-bezier easing curve [0.16, 1, 0.3, 1] for all transitions. Content reveals use opacity fades and soft scale expansions (from 98% to 100%), ensuring animations enhance the editorial rhythm rather than create distraction.",
    descriptionAr: "الحركة في بيئة وادي الورد الرقمية بطيئة ومدروسة، تحاكي حركة الماء اللطيفة أو بتلات الورد التي تهب عليها الرياح. نحن نستخدم منحنى تسريع مخصص لجميع الانتقالات. وتستخدم كشوف المحتوى تلاشي الشفافية والتمدد الناعم للأبعاد للتأكيد على الإيقاع التحريري."
  },
  {
    id: "social-media",
    num: "22",
    title: "Social Media",
    titleAr: "وسائل التواصل الاجتماعي",
    subtitle: "A Curated Editorial Exhibition",
    subtitleAr: "معرض تحريري منسق بعناية",
    description: "Our social feeds are treated as a digital exhibition gallery. Images are posted in grids that prioritize color harmony and negative space. Captions are minimal and poetic, written in lowercase English and formal Arabic. We avoid hard-sale pricing overlays, stickers, and decorative frames. Stories use clean layout templates with thin guidelines and a single centralized font.",
    descriptionAr: "تُعامل حساباتنا الاجتماعية كمعرض رقمي. تُنشر الصور في شبكات تعطي الأولوية لانسجام الألوان والمساحات السلبية. التعليقات موجزة وشاعرية، وتُكتب باللغة الإنجليزية واللغة العربية الفصحى. نتجنب ملصقات الأسعار المباشرة والإطارات الزخرفية الصاخبة."
  },
  {
    id: "brand-applications",
    num: "23",
    title: "Brand Applications",
    titleAr: "تطبيقات العلامة التجارية",
    subtitle: "Spatial Experience & Uniform Details",
    subtitleAr: "التجربة الفراغية وتفاصيل الزي الموحد",
    description: "The Valley Rose identity extends into spatial design and employee details. Retail boutiques feature raw lime-washed plaster walls in Soft Ivory, minimal stone countertops, and hidden lighting. Florists wear structured cotton aprons in Mocha Brown with a small brass logo pin. Delivery vans are painted in solid Ivory Cream with a minimal logo printed on the front door panel.",
    descriptionAr: "تمتد هوية وادي الورد إلى التصميم الفراغي وتفاصيل الموظفين. وتتميز المتاجر بجدران من الجبس المغسول باللون العاجي الناعم، وأسطح حجرية بسيطة، وإضاءة مخفية. ويرتدي منسقو الزهور مآزر قطنية بنية مع دبوس شعار نحاسي صغير. وتُطلى سيارات التوصيل باللون العاجي."
  },
  {
    id: "thank-you",
    num: "24",
    title: "Thank You",
    titleAr: "شكراً لكم",
    subtitle: "Where Happiness Flows",
    subtitleAr: "حيث تتدفق السعادة",
    description: "Thank you for exploring the Valley Rose brand guidelines. Let us preserve these standards to ensure our visual identity remains timeless, luxurious, and emotional across every touchpoint. For consultations, assets, and design collaborations, contact the Valley Rose Brand Committee.",
    descriptionAr: "شكراً لكم على استكشاف الدليل الإرشادي لهوية وادي الورد. لنحافظ على هذه المعايير لضمان بقاء هويتنا البصرية خالدة وفاخرة وعاطفية عبر كل نقطة اتصال. للاستشارات والأصول والتعاون التصميمي، يرجى الاتصال بلجنة العلامة التجارية لوادي الورد."
  }
];

export interface DynamicSystemItem {
  id: string;
  name: string;
  nameAr: string;
  color: string;
  secondaryColor: string;
  textColor: string;
  desc: string;
  descAr: string;
  imageryDesc: string;
  imageryDescAr: string;
  imagePath: string;
}

export const DYNAMIC_SYSTEM: DynamicSystemItem[] = [
  {
    id: "wedding",
    name: "Wedding",
    nameAr: "الأعراس والزفاف",
    color: "#E9C5C6", // Blush Pink
    secondaryColor: "#F7F1E9",
    textColor: "#6B4E42",
    desc: "A soft, romantic, and expansive visual system. The grid layout becomes lighter and wider, reflecting the emotional magnitude of the occasion. Accents of Champagne Gold and Pearl Beige highlight the stationery and signage, while the floral styling focuses on cascading white roses, gypsophila, and pale greenery.",
    descAr: "نظام بصري ناعم ورومانسي وواسع. يصبح تخطيط الشبكة أخف وأوسع، مما يعكس الأهمية العاطفية للمناسبة. تبرز لمسات من ذهب الشمبانيا والبيج اللؤلؤي على القرطاسية واللافتات، بينما يركز تنسيق الزهور على الورود البيضاء المتتالية والجبسوفيلا.",
    imageryDesc: "A premium wedding envelope layout with blind embossing and delicate dried sprigs.",
    imageryDescAr: "تخطيط مغلف زفاف فاخر بنقش غائر بارد وأغصان مجففة رقيقة.",
    imagePath: "/images/wedding.png"
  },
  {
    id: "luxury-bouquet",
    name: "Luxury Bouquet",
    nameAr: "الباقات الفاخرة",
    color: "#D9B4B7", // Dusty Rose
    secondaryColor: "#E8DCCB",
    textColor: "#6B4E42",
    desc: "Focuses on high-contrast editorial photography and extreme close-ups of single stems. The surrounding packaging uses our signature Powder Pink gift boxes and tissue wraps. Layouts emphasize white space, allowing the unique form of each arrangement to stand out as a work of art.",
    descAr: "يركز على التصوير التحريري عالي التباين واللقطات القريبة للغاية للسيقان المفردة. يستخدم التغليف المحيط صناديق الهدايا المميزة بلون وردي خجول ولفائف ورق مناديل. تؤكد التخطيطات على المساحات السلبية الكبيرة لتبدو كقطع فنية.",
    imageryDesc: "Bespoke rose arrangement highlighting delicate petals and clean layout spacing.",
    imageryDescAr: "تنسيق مخصص من الورود يسلط الضوء على البتلات الرقيقة وتباعد التخطيط النظيف.",
    imagePath: "/images/editorial-arrangement.png"
  },
  {
    id: "gift-box",
    name: "Gift Box",
    nameAr: "صناديق الهدايا",
    color: "#E8DCCB", // Warm Beige
    secondaryColor: "#F7F1E9",
    textColor: "#6B4E42",
    desc: "A tactile and structured presentation. We emphasize box geometry, letterpressed message cards, and hand-pressed wax seals. The visual tone is grounded and craft-centered, assuring that the box itself is perceived as a valuable keepsake that will be kept in the recipient's home.",
    descAr: "عرض ملموس وهيكلي. نؤكد على هندسة الصناديق وبطاقات الرسائل المطبوعة بآلات الكبس اليدوية والأختام الشمعية. النبرة البصرية راسخة وتتمحور حول الحرفية، مما يضمن إدراك الصندوق نفسه كتحفة تذكارية قيمة.",
    imageryDesc: "Premium textured rigid gift box embossed with the Valley Rose emblem.",
    imageryDescAr: "صندوق هدايا صلب ذو ملمس فاخر منقوش بشعار وادي الورد.",
    imagePath: "/images/packaging.png"
  },
  {
    id: "corporate",
    name: "Corporate Gifting",
    nameAr: "الهدايا المؤسسية",
    color: "#B8A89A", // Taupe
    secondaryColor: "#FAF7F3",
    textColor: "#6B4E42",
    desc: "Highly structured, professional, and sophisticated. The color palette centers on Taupe, Mocha Brown, and Pearl Beige. Layouts are clean and aligned with architectural precision, designed to fit seamlessly into corporate environments, boardrooms, and executive VIP suites.",
    descAr: "منظم للغاية ومهني وراقٍ. تركز لوحة الألوان على اللون الرمادي الداكن (Taupe)، والبني الداكن، والبيج اللؤلؤي. التخطيطات نظيفة ومتوافقة بدقة مع الهندسة المعمارية، لتناسب بيئات الشركات الفاخرة وأجنحة كبار الشخصيات التنفيذية.",
    imageryDesc: "Minimal corporate layout showing clean structural lines and elegant stationery.",
    imageryDescAr: "تخطيط مؤسسي مبسط يظهر خطوطًا هيكلية نظيفة وقرطاسية أنيقة.",
    imagePath: "/images/qatif-oasis.png"
  },
  {
    id: "valentine",
    name: "Valentine Collection",
    nameAr: "مجموعة عيد الحب",
    color: "#C9A8B1", // Soft Mauve
    secondaryColor: "#F7F1E9",
    textColor: "#6B4E42",
    desc: "Poetic, intimate, and deeply emotional. The color palette shifts toward Soft Mauve, Dusty Rose, and Blush Pink. Photography focuses on macro water-drop details on petals and soft-focus romantic compositions. Written copy becomes more poetic and conversational.",
    descAr: "شاعري، حميم، وعاطفي للغاية. تتحول لوحة الألوان نحو الموف الناعم، والوردي المغبر، والوردي الخجول. يركز التصوير على تفاصيل قطرات الماء الماكرو على البتلات وتكوينات رومانسية ناعمة التركيز.",
    imageryDesc: "Macro photography of dew drops resting on soft rose petals.",
    imageryDescAr: "تصوير ماكرو لقطرات الندى وهي تستقر على بتلات الورد الناعمة.",
    imagePath: "/images/rose-macro.png"
  },
  {
    id: "mothers-day",
    name: "Mother's Day",
    nameAr: "مجموعة يوم الأم",
    color: "#D8D2E6", // Lavender Mist
    secondaryColor: "#F7F1E9",
    textColor: "#6B4E42",
    desc: "Gentle, warm, and comforting. The visual system incorporates Lavender Mist and Blush Pink, creating a sense of softness and deep appreciation. The typography is light, and arrangements feature mixed delicate blooms, pastel tones, and woven linen ribbons.",
    descAr: "لطيف، دافئ، ومريح. يدمج النظام البصري لافندر ميست (Lavender Mist) والوردي الخجول، مما يخلق شعوراً بالنعومة والتقدير العميق. الخط خفيف، وتتميز التنسيقات بزهور متنوعة ورقيقة.",
    imageryDesc: "An elegant, soft pastel floral arrangement in natural window light.",
    imageryDescAr: "تنسيق زهور ناعم بألوان الباستيل الأنيقة في ضوء النافذة الطبيعي.",
    imagePath: "/images/arrangements.png"
  },
  {
    id: "eid-collection",
    name: "Eid Collection",
    nameAr: "مجموعة العيد",
    color: "#E6C6A1", // Champagne Gold
    secondaryColor: "#B6C8B1", // Sage Green
    textColor: "#6B4E42",
    desc: "Festive, luxurious, and culturally resonant. Accents of Champagne Gold and Sage Green are introduced to celebrate Eid abundance. The layout incorporates geometric star lattice grids in the background, and packaging includes custom gold-stamped message cards and gift tags.",
    descAr: "احتفالي وفاخر وذو رنين ثقافي. يتم تقديم لمسات من الذهب الشمبانيا والأخضر المريمي للاحتفاء بوفرة العيد. يدمج التخطيط شبكات هندسية نجمية في الخلفية، وبطاقات ذهبية.",
    imageryDesc: "Bespoke gift tag with gold stamping and traditional geometric accents.",
    imageryDescAr: "بطاقة هدايا مخصصة بختم ذهبي ولمسات هندسية تقليدية.",
    imagePath: "/images/event-decor.png"
  },
  {
    id: "seasonal",
    name: "Seasonal Collections",
    nameAr: "المجموعات الموسمية",
    color: "#B6C8B1", // Sage Green
    secondaryColor: "#F7F1E9",
    textColor: "#6B4E42",
    desc: "Adapts to the shifting cycles of nature. The color system shifts from warm sands in summer to botanical sage greens in spring and soft mauves in autumn. Layouts adjust to showcase seasonal floristry, emphasizing the specific textures, leaves, and colors that reflect the current season.",
    descAr: "يتكيف مع دورات الطبيعة المتغيرة. يتحول نظام الألوان من الرمال الدافئة في الصيف إلى الأخضر المريمي النباتي في الربيع والموف الناعم في الخريف. تتكيف التخطيطات لتعرض زهور الموسم.",
    imageryDesc: "A seasonal arrangement featuring rustic autumn textures and foliage.",
    imageryDescAr: "تنسيق موسمي يتميز بأنسجة وأوراق الخريف الريفية.",
    imagePath: "/images/closing-hero.png"
  }
];

export const COLOR_SWATCHES = {
  primary: [
    { name: "Dusty Rose", hex: "#D9B4B7", desc: "A muted, sophisticated rose pink. Brings warmth and modern femininity to packaging and stationery.", descAr: "وردي مغبر مطفأ وراقٍ. يضفي الدفء والأنوثة المعاصرة على التعبئة والتغليف والقرطاسية." },
    { name: "Blush Pink", hex: "#E9C5C6", desc: "A lighter, delicate pink mirroring soft rose petals. Used for premium box surfaces and ribbon highlights.", descAr: "وردي خجول فاتح ورقيق يحاكي بتلات الورد الناعمة. يُستخدم لأسطح الصناديق الفاخرة وتفاصيل الأشرطة." },
    { name: "Ivory Cream", hex: "#F7F1E9", desc: "Our primary canvas color. A warm, clean off-white that creates breathing room and editorial contrast.", descAr: "لون الخلفية الأساسي لدينا. لون عاجي دافئ ونظيف يخلق مساحة للتنفس وتبايناً تحريرياً راقياً." },
    { name: "Warm Beige", hex: "#E8DCCB", desc: "A sandy, tactile neutral. Reminiscent of unbleached linen and textured papers, enhancing material feel.", descAr: "بيج رملي ملموس ومحايد. يذكرنا بالكتان غير المبيض والأوراق ذات الملمس البارز، مما يعزز ملمس المواد." },
    { name: "Taupe", hex: "#B8A89A", desc: "A balanced warm grey-brown. Provides elegant structural grids, secondary labels, and border lines.", descAr: "رمادي-بني دافئ ومتوازن. يوفر شبكات هيكلية أنيقة، وملصقات ثانوية، وخطوط حدودية." },
    { name: "Mocha Brown", hex: "#6B4E42", desc: "Our primary brand text color. A rich, deep organic brown that replaces harsh blacks for softer legibility.", descAr: "لون نص العلامة التجارية الأساسي. بني عضوي عميق يحل محل اللون الأسود الحاد لقراءة أكثر نعومة وراحة." }
  ],
  secondary: [
    { name: "Sage Green", hex: "#B6C8B1", desc: "A muted botanical green reflecting garden leaves. Used for seasonal promotions and foliage layouts.", descAr: "أخضر عشبي مطفأ يعكس أوراق الحدائق. يُستخدم للعروض الموسمية وتخطيطات الأوراق النباتية." },
    { name: "Stone Blue", hex: "#BFC8D6", desc: "A cool coastal grey-blue. Recalls the Gulf waters of Qatif at dawn, adding quiet tranquility.", descAr: "أزرق رمادي ساحلي بارد. يستحضر مياه الخليج بالقطيف عند الفجر، مما يضيف طمأنينة هادئة." },
    { name: "Lavender Mist", hex: "#D8D2E6", desc: "An ethereal pastel purple. Introduced for Mother's Day and spring collections to express care.", descAr: "بنفسجي باستيل أثيري ورقيق. تم تقديمه لمجموعات يوم الأم والربيع للتعبير عن الرعاية واللطف." },
    { name: "Soft Mauve", hex: "#C9A8B1", desc: "A dustier, deeper pink-purple. Adds intimacy and editorial weight to romantic applications.", descAr: "موف ناعم داكن ومغبر. يضيف الحميمية والعمق التحريري للتطبيقات الرومانسية الفاخرة." }
  ],
  metallic: [
    { name: "Rose Gold", hex: "#D9A28C", desc: "Our signature metallic accent. Appears as subtle hot-stamping, wax seals, or painted card edges.", descAr: "لمستنا المعدنية المميزة. يظهر كختم حراري دقيق، أو أختام شمعية، أو حواف بطاقات ملونة." },
    { name: "Champagne Gold", hex: "#E6C6A1", desc: "A soft, pale gold with low reflectivity. Used sparingly on wedding signage and premium tissue prints.", descAr: "ذهبي ناعم وباهت ذو انعكاس منخفض. يُستخدم بحذر على لافتات الزفاف ومطبوعات المناديل الفاخرة." },
    { name: "Pearl Beige", hex: "#F2E9DE", desc: "A luminous, pearl-like beige with a faint satin sheen, representing coastal shell geometry.", descAr: "بيج مضيء يشبه اللؤلؤ ذو لمعان ساتان خفيف، يمثل هندسة الأصداف الساحلية." }
  ]
};

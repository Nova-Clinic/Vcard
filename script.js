const CONFIG = {
  // اطلاعات اصلی
  clinicName: "کلینیک نُــوا",
  pageTitle: "کلینیک لاغری و زیبایی نُــــوا", // اگر خالی باشد، عنُــوان از clinicName ساخته می‌شود.
  shortDescription: "کلینیک نُــوا فضایی آرام و حرفه‌ای برای مراقبت از سلامت شماست؛ جایی که مشاوره دقیق، توجه به جزئیات و همراهی در تمام مسیر درمان در اولویت قرار دارد.",
  doctorName: "فاطمه بهرسی",
  doctorSpecialty: "کارشناس ارشد تغذیه و رژیم درمانی ",

  // راه‌های تماس؛ شماره‌ها را با ارقام انگلیسی وارد کنید.
  mobile: "09173535828",
  mobileTel: "09173535828", 
  office: "07733122234",
  officeTel: "07733122234", 
  // آدرس و نقشه
  address: "گناوه، روبرو بهداری ساختمان پزشکان نیکان مهر طبقه چهارم واحد 41 کلینیک لاغری نُـــوا",
  mapUrl: "https://maps.app.goo.gl/Pg21bs6jyonrSWAZA",
  directionsText: "[آدرس و نشانه‌های مسیر را وارد کنید.]",
  // ساعت کاری
  hoursSummary: "شنبه تا پنج شنبه ",
  hours: [
    ["شنبه تا چهارشنبه ", "15:30 الی 20"],
    ["دوشنبه و پنج شنبه ", "10:30 الی 13:30"],
    ["جمعه", "تعطیل"]
  ],
  // اطلاعات مراجعه
  preparationText: "",

  bookingUrl: "https://doctoreto.com/doctor/qyWWgY",
  instagramUrl: "https://www.instagram.com/dt.behrasi/?utm_source=qr&r=nametag",
  whatsappUrl: "",
  telegramUrl: "",
  baleUrl: "https://ble.ir/NovaClinicSlimingBeauty",
  websiteUrl: "",
  otherSocialUrl: "",

  bankCardA: "",
  bankShebaA: "",
  bankCardB: "",
  bankShebaB: "",

  // ========================================================
  // برند و متن‌های عمومی
  // ========================================================
  brand: {
    name: "نُــــوا",            // نام فارسی کنار لوگو و عنوان بخش اول
    latin: "Nova Clinic",      // نام لاتین زیر لوگو
    logo: "./assets/images/nova-logo.png"  // مسیر فایل لوگو
  },
  site: {
    tagline: "سلامت، آگاهی و مراقبت در کنار شما"  // نوار بالای سایت و پایین فوتر
  },

  // ========================================================
  // بخش اول صفحه (Hero)
  // ========================================================
  hero: {
    badge: "سلامت امروز، کیفیت زندگی فردا",
    subtitle: "آرامش، دقت و همراهی در مسیر سلامت",
    image: "./assets/images/clinic-hero.png",
    imageAlt: "فضای داخلی کلینیک نُــوا",
    imageCaption: "فضای کلینیک",
    features: ["مشاوره تخصصی", "محیط آرام و بهداشتی", "همراهی پس از درمان"],
    panelTitle: "نگاهی به کلینیک",
    stats: [
      { value: "[عدد]", label: "سال تجربه" },
      { value: "[عدد]", label: "مراجع" },
      { value: "[عدد]", label: "خدمت" }
    ],
    panelText: "مشاوره تخصصی، محیط آرام و پیگیری در تمام مسیر درمان.",
    floatTitle: "مراقبت تخصصی",
    floatText: "همراه شما در مسیر سلامت"
  },

  // ========================================================
  // نوار چهار ویژگی زیر بخش اول  (icon: نام آیکون، فهرستش در پایین فایل است)
  // ========================================================
  // آیکون‌های موجود: heart-handshake, microscope, shield-check, sparkles, stethoscope, heart-pulse,
  // calendar-check, activity, book-open, apple, moon, leaf, droplet
  trust: [
    { icon: "heart-handshake", title: "مشاوره تخصصی", text: "بر اساس شرایط شما" },
    { icon: "microscope", title: "دانش روز", text: "با رویکرد علمی" },
    { icon: "shield-check", title: "محیط بهداشتی", text: "برای تجربه بهتر درمان" },
    { icon: "sparkles", title: "توجه به جزئیات", text: "برای نیازهای متفاوت" }
  ],

  // ========================================================
  // بخش خدمات؛ هر خدمت: عنوان، توضیح کوتاه و متن پنجره «جزئیات خدمت»
  // ========================================================
  servicesSection: {
    eyebrow: "خدمات ما",
    title: "خدمات کلینیک نُــوا",
    text: "ارائه خدمات تخصصی با توجه به نیازها و اهداف شما"
  },
  // details: فهرستی از بلوک‌ها؛ هر بلوک یکی از  text (پاراگراف) / heading (تیتر) / list (فهرست) / note (یادداشت)
  services: [
    {
      icon: "stethoscope",
      title: "مشاوره و ارزیابی اولیه",
      text: "شنیدن دقیق شرایط شما و ترسیم مسیر مراقبت.",
      details: [
        {
          text: "در نخستین جلسه، درباره شرایط فعلی، سابقه و اهداف شما گفت‌وگو می‌شود تا مسیر مراقبت به‌صورت روشن و واقع‌بینانه مشخص شود. این جلسه فرصتی است برای پرسیدن سؤال‌ها و آشنایی با روند کار کلینیک."
        },
        {
          list: [
            "گفت‌وگوی تفصیلی درباره شرایط و سابقه",
            "بررسی سوابق و مدارک موجود",
            "تعیین اولویت‌ها و گام‌های بعدی"
          ]
        }
      ]
    },
    {
      icon: "heart-pulse",
      title: "برنامه مراقبت اختصاصی",
      text: "برنامه‌ای متناسب با شرایط هر فرد.",
      details: [
        {
          text: "پس از ارزیابی، یک برنامه مراقبت با گام‌های مشخص تنظیم می‌شود؛ برنامه‌ای که با زندگی روزمره شما هماهنگ باشد و بتوانید آن را پیگیری کنید."
        },
        {
          list: [
            "تعیین اهداف کوتاه‌مدت و بلندمدت",
            "هماهنگی با سبک زندگی و برنامه روزانه",
            "بازبینی دوره‌ای برنامه"
          ]
        }
      ]
    },
    {
      icon: "calendar-check",
      title: "پیگیری و کنترل دوره‌ای",
      text: "همراهی در تمام مسیر، نه فقط یک جلسه.",
      details: [
        {
          text: "پیگیری منظم بخش مهمی از مراقبت است. در جلسات بعدی، روند پیشرفت بررسی و در صورت نیاز برنامه تنظیم می‌شود تا نتیجه پایدار بماند."
        },
        {
          list: [
            "جلسات پیگیری طبق برنامه",
            "ثبت تغییرات و بررسی روند",
            "هماهنگی برای مراجعه بعدی"
          ]
        }
      ]
    },
    {
      icon: "activity",
      title: "بررسی‌های تشخیصی",
      text: "دقت بیشتر در تصمیم‌گیری‌های درمانی.",
      details: [
        {
          text: "در صورت نیاز، بررسی‌های تشخیصی برای روشن‌تر شدن وضعیت انجام می‌شود. هر بررسی تنها زمانی پیشنهاد می‌شود که به تصمیم‌گیری بهتر کمک کند."
        },
        {
          list: [
            "ارزیابی ضرورت هر بررسی",
            "توضیح مراحل و آماده‌سازی",
            "مرور نتیجه در کنار سوابق"
          ]
        }
      ]
    },
    {
      icon: "book-open",
      title: "آموزش و پیشگیری",
      text: "دانش لازم برای تصمیم‌های بهتر.",
      details: [
        {
          text: "آگاهی، بخشی از درمان است. در کلینیک نُــوا توضیح داده می‌شود که چه عادت‌هایی به حفظ سلامت کمک می‌کند و چه نشانه‌هایی نیازمند پیگیری هستند."
        },
        {
          list: [
            "توضیح ساده و روشن",
            "پاسخ به پرسش‌های رایج",
            "پیشنهاد گام‌های عملی روزمره"
          ]
        }
      ]
    }
  ],

  // ========================================================
  // بخش پزشک  (اسم و تخصص بالاتر در doctorName و doctorSpecialty هستند)
  // ========================================================
  doctor: {
    eyebrow: "آشنایی با پزشک",
    image: "",
    bio: "[معرفی کوتاه پزشک، رویکرد درمانی و حوزه‌های فعالیت را اینجا وارد کنید.]",
    credentials: [
      "[مدرک یا سابقه حرفه‌ای اول]",
      "[مدرک یا سابقه حرفه‌ای دوم]",
      "[حوزه تخصصی یا دوره مرتبط]"
    ],
    stats: [
      { value: "[عدد]", label: "سال تجربه" },
      { value: "[عدد]", label: "مراجع" },
      { value: "[عدد]", label: "خدمت" }
    ],
    about: [
      "در کلینیک نُــوا، هر مراجعه با یک گفت‌وگوی دقیق آغاز می‌شود؛ برنامه مراقبت بر اساس شرایط، سابقه و اهداف هر فرد تنظیم می‌شود و در جلسات بعدی مورد بازبینی قرار می‌گیرد.",
      "تلاش ما این است که تصمیم‌های درمانی با توضیح روشن، زمان کافی و احترام به انتخاب مراجع گرفته شود."
    ],
    career: [
      "[عنُــوان مدرک یا دوره تخصصی] — [سال]، [دانشگاه یا مرکز آموزشی]",
      "[عنُــوان سابقه حرفه‌ای] — [سال]، [بیمارستان یا کلینیک]",
      "[عضویت یا گواهی] — [سال]، [انجمن یا مرجع صدور]"
    ]
  },

  // ========================================================
  // بنر آبی «سلامتی، حق شماست»
  // ========================================================
  cta: {
    title: "سلامتی، حق شماست.",
    text: "برای هماهنگی مراجعه یا مشاوره درباره خدمات کلینیک، در ساعات کاری با ما تماس بگیرید."
  },

  // ========================================================
  // گالری؛ مسیر عکس‌ها را در image بنویسید (خالی = کادر آبی ساده)
  // ========================================================
  gallerySection: { eyebrow: "فضای کلینیک", title: "گالری تصاویر", text: "نگاهی به محیط و خدمات کلینیک" },
  gallery: [
    { image: "", caption: "اتاق مشاوره" },
    { image: "", caption: "فضای انتظار" },
    { image: "", caption: "تجهیزات" },
    { image: "", caption: "فضای کلینیک" }
  ],

  // ========================================================
  // مقالات؛ slug بخشی از نشانی مقاله است (فقط حروف انگلیسی و خط تیره)
  // ========================================================
  articlesSection: { eyebrow: "دانش و آگاهی", title: "مقالات و آموزش‌ها", text: "مطالب آموزشی کلینیک" },
  articles: [
    {
      slug: "healthy-nutrition",
      icon: "apple",
      category: "تغذیه",
      date: "[تاریخ انتشار]",
      title: "تغذیه سالم؛ پایه‌ای برای انرژی روزانه",
      excerpt: "آنچه می‌خوریم بر انرژی، تمرکز و کیفیت خواب اثر می‌گذارد. در این مطلب اصول ساده‌ای را مرور می‌کنیم که می‌توانند نقطه شروع خوبی باشند.",
      readTime: "۴ دقیقه مطالعه",
      content: [
        { heading: "شروع از الگوی غذایی، نه از رژیم‌های سخت" },
        {
          text: "بسیاری از تلاش‌ها برای بهتر شدن تغذیه با محدودیت‌های سخت آغاز می‌شود و به همین دلیل دوام نمی‌آورد. تجربه نشان می‌دهد تغییرهای کوچک اما پایدار، نتیجه بهتری دارند."
        },
        {
          text: "به‌جای حذف کامل یک گروه غذایی، می‌توان از افزودن گزینه‌های مفید شروع کرد: سبزیجات بیشتر در وعده‌ها، غلات کامل و منابع پروتئینی متنوع."
        },
        { heading: "سه اصل ساده برای وعده‌های روزانه" },
        {
          text: "وعده‌های منظم و متعادل، از پرخوری یا بی‌حالی میان روز جلوگیری می‌کند. ترکیب سه عنصر در هر وعده کمک‌کننده است:"
        },
        {
          list: [
            "منبع پروتئین برای سیری طولانی‌تر",
            "سبزیجات و میوه برای فیبر و ریزمغذی‌ها",
            "کربوهیدرات کامل برای انرژی پایدار"
          ]
        },
        { heading: "آب، خواب و تحرک؛ سه همراه همیشگی" },
        {
          text: "تغذیه در خلأ عمل نمی‌کند. نوشیدن آب کافی، خواب منظم و فعالیت بدنی روزانه، اثر تغییرهای غذایی را چند برابر می‌کند."
        },
        { heading: "چه زمانی به مشاوره تخصصی نیاز داریم؟" },
        {
          text: "اگر بیماری زمینه‌ای دارید، داروی خاصی مصرف می‌کنید یا روند تغییر وزن و اشتها بی‌دلیل تغییر کرده است، بهتر است پیش از هر تغییری با پزشک مشورت کنید. برای هماهنگی می‌توانید با کلینیک تماس بگیرید."
        },
        {
          note: "این مطلب جنبه آموزشی دارد و جایگزین مشاوره، تشخیص یا درمان پزشکی نیست."
        }
      ]
    },
    {
      slug: "quality-sleep",
      icon: "moon",
      category: "سبک زندگی",
      date: "[تاریخ انتشار]",
      title: "خواب باکیفیت؛ ستون پنهان سلامت",
      excerpt: "خواب کافی و منظم، بر حافظه، خلق‌وخو و سیستم ایمنی اثر می‌گذارد. چند عادت ساده می‌تواند کیفیت خواب را بهتر کند.",
      readTime: "۵ دقیقه مطالعه",
      content: [
        { heading: "چرا کیفیت خواب مهم است؟" },
        {
          text: "در طول خواب، بدن فرصت بازسازی و تنظیم پیدا می‌کند. کم‌خوابی مزمن با کاهش تمرکز، تحریک‌پذیری و افت عملکرد روزانه همراه است."
        },
        {
          text: "نکته مهم این است که تعداد ساعت خواب به‌تنهایی کافی نیست؛ نظم و پیوستگی خواب نیز نقش تعیین‌کننده دارد."
        },
        { heading: "ریتم ثابت، مهم‌تر از ساعت‌های طولانی" },
        {
          text: "تلاش برای خوابیدن و بیدار شدن در ساعت‌های نزدیک به هم، به بدن کمک می‌کند ریتم طبیعی خود را پیدا کند. تغییر زیاد این ساعت‌ها در روزهای تعطیل، همین ریتم را به هم می‌زند."
        },
        { heading: "محیط خواب را ساده کنید" },
        {
          text: "اتاق تاریک، خنک و آرام به خواب عمیق‌تر کمک می‌کند. فاصله گرفتن از صفحه‌های نمایشگر در ساعت‌های پایانی شب نیز برای بسیاری از افراد مؤثر است."
        },
        {
          list: [
            "کاهش نور و صدا در اتاق خواب",
            "پرهیز از کافئین در ساعات عصر",
            "فعالیت سبک روزانه به‌جای ورزش شدید نزدیک خواب"
          ]
        },
        { heading: "چه زمانی باید پیگیری شود؟" },
        {
          text: "اگر بی‌خوابی بیش از چند هفته ادامه دارد، یا با خستگی شدید روزانه، خروپف بلند یا تنگی نفس همراه است، بررسی تخصصی توصیه می‌شود. هماهنگی مراجعه از طریق تماس تلفنی با کلینیک انجام می‌شود."
        },
        {
          note: "این مطلب جنبه آموزشی دارد و جایگزین مشاوره، تشخیص یا درمان پزشکی نیست."
        }
      ]
    },
    {
      slug: "preventive-checks",
      icon: "heart-pulse",
      category: "پیشگیری",
      date: "[تاریخ انتشار]",
      title: "چک‌های دوره‌ای؛ چرا و هر چند وقت یک‌بار؟",
      excerpt: "بسیاری از تغییرهای سلامت پیش از بروز نشانه‌ها قابل شناسایی هستند. بررسی دوره‌ای، فرصت تصمیم‌گیری زودتر را فراهم می‌کند.",
      readTime: "۴ دقیقه مطالعه",
      content: [
        { heading: "پیشگیری، یعنی زمان خریدن" },
        {
          text: "بررسی‌های دوره‌ای به این معنا نیست که همه افراد به یک فهرست یکسان نیاز دارند. هدف، شناخت وضعیت پایه و پیگیری تغییرهای معنادار در طول زمان است."
        },
        { heading: "فاصله مناسب بررسی‌ها" },
        {
          text: "فاصله مناسب به سن، سابقه خانُــوادگی، شرایط فعلی و سبک زندگی بستگی دارد و توسط پزشک تعیین می‌شود. افرادی که بیماری زمینه‌ای دارند معمولاً به پیگیری نزدیک‌تری نیاز دارند."
        },
        { heading: "چه چیزهایی را همراه داشته باشیم؟" },
        {
          text: "همراه داشتن مدارک و نتایج بررسی‌های قبلی، به تصمیم‌گیری دقیق‌تر کمک می‌کند."
        },
        {
          list: [
            "فهرست داروهای مصرفی",
            "نتایج آزمایش‌ها و تصویربرداری‌های قبلی",
            "یادداشت نشانه‌ها یا پرسش‌ها"
          ]
        },
        { heading: "گام بعدی" },
        {
          text: "برای هماهنگی بررسی دوره‌ای یا مشاوره درباره فاصله مناسب پیگیری، با کلینیک نُــوا تماس بگیرید. در این نسخه از وب‌سایت، ارتباط تنها از طریق تماس تلفنی انجام می‌شود."
        },
        {
          note: "این مطلب جنبه آموزشی دارد و جایگزین مشاوره، تشخیص یا درمان پزشکی نیست."
        }
      ]
    }
  ],

  // ========================================================
  // بخش «با ما همراه باشید» (متن‌های بالای کارت‌ها)
  // ========================================================
  contactSection: {
    eyebrow: "اطلاعات کلینیک",
    title: "با ما همراه باشید",
    text: "نشانی، ساعات کاری و راه‌های ارتباطی کلینیک نُــوا"
  },

  // ========================================================
  // سؤالات متداول
  // ========================================================
  faqSection: { eyebrow: "پاسخ به پرسش‌ها", title: "سؤالات متداول", text: "پاسخ پرتکرارترین پرسش‌های مراجعان" },
  faq: [
    {
      q: "چطور نوبت بگیرم؟",
      a: "هماهنگی مراجعه در حال حاضر از طریق تماس تلفنی با کلینیک انجام می‌شود. شماره‌های تماس در بالای صفحه و در بخش تماس با ما در دسترس است."
    },
    {
      q: "ساعات کاری کلینیک چیست؟",
      a: "ساعات کاری کامل در بخش تماس با ما آمده است. برای اطمینان از وضعیت نوبت‌دهی در روز موردنظر، پیش از مراجعه تماس بگیرید."
    },
    {
      q: "برای مراجعه چه مدارکی لازم است؟",
      a: "[مدارک موردنیاز را وارد کنید: کارت شناسایی، دفترچه بیمه، نتایج بررسی‌های قبلی و فهرست داروهای مصرفی.]"
    },
    {
      q: "چطور کلینیک را پیدا کنم؟",
      a: "[آدرس و نشانه‌های مسیر را وارد کنید.] نشانی روی نقشه از بخش تماس با ما قابل مشاهده است."
    }
  ],

  // ========================================================
  // فوتر
  // ========================================================
  footer: {
    text: "کلینیک نُــوا، همراه شما در مسیر سلامت و پیشگیری.\nسلامتی، حق شماست.",
    copyright: "© نُــوا کلینیک — تمامی حقوق محفوظ است."
  }
};

/* =====================================================================
   موتور ساخت محتوا از روی CONFIG  —  نیازی به ویرایش این قسمت نیست
   همه‌ی متن‌ها و لیست‌های صفحه از CONFIG (بالای همین فایل) خوانده می‌شوند.
   ===================================================================== */
var NOVA_ICONS = {
  "heart-handshake": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/>',
  "microscope": '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  "sparkles": '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  "stethoscope": '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
  "heart-pulse": '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  "calendar-check": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  "activity": '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  "apple": '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  "moon": '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  "leaf": '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  "droplet": '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "badge-check": '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>'
};
function novaEsc(v) {
  return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function novaIcon(name, cls, sw) {
  var path = NOVA_ICONS[name] || NOVA_ICONS.sparkles;
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' + novaEsc(name) + " " + cls + '" aria-hidden="true">' + path + "</svg>";
}
/* بلوک‌های متن پنجره‌ها → HTML */
function novaBlocksHtml(blocks) {
  return (blocks || []).map(function (b) {
    if (b.heading != null) return "<h4>" + novaEsc(b.heading) + "</h4>";
    if (b.text != null) return "<p>" + novaEsc(b.text) + "</p>";
    if (b.note != null) return '<p class="nx-note">' + novaEsc(b.note) + "</p>";
    if (b.list) return '<ul class="nx-list">' + b.list.map(function (t) { return "<li>" + novaEsc(t) + "</li>"; }).join("") + "</ul>";
    return "";
  }).join("");
}
/* محتوای پنجره‌های «جزئیات خدمت»، مقالات و پزشک */
function novaBuildPanels() {
  var panels = {};
  (CONFIG.services || []).forEach(function (s, i) {
    panels["svc-" + i] = { title: s.title, html: novaBlocksHtml(s.details) };
  });
  (CONFIG.articles || []).forEach(function (a) {
    var meta = novaEsc(a.category) + (a.readTime ? " · " + novaEsc(a.readTime) : "");
    panels["article:" + a.slug] = { title: a.title, html: '<p class="nx-meta">' + meta + "</p>" + novaBlocksHtml(a.content) };
  });
  var d = CONFIG.doctor || {};
  var about = (d.about || []).map(function (t) { return "<p>" + novaEsc(t) + "</p>"; }).join("");
  panels.doctor = {
    title: "[نام و نام خانُــوادگی پزشک]",
    html: '<p class="nx-meta">[تخصص و عنُــوان حرفه‌ای]</p><p>' + novaEsc(d.bio) + "</p>" + about +
      "<h4>سوابق و مدارک</h4>" + novaBlocksHtml([{ list: d.credentials }]) +
      "<h4>مسیر حرفه‌ای</h4>" + novaBlocksHtml([{ list: d.career }])
  };
  return panels;
}
(function () {
  var E = novaEsc;
  var LISTS = {
    "hero.features": function () {
      return (CONFIG.hero.features || []).map(function (t) {
        return '<li class="flex items-center gap-2">' + novaIcon("check", "h-4 w-4 text-mint") + E(t) + "</li>";
      }).join("");
    },
    "hero.stats": function () {
      return (CONFIG.hero.stats || []).map(function (s) {
        return '<div class="px-1"><b class="block text-base font-bold text-brand-deep">' + E(s.value) + '</b><small class="text-[10.5px] text-mist">' + E(s.label) + "</small></div>";
      }).join("");
    },
    "trust": function () {
      return (CONFIG.trust || []).map(function (t) {
        return '<div class="flex items-center gap-3"><span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sky text-brand ring-1 ring-brand/10">' +
          novaIcon(t.icon, "h-5 w-5", 1.6) + '</span><span class="leading-6"><b class="block text-[12.5px] font-semibold text-brand-deep">' + E(t.title) +
          '</b><small class="text-[11px] text-mist">' + E(t.text) + "</small></span></div>";
      }).join("");
    },
    "services": function () {
      return (CONFIG.services || []).map(function (s, i) {
        return '<div class="reveal h-full" style="transition-delay:' + (i * 70) + 'ms"><article class="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-white p-5 shadow-[0_8px_24px_rgba(26,100,146,0.05)] transition duration-300 hover:-translate-y-2 hover:border-brand/20 hover:shadow-soft">' +
          '<div class="relative grid h-24 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky to-mint-soft text-brand"><span aria-hidden="true" class="absolute -right-6 -top-8 h-24 w-24 rounded-full border border-white/80 shadow-[0_0_0_14px_rgba(255,255,255,0.12)]"></span>' +
          novaIcon(s.icon, "relative h-9 w-9", 1.4) + "</div>" +
          '<h3 class="mt-4 text-[14.5px] font-bold text-brand-deep">' + E(s.title) + "</h3>" +
          '<p class="mt-2 flex-1 text-[12.5px] leading-7 text-mist">' + E(s.text) + "</p>" +
          '<button type="button" aria-label="جزئیات ' + E(s.title) + '" class="mt-4 inline-flex min-h-[44px] items-center justify-between gap-2 rounded-full bg-sky px-4 text-[12px] font-semibold text-brand transition duration-300 hover:bg-brand hover:text-white group-hover:bg-brand group-hover:text-white">جزئیات خدمت' +
          novaIcon("arrow-left", "h-4 w-4") + "</button></article></div>";
      }).join("");
    },
    "doctor.credentials": function () {
      return (CONFIG.doctor.credentials || []).map(function (t) {
        return '<li class="flex items-start gap-2.5">' + novaIcon("badge-check", "mt-0.5 h-4 w-4 shrink-0 text-mint") + E(t) + "</li>";
      }).join("");
    },
    "doctor.stats": function () {
      return (CONFIG.doctor.stats || []).map(function (s) {
        return '<div><b class="block text-xl font-bold text-brand">' + E(s.value) + '</b><small class="text-[10.5px] text-mist">' + E(s.label) + "</small></div>";
      }).join("");
    },
    "gallery": function () {
      return (CONFIG.gallery || []).map(function (g, i) {
        var img = g.image ? '<img src="' + E(g.image) + '" alt="' + E(g.caption) + '" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />' : "";
        return '<div class="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white bg-sky shadow-[0_8px_20px_rgba(13,87,144,0.06)]"' + (i ? ' style="transition-delay:' + (i * 70) + 'ms"' : "") + ">" + img +
          '<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/75 via-brand-deep/10 to-transparent p-3"><span class="text-[11px] font-medium text-white">' + E(g.caption) + "</span></div></div>";
      }).join("");
    },
    "articles": function () {
      return (CONFIG.articles || []).map(function (a, i) {
        return '<div class="reveal"' + (i ? ' style="transition-delay:' + (i * 80) + 'ms"' : "") + '><a class="group flex items-center gap-4 rounded-3xl border border-hairline bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-soft" href="/articles/' + E(a.slug) + '">' +
          '<span class="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky to-mint-soft text-brand">' + novaIcon(a.icon, "h-8 w-8", 1.4) + "</span>" +
          '<div class="min-w-0 flex-1"><small class="text-[10px] text-mist">' + E(a.category) + " · " + E(a.date) + "</small>" +
          '<h3 class="mt-1 text-[13px] font-bold leading-6 text-brand-deep">' + E(a.title) + "</h3>" +
          '<p class="mt-1 line-clamp-2 text-[11.5px] leading-6 text-mist">' + E(a.excerpt) + "</p></div>" +
          novaIcon("arrow-left", "h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-x-1") + "</a></div>";
      }).join("");
    },
    "faq": function () {
      return (CONFIG.faq || []).map(function (f, i) {
        return '<div class="reveal"' + (i ? ' style="transition-delay:' + (i * 60) + 'ms"' : "") + '><details class="group rounded-3xl border border-hairline bg-white px-5 py-4 transition hover:border-brand/25 open:shadow-soft">' +
          '<summary class="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-[13px] font-semibold text-brand-deep [&::-webkit-details-marker]:hidden">' + E(f.q) +
          novaIcon("chevron-down", "h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-open:rotate-180") + "</summary>" +
          '<p class="mt-1 text-[12.5px] leading-8 text-mist">' + E(f.a) + "</p></details></div>";
      }).join("");
    }
  };
  document.querySelectorAll("[data-list]").forEach(function (el) {
    var build = LISTS[el.getAttribute("data-list")];
    if (build) el.innerHTML = build();
  });

  function get(path) {
    var v = CONFIG;
    path.split(".").forEach(function (k) { v = v == null ? undefined : v[k]; });
    return v == null ? "" : String(v);
  }
  var TOKEN = /\{\{\s*([\w.]+)\s*\}\}/g;
  function fill(str) { return str.replace(TOKEN, function (m, p) { return get(p).replace(/\n/g, "\u2028"); }); }

  /* ویژگی‌ها (alt، data-src، ...) */
  document.querySelectorAll("*").forEach(function (el) {
    Array.prototype.slice.call(el.attributes).forEach(function (a) {
      if (a.value.indexOf("{{") !== -1) el.setAttribute(a.name, fill(a.value));
    });
  });
  document.querySelectorAll("img[data-src]").forEach(function (img) {
    var src = img.getAttribute("data-src");
    if (src) img.setAttribute("src", src);
    img.removeAttribute("data-src");
  });

  /* متن‌ها؛ در مقادیر، «\n» به رفتن به خط بعد تبدیل می‌شود */
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var nodes = [];
  while (walker.nextNode()) if (walker.currentNode.nodeValue.indexOf("{{") !== -1) nodes.push(walker.currentNode);
  nodes.forEach(function (node) {
    var parts = fill(node.nodeValue).split("\u2028");
    var frag = document.createDocumentFragment();
    parts.forEach(function (part, i) {
      if (i) frag.appendChild(document.createElement("br"));
      frag.appendChild(document.createTextNode(part));
    });
    node.parentNode.replaceChild(frag, node);
  });

  /* عکس پزشک */
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var src = get(el.getAttribute("data-img"));
    if (src) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = CONFIG.doctorName || "";
      img.className = "absolute inset-0 h-full w-full object-cover";
      el.parentNode.replaceChild(img, el);
    } else {
      el.remove();
    }
  });
})();

(function () {
  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function phoneHref(displayValue, explicitValue) {
    var raw = String(explicitValue || displayValue || "").trim();
    var digits = raw.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.indexOf("0098") === 0) return "+" + digits.slice(2);
    if (digits.indexOf("98") === 0) return "+" + digits;
    if (digits.indexOf("0") === 0) return "+98" + digits.slice(1);
    return "+" + digits;
  }
  function applyConfig() {
    document.title = (CONFIG.pageTitle || ((CONFIG.clinicName || "کلینیک نُــوا") + " | Nova Clinic"));
    var descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && CONFIG.shortDescription) {
      descriptionMeta.setAttribute("content", String(CONFIG.shortDescription).replace(/کلینیک نُــوا/g, CONFIG.clinicName || "کلینیک نُــوا"));
    }
    var replacements = [
      ["[شماره تلفن ثابت]", CONFIG.office],
      ["[شماره تلفن همراه]", CONFIG.mobile],
      ["[آدرس کامل کلینیک]", CONFIG.address],
      ["[روزها و ساعات کاری]", CONFIG.hoursSummary],
      ["[تخصص و عنُــوان حرفه‌ای]", CONFIG.doctorSpecialty],
      ["[نام و نام خانُــوادگی پزشک]", CONFIG.doctorName],
      ["[آدرس و نشانه‌های مسیر را وارد کنید.]", CONFIG.directionsText],
      ["[مدارک موردنیاز را وارد کنید: کارت شناسایی، دفترچه بیمه، نتایج بررسی‌های قبلی و فهرست داروهای مصرفی.]", CONFIG.preparationText],
      ["[روزهای کاری اول]", CONFIG.hours[0] ? CONFIG.hours[0][0] : ""],
      ["[روزهای کاری دوم]", CONFIG.hours[1] ? CONFIG.hours[1][0] : ""],
      ["[روز تعطیل]", CONFIG.hours[2] ? CONFIG.hours[2][0] : ""]
    ];
    var originalDescription = "کلینیک نُــوا فضایی آرام و حرفه‌ای برای مراقبت از سلامت شماست؛ جایی که مشاوره دقیق، توجه به جزئیات و همراهی در تمام مسیر درمان در اولویت قرار دارد.";
    // Replace editable values in visible text while preserving the HTML structure.
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    var hoursTextIndex = 0;
    while ((node = walker.nextNode())) {
      var value = node.nodeValue;
      if (CONFIG.shortDescription) value = value.split(originalDescription).join(String(CONFIG.shortDescription));
      replacements.forEach(function (pair) {
        if (pair[1] !== undefined && pair[1] !== null && pair[1] !== "") {
          value = value.split(pair[0]).join(String(pair[1]));
        }
      });
      // The two schedule rows each have their own time in CONFIG.hours.
      while (value.indexOf("[ساعات کاری]") !== -1 && hoursTextIndex < 2) {
        var row = CONFIG.hours[hoursTextIndex] || [];
        value = value.replace("[ساعات کاری]", row[1] == null ? "" : String(row[1]));
        hoursTextIndex++;
      }
      if (CONFIG.clinicName) value = value.replace(/کلینیک نُــوا/g, CONFIG.clinicName);
      node.nodeValue = value;
    }
    // Keep accessible labels and the map link in sync with CONFIG.
    document.querySelectorAll("[aria-label], [title], [alt]").forEach(function (el) {
      ["aria-label", "title", "alt"].forEach(function (attr) {
        if (!el.hasAttribute(attr)) return;
        var value = el.getAttribute(attr);
        if (CONFIG.clinicName) value = value.replace(/کلینیک نُــوا/g, CONFIG.clinicName);
        el.setAttribute(attr, value);
      });
    });
    if (CONFIG.mapUrl) {
      document.querySelectorAll('a[href*="google.com/maps"]').forEach(function (link) {
        link.href = CONFIG.mapUrl;
      });
    }
    // Telephone links showing a mobile number use mobile; all general contact links use office.
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      var label = link.textContent || "";
      var isMobile = label.indexOf("[شماره تلفن همراه]") !== -1 || label.indexOf(CONFIG.mobile) !== -1 && CONFIG.mobile !== "";
      var display = isMobile ? CONFIG.mobile : CONFIG.office;
      var explicit = isMobile ? CONFIG.mobileTel : CONFIG.officeTel;
      var href = phoneHref(display, explicit);
      if (href) link.setAttribute("href", "tel:" + href);
    });
    // دکمه‌های فراخوان تماس را به رزرو آنلاین تبدیل کن؛ لینک منوی «تماس با ما» که به #contact می‌رود، دست‌نخورده می‌ماند.
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      var label = (link.textContent || "").replace(/\s+/g, " ").trim();
      if (label.indexOf("تماس با کلینیک") !== -1 || label === "تماس با ما") {
        if (CONFIG.bookingUrl) {
          link.setAttribute("href", CONFIG.bookingUrl);
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("aria-label", "رزرو نوبت آنلاین");
          Array.from(link.childNodes).forEach(function (child) {
            if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
              child.nodeValue = child.nodeValue.replace(/تماس با کلینیک|تماس با ما/g, "رزرو نوبت آنلاین");
            }
          });
        }
      }
    });
  }
  applyConfig();
  var PANELS = novaBuildPanels();
  var MENU_HTML = "<a href=\"#home\" class=\"flex min-h-[44px] items-center justify-between rounded-2xl px-3 text-[13px] font-medium text-ink/80 transition hover:bg-sky hover:text-brand\">خانه</a><a href=\"#services\" class=\"flex min-h-[44px] items-center justify-between rounded-2xl px-3 text-[13px] font-medium text-ink/80 transition hover:bg-sky hover:text-brand\">خدمات</a><a href=\"#doctor\" class=\"flex min-h-[44px] items-center justify-between rounded-2xl px-3 text-[13px] font-medium text-ink/80 transition hover:bg-sky hover:text-brand\">پزشک</a><a href=\"#articles\" class=\"flex min-h-[44px] items-center justify-between rounded-2xl px-3 text-[13px] font-medium text-ink/80 transition hover:bg-sky hover:text-brand\">مقالات</a><a href=\"#gallery\" class=\"flex min-h-[44px] items-center justify-between rounded-2xl px-3 text-[13px] font-medium text-ink/80 transition hover:bg-sky hover:text-brand\">گالری</a><a href=\"#contact\" class=\"flex min-h-[44px] items-center justify-between rounded-2xl px-3 text-[13px] font-medium text-ink/80 transition hover:bg-sky hover:text-brand\">تماس با ما</a><a href=\"tel:+980000000000\" class=\"mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-brand to-brand-deep text-[13px] font-semibold text-white\">[شماره تلفن ثابت]</a>";
  var modal = document.getElementById("nx-modal");
  if (!modal) return;
  var titleEl = modal.querySelector(".nx-title");
  var bodyEl = modal.querySelector(".nx-body");
  var closeBtn = modal.querySelector(".nx-close");
  function open(key) {
    var panel = PANELS[key];
    if (!panel) return;
    var panelTitle = panel.title;
    var panelHtml = panel.html;
    panelTitle = panelTitle.replace(/\[نام و نام خانُــوادگی پزشک\]/g, CONFIG.doctorName || "");
    panelHtml = panelHtml.replace(/\[تخصص و عنُــوان حرفه‌ای\]/g, escapeHtml(CONFIG.doctorSpecialty || ""));
    panelHtml = panelHtml.replace(/\[نام و نام خانُــوادگی پزشک\]/g, escapeHtml(CONFIG.doctorName || ""));
    titleEl.textContent = panelTitle;
    bodyEl.innerHTML = panelHtml;
    modal.classList.add("nx-open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }
  function close() {
    modal.classList.remove("nx-open");
    document.body.style.overflow = "";
  }
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  /* منوی موبایل */
  var menuBtn = document.querySelector('button[aria-controls="mobile-menu"]');
  if (menuBtn) {
    var nav = menuBtn.closest("nav");
    var menu = document.createElement("div");
    menu.id = "mobile-menu";
    menu.style.display = "none";
    menu.className = "absolute inset-x-3 top-[calc(100%+0.5rem)] rounded-3xl border border-hairline bg-white p-3 shadow-lift lg:hidden";
    menu.innerHTML = MENU_HTML;
    nav.appendChild(menu);
    menuBtn.addEventListener("click", function () {
      var isOpen = menu.style.display !== "none";
      menu.style.display = isOpen ? "none" : "block";
      menuBtn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) menu.style.display = "none";
    });
  }
  document.addEventListener("click", function (e) {
    var target = e.target;
    if (!target || !target.closest) return;
    var svcBtn = target.closest("[aria-label^='جزئیات ']");
    if (svcBtn) {
      e.preventDefault();
      var name = svcBtn.getAttribute("aria-label").replace("جزئیات ", "").trim();
      for (var key in PANELS) {
        if (PANELS[key].title === name) { open(key); return; }
      }
      return;
    }
    var link = target.closest("a[href]");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (href.indexOf("/articles/") === 0) {
      e.preventDefault();
      open("article:" + href.split("/").pop());
    } else if (href.indexOf("/doctors/") === 0) {
      e.preventDefault();
      open("doctor");
    }
  });
})();

/* ===== بخش «با ما همراه باشید»: پر شدن از CONFIG ===== */
(function () {
  var section = document.getElementById("contact");
  if (!section || typeof CONFIG === "undefined") return;

  function telHref(displayValue, explicitValue) {
    var digits = String(explicitValue || displayValue || "").replace(/\D/g, "");
    if (!digits) return "";
    if (digits.indexOf("0098") === 0) return "+" + digits.slice(2);
    if (digits.indexOf("98") === 0) return "+" + digits;
    if (digits.indexOf("0") === 0) return "+98" + digits.slice(1);
    return "+" + digits;
  }

  /* شماره‌های تماس */
  [
    ["office", CONFIG.office, CONFIG.officeTel],
    ["mobile", CONFIG.mobile, CONFIG.mobileTel]
  ].forEach(function (item) {
    var row = section.querySelector('[data-wf-phone="' + item[0] + '"]');
    if (!row || !item[1]) return;
    row.hidden = false;
    row.querySelector("[data-wf-number]").textContent = item[1];
    var href = telHref(item[1], item[2]);
    if (href) row.querySelector("[data-wf-call]").setAttribute("href", "tel:" + href);
    row.querySelector("[data-wf-copy]").setAttribute("data-wf-value", item[1]);
  });

  /* کپی شماره */
  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.cssText = "position:fixed;opacity:0;top:0;left:0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (err) {}
    document.body.removeChild(area);
  }
  section.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-wf-copy]");
    if (!btn) return;
    var value = btn.getAttribute("data-wf-value") || "";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(function () { fallbackCopy(value); });
    } else {
      fallbackCopy(value);
    }
    var label = btn.querySelector("span");
    var original = label.getAttribute("data-original") || label.textContent;
    label.setAttribute("data-original", original);
    label.textContent = "کپی شد ✓";
    clearTimeout(btn._wfTimer);
    btn._wfTimer = setTimeout(function () { label.textContent = original; }, 1600);
  });

  /* آدرس و نقشه */
  var addressEl = section.querySelector("[data-wf-address]");
  if (addressEl) addressEl.textContent = CONFIG.address || "";
  var mapLink = section.querySelector("[data-wf-map]");
  if (mapLink && CONFIG.mapUrl) mapLink.setAttribute("href", CONFIG.mapUrl);

  /* ساعات کاری */
  var hoursEl = section.querySelector("[data-wf-hours]");
  if (hoursEl && Array.isArray(CONFIG.hours)) {
    CONFIG.hours.forEach(function (row) {
      var li = document.createElement("li");
      var day = document.createElement("span");
      var time = document.createElement("span");
      day.textContent = String(row[0] || "").trim();
      time.textContent = String(row[1] || "").trim();
      if (time.textContent.indexOf("تعطیل") !== -1) li.className = "is-closed";
      li.appendChild(day);
      li.appendChild(time);
      hoursEl.appendChild(li);
    });
  }

  /* شبکه‌های اجتماعی؛ فقط مواردی که در CONFIG لینک دارند نمایش داده می‌شوند */
  var socials = {
    whatsapp: CONFIG.whatsappUrl,
    telegram: CONFIG.telegramUrl,
    instagram: CONFIG.instagramUrl,
    bale: CONFIG.baleUrl,
    website: CONFIG.websiteUrl,
    other: CONFIG.otherSocialUrl
  };
  var visible = 0;
  Object.keys(socials).forEach(function (key) {
    var link = section.querySelector('[data-wf-social="' + key + '"]');
    var url = socials[key];
    if (!link || !url) return;
    link.setAttribute("href", url);
    link.hidden = false;
    visible++;
  });
  if (!visible) {
    var card = section.querySelector("#wf-social-title");
    if (card) card.closest("article").hidden = true;
  }
})();

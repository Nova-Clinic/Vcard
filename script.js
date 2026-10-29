/* ==========================================================
   تنظیمات سایت نوا
   برای تغییر اطلاعات، فقط مقادیر همین بخش را ویرایش کنید.
   ========================================================== */
const CONFIG = {
  // اطلاعات اصلی
  clinicName: "کلینیک نوا",
  pageTitle: "", // اگر خالی باشد، عنوان از clinicName ساخته می‌شود.
  shortDescription: "کلینیک نوا فضایی آرام و حرفه‌ای برای مراقبت از سلامت شماست؛ جایی که مشاوره دقیق، توجه به جزئیات و همراهی در تمام مسیر درمان در اولویت قرار دارد.",
  doctorName: "[نام و نام خانوادگی پزشک]",
  doctorSpecialty: "[تخصص و عنوان حرفه‌ای]",

  // راه‌های تماس؛ شماره‌ها را با ارقام انگلیسی وارد کنید.
  mobile: "[شماره تلفن همراه]",
  mobileTel: "", // اختیاری؛ اگر خالی باشد، لینک تماس از mobile ساخته می‌شود.
  office: "[شماره تلفن ثابت]",
  officeTel: "", // اختیاری؛ اگر خالی باشد، لینک تماس از office ساخته می‌شود.

  // آدرس و نقشه
  address: "[آدرس کامل کلینیک]",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Nova+Clinic",
  directionsText: "[آدرس و نشانه‌های مسیر را وارد کنید.]",

  // ساعت کاری
  hoursSummary: "[روزها و ساعات کاری]",
  hours: [
    ["[روزهای کاری اول]", "[ساعات کاری]"],
    ["[روزهای کاری دوم]", "[ساعات کاری]"],
    ["[روز تعطیل]", "تعطیل"]
  ],

  // اطلاعات مراجعه
  preparationText: "[مدارک موردنیاز را وارد کنید: کارت شناسایی، دفترچه بیمه، نتایج بررسی‌های قبلی و فهرست داروهای مصرفی.]",

  // لینک رزرو آنلاین: فقط همین آدرس را تغییر دهید تا همه دکمه‌های رزرو به مقصد جدید بروند.
  // نمونه زیر آزمایشی است؛ آن را با لینک واقعی سامانه نوبت‌دهی جایگزین کنید.
  bookingUrl: "https://doctoreto.com/doctor/qyWWgY",

  // لینک‌های اختیاری شبکه‌های اجتماعی
  instagramUrl: "",
  whatsappUrl: "",
  telegramUrl: "",
  baleUrl: "",
  websiteUrl: "",
  otherSocialUrl: "",

  // اطلاعات بانکی برای استفاده در صورت اضافه شدن بخش کارت‌ها به صفحه
  bankCardA: "",
  bankShebaA: "",
  bankCardB: "",
  bankShebaB: ""
};


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
    document.title = (CONFIG.pageTitle || ((CONFIG.clinicName || "کلینیک نوا") + " | Nova Clinic"));
    var descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && CONFIG.shortDescription) {
      descriptionMeta.setAttribute("content", String(CONFIG.shortDescription).replace(/کلینیک نوا/g, CONFIG.clinicName || "کلینیک نوا"));
    }

    var replacements = [
      ["[شماره تلفن ثابت]", CONFIG.office],
      ["[شماره تلفن همراه]", CONFIG.mobile],
      ["[آدرس کامل کلینیک]", CONFIG.address],
      ["[روزها و ساعات کاری]", CONFIG.hoursSummary],
      ["[تخصص و عنوان حرفه‌ای]", CONFIG.doctorSpecialty],
      ["[نام و نام خانوادگی پزشک]", CONFIG.doctorName],
      ["[آدرس و نشانه‌های مسیر را وارد کنید.]", CONFIG.directionsText],
      ["[مدارک موردنیاز را وارد کنید: کارت شناسایی، دفترچه بیمه، نتایج بررسی‌های قبلی و فهرست داروهای مصرفی.]", CONFIG.preparationText],
      ["[روزهای کاری اول]", CONFIG.hours[0] ? CONFIG.hours[0][0] : ""],
      ["[روزهای کاری دوم]", CONFIG.hours[1] ? CONFIG.hours[1][0] : ""],
      ["[روز تعطیل]", CONFIG.hours[2] ? CONFIG.hours[2][0] : ""]
    ];
    var originalDescription = "کلینیک نوا فضایی آرام و حرفه‌ای برای مراقبت از سلامت شماست؛ جایی که مشاوره دقیق، توجه به جزئیات و همراهی در تمام مسیر درمان در اولویت قرار دارد.";

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
      if (CONFIG.clinicName) value = value.replace(/کلینیک نوا/g, CONFIG.clinicName);
      node.nodeValue = value;
    }

    // Keep accessible labels and the map link in sync with CONFIG.
    document.querySelectorAll("[aria-label], [title], [alt]").forEach(function (el) {
      ["aria-label", "title", "alt"].forEach(function (attr) {
        if (!el.hasAttribute(attr)) return;
        var value = el.getAttribute(attr);
        if (CONFIG.clinicName) value = value.replace(/کلینیک نوا/g, CONFIG.clinicName);
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
  var PANELS = {
  "svc-0": {
    "title": "مشاوره و ارزیابی اولیه",
    "html": "<p>در نخستین جلسه، درباره شرایط فعلی، سابقه و اهداف شما گفت‌وگو می‌شود تا مسیر مراقبت به‌صورت روشن و واقع‌بینانه مشخص شود. این جلسه فرصتی است برای پرسیدن سؤال‌ها و آشنایی با روند کار کلینیک.</p><ul class=\"nx-list\"><li>گفت‌وگوی تفصیلی درباره شرایط و سابقه</li><li>بررسی سوابق و مدارک موجود</li><li>تعیین اولویت‌ها و گام‌های بعدی</li></ul>"
  },
  "svc-1": {
    "title": "برنامه مراقبت اختصاصی",
    "html": "<p>پس از ارزیابی، یک برنامه مراقبت با گام‌های مشخص تنظیم می‌شود؛ برنامه‌ای که با زندگی روزمره شما هماهنگ باشد و بتوانید آن را پیگیری کنید.</p><ul class=\"nx-list\"><li>تعیین اهداف کوتاه‌مدت و بلندمدت</li><li>هماهنگی با سبک زندگی و برنامه روزانه</li><li>بازبینی دوره‌ای برنامه</li></ul>"
  },
  "svc-2": {
    "title": "پیگیری و کنترل دوره‌ای",
    "html": "<p>پیگیری منظم بخش مهمی از مراقبت است. در جلسات بعدی، روند پیشرفت بررسی و در صورت نیاز برنامه تنظیم می‌شود تا نتیجه پایدار بماند.</p><ul class=\"nx-list\"><li>جلسات پیگیری طبق برنامه</li><li>ثبت تغییرات و بررسی روند</li><li>هماهنگی برای مراجعه بعدی</li></ul>"
  },
  "svc-3": {
    "title": "بررسی‌های تشخیصی",
    "html": "<p>در صورت نیاز، بررسی‌های تشخیصی برای روشن‌تر شدن وضعیت انجام می‌شود. هر بررسی تنها زمانی پیشنهاد می‌شود که به تصمیم‌گیری بهتر کمک کند.</p><ul class=\"nx-list\"><li>ارزیابی ضرورت هر بررسی</li><li>توضیح مراحل و آماده‌سازی</li><li>مرور نتیجه در کنار سوابق</li></ul>"
  },
  "svc-4": {
    "title": "آموزش و پیشگیری",
    "html": "<p>آگاهی، بخشی از درمان است. در کلینیک نوا توضیح داده می‌شود که چه عادت‌هایی به حفظ سلامت کمک می‌کند و چه نشانه‌هایی نیازمند پیگیری هستند.</p><ul class=\"nx-list\"><li>توضیح ساده و روشن</li><li>پاسخ به پرسش‌های رایج</li><li>پیشنهاد گام‌های عملی روزمره</li></ul>"
  },
  "article:healthy-nutrition": {
    "title": "تغذیه سالم؛ پایه‌ای برای انرژی روزانه",
    "html": "<p class=\"nx-meta\">تغذیه · ۴ دقیقه مطالعه</p><h4>شروع از الگوی غذایی، نه از رژیم‌های سخت</h4><p>بسیاری از تلاش‌ها برای بهتر شدن تغذیه با محدودیت‌های سخت آغاز می‌شود و به همین دلیل دوام نمی‌آورد. تجربه نشان می‌دهد تغییرهای کوچک اما پایدار، نتیجه بهتری دارند.</p><p>به‌جای حذف کامل یک گروه غذایی، می‌توان از افزودن گزینه‌های مفید شروع کرد: سبزیجات بیشتر در وعده‌ها، غلات کامل و منابع پروتئینی متنوع.</p><h4>سه اصل ساده برای وعده‌های روزانه</h4><p>وعده‌های منظم و متعادل، از پرخوری یا بی‌حالی میان روز جلوگیری می‌کند. ترکیب سه عنصر در هر وعده کمک‌کننده است:</p><ul class=\"nx-list\"><li>منبع پروتئین برای سیری طولانی‌تر</li><li>سبزیجات و میوه برای فیبر و ریزمغذی‌ها</li><li>کربوهیدرات کامل برای انرژی پایدار</li></ul><h4>آب، خواب و تحرک؛ سه همراه همیشگی</h4><p>تغذیه در خلأ عمل نمی‌کند. نوشیدن آب کافی، خواب منظم و فعالیت بدنی روزانه، اثر تغییرهای غذایی را چند برابر می‌کند.</p><h4>چه زمانی به مشاوره تخصصی نیاز داریم؟</h4><p>اگر بیماری زمینه‌ای دارید، داروی خاصی مصرف می‌کنید یا روند تغییر وزن و اشتها بی‌دلیل تغییر کرده است، بهتر است پیش از هر تغییری با پزشک مشورت کنید. برای هماهنگی می‌توانید با کلینیک تماس بگیرید.</p><p class=\"nx-note\">این مطلب جنبه آموزشی دارد و جایگزین مشاوره، تشخیص یا درمان پزشکی نیست.</p>"
  },
  "article:quality-sleep": {
    "title": "خواب باکیفیت؛ ستون پنهان سلامت",
    "html": "<p class=\"nx-meta\">سبک زندگی · ۵ دقیقه مطالعه</p><h4>چرا کیفیت خواب مهم است؟</h4><p>در طول خواب، بدن فرصت بازسازی و تنظیم پیدا می‌کند. کم‌خوابی مزمن با کاهش تمرکز، تحریک‌پذیری و افت عملکرد روزانه همراه است.</p><p>نکته مهم این است که تعداد ساعت خواب به‌تنهایی کافی نیست؛ نظم و پیوستگی خواب نیز نقش تعیین‌کننده دارد.</p><h4>ریتم ثابت، مهم‌تر از ساعت‌های طولانی</h4><p>تلاش برای خوابیدن و بیدار شدن در ساعت‌های نزدیک به هم، به بدن کمک می‌کند ریتم طبیعی خود را پیدا کند. تغییر زیاد این ساعت‌ها در روزهای تعطیل، همین ریتم را به هم می‌زند.</p><h4>محیط خواب را ساده کنید</h4><p>اتاق تاریک، خنک و آرام به خواب عمیق‌تر کمک می‌کند. فاصله گرفتن از صفحه‌های نمایشگر در ساعت‌های پایانی شب نیز برای بسیاری از افراد مؤثر است.</p><ul class=\"nx-list\"><li>کاهش نور و صدا در اتاق خواب</li><li>پرهیز از کافئین در ساعات عصر</li><li>فعالیت سبک روزانه به‌جای ورزش شدید نزدیک خواب</li></ul><h4>چه زمانی باید پیگیری شود؟</h4><p>اگر بی‌خوابی بیش از چند هفته ادامه دارد، یا با خستگی شدید روزانه، خروپف بلند یا تنگی نفس همراه است، بررسی تخصصی توصیه می‌شود. هماهنگی مراجعه از طریق تماس تلفنی با کلینیک انجام می‌شود.</p><p class=\"nx-note\">این مطلب جنبه آموزشی دارد و جایگزین مشاوره، تشخیص یا درمان پزشکی نیست.</p>"
  },
  "article:preventive-checks": {
    "title": "چک‌های دوره‌ای؛ چرا و هر چند وقت یک‌بار؟",
    "html": "<p class=\"nx-meta\">پیشگیری · ۴ دقیقه مطالعه</p><h4>پیشگیری، یعنی زمان خریدن</h4><p>بررسی‌های دوره‌ای به این معنا نیست که همه افراد به یک فهرست یکسان نیاز دارند. هدف، شناخت وضعیت پایه و پیگیری تغییرهای معنادار در طول زمان است.</p><h4>فاصله مناسب بررسی‌ها</h4><p>فاصله مناسب به سن، سابقه خانوادگی، شرایط فعلی و سبک زندگی بستگی دارد و توسط پزشک تعیین می‌شود. افرادی که بیماری زمینه‌ای دارند معمولاً به پیگیری نزدیک‌تری نیاز دارند.</p><h4>چه چیزهایی را همراه داشته باشیم؟</h4><p>همراه داشتن مدارک و نتایج بررسی‌های قبلی، به تصمیم‌گیری دقیق‌تر کمک می‌کند.</p><ul class=\"nx-list\"><li>فهرست داروهای مصرفی</li><li>نتایج آزمایش‌ها و تصویربرداری‌های قبلی</li><li>یادداشت نشانه‌ها یا پرسش‌ها</li></ul><h4>گام بعدی</h4><p>برای هماهنگی بررسی دوره‌ای یا مشاوره درباره فاصله مناسب پیگیری، با کلینیک نوا تماس بگیرید. در این نسخه از وب‌سایت، ارتباط تنها از طریق تماس تلفنی انجام می‌شود.</p><p class=\"nx-note\">این مطلب جنبه آموزشی دارد و جایگزین مشاوره، تشخیص یا درمان پزشکی نیست.</p>"
  },
  "doctor": {
    "title": "[نام و نام خانوادگی پزشک]",
    "html": "<p class=\"nx-meta\">[تخصص و عنوان حرفه‌ای]</p><p>[معرفی کوتاه پزشک، رویکرد درمانی و حوزه‌های فعالیت را اینجا وارد کنید.]</p><p>در کلینیک نوا، هر مراجعه با یک گفت‌وگوی دقیق آغاز می‌شود؛ برنامه مراقبت بر اساس شرایط، سابقه و اهداف هر فرد تنظیم می‌شود و در جلسات بعدی مورد بازبینی قرار می‌گیرد.</p><p>تلاش ما این است که تصمیم‌های درمانی با توضیح روشن، زمان کافی و احترام به انتخاب مراجع گرفته شود.</p><h4>سوابق و مدارک</h4><ul class=\"nx-list\"><li>[مدرک یا سابقه حرفه‌ای اول]</li><li>[مدرک یا سابقه حرفه‌ای دوم]</li><li>[حوزه تخصصی یا دوره مرتبط]</li></ul><h4>مسیر حرفه‌ای</h4><ul class=\"nx-list\"><li>[عنوان مدرک یا دوره تخصصی] — [سال]، [دانشگاه یا مرکز آموزشی]</li><li>[عنوان سابقه حرفه‌ای] — [سال]، [بیمارستان یا کلینیک]</li><li>[عضویت یا گواهی] — [سال]، [انجمن یا مرجع صدور]</li></ul>"
  }
};
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
    panelTitle = panelTitle.replace(/\[نام و نام خانوادگی پزشک\]/g, CONFIG.doctorName || "");
    panelHtml = panelHtml.replace(/\[تخصص و عنوان حرفه‌ای\]/g, escapeHtml(CONFIG.doctorSpecialty || ""));
    panelHtml = panelHtml.replace(/\[نام و نام خانوادگی پزشک\]/g, escapeHtml(CONFIG.doctorName || ""));
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
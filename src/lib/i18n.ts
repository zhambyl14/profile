export const LANGS = ["kk", "ru", "en"] as const;
export type Lang = (typeof LANGS)[number];

type Project = {
  id: string;
  name: string;
  tag: string;
  stores?: boolean;
  stack: string[];
  desc: string;
  metrics: string[];
};

export type Dict = {
  nav: { work: string; experience: string; skills: string; contact: string };
  hero: {
    status: string;
    role: string;
    title: [string, string];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
  };
  stats: { value: number; suffix: string; label: string }[];
  services: { title: string; items: { name: string; text: string }[] };
  work: { kicker: string; title: string; text: string; projects: Project[] };
  experience: {
    kicker: string;
    title: string;
    items: { role: string; org: string; period: string; points: string[] }[];
  };
  skills: { kicker: string; title: string; groups: { name: string; items: string[] }[] };
  education: { title: string; uni: string; degree: string; langsTitle: string; langs: string[]; extraTitle: string; extra: string };
  contact: { kicker: string; title: string; text: string; phone: string; email: string; github: string; format: string };
  footer: string;
};

const stack = {
  tasu: ["Flutter", "Supabase", "Edge Functions", "Kaspi"],
  qoima: ["Flutter", "Firebase", "Kaspi"],
  imag: ["Flutter Desktop", "Firebase"],
  damu: ["Flutter", "Firebase"],
  nur: ["Next.js", "TypeScript", "Supabase"],
  tok: ["Next.js", "PostgreSQL", "Cloudflare"],
  sozqor: ["Flutter", "Supabase", "LLM"],
};

export const dict: Record<Lang, Dict> = {
  ru: {
    nav: { work: "Проекты", experience: "Опыт", skills: "Навыки", contact: "Контакты" },
    hero: {
      status: "Открыт к удалённой и гибридной работе",
      role: "Инженер-программист",
      title: ["Создаю продукты,", "которыми пользуются"],
      lead: "Разрабатываю мобильные и веб-продукты полного цикла: от первой встречи с заказчиком до продакшена, публикации в App Store и Google Play и поддержки.",
      ctaPrimary: "Смотреть проекты",
      ctaSecondary: "Связаться",
      location: "Астана, Казахстан",
    },
    stats: [
      { value: 7, suffix: "", label: "продуктов в продакшене" },
      { value: 350, suffix: "+", label: "реальных пользователей" },
      { value: 7241, suffix: "", label: "продажа через мою POS-систему" },
      { value: 5, suffix: "×", label: "ускорение процессов в Wildberries" },
    ],
    services: {
      title: "Что я делаю",
      items: [
        { name: "Мобильные приложения", text: "iOS и Android на Flutter, публикация в сторы" },
        { name: "Веб-платформы", text: "Next.js, TypeScript, админ-панели, e-commerce" },
        { name: "Боты и интеграции", text: "Telegram, WhatsApp, Kaspi Pay, вебхуки" },
        { name: "Автоматизация", text: "Скрипты и инструменты, которые экономят часы" },
      ],
    },
    work: {
      kicker: "Избранные проекты",
      title: "Работают у реальных клиентов",
      text: "Каждый проект я веду один: требования, архитектура, дизайн, разработка, релиз и поддержка.",
      projects: [
        { id: "tasu", name: "Tasu", tag: "Сооснователь · Маркетплейс", stores: true, stack: stack.tasu, desc: "Маркетплейс грузоперевозок: заказы в реальном времени, гибкое ценообразование, модерация исполнителей, AI-ассистент и онлайн-оплата Kaspi.", metrics: ["356 заказов", "65 клиентов", "41 исполнитель"] },
        { id: "qoima", name: "Qoima.kz", tag: "SaaS для ритейла", stores: true, stack: stack.qoima, desc: "Складской учёт, продажи, аналитика и собственный онлайн-магазин для розничных магазинов. Ролевая модель доступа и оплата Kaspi.", metrics: ["7 магазинов", "3 вышли в онлайн", "20 клиентов"] },
        { id: "imag", name: "iMag Kassa", tag: "POS-система на заказ", stack: stack.imag, desc: "Кассовая система для продуктового магазина с интеграцией торгового оборудования и собственным установщиком.", metrics: ["4 месяца в работе", "7 241 продажа", "0 жалоб"] },
        { id: "damu", name: "Damu High School", tag: "EdTech", stack: stack.damu, desc: "Платформа подготовки к ЕНТ для школы в Таразе: курсы, тесты, флешкарты и роли доступа.", metrics: ["130 учеников", "5 кураторов"] },
        { id: "nur", name: "Nur Karim", tag: "E-commerce", stack: stack.nur, desc: "Интернет-магазин книг: каталог, доставка, подарочные заказы, админ-панель и интерфейс на двух языках.", metrics: ["81 клиент", "58 оплаченных заказов"] },
        { id: "tok", name: "TOK BURGER", tag: "Платформа доставки", stack: stack.tok, desc: "Сайт, кухня, курьеры и админ-панель для сети на 5 филиалов. Автораспределение заказов, трекинг курьера, автоподтверждение оплаты Kaspi.", metrics: ["5 филиалов", "Realtime-трекинг"] },
        { id: "sozqor", name: "SozQor", tag: "EdTech · AI", stack: stack.sozqor, desc: "Приложение для изучения английского с геймификацией и AI-диалогами.", metrics: ["20+ пользователей"] },
      ],
    },
    experience: {
      kicker: "Опыт",
      title: "Где я работал",
      items: [
        { role: "Инженер-программист", org: "Фриланс и собственные продукты", period: "с 2025", points: ["7 продуктов в продакшене, 2 из них в App Store и Google Play", "Требования собираю лично на встречах с заказчиком", "Веду весь цикл: дизайн, код, тесты, релиз, поддержка"] },
        { role: "Аналитик-ревизор", org: "Wildberries (RWB) · Департамент внутреннего контроля и аналитики", period: "5 мес.", points: ["Расследование 900+ обращений в месяц по товародвижению в странах СНГ", "Браузерные расширения на JavaScript и Python-скрипты для внутренних API: обработка стала быстрее в 5 раз", "Передал инструменты коллегам и обучил их"] },
        { role: "IT-специалист оргкомитета (практика)", org: "35-я Международная биологическая олимпиада IBO 2024 · Министерство просвещения РК", period: "июль 2024", points: ["Система мониторинга участников, подсчёта баллов и сайт олимпиады", "Подготовка площадки и поддержка иностранных делегаций", "Сертификат министра просвещения РК"] },
      ],
    },
    skills: {
      kicker: "Компетенции",
      title: "Стек и практики",
      groups: [
        { name: "Разработка", items: ["Flutter", "Dart", "Next.js", "React", "TypeScript", "Python"] },
        { name: "Бэкенд и данные", items: ["PostgreSQL", "Supabase", "Firebase", "SQL", "REST API", "Cloudflare"] },
        { name: "Продукт", items: ["Архитектура", "Ролевые модели", "Realtime", "Kaspi Pay", "Чат-боты", "App Store / Google Play"] },
        { name: "Практики", items: ["Git / GitHub", "Автотесты", "AI-инструменты", "Работа с заказчиком"] },
      ],
    },
    education: { title: "Образование", uni: "Astana IT University", degree: "Бакалавр, Software Engineering, 2022–2025. Обучение на английском.", langsTitle: "Языки", langs: ["Казахский: родной", "Русский: свободно", "Английский: B1"], extraTitle: "Робототехника", extra: "Чемпион Жамбылской области и г. Тараз (казахские национальные игры), вёл занятия на курсе робототехники." },
    contact: { kicker: "Контакты", title: "Есть задача? Давайте обсудим", text: "Приложение, сайт, бот или автоматизация. Отвечаю в течение дня.", phone: "Телефон", email: "Почта", github: "GitHub", format: "Удалённо / гибрид" },
    footer: "Спроектировано и разработано Магжаном Жамбылом",
  },
  kk: {
    nav: { work: "Жобалар", experience: "Тәжірибе", skills: "Дағдылар", contact: "Байланыс" },
    hero: {
      status: "Қашықтан және гибрид жұмысқа ашықпын",
      role: "Инженер-бағдарламашы",
      title: ["Адамдар шынымен", "қолданатын өнімдер жасаймын"],
      lead: "Мобильді және веб-өнімдерді толық циклмен жасаймын: тапсырыс берушімен алғашқы кездесуден бастап продакшенге, App Store мен Google Play-ге шығаруға және қолдауға дейін.",
      ctaPrimary: "Жобаларды көру",
      ctaSecondary: "Байланысу",
      location: "Астана, Қазақстан",
    },
    stats: [
      { value: 7, suffix: "", label: "продакшендегі өнім" },
      { value: 350, suffix: "+", label: "нақты қолданушы" },
      { value: 7241, suffix: "", label: "менің POS-жүйем арқылы сатылым" },
      { value: 5, suffix: "×", label: "Wildberries-те процесті жылдамдату" },
    ],
    services: {
      title: "Не жасаймын",
      items: [
        { name: "Мобильді қосымшалар", text: "Flutter-де iOS пен Android, сторларға шығару" },
        { name: "Веб-платформалар", text: "Next.js, TypeScript, админ-панель, e-commerce" },
        { name: "Боттар мен интеграциялар", text: "Telegram, WhatsApp, Kaspi Pay, вебхуктар" },
        { name: "Автоматтандыру", text: "Сағаттарды үнемдейтін скрипттер мен құралдар" },
      ],
    },
    work: {
      kicker: "Таңдаулы жобалар",
      title: "Нақты клиенттерде жұмыс істеп тұр",
      text: "Әр жобаны өзім жүргіземін: талаптар, архитектура, дизайн, әзірлеу, релиз және қолдау.",
      projects: [
        { id: "tasu", name: "Tasu", tag: "Тең құрылтайшы · Маркетплейс", stores: true, stack: stack.tasu, desc: "Жүк тасымалдау маркетплейсі: нақты уақыттағы заказдар, икемді баға, орындаушыларды модерациялау, AI-көмекші және Kaspi арқылы онлайн-төлем.", metrics: ["356 заказ", "65 клиент", "41 орындаушы"] },
        { id: "qoima", name: "Qoima.kz", tag: "Ритейлге арналған SaaS", stores: true, stack: stack.qoima, desc: "Дүкендерге арналған қойма есебі, сатылым, аналитика және жеке онлайн-дүкен. Рөлдік қолжетімділік пен Kaspi төлемі.", metrics: ["7 дүкен", "3-еуі онлайнға шықты", "20 клиент"] },
        { id: "imag", name: "iMag Kassa", tag: "Тапсырыспен POS-жүйе", stack: stack.imag, desc: "Азық-түлік дүкеніне арналған кассалық жүйе: сауда құрылғыларымен интеграция және жеке орнатушы.", metrics: ["4 ай жұмыста", "7 241 сатылым", "0 шағым"] },
        { id: "damu", name: "Damu High School", tag: "EdTech", stack: stack.damu, desc: "Тараздағы мектепке арналған ҰБТ-ға дайындық платформасы: курстар, тесттер, флешкарталар және рөлдер.", metrics: ["130 оқушы", "5 куратор"] },
        { id: "nur", name: "Nur Karim", tag: "E-commerce", stack: stack.nur, desc: "Кітап интернет-дүкені: каталог, жеткізу, сыйлық тапсырыстары, админ-панель және екі тілді интерфейс.", metrics: ["81 клиент", "58 төленген тапсырыс"] },
        { id: "tok", name: "TOK BURGER", tag: "Жеткізу платформасы", stack: stack.tok, desc: "5 филиалды желіге арналған сайт, ас үй, курьерлер және админ-панель. Заказдарды автоматты бөлу, курьерді бақылау, Kaspi төлемін автоматты растау.", metrics: ["5 филиал", "Realtime бақылау"] },
        { id: "sozqor", name: "SozQor", tag: "EdTech · AI", stack: stack.sozqor, desc: "Геймификация мен AI-диалогтар арқылы ағылшын тілін үйрететін қосымша.", metrics: ["20+ қолданушы"] },
      ],
    },
    experience: {
      kicker: "Тәжірибе",
      title: "Қайда жұмыс істедім",
      items: [
        { role: "Инженер-бағдарламашы", org: "Фриланс және жеке өнімдер", period: "2025 жылдан", points: ["Продакшенде 7 өнім, оның 2-еуі App Store мен Google Play-де", "Талаптарды тапсырыс берушімен кездесіп, өзім жинаймын", "Бүкіл циклды жүргіземін: дизайн, код, тест, релиз, қолдау"] },
        { role: "Аналитик-ревизор", org: "Wildberries (RWB) · Ішкі бақылау және аналитика департаменті", period: "5 ай", points: ["ТМД елдеріндегі тауар қозғалысы бойынша айына 900+ өтінішті тексеру", "JavaScript кеңейтімдері мен ішкі API-ге арналған Python скрипттері: жұмыс 5 есе жылдамдады", "Құралдарымды әріптестеріме беріп, үйреттім"] },
        { role: "Ұйымдастыру комитетінің IT-маманы (практика)", org: "35-ші Халықаралық биология олимпиадасы IBO 2024 · ҚР Оқу-ағарту министрлігі", period: "2024 жыл, шілде", points: ["Қатысушыларды бақылау, балл есептеу жүйесі және олимпиада сайты", "Алаңды дайындау және шетелдік делегацияларға қолдау", "ҚР Оқу-ағарту министрінің сертификаты"] },
      ],
    },
    skills: {
      kicker: "Құзыреттер",
      title: "Стек және тәжірибелер",
      groups: [
        { name: "Әзірлеу", items: ["Flutter", "Dart", "Next.js", "React", "TypeScript", "Python"] },
        { name: "Бэкенд және деректер", items: ["PostgreSQL", "Supabase", "Firebase", "SQL", "REST API", "Cloudflare"] },
        { name: "Өнім", items: ["Архитектура", "Рөлдік модельдер", "Realtime", "Kaspi Pay", "Чат-боттар", "App Store / Google Play"] },
        { name: "Тәжірибелер", items: ["Git / GitHub", "Автотесттер", "AI-құралдар", "Тапсырыс берушімен жұмыс"] },
      ],
    },
    education: { title: "Білімі", uni: "Astana IT University", degree: "Бакалавр, Software Engineering, 2022–2025. Ағылшын тілінде оқыдым.", langsTitle: "Тілдер", langs: ["Қазақ тілі: ана тілі", "Орыс тілі: еркін", "Ағылшын тілі: B1"], extraTitle: "Робототехника", extra: "Жамбыл облысы мен Тараз қаласының чемпионы (ұлттық ойындар), робототехника курсында сабақ бердім." },
    contact: { kicker: "Байланыс", title: "Тапсырма бар ма? Талқылайық", text: "Қосымша, сайт, бот немесе автоматтандыру. Бір күн ішінде жауап беремін.", phone: "Телефон", email: "Пошта", github: "GitHub", format: "Қашықтан / гибрид" },
    footer: "Мағжан Жамбыл жобалап, әзірлеген",
  },
  en: {
    nav: { work: "Work", experience: "Experience", skills: "Skills", contact: "Contact" },
    hero: {
      status: "Open to remote and hybrid roles",
      role: "Software Engineer",
      title: ["I build products", "people actually use"],
      lead: "I design, build and ship mobile and web products end to end: from the first client meeting to production, App Store and Google Play releases, and ongoing support.",
      ctaPrimary: "View work",
      ctaSecondary: "Get in touch",
      location: "Astana, Kazakhstan",
    },
    stats: [
      { value: 7, suffix: "", label: "products in production" },
      { value: 350, suffix: "+", label: "real users" },
      { value: 7241, suffix: "", label: "sales through my POS system" },
      { value: 5, suffix: "×", label: "faster processes at Wildberries" },
    ],
    services: {
      title: "What I do",
      items: [
        { name: "Mobile apps", text: "iOS and Android with Flutter, store releases" },
        { name: "Web platforms", text: "Next.js, TypeScript, admin panels, e-commerce" },
        { name: "Bots & integrations", text: "Telegram, WhatsApp, Kaspi Pay, webhooks" },
        { name: "Automation", text: "Scripts and tools that save hours every day" },
      ],
    },
    work: {
      kicker: "Selected work",
      title: "Running for real customers",
      text: "I own every project solo: requirements, architecture, design, development, release and support.",
      projects: [
        { id: "tasu", name: "Tasu", tag: "Co-founder · Marketplace", stores: true, stack: stack.tasu, desc: "Freight marketplace with real-time orders, flexible pricing, driver moderation, an AI assistant and Kaspi online payments.", metrics: ["356 orders", "65 clients", "41 drivers"] },
        { id: "qoima", name: "Qoima.kz", tag: "Retail SaaS", stores: true, stack: stack.qoima, desc: "Inventory, sales, analytics and a built-in online store for retail shops, with role-based access and Kaspi payments.", metrics: ["7 stores", "3 went online", "20 clients"] },
        { id: "imag", name: "iMag Kassa", tag: "Custom POS system", stack: stack.imag, desc: "Point-of-sale system for a grocery store with retail hardware integration and its own installer.", metrics: ["4 months live", "7,241 sales", "0 complaints"] },
        { id: "damu", name: "Damu High School", tag: "EdTech", stack: stack.damu, desc: "Exam-prep platform for a school in Taraz: courses, tests, flashcards and role-based access.", metrics: ["130 students", "5 tutors"] },
        { id: "nur", name: "Nur Karim", tag: "E-commerce", stack: stack.nur, desc: "Online bookstore with catalog, delivery, gift orders, admin panel and a bilingual interface.", metrics: ["81 customers", "58 paid orders"] },
        { id: "tok", name: "TOK BURGER", tag: "Delivery platform", stack: stack.tok, desc: "Website, kitchen, courier and admin apps for a 5-branch chain. Automatic dispatch, live courier tracking, automatic Kaspi payment confirmation.", metrics: ["5 branches", "Realtime tracking"] },
        { id: "sozqor", name: "SozQor", tag: "EdTech · AI", stack: stack.sozqor, desc: "English learning app with gamification and AI conversations.", metrics: ["20+ users"] },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Where I've worked",
      items: [
        { role: "Software Engineer", org: "Freelance & own products", period: "2025 – now", points: ["7 products in production, 2 on the App Store and Google Play", "I gather requirements in person with every client", "I run the full cycle: design, code, tests, release, support"] },
        { role: "Audit Analyst", org: "Wildberries (RWB) · Internal Control & Analytics", period: "5 months", points: ["Investigated 900+ cases a month on goods movement across CIS countries", "Built JavaScript browser extensions and Python scripts on internal APIs: 5× faster processing", "Rolled the tools out to colleagues and trained them"] },
        { role: "IT Specialist, Organizing Committee (internship)", org: "35th International Biology Olympiad IBO 2024 · Ministry of Education of Kazakhstan", period: "July 2024", points: ["Participant monitoring, scoring system and the olympiad website", "Venue setup and support for international delegations", "Certificate from the Minister of Education"] },
      ],
    },
    skills: {
      kicker: "Expertise",
      title: "Stack & practices",
      groups: [
        { name: "Development", items: ["Flutter", "Dart", "Next.js", "React", "TypeScript", "Python"] },
        { name: "Backend & data", items: ["PostgreSQL", "Supabase", "Firebase", "SQL", "REST API", "Cloudflare"] },
        { name: "Product", items: ["Architecture", "Role-based access", "Realtime", "Kaspi Pay", "Chatbots", "App Store / Google Play"] },
        { name: "Practices", items: ["Git / GitHub", "Automated tests", "AI tooling", "Client collaboration"] },
      ],
    },
    education: { title: "Education", uni: "Astana IT University", degree: "BSc, Software Engineering, 2022–2025. Taught in English.", langsTitle: "Languages", langs: ["Kazakh: native", "Russian: fluent", "English: B1"], extraTitle: "Robotics", extra: "Champion of Zhambyl region and Taraz city (Kazakh national games), taught classes in a robotics course." },
    contact: { kicker: "Contact", title: "Have a project? Let's talk", text: "App, website, bot or automation. I reply within a day.", phone: "Phone", email: "Email", github: "GitHub", format: "Remote / hybrid" },
    footer: "Designed and built by Magzhan Zhambyl",
  },
};

export const NAME: Record<Lang, string> = { kk: "Мағжан Жамбыл", ru: "Магжан Жамбыл", en: "Magzhan Zhambyl" };
export const CONTACT = {
  phone: "+7 708 005 14 16",
  phoneHref: "tel:+77080051416",
  whatsapp: "+7 747 400 53 47",
  whatsappHref: "https://wa.me/77474005347",
  telegram: "@zhambyl_magzhan",
  telegramHref: "https://t.me/zhambyl_magzhan",
  email: "aergvae@bk.ru",
  github: "github.com/zhambyl14",
};

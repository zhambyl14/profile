import type { Lang } from "./i18n";

export type LinkKind = "web" | "appstore" | "play";
export type ProjectLink = { kind: LinkKind; href: string };

/** Public links per project (shown on cards and in the details dialog). */
export const LINKS: Record<string, ProjectLink[]> = {
  tasu: [
    { kind: "appstore", href: "https://apps.apple.com/kz/app/tasu/id6790929560" },
    { kind: "play", href: "https://play.google.com/store/apps/details?id=kz.gazelgo.app" },
  ],
  qoima: [{ kind: "play", href: "https://play.google.com/store/apps/details?id=com.jambyl.qoima.qoima" }],
  nur: [{ kind: "web", href: "https://nur-karim-kz.vercel.app/" }],
  tok: [{ kind: "web", href: "https://toq-burger.tarazblt12005.workers.dev/" }],
};

type Details = { role: string; features: string[]; note?: string };

/** Extended project descriptions for the details dialog. */
export const DETAILS: Record<Lang, Record<string, Details>> = {
  ru: {
    tasu: {
      role: "Сооснователь и единственный разработчик: дизайн, мобильное приложение, бэкенд, публикация в сторы.",
      features: [
        "Три роли: клиент, исполнитель и модератор",
        "Выбор маршрута на карте и статус заказа в реальном времени",
        "Две модели цены: торг (встречные предложения) и мгновенная цена по расстоянию",
        "Модерация документов исполнителей, рейтинг и отзывы",
        "AI-ассистент для пользователей",
        "Онлайн-оплата Kaspi с подтверждением через вебхук",
      ],
    },
    qoima: {
      role: "Единственный разработчик: от идеи и дизайна до бэкенда и публикации.",
      features: [
        "Шесть ролей: суперадмин, владелец магазина, продавец, курьер, клиент и гость",
        "Склад, заказы и аналитика в одном приложении",
        "Собственная онлайн-витрина магазина внутри маркетплейса",
        "Синхронизация данных в реальном времени",
        "Оплата Kaspi с подтверждением через вебхук",
      ],
    },
    imag: {
      role: "Разработал на заказ для мясного магазина: требования, разработка, установка и поддержка.",
      features: [
        "Кассовая программа для Windows",
        "Интеграция с электронными весами через COM-порт",
        "Печать чеков на принтере Xprinter",
        "Установщик и инструменты диагностики: клиент ставит программу сам",
      ],
      note: "Сайта нет: это настольная программа, которая работает в магазине.",
    },
    damu: {
      role: "Единственный разработчик. Требования собирал вместе со школой.",
      features: [
        "Курсы, тесты и флешкарты для подготовки к ЕНТ",
        "Профиль ученика и отслеживание прогресса",
        "Роли online, offline и admin, доступ управляется через Firestore",
      ],
      note: "Приложение внутреннее, для учеников школы.",
    },
    nur: {
      role: "Единственный разработчик: дизайн, фронтенд, бэкенд и админ-панель.",
      features: [
        "Бумажные и электронные книги",
        "Доставка курьером по Астане и Казпочтой по стране",
        "Подарочные заказы «Подари другу»",
        "Вход и уведомления через Telegram-бот (вебхук)",
        "Полная админ-панель, роль администратора выдаёт только серверный скрипт",
        "Тёмная и светлая тема, казахский и русский языки",
      ],
    },
    tok: {
      role: "Спроектировал и разработал всю платформу.",
      features: [
        "Сайт заказа для клиентов и панели кухни, курьера и админа",
        "Автоматическое распределение заказов по курьерам",
        "Отслеживание курьера на карте в реальном времени",
        "Вход по коду через WhatsApp или Telegram",
        "Автоматическое подтверждение оплаты Kaspi",
        "Бизнес-логика и база данных покрыты автотестами",
      ],
    },
    sozqor: {
      role: "Единственный разработчик и дизайнер: собственная дизайн-система, приложение и серверная часть.",
      features: [
        "Батлы, XP, ежедневные награды и сезонный путь миссий",
        "Тематические наборы слов: IELTS, Tech, путешествия",
        "AI-диалоги по сценариям (с локальным резервом, если сервер не отвечает)",
        "Тренировка произношения и недельный отчёт о прогрессе",
      ],
    },
  },
  kk: {
    tasu: {
      role: "Тең құрылтайшы және жалғыз әзірлеуші: дизайн, мобильді қосымша, бэкенд, сторларға шығару.",
      features: [
        "Үш рөл: клиент, орындаушы және модератор",
        "Картадан маршрут таңдау және заказ күйін нақты уақытта бақылау",
        "Екі баға моделі: саудаласу және қашықтыққа қарай лезде есептелетін баға",
        "Орындаушы құжаттарын модерациялау, рейтинг пен пікірлер",
        "Қолданушыларға арналған AI-көмекші",
        "Kaspi онлайн-төлемі, вебхук арқылы расталады",
      ],
    },
    qoima: {
      role: "Жалғыз әзірлеуші: идея мен дизайннан бастап бэкенд пен сторға шығаруға дейін.",
      features: [
        "Алты рөл: суперадмин, дүкен иесі, сатушы, курьер, клиент және қонақ",
        "Қойма, тапсырыстар мен аналитика бір қосымшада",
        "Маркетплейс ішіндегі дүкеннің жеке онлайн-витринасы",
        "Деректер нақты уақытта синхрондалады",
        "Kaspi төлемі, вебхук арқылы расталады",
      ],
    },
    imag: {
      role: "Ет дүкенінің тапсырысымен жасадым: талаптар, әзірлеу, орнату және қолдау.",
      features: [
        "Windows-қа арналған касса бағдарламасы",
        "Электрондық таразымен COM-порт арқылы интеграция",
        "Xprinter принтерінен чек басып шығару",
        "Орнатушы мен диагностика құралдары: клиент бағдарламаны өзі орната алады",
      ],
      note: "Сайты жоқ: бұл дүкенде жұмыс істейтін компьютер бағдарламасы.",
    },
    damu: {
      role: "Жалғыз әзірлеуші. Талаптарды мектеппен бірге жинадым.",
      features: [
        "ҰБТ-ға дайындыққа арналған курстар, тесттер және флешкарталар",
        "Оқушы профилі және прогресті бақылау",
        "Online, offline және admin рөлдері, қолжетімділік Firestore арқылы басқарылады",
      ],
      note: "Қосымша мектеп оқушыларына арналған, ішкі пайдалануда.",
    },
    nur: {
      role: "Жалғыз әзірлеуші: дизайн, фронтенд, бэкенд және админ-панель.",
      features: [
        "Қағаз және электронды кітаптар",
        "Астана бойынша курьер, ел бойынша Қазпошта арқылы жеткізу",
        "«Досыңа сыйла» сыйлық тапсырыстары",
        "Telegram бот арқылы тіркелу және хабарламалар (вебхук)",
        "Толық админ-панель, админ рөлін тек серверлік скрипт береді",
        "Қараңғы және ашық режим, қазақ және орыс тілдері",
      ],
    },
    tok: {
      role: "Бүкіл платформаны жобалап, әзірледім.",
      features: [
        "Клиенттерге арналған тапсырыс сайты, ас үй, курьер және админ панельдері",
        "Заказдарды курьерлерге автоматты бөлу",
        "Курьерді картада нақты уақытта бақылау",
        "WhatsApp немесе Telegram арқылы кодпен кіру",
        "Kaspi төлемін автоматты растау",
        "Бизнес-логика мен дерекқор автотесттермен тексерілген",
      ],
    },
    sozqor: {
      role: "Жалғыз әзірлеуші және дизайнер: жеке дизайн-жүйе, қосымша және серверлік бөлік.",
      features: [
        "Баттлдар, XP, күнделікті сыйлықтар және маусымдық миссиялар жолы",
        "Тақырыптық сөз топтамалары: IELTS, Tech, саяхат",
        "Сценарий бойынша AI-диалогтар (сервер жауап бермесе, жергілікті резерв)",
        "Айтылымды жаттықтыру және апталық прогресс есебі",
      ],
    },
  },
  en: {
    tasu: {
      role: "Co-founder and sole developer: design, mobile app, backend and store releases.",
      features: [
        "Three roles: client, driver and moderator",
        "Route picking on a map and real-time order status",
        "Two pricing models: bidding with counter-offers and instant distance-based price",
        "Driver document moderation, ratings and reviews",
        "AI assistant for users",
        "Kaspi online payments confirmed via webhook",
      ],
    },
    qoima: {
      role: "Sole developer, from idea and design to backend and store release.",
      features: [
        "Six roles: super admin, store owner, seller, courier, customer and guest",
        "Inventory, orders and analytics in one app",
        "Each store gets its own storefront inside the marketplace",
        "Real-time data sync",
        "Kaspi payments confirmed via webhook",
      ],
    },
    imag: {
      role: "Built to order for a butcher shop: requirements, development, installation and support.",
      features: [
        "Point-of-sale app for Windows",
        "Electronic scale integration over a COM port",
        "Receipt printing on an Xprinter",
        "Installer and diagnostics tools so the client can set it up alone",
      ],
      note: "No public website: it is a desktop app running in the store.",
    },
    damu: {
      role: "Sole developer. Gathered requirements together with the school.",
      features: [
        "Courses, tests and flashcards for the national exam (UNT)",
        "Student profile and progress tracking",
        "Online, offline and admin roles managed through Firestore",
      ],
      note: "Internal app for the school's students.",
    },
    nur: {
      role: "Sole developer: design, frontend, backend and admin panel.",
      features: [
        "Paper and e-books",
        "Courier delivery in Astana and Kazpost delivery nationwide",
        "“Gift to a friend” orders",
        "Sign-in and notifications through a Telegram bot (webhook)",
        "Full admin panel; the admin role is granted only by a server script",
        "Dark and light themes, Kazakh and Russian",
      ],
    },
    tok: {
      role: "Designed and built the whole platform.",
      features: [
        "Customer ordering site plus kitchen, courier and admin apps",
        "Automatic order dispatch to couriers",
        "Live courier tracking on a map",
        "Code sign-in via WhatsApp or Telegram",
        "Automatic Kaspi payment confirmation",
        "Business logic and database covered by automated tests",
      ],
    },
    sozqor: {
      role: "Sole developer and designer: custom design system, app and server side.",
      features: [
        "Battles, XP, daily rewards and a seasonal mission path",
        "Themed word sets: IELTS, Tech, travel",
        "Scenario-based AI conversations (with a local fallback if the server is down)",
        "Pronunciation practice and a weekly progress report",
      ],
    },
  },
};

export const UI: Record<Lang, { more: string; role: string; built: string; results: string; stack: string; close: string; web: string }> = {
  ru: { more: "Подробнее", role: "Моя роль", built: "Что сделано", results: "Результат", stack: "Стек", close: "Закрыть", web: "Открыть сайт" },
  kk: { more: "Толығырақ", role: "Менің рөлім", built: "Не жасалды", results: "Нәтиже", stack: "Стек", close: "Жабу", web: "Сайтты ашу" },
  en: { more: "Details", role: "My role", built: "What I built", results: "Results", stack: "Stack", close: "Close", web: "Open website" },
};

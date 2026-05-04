export type Category =
  | "MARKETS"
  | "TECH"
  | "CRYPTO"
  | "MACRO"
  | "BUSINESS"
  | "MONGOLIA";

export const categoryLabels: Record<Category, string> = {
  MARKETS: "ЗАХ ЗЭЭЛ",
  TECH: "ТЕХНОЛОГИ",
  CRYPTO: "КРИПТО",
  MACRO: "МАКРО",
  BUSINESS: "БИЗНЕС",
  MONGOLIA: "МОНГОЛ",
};

export interface TickerInstrument {
  symbol: string;
  value: string;
  change: number;
}

export interface Breaking {
  headline: string;
  summary: string;
}

export interface HeroArticle {
  category: Category;
  headline: string;
  summary: string;
  source: string;
  timeAgo: string;
  readTime: string;
  chartPoints: number[];
}

export interface SecondaryArticle {
  id: string;
  category: Category;
  headline: string;
  timeAgo: string;
  readTime: string;
}

export type ArticlePattern =
  | "chart"
  | "circuit"
  | "spark"
  | "pulse"
  | "cube"
  | "coin";

export interface FeedArticle {
  id: string;
  category: Category;
  headline: string;
  excerpt: string;
  source: string;
  timeAgo: string;
  pattern: ArticlePattern;
}

export interface MarketItem {
  label: string;
  value: string;
  change: number;
}

export interface MarketCategory {
  title: string;
  items: MarketItem[];
}

export interface LiveEventData {
  title: string;
  scheduledFor: string;
  description: string;
}

export const ticker: TickerInstrument[] = [
  { symbol: "S&P 500", value: "5,247.18", change: 0.42 },
  { symbol: "NASDAQ", value: "16,891.44", change: 0.78 },
  { symbol: "DOW", value: "39,214.55", change: -0.12 },
  { symbol: "BTC", value: "$68,420", change: 1.84 },
  { symbol: "ETH", value: "$3,812", change: 2.31 },
  { symbol: "MNT/USD", value: "3,475.00", change: -0.08 },
  { symbol: "GOLD", value: "$2,381.50", change: 0.56 },
  { symbol: "OIL WTI", value: "$81.72", change: -0.91 },
  { symbol: "USD/EUR", value: "0.9274", change: 0.14 },
  { symbol: "NVDA", value: "$895.44", change: 2.15 },
  { symbol: "AAPL", value: "$224.18", change: 0.38 },
  { symbol: "TSLA", value: "$251.09", change: -1.27 },
];

export const breaking: Breaking = {
  headline: "Fed хүүг 0.25 пунктээр бууруулав",
  summary:
    "Powell-ийн илтгэлд инфляц зорилтот түвшинд ойртож буйг баталгаажуулав.",
};

export const hero: HeroArticle = {
  category: "MARKETS",
  headline:
    "Fed зөөлөн зогсоолын зам руу: хүү бууруулах мөчлөг эхэллээ",
  summary:
    "Powell Жаксон Хоулд хэлсэн илтгэлдээ инфляцийн дарамт намжиж, хөдөлмөрийн зах зээл тэнцвэржсэнийг дурдсан. Зах зээл 2026 оны эцэс гэхэд нэмэлт гурван удаа буулгах хүлээлттэй байна.",
  source: "Bloomberg",
  timeAgo: "23 минутын өмнө",
  readTime: "4 мин уншина",
  chartPoints: [
    5100, 5120, 5118, 5145, 5160, 5155, 5180, 5195, 5210, 5220, 5218, 5235,
    5247,
  ],
};

export const secondaryArticles: SecondaryArticle[] = [
  {
    id: "sec-1",
    category: "TECH",
    headline:
      "OpenAI шинэ загвартай зэрэгцэн enterprise license-гоо цэгцлэв",
    timeAgo: "1 цагийн өмнө",
    readTime: "3 мин",
  },
  {
    id: "sec-2",
    category: "CRYPTO",
    headline:
      "Bitcoin 70,000 долларыг дахин даван гарахыг зах зээл хүлээж байна",
    timeAgo: "2 цагийн өмнө",
    readTime: "5 мин",
  },
  {
    id: "sec-3",
    category: "MONGOLIA",
    headline:
      "Rio Tinto-гийн Оюу Толгойн коппер экспорт дараагийн улиралд нэмэгдэнэ",
    timeAgo: "3 цагийн өмнө",
    readTime: "6 мин",
  },
];

export const feedArticles: FeedArticle[] = [
  {
    id: "feed-1",
    category: "MARKETS",
    headline:
      "Nvidia-гийн орлого Wall Street-ийн таамгийг давж, AI-гийн эрэлт улам өссөнийг харууллаа",
    excerpt:
      "Data center бизнесийн орлого улирлын хувьд 158% өслөө. Компанийн удирдлага 2026 оны эхэнд шинэ Blackwell чип дэлгэрэнгүй танилцуулна гэв.",
    source: "Reuters",
    timeAgo: "45 минутын өмнө",
    pattern: "chart",
  },
  {
    id: "feed-2",
    category: "TECH",
    headline:
      "Anthropic-ийн Claude загвар enterprise шалгуурыг давж баталгаажив",
    excerpt:
      "Шинэ 1M токены контекст цонх болон агент ажиллагаа нь санхүү, эрх зүйн салбарт урт бичиг баримт боловсруулахад зориулагдсан.",
    source: "FT",
    timeAgo: "1 цагийн өмнө",
    pattern: "circuit",
  },
  {
    id: "feed-3",
    category: "MACRO",
    headline:
      "ECB хүүгээ 25 базис пунктээр бууруулж үргэлжлүүлэх дохио өглөө",
    excerpt:
      "Lagarde инфляцийн зорилтоо дэмжсэн ч эрсдэл үлдсэнийг анхаарууллаа. Euro-гийн ханш долларын эсрэг 0.45%-иар суларлаа.",
    source: "Bloomberg",
    timeAgo: "2 цагийн өмнө",
    pattern: "spark",
  },
  {
    id: "feed-4",
    category: "CRYPTO",
    headline: "Ethereum ETF-ийн цэвэр орох урсгал 4 тэрбум долларт хүрлээ",
    excerpt:
      "Сүүлийн хоёр долоо хоногт институцийн эрэлт тогтвортой өсч байгаа нь Ether-ийн on-chain идэвхжилтийг дэмжлээ.",
    source: "CoinDesk",
    timeAgo: "3 цагийн өмнө",
    pattern: "coin",
  },
  {
    id: "feed-5",
    category: "BUSINESS",
    headline:
      "Microsoft-ийн cloud орлого анх удаа 20 тэрбум долларыг давлаа",
    excerpt:
      "Azure-ийн AI workload-д зориулсан GPU capacity-г нэмэхээр $80 тэрбум төлөвлөсөн. Ашгийн маржин 44%-д хадгалагдлаа.",
    source: "WSJ",
    timeAgo: "4 цагийн өмнө",
    pattern: "cube",
  },
  {
    id: "feed-6",
    category: "MONGOLIA",
    headline: "МОНГОЛБАНК бодлогын хүүг 11%-д тогтмол үлдээлээ",
    excerpt:
      "Инфляц 6.8% хүртэл буурсан ч ирэх улиралд төсвийн өргөтгөлийн эрсдэл байгааг үндэслэн зөөлрүүлэх алхмаа саатууллаа.",
    source: "Монголбанк",
    timeAgo: "5 цагийн өмнө",
    pattern: "pulse",
  },
];

export const mostRead: string[] = [
  "АСЕАН+3 Вашингтон, Бээжингийн өрсөлдөөнд шинэ зангилаа үүсгэв",
  "Tesla-гийн Q3 тоо зах зээлийн таамгийг давсан ч маржин буурлаа",
  "Nvidia-гийн Blackwell захиалга сарын дотор 40 тэрбум доллар хүрчээ",
  "Монголбанкны гадаад валютын нөөц 5.4 тэрбум долларт хүрэв",
  "Bitcoin халалтыг хэрхэн тайлбарлах вэ — гурван үзүүлэлт",
];

/** @deprecated Replaced by live `instruments` in MarketSnapshot (Phase 5 followup). Remove in Phase 6. */
export const markets: MarketCategory[] = [
  {
    title: "Индексүүд",
    items: [
      { label: "S&P 500", value: "5,247.18", change: 0.42 },
      { label: "NASDAQ", value: "16,891.44", change: 0.78 },
      { label: "DOW", value: "39,214.55", change: -0.12 },
    ],
  },
  {
    title: "Крипто",
    items: [
      { label: "BTC", value: "$68,420", change: 1.84 },
      { label: "ETH", value: "$3,812", change: 2.31 },
      { label: "SOL", value: "$174.22", change: -0.67 },
    ],
  },
  {
    title: "Монгол",
    items: [
      { label: "MNT/USD", value: "3,475.00", change: -0.08 },
      { label: "Оюу Толгой", value: "4,120₮", change: 1.21 },
    ],
  },
  {
    title: "Түүхий эд",
    items: [
      { label: "Алт", value: "$2,381.50", change: 0.56 },
      { label: "OIL WTI", value: "$81.72", change: -0.91 },
      { label: "Зэс", value: "$4.18", change: 0.33 },
    ],
  },
];

export const liveEvent: LiveEventData = {
  title: "Fed дарга Powell-ийн шууд хэвлэлийн бага хурал",
  scheduledFor: "Өнөөдөр 21:30",
  description:
    "Хүүгийн бодлогын шинэ шийдвэр, инфляцийн төсөөллийг танилцуулна.",
};

import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Мэдээллийн эх сурвалж — Orange News",
  description:
    "Orange News-ийн зах зээлийн мэдээ, индекс, дата эх сурвалжуудын жагсаалт болон оюуны өмчийн хүндэтгэлийн зарчмууд.",
};

export default function DataSourcesPage() {
  return (
    <LegalPageLayout
      title="Мэдээллийн эх сурвалж ба Өгөгдөл"
      intro="Orange News нь олон улсын зах зээлийн мэдээ, индексүүдийг дэлхийн нэр хүндтэй эх сурвалжуудаас авч, эсвэл боловсруулан дамжуулдаг. Бид эх сурвалжийн оюуны өмчийг бүрэн хүндэтгэж, анхдагч эх сурвалж руу чиглэсэн холбоосыг үргэлж нээлттэй үлдээдэг."
    >
      <h2>Бидний хэрэглэдэг гол эх сурвалжууд</h2>

      <h3>Зах зээлийн мэдээ, дүн шинжилгээ</h3>
      <ul>
        <li>
          <a
            href="https://www.bloomberg.com/markets"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bloomberg Markets
          </a>{" "}
          — Олон улсын санхүү, эдийн засгийн ерөнхий чиг хандлага
        </li>
        <li>
          <a
            href="https://www.reuters.com/finance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reuters Finance
          </a>{" "}
          — Дэлхийн зах зээлийн шуурхай мэдээлэл
        </li>
      </ul>

      <h3>Криптовалютын зах зээл</h3>
      <ul>
        <li>
          <a
            href="https://www.coindesk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoinDesk
          </a>{" "}
          — Криптовалютын мэдээ
        </li>
        <li>
          <a
            href="https://www.binance.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Binance
          </a>{" "}
          — Криптовалютын зах зээлийн үнэлгээ
        </li>
      </ul>

      <h2>Дата ба ил тод байдал</h2>
      <p>
        Зах зээлийн дата (индекс, ханш, крипто үнэ) нь технологийн шалтгаанаар
        хоцролттой (delayed) ирж болзошгүй. Бодит цагийн (real-time) дата
        шаардлагатай хэрэглэгчид анхдагч эх сурвалж дээр шууд хандахыг зөвлөж
        байна.
      </p>

      <h2>Оюуны өмчийн хүндэтгэл</h2>
      <p>
        Бид эдгээр эх сурвалжуудын оюуны өмчийг хүндэтгэж, дараах зарчмуудыг
        баримталдаг:
      </p>
      <ul>
        <li>Эх сурвалжийн нэрийг тодорхой дурдах</li>
        <li>Анхдагч эх линкийг үргэлж нээлттэй үлдээх</li>
        <li>Контентыг бүрэн хуулбарлахаас зайлсхийх</li>
        <li>Mongolian audience-нд тохирсон редакцлал хийх</li>
      </ul>

      <h2>Холбоо барих</h2>
      <p>
        Эх сурвалжтай холбоотой асуулт, copyright concerns:{" "}
        <a href="mailto:info@orangenews.mn">info@orangenews.mn</a>
      </p>
    </LegalPageLayout>
  );
}

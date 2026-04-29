import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хамтран ажиллах — Orange News",
  description:
    "Санхүүгийн байгууллагууд, финтек компаниуд, судалгааны хүрээлэнгүүдтэй харилцан үнэ цэнэ бүтээх нээлттэй хамтын ажиллагаа.",
};

export default function PartnershipPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Хамтран ажиллах
      </h1>

      <p className="mt-8 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Orange News нь санхүүгийн байгууллагууд, финтек компаниуд, судалгааны
        хүрээлэнгүүд болон бие даасан шинжээчидтэй харилцан үнэ цэнэ бүтээх
        зорилгоор дараах чиглэлүүдээр нээлттэй хамтран ажиллана:
      </p>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Контент түншлэл
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Салбарын гүнзгийрүүлсэн судалгаа, нийтлэл, тайлан мэдээг хамтран
        бэлтгэх, түгээх.
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Дата ба API интеграци
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Зах зээлийн мэдээлэл, статистик өгөгдлийг харилцан солилцох, API
        хэлбэрээр дамжуулах.
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Байгууллагын сурталчилгаа (B2B & B2C)
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Зорилтот сегментэд чиглэсэн маркетинг, ивээн тэтгэсэн нийтлэл (sponsored
        content) болон баннер байршуулалт.
      </p>

      <h3 className="mt-12 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Холбоо барих
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Хамтын ажиллагааны дэлгэрэнгүй санал, хүсэлтээ дараах сувгаар бидэнд
        илгээнэ үү:
      </p>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Имэйл:{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>
        <br />
        Хариу өгөх хугацаа: 1-3 ажлын өдөр
      </p>
    </main>
  );
}

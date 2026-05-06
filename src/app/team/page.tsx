import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Редакцийн баг — Orange News",
  description:
    "Orange News-ийн редакц нь эдийн засаг, санхүүгийн чиглэлээр мэргэшсэн сэтгүүлчид, дата шинжээчид болон технологийн хөгжүүлэгчдийн хамтын ажиллагаан дээр тулгуурладаг.",
};

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Редакцийн баг
      </h1>

      <div className="mt-8 space-y-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        <p>
          Манай редакц нь эдийн засаг, санхүүгийн чиглэлээр мэргэшсэн
          сэтгүүлчид, дата шинжээчид болон технологийн хөгжүүлэгчдийн хамтын
          ажиллагаан дээр тулгуурладаг.
        </p>
        <p>
          Бид мэдээллийн олон талт байдал, эх сурвалжийн баталгаат байдал
          (cross-checking), болон редакцын үнэмлэхүй хараат бус байдлыг
          эрхэмлэдэг.
        </p>
        <p>
          Технологийн хурдыг хүн төвтэй сэтгүүл зүйн ёс зүй, шүүмжлэлт
          сэтгэлгээтэй хослуулснаар уншигчдад зөвхөн &quot;юу болсон&quot; тухай бус,
          &quot;яагаад чухал болох&quot; талаарх гүнзгий дүн шинжилгээг санал болгодог.
        </p>
      </div>

      <h3 className="mt-12 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Редакцийн зарчмууд
      </h3>
      <ul className="mt-4 list-disc pl-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8] space-y-2">
        <li>
          <strong>Хараат бус байдал</strong>: Ямар ч улс төр, бизнесийн ашиг
          сонирхлоос ангид мэдээлэл боловсруулна
        </li>
        <li>
          <strong>Эх сурвалжийн баталгаа</strong>: Олон эх сурвалжаас мэдээллийг
          cross-check хийн нийтэлнэ
        </li>
        <li>
          <strong>Нээлттэй байдал</strong>: Алдаа илэрвэл шуурхай засаж, олон
          нийтэд мэдээлнэ
        </li>
        <li>
          <strong>Чанарын стандарт</strong>: Bloomberg, Reuters стандартад
          нийцсэн редакцийн дүрэм
        </li>
      </ul>
    </main>
  );
}

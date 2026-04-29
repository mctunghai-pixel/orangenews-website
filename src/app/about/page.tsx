import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай — Orange News",
  description:
    "Orange News нь Монгол Улсын зах зээл, эдийн засгийн мэдээллийг хүргэх датанд суурилсан мэргэжлийн платформ юм.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Бидний тухай
      </h1>

      <div className="mt-8 space-y-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        <p>
          Orange News нь Монгол Улсын хөрөнгийн зах зээл, макро эдийн засаг
          болон дэлхийн санхүү, технологийн салбарын мэдээллийг цаг алдалгүй,
          хараат бусаар хүргэх зорилго бүхий датанд суурилсан мэргэжлийн
          мэдээллийн платформ юм.
        </p>
        <p>
          Бид олон улсын жишигт нийцсэн өгөгдлийн сан, мэдээлэл цуглуулах
          автоматжуулсан систем (Data Pipeline) болон хиймэл оюун ухааны
          дэвшилтэт шийдлүүдийг ашиглан зах зээлийн чиг хандлага, индексүүдийн
          хөдөлгөөн, онцлох үйл явдлуудыг хамгийн хурднаар боловсруулж
          уншигчдад хүргэдэг.
        </p>
        <p>
          Бидний алсын хараа бол Монгол хэлээр санхүүгийн дэлхийн жишигт
          нийцсэн чанартай мэдээллийг хүргэх анхдагч платформ болж, хөрөнгө
          оруулагчид, бизнес эрхлэгчид болон бодлого боловсруулагчдыг шийдвэр
          гаргахад шаардлагатай, баталгаатай мэдээллээр тасралтгүй хангах явдал
          юм.
        </p>
      </div>

      <h3 className="mt-12 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Технологи болон автоматжуулалт
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Orange News нь Azurise AI ecosystem-ийн нэг хэсэг бөгөөд автоматжуулсан
        pipeline, хиймэл оюун ухааны орчуулга, эх сурвалжийн quality control
        механизм, real-time зах зээлийн дата feed зэрэг дэвшилтэт технологийн
        шийдлүүдэд тулгуурладаг.
      </p>
    </main>
  );
}

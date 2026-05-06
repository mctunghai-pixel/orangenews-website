import Link from "next/link";
import type { Metadata } from "next";
import { SubscribeForm } from "@/components/subscribe/SubscribeForm";

export const metadata: Metadata = {
  title: "Товхимол — Orange News",
  description:
    "Orange News товхимол: өглөө бүр зах зээлийн өдрийн тойм, индексүүдийн өөрчлөлт, онцлох нийтлэлүүд имэйлээр.",
};

export default function NewsletterPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Orange News Товхимол
      </h1>
      <p className="mt-3 font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
        Өглөө бүр зах зээлийн өдрийн тойм имэйл хайрцагт тань.
      </p>

      <p className="mt-8 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Орчин үеийн санхүү, эдийн засгийн ертөнцөд цаг хугацаа бол мөнгө юм.
        Манай товхимол нь тантай дэлхийн зах зээлийн чухал өөрчлөлтүүд,
        индексүүдийн хөдөлгөөн, онцлох мэдээ, дүн шинжилгээг өглөө бүр имэйлээр
        хүргэнэ. Уншигчид өдрийн ажлаа эхлэхэд бэлэн, цогц мэдээллээр
        зэвсэглэсэн байна.
      </p>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Үйлчилгээний онцлог
      </h3>
      <ul className="mt-4 list-disc pl-6 font-serif-body text-[16px] md:text-[17px] leading-[1.8] space-y-2">
        <li>Өглөөний 8:00 цагт өдрийн тойм</li>
        <li>Хөрөнгийн зах зээлийн топ хөдөлгөөнүүд</li>
        <li>Криптовалют, FX ханшийн өөрчлөлт</li>
        <li>Macro эдийн засгийн дайжилт</li>
        <li>Онцлох нийтлэлүүдийн товчоо</li>
      </ul>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Бүртгүүлэх
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Имэйл хаягаа оруулаад баталгаажуулах товчийг дарна уу. Бид танд
        баталгаажуулах холбоос бүхий имэйл илгээх бөгөөд та дотроос нь товчийг
        дарж бүртгэлээ идэвхжүүлснээр өдрийн товхимолд бүртгэгдэнэ.
      </p>

      <SubscribeForm variant="light" />
    </main>
  );
}

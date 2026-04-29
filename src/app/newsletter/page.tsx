import Link from "next/link";
import type { Metadata } from "next";

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
        Товхимолд бүртгүүлэх боломж тун удахгүй нээгдэнэ. Эхний уншигчдын тоонд
        багтахыг хүсвэл{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>{" "}
        хаягаар мэдэгдэнэ үү.
      </p>

      <form
        className="mt-6 flex flex-col gap-3 md:flex-row md:items-center"
        aria-label="Newsletter signup (тун удахгүй)"
      >
        <input
          type="email"
          placeholder="имэйл хаяг"
          disabled
          aria-disabled="true"
          className="flex-1 border border-border bg-foreground/[0.02] px-4 py-3 font-serif-body text-[14px] text-muted placeholder:text-muted/60 focus:outline-none cursor-not-allowed"
        />
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Тун удахгүй"
          className="border border-border bg-foreground/[0.02] px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-muted cursor-not-allowed"
        >
          Бүртгүүлэх
        </button>
      </form>
      <p className="mt-2 font-sans text-[11px] text-muted uppercase tracking-wider">
        Тун удахгүй
      </p>
    </main>
  );
}

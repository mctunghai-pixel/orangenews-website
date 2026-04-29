import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Импрессум — Orange News",
  description:
    "Orange News хуулийн этгээдийн мэдээлэл, хариуцлагатай удирдлага, хостинг үйлчилгээний дэлгэрэнгүй.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Импрессум
      </h1>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хуулийн этгээдийн мэдээлэл
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Orange News-ийн албан ёсны хуулийн этгээдийн бүртгэлийн процесс явагдаж
        байна. Хуулийн этгээдийн дэлгэрэнгүй мэдээлэл (бүртгэлийн дугаар,
        хаяг, хариуцлагатай удирдлага) бүртгэлийн ажил дууссаны дараа энд
        байршуулагдана.
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хариуцлагатай удирдлага
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Editorial responsibility: Редакцийн зөвлөл
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Холбоо барих
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Имэйл:{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хостинг үйлчилгээ
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Хостинг үйлчилгээ үзүүлэгч: Vercel Inc. (USA)
        <br />
        Сайтын платформ: Next.js framework
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хариу шуурхай шаардлагатай тохиолдолд
      </h3>
      <p className="mt-4 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Хуулийн харилцаатай холбоотой шуурхай асуудлыг{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>{" "}
        хаягаар илгээнэ үү. Subject line-нд "Хуулийн асуудал" гэж тэмдэглэсэн
        байх.
      </p>
    </main>
  );
}

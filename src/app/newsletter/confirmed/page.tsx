import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бүртгэл — Orange News",
};

interface PageProps {
  searchParams: Promise<{ status?: string }>;
}

const COPY = {
  ok: {
    heading: "Бүртгэл баталгаажлаа",
    body: "Маргааш өглөөнөөс эхлэн өдрийн товхимол таны имэйл хайрцагт хүрнэ. Уншихад тань таатай байх болтугай.",
  },
  invalid: {
    heading: "Холбоос хүчингүй",
    body: "Энэ баталгаажуулах холбоос хугацаа дууссан эсвэл буруу байж магадгүй. Дахин бүртгүүлэх бол доорх товчийг дарна уу.",
  },
  error: {
    heading: "Алдаа гарлаа",
    body: "Бид одоогоор бүртгэлийг боловсруулж чадсангүй. Хэдэн минутын дараа дахин оролдож үзнэ үү. Асуудал үргэлжилбэл info@orangenews.mn хаягаар бидэнд мэдэгдэнэ үү.",
  },
} as const;

type Status = keyof typeof COPY;
const VALID = new Set<string>(["ok", "invalid", "error"]);

export default async function ConfirmedPage({ searchParams }: PageProps) {
  const { status } = await searchParams;
  const key: Status = VALID.has(status ?? "") ? (status as Status) : "invalid";
  const copy = COPY[key];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        {copy.heading}
      </h1>
      <p className="mt-5 font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
        {copy.body}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="font-sans text-[12px] font-semibold uppercase tracking-wider text-foreground border-b border-foreground hover:text-accent hover:border-accent transition-colors"
        >
          Нүүр хуудас руу буцах
        </Link>
        {key !== "ok" && (
          <Link
            href="/newsletter"
            className="font-sans text-[12px] font-semibold uppercase tracking-wider text-foreground border-b border-foreground hover:text-accent hover:border-accent transition-colors"
          >
            Дахин бүртгүүлэх
          </Link>
        )}
      </div>
    </main>
  );
}

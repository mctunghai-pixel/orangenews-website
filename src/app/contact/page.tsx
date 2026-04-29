import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих — Orange News",
  description:
    "Orange News-тэй имэйл болон сошиал медиагаар холбогдох боломжтой. Хариу өгөх хугацаа 1-3 ажлын өдөр.",
};

const socials: Array<{ label: string; href: string }> = [
  { label: "Facebook", href: "https://www.facebook.com/orangenews.mn" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/orangenews.official",
  },
  { label: "Threads", href: "https://www.threads.net/@orangenews.official" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 font-sans text-[11px] md:text-[12px] uppercase tracking-wider text-muted hover:text-accent transition-colors"
      >
        ← Нүүр хуудас руу буцах
      </Link>

      <h1 className="font-serif-display text-[28px] md:text-[40px] font-bold leading-tight">
        Холбоо барих
      </h1>
      <p className="mt-3 font-serif-body text-[16px] md:text-[17px] leading-[1.8] text-muted">
        Бид таны санал, хүсэлт, асуултыг үргэлж хүлээн авна.
      </p>

      <h3 className="mt-10 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Имэйл
      </h3>
      <p className="mt-2 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Сошиал медиа
      </h3>
      <ul className="mt-2 space-y-2 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        {socials.map((s) => (
          <li key={s.label}>
            <span className="text-muted">{s.label}: </span>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {s.href.replace("https://", "")}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хариу өгөх хугацаа
      </h3>
      <p className="mt-2 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        1-3 ажлын өдөр
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Редакц
      </h3>
      <p className="mt-2 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Редакцтай шууд холбогдох хүсэлтээ{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>{" "}
        хаягаар илгээнэ үү. Subject line-нд "Редакц" гэж тэмдэглээрэй.
      </p>

      <h3 className="mt-8 font-serif-display text-[18px] md:text-[22px] font-bold leading-tight">
        Хамтын ажиллагаа
      </h3>
      <p className="mt-2 font-serif-body text-[16px] md:text-[17px] leading-[1.8]">
        Бизнесийн санал, partnership-ийн хүсэлтийг{" "}
        <a
          href="mailto:info@orangenews.mn"
          className="text-accent hover:underline"
        >
          info@orangenews.mn
        </a>{" "}
        хаягаар хүлээн авна. Дэлгэрэнгүй мэдээллийг{" "}
        <Link href="/partnership" className="text-accent hover:underline">
          Хамтран ажиллах
        </Link>{" "}
        хуудаснаас үзэх боломжтой.
      </p>
    </main>
  );
}

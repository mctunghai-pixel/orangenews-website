import type { Metadata } from "next";
import {
  PT_Serif,
  Merriweather,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { TickerBarLoader } from "@/components/layout/TickerBarLoader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-pt-serif",
});

const merriweather = Merriweather({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-merriweather",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-plex-mono",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Orange News — Монгол Улсын санхүүгийн сэтгүүлч",
  description:
    "Bloomberg-ийг санагдуулам монгол санхүү, технологи, эдийн засгийн редакцлагдсан урсгал. Автомат pipeline-ээр шинэчлэгдэнэ.",
  openGraph: {
    title: "Orange News — Монгол Улсын санхүүгийн сэтгүүлч",
    description:
      "Санхүү, технологи, эдийн засгийн өдөр тутмын редакцлагдсан урсгал.",
    locale: "mn_MN",
    type: "website",
    siteName: "Orange News",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${ptSerif.variable} ${merriweather.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TickerBarLoader />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

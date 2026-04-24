import type { Metadata } from "next";
import {
  PT_Serif,
  Merriweather,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

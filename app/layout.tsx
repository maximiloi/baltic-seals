import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Балтийские Нерпы | Команда флаг-футбола",
  description: "Молодая команда по флаг-футболу из Санкт-Петербурга. Опытные спортсмены, интенсивные тренировки и настоящая команда-семья.",
  keywords: "флаг-футбол, Санкт-Петербург, спорт, команда, American football",
  authors: [{ name: "Балтийские Нерпы" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://baltic-seals.ru",
    title: "Балтийские Нерпы | Команда флаг-футбола",
    description: "Молодая команда по флаг-футболу из Санкт-Петербурга",
    siteName: "Балтийские Нерпы",
  },
  twitter: {
    card: "summary_large_image",
    title: "Балтийские Нерпы",
    description: "Команда флаг-футбола из Санкт-Петербурга",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

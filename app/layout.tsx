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
  title: "Балтийские Нерпы | Команда флаг-футбола из СПб",
  description: "Профессиональная команда по флаг-футболу из Санкт-Петербурга. Участвуем в турнирах по всей России. Тренировки, спонсорство и динамичный спорт.",
  keywords: "флаг-футбол, Санкт-Петербург, американский футбол, спорт, команда, flag football, турниры, СПб",
  authors: [{ name: "Балтийские Нерпы" }],
  creator: "Балтийские Нерпы",
  publisher: "Балтийские Нерпы",
  robots: "index, follow",
  category: "Sports",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://baltic-seals.ru",
    title: "Балтийские Нерпы | Команда флаг-футбола",
    description: "Профессиональная команда по флаг-футболу из Санкт-Петербурга. Участвуем в турнирах по всей России.",
    siteName: "Балтийские Нерпы",
    images: [
      {
        url: "https://baltic-seals.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Балтийские Нерпы",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Балтийские Нерпы | Команда флаг-футбола",
    description: "Профессиональная команда по флаг-футболу из Санкт-Петербурга",
    images: ["https://baltic-seals.ru/og-image.png"],
  },
  alternates: {
    canonical: "https://baltic-seals.ru",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Baltic Seals" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
          Перейти к основному контенту
        </a>
        {children}
      </body>
    </html>
  );
}

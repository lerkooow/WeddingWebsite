import type { Metadata } from "next";

import { Libre_Caslon_Display, Italianno, Alumni_Sans, Great_Vibes, Montserrat_Alternates, Montserrat } from "next/font/google";

import "./globals.scss";

const libre = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre",
});

const greatVibes = Great_Vibes({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-great",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-montserratAlt",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-montserrat",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
});

const alumniSans = Alumni_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-alumni",
});

export const metadata: Metadata = {
  title: "Wedding Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserratAlternates.variable} ${montserrat.variable} ${greatVibes.variable} ${libre.variable} ${italianno.variable} ${alumniSans.variable}`}>{children}</body>
    </html>
  );
}

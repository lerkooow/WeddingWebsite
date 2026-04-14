import type { Metadata } from "next";

import { Great_Vibes, Montserrat_Alternates, Montserrat, Comfortaa } from "next/font/google";

import "./globals.scss";

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

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700"],
  variable: "--font-comfortaa",
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
      <body className={`${montserratAlternates.variable} ${montserrat.variable} ${greatVibes.variable} ${comfortaa.variable}`}>{children}</body>
    </html>
  );
}

import "./globals.scss";

import { Libre_Caslon_Display, Italianno, Alumni_Sans } from "next/font/google";
import type { Metadata } from "next";

const libre = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre",
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
      <body className={`${libre.variable} ${italianno.variable} ${alumniSans.variable}`}>{children}</body>
    </html>
  );
}

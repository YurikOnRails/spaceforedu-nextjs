import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | SpaceForEdu',
    default: 'SpaceForEdu - Обучение в Испании',
  },
  description: "№1 Агентство по образованию в Испании. Поступление с гарантией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#020617]`}
      >
        {children}
      </body>
    </html>
  );
}

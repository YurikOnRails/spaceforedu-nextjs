import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/ui/CustomCursor";
import Starfield from "@/components/Starfield";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
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
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${unbounded.variable} font-sans antialiased bg-[#020617]`}
      >
        <Starfield />
        <CustomCursor />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

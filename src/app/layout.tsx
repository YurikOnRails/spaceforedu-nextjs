import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/ui/CustomCursor";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
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
        className={`${manrope.variable} font-sans antialiased bg-[#020617]`}
      >
        <CustomCursor />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

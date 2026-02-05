import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/ui/CustomCursor";
import Starfield from "@/components/Starfield";
import { GoogleAnalytics } from '@next/third-parties/google';

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
  metadataBase: new URL('https://spaceforedu.com'),
  title: {
    template: '%s | SpaceForEdu',
    default: 'SpaceForEdu - Обучение в Испании: Поступление с Гарантией',
  },
  description: '№1 Агентство по образованию в Испании. Полное сопровождение в лучшие государственные и частные вузы, школы и языковые курсы. Гарантия поступления.',
  keywords: ['обучение в Испании', 'университеты Испании', 'школы в Испании', 'образование за рубежом', 'омологация диплома', 'испанская виза'],
  authors: [{ name: 'SpaceForEdu' }],
  openGraph: {
    title: 'SpaceForEdu - Обучение в Испании',
    description: 'Поступление в лучшие вузы и школы Испании с гарантией результата.',
    url: 'https://spaceforedu.com',
    siteName: 'SpaceForEdu',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'SpaceForEdu Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpaceForEdu - Обучение в Испании',
    description: 'Поступление в лучшие вузы и школы Испании с гарантией результата.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SpaceForEdu",
              "url": "https://spaceforedu.com",
              "logo": "https://spaceforedu.com/logo.png",
              "description": "№1 Агентство по образованию в Испании. Поступление с гарантией.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-983-889-093",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${unbounded.variable} font-sans antialiased bg-[#020617]`}
      >
        <Starfield />
        <CustomCursor />
        {children}
        <CookieBanner />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}

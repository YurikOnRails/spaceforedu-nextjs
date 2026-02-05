import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/ui/CustomCursor";
import Starfield from "@/components/Starfield";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";

import MobileStickyCTA from "@/components/MobileStickyCTA";
import ExitIntentModal from "@/components/ExitIntentModal";
import ReadingProgress from "@/components/ui/ReadingProgress";

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
  alternates: {
    canonical: '/',
  },
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
      <body
        className={`${inter.variable} ${unbounded.variable} font-sans antialiased bg-[#020617]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SpaceForEdu",
              "image": "https://spaceforedu.com/logo.png",
              "@id": "https://spaceforedu.com",
              "url": "https://spaceforedu.com",
              "telephone": "+34983889093",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Madrid, Spain",
                "addressLocality": "Madrid",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.416775,
                "longitude": -3.703790
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://facebook.com/spaceforedu",
                "https://t.me/+34663689393"
              ]
            })
          }}
        />
        <Starfield />
        <ReadingProgress />
        <CustomCursor />
        {children}
        <MobileStickyCTA />
        <ExitIntentModal />
        <CookieBanner />

        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Yandex Metrica */}
        {process.env.NEXT_PUBLIC_YANDEX_METRICA_ID && (
          <Script id="yandex-metrica" strategy="afterInteractive">
            {`
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

               ym(${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
            `}
          </Script>
        )}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}

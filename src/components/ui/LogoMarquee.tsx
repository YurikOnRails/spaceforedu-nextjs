import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { name: "Universitat de Barcelona", url: "/images/logos/Logo_Universitat_de_Barcelona.png" },
  { name: "Universidad de Navarra", url: "/images/logos/Universidad_de_Navarra.png" },
  { name: "IESE Business School", url: "/images/logos/IESE_Business.png" },
];

const LogoMarquee = () => {
  return (
    <div className="w-full relative mt-16 mb-8 overflow-hidden">
      {/* Modern Masking approach using CSS Mask Image */}
      <div 
        className="relative flex overflow-x-hidden group [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center">
          {/* Repeat the logo set multiple times for smooth infinite scrolling */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="relative w-24 h-10 md:w-40 md:h-20 mx-6 md:mx-8 flex items-center justify-center shrink-0">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 96px, 160px"
                  unoptimized={true}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;

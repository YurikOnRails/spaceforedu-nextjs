import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { name: "Universitat de Barcelona", url: "/images/logos/Logo_Universitat_de_Barcelona.png" },
  { name: "Universidad de Navarra", url: "/images/logos/Universidad_de_Navarra.png" },
  { name: "IESE Business School", url: "/images/logos/IESE_Business.png" },
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden relative mt-16 mb-8">
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center">
          {/* Repeat the logo set multiple times for smooth infinite scrolling */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="relative w-40 h-20 mx-8 flex items-center justify-center shrink-0">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 100px, 160px"
                  unoptimized={true}
                />
            </div>
          ))}
        </div>

        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LogoMarquee;

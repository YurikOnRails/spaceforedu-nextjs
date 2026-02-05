import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 relative ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

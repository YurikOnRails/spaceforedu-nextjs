"use client";

import React from 'react';
import { Section } from './ui/Section';
import { AccordionItem } from './ui/Accordion';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title: string;
  highlightedWord?: string;
  items: FAQItem[];
  accentColor?: string; // class name for text color, e.g., "text-cyan-400"
}

const FAQSection = ({ title, highlightedWord, items, accentColor = "text-cyan-400" }: FAQSectionProps) => {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <Section className="bg-black/60 backdrop-blur-md">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {title} {highlightedWord && <span className={accentColor}>{highlightedWord}</span>}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              title={item.q}
              content={item.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;

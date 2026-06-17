"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  groupTheme?: string;
}

export default function FAQAccordion({ items, groupTheme }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div>
      {groupTheme && (
        <h3 className="text-xs font-medium text-faint uppercase tracking-wide mb-4">
          {groupTheme}
        </h3>
      )}
      <div className="divide-y divide-border-subtle">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-5 pr-12 text-left
                  text-lg font-medium text-ink hover:text-brand
                  transition-colors duration-200 cursor-pointer relative
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  className={`absolute right-0 top-5 flex-shrink-0 w-5 h-5 text-muted transition-transform duration-200
                    ${isOpen ? "rotate-180 text-brand" : ""}`}
                  aria-hidden="true"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 7.5l5 5 5-5" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]
                  ${isOpen ? "max-h-[500px] pb-5" : "max-h-0"}`}
              >
                <p className="text-base text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

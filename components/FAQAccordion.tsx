"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  title: string;
  content: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 ">
      {items.map((item, index) => (
        <div key={index} className="border border-green-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 cursor-pointer py-4 flex items-center justify-between bg-green-50 hover:bg-green-100 transition-colors"
          >
            <h3 className="text-lg max-md:text-sm font-semibold text-green-900 text-left">{item.title}</h3>
            <ChevronDown
              className={`w-5 h-5 text-green-600 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out`}
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
            }}
          >
            <div className="px-6 py-4 bg-white border-t border-green-200">
              <p className="text-green-800 max-md:text-sm leading-relaxed">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

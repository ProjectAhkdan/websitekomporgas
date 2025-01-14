"use client";

import { faqs } from "@/data/data";
import { useState } from "react";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-md overflow-hidden">
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full p-4 text-left font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
          </button>
          {/* Accordion Content */}
          <div
            className={`transition-[max-height] duration-300 ease-in-out ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-gray-50">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

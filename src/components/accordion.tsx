import { faqs } from "@/data/data";
import { useState } from "react";

const Accordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Accordion;
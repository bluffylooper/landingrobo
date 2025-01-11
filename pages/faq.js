import { faqList } from "@/lib/content";
import React, { useState } from "react";
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="py-2">
      <h2>
        <button
          id="faqs-title-01"
          type="button"
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={onClick}
          aria-expanded="expanded"
          aria-controls="faqs-text-01"
        >
          <p className=" text-xl">{title}</p>
          <svg
            className="fill-black shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                isOpen ? "!rotate-180" : ""
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                isOpen ? "!rotate-180" : ""
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id="faqs-text-01"
        role="region"
        aria-labelledby="faqs-title-01"
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className="pb-3"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default function faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="relative font-inter antialiased">
      <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

          <div className="divide-y divide-slate-200">
            {faqList.map((item, index) => (
              <AccordionItem
                key={index}
                title={item?.title}
                content={item?.content}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { faqList } from "@/lib/content";
import { useRouter } from "next/router";
const AccordionItem = ({ title, content, isOpen, onClick, id }) => {
  return (
    <div
      className={`highlight-target px-2 py-2 ${
        id % 2 !== 0 ? "bg-white rounded" : ""
      }`}
      id={`id-${id}`}
    >
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
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();
  console.log("🚀 ~ Faq ~ router:", router);
  function extractHashValue(url) {
    // Tìm vị trí của dấu '#'
    const hashIndex = url.indexOf("#");

    // Nếu không tìm thấy dấu '#', trả về null hoặc một giá trị mặc định khác
    if (hashIndex === -1) {
      return null; // Hoặc bạn có thể trả về một chuỗi rỗng: ''
    }

    // Lấy phần sau dấu '#' và trả về
    return `#${url.substring(hashIndex + 1)}`;
  }
  const highlightElementByHash = () => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash; // Lấy hash từ URL (vd: #5)

    // Xóa class 'active' cũ khỏi tất cả các phần tử
    document.querySelectorAll(".highlight-target.active").forEach((el) => {
      el.classList.remove("active");
    });

    // Thêm class 'active' vào phần tử có id trùng với hash
    if (hash) {
      const target = document.querySelector(hash.replace("#", "#id-"));
      if (target) {
        target.classList.add("active");

        // Cuộn đến phần tử trong viewport
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          target.classList.remove("active");
        }, 1000); // 2000ms = 2 giây
      }
    }
  };

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  useEffect(() => {
    // Kích hoạt highlight khi component được mount
    highlightElementByHash();

    // Lắng nghe sự thay đổi của hash trong URL
    window.addEventListener("hashchange", highlightElementByHash);

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("hashchange", highlightElementByHash);
    };
  }, []);
  return (
    <div className="relative font-inter antialiased">
      <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>

          <div>
            {faqList.map((item, index) => (
              <AccordionItem
                key={index}
                id={index}
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

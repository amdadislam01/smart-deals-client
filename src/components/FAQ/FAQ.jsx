import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "What is Smart Deals?",
      answer:
        "Smart Deals is a secure online marketplace where users can buy, sell, and bid on products easily. It connects trusted buyers and sellers in one platform.",
    },
    {
      question: "How can I post my product for sale?",
      answer:
        "Simply create an account, go to the 'Add Product' section, fill in your product details, upload images, and submit. Your product will be visible to all users instantly.",
    },
    {
      question: "How does the bidding system work?",
      answer:
        "Buyers can place bids on listed products. Sellers can review all bids and choose the highest or most suitable offer before closing the deal.",
    },
    {
      question: "Is Smart Deals safe for transactions?",
      answer:
        "Yes! Smart Deals uses secure authentication and encrypted data protection to keep your personal and transaction information safe at all times.",
    },
    {
      question: "Can I edit or delete my posted product?",
      answer:
        "Of course! You can easily edit or remove any of your listed products anytime from your user dashboard.",
    },
  ];

  return (
    <section className="w-full py-10 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#34699A] mt-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-4 max-w-md mx-auto">
          Find answers to common questions about using Smart Deals for buying,
          selling, and bidding.
        </p>

        <div className="mt-10 flex flex-col gap-4 text-left">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className="flex items-center justify-between w-full p-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <h2 className="text-gray-900 text-base font-medium">
                  {faq.question}
                </h2>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-transform duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#34699A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

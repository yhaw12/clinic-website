import React, { useState } from "react";
import ContactCard from "../xtras/ContactCard";

const faqsData = [
  {
    category: "Appointments",
    question: "How do I book an appointment?",
    answer: "You can book an appointment by calling us at <a href='tel:+233244760710' class='text-blue-500 hover:underline'>0244 760 710</a>. Our staff will assist you in scheduling a convenient time.",
  },
  {
    category: "Services",
    question: "What services do you offer?",
    answer: "We provide general medicine, pediatrics, women’s health, minor procedures, and diagnostic services like X-rays and lab tests. Visit our <a href='/services' class='text-blue-500 hover:underline'>Services</a> page for details.",
  },
  {
    category: "Insurance",
    question: "Do you accept insurance?",
    answer: "We accept various insurance plans. Please contact us at <a href='tel:+233244760710' class='text-blue-500 hover:underline'>0244 760 710</a> to confirm coverage with your provider.",
  },
  {
    category: "Clinic Hours",
    question: "What are your clinic hours?",
    answer: "Our clinic is open Monday to Friday, 8:00 AM to 5:00 PM, and Saturday, 9:00 AM to 2:00 PM. Emergency services are available; call <a href='tel:+233244760710' class='text-blue-500 hover:underline'>0244 760 710</a>.",
  },
  {
    category: "Referrals",
    question: "Can I refer a patient to your clinic?",
    answer: "Yes, healthcare providers can refer patients by contacting us at <a href='tel:+233244760710' class='text-blue-500 hover:underline'>0244 760 710</a> or using our referral process on the <a href='#' class='text-blue-500 hover:underline'>Contact</a> page.",
  },
];

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState({});

  const groupedFAQs = faqsData.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const filteredFAQs = searchQuery
    ? faqsData.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const toggleFAQ = (category, index) => {
    setOpenIndex((prev) => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-gradient-to-r from-[#32274D] to-[#4a3a6e] text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
          Frequently Asked Questions
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Explore answers to common questions about our services, appointments, and more at Divine Sanitas Medical Clinic.
        </p>
      </div>
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300"
            aria-label="Search FAQs"
          />
        </div>
        {searchQuery && filteredFAQs && filteredFAQs.length > 0 ? (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex[`search-${index}`]}
                toggle={() => toggleFAQ("search", index)}
              />
            ))}
          </div>
        ) : searchQuery && filteredFAQs && filteredFAQs.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No results found for "{searchQuery}". Try a different term or{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              contact us
            </a>.
          </p>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedFAQs).map(([category, faqs]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-[#32274D] mb-6 border-b-2 border-purple-200 pb-2">
                  {category}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex[`${category}-${index}`]}
                      toggle={() => toggleFAQ(category, index)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#32274D] mb-6">
            Still Have Questions?
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#32274D] max-w-lg mx-auto">
            <ContactCard />
          </div>
        </section>
      </main>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-content.open {
          max-height: 500px;
        }
      `}</style>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-[#32274D]">{question}</h3>
        <span className="text-2xl text-[#32274D]">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <div className="p-6 pt-0 text-gray-600" dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  );
};

export default FAQs;
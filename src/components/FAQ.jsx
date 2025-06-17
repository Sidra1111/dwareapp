import React from "react";

const faqs = [
  {
    question: "What is Dware?",
    answer: "Dware is a streamlined platform designed to simplify daily business operations through intuitive tools and smart workflows.",
  },
  {
    question: "Is Dware free to use?",
    answer: "Yes, Dware offers a free plan with essential features. Premium plans are available for advanced capabilities.",
  },
  {
    question: "Do I need technical skills to use Dware?",
    answer: "No! Dware is built for everyone – it's user-friendly and requires no coding or technical background.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel, upgrade, or downgrade your plan at any time from your dashboard.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

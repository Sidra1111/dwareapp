import React, { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "How do I record footage from the camera?",
      answer:
        "Simply open the mobile app, select a location, and use the in-app controls to start recording. The recorded video will be processed and sent to your phone or email.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No software installation is required. Our service works entirely through your web browser and mobile app, making it accessible from any device.",
    },
    {
      question: "Can I use the service internationally?",
      answer:
        "Yes, our service is available globally. You can access cameras and record footage from anywhere in the world with an internet connection.",
    },
    {
      question: "What industries are currently supported?",
      answer:
        "We support various industries including retail, security, construction, hospitality, and more. Our platform is designed to be flexible for different business needs.",
    },
    {
      question: "Is the video recorded in high quality?",
      answer:
        "Yes, all videos are recorded in high definition (HD) quality to ensure clear and detailed footage for your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFAQ(index);
    } else if (event.key === "Escape") {
      setOpenFAQ(-1);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = (index + 1) % faqs.length;
      document.querySelector(`[data-faq-index="${nextIndex}"]`)?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = index === 0 ? faqs.length - 1 : index - 1;
      document.querySelector(`[data-faq-index="${prevIndex}"]`)?.focus();
    }
  };

  return (
    <div className="box-border flex flex-col justify-center items-center px-10 py-0 mx-auto my-0 w-full max-w-[1920px] max-md:px-5 max-md:py-0 max-sm:px-4 max-sm:py-0">
      <div className="box-border flex justify-center items-start px-0 py-20 w-full max-w-[1240px] max-md:px-0 max-md:py-16 max-sm:px-0 max-sm:py-10">
        <div className="box-border flex gap-5 items-start p-2.5 w-full max-md:flex-col max-md:gap-10 max-sm:gap-8 max-sm:p-0">
          <div className="box-border flex flex-col gap-5 items-start p-2.5 left-[section] w-[496px] max-md:w-full max-md:max-w-full max-md:items-center max-md:text-center max-sm:gap-4 max-sm:p-0">
            <div className="flex flex-col justify-center items-start max-w-[496px] max-md:items-center">
              <div className="flex flex-col items-start py-2 pr-2 pl-2.5 bg-purple-100 rounded border-l-2 border-solid border-l-violet-400 w-[102px] max-md:px-3 max-md:py-2 max-md:w-auto">
                <div className="self-stretch text-xs font-medium leading-5 uppercase text-slate-950 w-[101px] max-md:w-auto">
                  HELP CENTER
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch max-w-[496px] max-md:items-center">
              <div className="flex flex-col items-start self-stretch flex-[1_0_0] max-md:items-center">
                <div className="self-stretch text-5xl font-semibold tracking-tighter capitalize leading-[56.4px] text-slate-950 max-md:text-4xl max-md:leading-10 max-md:text-center max-sm:text-3xl max-sm:tracking-tighter max-sm:leading-9">
                  Got A Question? Get Your Answers
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch max-w-[496px] max-md:items-center">
              <div className="self-stretch text-base leading-7 flex-[1_0_0] text-neutral-600 max-md:text-center max-sm:text-sm max-sm:leading-6">
                Quick answers to questions you may have. Can't find what you're
                looking for? Check out our full documentation
              </div>
            </div>
            <div className="flex flex-col justify-center items-start self-stretch max-w-[496px] max-md:items-center">
              <div className="flex flex-col items-start self-stretch flex-[1_0_0] max-md:items-center">
                <div className="flex flex-col items-start self-stretch max-md:items-center">
                  <button className="flex items-center px-6 py-4 bg-white rounded-lg border border-solid transition-all cursor-pointer border-slate-950 border-opacity-10 duration-[0.2s] ease-[ease] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 max-sm:justify-center max-sm:px-5 max-sm:py-3.5">
                    <div className="text-base font-semibold text-center text-slate-950 max-sm:text-sm">
                      View FAQs
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border flex flex-col items-start p-2.5 right-[section] w-[704px] max-md:w-full max-md:max-w-full max-sm:p-0">
            <div className="flex flex-col justify-center items-start self-stretch max-w-[704px]">
              <div className="flex flex-col items-start self-stretch flex-[1_0_0]">
                <div
                  className="flex flex-col gap-5 items-start self-stretch max-sm:gap-3"
                  role="region"
                  aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys"
                >
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 items-start self-stretch"
                    >
                      <button
                        className="flex items-center self-stretch px-7 py-5 rounded-md border border-solid transition-all cursor-pointer bg-slate-50 border-zinc-200 duration-[0.2s] ease-[ease] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 max-md:px-5 max-md:py-5 max-sm:px-5 max-sm:py-4 w-full text-left"
                        onClick={() => toggleFAQ(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        aria-expanded={openFAQ === index}
                        aria-controls={`faq-content-${index}`}
                        data-faq-index={index}
                      >
                        <div className="flex items-start">
                          <div className="self-stretch text-base font-semibold text-neutral-800 max-sm:text-sm">
                            {String(index + 1).padStart(2, "0")}. {faq.question}
                          </div>
                        </div>
                      </button>
                      {openFAQ === index && (
                        <div
                          className="flex flex-col items-start self-stretch px-7 py-3.5 max-md:px-5 max-md:py-3 max-sm:px-5 max-sm:py-2.5"
                          id={`faq-content-${index}`}
                          role="region"
                          aria-labelledby={`faq-button-${index}`}
                        >
                          <div className="flex flex-col justify-center items-start self-stretch max-w-[684px]">
                            <div className="flex flex-col items-start self-stretch flex-[1_0_0]">
                              <div className="self-stretch text-base font-light leading-7 text-neutral-600 max-sm:text-sm max-sm:leading-6">
                                {faq.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

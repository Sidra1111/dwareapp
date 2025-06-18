import React, { useState } from "react";

const TestimonialCard = ({ quote, name, position, avatar, stars }) => {
  return (
    <div className="rounded-lg border border-[#E2E2E8] bg-white h-full flex flex-col">
      <div className="p-6 border-b border-[#E2E2E8] flex-1">
        <div className="mb-6">
          <p className="text-xl font-medium tracking-tight leading-7 text-slate-950">
            {quote}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex-shrink-0">
            <img
              src={avatar}
              className="w-full h-full object-cover rounded-full"
              alt={name}
            />
          </div>
          <div className="flex-1">
            <div className="text-base font-semibold tracking-tight leading-none text-slate-950">
              {name}
            </div>
            <div className="text-sm leading-6 text-neutral-600 mt-1">
              {position}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <img
          src={stars}
          className="w-20 h-4 object-contain"
          alt="5 star rating"
        />
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "ReachOut's expertise boosted our traffic and conversions. Amazing results in no time!",
      name: "Frederic Hill",
      position: "Insta Influencer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/88401231838ffbe3a9ed2908e9e97c75d40168b6?placeholderIfAbsent=true",
      stars:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/8b1b2deaaac6d7b61c3d4c5774d1115f64470743?placeholderIfAbsent=true",
    },
    {
      quote: "Incredible team! ReachOut delivered exceptional growth for our brand.",
      name: "Ravi B.",
      position: "X Influencer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/eb03981f13fa045a1e2ca0ba2ca9281eca817119?placeholderIfAbsent=true",
      stars:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/49904bbca0fbd34b23da710e3db4111654548314?placeholderIfAbsent=true",
    },
    {
      quote: "ReachOut redefined our digital strategy. Outstanding service and results!",
      name: "Khyati S. H.",
      position: "Meta Influencer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/096b479040ce0c276fa243498585a1416e7eb30a?placeholderIfAbsent=true",
      stars:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/b3e8f3c6ef0dd3bc3aae878ab0fa9e2e4344da28?placeholderIfAbsent=true",
    },
    {
      quote: "Top-notch marketing solutions from ReachOut. Truly a game-changer!",
      name: "Rani S.",
      position: "Insta Influencer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/f5a44df36b33226b30253694d73e112e0095102d?placeholderIfAbsent=true",
      stars:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/24de5da3dfde4626834f9ae7e2f935deec206235?placeholderIfAbsent=true",
    },
    {
      quote: "ReachOut's creative approach helped us achieve remarkable business growth.",
      name: "Chiranjit H.",
      position: "Insta Influencer",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/85701f252de88ba44d326628aea54dff6274d12f?placeholderIfAbsent=true",
      stars:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/a403fc8761be141b477777d9a4136d3ec5443fd3?placeholderIfAbsent=true",
    },
    {
      quote: "Professional, innovative, and result-driven – ReachOut exceeded our expectations!",
      name: "Max S.",
      position: "Youtuber",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/de177df9bcf0471b10e3aadd79f7737a2991abc8?placeholderIfAbsent=true",
      stars:
        "https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/8c452949dc652b16a5e0d6d0c3ed35fd41fa1a79?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="pt-16">
      <div className="px-4 md:px-10 lg:px-40 py-1 border-t border-b border-[#E2E2E8] max-w-[1920px] mx-auto bg-[#F9F8FC] relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/e1870fdb96c71d6fda8de81f5fa29fa024628fd2?placeholderIfAbsent=true"
          className="absolute right-0 bottom-0 z-0 h-[960px] opacity-15 w-[1920px] hidden md:block"
          alt=""
        />

        <div className="z-10 relative py-20 max-w-full w-[1240px] mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-3 gap-8 items-end mb-12 max-md:text-center">
            <div>
              <div className="inline-flex items-center mb-6">
                <div className="bg-[#DDE2FF] border-l-2 border-[#0F1535] rounded px-4 py-2">
                  <span className="text-lg md:text-xs font-medium uppercase text-slate-950">
                    Testimonials
                  </span>
                </div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-semibold leading-tight text-slate-950">
                What our
                <br />
                customers say
              </h2>
            </div>

            <div>
              <p className="text-lg text-neutral-600">
                Discover what our customers have to say about their experience with ReachOut and the results we've helped them achieve.
              </p>
            </div>

            <div className="flex lg:justify-end justify-center">
              <button className="px-6 py-3 rounded-lg border border-[rgba(17,0,36,0.14)] text-lg font-semibold text-slate-950 hover:bg-gray-50 transition-colors">
                About Us
              </button>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <TestimonialCard {...testimonials[currentSlide]} />

            <div className="flex justify-center items-center mt-6 gap-6">
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev > 0 ? prev - 1 : testimonials.length - 1
                  )
                }
                className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      currentSlide === index
                        ? "bg-slate-900"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev < testimonials.length - 1 ? prev + 1 : 0
                  )
                }
                className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

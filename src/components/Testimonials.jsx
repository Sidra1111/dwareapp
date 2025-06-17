import React from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    quote:
      "DwareApp has completely changed how I manage my team. It's intuitive and fast!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ali Khan",
    quote: "Super easy to use and great customer support. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h4 className="text-lg font-semibold">{t.name}</h4>
              </div>
              <p className="text-gray-600 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

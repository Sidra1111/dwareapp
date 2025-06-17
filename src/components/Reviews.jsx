import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hassan R.",
    comment: "Amazing app! It made task management so much easier for our team.",
  },
  {
    name: "Zainab M.",
    comment: "Fast, clean UI and super reliable. Highly recommended.",
  },
  {
    name: "Talha K.",
    comment: "Great customer service and smooth experience overall.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Rated 5 Stars by Our Customers
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="border p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center gap-1 text-yellow-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">“{review.comment}”</p>
              <h4 className="font-semibold text-gray-800">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

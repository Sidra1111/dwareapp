import React from "react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Simplify Your Workflow?
        </h2>
        <p className="mb-6 text-lg">
          Start using Dware today and experience the difference in productivity and ease.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default CallToAction;

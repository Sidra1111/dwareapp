import React from "react";

const ExperienceDemo = () => {
  return (
    <section className="bg-blue-50 py-20 px-4" id="demo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side – Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience DwareApp in Action
          </h2>
          <p className="text-gray-600 mb-6">
            Watch our live demo and see how DwareApp helps teams manage operations more efficiently and effectively.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Watch Demo
          </a>
        </div>

        {/* Right Side – Image/Video Placeholder */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/assets/demo-preview.png"
            alt="Demo preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceDemo;

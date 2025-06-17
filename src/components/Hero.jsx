import React from "react";

const Hero = () => {
  return (
    <section className="bg-white pt-16 px-6 md:px-24">
      <div className="max-w-[1920px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Small Tagline */}
          <div className="bg-[#DDE2FF] border-l-4 border-black text-xs uppercase font-medium text-slate-900 px-4 py-2 inline-block rounded">
            Record stunning tourist spots across the U.S.A
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Explore the <span className="text-blue-700">World</span> —{" "}
            <span className="text-blue-700">Remotely</span>, Instantly.
          </h1>

          {/* Description */}
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            View and record stunning tourist spots across the U.S. with just
            your phone — powered by our smart camera network and mobile app.
          </p>

          {/* Mobile App Logos */}
          <div className="flex gap-4 mt-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc2c19890e2c1c13300f4511c77736244c48835?placeholderIfAbsent=true"
              alt="App Store"
              className="w-32 md:w-36 rounded-lg"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b85426c5b004d4d3e108c5564ec5f15d0aab6ea?placeholderIfAbsent=true"
              alt="Google Play"
              className="w-32 md:w-36 rounded-lg"
            />
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-4 text-slate-950">
            {["Free Snapshot", "Free Video", "24/7 Support"].map((text) => (
              <div key={text} className="flex items-center space-x-2">
                <span className="text-violet-500 font-black text-lg">✓</span>
                <span className="text-base">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/897e2896f0198cedd2aaee132ff71279422aa514?placeholderIfAbsent=true"
            alt="Hero"
            className="w-full max-w-[700px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

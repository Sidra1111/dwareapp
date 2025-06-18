import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-24">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full space-y-6 text-left max-md:text-center">
          {/* Tagline */}
          <div className="flex justify-start max-md:justify-center">
            <div className="py-4 px-6 bg-[#DDE2FF] border-l-2 border-black text-xs font-medium uppercase text-slate-900 rounded text-center max-md:text-sm">
              record stunning tourist spots across the U.S.A
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight text-slate-950 max-md:text-5xl max-md:leading-[3.2rem]">
            Explore the{" "}
            <span style={{ color: "rgba(0,81,195,1)" }}>World </span>—{" "}
            <span style={{ color: "rgba(0,81,195,1)" }}>Remotely</span>,
            Instantly.
          </h1>

          {/* Description */}
          <p className="text-base leading-7 text-neutral-600">
            View and record stunning tourist spots across the U.S. with just
            your phone — powered by our smart camera network and mobile app.
          </p>

          {/* App Store Images */}
          <div className="flex gap-5 max-md:!flex max-md:!flex-col max-md:!items-center max-md:!justify-center max-md:!w-full max-md:!mx-auto max-md:!text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc2c19890e2c1c13300f4511c77736244c48835?placeholderIfAbsent=true"
              alt="App Store"
              className="w-[135px] rounded-lg max-md:mx-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b85426c5b004d4d3e108c5564ec5f15d0aab6ea?placeholderIfAbsent=true"
              alt="Google Play"
              className="w-[123px] rounded-lg max-md:mx-auto"
            />
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 max-md:!flex max-md:!flex-col max-md:!items-center max-md:!justify-center max-md:!w-full max-md:!mx-auto max-md:!text-center">
            <div className="flex items-center gap-2 max-md:!justify-center max-md:!mx-auto">
              <span className="text-violet-400 font-black text-sm">✓</span>
              <span className="text-base text-slate-950">Free Snapshot</span>
            </div>
            <div className="flex items-center gap-2 max-md:!justify-center max-md:!mx-auto">
              <span className="text-violet-400 font-black text-sm">✓</span>
              <span className="text-base text-slate-950">Free Video</span>
            </div>
            <div className="flex items-center gap-2 max-md:!justify-center max-md:!mx-auto">
              <span className="text-violet-400 font-black text-sm">✓</span>
              <span className="text-base text-slate-950">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 bg-white">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/897e2896f0198cedd2aaee132ff71279422aa514?placeholderIfAbsent=true"
            alt="Hero"
            className="w-full max-w-[831px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

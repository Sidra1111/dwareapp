import React from "react";

const CallToAction = () => {
  return (
    <div className="pt-7">
      <div className="flex flex-col justify-center items-center px-10 mt-7 w-full max-w-[1920px] mx-auto max-md:px-5 max-md:max-w-full overflow-visible">
        <div className="flex flex-1 justify-center pt-4 max-w-full h-full w-[1240px] overflow-visible">
          <div className="flex flex-1 shrink justify-center items-center basis-0 min-w-60 size-full max-md:max-w-full overflow-visible">
            <div className="relative flex flex-1 shrink gap-5 justify-between items-center w-full rounded-lg basis-0 bg-slate-950 min-w-60 overflow-visible max-h-80 max-md:flex-col max-md:gap-10 max-md:p-6 max-md:max-w-full">
              
              {/* Background Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/05521b0430a1386f2a3727a16349339a1188b94e?placeholderIfAbsent=true"
                className="object-contain absolute right-0 bottom-0 z-0 rounded-lg aspect-[3.77] h-[328px] min-w-60 w-[1240px] max-md:max-w-full"
                alt="Background decoration"
              />

              {/* Left Content */}
              <div className="flex z-10 flex-col items-start px-10 py-8 w-[620px] max-md:px-4 max-md:w-full">
                
                {/* Let's get started badge */}
                <div className="relative z-20 mb-4">
                  <div className="bg-[#F2EBFF] border-l-[2px] border-[#AB7EFF] w-fit px-3 py-1">
                    <span className="text-xs font-medium uppercase text-slate-950">
                      Let's get started
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-5xl font-semibold text-white leading-tight tracking-tight max-md:text-4xl">
                  Don't get left behind
                </h2>

                {/* Paragraph */}
                <p className="text-base text-slate-50 leading-7 mt-4">
                  Stay ahead of the competition with dwareapps – don’t get
                  <br />
                  left behind.
                </p>
              </div>

              {/* Right Illustration */}
              <div className="flex z-10 justify-end w-[496px] max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/81f83087fcb6770c4ceeec475235c447930c304b?placeholderIfAbsent=true"
                  className="object-contain aspect-[0.67] w-[292px] -mt-10 max-md:mx-auto"
                  alt="Call to action illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

import React from "react";

const CallToAction = () => {
  return (
    <div className="pt-7">
      <div className="flex flex-col justify-center items-center px-10 mt-7 w-full max-w-[1920px] mx-auto max-md:px-5 max-md:max-w-full overflow-visible">
        <div className="flex flex-1 justify-center pt-4 max-w-full h-full w-[1240px] overflow-visible">
          <div className="flex flex-1 shrink justify-center items-center basis-0 min-w-60 size-full max-md:max-w-full overflow-visible">
            <div className="flex relative flex-1 shrink gap-5 justify-center items-end my-auto w-full rounded-lg basis-0 bg-slate-950 min-w-60 overflow-visible max-h-80 max-md:max-w-full max-md:flex-col max-md:items-center max-md:max-h-none max-md:pb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/05521b0430a1386f2a3727a16349339a1188b94e?placeholderIfAbsent=true"
                className="object-contain absolute right-0 bottom-0 z-0 self-start rounded-lg aspect-[3.77] h-[328px] min-w-60 w-[1240px] max-md:max-w-full"
                alt="Background decoration"
              />

              {/* CTA Left Content */}
              <div className="flex z-0 flex-col gap-5 items-start p-16 min-w-60 w-[620px] max-md:px-5 max-md:max-w-full">

                {/* CTA Label */}
                <div className="w-[127px] max-md:mt-6">
                  <div className="border-solid bg-[#F2EBFF] border-l-[2px] border-l-[#AB7EFF] w-full">
                    <div className="text-xs font-medium leading-[21px] p-2 text-slate-950 uppercase">
                      Let's get started
                    </div>
                  </div>
                </div>

                {/* CTA Headline */}
                <div className="mt-5 text-5xl font-semibold tracking-tighter leading-none text-white capitalize max-w-[620px] w-[454px] max-md:text-4xl">
                  Don't get left behind
                </div>

                {/* CTA Description */}
                <div className="mt-5 w-full text-base leading-7 text-slate-50 max-w-[620px]">
                  Stay ahead of the competition with dwareapps – don't get&nbsp;left behind.
                </div>
              </div>

              {/* Right Image */}
              <div className="flex z-10 flex-col items-end min-w-60 w-[496px] max-md:max-w-full">
                <div className="flex flex-col justify-center w-full max-w-[496px] max-md:max-w-full">
                  <div className="flex flex-col flex-1 items-center w-full max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/81f83087fcb6770c4ceeec475235c447930c304b?placeholderIfAbsent=true"
                      className="object-contain max-w-full aspect-[0.67] w-[292px] -mt-10 max-md:mt-0 max-md:w-48"
                      alt="Call to action illustration"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

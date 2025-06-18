import React from "react";

const LogosSections = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 bg-white bg-opacity-20 max-w-[1920px] mx-auto max-md:px-5">
      <div className="flex flex-wrap flex-1 py-5 max-w-full h-full w-[1240px]">
        <div className="flex flex-col grow shrink justify-center items-center p-2.5 text-base tracking-tight leading-5 capitalize text-slate-950 w-[167px] text-center">
          <div className="max-w-full w-[171px]">
            <div className="flex flex-col justify-center w-full max-w-[171px]">
              <div className="flex-1 w-full text-center">
                <div className="text-base leading-[19.2px] text-center">
                  <span className="hidden md:block">
                    Trusted by global
                    <br />
                    companies
                  </span>
                  <span className="block md:hidden">
                    Trusted by global companies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink min-w-60 w-[989px] max-md:max-w-full">
          <div className="flex flex-col justify-center w-full max-w-[1031px] max-md:max-w-full">
            <div className="flex-1 w-full max-md:max-w-full">
              <div
                className="overflow-hidden w-full rounded-xl max-md:max-w-full max-md:bg-pink-200 max-md:p-6 max-md:border-2 max-md:border-pink-300 max-md:shadow-md max-md:mx-4"
                style={{
                  backgroundColor:
                    window.innerWidth <= 768 ? "rgba(251, 207, 232, 0.5)" : "",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/968a5d5b24d9a3b8c7721ef5fc71bc535122c2d1?placeholderIfAbsent=true"
                  alt="Company logos"
                  className="object-contain w-full aspect-[18.52] min-h-14 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosSections;

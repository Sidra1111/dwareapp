import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-50">
      <div className="flex flex-col items-center w-full">
        {/* Top Section */}
        <div className="px-10 pt-1 border-t border-gray-200 w-full max-w-[1920px] mx-auto max-md:px-5">
          <div className="flex flex-wrap justify-between items-center py-4 max-w-[1240px] mx-auto w-full">
            {/* Left Side: Logo + Tagline */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/9da6e4d9a4e34909102b9f43caaa55c1b294610a?placeholderIfAbsent=true"
                alt="Company Logo"
                className="w-[84px] object-contain"
              />
              <p className="text-base leading-5 text-slate-950 max-w-xs">
                Stay connected to your home or business anytime, anywhere.
              </p>
            </div>

            {/* Right Side: Email + Phone inline */}
            <div className="flex items-center gap-10 max-md:mt-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-slate-950 text-white w-7 h-7 flex items-center justify-center rounded-2xl text-sm">
                  @
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-950 leading-tight">
                    Email
                  </div>
                  <div className="text-base text-slate-700 leading-tight">
                    jerry@dwareapps.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="bg-slate-950 text-white w-7 h-7 flex items-center justify-center rounded-2xl text-sm">
                  📞
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-950 leading-tight">
                    Phone
                  </div>
                  <div className="text-base text-slate-700 leading-tight">
                    +16055451868
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-10 pt-1 border-t border-gray-200 bg-slate-950 w-full max-w-[1920px] mx-auto max-md:px-5">
          <div className="flex flex-wrap justify-between items-center py-5 max-w-[1240px] mx-auto w-full text-white text-sm">
            <div>© dwareapps All Rights Reserved.</div>
            <div className="flex gap-4">
              <div className="cursor-pointer hover:text-gray-300 transition">
                Refund Policy
              </div>
              <div className="cursor-pointer hover:text-gray-300 transition">
                Privacy Policy
              </div>
              <div className="cursor-pointer hover:text-gray-300 transition">
                Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

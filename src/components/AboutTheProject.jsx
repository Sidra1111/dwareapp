"use client";
import * as React from "react";

function AboutTheProject() {
  return (
    <div className="flex flex-col items-center px-4 text-base leading-7">
      <div className="pt-20 w-full max-w-[1240px] max-md:pt-12">
        <div className="flex flex-wrap justify-between gap-10 max-md:flex-col max-md:items-center">
          
          {/* Left Section */}
          <div className="flex flex-col gap-5 flex-1 min-w-[280px] max-w-full max-md:items-center max-md:text-center">
            
            <div className="py-8 pr-8 pl-10 rounded border-l-2 border-[#0F1535] bg-[#DDE2FF] w-full max-w-[590px]">
              <div className="text-xs font-medium uppercase text-slate-950">
                About the Project
              </div>
            </div>

            <div className="mt-5 text-base leading-[27.2px] w-full max-w-[590px] text-slate-950">
              <p>
                What started as a solution for the tourism industry has grown into a powerful platform that connects people to places — virtually. Whether it's a winery tour, a Petty Zoo memory, or a walk around an 1880 town, we let users see, record, and relive experiences from wherever they are.
              </p>
              <p className="text-neutral-600 mt-4">
                "This platform was born from personal stories — and built to help others create theirs."
              </p>
            </div>

            <div className="mt-5 text-5xl font-semibold tracking-tighter capitalize leading-tight text-slate-950 w-full max-w-[590px] max-md:text-3xl">
              — Jerry, CEO & Founder
            </div>

            <div className="mt-5 text-base text-neutral-600 leading-[27.2px] w-full max-w-[590px]">
              "Jerry was a computer programmer on the Apollo moon mission"
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center flex-1 max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/00af9b64bee707c634c205458cd4e18fd6202e21?placeholderIfAbsent=true"
              className="object-contain rounded-xl w-full max-w-[400px] md:max-w-[501px]"
              alt="Project Visual"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutTheProject;

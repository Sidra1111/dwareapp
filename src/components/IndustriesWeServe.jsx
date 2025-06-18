"use client";
import * as React from "react";

function IndustriesWeServe() {
  const industries = [
    {
      id: 1,
      title: "Tourism & Sightseeing",
      description:
        "Explore beautiful destinations without stepping outside. Perfect for travel planners, schools, and virtual explorers.",
    },
    {
      id: 2,
      title: "Breweries & Wineries",
      description:
        "Let clients virtually tour your vineyard and enjoy a rare view into your craft.",
    },
    {
      id: 3,
      title: "County Fairs",
      description:
        "Capture the nostalgia of community events — where memories are made and shared.",
    },
    {
      id: 4,
      title: "Car Dealerships",
      description:
        "Show off your showroom or new models with virtual viewing and remote recordings.",
    },
    {
      id: 5,
      title: "Mt. Rushmore & Scenic Locations",
      description:
        "Wineries, Breweries Share your memories with friends and Relatives.",
    },
    {
      id: 6,
      title: "Fun in the Black Hills",
      description:
        "Inspired by real memories, this feature lets users engage with the vibrant culture and beauty of the Black Hills region.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-40 max-w-[1920px] mx-auto w-full">
      <div className="max-w-[1240px] mx-auto">
        {/* Header Section */}
        <div className="text-left md:text-left max-md:!text-center mb-16">
          <div className="flex justify-start md:justify-start max-md:!flex max-md:!justify-center max-md:!w-full mb-4">
            <div className="flex flex-col items-start md:items-start max-md:!items-center py-3 pr-3 pl-3 bg-indigo-100 rounded border-l-2 border-solid border-l-black">
              <div className="text-xs md:text-xs max-md:!text-lg font-medium leading-5 uppercase text-slate-900 text-left md:text-left max-md:!text-center">
                Industries We Serve
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight text-black mb-6 text-left md:text-left max-md:!text-center">
            <span className="hidden md:inline">
              Built for Tourism. Designed for More.
            </span>
            <span className="block md:hidden max-md:!block max-md:!text-center">
              Built for Tourism.
              <br />
              Designed for More.
            </span>
          </h2>
          <div className="flex justify-start md:justify-start max-md:!flex max-md:!justify-center max-md:!w-full">
            <button className="rounded-lg bg-slate-900 text-base font-semibold tracking-tight leading-8 text-center text-white px-10 py-3 hover:bg-slate-800 transition-colors max-md:!mx-auto max-md:!block">
              Get Started
            </button>
          </div>
        </div>

        {/* Desktop Layout with Curves - Hidden on Mobile */}
        <div className="hidden lg:block relative">
          {/* First Section with Curve */}
          <div className="relative mb-16 w-full h-[629px]">
            {/* SVG Curve */}
            <div className="absolute left-0 top-7 h-[602px] w-full">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="curve-1" width="1071" height="450" viewBox="0 0 1071 450" fill="none" xmlns="http://www.w3.org/2000/svg" class="curve-svg" style="width: 1017px; height: 395px; stroke-width: 5px; stroke: #F57059; filter: drop-shadow(0px 24px 24px rgba(55,52,169,0.30)); position: absolute; left: 0px; top: 42px"> <g filter="url(#filter0_d_curve1)"> <path d="M26.625 311.26C74.625 346.26 186.425 412.26 249.625 396.26C328.625 376.26 348.125 273.26 470.125 249.26C592.125 225.26 681.625 308.76 776.125 188.26C870.625 67.7602 916.625 -11.2398 1043.62 5.76016" stroke="#F57059" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <filter id="filter0_d_curve1" x="0.124817" y="0.963501" width="1070" height="448.255" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="24"></feOffset> <feGaussianBlur stdDeviation="12"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_curve1"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_curve1" result="shape"></feBlend> </filter> </defs> </svg>',
                  }}
                />
              </div>

              {/* Industry Cards positioned along curve */}
              <div className="absolute h-[222px] left-[125px] top-[380px] w-[307px]">
                <div className="absolute top-0 font-bold tracking-tighter text-black opacity-5 h-[204px] leading-[204px] right-[-95px] text-[204px] w-[75px] z-[1]">
                  1
                </div>
                <div className="relative z-[2]">
                  <div className="absolute left-0 w-16 h-16 top-[13px]">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-3xl shadow-md" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="absolute left-px h-[121px] top-[101px] w-[306px]">
                    <div className="mb-px text-base font-extrabold tracking-tight leading-8 text-black">
                      Tourism &amp; Sightseeing
                    </div>
                    <div className="text-base font-medium tracking-tight leading-8 text-gray-500">
                      Explore beautiful destinations without stepping outside.
                      Perfect for travel planners, schools, and virtual
                      explorers.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-72 h-[204px] left-[592px] top-[248px]">
                <div className="absolute top-0 font-bold tracking-tighter text-black opacity-5 h-[204px] leading-[204px] right-[-130px] text-[204px] w-[118px] z-[1]">
                  2
                </div>
                <div className="relative z-[2]">
                  <div className="absolute left-0 w-16 h-16 top-[13px]">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-3xl shadow-md" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="absolute left-px h-[91px] top-[101px] w-[279px]">
                    <div className="mb-px text-base font-extrabold tracking-tight leading-8 text-black">
                      Breweries &amp; Wineries
                    </div>
                    <div className="text-base font-medium tracking-tight leading-8 text-gray-500">
                      Let clients virtually tour your vineyard and enjoy a rare
                      view into your craft.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 h-[222px] left-[928px] w-[297px]">
                <div className="absolute top-0 font-bold tracking-tighter text-black opacity-5 h-[204px] leading-[204px] right-[-136px] text-[204px] w-[123px] z-[1]">
                  3
                </div>
                <div className="relative z-[2]">
                  <div className="absolute left-0 w-16 h-16 top-[13px]">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-3xl shadow-md" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="absolute left-px h-[121px] top-[101px] w-[296px]">
                    <div className="mb-px text-base font-extrabold tracking-tight leading-8 text-black">
                      County Fairs
                    </div>
                    <div className="text-base font-medium tracking-tight leading-8 text-gray-500">
                      Capture the nostalgia of community events — where memories
                      are made and shared.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section with Curve */}
          <div className="relative w-full h-[602px]">
            <div className="absolute top-0 left-0 h-[602px] w-full">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg id="curve-2" width="1071" height="449" viewBox="0 0 1071 449" fill="none" xmlns="http://www.w3.org/2000/svg" class="curve-svg-2" style="width: 1017px; height: 395px; stroke-width: 5px; stroke: #F57059; filter: drop-shadow(0px 24px 24px rgba(55,52,169,0.30)); position: absolute; left: 0px; top: 42px"> <g filter="url(#filter0_d_curve2)"> <path d="M27.375 310.82C75.375 345.82 187.175 411.82 250.375 395.82C329.375 375.82 348.875 272.82 470.875 248.82C592.875 224.82 682.375 308.32 776.875 187.82C871.375 67.32 917.375 -11.68 1044.38 5.31997" stroke="#F57059" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <filter id="filter0_d_curve2" x="0.874817" y="0.523315" width="1070" height="448.255" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="24"></feOffset> <feGaussianBlur stdDeviation="12"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.203922 0 0 0 0 0.662745 0 0 0 0.3 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_curve2"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_curve2" result="shape"></feBlend> </filter> </defs> </svg>',
                  }}
                />
              </div>

              <div className="absolute h-[222px] left-[125px] top-[380px] w-[303px]">
                <div className="absolute top-0 font-bold tracking-tighter text-black opacity-5 h-[204px] leading-[204px] right-[-140px] text-[204px] w-[133px] z-[1]">
                  4
                </div>
                <div className="relative z-[2]">
                  <div className="absolute left-0 w-16 h-16 top-[13px]">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-3xl shadow-md" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="absolute left-px h-[121px] top-[101px] w-[279px]">
                    <div className="mb-px text-base font-extrabold tracking-tight leading-8 text-black">
                      Car Dealerships
                    </div>
                    <div className="text-base font-medium tracking-tight leading-8 text-gray-500">
                      Show off your showroom or new models with virtual viewing
                      and remote recordings.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute h-[204px] left-[592px] top-[248px] w-[297px]">
                <div className="absolute top-0 font-bold tracking-tighter text-black opacity-5 h-[204px] leading-[204px] right-[-134px] text-[204px] w-[127px] z-[1]">
                  5
                </div>
                <div className="relative z-[2]">
                  <div className="absolute left-0 w-16 h-16 top-[13px]">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-3xl shadow-md" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="absolute left-px h-[91px] top-[101px] w-[279px]">
                    <div className="mb-px text-base font-extrabold tracking-tight leading-8 text-black">
                      Mt. Rushmore &amp; Scenic Locations
                    </div>
                    <div className="text-base font-medium tracking-tight leading-8 text-gray-500">
                      Wineries, Breweries Share your memories with friends and
                      Relatives.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 h-[222px] left-[928px] w-[302px]">
                <div className="absolute top-0 font-bold tracking-tighter text-black opacity-5 h-[204px] leading-[204px] right-[-137px] text-[204px] w-[130px] z-[1]">
                  6
                </div>
                <div className="relative z-[2]">
                  <div className="absolute left-0 w-16 h-16 top-[13px]">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-3xl shadow-md" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="absolute left-px h-[121px] top-[101px] w-[301px]">
                    <div className="mb-px text-base font-extrabold tracking-tight leading-8 text-black">
                      Fun in the Black Hills
                    </div>
                    <div className="text-base font-medium tracking-tight leading-8 text-gray-500">
                      Inspired by real memories, this feature lets users engage
                      with the vibrant culture and beauty of the Black Hills
                      region.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout - Clean Grid */}
        <div className="lg:hidden">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="relative bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold tracking-tighter text-black opacity-10 text-8xl leading-none -z-10">
                  {industry.id}
                </div>
                <div className="relative z-20 space-y-4">
                  <div className="w-16 h-16 relative">
                    <div className="w-16 h-16 bg-white rounded-3xl shadow-md border border-gray-100" />
                    <div className="absolute top-5 left-5 rounded-xl bg-stone-300 h-[23px] w-[23px]" />
                  </div>
                  <div className="pr-8">
                    <h3 className="text-lg font-extrabold tracking-tight leading-7 text-black mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-sm font-medium tracking-tight leading-6 text-gray-600">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeServe;

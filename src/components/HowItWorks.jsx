import React from "react";

function HowItWorks() {
  return (
    <div className="flex justify-center px-5 py-1 max-w-[1920px] mx-auto bg-[#0F1535] relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/d4c07c991425a636880baba58bccffe947245995?placeholderIfAbsent=true"
        className="object-cover absolute right-0 bottom-0 z-0 h-full w-full max-md:max-w-full"
        alt=""
      />

      <div className="relative z-10 flex flex-col justify-center py-20 w-full max-w-[1240px]">
        {/* Header Section */}
        <div className="flex flex-wrap gap-5 items-start p-2.5 w-full max-md:flex-col max-md:items-start max-md:gap-4">
          {/* Left: Heading */}
          <div className="flex flex-col gap-5 max-w-[664px]">
            <div className="bg-[#F2EBFF] border-l-2 border-[#2A3979] px-4 py-2 rounded w-max">
              <p className="text-xs font-medium uppercase leading-[16px] text-slate-950 whitespace-nowrap">
                How It Works
              </p>
            </div>

            <h2 className="text-white text-5xl font-semibold leading-tight capitalize tracking-tight max-md:text-4xl max-w-[820px]">
              A New Way to Experience Destinations — Virtually and Personally
            </h2>
          </div>
        </div>

        {/* See Product Tag Aligned Right */}
        <div className="flex justify-end w-full mt-4 pr-2.5">
          <div className="bg-[#F2EBFF] border-l-2 border-[#2A3979] px-4 py-2 rounded w-max">
            <p className="text-xs font-medium uppercase leading-[16px] text-slate-950 whitespace-nowrap">
              See Product
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap gap-5 p-2.5 mt-5 w-full max-md:max-w-full max-md:flex-col max-md:items-center">
          {/* Left: Image and Stats */}
          <div className="flex overflow-hidden relative flex-col grow shrink items-start p-2.5 min-h-[745px] min-w-60 w-[664px] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/43e62fbbe89520480c8394cdb00148ca3f50f8a0?placeholderIfAbsent=true"
              className="object-cover absolute inset-0 size-full"
              alt=""
            />
            <div className="relative z-10 w-full mt-auto max-md:justify-center max-md:flex">
              <div className="flex gap-5 self-stretch p-2.5 w-full capitalize rounded-lg bg-blue-950/80 max-md:justify-center max-md:flex-wrap">
                {[
                  { number: "15", label: "Years of experience" },
                  { number: "435", label: "Expert Team" },
                  { number: "54", label: "Global Awards" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex z-10 flex-col justify-center p-7 w-56 rounded-lg text-center bg-blue-950/80 max-md:px-5"
                  >
                    <div className="text-white text-3xl font-bold leading-none mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium leading-6 text-purple-100">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Steps */}
          <div className="flex flex-col gap-5 font-semibold text-white min-w-60 w-[430px] max-md:hidden">
            {[
              {
                step: "01",
                title: "Live Cameras Installed Across the U.S.A",
                desc: "We've placed cameras in popular tourist attractions, wineries, county fairs, and more.",
                img: "8072d7e1e9afba64a6b83a959c46c4dc6092bb51",
              },
              {
                step: "02",
                title: "Use Our Mobile App to Take Control",
                desc: "Clients can view live footage and remotely record what they see using their phone.",
                img: "608ab87eb503dad7364cc563d5beb4b4276932b5",
              },
              {
                step: "03",
                title: "Get Your Custom Footage Delivered",
                desc: "The recorded video is processed and sent directly to your device — a souvenir from afar.",
                img: "805b363c5cad21098a876c4bdead89d2989bb07d",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-center p-6 rounded-lg bg-blue-950 min-h-[244px]"
              >
                <img
                  src={`https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/${item.img}?placeholderIfAbsent=true`}
                  className="object-contain absolute bottom-0 z-0 max-w-full h-full opacity-[0.8] w-[447px] right-0"
                  alt=""
                />
                <div className="z-10 px-1">
                  <div className="bg-[#F2EBFF] border-l-2 border-[#AB7EFF] rounded px-6 py-3 w-fit h-10 flex items-center justify-center text-sm font-semibold text-slate-950">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-lg leading-tight capitalize">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Only: Centered Steps */}
      <div className="hidden max-md:block max-md:w-full max-md:bg-[#0F1535] max-md:py-8">
        <div className="w-full flex flex-col items-center justify-center min-h-[200px]">
          {[
            {
              step: "01",
              title: "Live Cameras Installed Across the U.S.A",
              desc: "We've placed cameras in popular tourist attractions, wineries, county fairs, and more.",
              img: "8072d7e1e9afba64a6b83a959c46c4dc6092bb51",
            },
            {
              step: "02",
              title: "Use Our Mobile App to Take Control",
              desc: "Clients can view live footage and remotely record what they see using their phone.",
              img: "608ab87eb503dad7364cc563d5beb4b4276932b5",
            },
            {
              step: "03",
              title: "Get Your Custom Footage Delivered",
              desc: "The recorded video is processed and sent directly to your device — a souvenir from afar.",
              img: "805b363c5cad21098a876c4bdead89d2989bb07d",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-lg bg-blue-950 min-h-[244px] w-[85vw] max-w-[400px] font-semibold text-white mb-5 text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`https://cdn.builder.io/api/v1/image/assets/4b6a53c879c34e03b70122a1f7fb86ae/${item.img}?placeholderIfAbsent=true`}
                className="object-contain absolute bottom-0 z-0 max-w-full h-full opacity-[0.8] w-[120%] left-1/2 -translate-x-1/2"
                alt=""
              />
              <div className="z-10 px-1">
                <div className="bg-[#F2EBFF] border-l-2 border-[#AB7EFF] rounded px-6 py-3 w-fit h-10 flex items-center justify-center text-sm font-semibold text-slate-950 mx-auto">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg leading-tight capitalize">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

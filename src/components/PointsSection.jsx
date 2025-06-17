import React from "react";

function PointsSection() {
  return (
    <div className="flex relative flex-col gap-2.5 items-start pt-16 max-md:pt-12 max-sm:pt-8">
      <div className="flex relative flex-col gap-2.5 justify-center items-center p-2.5 mx-auto w-full max-w-7xl rounded-3xl border border-black border-solid h-[150px] max-md:p-5 md:max-lg:h-auto max-sm:p-4 max-sm:rounded-2xl max-sm:h-[300px]">
        <div className="flex relative justify-between items-center w-full max-md:flex-col max-md:gap-8 max-sm:gap-6">
          <div className="relative gap-2.5 p-2.5 text-4xl font-extrabold tracking-tighter leading-10 text-black flex-shrink-0 max-md:w-full max-md:text-3xl max-md:leading-10 max-md:text-center max-sm:text-2xl max-sm:tracking-tighter max-sm:leading-8">
            <span className="sm:inline">Among leave law built now.</span>
            <span className="hidden max-sm:block">Among leave</span>
            <span className="hidden max-sm:block">law built now.</span>
          </div>
          <div className="flex relative shrink-0 justify-between items-center flex-1 max-md:flex-col max-md:gap-6 max-md:w-full max-sm:gap-5">
            <div className="flex relative flex-wrap justify-between items-center w-full max-sm:flex-col max-sm:gap-4">
              <div className="flex relative gap-5 items-center max-md:justify-start max-md:w-full max-sm:flex-col max-sm:gap-3 max-sm:text-center max-sm:max-w-full">
                <div className="flex relative gap-2.5 items-center p-2.5 bg-white rounded-md border border-black border-solid h-[60px] w-[60px] max-sm:p-2 max-sm:h-[50px] max-sm:w-[50px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="77:5201" width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="display: flex; padding: 6px; align-items: center; gap: 10px; position: relative; width: 42px; height: 43px"> <path d="M35.7511 17.9406H24.4636L20.8756 6.56445L17.2875 17.9406H6L15.6256 24.9395L11.25 36.3156L20.8756 29.315L30.5011 36.3156L26.1256 24.9395L35.7511 17.9406Z" fill="black"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="relative text-xl tracking-tight leading-8 text-black w-[209px] max-md:text-lg max-md:leading-7 max-sm:w-full max-sm:text-base max-sm:leading-6">
                  Real-time camera control via mobile app
                </div>
              </div>
              <div className="flex relative gap-5 items-center max-md:justify-start max-md:w-full max-sm:flex-col max-sm:gap-3 max-sm:text-center">
                <div className="flex relative gap-2.5 items-center p-2.5 bg-white rounded-md border border-black border-solid h-[60px] w-[60px] max-sm:p-2 max-sm:h-[50px] max-sm:w-[50px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="77:5206" width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="display: flex; padding: 6px; align-items: center; gap: 10px; position: relative; width: 42px; height: 43px"> <path d="M31.5 17.0645C31.5 16.0145 30.8881 15.0514 29.925 14.702C30.537 13.9145 30.6256 12.7775 30.1006 11.8145C29.5756 10.8514 28.5256 10.415 27.5625 10.502C27.6495 9.53891 27.2131 8.48891 26.25 7.96391C25.287 7.43891 24.237 7.52585 23.3625 8.13945C23.0131 7.17803 22.05 6.56445 21 6.56445C19.95 6.56445 18.987 7.17639 18.6375 8.13945C17.7631 7.52751 16.7131 7.44053 15.75 7.96555C14.787 8.49056 14.3506 9.54055 14.4375 10.5036C13.4745 10.4167 12.4245 10.8531 11.8995 11.8161C11.3745 12.7792 11.4614 13.8292 12.075 14.7036C11.2006 15.1417 10.5 16.0161 10.5 17.0661C10.5 18.1161 11.1119 19.0792 12.075 19.4286C11.4631 20.2161 11.3744 21.353 11.8995 22.3161C12.4245 23.2792 13.4745 23.7155 14.4375 23.6286C14.3506 24.5917 14.787 25.6417 15.75 26.1667C15.75 26.1667 15.837 26.1667 15.837 26.2536L13.212 34.6536L16.5375 32.9031L18.2881 36.2286L21 27.5661H21.087H21.1739L23.8859 36.3156L25.6364 32.99L28.962 34.7406L26.2501 26.2536C26.2501 26.2536 26.337 26.2536 26.337 26.1667C27.3001 25.6417 27.7364 24.5917 27.6495 23.6286C28.6126 23.7156 29.6626 23.2792 30.1876 22.3161C30.7126 21.353 30.6256 20.303 30.012 19.4286C30.8881 19.0775 31.5001 18.1145 31.5001 17.0645L31.5 17.0645ZM21 23.1906C17.5875 23.1906 14.8756 20.4786 14.8756 17.0661C14.8756 13.6536 17.5875 10.9417 21 10.9417C24.4125 10.9417 27.1245 13.6536 27.1245 17.0661C27.1245 20.477 24.4125 23.1906 21 23.1906Z" fill="black"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="relative text-xl tracking-tight leading-8 text-black w-[201px] max-md:text-lg max-md:leading-7 max-sm:w-full max-sm:text-base max-sm:leading-6">
                  Instant video recording and delivery
                </div>
              </div>
              <div className="flex relative gap-5 items-center max-md:justify-start max-md:w-full max-sm:flex-col max-sm:gap-3 max-sm:text-center max-sm:max-w-full max-sm:w-full">
                <div className="flex relative gap-2.5 items-center p-2.5 bg-white rounded-md border border-black border-solid h-[60px] w-[60px] max-sm:p-2 max-sm:h-[50px] max-sm:w-[50px]">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          '<svg id="77:5211" width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon" style="display: flex; padding: 6px; align-items: center; gap: 10px; position: relative; width: 42px; height: 43px"> <path d="M20.9995 13.4404C17.1489 13.4404 13.9989 16.5904 13.9989 20.441C13.9989 22.016 14.5239 23.4154 15.3983 24.554C15.3983 24.554 15.6608 24.9035 15.7478 24.9921C16.5353 25.9552 18.4597 28.6671 18.4597 30.9427H23.7097C23.7097 28.6671 25.6342 25.9552 26.4217 24.9921C26.5086 24.9052 26.7711 24.554 26.7711 24.554C27.6456 23.4171 28.1706 21.929 28.1706 20.441C27.9999 16.5904 24.85 13.4404 20.9995 13.4404H20.9995Z" fill="black"></path> <path d="M18.3744 32.6899H23.6244V36.1894H18.3744V32.6899Z" fill="black"></path> <path d="M7 19.5649H12.25V21.3155H7V19.5649Z" fill="black"></path> <path d="M29.7489 19.5649H34.9989V21.3155H29.7489V19.5649Z" fill="black"></path> <path d="M30.2902 9.92139L31.5273 11.1584L27.8145 14.8711L26.5775 13.6341L30.2902 9.92139Z" fill="black"></path> <path d="M20.125 6.43994H21.8756V11.6899H20.125V6.43994Z" fill="black"></path> <path d="M11.7182 9.91357L15.4309 13.6263L14.1939 14.8633L10.4812 11.1506L11.7182 9.91357Z" fill="black"></path> </svg>',
                      }}
                    />
                  </div>
                </div>
                <div className="relative text-xl tracking-tight leading-8 text-black w-[168px] max-md:text-lg max-md:leading-7 max-sm:w-full max-sm:text-base max-sm:leading-6">
                  Easy and intuitive user experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PointsSection;

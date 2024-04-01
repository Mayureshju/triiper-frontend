'use client'
import React from 'react'

const Drive = () => {

  return (
    <div className="w-full pb-[120px] mq450:hidden">
      <div className="flex flex-row items-start justify-center text-left text-26xl text-heading-color font-montserrat">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-8xl mq900:text-17xl">
          Trippr can help you grow faster
        </h1>
      </div>

      <section className=" bg-slate-100 w-[100%] mx-auto flex flex-col items-start justify-start box-border mt-10 py-[70px] px-[20px] gap-[40px] max-w-full  text-left text-21xl text-small-card-color font-montserrat">
        {/* <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] flex items-center justify-center z-[0]">
        </div> */}
        <h1 className="m-0 text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq900:text-13xl">
          Drive and earn money!
        </h1>
        <div className="w-[100%] flex flex-row items-center justify-center gap-[50px] max-w-full text-6xl text-black mq1700:flex-wrap">
          <img
            className="w-[42%] h-[310px] max-w-full overflow-hidden object-cover mq900:min-w-full"
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <div className="w-[762.3px] flex flex-col items-start justify-start box-border min-w-[762.3px] max-w-full mq1325:min-w-full mq1700:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[18.9px]">
              <div className="self-stretch h-[246.7px] relative">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[25.3px] w-[737px] z-[1]">
                  <div className="absolute top-[18.9px] left-[28.7px] inline-block w-[737px] h-[90.7px] z-[2] mq450:text-lg">
                    <p className="[margin-block-start:0] [margin-block-end:8px] font-semibold">
                      Boost your earnings with trippr.
                    </p>
                    <p className="m-0 text-3xl font-view-all text-small-card-color whitespace-pre-wrap">
                      Our large community of trippr, means more orders per day
                      and higher earnings.
                    </p>
                  </div>
                  <div className="absolute top-[127.6px] left-[28.7px] inline-block w-[737px] h-[129px] z-[2] mq450:text-lg">
                    <p className="[margin-block-start:0] [margin-block-end:8px] font-semibold">
                      Manage your assets with trippr.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:8px] text-3xl font-view-all text-small-card-color">
                      Our 100+ million riders will send you plenty of ride
                      requests. When demand is high, you can earn even more
                    </p>
                  </div>
                </div>
                <img
                  className="absolute top-[18.9px] left-[0px] w-[45px] h-[45.3px] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <img
                  className="absolute top-[127.6px] left-[0px] w-[45px] h-[45.3px] object-contain z-[2]"
                  alt=""
                  src="/mask-group-1@2x.png"
                />
              </div>
              <button className="cursor-pointer pt-[12.1px] px-[49px] pb-[13.1px] bg-button-color w-[185px] rounded-3xs box-border flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-lightslategray hover:bg-royalblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray-100">
                <div className="h-[52.4px] w-[185px] relative rounded-3xs bg-button-color box-border hidden border-[1px] border-solid border-lightslategray" />
                <div className="relative text-lg font-semibold font-oswald text-primary-0 text-left inline-block min-w-[82px] z-[1]">
                  Learn more
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Drive
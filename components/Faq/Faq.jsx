'use client'

import React from 'react'

const Faq = () => {
    return (
        <div className='pt-[25px] pb-[150px] box-border px-5 text-justify text-lg text-slategray-200 font-view-all mq1700:px-[70px] mq450:hidden'>
            {/* <section className="flex flex-row items-center justify-center pt-0 pb-[140.6px] box-border max-w-full shrink-0 text-justify text-lg text-slategray-200 font-view-all mq1700:px-[70px] mq450:hidden">
               
            </section> */}
            <div className="flex flex-col items-center justify-start gap-[28px] max-w-full">
                <div className=" flex flex-row items-center justify-center py-0  box-border max-w-full">
                    <div className=" flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
                        <div className="rounded-51xl bg-primary-0 box-border overflow-x-auto flex flex-row items-start justify-start pt-px pb-0 pr-0 pl-[18px] gap-[53px] max-w-full border-[1px] border-solid border-lightsteelblue">
                            {/* <div className="self-stretch w-[492px] relative rounded-51xl bg-primary-0 box-border shrink-0 hidden border-[1px] border-solid border-lightsteelblue" /> */}
                            <div className="h-[41.5px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border">
                                <img
                                    className="w-6 h-6 relative z-[1]"
                                    alt=""
                                    src="/searchnormal.svg"
                                />
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[19.5px] px-0 pb-0">
                                <div className="h-5 relative tracking-[-0.02em] leading-[150%] font-medium flex items-center shrink-0 z-[1]">
                                    Describe your issue
                                </div>
                            </div>
                            <button className="cursor-pointer [border:none] pt-3 pb-[17px] pr-[57.3px] pl-[59px] bg-button-color rounded-51xl flex flex-row items-start justify-start z-[1] hover:bg-royalblue-200">
                                <div className="h-[59px] w-[181px] relative rounded-51xl bg-button-color hidden" />
                                <div className="relative text-xl uppercase font-semibold font-oswald text-primary-0 text-left inline-block min-w-[64.7px] z-[1] mq450:text-base">
                                    Search
                                </div>
                            </button>
                        </div>
                        {/* <div className="w-[117px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border text-center text-xl text-small-card-color font-montserrat">
                            <div className="self-stretch relative tracking-[-0.02em] capitalize font-semibold inline-block min-w-[117px] mq450:text-base">
                                Quick links
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[55px] max-w-full text-left text-xs text-black font-montserrat mq1700:px-[70px]">
                    <div className="h-[40%] w-[40%] flex flex-col items-start justify-start px-0 pb-0 box-border max-w-full">
                        <img
                            className="self-stretch flex-1  max-w-full overflow-hidden max-h-full object-cover"
                            loading="lazy"
                            alt=""
                            src="/group-1000004609@2x.png"
                        />
                    </div>
                    <div className=" flex flex-col items-start justify-start gap-[20px] max-w-full">
                        <div className="self-stretch rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden flex flex-col items-start justify-start py-[20px] px-[25px] max-w-full text-royalblue-100 border-[1px] border-solid border-darkgray-500">
                            <div className=" flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
                                <div className="h-12 flex-1 font-semibold inline-block max-w-full mq450:text-base">
                                    <p className="m-0">How do I make a reservation?</p>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-1.5 pb-11 mt-[-24px]">
                                <div className="h-1 w-[29px] shadow-[0px_6px_6px_rgba(0,_0,_0,_0.12)] box-border border-t-[4px] border-solid border-royalblue-100" />
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full mt-[-24px] text-3xs text-small-card-color">
                                <div className="self-stretch h-px shadow-[0px_6px_6px_rgba(0,_0,_0,_0.12)] box-border border-t-[1px] border-solid border-darkgray-400" />
                                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
                                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                                        <div className="w-[401px] inline-block shrink-0 max-w-[calc(100%_-_45px)]">
                                            Making a reservation is easy! Simply visit our website
                                            and select your desired destination, travel dates, and
                                            accommodation preferences. Follow the prompts to
                                            complete the booking process, and you're all set!
                                        </div>
                                        <div className="h-[30.5px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                                            <div className="w-[25px] h-[25px] relative flex items-center justify-center">
                                                <img
                                                    className="w-full h-full object-contain absolute left-[0px] top-[6px] [transform:scale(1.48)]"
                                                    alt=""
                                                    src="/group-1000004600.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-[22px] pr-10 pl-[38px] max-w-full gap-[20px] border-[1px] border-solid border-darkgray-500">
                            <div className="flex flex-row items-start justify-start max-w-[calc(100%_-_45px)]">
                                <div className="relative font-semibold mq450:text-base">
                                    Can I make changes to my reservation?
                                </div>
                                <div className="h-[25px] w-[25px] hidden" />
                            </div>
                            <div className="h-[25px] w-[25px] relative min-h-[25px] flex items-center justify-center">
                                <img
                                    className="h-full w-full min-h-[25px] object-contain absolute left-[0px] top-[6px] [transform:scale(1.48)]"
                                    alt=""
                                    src="/group-1000004600-1.svg"
                                />
                            </div>
                        </div>
                        <div className="self-stretch h-[69px] rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-[22px] pr-10 pl-[38px] max-w-full gap-[20px] border-[1px] border-solid border-darkgray-500">
                            <div className="flex flex-row items-start justify-start max-w-[calc(100%_-_45px)]">
                                <div className="relative font-semibold mq450:text-base">
                                    What is your Cancellation policy?
                                </div>
                                <div className=" hidden" />
                            </div>
                            <div className="h-[25px] w-[25px] relative min-h-[25px] flex items-center justify-center">
                                <img
                                    className="h-full w-full min-h-[25px] object-contain absolute left-[0px] top-[6px] [transform:scale(1.48)]"
                                    alt=""
                                    src="/group-1000004600-1.svg"
                                />
                            </div>
                        </div>
                        <div className="self-stretch h-[69px] rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-[22px] pr-10 pl-[38px] max-w-full gap-[20px] border-[1px] border-solid border-darkgray-500">
                            <div className="flex flex-row items-start justify-start max-w-[calc(100%_-_45px)]">
                                <div className="relative font-semibold mq450:text-base">
                                    {" "}
                                    What if I have a problem during my trip
                                </div>
                                <div className="h-[25px] w-[25px] hidden" />
                            </div>
                            <div className="h-[25px] w-[25px] relative min-h-[25px] flex items-center justify-center">
                                <img
                                    className="h-full w-full min-h-[25px] object-contain absolute left-[0px] top-[6px] [transform:scale(1.48)]"
                                    alt=""
                                    src="/group-1000004600-1.svg"
                                />
                            </div>
                        </div>
                        <div className="self-stretch rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[21px] px-[39px] pb-6 gap-[23px] border-[1px] border-solid border-darkgray-500">
                            <div className="h-[25px] w-[25px] hidden" />
                            <div className="relative font-semibold z-[1] mq450:text-base">
                                Can I get a refund if I need to cancel my booking?
                            </div>
                            <div className="h-[25px] w-[25px] relative min-h-[25px] flex items-center justify-center">
                                <img
                                    className="h-full w-full min-h-[25px] object-contain absolute left-[0px] top-[6px] [transform:scale(1.48)]"
                                    alt=""
                                    src="/group-1000004600-1.svg"
                                />
                            </div>
                        </div>
                        <div className="self-stretch h-[70px] rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[21px] pb-6 pr-[41px] pl-[38px] gap-[20px] border-[1px] border-solid border-darkgray-500">
                            <div className="h-[25px] w-[25px] hidden" />
                            <div className="relative font-semibold z-[1] mq450:text-base">
                                How do I access my booking details?
                            </div>
                            <div className="h-[25px] w-[25px] relative min-h-[25px] flex items-center justify-center">
                                <img
                                    className="h-full w-full min-h-[25px] object-contain absolute left-[0px] top-[6px] [transform:scale(1.48)]"
                                    alt=""
                                    src="/group-1000004600-1.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border max-w-full text-center">
                        <div className="self-stretch flex flex-col items-center justify-center gap-[20px]">
                            <div className="self-stretch text-left text-xl text-small-card-color font-montserrat tracking-[-0.02em] capitalize font-semibold inline-block mq450:text-base">
                                Quick links
                            </div>
                            <div className="self-stretch rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] overflow-hidden flex flex-col items-start justify-start pt-[22px] pb-[21px] pr-9 pl-[37px] gap-[10px] border-[1px] border-solid border-darkgray-500">
                                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                                    <div className="w-[202px] relative tracking-[-0.02em] font-semibold inline-block mq450:text-base">
                                        <span className="capitalize">{`Join `}</span>
                                        <span className="lowercase">the Community</span>
                                    </div>
                                </div>
                                <div className="self-stretch h-[78px] relative text-mini text-small-card-color text-left inline-block shrink-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet metus sed ipsum gravida, id tempor sem facilisis. Nulla facilisi. Proin `}</div>
                            </div>
                            <div className="self-stretch rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] overflow-hidden flex flex-col items-start justify-start pt-[23px] pb-[19px] pr-[35px] pl-[38px] gap-[11px] border-[1px] border-solid border-darkgray-500">
                                <div className="w-[25px] h-[25px] hidden" />
                                <div className="w-[199px] relative tracking-[-0.02em] font-semibold inline-block z-[1] mq450:text-base">
                                    <span className="capitalize">{`Read `}</span>
                                    <span className="lowercase">the guidelines</span>
                                </div>
                                <div className="self-stretch h-[78px] relative text-mini text-small-card-color text-left inline-block shrink-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet metus sed ipsum gravida, id tempor sem facilisis. Nulla facilisi. Proin `}</div>
                            </div>
                            <div className="self-stretch rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] overflow-hidden flex flex-col items-start justify-start py-[21px] pr-[35px] pl-[38px] relative gap-[11px] border-[1px] border-solid border-darkgray-500">
                                <div className="w-[25px] h-[25px] !m-[0] absolute top-[22px] left-[39px] flex flex-row items-start justify-start">
                                    <div className="h-6 w-0 hidden" />
                                </div>
                                <div className="w-[252px] relative tracking-[-0.02em] font-semibold inline-block z-[1] mq450:text-base">
                                    <span className="capitalize">{`Seek `}</span>
                                    <span className="lowercase">help of a consultant</span>
                                </div>
                                <div className="self-stretch h-[78px] relative text-mini text-small-card-color text-left inline-block shrink-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet metus sed ipsum gravida, id tempor sem facilisis. Nulla facilisi. Proin `}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
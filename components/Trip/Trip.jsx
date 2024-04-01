'use client'

import React from 'react'

const Trip = () => {

    const trip_data = [
        {
            id: 1,
            location: `Ooty, Tamil Nadu`,
            desc: `A gorgeous hill station in Tamil Nadu.`,
            image: `/image-6@2x.png`
        },
        {
            id: 2,
            location: `Kodaikanal, Tamil Nadu`,
            desc: `Often referred as "Princess of Hill stations.`,
            image: `/image-6-1@2x.png`
        },
        {
            id: 3,
            location: `Coorg, Karnataka`,
            desc: `A beautiful hill station in the Indian state of Karnataka.`,
            image: `/image-6-2@2x.png`
        },
        {
            id: 4,
            location: `Pondicherry`,
            desc: `Pondicherry is a destination for beach lovers`,
            image: `/image-6-3@2x.png`
        },
        {
            id: 5,
            location: `Wayanad, Kerala`,
            desc: `Loaded with charming waterfalls, caves & homestays.`,
            image: `/download.jpeg`
        },
        {
            id: 6,
            location: `Chennai, Tamil Nadu`,
            desc: `Ancient temples, vibrant arts, natural wonders make Chennai`,
            image: `/image-6-5@2x.png`
        },
    ]

    return (
        <div>

            <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[183.4px] pr-5 pl-[22px] box-border max-w-full shrink-0 text-left text-21xl text-heading-color font-montserrat">
                <div className="w-[1738px] flex flex-col items-start justify-start gap-[70px] max-w-full mq450:gap-[30px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq900:flex-wrap">
                        <h1 className="m-0 text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq900:text-13xl">
                            Inspirations for your next trip
                        </h1>
                        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 text-6xl text-button-color font-view-all mq450:hidden">
                            <h3 className="m-0 relative text-inherit [text-decoration:underline] font-medium font-inherit inline-block min-w-[92px] mq450:text-xl">
                                View all
                            </h3>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 items-center justify-center gap-[25px] min-h-[393px] max-w-full text-11xl text-small-card-color font-oswald mq450:grid-cols-1">
                        {
                            trip_data && trip_data.map((data, index) => {
                                return (
                                 
                                        <div key={data.id} className="rounded-26xl bg-primary-0 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-6 px-5 gap-[34px] max-w-full border-[1px] border-solid border-darkgray-500 mq900:flex-wrap">
                                            <img
                                                className="w-[25%] self-stretch rounded-xl object-cover mq900:flex-1"
                                                alt=""
                                                src={data.image}
                                            />
                                            <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[217px] max-w-full">
                                                <div className="flex flex-row items-center justify-start gap-[6px]">
                                                    <div className="h-[35.1px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                                                        <img
                                                            className="w-[23px] h-[26.1px]"
                                                            alt=""
                                                            src="/freepikgraphicsinject62-1.svg"
                                                        />
                                                    </div>
                                                    <h2 className="m-0 text-xl font-semibold font-inherit mq450:text-lg mq900:text-5xl">
                                                        {data.location}
                                                    </h2>
                                                </div>
                                                <div className=" text-[16px] font-semibold font-nunito text-lines-borders mq450:text-lg">
                                                    {data.desc}
                                                </div>
                                            </div>
                                        </div>
                                   
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Trip
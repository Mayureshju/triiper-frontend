'use client'
import React from 'react'
import { Radio } from "@material-tailwind/react";
import UseRadioGroup from './radio_btn';
import { RadioGroup } from '@mui/material';
import Image from 'next/image';
import HeroImg from "../../public/hero_image.jpg"
import Group1 from "../../public/group-427320913.svg"
import Group2 from "../../public/group-1000004755.svg"
import HeroMobile from "../../public/hero_image_mobile.jpg"
import { useState } from 'react';

const Hero_section = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <div>
                <Image src={HeroImg} alt="" className='w-full mq450:hidden' />

            </div>

            {/* <div className="h-[313px] w-[1609px] relative rounded-xl bg-primary-0 box-border hidden max-w-full z-[0] border-[3px] border-solid border-button-color" /> */}
            <div className=' pb-[20px] w-[100%] flex  justify-center mx-auto  font-montserrat mq450:hidden'>
                <div className="flex flex-col items-start justify-start gap-[40px] max-w-full rounded-3xl border-solid border-blue-900 border-2 box-border py-[20px] px-[25px]">
                    <div className="w-[510px] flex flex-col items-start justify-start gap-[9px] max-w-full">
                        <div className="w-[451px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
                            <div className="flex-1 rounded-xl flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq900:flex-wrap border-b-2 border-black ">
                                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[57px] mq450:text-xl">
                                    Cars
                                </h3>
                                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[78px] mq450:text-xl">
                                    Buses
                                </h3>
                                <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-xl">
                                    Homestays
                                </h3>
                            </div>
                        </div>
                        <div className="self-stretch h-0 relative shrink-0 z-[1] flex items-center justify-center">
                            <Image
                                className="self-stretch h-full max-w-full overflow-hidden shrink-0 z-[1] object-contain absolute left-[0px] top-[4px] w-full [transform:scale(Infinity)]"
                                alt=""
                                src={Group1}
                            />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-lg">
                        <RadioGroup className='w-[60%] flex flex-row justify-between' value={selectedValue} onChange={handleChange}>
                            <UseRadioGroup value="Outstation One way" label="Outstation One way" />
                            <UseRadioGroup value="Outstation Round trip" label="Outstation Round trip" />
                            <UseRadioGroup value="Local" label="Local" />
                            <UseRadioGroup value="Airport Cabs" label="Airport Cabs" />
                        </RadioGroup>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[14px] max-w-full text-3xl mq1325:flex-wrap">
                            <div className="flex flex-col items-start justify-start pt-[50px] pb-0 pr-4 pl-0">
                                <div className="flex flex-row items-start justify-start relative">
                                    <div className="w-[282px] !m-[0] absolute top-[-38px] right-[-40px] flex flex-row items-start justify-start pt-[7px] px-0 pb-[13px] box-border z-[1]">
                                        <b className="ml-[-2px] relative inline-block z-[2] mq450:text-lg">
                                            Pick Up Location
                                        </b>
                                    </div>
                                    <div className="relative text-xs font-view-all text-lines-borders z-[2]">
                                        Where do you want the vehicle to pick you?
                                    </div>
                                </div>
                            </div>
                            <div className="w-[286px] flex flex-row items-end justify-start gap-[4px]">
                                <div className="h-[52px] w-px relative shadow-[0px_4px_8px_rgba(0,_0,_0,_0.5)] box-border z-[2] border-r-[1px] border-solid border-darkgray-100" />
                                <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
                                    <div className="flex flex-col items-start justify-start pt-[18px] px-2.5 pb-0.5 gap-[4px] z-[2]">
                                        <b className="relative z-[3] mq450:text-lg">
                                            Drop location
                                        </b>
                                        <div className="relative text-sm font-view-all text-lines-borders z-[3]">
                                            Which city do you wish to visit?
                                        </div>
                                    </div>
                                    <div className="h-[52px] w-px relative shadow-[0px_4px_8px_rgba(0,_0,_0,_0.5)] box-border z-[1] border-r-[1px] border-solid border-darkgray-100" />
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[271px] max-w-full">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                                    <b className="relative leading-[21px] z-[1] mq450:text-lg mq450:leading-[17px]">{`Start Date & Time - End Date & Time`}</b>
                                    <div className="relative text-sm font-view-all text-lines-borders z-[1]">{`Add date & Time for your vehicle to arrive `}</div>
                                </div>
                            </div>
                            <div className="h-16 w-[319px] flex flex-row items-end justify-start gap-[100px] text-3xl">
                                <div className="h-[51px] flex flex-row items-end justify-start gap-[14px]">
                                    <div className="self-stretch w-px relative shadow-[0px_4px_8px_rgba(0,_0,_0,_0.5)] box-border z-[1] border-r-[1px] border-solid border-darkgray-100" />
                                    <div className="flex flex-col items-start justify-start gap-[3px]">
                                        <b className="relative z-[1] mq450:text-lg">Passengers</b>
                                        <div className="relative text-sm font-view-all text-lines-borders z-[1]">
                                            Add Total Passengers
                                        </div>
                                    </div>
                                </div>
                                <div className="h-16 w-16 relative z-[1] flex items-center justify-center">
                                    <Image
                                        className="h-full w-full z-[1] object-contain absolute left-[0px] top-[6px] [transform:scale(1.188)]"
                                        alt=""
                                        src={Group2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className=' mq1700:hidden mq1325:hidden mq900:hidden mq450:block w-[100%] flex justify-center items-center'>

                {/* <Image src={HeroImg} alt="" className='w-[100%]' /> */}
                <img src="./hero_image_mobile.jpg" alt="" className='w-[100%]' />

            </div>

        </>
    )
}

export default Hero_section

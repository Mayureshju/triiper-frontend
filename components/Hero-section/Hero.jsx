'use client'

import { useState } from 'react';
import React from 'react'
import { Radio } from "@material-tailwind/react";
import UseRadioGroup from './radio_btn';
import { Button, InputAdornment, RadioGroup, TextField } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';



const Hero_section = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <div>
                <img src="./hero_image.jpg" alt="" className='w-full mq450:hidden' />
            </div>

            {/* <div className="h-[313px] w-[1609px] relative rounded-xl bg-primary-0 box-border hidden max-w-full z-[0] border-[3px] border-solid border-button-color" /> */}
            <div className=' pb-[20px] w-[100%] flex  justify-center mx-auto  font-montserrat mq450:hidden'>
                <div className=" w-[90%] flex flex-col items-start justify-start gap-[40px] max-w-full rounded-3xl border-solid border-blue-900 border-2 box-border py-[20px] px-[25px]">
                    <div className="w-[451px] flex flex-col items-start justify-start py-0 px-1.5 box-border max-w-full">
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
                    <RadioGroup className='w-[60%] flex flex-row justify-between' value={selectedValue} onChange={handleChange}>
                        <UseRadioGroup value="Outstation One way" label="Outstation One way" />
                        <UseRadioGroup value="Outstation Round trip" label="Outstation Round trip" />
                        <UseRadioGroup value="Local" label="Local" />
                        <UseRadioGroup value="Airport Cabs" label="Airport Cabs" />
                    </RadioGroup>
                    <div className="w-[100%] grid grid-cols-5 items-center gap-[10px] max-w-full text-3xl">
                        <TextField fullWidth label="Pick Up location" id="fullWidth" />
                        <TextField fullWidth label="Drop location" id="fullWidth" />
                        {/* <TextField fullWidth label="Start Date & Time - End Date & Time" id="fullWidth" /> */}
                        {/* <DateTimePicker label="Basic date time picker" /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker label="Start Date & Time" />
                        </LocalizationProvider>
                        <TextField fullWidth label="Add Total Passengers" id="fullWidth" />
                        <button className='h-[70px] w-[70px] rounded-[50%] bg-blue-800'><ArrowRightAltIcon className='text-white' fontSize='large' /></button>
                    </div>
                </div>

            </div>


            <div className=' mq1700:hidden mq1325:hidden mq900:hidden mq450:block w-[100%] flex justify-center items-center'>

                <img src="./hero_image_mobile.jpg" alt="" className='w-[100%]' />

            </div>

        </>
    )
}

export default Hero_section




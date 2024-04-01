'use client'

import { Button, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Explore_mobile = () => {
    return (
        <div className='mq1700:hidden mq1325:hidden mq900:hidden mq450:block flex flex-col w-[100%] box-border px-[10px] my-[30px] font-montserrat'>
            <p className='text-center text-[25px] font-bold mb-[30px]'>
                Trippr can help you grow faster
            </p>

            <div className=" bg-hero-pattern h-[300px]">
                <div className='flex flex-col justify-end items-center box-border pb-[30px] w-[100%] h-[300px]'>
                    <p className='font-montserrat text-white font-bold text-[25px] pb-[43px]'>Not sure where to go? Perfect.</p>
                    <Button variant='contained'>Explore <ArrowRightAltIcon /></Button>
                </div>
            </div>


        </div>
    )
}

export default Explore_mobile
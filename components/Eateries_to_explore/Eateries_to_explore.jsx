'use client'

import { Typography } from '@mui/material'
import React from 'react'

const Eateries_to_explore = () => {
    return (
        <div className='mq1700:hidden mq1325:hidden mq900:hidden mq450:block flex flex-col w-[100%] box-border px-[10px]'>
            <p className='font-montserrat font-bold text-[25px] text-center mb-[20px]'>
                Eateries To Explore!
            </p>

            <div>
                <div className='grid grid-cols-1 mb-[10px]'>
                    <img className='w-[100%] h-[250px]' src="/trip_1.png" alt="" srcSet="" />
                </div>
                <div className='grid grid-cols-2 gap-[10px]'>
                    <img className='w-[100%]' src="/trip_1.png" alt="" srcSet="" />
                    <img className='w-[100%]' src="/trip_1.png" alt="" srcSet="" />
                </div>
                <div className='grid grid-cols-2 gap-[10px]'>
                    <img className='w-[100%] mt-[10px]' src="/trip_1.png" alt="" srcSet="" />
                    <img className='w-[100%] mt-[10px]' src="/trip_1.png" alt="" srcSet="" />
                </div>
            </div>
        </div>
    )
}

export default Eateries_to_explore
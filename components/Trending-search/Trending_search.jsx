'use client'

import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';
const Trending_search = () => {



    const styles = {
        borderRadius: 8,
        backgroundColor: "#159498",
    }

    const styles_2 = {
        borderRadius: 8,
        backgroundColor: "#1BD7BB",
    }

    return (
        <div className=' w-[100%] box-border py-[50px] px-[40px] pb-[80px] font-montserrat mq450:hidden'>
            <div className='w-[90%] mx-auto'>
                <h3 className=" text-4xl font-semibold text-gray-600  antialiased pb-10">
                    Trending Search:
                </h3>

                <div className=' flex flex-row flex-wrap w-[100%] gap-[25px]'>
                    <Button style={styles} className=' rounded-lg' variant="contained">
                        Bangalore <ArrowRightAltIcon /> Coorg
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Wayanad
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Ooty
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Pondicherry
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Pondicherry
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Pondicherry
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Coorg <ArrowRightAltIcon /> Bangalore
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Ooty <ArrowRightAltIcon /> Bangalore
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Ooty <ArrowRightAltIcon /> Bangalore
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Coorg <ArrowRightAltIcon /> Mysore <ArrowRightAltIcon /> Bangalore
                    </Button>
                    <Button style={styles_2} variant="contained">
                        Bangalore <ArrowRightAltIcon /> Coorg <ArrowRightAltIcon /> Mysore <ArrowRightAltIcon /> Bangalore
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Trending_search



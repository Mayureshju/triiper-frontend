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



{/*
<div className="absolute top-[1025.3px] left-[27px] flex flex-row items-start justify-start gap-[21px] z-[8] mq1325:flex-wrap">
                <button className="cursor-pointer [border:none] p-3 bg-darkcyan rounded-3xs shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] overflow-x-auto flex flex-row items-start justify-start gap-[5px]">
                    <div className="h-[46px] w-[201px] relative rounded-3xs bg-darkcyan shrink-0 hidden" />
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[95px] z-[1]">{`Bangalore `}</div>
                    <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                        <img
                            className="w-4 h-[7.4px] relative z-[1]"
                            alt=""
                            src="/arrow-3.svg"
                        />
                    </div>
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[56px] z-[1]">
                        Coorg
                    </div>
                </button>
                <button className="cursor-pointer [border:none] p-3 bg-turquoise rounded-3xs shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] overflow-x-auto flex flex-row items-start justify-start gap-[5px]">
                    <div className="h-[46px] w-[232px] relative rounded-3xs bg-turquoise shrink-0 hidden" />
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[95px] z-[1]">{`Bangalore `}</div>
                    <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                        <img
                            className="w-4 h-[7.4px] relative z-[1]"
                            alt=""
                            src="/arrow-3.svg"
                        />
                    </div>
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[86px] z-[1]">
                        Wayanad
                    </div>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-[18px] bg-turquoise rounded-3xs shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] overflow-x-auto flex flex-row items-start justify-start gap-[5px]">
                    <div className="h-[46px] w-[201px] relative rounded-3xs bg-turquoise shrink-0 hidden" />
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[95px] z-[1]">{`Bangalore `}</div>
                    <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                        <img
                            className="w-4 h-[7.4px] relative z-[1]"
                            alt=""
                            src="/arrow-3.svg"
                        />
                    </div>
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[44px] z-[1]">
                        Ooty
                    </div>
                </button>
                <button className="cursor-pointer [border:none] py-3 px-[13px] bg-turquoise rounded-3xs shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] overflow-x-auto flex flex-row items-start justify-start gap-[5px]">
                    <div className="h-[46px] w-[260px] relative rounded-3xs bg-turquoise shrink-0 hidden" />
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[95px] z-[1]">{`Bangalore `}</div>
                    <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                        <img
                            className="w-4 h-[7.4px] relative z-[1]"
                            alt=""
                            src="/arrow-3.svg"
                        />
                    </div>
                    <div className="relative text-lg font-medium font-montserrat text-primary-0 text-left inline-block min-w-[113px] z-[1]">
                        Pondicherry
                    </div>
                </button>
            </div>
            <div className="absolute top-[1091.3px] left-[27px] w-[1483px] flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full z-[8] text-lg text-primary-0">
                <div className="flex-1 rounded-3xs bg-turquoise shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-3 px-[21.2px] box-border min-w-[313px] max-w-full">
                    <div className="h-[46px] w-[355px] relative rounded-3xs bg-turquoise hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-start justify-start py-0 px-[6.8px] gap-[5px] z-[1] mq450:flex-wrap">
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3-2.svg"
                            />
                        </div>
                        <div className="relative font-medium inline-block min-w-[56px] z-[2]">
                            Coorg
                        </div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3.svg"
                            />
                        </div>
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                    </div>
                </div>
                <div className="flex-1 rounded-3xs bg-turquoise shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-3 px-[21.2px] box-border min-w-[313px] max-w-full">
                    <div className="h-[46px] w-[355px] relative rounded-3xs bg-turquoise hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[12.8px] pl-[13.8px] gap-[5px] z-[1] mq450:flex-wrap">
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3-2.svg"
                            />
                        </div>
                        <div className="relative font-medium inline-block min-w-[44px] z-[2]">
                            Ooty
                        </div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3.svg"
                            />
                        </div>
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                    </div>
                </div>
                <div className="flex-1 rounded-3xs bg-turquoise shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-3 px-[21.2px] box-border min-w-[313px] max-w-full">
                    <div className="h-[46px] w-[355px] relative rounded-3xs bg-turquoise hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[12.8px] pl-[13.8px] gap-[5px] z-[1] mq450:flex-wrap">
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3-2.svg"
                            />
                        </div>
                        <div className="relative font-medium inline-block min-w-[44px] z-[2]">
                            Ooty
                        </div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3.svg"
                            />
                        </div>
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                    </div>
                </div>
                <div className="flex-1 rounded-3xs bg-turquoise shadow-[10px_10px_20px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-3 px-[21.2px] box-border min-w-[313px] max-w-full">
                    <div className="h-[46px] w-[355px] relative rounded-3xs bg-turquoise hidden max-w-full" />
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.8px] gap-[5px] z-[1] mq450:flex-wrap">
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3-2.svg"
                            />
                        </div>
                        <div className="relative font-medium inline-block min-w-[44px] z-[2]">
                            Ooty
                        </div>
                        <div className="h-[18.4px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
                            <img
                                className="w-4 h-[7.4px] relative z-[2]"
                                alt=""
                                src="/arrow-3.svg"
                            />
                        </div>
                        <div className="flex-1 relative font-medium inline-block min-w-[62px] z-[2]">{`Bangalore `}</div>
                    </div>
                </div>
            </div>

*/}
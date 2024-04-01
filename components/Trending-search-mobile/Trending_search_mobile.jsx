'use client'
import { Button, FormControlLabel, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import TaxiAlertOutlinedIcon from '@mui/icons-material/TaxiAlertOutlined';
import DepartureBoardOutlinedIcon from '@mui/icons-material/DepartureBoardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InputAdornment from '@mui/material/InputAdornment';

const Trending_search_mobile = () => {
    const styles = {
        borderRadius: 8,
        textTransform: "capitalize",
    }
    const styles2 = {
        borderRadius: 8,
        textTransform: "capitalize",
        background: `linear-gradient(332deg, #002aff 25%, #b4bdfd 100%)`,
        color: `white`
    }

    const box_style = {
        boxShadow: `0px 5px 11px 0px #000000`,
        borderRadius: 8,
    }
    return (
        <div className='mq1700:hidden mq1325:hidden mq900:hidden mq450:block box-border px-[20px] mt-[50px] flex flex-col items-center font-montserrat'>
            <div className="button_div mx-auto w-[80%] flex justify-center items-center gap-[15px] ">
                <Button style={styles} variant="outlined">
                    Cars
                </Button>
                <Button style={styles} variant="outlined">
                    Buses
                </Button>
                <Button style={styles} variant="outlined">
                    Homestays
                </Button>
            </div>

            <div style={box_style} className="button_div_2 border-2  my-[25px] flex justify-between items-center   py-[10px] px-[5px]">
                <Button style={styles2} className='text-white flex flex-col justify-center'>
                    <FlightTakeoffOutlinedIcon className='text-white' />
                    <Typography>
                        Airport Cabs
                    </Typography>
                </Button>
                <Button style={styles} className='text-gray-400 flex flex-col justify-center'>
                    <TaxiAlertOutlinedIcon className='text-gray-400' />
                    <Typography className='text-gray-400'>
                        Local
                    </Typography>
                </Button>
                <Button style={styles} className='flex flex-col justify-center'>
                    <DepartureBoardOutlinedIcon className='text-gray-400' />
                    <Typography className='text-gray-400'>
                        Out Station
                    </Typography>
                </Button>
            </div>

            <div className='flex items-center justify-around my-[30px]'>
                <Typography>
                    Travel to Airport
                </Typography>
                <Switch defaultChecked />
                <Typography>
                    Travel from Airport
                </Typography>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <TextField style={box_style} fullWidth placeholder="Pick Up location" id="fullWidth"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField style={box_style} fullWidth placeholder="Drop location" id="fullWidth"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <div style={box_style} className='flex flex-col gap-[7px] box-border py-[7px] px-[5px]'>
                    <div >
                        <h3 className='flex gap-[5px] items-center mt-[3px] '>
                            <GroupIcon /> 
                            <span>Passengers</span>
                        </h3>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col justify-center items-center'>
                            <p>Adult <span>(16+yrs)</span></p>
                            <p className=' flex flex-row justify-center items-center '><RemoveCircleOutlineOutlinedIcon className='text-gray-600' /><span>0</span><AddCircleOutlineOutlinedIcon className='text-gray-600' /></p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p>Children <span>(2-15yrs)</span></p>
                            <p className=' flex flex-row justify-center items-center'><RemoveCircleOutlineOutlinedIcon className='text-gray-600' /><span>0</span><AddCircleOutlineOutlinedIcon className='text-gray-600' /></p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p>Pets</p>
                            <p className=' flex flex-row justify-center items-center'><RemoveCircleOutlineOutlinedIcon className='text-gray-600'/><span>0</span><AddCircleOutlineOutlinedIcon className='text-gray-600' /></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center mt-[20px]'>
                <Button className='w-[170px]' variant="contained">Search</Button>
            </div>
        </div>
    )
}

export default Trending_search_mobile
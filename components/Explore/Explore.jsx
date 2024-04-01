'use client'

import React from "react";
import ExploreImg from "../../public/maldivesisland-1-1@2x.png";
import Image from "next/image";
const Explore = () => {
  
  return (
    <div className="mq450:hidden">
      <section className='self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[180.9px] box-border  shrink-0 text-left text-[70px] text-primary-0 font-montserrat'>
        <div className='h-[580px] flex-1 bg-gray-200 max-w-full'>
          {/* <div className='absolute top-[0px] left-[0.6px] bg-gray-200 w-full hidden' /> */}
          <div className="flex flex-col justify-center items-center w-full h-full bg-[url('/maldivesisland-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <Image
              className='absolute top-[0px] left-[1.6px] w-[1700px] h-[400px] object-cover hidden'
              alt=''
              src={ExploreImg}
            />
            {/* <div className='absolute top-[0px] left-[0px] bg-gray-200 w-full h-full' /> */}
            <div className="flex flex-col">
            <h1 className='m-0  text-inherit font-bold font-inherit  mq450:text-23xl mq900:text-[56px]'>
              Not sure where to go? Perfect.
            </h1>
            <h1 className='m-0 self-end text-[53px] uppercase font-bold font-view-all  mq450:text-13xl mq900:text-23xl'>
              Explore !!
            </h1>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;

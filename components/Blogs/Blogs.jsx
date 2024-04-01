'use client'

import React from "react";

const Blogs = () => {

  const blog_content = [
    {
      id: 1,
      blog_text: `Unveiling the Enchanting Beauty of Ooty: A Journey into Paradise`,
      sub_text: `Welcome to Ooty, the picturesque Queen of Hill Stations! Are you planning a trip to this enchanting destination? Look no further than Trippr, your ultimate companion for an unforgettable...`,
      blog_image: `/image-28@2x.png`,
    },
    {
      id: 2,
      blog_text: `Wayanad Chronicles : Immerse yourself in the rich tapestry of Nature.`,
      sub_text: `This summer, escape to Wayanad's peaceful surroundings and set out on an unforgettable trip with Trippr. Wayanad, in Kerala's Western Ghats, is a haven for those who enjoy the outdoors. `,
      blog_image: `/image-29@2x.png`,
    },
    {
      id: 3,
      blog_text: `Coorg: Where misty mountains and coffee plantations create magic.`,
      sub_text: `It's the ideal time to go off on an amazing tour among nature's wonders as summer embraces the picturesque hills of Coorg. Your dependable travel companion, Trippr,..`,
      blog_image: `/image-30@2x.png`,
    },
    {
      id: 4,
      blog_text: `Munnar Delights: Discovering the Idyllic tea estates & Pristine lakes.`,
      sub_text: ` Are you prepared to travel to Munnar to see its stunning landscapes? </br> Your dependable travel partner, Trippr, welcomes you to...`,
      blog_image: `/image-30-1@2x.png`,
    },
    {
      id: 5,
      blog_text: `Convenient Travel with Trippr car rental booking na tempo travellers on rent.`,
      sub_text: `When it comes to airport transfers, reliability, and exceptional service are of utmost importance...`,
      blog_image: `/image-30-2@2x.png`,
    },
    
  ]

  return (
    <div className=" mq450:hidden">
      <section className='self-stretch flex flex-row items-start justify-center pt-0 pb-[128.1px] box-border max-w-full shrink-0 text-left text-26xl text-heading-color font-montserrat'>
        <div className=' flex flex-col items-start justify-start gap-[21px] max-w-full'>
          <div className='self-stretch flex flex-row items-start justify-center py-0 px-5'>
            <h1 className='m-0 relative text-inherit font-bold font-inherit z-[8] mq450:text-8xl mq900:text-17xl'>
              Our Blogs
            </h1>
          </div>
          <h2 className=' box-border px-[150px] pb-[80px] m-0 self-stretch relative text-11xl font-medium font-inherit text-small-card-color text-center z-[8] mq450:text-lg mq900:text-5xl'>
            From awe-inspiring landscapes to vibrant cultures, we uncover the
            beauty and diversity that our planet has to offer.
          </h2>
          <div className=' w-[100%] flex flex-row items-start justify-start pt-0 px-0 pb-[8.6px] box-border max-w-full z-[8]'>
            <div className=' w-[97%] mx-auto overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[37px] [debug_commit:f6aba90]'>

              {
                blog_content && blog_content.map((data, index) => {
                  return (
                  
                      <div key={data.id} className='w-[304px] shrink-0 flex flex-col items-start justify-start gap-[18px] max-w-full'>
                        <img
                          className='self-stretch h-[230px] rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover'
                          loading='lazy'
                          alt=''
                          src={data.blog_image}
                        />
                        <h3 className='m-0 w-[380px] relative text-6xl font-bold font-inherit inline-block max-w-full box-border pr-5 mq450:text-xl'>
                          {data.blog_text}
                        </h3>
                        <div className='self-stretch text-gray-400 text-sm'>{data.sub_text}</div>
                        <div className=' self-baseline h-[24.1px] flex flex-rowt items-center justify-around py-0 pr-5 pl-0 box-border gap-[2px] text-button-color font-open-sans'>
                          <b className='text-lg inline-block min-w-[81px]'>{`Read More `}</b>
                          <img
                            className='h-[24.1px] w-[24.1px] relative object-cover'
                            alt=''
                            src='/mask-group-7@2x.png'
                          />
                        </div>
                      </div>
                  
                  )
                })
              }

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blogs;

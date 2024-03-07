import React from 'react';
import AVTR1 from'../assests/avatar1.jpg'
import AVTR2 from "../assests/avatar2.jpg"
import AVTR3 from '../assests/avatar3.jpg'
import AVTR4 from '../assests/avatar4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const data=[
    {
      avatar:AVTR1,
      name:'Eric Matthew',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
    },
    {
      avatar:AVTR2,
      name:'Eric Matthew',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
    },
    {
      avatar:AVTR3,
      name:'Eric Matthew',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
    },
    {
      avatar:AVTR4,
      name:'Eric Matthew',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
    },
  ]
  

export default function Clients() {
  return (
    <>
    <section className='w-full block text-center text-white'>
    <h5 className='text-xl font-bold '>Review From clients</h5>
    <h2 className='text-lg font-semibold'>Testimonals</h2>
    
      <Swiper className='w-[50%] pb-16 border-white'
       navigation={{clickable:true}}
       spaceBetween={40}
        modules={[Navigation]} 
        slidesPerView={1}>
            {
        data.map(({avatar,name,review},index)=>{
            return (
                <SwiperSlide  key={index}className="text-center p-16 rounded-xl   border-2 ">
                  <div className="w-16 aspect-auto overflow-hidden rounded-[50%] ">
                    <img src={avatar} alt='Avatar'/>
      
                  </div>
                  <h5 className="text-xl p-5">{name}</h5>
                  <small className="font-semibold block w-[80%]">{review}</small>
                </SwiperSlide>
                )
            })
          }
      </Swiper>
     
      </section>
    </>
  );
}

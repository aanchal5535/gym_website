import React from 'react';
import Image2 from '../assests/workout0232337262lin1556013847.jpg'


const Services = () => {
  return (
    
      <div className="w-full flex items-center justify-around bg-gray-700 text-white ">
         <div className="w-full flex flex-col items-start justify-center m-5 ">
                <h1 className='text-5xl font-bold my-4 '>Why Should People Choose Fitnesxia Services</h1>
                <div className=''>
                  <div className=' py-2'>
                    <h3 className='text-xl font-semibold'> Personal Training</h3>
                    <p className='text-lg font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nisi cupiditate! </p>
                  </div>
                  <div className='py-2'>
                    <h3 className='text-xl font-semibold ' > Expert Trainer</h3>
                    <p className='text-lg font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nisi cupiditate! </p>
                  </div>
                  <div className='py-2'>
                    <h3 className='text-xl font-semibold' >Flexible Time</h3>
                    <p className='text-lg font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nisi cupiditate! </p>
                  </div>
                </div>
                <button type='submit' className='my-4 bg-red-500 text-white text-lg p-3 border-red-500 rounded hover:text-red-500 hover:bg-white'>Free Trial Today</button>
              
        </div>
        <div className='w-full h-full flex items-center justify-center m-5'>
            <img src={Image2} alt="gardener" className='border-0 rounded-[50%] w-[500px] h-[500px] m-4'></img>
        </div>
       
      </div>
   
  )
}

export default Services

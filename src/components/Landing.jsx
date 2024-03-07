import React from 'react';
import Image1 from '../assests/wp3325897-removebg-preview.png'


const Landing = () => {
  return (
    
      <div className="w-full h-auto flex  items-center justify-around bg-gray-700 text-white  ">
        <div className="w-full flex flex-col items-center justify-between mt-28">
                <h1 className='text-5xl font-bold m-4'> GET HEALTHY BODY WITH THE PERFECT EXERCISES.</h1>
                <p className='font-xl m-4'>We are always there to help you to make a healthy  body and mind with our perfect exercises through the power of fitness.  </p>
                <button type='submit' className='m-4 bg-red-500 text-white text-lg p-3 border-red-500 rounded hover:text-red-500 hover:bg-white'>Get Started</button>
               <div>

               </div>
        </div>
        <div className='w-full h-auto mt-24'>
            <img src={Image1} alt="gardener" className='w-full'></img>
        </div>
      </div>
   
  )
}

export default Landing

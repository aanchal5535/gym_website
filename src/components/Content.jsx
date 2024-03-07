import React from 'react';
import Image2 from '../assests/workout0232337262lin1556013847.jpg'


const Content = () => {
  return (
    
      <div className="w-full flex  items-center justify-around bg-gray-700 text-white  ">
        <div className='w-full h-full'>
            <img src={Image2} alt="gardener" className='border-0 rounded-lg w-[800px] h-[500px]'></img>
        </div>
        <div className="w-full flex flex-col items-center justify-center m-5 ">
                <h1 className='text-5xl font-bold m-4'> Get Ready To Reach Your Fitness Goals.</h1>
                <p className='font-xl m-4'>We are always there to help you to make a healthy  body and mind with our perfect exercises through the power of fitness. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati saepe repellendus odit laudantium magnam rem libero itaque modi, animi illo nostrum, tenetur earum sapiente ea eum corrupti minima hic provident. </p>
                <button type='submit' className='m-4 bg-red-500 text-white text-lg p-3 border-red-500 rounded hover:text-red-500 hover:bg-white'>Free Trial Today</button>
               <div>

               </div>
        </div>
      </div>
   
  )
}

export default Content

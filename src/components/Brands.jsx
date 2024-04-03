import React from 'react';



const Brands = () => {
  return (
   
        <div className="bg-gray-700 w-full text-white flex items-center justify-around my-14">
            <div className=' font-semibold'>
            <h1 className='text-xl'>970K+ more </h1>
            <p className='text-lg'>Trusted Companies Partner</p>
            </div>
            <div className="flex items-center justify-around md:hidden lg:flex ">
                <div className="items-center ">
                <img src="https://i.ibb.co/Gfwzz1S/logo-godrej.png" alt="" className='pointer grayscale hover:grayscale-0'/>
                </div>
                <div className="items-center">
                <img src="https://i.ibb.co/vjrRZFM/logo-oppo.png" alt="" className='pointer grayscale hover:grayscale-0'/>
                </div>
                <div className="items-center">
                <img src="https://i.ibb.co/3zs234S/logo-coca-cola.png" alt="" className='pointer grayscale hover:grayscale-0'/>
                </div>
                
            </div>
        </div>

  )
}

export default Brands

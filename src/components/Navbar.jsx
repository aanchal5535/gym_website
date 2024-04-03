import React,{useState} from 'react'
import Logo from '../assests/images-removebg-preview.png'




const Navbar = () => {
 

 
  return (
   
   <nav className='w-full text-white flex items-center justify-between bg-gray-700 sticky t-0 '>
    <div className='flex  items-center justify-start p-1' >
      <a href="#home"> <img src={Logo} alt="app logo" className='w-24'/></a> 
    </div>
    <ul className='flex justify-center items-start  list-none md:hidden lg:flex'>
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><a href='/#home' >Home</a></li>
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><a href='/#Content' >About us</a></li>
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><a href='/#programs' >Programs</a></li>
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><a href="/#pricing" >Membership</a></li>
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><a href="/testimonal">Testimonals</a></li>
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><a to="/contact">Contact</a></li>
    </ul>
   
    <div className='flex justify-end items-center font-medium text-lg pr-2'>
    <button className=' bg-red-500 text-white p-2 border rounded hover:text-red-500 hover:bg-white'>Signup </button>

      </div>
      
   </nav>
   
  )
}

export default Navbar

import React,{useState} from 'react'
import Logo from '../assests/images-removebg-preview.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Contact from './Contact'
import Pricing from './Pricing';




const Navbar = () => {
  const [toggleMenu,setToggleMenu]=React.useState(false);
  const [activeNav, setActiveNav]=useState('#')

 
  return (
   <Router>
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
      <li className='mx-2 my-4 pointer text-lg font-medium hover:text-red-600 '><Link to="/contact">Contact</Link></li>
    </ul>
    <Routes>
      <Route path="/contact/*" element={<Contact/>} />
      
    </Routes>
    <div className='flex justify-end items-center font-medium text-lg pr-2'>
    <button className=' bg-red-500 text-white p-2 border rounded hover:text-red-500 hover:bg-white'>Signup </button>

      </div>
      
      <div className="hidden pointer  text-left text-white md:flex">
        <GiHamburgerMenu color='#000' fontSize={30} onClick={() => setToggleMenu(true)}/>


        
        {toggleMenu && (
        <div className="fixed top-0 left-0 w-full h-[90%] bg-gray-700 text-white flex flex-col z-10 font-semibold text-lg ease-in ">
          <RxCross1 fontSize={30} className="text-3xl absolute top-5 right-5" onClick={() => setToggleMenu(false)}/>
      
          <ul className="list-none ">
              <li className='m-8 pointer text-xl text-center'><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='m-8 pointer text-xl text-center'><a href="#services" onClick={() => setToggleMenu(false)}>About Us</a></li>
              <li className='m-8 pointer text-xl text-center'><a href="#blog" onClick={() => setToggleMenu(false)}>Programs</a></li>
              <li className='m-8 pointer text-xl text-center'><a href="#contact" onClick={() => setToggleMenu(false)}>Membership</a></li>
              <li className='m-8 pointer text-xl text-center'><a href="#profile" onClick={() => setToggleMenu(false)}>Testimonals</a></li>
              <li className='m-8 pointer text-xl text-center'><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>

          </div>
            )}
      </div>
   </nav>
   </Router>
  )
}

export default Navbar

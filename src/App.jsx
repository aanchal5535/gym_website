import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Brands from './components/Brands'
import Content from './components/Content'
import Programs from './components/Programs'
import Services from './components/Services'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Clients from './components/Clients'






const App = () => {
  return (
   <div className='bg-gray-700 '>
    <div className='mx-32 '>
     <Navbar/>
     <Landing/>
     <Brands/>
     <Content/>
     <Programs/>
     <Services/>
     <Pricing/>
     <Clients/>
     <Footer/>
     </div>
    </div>
  )
}

export default App

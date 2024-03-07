import React from 'react'

import {MdOutlineEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';

const Contacts = () => {
  return (
    <section className="w-[60%]   text-white mt-10">
        <div className='flex flex-col items-center justify-center'>
      <h5 className='text-xl font-bold'>Get In Touch</h5>
      <h2 className='text-lg font-semibold'>Contact Me</h2>
      </div>
      <div className="w-full  flex items-center justify-around mt-8 text-white ">
        <div className="flex flex-col ">
          <article className="mb-3 p-5 rounded-xl bg-gray-600 text-center ease-in-out border-2 border-solid hover:bg-transparent hover:border-white hover:cursor-default">
           <div className='flex items-center justify-center'> <MdOutlineEmail className='text-xl m-1.5'/>
            <h4>Email</h4></div>
            <h5>aanchalsubedi005@gmail.com</h5>
            <a href='mailto:aanchalsubedi005@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="p-5 mb-3 rounded-xl bg-gray-600 text-center ease-in-out border-2 border-solid hover:bg-transparent hover:border-white hover:cursor-default">
          <div className='flex items-center justify-center'> <BsMessenger className='text-xl m-1.5'/>
            <h4>Messenger</h4></div>
            <h5>Aanchal Subedi</h5>
            <a href='https://m.me/aanchal.subedi.967' target='_blank'>Send a message</a>
          </article>
          <article className="p-5 mb-3 rounded-xl bg-gray-600 text-center ease-in-out border-2 border-solid hover:bg-transparent hover:border-white hover:cursor-default">
          <div className='flex items-center justify-center'> <AiFillLinkedin className='text-xl m-1.5'/>
            <h4>LinkedIn</h4></div>
            <h5>Aanchal Subedi</h5>
            <a href='https://www.linkedin.com/in/aanchal-subedi-356860205/' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="" className='flex flex-col gap-5'>
          <input type="text" name='name' placeholder='Your Full Name' required className='w-full p-6 rounded-lg bg-transparent border-2 '/>
          <input type="email" name='email' placeholder='Your Email ' required className='w-full p-6 rounded-lg bg-transparent border-2' />
          <textarea name="message" rows="7" placeholder='Your Message' required className='w-full p-6 rounded-lg bg-transparent border-2 '></textarea>
          <button type='submit' className=' bg-red-500 text-white p-2 border rounded hover:text-red-500 hover:bg-white'>Send Message</button>
        </form>
      </div>
    </section>
      
    
  )
}

export default Contacts;

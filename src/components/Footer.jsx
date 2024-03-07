import React from 'react';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {FiTwitter} from 'react-icons/fi';
import {FiYoutube} from 'react-icons/fi';
import IOS from '../assests/ios.jpg';
import ANDROID from'../assests/play.svg';


const Footer = () => {
  return (
    <section className='w-full m-4 text-white'>
        <div className="flex flex-wrap justify-between">
            <div class="p-8">
                <div class="mt-2 flex flex-col">
                    <img src={IOS} alt=""  className='w-36'/>
                    <img src={ANDROID} alt="" className='w-36' />
                </div>
            </div>
            <div className="w-auto p-8">
                <h3 className="mb-4 font-bold ">Company</h3>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#home'>About Us</a></li>
                        <li><a href='#home'>Programs</a></li>
                        <li><a href='#home'>Membership</a></li>
                        <li><a href='#home'>Testimonals</a></li>
                        <li><a href='#home'>Contact</a></li>
                    </ul>
            </div>
            <div className="w-auto p-8">
                    <h3 className="mb-4 font-bold">Services</h3>
                    <ul>
                        <li><a href='#home'>Body Building</a></li>
                        <li><a href='#home'>Weight training</a></li>
                        <li><a href='#home'>Join Partnership</a></li>
                    </ul>
            </div>
            <div className="w-auto p-8">
                    <h3 className="mb-4 font-bold">Forums</h3>
                    <ul>
                        <li><a href='#home'>Community</a></li>
                        <li><a href='#home'>FAQ</a></li>

                    </ul>
            </div>
            <div className="w-auto p-8">
                    <h3 className="mb-4 font-bold">Contact</h3>
                    <ul>
                        <li>NEPAL Gym Center.</li>
                        <li>Gedung Sentibul 1,J.H.R</li>
                        <li>Bharatpur-11, Chitwan,Nepal</li>
                        <li>Baneshwor,Kathmandu,Nepal</li>
                        <li>Prithvi-chowk,Pokhara,Nepal</li>
                        <li className='flex'><AiOutlineWhatsApp className='my-1.5'/> +512 612 3456 7890</li>
                        <li className='flex'><AiOutlineMail className='my-1.5'/> hello@furniture.com</li>
                    </ul>
            </div>
            <div>
                
            </div>
        </div>
        <hr/>
        <div className="flex items-center justify-between p-4">
            <div className="flex gap-7">
                <p > &copy;Gardener 2022.All rights reserved</p>
                <p > Privacy Policy</p>
                <p > Terms and Conditions</p>
            </div>
            <div className="flex  justify-right gap-3">
                <BsInstagram className='pointer'/>
                <RiFacebookCircleLine className='pointer'/>
                <FiTwitter className='pointer'/>
                <FiYoutube className='pointer'/>
            </div>
        </div>    
    </section>
  )
}

export default Footer

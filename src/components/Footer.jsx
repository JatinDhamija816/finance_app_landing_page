import React from 'react'
import logo from '../images/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
    return (
        <div className='my-10'>
            <div className=' flex justify-between mx-5 lg:flex-wrap'>
                <ul className=''>
                    <li className='flex'>
                        <img src={logo} className='' alt="" />
                        <h1 className='font-bold text-2xl mx-1'>uifry</h1>
                    </li>
                    <li className='flex my-2'>
                        <EmailIcon /> <p className='mx-2'>Help@Frybix.Com</p>
                    </li>
                    <li className='flex my-2'>
                        <PhoneIcon />
                        <p className='mx-2'>123456789</p>
                    </li>
                </ul>
                <ul>
                    <li className='text-2xl font-semibold'>Links</li>
                    <li className='my-2'>Home</li>
                    <li className='my-2'>About Us</li>
                    <li className='my-2'>Bookings</li>
                    <li className='my-2'>Blog</li>
                </ul>
                <ul>
                    <li className='text-2xl font-semibold'>Legal</li>
                    <li className='my-2'>Terms Of Use</li>
                    <li className='my-2'>Privacy Policy</li>
                    <li className='my-2'>Cookie Ploicy</li>
                </ul>
                <ul>
                    <li className='text-2xl font-semibold'>Product</li>
                    <li className='my-2'>Take Tour</li>
                    <li className='my-2'>Live Chat</li>
                    <li className='my-2'>Reviews</li>
                </ul>
                <ul>
                    <li className='text-2xl font-semibold'>Newsletter</li>
                    <li className='my-2'>StayUpToDate</li>
                    <li className='my-2 border'>
                        <input type="text" placeholder='email' className='bg-gray-100 px-5 py-3 border-none outline-none' />
                        <button className='bg-black text-white px-5 py-3 '>Subscribe</button>
                    </li>
                </ul>
            </div >
            <div>
                <hr className='border-2 my-3 w-4/5 mx-auto' />
                <p className='text-center my-2'>Copyright 2022 Uifry.Com All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
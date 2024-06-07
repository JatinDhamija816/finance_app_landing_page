import React from 'react'
import logo from '../images/logo.png'
const Navbar = () => {
    return (
        <div className=''>
            <nav className='flex mt-8 md:flex-col md:mx-auto '>
                <div className='px-10 flex justify-center items-center '>
                    <img src={logo} className='' alt="" />
                    <h1 className='font-bold text-2xl'>uifry</h1>
                </div>
                <div className='flex justify-between w-full'>
                    <div className=' flex '>
                        <ul className='flex items-center text-md'>
                            <li className='px-3 font-semibold  hover:text-red-600 md:pr-2'>Home</li>
                            <li className='px-3 font-semibold  hover:text-red-600 md:pr-2'>AboutUs</li>
                            <li className='px-3 font-semibold  hover:text-red-600 md:pr-2'>Pricing</li>
                            <li className='px-3 font-semibold  hover:text-red-600 md:pr-2'>Features</li>
                        </ul>
                    </div>
                    <div className='md:m'>
                        <button className='px-6 bg-black text-white py-2'>Download</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
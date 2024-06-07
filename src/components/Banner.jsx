import React from 'react'
import banner from '../images/banner.png'
import apple from '../images/appleLogo.png'
import lines from '../images/Group 35905.png'

const Banner = () => {
    return (
        <div className='border bg-black flex justify-center items-center mx-5 my-20'>
            <div className='lg:hidden'>
                <img src={lines} className='absolute' alt="" />
            </div>
            <div className='w-1/2 ml-10 lg:w-full'>
                <h1 className='capitalize text-white font-bold text-4xl tracking-tighter my-5' >Ready to get started?</h1>
                <p className='text-white tracking-wider my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit dignissimos facilis deleniti mollitia repudiandae beatae sed</p>
                <button className='bg-white flex px-5 py-3 rounded-md my-5 items-center'><span className='mx-2'>Download App</span> <img src={apple} alt="" /></button>
            </div>
            <div className='w-1/2 lg:hidden'>
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default Banner

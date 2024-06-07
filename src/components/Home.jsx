import React from 'react'
import homeRings from '../images/homeRings.png'
import I3 from '../images/I3.png'
import I2 from '../images/I2.png'
import I1 from '../images/I1.png'
import sticker from '../images/homeSticker.png'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
const Home = () => {
    return (
        <div className='flex h-screen md:flex-col'>
            <div className='w-1/2 ml-16 lg:w-full md:ml-0'>
                <div>
                    <h1 className='mt-16 text-6xl font-bold tracking-wide lg:text-5xl'>Make the Best Financial Decisions</h1>
                    <p className='mt-5 text-lg tracking-widest'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deserunt doloribus nihil tempore illum quam atque culpa dolor a aliquam</p>
                </div>
                <div className='mt-5'>
                    <button className='px-6 bg-black text-white py-2'>Get Started</button>
                    <button className='px-6 py-2 text-xl'> <PlayCircleFilledWhiteOutlinedIcon /> Watch Video</button>
                </div>
                <div>
                    <img className='w-2/3 md:mt-5' src={sticker} alt="" />
                </div>
            </div>
            <div className='w-1/2 flex justify-center md:w-full lg:hidden '>
                <img className='absolute h-svh' src={homeRings} alt="" />
                <img src={I3} className='h-svh absolute ml-40 mt-24' alt="" />
                <img src={I2} className='h-svh absolute ml-20 mt-14' alt="" />
                <img src={I1} className='h-svh absolute mt-3 mr-12' alt="" />
            </div>
        </div>
    )
}

export default Home

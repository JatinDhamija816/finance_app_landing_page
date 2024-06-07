import React from 'react'
import Ring from '../images/featuresRing.png'
import star from '../images/featuresStar.png'
import Budget from '../images/featuresBudget.png'
import Square from '../images/featuresSquare.png'

const Features = () => {
    return (
        <div className='flex  justify-between items-center md:mt-16 md:flex-col'>
            <div className='w-1/2 lg:hidden'>
                <img src={Ring} alt="" />
            </div>
            <div className='w-1/2 lg:w-full'>
                <div>
                    <h1 className='text-red-600 text-xl uppercase '>Features</h1>
                    <p className='font-bold text-5xl'>Uifry Premium</p>
                </div>
                <div>
                    <ul>
                        <li className='my-10'>
                            <p className='flex'><img src={star} alt="" /> <span className='px-2 font-bold'>Budgeting Intervals</span></p>
                            <p className='tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure reprehenderit, dolorem placeat, quidem maxime nam eveniet, ipsa at veniam harum officiis ducimus natus deleniti.</p>
                        </li>
                        <li className='my-10'>
                            <p className='flex'><img src={Budget} alt="" /> <span className='px-2 font-bold'>Budgeting Intervals</span></p>
                            <p className='tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure reprehenderit, dolorem placeat, quidem maxime nam eveniet, ipsa at veniam harum officiis ducimus natus deleniti.</p>
                        </li>
                        <li className='mt-10'>
                            <p className='flex'><img src={Square} alt="" /> <span className='px-2 font-bold'>Budgeting Intervals</span></p>
                            <p className='tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure reprehenderit, dolorem placeat, quidem maxime nam eveniet, ipsa at veniam harum officiis ducimus natus deleniti.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features

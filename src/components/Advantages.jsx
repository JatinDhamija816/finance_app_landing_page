import React from 'react'
import bell from '../images/advantageBell.png'
import BellPhone from '../images/advantageBellPhone.png'
import star from '../images/advantageStar.png'


const Advantages = () => {
    return (
        <div className=''>
            <div className='flex items-center md:flex-col '>
                <div className='w-1/2 md:w-full'>
                    <h1 className='text-red-600 uppercase font-bold my-2 mt-8'>Advatnages</h1>
                    <p className='font-extrabold text-4xl my-2'>Why Choose Uifry?</p>
                    <p className='flex items-center my-1 md:mt-5'><img src={bell} alt="" /><span className='mx-2 font-bold text-lg'>Clever Notifications</span></p>
                    <p className='tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum ipsa numquam dolorum. Maiores numquam nulla voluptas alias aspernatur nostrum dignissimos atque sapiente corporis. Ab exercitationem et aperiam est molestiae?</p>
                </div>
                <div className='w-1/2 md:w-full'>
                    <img src={BellPhone} alt="" />
                </div>
            </div>
            <div className='flex items-center md:flex-col'>
                <div className='w-1/2 md:hidden'>
                    <img src={BellPhone} alt="" />
                </div>
                <div className='w-1/2 md:w-full'>
                    <p className='flex items-center my-1'><img src={star} alt="" /><span className='mx-2 font-bold text-lg'>Fully Customizable</span></p>
                    <p className='tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum ipsa numquam dolorum. Maiores numquam nulla voluptas alias aspernatur nostrum dignissimos atque sapiente corporis. Ab exercitationem et aperiam est molestiae?</p>
                </div>
            </div>
        </div>
    )
}

export default Advantages

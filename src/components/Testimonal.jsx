import React from 'react'
import testimonal from '../images/testimonal.png'
import people from '../images/People.png'
const Testimonal = () => {
    return (
        <div className=''>
            <div className='w-3/5 mx-auto lg:w-full lg:my-10'>
                <h1 className='uppercase text-center font-medium text-lg'>Testimonal</h1>
                <p className='text-center font-bold text-4xl'>What Our Users Say About Us? </p>
            </div>
            <div className='flex items-center md:flex-col'>
                <div className='w-1/2 md:w-full'>
                    <img src={testimonal} className='' alt="" />
                </div>
                <div className='w-1/2 px-10 lg:w-full'>
                    <h1 className='capitalize font-bold text-2xl'>The Best Financial accounting app ever! </h1>
                    <p className='tracking-widest my-3'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error eos veritatis magni inventore quaerat, dicta exercitationem quisquam commodi non nesciunt quam facere culpa est natus voluptates laboriosam modi optio sit corrupti maiores similique? Obcaecati laboriosam molestiae dolorem saepe! Animi reprehenderit molestias facere nemo excepturi eum. Sapiente qui odit olestiae?"</p>
                    <img src={people} alt="" />
                    <h1 className='font-bold text-xl my-5'>Nick Jonas</h1>
                </div>
            </div>
        </div>
    )
}

export default Testimonal

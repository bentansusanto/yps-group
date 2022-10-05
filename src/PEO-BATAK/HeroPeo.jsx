import React from 'react'
import BgPeo from '../assets/bg-hero-peo.png'
import './peo.css'
const HeroPeo = () => {
    const title = 'We Help Make Your Dreams Come True.';
    const subtitle = 'Leave it to us, we will sort things out.';
  return (
    <div className='mb-40'>
        <div className="hero-section ">
            <div className="content grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-10 justify-items-center lg:mx-36 md:mx-20 mx-8 lg:mt-32 mt-20">
                <div className="desc">
                    <h1 className='lg:text-[5rem] md:text-[4rem] text-[3.5rem] md:text-left text-center'>{title}</h1>
                    <h4 className='text-[1.2rem] md:text-left text-center'>{subtitle}</h4>
                </div>
                <img src={BgPeo} alt="" className='lg:w-[60%] md:w-[70%] w-[50%]'/>
            </div>
        </div>
    </div>
  )
}

export default HeroPeo
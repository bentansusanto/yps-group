import React from 'react'
import './wedding.css'
const HeroWedding = () => {
    const title = 'We Help Make Your Dreams Come True.';
    const subtitle = 'Leave it to us, we will sort things out.'
  return (
    <div className='-mt-24 mb-40'>
        <div className="hero-section w-full h-[100vh] text-center py-[20rem] text-white">
          <div className='mx-8'>
            <h1 className='md:text-[5.5rem] text-[4rem] lg:w-[60%] md:w-[70%] mx-auto'>{title}</h1>
            <h4 className='md:text-[1.5rem] text-[1.2rem] mx-auto'>{subtitle}</h4>
          </div>
        </div>
    </div>
  )
}

export default HeroWedding